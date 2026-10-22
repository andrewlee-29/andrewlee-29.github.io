# Selected A prototype

Run `npm run dev -- --host 127.0.0.1`, then open `/prototypes/index.html` on the printed origin.

The user selected A and then removed the canvas and console. The active prototype contains the introduction, Gallery and Writing entrances/empty states, Projects and About views, and a persistent light/dark toggle. Projects (`/prototypes/index.html#projects`) and About (`/prototypes/index.html#about`) stay inside the prototype and use the same A styling. Old variant query links resolve to the selected layout. No canvas code or animation loop remains.

This HTML is a local design study, not included as a production build entry. Markdown publishing and full content detail integration are deferred. Production React layouts are unchanged. Google Fonts supplies Barlow/Barlow Condensed with sans-serif fallback. Preview defaults dark; eventual production will follow system preference initially.

`profile.js` renders all six projects from `src/data/projects.ts` and four employment entries from `src/data/experiences.ts`. Production Project and Timeline components consume those same modules; edit the shared data instead of maintaining separate lists. Existing claims, dates and destinations were retained during extraction. About biography markup in `index.html` retains the facts from `src/Pages/About.tsx`; keep those two presentations consistent when updating biography or contact details. Use the Vite development server so the prototype's TypeScript imports are transformed.

Screenshots in review/ are local verification artifacts and are excluded from Git. They are not required to run the prototype; create fresh captures when checking a change.

## Diagonal background (2026-10-22)

All five prototype views share a fixed, decorative diagonal stripe field inspired by the supplied ZZZ reference. A single CSS transform moves upward by one stripe period every 18 seconds. Fine hatch lines remain static; no additional short-line markers are used. The backdrop does not intercept input or introduce a canvas. Light mode uses separate low-contrast stripe colors. The footer pause control persists under prototype-motion-paused; reduced-motion preferences disable movement, and hidden tabs pause it.
