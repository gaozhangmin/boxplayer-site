# BoxPlayer Site

Marketing site for BoxPlayer (小白羊网盘) — Next.js 16 + Tailwind v4, statically exported for Cloudflare Pages.

## Develop

```bash
npm install
npm run dev      # http://localhost:3000
```

## Build (static export)

```bash
npm run build    # -> ./out/
```

The `out/` directory is a fully static site (HTML + assets only). No Node runtime required at the edge.

## Deploy to Cloudflare Pages

### Option A — Direct upload via Wrangler

```bash
npx wrangler pages deploy out --project-name=boxplayer-site
```

### Option B — Git integration (recommended)

In the Cloudflare Pages dashboard:

- **Build command:** `npm run build`
- **Build output directory:** `out`
- **Root directory:** `/` (or this repo's path)
- **Node version:** `20` or higher

Push to your branch and Cloudflare auto-deploys.

## Project structure

```
src/
  app/
    layout.tsx       # Root layout, fonts, metadata
    page.tsx         # Home page composition
    globals.css      # Design tokens (colors, fonts) via @theme
  components/
    sections/        # Hero, Features, Showcase, Sources, Download, SiteNav, SiteFooter
public/
  images/
    desktop/         # App screenshots
    icons/           # Source provider logos (SVG)
    tv/              # tvOS screenshots
```

## Design system

Colors and typography live in `src/app/globals.css` under `@theme`. Update once, propagate everywhere.

Key tokens:

- `--color-skype` / `--color-skype-deep` — primary CTA / accent
- `--color-ink-900` … `--color-ink-100` — text and borders
- `--color-sky-50` … `--color-sky-300` — surfaces and tints
- `--font-display` — Boska serif for hero/section titles
- `--font-sans` — Geist for body
