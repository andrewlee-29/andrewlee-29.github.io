# ADR 003 — Street Poster production design

Status: accepted, 2026-10-28. Supersedes the production visual direction in ADR 002; its content-first and no-canvas/no-console constraints remain.

The user reviewed three generated desktop concepts based on the supplied industrial street interface reference, selected A / Street Poster, and requested implementation. The accepted reference is [street-poster-a.png](../design/street-poster-a.png). This A is the new image proposal, distinct from the historical A prototype.

## Purpose and scope

Experience mode: Andrew Lee's creation and knowledge homepage. Visitors can enter Drawing, Writing, Projects, or About. Keep existing biography, project and employment data, links, and honest empty states. No content publishing pipeline, new framework migration, deployment, or interactive canvas is included.

## First viewport

Desktop pairs two large diagonal printed ribbons on the left with a three-line condensed headline on the right. A dark rounded navigation bar sits above; unequal Drawing/Writing panels follow immediately. Keep the typography, main action, and panel titles readable against stable surfaces. At narrower heights the panels continue below the fold rather than shrinking the reading text.

## Visual system

Charcoal base and inset surfaces, warm-white text, acid-lime emphasis, Barlow Condensed 800 display, Barlow body. Cropped background lettering and subtle halftone texture carry the print character. Primary actions use lime pills; section links use visible text and arrows. Do not add speculative counts, achievements, published content, or work-status badges.

## Motion and interaction

Ribbon frames stay fixed while their repeated content scrolls in opposite directions along each ribbon's axis. A low-contrast repeated background moves horizontally. CSS transforms drive all movement. The existing pause control and hidden-tab behavior pause every new animation; reduced motion removes movement. No entrance delays or loading screen.

## Responsive and theme behavior

At 700px and below, ribbons become a cropped strip above the headline, panels stack, and navigation wraps into its own row. Content takes precedence over decoration. Light mode uses paper-like surfaces and dark text, including a darker active-navigation accent and focus ring. First visit follows the system; manual choice persists under `theme`.

## Implementation and finish

Root `index.html` loads production-only `src/street.css` after shared prototype styles. The archived preview at `/prototypes/index.html` keeps its existing visual direction and markup. Shared `prototype.js` and `profile.js` retain navigation, preferences, filters and factual content. Validate build/lint, five routes and legacy aliases, refresh/history, themes, pause, narrow layouts, keyboard access and existing content counts. Record completed verification in `docs/MAINTENANCE.md`.
