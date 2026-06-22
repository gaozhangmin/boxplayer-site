# BoxPlayer Website Authentication Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add localized GitHub, Google, and email OTP login to the BoxPlayer website so Creem purchases are always associated with a verified Supabase user.

**Architecture:** A root-level client auth provider owns the browser Supabase session, login modal, and server-backed Pro state. Navigation consumes it for account controls, Pricing consumes it to gate checkout, and the callback page uses a small validated redirect helper before returning users to the localized Pricing page.

**Tech Stack:** Next.js 16 static export, React 19, Supabase JS 2, Cloudflare Pages Functions, Node test runner, TypeScript, ESLint.

---

## File Map

- Create `src/lib/supabase.ts`: single browser Supabase client and public configuration.
- Create `.env.example`: names of the public Supabase build variables without values.
- Create `src/lib/authRedirect.mjs`: pure validation for post-auth internal paths.
- Create `src/lib/authRedirect.test.mjs`: redirect security regression tests.
- Create `src/components/auth/AuthProvider.tsx`: session, login-modal, sign-out, and subscription state.
- Create `src/components/auth/AuthModal.tsx`: localized GitHub, Google, and email OTP UI.
- Create `src/components/auth/AccountControl.tsx`: signed-out and signed-in navigation controls.
- Modify `src/app/layout.tsx`: install `AuthProvider` around the site.
- Modify `src/components/sections/SiteNav.tsx`: render account controls on desktop and mobile.
- Modify `src/components/sections/PricingSection.tsx`: consume auth state and open login instead of creating anonymous checkout.
- Modify `src/app/auth/callback/page.tsx`: use the shared client and validated localized return path.
- Modify `src/app/pricing/page.tsx`: remove stale monthly/yearly and all-device metadata.
- Modify `src/app/en/pricing/page.tsx`: remove stale monthly/yearly and all-device metadata.
- Modify `package.json`: add focused auth tests.

### Task 1: Shared Supabase Client and Safe Redirects

**Files:**
- Create: `src/lib/supabase.ts`
- Create: `src/lib/authRedirect.mjs`
- Create: `src/lib/authRedirect.test.mjs`
- Create: `.env.example`
- Modify: `package.json`

- [ ] **Step 1: Write failing redirect tests**

```js
import assert from "node:assert/strict";
import test from "node:test";
import { normalizeAuthNextPath } from "./authRedirect.mjs";

test("accepts localized internal pricing paths", () => {
  assert.equal(normalizeAuthNextPath("/pricing/"), "/pricing/");
  assert.equal(normalizeAuthNextPath("/en/pricing/"), "/en/pricing/");
});

test("rejects external and protocol-relative redirects", () => {
  assert.equal(normalizeAuthNextPath("https://example.com"), "/pricing/");
  assert.equal(normalizeAuthNextPath("//example.com/path"), "/pricing/");
  assert.equal(normalizeAuthNextPath("javascript:alert(1)"), "/pricing/");
});
```

- [ ] **Step 2: Run the tests and verify RED**

Run: `node --test src/lib/authRedirect.test.mjs`

Expected: FAIL because `authRedirect.mjs` does not exist.

- [ ] **Step 3: Implement the redirect helper and shared client**

```js
// src/lib/authRedirect.mjs
export function normalizeAuthNextPath(value, fallback = "/pricing/") {
  if (typeof value !== "string") return fallback;
  if (!value.startsWith("/") || value.startsWith("//")) return fallback;
  return value;
}
```

```ts
// src/lib/supabase.ts
import { createClient, type SupabaseClient } from "@supabase/supabase-js";

let client: SupabaseClient | null = null;

export function getSupabase() {
  if (client) return client;
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key = process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY;
  if (!url || !key) throw new Error("Supabase public configuration is missing");
  client = createClient(url, key, {
    auth: { persistSession: true, autoRefreshToken: true, detectSessionInUrl: true },
  });
  return client;
}
```

Create `.env.example` without values:

```text
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY=
```

Use the existing project URL and public anon/publishable key in local and Cloudflare build environments. Do not introduce any service-role or secret key.

- [ ] **Step 4: Add and run the focused test script**

Add to `package.json`:

```json
"test:auth": "node --test src/lib/authRedirect.test.mjs"
```

Run: `npm run test:auth`

Expected: 2 tests pass.

- [ ] **Step 5: Commit the shared foundation**

```bash
git add .env.example package.json src/lib/supabase.ts src/lib/authRedirect.mjs src/lib/authRedirect.test.mjs
git commit -m "feat: add website auth foundation"
```

### Task 2: Auth Provider and Localized Login Modal

**Files:**
- Create: `src/components/auth/AuthProvider.tsx`
- Create: `src/components/auth/AuthModal.tsx`
- Modify: `src/app/layout.tsx`

- [ ] **Step 1: Create the auth context contract**

