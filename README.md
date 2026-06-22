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

## Creem payments

The site uses Cloudflare Pages Functions for hosted checkout, webhook processing, and subscription status. Apply `supabase/migrations/20260622000000_create_app_subscriptions.sql`, then configure these Pages environment variables:

- `CREEM_API_KEY`
- `CREEM_WEBHOOK_SECRET`
- `SUPABASE_URL`
- `SUPABASE_ANON_KEY`
- `SUPABASE_SERVICE_ROLE_KEY`
- `SITE_URL` (for example `https://xbysite.pages.dev`)
- `CREEM_PRODUCT_ID` (optional override; defaults to the lifetime product configured in the server function)

Configure the Creem webhook URL as `https://<site-domain>/api/creem/webhook`. Start in Creem test mode, then run the focused integration logic tests with:

```bash
npm run test:creem
```

## Website authentication

The website and desktop app must use the same Supabase project URL and the same public anon/publishable key. The public values in `src/lib/supabase.ts` match the desktop app's `src/config.ts`; Cloudflare's `SUPABASE_URL` and `SUPABASE_ANON_KEY` must point to that same project.

In Supabase Authentication settings:

- Enable GitHub and Google providers used by the desktop app.
- Keep email OTP enabled and ensure the email template includes the verification token used by the six-digit code flow.
- Add `https://xbysite.pages.dev/auth/callback/` to the redirect allow list. Add preview callback URLs explicitly before testing OAuth on preview deployments.

The website uses only the public key. Supabase secret/service-role keys remain in Cloudflare Pages Functions and must never be added to browser code.

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
