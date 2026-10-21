# ADR 001 — Personal laboratory redesign

Status: accepted brief; visual option selection pending.
Date: 2026-10-20

## Decision
Replace the resume-first presentation with a creative and knowledge-oriented website. Build two local interactive prototypes before production implementation: A, a segmented experiment console; B, an immersive canvas with floating controls. Both use the user-pinned charcoal/lime visual language. First viewport includes introduction, experiment and content entrances. Both expose actual line-generation controls, pointer/touch input and reset. No fake numerical statistics or invented work.

## Content decisions
- Gallery contains Drawing only, no public type/status badges. Each work has a stable slug, title, description, multiple images, image alt text and optional captions. Related writing is optional.
- Writing supports Article and Note, multiple tags, either Chinese or English per entry, Markdown, highlighted code, images/captions. Math was not requested and is deferred.
- Publishing uses Markdown and image files with fixed templates. Draft publishing state is distinct from a public drawing's creative completeness.
- All navigation remains visible without content. Empty states point to existing Projects.
- Old biography/project facts and destinations remain authoritative. Do not invent new claims.

## Consequences
Different editorial densities share one navigation and token system. Real image composition cannot be validated until drawings exist. A/B prototypes use an isolated static preview under prototypes/ and leave production React routes unchanged. Dark is the review presentation, with a light toggle; eventual production defaults to system preference and persists the manual choice.

## Deferred
Choice of A/B, final content renderer/frontmatter parser, full article and artwork detail integration, production routing/SEO strategy, production deployment. No new backend, CMS, comments or subscription system.
