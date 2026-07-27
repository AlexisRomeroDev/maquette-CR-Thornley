/* =========================================================================
   Catalogue raisonné numérique — interactions (JavaScript natif)
   Aucune bibliothèque externe.
     1. Sommaire escamotable (desktop et mobile)
     2. Chapitre actif au défilement
     3. Notes interactives (popover, le lecteur ne quitte pas le texte)
     4. Visionneuse d'images (clic, ESC, clic hors image, clavier)
     5. Apparition du menu sous le hero (accueil, desktop)
     6. Recherche (filtre à la frappe, données d'exemple)
     7. Formulaire de contact (maquette : aucun envoi)
   ========================================================================= */
(function () {
  'use strict';

  /* Passerelles entre parties (déclarées ici, affectées plus bas) :
       majReveal        — partie 5, rappelée par la recherche qui masque le hero
       rechercheActive  \_ partie 6, consultées par la chaîne Échap définie
       effacerRecherche /  avant elles. */
  var majReveal = null, rechercheActive = null, effacerRecherche = null;

  /* 1. Sommaire escamotable ---------------------------------------------- */
  /* Deux régimes, un seul bouton :
       desktop — colonne ouverte par défaut, repli mémorisé d'une page à l'autre
                 (7 fichiers HTML distincts, donc rechargement à chaque lien) ;
       mobile  — panneau en calque, fermé par défaut, refermé après un clic. */
  var root = document.documentElement;
  var toc = document.getElementById('toc');
  var toggle = document.querySelector('.toc-toggle');
  var STORE = 'toc-collapsed';
  var desktopMq = window.matchMedia('(min-width: 1100px)');

  function isCollapsed() { return root.classList.contains('toc-collapsed'); }

  function syncToggle() {
    var shown = desktopMq.matches ? !isCollapsed() : toc.classList.contains('is-open');
    toggle.setAttribute('aria-expanded', shown ? 'true' : 'false');
  }

  function closeToc() {
    toc.classList.remove('is-open');
    document.body.classList.remove('toc-open');
    syncToggle();
  }
  function openToc() {
    toc.classList.add('is-open');
    document.body.classList.add('toc-open');
    syncToggle();
  }
  function setCollapsed(state) {
    root.classList.toggle('toc-collapsed', state);
    // Le <head> relit cette valeur avant l'affichage : pas de saut au chargement.
    try { localStorage.setItem(STORE, state ? '1' : '0'); } catch (e) {}
    syncToggle();
  }

  toggle.addEventListener('click', function () {
    if (desktopMq.matches) { setCollapsed(!isCollapsed()); }
    else if (toc.classList.contains('is-open')) { closeToc(); }
    else { openToc(); }
  });

  // Sur mobile, refermer le sommaire après un clic sur un lien
  toc.addEventListener('click', function (e) {
    if (e.target.closest('a') && !desktopMq.matches) { closeToc(); }
  });

  // Au passage vers le desktop, l'état du panneau mobile (et son verrou de
  // défilement) n'a plus cours : on le purge pour éviter une page figée.
  function onBreakpoint() {
    if (desktopMq.matches) { closeToc(); }
    syncToggle();
  }
  if (desktopMq.addEventListener) { desktopMq.addEventListener('change', onBreakpoint); }
  syncToggle();

  /* 2. Chapitre actif au défilement -------------------------------------- */
  /* Le menu est identique sur toutes les pages : on ne suit au défilement que
     les liens dont la cible se trouve sur la page courante. */
  var currentFile = (location.pathname.split('/').pop() || 'index.html');
  var links = Array.prototype.slice.call(toc.querySelectorAll('a[href]'));
  var byId = {};        // id de section -> lien correspondant (page courante)
  var sections = [];

  links.forEach(function (a) {
    var href = a.getAttribute('href');
    if (!href || href === '#') { return; }   // placeholder sans cible

    var hashPos = href.indexOf('#');
    var rawFile = hashPos === -1 ? href : href.slice(0, hashPos);
    var hash = hashPos === -1 ? '' : href.slice(hashPos + 1);
    var file = rawFile || currentFile;       // "#ancre" seule -> page courante

    if (file !== currentFile) { return; }    // lien vers une autre page

    if (!hash) {
      if (rawFile) { a.classList.add('is-active'); }  // lien de la page courante
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

  // Échap, par ordre de priorité : visionneuse (gérée plus haut) > recherche >
  // note ouverte / sommaire. Les deux fonctions viennent de la partie 6 ; leur
  // `var` est remontée en tête de l'IIFE, et ce gestionnaire ne s'exécute qu'au
  // clavier, donc bien après leur affectation.
  document.addEventListener('keydown', function (e) {
    if (e.key !== 'Escape') { return; }
    if (lb && lb.classList.contains('is-open')) { return; }
    if (rechercheActive && rechercheActive()) { effacerRecherche(); return; }
    removePopover();
    if (toc.classList.contains('is-open')) { closeToc(); }
  });

  /* 5. Apparition du menu sous le hero (accueil, desktop) ---------------- */
  /* Le menu suit le bas du hero : masqué sous le pli, il remonte au rythme
     du défilement (son haut d'abord) puis se fixe en haut (décalage 0). */
  var cover = document.querySelector('.hero--cover');
  if (cover) {
    var desktop = desktopMq;
    var pending = false;

    var updateReveal = function () {
      pending = false;
      if (!desktop.matches) {           // mobile/tablette : sommaire à bascule
        toc.style.removeProperty('--toc-reveal');
        document.body.classList.remove('is-hero-passed');
        return;
      }
      var reveal = Math.max(0, cover.getBoundingClientRect().bottom);
      toc.style.setProperty('--toc-reveal', reveal + 'px');
      // Hero dépassé : le bouton se montre et la transition du menu reprend.
      // Classe posée seulement à ce moment — le CSS gère seul l'état de repos.
      document.body.classList.toggle('is-hero-passed', reveal === 0);
    };

    var onScroll = function () {
      if (!pending) { pending = true; requestAnimationFrame(updateReveal); }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', updateReveal);
    if (desktop.addEventListener) { desktop.addEventListener('change', updateReveal); }
    updateReveal();                     // état initial
    majReveal = updateReveal;           // la recherche masque le hero : à resynchroniser
  }

  /* 6. Recherche --------------------------------------------------------- */
  /* Filtre à la frappe sur des données d'exemple (search-data.demo.js), que le
     CMS maison remplacera. Écrit à la main : le cahier des charges proscrit
     toute bibliothèque externe, et à cette échelle un filtre linéaire suffit
     largement (60 fiches ici, quelques millisecondes même à 2000). */
  var champ = document.getElementById('toc-search');
  var donnees = window.CR_SEARCH_DATA;
  var pageEl = document.querySelector('main.page');

  if (champ && donnees && pageEl) {
    champ.parentNode.hidden = false;    // la recherche exige le JS : révélée ici

    /* Normalisation. Piège : la ligature « œ » n'a AUCUNE décomposition Unicode
       — ni NFD ni NFKD ne la touchent, contrairement à « é ». Sans le
       remplacement explicite ci-dessous, « oeuvres » ne trouverait jamais
       « œuvres », le mot-drapeau du catalogue. Idem pour « æ ». */
    function norm(s) {
      return String(s)
        .replace(/œ/g, 'oe').replace(/Œ/g, 'Oe')
        .replace(/æ/g, 'ae').replace(/Æ/g, 'Ae')
        .normalize('NFD').replace(/[\u0300-\u036f]/g, '')   // é -> e, î -> i
        .replace(/[\u00a0\u202f]/g, ' ')                    // espaces insécables
        .toLowerCase();
    }
    /* Découpe en mots. L'apostrophe — droite ou courbe — est une frontière :
       « aquarelle » doit trouver « l'aquarelle ». */
    function mots(s) { return norm(s).split(/[^a-z0-9]+/).filter(Boolean); }

    donnees.forEach(function (r) {
      r._mots = mots([r.num, r.titre, r.date, r.technique, r.dim].filter(Boolean).join(' '));
    });

    // Tous les mots saisis doivent matcher (ET), chacun en début de mot.
    function chercher(q) {
      var t = mots(q);
      if (!t.length) { return null; }
      return donnees.filter(function (r) {
        return t.every(function (mot) {
          return r._mots.some(function (m) { return m.indexOf(mot) === 0; });
        });
      });
    }

    function esc(s) {
      return String(s).replace(/[&<>"]/g, function (c) {
        return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c];
      });
    }

    var section = document.createElement('section');
    section.className = 'search-results';
    section.setAttribute('aria-label', 'Résultats de recherche');
    section.hidden = true;
    var compte = document.createElement('p');
    compte.className = 'search-results__count reading';
    compte.setAttribute('role', 'status');
    var corps = document.createElement('div');
    corps.className = 'reading';
    section.appendChild(compte);
    section.appendChild(corps);
    pageEl.insertBefore(section, pageEl.firstChild);

    function ligne(r) {
      if (r.t === 'page') {
        return '<li class="result result--page"><a class="result__link" href="' + esc(r.url) + '">' +
               '<span class="result__body"><span class="result__title">' + esc(r.titre) +
               '</span></span></a></li>';
      }
      var meta = [r.date, r.technique, r.dim].filter(Boolean).join(' · ');
      return '<li class="result"><a class="result__link" href="' + esc(r.url) + '">' +
             '<span class="result__media"><img loading="lazy" alt="" src="' + esc(r.img) + '"></span>' +
             '<span class="result__body">' +
             '<span class="result__num">' + esc(r.num) + '</span>' +
             '<span class="result__title">' + esc(r.titre) + '</span>' +
             '<span class="result__meta">' + esc(meta) + '</span>' +
             '</span></a></li>';
    }

    function afficher(res, q) {
      var oeuvres = res.filter(function (r) { return r.t === 'oeuvre'; });
      var pages   = res.filter(function (r) { return r.t === 'page'; });
      var html = '';
      if (oeuvres.length) {
        html += '<p class="results__group">Œuvres</p><ol class="results">' +
                oeuvres.map(ligne).join('') + '</ol>';
      }
      if (pages.length) {
        html += '<p class="results__group">Pages</p><ol class="results">' +
                pages.map(ligne).join('') + '</ol>';
      }
      if (!res.length) {
        // Guillemets français, espaces insécables comprises.
        html = '<p class="search-empty">Aucun résultat pour <em>\u00ab\u00a0' + esc(q) +
               '\u00a0\u00bb</em>.</p>';
      }
      compte.textContent = res.length
        ? res.length + (res.length > 1 ? ' résultats' : ' résultat')
        : '';
      corps.innerHTML = html;
    }

    function appliquer() {
      var q = champ.value.trim();
      var res = chercher(q);
      var actif = res !== null;
      if (actif) { afficher(res, q); }
      section.hidden = !actif;
      document.body.classList.toggle('is-searching', actif);
      // L'accueil masque son hero pendant la recherche : le décalage du menu,
      // calculé sur la position du hero, doit être recalculé.
      if (majReveal) { majReveal(); }
    }

    champ.addEventListener('input', appliquer);
    rechercheActive = function () { return document.body.classList.contains('is-searching'); };
    effacerRecherche = function () { champ.value = ''; appliquer(); champ.blur(); };

    // Sur mobile, les résultats sont derrière le panneau : Entrée le referme.
    champ.addEventListener('keydown', function (e) {
      if (e.key === 'Enter' && !desktopMq.matches) { e.preventDefault(); closeToc(); }
    });

    // « / » place le curseur dans le champ, en dépliant le sommaire au besoin.
    document.addEventListener('keydown', function (e) {
      if (e.key !== '/' || e.metaKey || e.ctrlKey || e.altKey) { return; }
      var t = e.target;
      if (t && (t.tagName === 'INPUT' || t.tagName === 'TEXTAREA' || t.isContentEditable)) { return; }
      e.preventDefault();
      if (desktopMq.matches) { if (isCollapsed()) { setCollapsed(false); } }
      else if (!toc.classList.contains('is-open')) { openToc(); }
      champ.focus();
    });
  }

  /* 7. Formulaire de contact --------------------------------------------- */
  /* Présent sur la seule page contact.html — d'où le garde. La validation est
     laissée au navigateur (pas de `novalidate` sur le formulaire) : elle est
     native, traduite, et opère même sans JavaScript. Le gestionnaire ci-dessous
     ne s'exécute donc que sur une saisie valide.

     Il n'y a pas de service d'envoi : plutôt que de simuler une confirmation —
     un correspondant croirait son signalement parti —, on annonce que la
     maquette n'a pas encore de destinataire, et on laisse la saisie en place. */
  var formulaire = document.getElementById('contact-form');
  var etat = document.getElementById('contact-status');

  if (formulaire && etat) {
    formulaire.addEventListener('submit', function (e) {
      e.preventDefault();               // rien à poster tant que le CMS n'est pas branché
      etat.textContent = 'Maquette : aucun destinataire n’est encore branché, ' +
        'votre message n’a donc pas été envoyé. Votre saisie est conservée ci-dessus.';
      etat.hidden = false;
      // Le message est annoncé par role="status" ; le focus va dessus pour que
      // le lecteur au clavier ne reparte pas de l'en-tête de la page.
      etat.setAttribute('tabindex', '-1');
      etat.focus();
    });
  }
})();
