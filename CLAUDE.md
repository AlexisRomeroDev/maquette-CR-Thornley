# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

A **maquette (POC)** for a **digital *catalogue raisonné*** publishing environment, first subject the painter **William Thornley (1857–1935)**. The goal is a **reusable editorial system** — keep components generic, never hardcode "Thornley" into structure/CSS so other artists can reuse it.

`readme.md` is the original spec (*cahier des charges*, French) — intent, art direction, success criteria. It still governs the design language, though the site has since grown past its initial single-page milestone.

The deliverable reads like a **scientific illustrated book, not a website**: large whitespace, narrow reading column, calm rhythm, discreet colors, no spectacle. French text with typographic conventions (non-breaking spaces before `: ; ! ? » «`, guillemets) — **preserve them**.

## No build system

Pure static site — HTML5 + modern CSS + vanilla JS only, no framework/package manager/tests/compile step. Explicitly forbidden by the spec: Bootstrap, Tailwind, jQuery, Fancybox, Masonry, any external JS lib (the lightbox is hand-written). Only external dependency: Google Fonts (*Cormorant Garamond* for titles/quotes/dates, *Source Serif 4* for body).

To view: open any `*.html` in a browser or serve the folder (`python3 -m http.server`). Image `src`s are absolute `https://www.mareetmartin.com/uploads/ckeditor/image/...` URLs — they only load against that host, so expect no images offline.

Git repo, remote `origin` = `git@github.com:AlexisRomeroDev/maquette-CR-Thornley.git`, work directly on `main`. **Commit/push only when the user explicitly asks** ("commit", "push"). Commit messages end with the `Co-Authored-By: Claude Opus 4.8` trailer.

## Site structure (11 pages + shared assets)

Content was split from one page into several; every page shares the same `<head>`, nav menu, and `script.js`.

