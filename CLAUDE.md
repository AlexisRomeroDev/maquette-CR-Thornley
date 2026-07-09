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

## Site structure (7 pages + shared assets)

Content was split from one page into several; every page shares the same `<head>`, nav menu, and `script.js`.

- `home.html` — landing. Full-bleed cover hero (`.hero--cover`, île de la Cité image) with the artist title overlaid, then the *Présentation* text. `<body class="is-home">`.
- `index.html` — *Qui est William Thornley ?* (`h1`) = biography + *Parcours artistique* (`h2`, 3 dated periods `#periode-1/2/3`) + *Notes* (`h2`).
- `museum.html` — *Le musée William Thornley à Osny* (`h1`) + its own *Notes*.
- `bibliography.html` — *Bibliographie* (`h1`).
- `artworks.html` — *Index des œuvres* (`h1`, eyebrow "Catalogue"). Placeholder content.
- `collections.html` — *Index des collections* (`h1`, eyebrow "Fonds"). Placeholder content.
- `about.html` — *À propos du catalogue raisonné* (`h1`) + 4 sections (Organisation, Méthodologie, Mode d'emploi, Équipe). Long prose wrapped in `.about-prose`.
- `style.css`, `script.js` — shared by all pages.

Each page has exactly one `h1`; keep the heading outline coherent when editing.

## Shared menu — edit ALL pages together

`<nav class="toc">` is **duplicated verbatim in all 7 pages** (no templating). Any menu change must be applied identically to every page (sed across files is the usual way). Current order: Présentation → Qui est William Thornley ? (sublist = 3 periods) → Index des œuvres (`.is-feature`, subtly highlighted) → Index des collections → Le musée → Bibliographie → À propos → Contact.

Links use full filenames + hash (e.g. `index.html#parcours`) so the same markup works from any page. **Contact is still a placeholder `href="#"`** — the only one left; artworks/collections/about also contain image placeholders (`.placeholder-media`, "Image à insérer") awaiting real assets.

## script.js (one IIFE, 5 parts)

1. **Collapsible menu** on tablet/mobile (hamburger `.toc-toggle`, slide-in panel).
2. **Scrollspy** (IntersectionObserver): only observes menu links whose target is on the current page; parses `file#hash`, ignores cross-page links and bare `#` placeholders (a bare `#` must NOT be marked active).
3. **Footnote popovers**: `.note-ref` → inline popover cloned from the `.notes-list` target, so the reader never leaves the text; falls back to anchor jump without JS.
4. **Lightbox** (hand-written): guarded by `if (lb && images.length)` so pages without figures/lightbox (home, bibliography, artworks, collections) don't break. Click to open, ESC, click-outside, arrow keys.
5. **Home hero reveal** (desktop only, `.hero--cover` present): the menu is hidden under the full-screen hero and rises with scroll (JS sets `--toc-reveal` = `hero.getBoundingClientRect().bottom` on the toc; CSS `translateY(var(--toc-reveal))`), then sticks. The toc sits **below** the hero (`z-index:1` vs hero `z-index:2`) to mask a one-frame seam jitter; `will-change:transform` smooths it.

## CSS conventions

- Sections in order: Variables, Typography, Layout, Navigation, Hero, Sections, Figures, Gallery, Notes, Lightbox, Responsive.
- Key variables: `--w-toc` (menu column width, currently 320px — also drives `.page`/`.hero--cover` offsets), `--w-page` (1100px), `--w-read` (800px reading column), `--space`, plus the palette (`--c-bg #faf8f5`, `--c-text #222`, `--c-secondary #666`, `--c-rule #ddd8d2`, sage `--c-accent #7d8a6a` / `--c-accent-ink`).
- Reusable components: `.hero` / `.hero--cover`, `.chapter` + `.chapter__head/__eyebrow/__title`, `.period` (dated chapter opener), `figure.is-portrait/.is-landscape[.is-wide]`, `.gallery`, `.pullquote` (press citation), `.notes-list` + `.note-ref`, `.lightbox`, `.toc` + `.toc__sublist`.
- Figure numbers ("Figure N") are auto-generated via a CSS counter reset per `.chapter`.
- **Scope descendant selectors carefully**: `.about-prose h3/ul/ol/li` is scoped precisely because a broad `.reading ol` would clobber `.notes-list` (which lives inside `.reading`). Same caution for any new `.reading …` rule.
- The site targets light theme only.

## Working notes

- The mobile slide-in panel width is independent of `--w-toc` (`min(280px, 82vw)` in the mobile media query).
- When formatting pasted CKEditor content (as in `about.html`): strip inline styles / `data-list-item-id` / empty `<p>`, convert `h4`→`h2`, wrap prose in `.about-prose`, turn "Photo:" note lines into `.placeholder-media`, group trailing footnotes into `.notes-list`. **Preserve the author's wording verbatim** — this is formatting, not copyediting, unless the user asks for a typographic pass.
