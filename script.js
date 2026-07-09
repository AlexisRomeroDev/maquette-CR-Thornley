/* =========================================================================
   Catalogue raisonné numérique — interactions (JavaScript natif)
   Aucune bibliothèque externe.
     1. Sommaire repliable (mobile / tablette)
     2. Chapitre actif au défilement
     3. Notes interactives (popover, le lecteur ne quitte pas le texte)
     4. Visionneuse d'images (clic, ESC, clic hors image, clavier)
   ========================================================================= */
(function () {
  'use strict';

  /* 1. Sommaire repliable ------------------------------------------------ */
  var toc = document.getElementById('toc');
  var toggle = document.querySelector('.toc-toggle');

  function closeToc() {
    toc.classList.remove('is-open');
    document.body.classList.remove('toc-open');
    toggle.setAttribute('aria-expanded', 'false');
  }
  function openToc() {
    toc.classList.add('is-open');
    document.body.classList.add('toc-open');
    toggle.setAttribute('aria-expanded', 'true');
  }

  toggle.addEventListener('click', function () {
    if (toc.classList.contains('is-open')) { closeToc(); } else { openToc(); }
  });

  // Sur mobile, refermer le sommaire après un clic sur un lien
  toc.addEventListener('click', function (e) {
    if (e.target.closest('a') && window.matchMedia('(max-width: 1099px)').matches) {
      closeToc();
    }
  });

  /* 2. Chapitre actif au défilement -------------------------------------- */
  /* Le menu est identique sur les 3 pages : on ne suit au défilement que les
     liens dont la cible se trouve sur la page courante. */
  var currentFile = (location.pathname.split('/').pop() || 'index.html');
  var links = Array.prototype.slice.call(toc.querySelectorAll('a[href]'));
  var byId = {};        // id de section -> lien correspondant (page courante)
  var sections = [];

  links.forEach(function (a) {
    var href = a.getAttribute('href');
    var hashPos = href.indexOf('#');
    var file = (hashPos === -1 ? href : href.slice(0, hashPos)) || currentFile;
    var hash = hashPos === -1 ? '' : href.slice(hashPos + 1);

    if (file !== currentFile) { return; }   // lien vers une autre page

    if (!hash) {
      a.classList.add('is-active');          // lien de la page courante, sans ancre
      return;
    }
    var el = document.getElementById(hash);
    if (el) { byId[hash] = a; sections.push(el); }
  });

  function setActive(id) {
    Object.keys(byId).forEach(function (k) { byId[k].classList.remove('is-active'); });
    if (byId[id]) { byId[id].classList.add('is-active'); }
  }

  if ('IntersectionObserver' in window) {
    var visible = {};
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        visible[entry.target.id] = entry.isIntersecting ? entry.intersectionRatio : 0;
      });
      // Choix du chapitre le plus visible
      var best = null, bestRatio = 0;
      sections.forEach(function (s) {
        var r = visible[s.id] || 0;
        if (r > bestRatio) { bestRatio = r; best = s.id; }
      });
      if (best) { setActive(best); }
    }, { rootMargin: '-30% 0px -55% 0px', threshold: [0, 0.25, 0.5, 1] });

    sections.forEach(function (s) { observer.observe(s); });
  }

  /* 3. Notes interactives (popover) -------------------------------------- */
  var popover = null;

  function removePopover() {
    if (popover) { popover.remove(); popover = null; }
    document.removeEventListener('click', onDocClickForNote, true);
  }

  function onDocClickForNote(e) {
    if (popover && !popover.contains(e.target) && !e.target.classList.contains('note-ref')) {
      removePopover();
    }
  }

  function showNote(ref) {
    removePopover();
    var target = document.getElementById(ref.dataset.note);
    if (!target) { return; }

    popover = document.createElement('div');
    popover.className = 'note-popover';
    popover.setAttribute('role', 'tooltip');
    // Contenu de la note, sans le lien de retour ni le numéro « 1. »
    var clone = target.cloneNode(true);
    var back = clone.querySelector('.note-back'); if (back) { back.remove(); }
    var num = clone.querySelector('span'); if (num) { num.remove(); }
    popover.innerHTML = clone.innerHTML.trim();
    document.body.appendChild(popover);

    // Positionnement sous l'appel de note, en restant dans le viewport
    var r = ref.getBoundingClientRect();
    var pw = popover.offsetWidth;
    var top = window.scrollY + r.bottom + 8;
    var left = window.scrollX + r.left;
    var maxLeft = window.scrollX + document.documentElement.clientWidth - pw - 12;
    if (left > maxLeft) { left = maxLeft; }
    if (left < window.scrollX + 12) { left = window.scrollX + 12; }
    popover.style.top = top + 'px';
    popover.style.left = left + 'px';

    setTimeout(function () {
      document.addEventListener('click', onDocClickForNote, true);
    }, 0);
  }

  document.querySelectorAll('.note-ref').forEach(function (ref) {
    ref.addEventListener('click', function (e) {
      e.preventDefault();      // le lecteur ne quitte jamais le texte
      showNote(ref);
    });
  });

  /* 4. Visionneuse (lightbox) -------------------------------------------- */
  /* Optionnelle : certaines pages (présentation, bibliographie) n'ont ni
     figures ni surcouche visionneuse. */
  var images = Array.prototype.slice.call(document.querySelectorAll('figure img'));
  var lb = document.getElementById('lightbox');

  if (lb && images.length) {
    var lbImg = lb.querySelector('.lightbox__img');
    var lbCap = lb.querySelector('.lightbox__caption');
    var current = 0;

    var captionFor = function (img) {
      var fig = img.closest('figure');
      var cap = fig && fig.querySelector('figcaption');
      return cap ? cap.textContent.trim() : (img.alt || '');
    };

    var openLightbox = function (index) {
      current = index;
      var img = images[current];
      lbImg.src = img.currentSrc || img.src;
      lbImg.alt = img.alt || '';
      lbCap.textContent = captionFor(img);
      lb.classList.add('is-open');
      document.body.style.overflow = 'hidden';
    };

    var closeLightbox = function () {
      lb.classList.remove('is-open');
      lbImg.src = '';
      document.body.style.overflow = '';
    };

    var step = function (delta) {
      current = (current + delta + images.length) % images.length;
      openLightbox(current);
    };

    images.forEach(function (img, i) {
      img.addEventListener('click', function () { openLightbox(i); });
    });

    lb.querySelector('.lightbox__close').addEventListener('click', closeLightbox);
    lb.querySelector('.lightbox__prev').addEventListener('click', function (e) { e.stopPropagation(); step(-1); });
    lb.querySelector('.lightbox__next').addEventListener('click', function (e) { e.stopPropagation(); step(1); });

    // Clic hors de l'image (sur le fond)
    lb.addEventListener('click', function (e) {
      if (e.target === lb) { closeLightbox(); }
    });

    // Navigation clavier propre à la visionneuse
    document.addEventListener('keydown', function (e) {
      if (!lb.classList.contains('is-open')) { return; }
      if (e.key === 'Escape') { closeLightbox(); }
      else if (e.key === 'ArrowLeft') { step(-1); }
      else if (e.key === 'ArrowRight') { step(1); }
    });
  }

  // Échap ferme la note ouverte et le sommaire (hors visionneuse)
  document.addEventListener('keydown', function (e) {
    if (e.key !== 'Escape') { return; }
    if (lb && lb.classList.contains('is-open')) { return; }
    removePopover();
    if (toc.classList.contains('is-open')) { closeToc(); }
  });
})();
