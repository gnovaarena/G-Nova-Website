# G. NOVA ARENA

Static website using the UI from the supplied original codebase: Zen Dots typography, transparent blurred navigation, original images, footer, cards, colors, hover effects, marquee, and prize animations.

```sh
pnpm install
pnpm run dev
```

Serve the root directory using `pnpm run serve` in another terminal. Run `pnpm run build` to generate `output.css`.

Responsive layout repairs are appended to `input.css`. They adjust narrow-screen gutters, text reflow, footer columns, social icon wrapping, and section spacing without introducing a different visual design. The page markup retains the original utility classes. `site.js` adds menu dismissal on outside click, link selection, Escape, focus leaving navigation, and desktop resizing.

Only referenced assets are kept in `assets/`. The original images are restored to preserve their proportions and appearance. Vercel copies the generated HTML/CSS, menu script, and assets into `public/`.
