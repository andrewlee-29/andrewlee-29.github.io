---
name: Andrew Lee — Selected A prototype
description: Selected A content-first prototype; canvas and console removed. Not production style authority.
colors:
  primary: "#c3e52b"
  primary-hover: "#d4f342"
  ink: "#101207"
  charcoal-bg: "#171817"
  charcoal-surface: "#242522"
  charcoal-inset: "#10110f"
  cream-text: "#f1f1e7"
  muted-text: "#b0b2a6"
  charcoal-line: "#43453c"
  light-bg: "#eeeee5"
  light-surface: "#e1e2d7"
  light-inset: "#f9f9f0"
  light-text: "#20231a"
  light-muted: "#5c6052"
  light-line: "#b4b8a6"
  cream-ink: "#ebe7cf"
  orange-ink: "#f09456"
typography:
  display:
    fontFamily: "Barlow Condensed, sans-serif"
    fontSize: "clamp(48px, 5vw, 78px)"
    fontWeight: 800
    lineHeight: 0.91
    letterSpacing: "-0.025em"
  title:
    fontFamily: "Barlow Condensed, sans-serif"
    fontSize: "30px"
    fontWeight: 700
    lineHeight: 1.1
  body:
    fontFamily: "Barlow, sans-serif"
    fontSize: "16px"
    fontWeight: 400
    lineHeight: 1.5
  editorial:
    fontFamily: "Georgia, serif"
    fontSize: "78px"
    fontWeight: 400
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
A is selected. ADR 002 removes the canvas and console from the active prototype. Production React styles remain separate. The retained world is charcoal, warm-white text and acid-lime emphasis.

## Colors
See frontmatter for retained theme colors. Canvas ink colors in the historical palette are no longer used in the interface.

## Typography
Barlow Condensed bold display, Barlow body via Google Fonts, with sans-serif fallback. Homepage heading uses clamp(56px,6vw,86px), 64px on mobile. Writing preview uses Georgia headings.

## Layout
A content-first header and introduction. Hero uses two equal columns with 60px horizontal gap; headline spans two rows while introduction and links occupy the right column. At 650px and below it stacks vertically. Drawings and writing form two columns on desktop and one on mobile. Projects follows beneath. No experiment, console, B variant or empty space reserved for these remains.

## Elevation & Depth
Thin dividers separate content; controls use restrained surfaces. No immersive title shadow or control-panel texture remains. Gallery empty frame remains a visual placeholder, not an artwork.

## Shapes
Pill buttons and theme control retain the approved reference language.

## Components
Navigation: Home, Gallery, Writing, Projects, About. Existing Projects/About destinations remain. Gallery/Writing are honest empty states. Writing filters update the empty result. Theme preference persists separately from production. Skip link focuses main. No canvas, range controls, draw mode, animation loop, pause or reset exists.

## Do's and Don'ts
Preserve content-first A; do not restore the experiment without a new request. Keep both themes and keyboard focus usable. Do not fabricate drawings/articles. Full content-detail typography and publishing remain deferred. Historical A/B screenshots document superseded explorations, not current acceptance criteria.
