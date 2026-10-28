---
name: Andrew Lee — Street Poster
description: Production Street Poster direction selected on 2026-10-28. Historical prototype remains separate.
colors:
  primary: "#c3e52b"
  primary-hover: "#d4f342"
  ink: "#101207"
  charcoal-bg: "#141514"
  charcoal-surface: "#1c1d1b"
  charcoal-inset: "#10110f"
  cream-text: "#f1f1e7"
  muted-text: "#b8baaf"
  charcoal-line: "#45473f"
  light-bg: "#eeeee5"
  light-surface: "#f6f6ed"
  light-inset: "#e0e2d7"
  light-text: "#20231a"
  light-muted: "#585c50"
  light-line: "#a6aa98"
typography:
  display:
    fontFamily: "Barlow Condensed, sans-serif"
    fontSize: "clamp(72px, 8.8vw, 142px)"
    fontWeight: 800
    lineHeight: 0.91
    letterSpacing: "-0.025em"
  title:
    fontFamily: "Barlow Condensed, sans-serif"
    fontSize: "38px"
    fontWeight: 800
    lineHeight: 1
  body:
    fontFamily: "Barlow, sans-serif"
    fontSize: "16px"
    fontWeight: 400
    lineHeight: 1.5
rounded:
  panel: "16px"
  pill: "28px"
  chip: "24px"
spacing:
  compact: "16px"
  control: "20px"
  section: "48px"
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.ink}"
    rounded: "{rounded.pill}"
    padding: "13px 23px"
  button-primary-hover:
    backgroundColor: "{colors.primary-hover}"
  filter-selected:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.ink}"
    rounded: "{rounded.chip}"
    padding: "8px 18px"
---

## Overview
A / Street Poster is the production direction selected from three image proposals on 2026-10-28. See ADR 003 and docs/design/street-poster-a.png. This is distinct from the historical A prototype at /prototypes/index.html. Root index.html loads src/street.css after the shared prototype stylesheet. No React migration was introduced.

## Colors
See frontmatter for production theme colors. Acid lime identifies primary actions; active navigation adds a dot as a second signal. Light mode uses dark olive active-navigation text (#4e6100) and focus outlines (#526600) against paper surfaces. Decorative lettering is #242622 in dark mode and #d9dbcf in light mode.

## Typography
Barlow Condensed 800 display and Barlow body via the existing Google Fonts import, with sans-serif fallbacks. Desktop hero uses clamp(72px,8.8vw,142px) across three explicit text lines; mobile uses clamp(52px,11.7vw,80px) with natural wrapping. Body copy remains readable at 16px or above. Production page headings share the condensed voice; the existing Writing empty-state subheading retains Georgia.

## Layout
The desktop hero allocates 42% to the twin printed ribbons and 58% to the headline, intro and actions. At 1050px the ribbon share reduces to 37%. Below the hero, Drawing/Writing panels use a 1.5:1 split. At 700px and below, ribbons become a shallow cropped strip above the headline, navigation wraps into its own row, and panels stack. Projects follows below. Subpages keep stable reading surfaces and existing factual content.

## Elevation & Depth
Opaque inset panels protect reading areas. Oversized low-contrast background lettering and a subtle halftone field provide print texture. Twin lime/cream ribbons use their own clipped containers, so the graphics never overlap the functional headline. Empty frames and line icons communicate absent content without inventing artworks.

## Shapes
Pill primary actions and theme control, a rounded navigation bar, 14px content-panel corners, 16px reading-panel corners, and thin horizontal rules. Panel title links inherit the title font size rather than the shared small-link style.

## Components
Navigation: Home, Gallery, Writing, Projects, About. Legacy /#/projects and /#/about aliases remain. Gallery/Writing are honest empty states, and Writing filters update the empty result. Production follows the system theme initially; manual theme changes persist under theme. The historical prototype uses prototype-theme. Skip link focuses main. The footer background pause uses the existing prototype-motion-paused key and pauses all three CSS animations. Hidden tabs also pause movement; reduced motion stops it. No canvas or console exists.

## Do's and Don'ts
Keep the selected poster composition while preserving content readability, both themes and keyboard access. Do not fabricate drawings/articles or restore the removed canvas and console. Full content-detail typography and publishing remain deferred. Historical prototype screenshots document earlier explorations, not current production acceptance criteria.
