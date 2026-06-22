# BoxPlayer Website Authentication Design

## Goal

Allow users to sign in on the BoxPlayer website before purchasing Pro, so every Creem checkout is bound to a verified Supabase user rather than inferred from a payment email.

## Scope

- Add website authentication with GitHub, Google, and email OTP.
- Reuse the same Supabase project and user identities as the desktop app.
- Show the signed-in account and current Pro status on the website.
- Require a valid website Supabase session before creating a checkout.
- Preserve Chinese and English navigation and return paths.

This does not synchronize browser session storage with the desktop app. A user who is signed in to the app must still sign in separately on the website unless the app creates the checkout with its own session.

## User Experience

The site navigation displays a localized account control. Signed-out users see `登录` or `Sign in`. Signed-in users see a compact account menu containing their email, Pro status, and sign-out action.

Selecting sign-in opens a modal with GitHub, Google, and email options. Email login uses the existing Supabase OTP flow: request a code, enter it, and verify without leaving the page.

On the Pricing page, selecting the lifetime Pro purchase while signed out opens the same login modal. After successful authentication, the user remains on the current localized Pricing page and can select purchase again. The purchase button does not create anonymous checkouts.

## Architecture

### Supabase Client

Create one browser-side Supabase client module using the public project URL and publishable or legacy anon key. Components import this shared client rather than defining credentials independently.

Only public Supabase credentials are included in the browser bundle. The Supabase secret or service-role key remains in Cloudflare Pages Functions.

### Authentication State

Add a small React auth provider at the application layout boundary. It owns:

- Initial session loading.
- Supabase auth-state subscription and cleanup.
- Current user and session.
- Login modal visibility.
- Sign-out.

The provider exposes a hook consumed by the navigation and Pricing section. No subscription or payment authorization is derived from `user_metadata`.

### Login Modal

The localized login modal supports:

- GitHub OAuth through `signInWithOAuth`.
- Google OAuth through `signInWithOAuth`.
- Email OTP request through `signInWithOtp`.
- Email OTP verification through `verifyOtp`.

Loading, invalid email, invalid code, provider failure, and retry states remain inside the modal. Closing the modal does not discard an established session.

### OAuth Callback

The existing `/auth/callback` page finalizes the Supabase session, then redirects to a validated internal `next` path. Allowed destinations are limited to paths beginning with a single `/`; absolute URLs and protocol-relative paths are rejected. The default destination is `/pricing/`.

Chinese Pricing uses `/pricing/`; English Pricing uses `/en/pricing/`.

### Checkout Identity

The Pricing section reads the current access token from the auth provider and sends it to `POST /api/creem/checkout` as a Bearer token. The Pages Function verifies the token with Supabase Auth and puts the verified `user.id` into Creem `metadata.referenceId`.

The webhook uses `referenceId` to update `app_subscriptions`. Payment email is informational and is never the authorization identity.

### Pro Status

After login, the website calls `GET /api/me/subscription` with the access token. The account menu shows Free or Pro from the server response. After a successful payment redirect, the Pricing page refreshes subscription state; webhook processing remains the authority.

## Error Handling

- Missing or expired sessions reopen login instead of attempting checkout.
- OAuth and OTP errors are shown in the login modal without exposing tokens.
- Checkout API failures remain visible on the Pricing page.
- Subscription lookup failure shows an unknown or Free-safe state and does not grant Pro locally.
- Payment success messaging may indicate synchronization is pending until the webhook updates Supabase.

## Security

- Never expose `SUPABASE_SERVICE_ROLE_KEY`, a Supabase secret key, or `CREEM_API_KEY` to browser code.
- Validate checkout users server-side from the Bearer token.
- Validate callback redirects to prevent open redirects.
- Keep `app_subscriptions` protected by RLS; authenticated users may only read their own row.
- Treat local storage and visible email as UI state, not authorization evidence.

## Verification

- GitHub and Google OAuth return to the correct localized Pricing page.
- Email OTP request and verification establish a persistent browser session.
- Refreshing the site retains the session; signing out removes it.
- Signed-out purchase opens login and does not call checkout.
- Signed-in purchase creates a lifetime checkout with the verified Supabase user ID.
- Payment webhook updates `app_subscriptions`; website and app both show Pro afterward.
- Invalid tokens receive `401`; unsigned webhooks receive `401`.
- Chinese and English account, login, error, and Pricing text are localized.
- TypeScript, ESLint, static export, and focused Creem tests pass.
