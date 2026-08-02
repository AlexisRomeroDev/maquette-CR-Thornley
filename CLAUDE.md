# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

A **maquette (POC)** for a **digital *catalogue raisonné*** publishing environment, first subject the painter **William Thornley (1857–1935)**. The goal is a **reusable editorial system** — keep components generic, never hardcode "Thornley" into structure/CSS so other artists can reuse it.

`readme.md` is the original spec (*cahier des charges*, French) — intent, art direction, success criteria. It still governs the design language, though the site has since grown past its initial single-page milestone.

The deliverable reads like a **scientific illustrated book, not a website**: large whitespace, narrow reading column, calm rhythm, discreet colors, no spectacle. French text with typographic conventions (non-breaking spaces before `: ; ! ? » «`, guillemets) — **preserve them**.

## No build system

Pure static site — HTML5 + modern CSS + vanilla JS only, no framework/package manager/tests/compile step. Explicitly forbidden by the spec: Bootstrap, Tailwind, jQuery, Fancybox, Masonry, any external JS lib (the lightbox is hand-written). Only external dependency: Google Fonts (*Cormorant Garamond* for titles/quotes/dates, *Source Serif 4* for body).

To view: open any `*.html` in a browser or serve the folder (`python3 -m http.server`). Image `src`s are absolute `https://www.mareetmartin.com/uploads/ckeditor/image/...` URLs — they only load against that host, so expect no images offline.

Git repo, remote `origin` = `git@github.com:AlexisRomeroDev/maquette-CR-Thornley.git`, work directly on `main`. **Commit/push only when the user explicitly asks** ("commit", "push"). Commit messages are in French and end with a `Co-Authored-By:` trailer naming the model that wrote them.

## Site structure (14 pages + shared assets)

Content was split from one page into several; every page shares the same `<head>`, nav menu, and `script.js`.

`style.css` and `script.js` are linked with a `?v=` query on every page (currently `style.css?v=3`, `script.js?v=2`) so browsers stop serving a stale copy. **Bump the number by hand, on all 14 pages at once, whenever you touch the matching file** — nothing enforces it, and only the file you changed should move.

