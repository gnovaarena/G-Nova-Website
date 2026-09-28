# G. NOVA ARENA

Static, responsive site for the gaming and sports community.

## Development

```sh
pnpm install
pnpm run dev
```

`dev` syncs the shared HTML components and watches `input.css`. Serve the root directory using `pnpm run serve` in another terminal.

## Shared design system

- `components/head.html`: shared fonts, viewport settings, and stylesheet.
- `components/header.html`: navigation and mobile menu.
- `components/footer.html`: contact information, organization links, and socials.
- `input.css`: color, typography, spacing, component styles, and responsive rules.
- `site.js`: mobile menu dismissal, accessible menu state, and copyright year.

Edit shared HTML in `components/`, then run `pnpm run sync:layout`. The build also syncs these files into all eight pages and adds the appropriate current-page state. Generated blocks are marked `site:head`, `site:header`, and `site:footer`; edit page-specific content outside those blocks.

Zen Dots is the display face; Rajdhani is the body face. Fluid sizes are capped on large displays. Team and footer columns use container queries, so they respond to their available space and enlarged text. Navigation changes at 768px, and home feature rows change at 1024px. Content remains in normal document flow, with short-page footers at the viewport bottom.

The WebP assets are optimized derivatives of the original PNGs, which are retained. Image dimensions reserve layout space; below-the-fold artwork and videos load lazily.

## Build and verification

```sh
pnpm run build
pnpm run check:layout
```

Vercel builds and copies the generated HTML/CSS, `site.js`, and assets into `public/`.

Responsive browser checks cover all eight pages from 280px to 7680px, breakpoint edges, portrait and landscape layouts, and 200% text enlargement. Interaction checks cover outside-click dismissal, menu toggling and resizing, Escape, keyboard focus, FAQ disclosure, disabled tournament controls, and reduced motion. Embedded video dimensions are checked; third-party video playback is not part of the layout checks.
