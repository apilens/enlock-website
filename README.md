# slomo — landing page

Landing page for **slomo**, the black-box flight recorder for Python.

> Stop reproducing bugs. Replay them.

Built with **Next.js 16** (App Router, static export), **TypeScript**, **Tailwind CSS v4**, and **motion** for scroll animations. Deployed to GitHub Pages via GitHub Actions on every push to `main`.

## Development

```bash
npm install
npm run dev        # http://localhost:3000/slomo-landing
```

## Production build

```bash
npm run build      # static export to out/
```

## Structure

- `src/app/` — layout (fonts via `next/font`, Metadata API), page, global styles, favicon
- `src/components/` — `Nav`, `Starfield` (canvas), `Terminal` (scene-based typing demo), `Reveal` (motion), `CopyPip`, `StarCount` (live GitHub stars)
- `src/components/sections/` — `Hero`, `Features`, `Statement`, `Steps`, `Contribute`, `FinalCta`, `Footer`
- `.github/workflows/deploy.yml` — build + deploy to GitHub Pages

Docs links currently point to `#` — they'll be wired up when the documentation site ships.