Define the context in `AuthProvider.tsx`:

```ts
type Language = "en" | "zh";
type SubscriptionState = "loading" | "free" | "pro" | "unknown";

type AuthContextValue = {
  session: Session | null;
  user: User | null;
  loading: boolean;
  subscription: SubscriptionState;
  openLogin: (lang: Language) => void;
  closeLogin: () => void;
  signOut: () => Promise<void>;
  refreshSubscription: () => Promise<void>;
};
```

Call `const supabase = getSupabase()` once inside the provider. Initialize the session with `supabase.auth.getSession()`, subscribe with `onAuthStateChange`, and unsubscribe during effect cleanup. `refreshSubscription()` must call `/api/me/subscription` with the current access token and map only `isPro === true` to `pro`.

- [ ] **Step 2: Implement the localized login modal**

`AuthModal.tsx` receives `lang`, `open`, and `onClose`. Implement:

```ts
const supabase = getSupabase();
await supabase.auth.signInWithOAuth({
  provider,
  options: {
    redirectTo: `${window.location.origin}/auth/callback/?next=${encodeURIComponent(nextPath)}`,
  },
});
```

Use `/en/pricing/` for English and `/pricing/` for Chinese. For email:

```ts
await supabase.auth.signInWithOtp({
  email,
  options: { shouldCreateUser: true },
});

await supabase.auth.verifyOtp({ email, token, type: "email" });
```

The modal must include localized title, provider labels, email/code validation, loading state, inline errors, close icon with an accessible label, and no token logging.

- [ ] **Step 3: Install the provider at the root**

Change the root body to:

```tsx
<body className="min-h-full flex flex-col">
  <AuthProvider>{children}</AuthProvider>
</body>
```

The provider renders `AuthModal` once, outside individual pages.

- [ ] **Step 4: Run static checks**

Run:

```bash
./node_modules/.bin/tsc --noEmit
./node_modules/.bin/eslint src/components/auth src/app/layout.tsx
```

Expected: both commands exit 0.

- [ ] **Step 5: Commit provider and modal**

```bash
git add src/app/layout.tsx src/components/auth/AuthProvider.tsx src/components/auth/AuthModal.tsx
git commit -m "feat: add localized website login"
```

### Task 3: Navigation Account Controls

**Files:**
- Create: `src/components/auth/AccountControl.tsx`
- Modify: `src/components/sections/SiteNav.tsx`

- [ ] **Step 1: Implement account states**

Use `useAuth()` and render stable-width controls:

```tsx
if (loading) return <span aria-label={labels.loading} className="inline-block h-9 w-9" />;
if (!user) return <button type="button" onClick={() => openLogin(lang)}>{labels.signIn}</button>;
```

For signed-in users, render an icon button that opens a compact menu with email, `Pro`/`Free`, and a sign-out command. Close the menu on Escape, outside click, route change, or sign-out.

- [ ] **Step 2: Add desktop and mobile navigation entries**

Place `AccountControl` beside the language switch on desktop. In the mobile menu, add a full-width account row before the language row. Pass the explicit `lang` prop rather than deriving account copy from browser locale.

- [ ] **Step 3: Run checks**

Run:

```bash
./node_modules/.bin/tsc --noEmit
./node_modules/.bin/eslint src/components/auth/AccountControl.tsx src/components/sections/SiteNav.tsx
```

Expected: both commands exit 0.

- [ ] **Step 4: Commit navigation integration**

```bash
git add src/components/auth/AccountControl.tsx src/components/sections/SiteNav.tsx
git commit -m "feat: add website account controls"
```

### Task 4: Auth-Gated Checkout and Pro Refresh

**Files:**
- Modify: `src/components/sections/PricingSection.tsx`
- Modify: `src/app/pricing/page.tsx`
- Modify: `src/app/en/pricing/page.tsx`

- [ ] **Step 1: Replace the component-local Supabase client**

Remove `createClient`, the duplicate URL/key constants, and direct `getSession()`. Consume:

```ts
const { session, openLogin, refreshSubscription } = useAuth();
```

- [ ] **Step 2: Gate checkout on the verified session**

At the start of `handleCheckout()`:

```ts
if (!session?.access_token) {
  openLogin(lang);
  return;
}
```

Send `session.access_token` to `/api/creem/checkout`. A signed-out click must not set a checkout error or call the API.

- [ ] **Step 3: Refresh Pro after payment return**

When `paid=success` is detected, call `refreshSubscription()`. Keep the existing app deep-link behavior only when `source=app`; a normal web payment remains on the localized Pricing page.

- [ ] **Step 4: Correct stale Pricing metadata**

Chinese description:

```ts
"BoxPlayer 永久免费，专业版一次购买即可在 Windows、Linux 和 macOS 解锁无限 AI 智能搜索、AI 文件整理、AI 阅读助手等高级功能。终身版 $199。"
```