- `home.html` — landing. Full-bleed cover hero (`.hero--cover`, île de la Cité image) with the artist title overlaid, then the *Présentation* text. `<body class="is-home">`.
- `index.html` — *Qui est William Thornley ?* (`h1`) = biography + *Parcours artistique* (`h2`, 3 dated periods `#periode-1/2/3`) + *Notes* (`h2`).
- `museum.html` — *Le musée William Thornley à Osny* (`h1`) + its own *Notes*.
- `bibliography.html` — *Bibliographie* (`h1`).
- `about.html` — *À propos du catalogue raisonné* (`h1`) + 4 sections (Organisation, Méthodologie, Mode d'emploi, Équipe). Long prose wrapped in `.about-prose`.
- `contact.html` — *Contact* (`h1`, eyebrow "Correspondance"). `.contact-grid` = form (nom / courriel / message) + `aside.contact-aside` "En pratique"; one column under 900px. **No mail service is wired**: native validation only (no `novalidate`), and the JS handler cancels the submit and says so rather than faking a confirmation. Address and response time are `.placeholder-data` blocks awaiting real values.
- **Four index pages**, all populated from sources Alexis drops in `misc/` (untracked, never committed) by a throwaway Python script — the pages are *generated*, not transcribed, and a JS global or JSON is his preferred hand-off format:
  - `artworks.html` — *Index des œuvres* (eyebrow "Catalogue"). `.artworks-grid` of `.artwork-card` thumbnails, a `.filters` bar above, `.pagination` below. 40 of 172 works.
  - `collections.html` — *Index des collections* (eyebrow "Fonds"). 4 entries.
  - `personalities.html` — *Index des personnalités* (eyebrow "Personnes"). 35 entries, `.index-list--names`.
  - `cities.html` — *Index des villes* (eyebrow "Lieux"). 59 entries.
  The last three share `.index-list` / `.index-entry` (+ `__head/__name/__ref/__count/__works/__work/__place/__note/__variants`), each page using only the sub-parts its source actually provides.
- **Two artwork fiches**, `artwork.html` and `artwork-2.html`, `<body class="is-artwork">` — the detailed record for one work. Described in its own section below.
- **Two stub pages** left, cut from the original template (eyebrow + `h1` + one `.lead` saying *« Contenu à intégrer »*), awaiting real content — clone one of them when adding another:
  - `acknowledgements.html` — *Remerciements* (eyebrow "Appareil")
  - `credits.html` — *Crédits photographiques* (eyebrow "Iconographie")
- `style.css`, `script.js` — shared by all pages.
- `search-data.demo.js` — **sample data only**, exposed as `window.CR_SEARCH_DATA`. Titles/dates/images come from the site's real captions, but **catalogue numbers, techniques and dimensions are invented** to exercise the layout — they carry no authority, must never be cited, and the whole file is to be replaced by the in-house CMS's output. A global (not `fetch`-ed JSON) so the site still works when opened via `file://`, where fetch is CORS-blocked.

Each page has exactly one `h1`; keep the heading outline coherent when editing.

## The artwork fiche (`artwork.html`, `artwork-2.html`)

`<body class="is-artwork">` widens the band to `--w-page: 1280px` — the reproduction and the signalétique don't fit in the 800px reading column. The `.reading` blocks that follow (notes, collection button) stay capped at `--w-read`.

`.artwork-detail` is a two-column grid **above 900px** (`minmax(0, 4fr)` media / `minmax(0, 8fr)` info), one stacked column below. Rubrics are always open — no accordion; the spec's calm rhythm beats the density of an interactive record. `.artwork-detail__thumbs` (secondary views, `artwork-2.html` only) feed the same lightbox as the main figure.

**The media column is sticky** above 900px: it follows the scroll alongside the signalétique and is released by the bottom of `.artwork-detail`. Three things hold it up, and each will break it silently if changed —

- `align-items: start` on the grid. Stretched to the row's full height, the column would have no travel to slide through.
- `--sticky-top`, the top inset: 4.75rem below 1100px, where `.toc-toggle` floats fixed over the content (1rem + 2.75rem tall), 2.5rem above it where the button only overlays the toc.
- **The cap belongs to the image, not to its frame.** A column taller than the viewport can no longer stick — its bottom stays permanently off-screen — so `.artwork-detail__figure img` carries `max-height: calc(100vh - var(--sticky-top) - var(--thumbs-room) - 1.5rem)`. Capping the *frame* instead (flex + `max-height` on `.artwork-detail__media`) stretches the image inside it and floats the painting between two white bands. `--thumbs-room` is set to `6rem` by a `:has(.artwork-detail__thumbs)` rule, reserving the row of secondary views.

## Shared menu — edit ALL pages together

`<nav class="toc">` is **duplicated verbatim in all 14 pages** (no templating), and so is the `<head>` — including the small inline `toc-collapsed` script that must stay **before first paint**. Any menu or `<head>` change must be applied identically to every page (a python pass over `glob('*.html')` is the usual way; verify with `md5sum` of the extracted `<nav>` block — all 14 must match).

Twelve entries in **three groups**, separated by a hairline rule carried by `li.is-group` (the group's first item) — *not* an empty `<li>`, which screen readers would announce as a blank list item:

1. **le sujet** — Présentation → Qui est William Thornley ? (sublist = 3 periods) → Le musée
2. **les index** — Index des œuvres (`.is-feature`, subtly highlighted) → des collections → des personnalités → des villes
3. **l'appareil** — Bibliographie → Remerciements → Crédits photographiques → À propos → Contact

Links use full filenames + hash (e.g. `index.html#parcours`) so the same markup works from any page. **No dead `href="#"` is left in the menu.** Remaining placeholders live inside pages: `about.html`'s image slots (`.placeholder-media`, "Image à insérer") and `contact.html`'s `.placeholder-data` blocks.

## Nothing beyond the menu is wired

Index filters, pagination, the fiches' prev/next and "Version PDF" buttons, the "Œuvres de la même collection" button, the index entries themselves — **all display-only**. They are deliberately left non-`disabled` and hoverable so the layout can be judged. **Never fake their behaviour**, the same way `contact.html` refuses to fake a sent message.

Invented data still in the tree, to be replaced by the CMS's output and never cited: `search-data.demo.js` wholesale, and the artwork index's catalogue numbers, techniques, dimensions and `.artwork-card__size` formats (plausible stretcher sizes, seeded on the catalogue number so they stay stable between runs).

## script.js (one IIFE, 7 parts)

1. **Collapsible menu at every size**, one `.toc-toggle` button but two regimes, keyed on `matchMedia('(min-width: 1100px)')`:
   - *desktop* — column **open by default**; the toggle collapses it via `toc-collapsed` on `<html>`, and the state is **persisted in `localStorage`** (key `toc-collapsed`). Because the 14 pages are separate files, an inline script in every `<head>` re-applies the class **before first paint** — without it the menu would visibly jump on each navigation. Clicking a link does *not* collapse it.
   - *mobile* — overlay panel, **closed by default**, `.toc.is-open` + `body.toc-open` scroll lock, closes after a link click. Switching up to desktop purges this state (a lingering `toc-open` would freeze scrolling).
2. **Scrollspy** (IntersectionObserver): only observes menu links whose target is on the current page; parses `file#hash`, ignores cross-page links and bare `#` placeholders (a bare `#` must NOT be marked active).
3. **Footnote popovers**: `.note-ref` → inline popover cloned from the `.notes-list` target, so the reader never leaves the text; falls back to anchor jump without JS.
4. **Lightbox** (hand-written): collects `figure img`, so only `index.html`, `museum.html` and the two fiches feed it — the guard `if (lb && images.length)` keeps the ten figure-less pages (home, about, contact, bibliography, the four indexes whose thumbnails are `.artwork-card__media`, not figures, and the two stubs) from breaking. Click to open, ESC, click-outside, arrow keys.
5. **Home hero reveal** (desktop only, `.hero--cover` present): the menu is hidden under the full-screen hero and rises with scroll (JS sets `--toc-reveal` = `hero.getBoundingClientRect().bottom` on the toc), then sticks. The toc sits **below** the hero (`z-index:1` vs hero `z-index:2`) to mask a one-frame seam jitter; `will-change:transform` smooths it. Once the hero is scrolled past, JS puts `is-hero-passed` on the body: it reveals the toggle (no button floating over the cover before that) **and restores the toc's transition** — while the hero is in front, `--toc-reveal` tracks the scroll frame by frame, so any transition would make the menu lag behind it.

   The class marks the *passed* state, never the resting one, and that direction is deliberate: `script.js` loads at the end of `<body>`, so anything it must **remove** on arrival is painted first and flickers. CSS owns the at-rest look (`body.is-home` desktop = toggle hidden, no transition); JS only ever lifts it. Same reasoning as the `<head>` script for `toc-collapsed` — **on this site, never express a default state by having JS strip a class after load.**

   ⚠️ `.toc`'s `transform` is shared by both features, composed from two custom properties — `translateX(var(--toc-x))` (collapse) `translateY(var(--toc-reveal, 0px))` (hero). Never set `transform` on `.toc` from a new rule: it would silently clobber one of the two. Drive `--toc-x` / `--toc-reveal` instead.

6. **Search**: field at the top of the toc, hand-written filter over `window.CR_SEARCH_DATA` (no library — the spec bans them, and a linear filter is ample: 60 records here, still milliseconds at 2000). Results replace the page content in the reading column (`body.is-searching`), because a work's card — thumbnail + signalétique — doesn't fit the 320px toc. `/` focuses the field (unfolding the toc if needed), Escape clears (it sits between the lightbox and the notes in the Escape chain), Enter closes the mobile panel so the results behind it become visible.

   **French normalisation is the whole job, not the matching.** The `œ` ligature has *no* Unicode decomposition — neither NFD nor NFKD touches it — so `norm()` maps `œ→oe` / `æ→ae` **before** stripping diacritics; without it "oeuvres" would never find "œuvres", the catalogue's flagship word. Non-breaking spaces (U+00A0/U+202F, mandated by the French typography rules) are folded to plain spaces, and apostrophes act as word boundaries so "aquarelle" finds "l'aquarelle". Any new data field must go through `mots()`.

7. **Contact form** (`contact.html` only, guarded by `if (formulaire && etat)`): validation is left to the browser, so the handler only ever sees a valid form. It cancels the submit and writes into `.form__status` that the maquette has no recipient — **never fake a confirmation**: a correspondent would believe their signalement was sent. Replace this part, not the markup, when the CMS provides an endpoint.

## CSS conventions

- Sections in order: Variables, Typography, Layout, Navigation, Hero, Sections, Figures, Gallery, Recherche, Formulaire, Notes, Lightbox, Responsive.
- Key variables: `--w-toc` (menu column width, currently 320px), `--w-page` (1100px), `--w-read` (800px reading column), `--space`, plus the palette (`--c-bg #faf8f5`, `--c-text #222`, `--c-secondary #666` / `--c-secondary-ink #4a4a4a` for toc links, `--c-rule #ddd8d2`, sage `--c-accent #7d8a6a` / `--c-accent-ink`). The `-ink` suffix means "darker variant of".
- **Desktop widths**: `.page` adds the toc gutter *on top of* `--w-page` rather than having it subtracted (`box-sizing: border-box`), via a local `--gutter-left`. That single variable drives both `padding-left` and `max-width`, so collapsing the toc (`.toc-collapsed .page { --gutter-left: 3vw }`) re-centers the text. Nothing on the page exceeds `--w-read` any more, so `--w-page` now only sizes/centres that band — a `--w-band` rename would be more honest.
- Reusable components: `.hero` / `.hero--cover`, `.chapter` + `.chapter__head/__eyebrow/__title`, `.period` (dated chapter opener), `figure.is-portrait/.is-landscape` (toutes deux dans la colonne de lecture — rien ne déborde), `.gallery`, `.pullquote` (press citation), `.notes-list` + `.note-ref`, `.lightbox`, `.toc` + `.toc__sublist`; for the indexes and fiches, `.artworks-grid` + `.artwork-card`, `.index-list` + `.index-entry`, `.filters`, `.pagination`, `.artwork-detail` + `.artwork-switch`.
- Figure numbers ("Figure N") are auto-generated via a CSS counter reset per `.chapter`.
- **Scope descendant selectors carefully**: `.about-prose h3/ul/ol/li` is scoped precisely because a broad `.reading ol` would clobber `.notes-list` (which lives inside `.reading`). Same caution for any new `.reading …` rule.
- The site targets light theme only.

## Working notes

- The mobile slide-in panel width is independent of `--w-toc` (`min(280px, 82vw)` in the mobile media query).
- The image host `https://www.mareetmartin.com/` **is reachable from this machine**, so headless renders show the real photographs and real dimensions can be fetched.
- Checking CSS: `google-chrome --headless=new --screenshot --window-size=W,H --virtual-time-budget=9000`, run from the project dir so relative assets resolve. **It cannot scroll** — `window.scrollTo` is inert under virtual time and a `#hash` in the URL paints blank. For anything scroll-dependent (the sticky media column, the hero reveal), drive Chrome over CDP instead: `--remote-debugging-port` + `--remote-allow-origins=*`, and `websocket-client` (installed) with `suppress_origin=True`, then `Runtime.evaluate` to scroll and measure `getBoundingClientRect`. Hover and `:checked` states are checked by writing a throwaway `_test-*.html` with the same declarations pinned on an `:nth-child`, then deleting it.
- Always re-check both sides of a breakpoint (≥1100 and <1100, and ≥900/<900 on the fiches) and the brace balance of `style.css` before committing it.
- When formatting pasted CKEditor content (as in `about.html`): strip inline styles / `data-list-item-id` / empty `<p>`, convert `h4`→`h2`, wrap prose in `.about-prose`, turn "Photo:" note lines into `.placeholder-media`, group trailing footnotes into `.notes-list`. **Preserve the author's wording verbatim** — this is formatting, not copyediting, unless the user asks for a typographic pass.