- `home.html` — landing. Full-bleed cover hero (`.hero--cover`, île de la Cité image) with the artist title overlaid, then the *Présentation* text. `<body class="is-home">`.
- `index.html` — *Qui est William Thornley ?* (`h1`) = biography + *Parcours artistique* (`h2`, 3 dated periods `#periode-1/2/3`) + *Notes* (`h2`).
- `museum.html` — *Le musée William Thornley à Osny* (`h1`) + its own *Notes*.
- `bibliography.html` — *Bibliographie* (`h1`).
- `about.html` — *À propos du catalogue raisonné* (`h1`) + 4 sections (Organisation, Méthodologie, Mode d'emploi, Équipe). Long prose wrapped in `.about-prose`.
- **Six stub pages**, all cut from the same template (eyebrow + `h1` + one `.lead` saying *« Contenu à intégrer »*), awaiting real content — clone `artworks.html` when adding another:
  - `artworks.html` — *Index des œuvres* (eyebrow "Catalogue")
  - `collections.html` — *Index des collections* (eyebrow "Fonds")
  - `personalities.html` — *Index des personnalités* (eyebrow "Personnes")
  - `cities.html` — *Index des villes* (eyebrow "Lieux")
  - `acknowledgements.html` — *Remerciements* (eyebrow "Appareil")
  - `credits.html` — *Crédits photographiques* (eyebrow "Iconographie")
- `style.css`, `script.js` — shared by all pages.
- `search-data.demo.js` — **sample data only**, exposed as `window.CR_SEARCH_DATA`. Titles/dates/images come from the site's real captions, but **catalogue numbers, techniques and dimensions are invented** to exercise the layout — they carry no authority, must never be cited, and the whole file is to be replaced by the in-house CMS's output. A global (not `fetch`-ed JSON) so the site still works when opened via `file://`, where fetch is CORS-blocked.

Each page has exactly one `h1`; keep the heading outline coherent when editing.

## Shared menu — edit ALL pages together

`<nav class="toc">` is **duplicated verbatim in all 11 pages** (no templating), and so is the `<head>` — including the small inline `toc-collapsed` script that must stay **before first paint**. Any menu or `<head>` change must be applied identically to every page (a python pass over `glob('*.html')` is the usual way; verify with `md5sum` of the extracted `<nav>` block — all 11 must match).

Twelve entries in **three groups**, separated by a hairline rule carried by `li.is-group` (the group's first item) — *not* an empty `<li>`, which screen readers would announce as a blank list item:

1. **le sujet** — Présentation → Qui est William Thornley ? (sublist = 3 periods) → Le musée
2. **les index** — Index des œuvres (`.is-feature`, subtly highlighted) → des collections → des personnalités → des villes
3. **l'appareil** — Bibliographie → Remerciements → Crédits photographiques → À propos → Contact

Links use full filenames + hash (e.g. `index.html#parcours`) so the same markup works from any page. **Contact is still a placeholder `href="#"`** — the only one left; about.html also contains image placeholders (`.placeholder-media`, "Image à insérer") awaiting real assets.

## script.js (one IIFE, 6 parts)

1. **Collapsible menu at every size**, one `.toc-toggle` button but two regimes, keyed on `matchMedia('(min-width: 1100px)')`:
   - *desktop* — column **open by default**; the toggle collapses it via `toc-collapsed` on `<html>`, and the state is **persisted in `localStorage`** (key `toc-collapsed`). Because the 11 pages are separate files, an inline script in every `<head>` re-applies the class **before first paint** — without it the menu would visibly jump on each navigation. Clicking a link does *not* collapse it.
   - *mobile* — overlay panel, **closed by default**, `.toc.is-open` + `body.toc-open` scroll lock, closes after a link click. Switching up to desktop purges this state (a lingering `toc-open` would freeze scrolling).
2. **Scrollspy** (IntersectionObserver): only observes menu links whose target is on the current page; parses `file#hash`, ignores cross-page links and bare `#` placeholders (a bare `#` must NOT be marked active).
3. **Footnote popovers**: `.note-ref` → inline popover cloned from the `.notes-list` target, so the reader never leaves the text; falls back to anchor jump without JS.
4. **Lightbox** (hand-written): guarded by `if (lb && images.length)` so the figure-less pages (home, bibliography, and the six stubs) don't break. Click to open, ESC, click-outside, arrow keys.
5. **Home hero reveal** (desktop only, `.hero--cover` present): the menu is hidden under the full-screen hero and rises with scroll (JS sets `--toc-reveal` = `hero.getBoundingClientRect().bottom` on the toc), then sticks. The toc sits **below** the hero (`z-index:1` vs hero `z-index:2`) to mask a one-frame seam jitter; `will-change:transform` smooths it. Once the hero is scrolled past, JS puts `is-hero-passed` on the body: it reveals the toggle (no button floating over the cover before that) **and restores the toc's transition** — while the hero is in front, `--toc-reveal` tracks the scroll frame by frame, so any transition would make the menu lag behind it.

   The class marks the *passed* state, never the resting one, and that direction is deliberate: `script.js` loads at the end of `<body>`, so anything it must **remove** on arrival is painted first and flickers. CSS owns the at-rest look (`body.is-home` desktop = toggle hidden, no transition); JS only ever lifts it. Same reasoning as the `<head>` script for `toc-collapsed` — **on this site, never express a default state by having JS strip a class after load.**

   ⚠️ `.toc`'s `transform` is shared by both features, composed from two custom properties — `translateX(var(--toc-x))` (collapse) `translateY(var(--toc-reveal, 0px))` (hero). Never set `transform` on `.toc` from a new rule: it would silently clobber one of the two. Drive `--toc-x` / `--toc-reveal` instead.

6. **Search**: field at the top of the toc, hand-written filter over `window.CR_SEARCH_DATA` (no library — the spec bans them, and a linear filter is ample: 60 records here, still milliseconds at 2000). Results replace the page content in the reading column (`body.is-searching`), because a work's card — thumbnail + signalétique — doesn't fit the 320px toc. `/` focuses the field (unfolding the toc if needed), Escape clears (it sits between the lightbox and the notes in the Escape chain), Enter closes the mobile panel so the results behind it become visible.

   **French normalisation is the whole job, not the matching.** The `œ` ligature has *no* Unicode decomposition — neither NFD nor NFKD touches it — so `norm()` maps `œ→oe` / `æ→ae` **before** stripping diacritics; without it "oeuvres" would never find "œuvres", the catalogue's flagship word. Non-breaking spaces (U+00A0/U+202F, mandated by the French typography rules) are folded to plain spaces, and apostrophes act as word boundaries so "aquarelle" finds "l'aquarelle". Any new data field must go through `mots()`.

## CSS conventions

- Sections in order: Variables, Typography, Layout, Navigation, Hero, Sections, Figures, Gallery, Recherche, Notes, Lightbox, Responsive.
- Key variables: `--w-toc` (menu column width, currently 320px), `--w-page` (1100px), `--w-read` (800px reading column), `--space`, plus the palette (`--c-bg #faf8f5`, `--c-text #222`, `--c-secondary #666` / `--c-secondary-ink #4a4a4a` for toc links, `--c-rule #ddd8d2`, sage `--c-accent #7d8a6a` / `--c-accent-ink`). The `-ink` suffix means "darker variant of".
- **Desktop widths**: `.page` adds the toc gutter *on top of* `--w-page` rather than having it subtracted (`box-sizing: border-box`), via a local `--gutter-left`. That single variable drives both `padding-left` and `max-width`, so collapsing the toc (`.toc-collapsed .page { --gutter-left: 3vw }`) re-centers the text. Nothing on the page exceeds `--w-read` any more, so `--w-page` now only sizes/centres that band — a `--w-band` rename would be more honest.
- Reusable components: `.hero` / `.hero--cover`, `.chapter` + `.chapter__head/__eyebrow/__title`, `.period` (dated chapter opener), `figure.is-portrait/.is-landscape` (toutes deux dans la colonne de lecture — rien ne déborde), `.gallery`, `.pullquote` (press citation), `.notes-list` + `.note-ref`, `.lightbox`, `.toc` + `.toc__sublist`.
- Figure numbers ("Figure N") are auto-generated via a CSS counter reset per `.chapter`.
- **Scope descendant selectors carefully**: `.about-prose h3/ul/ol/li` is scoped precisely because a broad `.reading ol` would clobber `.notes-list` (which lives inside `.reading`). Same caution for any new `.reading …` rule.
- The site targets light theme only.

## Working notes

- The mobile slide-in panel width is independent of `--w-toc` (`min(280px, 82vw)` in the mobile media query).
- When formatting pasted CKEditor content (as in `about.html`): strip inline styles / `data-list-item-id` / empty `<p>`, convert `h4`→`h2`, wrap prose in `.about-prose`, turn "Photo:" note lines into `.placeholder-media`, group trailing footnotes into `.notes-list`. **Preserve the author's wording verbatim** — this is formatting, not copyediting, unless the user asks for a typographic pass.