English description:

```ts
"BoxPlayer is free forever. A one-time $199 Pro purchase unlocks unlimited AI Smart Search, file organization, and the AI reading companion on Windows, Linux, and macOS."
```

- [ ] **Step 5: Run focused verification**

Run:

```bash
npm run test:creem
npm run test:auth
./node_modules/.bin/tsc --noEmit
./node_modules/.bin/eslint src/components/sections/PricingSection.tsx src/app/pricing/page.tsx src/app/en/pricing/page.tsx
```

Expected: all tests and checks pass.

- [ ] **Step 6: Commit checkout integration**

```bash
git add src/components/sections/PricingSection.tsx src/app/pricing/page.tsx src/app/en/pricing/page.tsx
git commit -m "feat: require website login for checkout"
```

### Task 5: OAuth Callback and Return-Path Safety

**Files:**
- Modify: `src/app/auth/callback/page.tsx`
- Test: `src/lib/authRedirect.test.mjs`

- [ ] **Step 1: Extend redirect regression coverage**

Add:

```js
test("uses a caller-provided localized fallback", () => {
  assert.equal(normalizeAuthNextPath(null, "/en/pricing/"), "/en/pricing/");
});
```

Run: `npm run test:auth`

Expected: test passes with the helper contract from Task 1.

- [ ] **Step 2: Replace duplicate client and process callback variants**

Import `getSupabase` and `normalizeAuthNextPath`, then call `const supabase = getSupabase()`. Determine the session in this order:

```ts
const query = new URLSearchParams(window.location.search);
const code = query.get("code");
if (code) {
  const { error } = await supabase.auth.exchangeCodeForSession(code);
  if (error) throw error;
} else {
  const hash = new URLSearchParams(window.location.hash.slice(1));
  const accessToken = hash.get("access_token");
  const refreshToken = hash.get("refresh_token");
  if (accessToken) {
    const { error } = await supabase.auth.setSession({
      access_token: accessToken,
      refresh_token: refreshToken || "",
    });
    if (error) throw error;
  }
}
```

Then call `getUser()`, require a user ID, and redirect after a short success state:

```ts
const nextPath = normalizeAuthNextPath(query.get("next"));
window.location.replace(nextPath);
```

Do not write App-specific authentication flags to browser local storage.

- [ ] **Step 3: Localize callback copy from the destination**

Treat a validated `/en/` destination as English; otherwise use Chinese. Localize loading, success, missing-session, and generic failure text.

- [ ] **Step 4: Run callback checks**

Run:

```bash
npm run test:auth
./node_modules/.bin/tsc --noEmit
./node_modules/.bin/eslint src/app/auth/callback/page.tsx src/lib/authRedirect.mjs
```

Expected: all commands exit 0.

- [ ] **Step 5: Commit callback hardening**

```bash
git add src/app/auth/callback/page.tsx src/lib/authRedirect.test.mjs
git commit -m "fix: harden website auth callback"
```

### Task 6: Production Verification and Deployment Readiness

**Files:**
- Modify: `README.md`

- [ ] **Step 1: Document Supabase redirect URLs**

Add the required production redirect URL:

```text
https://xbysite.pages.dev/auth/callback/
```

Document equivalent preview URLs only if they are explicitly added to the Supabase Auth redirect allow list. Add these public build variables to the Cloudflare Pages environment-variable list:

```text
NEXT_PUBLIC_SUPABASE_URL
NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY
```

- [ ] **Step 2: Run all repository gates**

Run:

```bash
npm run test:auth
npm run test:creem
./node_modules/.bin/tsc --noEmit
./node_modules/.bin/eslint src/components/auth src/components/sections/PricingSection.tsx src/components/sections/SiteNav.tsx src/app/auth/callback/page.tsx
./node_modules/.bin/next build
```

Expected: tests, type checking, lint, and static export pass. If Google Fonts network access blocks `next build`, rerun with network access and report the external dependency separately from code failures.

- [ ] **Step 3: Verify no secrets entered the client bundle**

Run:

```bash
rg -n "SUPABASE_SERVICE_ROLE_KEY|sb_secret_|CREEM_API_KEY|creem_(test|live)_" src out
```

Expected: no matches in `src` or `out`.

- [ ] **Step 4: Perform browser flow checks**

Verify desktop and mobile widths for Chinese and English:

1. Signed-out account control opens login.
2. GitHub and Google redirect to Supabase and return to the correct Pricing locale.
3. Email OTP establishes a session.
4. Refresh preserves login; sign-out removes it.
5. Signed-out purchase opens login without a checkout request.
6. Signed-in purchase opens the Creem hosted checkout.
7. Payment return refreshes Pro status.

- [ ] **Step 5: Commit deployment documentation**

```bash
git add README.md
git commit -m "docs: document website auth deployment"
```
