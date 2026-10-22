# Andrew Lee — Portfolio

A personal portfolio featuring an introduction, skills, work experience, and six projects. The published site uses HTML, CSS, and browser JavaScript bundled by Vite 7, with shared TypeScript content data. The previous React 19 implementation and its dependencies remain in src/ for reference. This is a client-only static website with no backend, database, or required environment variables.

## Local Development

Installation and builds were verified with Node.js 24.14.1 and npm 11.11.0 on 2026-10-20. Refer to package-lock.json for exact dependency versions.

```sh
npm ci
npm run dev
```

Open the local URL printed by Vite.

| Command | Purpose |
| --- | --- |
| `npm run dev` | Start the development server |
| `npm run build` | Run TypeScript checks and build to dist/ |
| `npm run lint` | Lint TypeScript/TSX and prototype browser JavaScript with ESLint |
| `npm run preview` | Preview the existing dist/ build |
| `npm run deploy` | Build first, then publish to the remote using gh-pages |

## Content and Source Files

The published entry is index.html. It shares prototypes/style.css, prototypes/prototype.js, and prototypes/profile.js with the design preview. React page and component files listed below belong to the previous implementation.

| File | Responsibility |
| --- | --- |
| src/Pages/Home.tsx | Homepage introduction |
| src/Pages/About.tsx | Biography, skills, education, social links, and email |
| src/data/projects.ts | Shared data for six projects, used by production pages and the prototype |
| src/data/experiences.ts | Shared data for four work experiences, used by the production timeline and prototype |
| src/Pages/Project.tsx | Project list |
| src/Components/Timeline.tsx | Scroll-driven timeline |
| src/Components/ProjectCard.tsx | Project cards |
| src/Components/Navbar.tsx | Navigation and light/dark theme toggle |
| src/Components/Loader.tsx | Loading animation |
| src/index.css | Global fonts, Tailwind, and dark-mode rules |
| index.html / public/logo.svg | Page metadata and favicon |

## Deployment

The configuration targets a GitHub Pages user site with Vite base `/`. The published routes are `#home`, `#gallery`, `#writing`, `#projects`, and `#about`. Previous links such as `/#/about` and `/#/projects` remain supported. Vite builds both index.html and prototypes/index.html. GitHub Pages publishes the root of the gh-pages branch.

Before publishing, check the Git remote, GitHub Pages publishing source, and write permissions, then run `npm run deploy`. This command writes to the remote; use build and preview for local verification. The repository has no GitHub Actions workflows. Deployment verification is recorded in docs/MAINTENANCE.md.

## Maintenance Documentation

- [AGENTS.md](AGENTS.md): Instructions for coding agents.
- [Architecture](docs/ARCHITECTURE.md): Components, routing, themes, and tooling.
- [Maintenance Baseline and Tasks](docs/MAINTENANCE.md): Known issues and verification checklists.

An outdated HTML comment that triggered an environment-variable build warning was removed on 2026-10-21. No automated test runner is configured; see the maintenance documentation for validation records.

## License

The previous README listed MIT, but the repository has no LICENSE file. The license text and copyright ownership await confirmation from the owner.

## Design Prototype

The confirmed redesign direction is documented in [PRODUCT.md](PRODUCT.md), [the latest design decision (ADR 002)](docs/decisions/002-content-first-home.md), and [the content model](docs/CONTENT-MODEL.md).

After starting the development server, open `/prototypes/index.html` to view the selected A-style prototype. The homepage presents an introduction and content entry points; the canvas, console, and A/B switch have been removed. Projects and About are available within the prototype at `#projects` and `#about`, using the same A styling and existing factual content.

The [prototype README](prototypes/README.md) describes its features and limitations. Historical A/B records do not represent the current interface. The selected design is now the production homepage. The production entry omits the design-study banner and follows the system theme on first visit, then persists manual changes using the theme storage key. The prototype remains available at /prototypes/index.html.
