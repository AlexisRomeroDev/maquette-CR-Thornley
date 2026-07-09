# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

Proof of Concept for a **digital *catalogue raisonné*** publishing environment. The first subject is the painter **William Thornley (1857–1935)**, but the whole point of the POC is a **reusable editorial system** — the code must not be Thornley-specific, so future catalogues (other artists) can reuse the same components (hero, chapter, figure, gallery, citation, notes) without structural change.

`readme.md` is the authoritative spec (*cahier des charges*, in French). Read it before making design or structure decisions — it defines the intent, art direction, and success criteria. Key points below summarize it, but it wins on any conflict.

The deliverable is an **editorial page that reads like a scientific illustrated book, not a website**. Design must recede so the artworks and text stay primary: large whitespace, narrow reading column, calm rhythm, no vivid colors, no spectacle.

## No build system

Pure static site — no framework, no package manager, no tests, no compile step, and not a git repo. There is nothing to build, lint, or test. To view the result, open `index.html` in a browser (or serve the folder, e.g. `python3 -m http.server`). Image `src`s are absolute paths (`/uploads/ckeditor/image/...`) sourced from `https://www.mareetmartin.com/`, so they only resolve against that host — expect broken images when viewing the bare file locally.

## Current state vs. target

- `index.html` currently holds only the **raw editorial draft** exported from CKEditor (a `.excerpts > .excerpt` blob of `<p>`/`<figure>` with inline styles, `&nbsp;`, numbered "Photo:" captions, `tel:` links). This is source content to be transformed, not the finished page.
- The target is the structured page described in the spec. Expected file layout once built: `index.html` + `style.css` + `script.js` (currently everything is inlined/absent).

## Hard constraints (from the spec)

- **Stack:** HTML5 + modern CSS + vanilla JS only. Explicitly forbidden: Bootstrap, Tailwind, jQuery, Fancybox, Masonry, and any external JS library (the image lightbox must be hand-written).
- **Page chapters, in order:** Hero → Présentation → Qui est William Thornley ? → Parcours artistique → Le musée William Thornley → Notes → Bibliographie. Each period of the artist's life opens as a real chapter (e.g. `1878 — 1895 · Les années de formation`).
- **Typography:** Google Fonts — *Cormorant Garamond* for headings/H1/H2/quotes/large dates; *Source Serif 4* for body/captions/notes/bibliography.
- **Palette (discreet, no vivid color):** bg `#faf8f5`, text `#222`, secondary `#666`, rules `#ddd8d2`, accent a discreet sage green.
- **Layout:** max width ≈ 1100px; reading column ≈ 760–820px; images may exceed the reading width when they are important.
- **Images** use `<figure><img><figcaption>`; captions replace the raw "Photo:" lines; figure numbers may be auto-generated (e.g. via CSS counters). Three image families: portrait (tall), paysage (wide), galerie (grid) — CSS drives their presentation.
- **Navigation:** fixed side table-of-contents on desktop with active-chapter highlight on scroll; collapsible on mobile.
- **Interactions (vanilla JS):** footnote markers open an inline popover/panel without leaving the text; every image is zoomable in a lightbox with click-to-open, ESC to close, click-outside to close, and keyboard navigation.
- **Responsive:** full editorial layout on desktop, progressive adaptation on tablet, optimized vertical reading on mobile — text always takes priority.

## CSS organization (spec-prescribed sections)

Structure the stylesheet in these sections, in order: Variables, Typography, Layout, Navigation, Hero, Sections, Figures, Gallery, Notes, Lightbox, Responsive.

## Working notes

- The spec's first milestone is the **complete graphic system + JS interactions + reusable components + the first two sections fully integrated** — not the entire draft. Later sections follow that reference.
- Keep components generic. When tempted to hardcode "Thornley", ask whether it belongs in content rather than structure.
- The draft text is French with typographic conventions (non-breaking spaces before `: ; ! ? » «`); preserve them.
