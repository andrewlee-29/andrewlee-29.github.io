# Repository instructions

## Scope

This is Andrew Lee's client-only React/TypeScript portfolio, intended for GitHub Pages. Read `README.md`, `docs/ARCHITECTURE.md`, and `docs/MAINTENANCE.md` before substantial changes. Update documentation when architecture, commands, or known issues change.

Keep changes focused on the task. Preserve biography, employment dates, contact details, project claims, and external destinations unless the task calls for updating them. Never invent credentials or achievements. Website copy is English; collaborate in the user's preferred language.

## Implementation

- Use npm and the existing lockfile; install with `npm ci`. Change dependencies only as needed.
- Keep TypeScript strict checks enabled. Prefer typed props and functional React components. Follow surrounding style without unrelated formatting changes.
- Preserve directory casing: `src/Pages` and `src/Components`. Hosting/build systems may be case-sensitive.
- Routes live in `src/App.tsx`; `HashRouter` lives in `src/main.tsx`. Preserve static-host-compatible routing unless a migration is requested. Use React Router links internally.
- Tailwind CSS 4 uses `@tailwindcss/vite`. Global styles and the dark variant are in `src/index.css`. Do not assume the legacy `tailwind.config.js` is loaded; inspect actual CSS/plugin wiring.
- Theme uses the `theme` localStorage key and root `dark` class, defaulting to dark. Keep both themes usable.
- Project data lives in `src/Pages/Project.tsx`; employment data lives in `src/Components/Timeline.tsx`. Avoid duplicating sources. Extract data when useful to the task, rather than adding infrastructure preemptively.
- For UI changes, preserve keyboard access, provide accessible names for icon-only links/controls, check narrow screens, and account for reduced motion when changing animations.
- Retain `rel="noopener noreferrer"` on external links opening new tabs.

## Validation

- For code/config changes, run `npm run build` and `npm run lint`. Distinguish existing failures from regressions; do not suppress rules merely to pass checks.
- There is no automated test runner. Add tests when they meaningfully protect behavior; static copy/documentation changes do not require new tests.
- For navigation/theme/layout changes, smoke-test all three hash routes, direct entry and refresh, browser navigation, theme persistence, and desktop/mobile layouts. Check loader completion and the timeline when affected.
- For documentation-only changes, verify paths/commands and run `git diff --check`. Application checks are only necessary when establishing a new baseline.
- Inspect status and diff before finishing. Preserve unrelated user changes. Do not commit build output, node_modules, secrets, or machine-specific files.

## Deployment

`npm run deploy` runs the production build through `predeploy`, then publishes `dist/` via `gh-pages`. It writes to the remote. Run it only when deployment is within the user's request; use local preview otherwise. Preserve Vite `base: '/'` for the current user-site layout unless hosting changes.

See `docs/MAINTENANCE.md` for dated baseline failures. Their existence is neither permission to introduce failures nor a requirement to fix unrelated issues on every task.

## Prototype work

The confirmed redesign brief is in PRODUCT.md and docs/decisions/001-personal-laboratory.md. Isolated prototypes live in prototypes/; production React routes are not yet migrated. Prototype dark presentation is for review. For the future production redesign, the user's updated preference supersedes the old default: follow system theme initially, then persist manual overrides. Gallery now means Drawing only, without public work-status labels.

Current direction: ADR 002 supersedes the interactive homepage brief. The user selected A and requested removal of canvas and console. Keep the prototype content-first; do not reintroduce experiments without a new request.
