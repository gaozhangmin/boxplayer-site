import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

const SITE_URL = "https://xbysite.pages.dev";
const TITLE = "Privacy Policy";
const DESCRIPTION =
  "BoxPlayer Privacy Policy — Learn how we collect, use, and protect your personal information.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: {
    canonical: "/en/privacy/",
    languages: {
      "en-US": "/en/privacy/",
      "zh-CN": "/privacy/",
      "x-default": "/privacy/",
    },
  },
  openGraph: {
    type: "website",
    url: `${SITE_URL}/en/privacy/`,
    title: `${TITLE} · BoxPlayer`,
    description: DESCRIPTION,
    locale: "en_US",
  },
  twitter: {
    card: "summary",
    title: `${TITLE} · BoxPlayer`,
    description: DESCRIPTION,
  },
};

export default function PrivacyEn() {
  return (
    <>
      <header className="sticky top-0 z-50 backdrop-blur-md bg-paper/80 border-b border-ink-100/60">
        <nav className="mx-auto max-w-3xl px-6 h-16 flex items-center">
          <Link href="/en" className="flex items-center gap-2.5">
            <div
              className="w-8 h-8 rounded-xl bg-sky-100 grid place-items-center ring-1 ring-sky-200"
              aria-hidden
            >
              <Image src="/images/icons/blue.svg" alt="" width={20} height={20} />
            </div>
            <span className="font-semibold text-ink-900 tracking-tight">
              BoxPlayer
            </span>
          </Link>
          <span className="ml-auto text-sm text-ink-300">Privacy Policy</span>
        </nav>
      </header>

      <main className="flex-1 py-16 md:py-24">
        <article className="mx-auto max-w-3xl px-6">
          <h1 className="font-display text-3xl md:text-4xl tracking-[-0.02em] text-ink-900 mb-8">
            Privacy Policy
          </h1>

          <p className="text-ink-500 mb-6">
            Last updated: June {new Date().getFullYear()}
          </p>

          <p className="text-ink-700 mb-8 leading-relaxed">
            BoxPlayer (&ldquo;we,&rdquo; &ldquo;us,&rdquo; or
            &ldquo;our&rdquo;) values your privacy. This Privacy Policy
            explains how we collect, use, store, and protect your personal
            information. Please read it carefully before using BoxPlayer.
          </p>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-ink-900 mb-3">
              1. Information We Collect
            </h2>
            <p className="text-ink-700 leading-relaxed mb-3">
              BoxPlayer is a local-first media player. We only collect the
              following information where necessary:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-ink-700 leading-relaxed">
              <li>
                <strong>Account information:</strong> When you register a
                BoxPlayer account, we collect your email address and encrypted
                password for authentication and cross-device sync.
              </li>
              <li>
                <strong>Sync data:</strong> Playback progress, favorites, and
                playback settings are synced across your devices and stored on
                our servers.
              </li>
              <li>
                <strong>Device information:</strong> Device model, OS version,
                and app version for compatibility support and troubleshooting.
              </li>
              <li>
                <strong>Crash and diagnostic data:</strong> When the app
                crashes, we collect crash logs to improve stability. You can
                disable this in Settings at any time.
              </li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-ink-900 mb-3">
              2. Information We Do NOT Collect
            </h2>
            <p className="text-ink-700 leading-relaxed mb-3">
              To protect your privacy, BoxPlayer explicitly does not collect:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-ink-700 leading-relaxed">
              <li>Your media file content or detailed playback history</li>
              <li>Your cloud drive file listings or file contents</li>
              <li>
                Your NAS, SMB, NFS, or WebDAV connection credentials (stored
                locally only)
              </li>
              <li>Your network traffic data</li>
              <li>Your location information</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-ink-900 mb-3">
              3. How We Use Information
            </h2>
            <p className="text-ink-700 leading-relaxed mb-3">
              The information we collect is used solely for:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-ink-700 leading-relaxed">
              <li>Providing cross-device sync functionality</li>
              <li>Improving product stability and user experience</li>
              <li>Responding to user feedback and support requests</li>
              <li>Complying with legal obligations</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-ink-900 mb-3">
              4. Storage and Security
            </h2>
            <p className="text-ink-700 leading-relaxed mb-3">
              We employ industry-standard security measures to protect your
              personal information, including transport encryption
              (TLS/HTTPS), storage encryption, and access controls. Your media
              library metadata and cloud drive credentials are stored only on
              your local device and are never uploaded to our servers.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-ink-900 mb-3">
              5. Information Sharing
            </h2>
            <p className="text-ink-700 leading-relaxed mb-3">
              We do not sell, trade, or rent your personal information to
              third parties. We may share information only:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-ink-700 leading-relaxed">
              <li>With your explicit consent</li>
              <li>When required by law, regulation, or government authority</li>
              <li>To protect BoxPlayer&apos;s legitimate rights and interests</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-ink-900 mb-3">
              6. Your Rights
            </h2>
            <p className="text-ink-700 leading-relaxed mb-3">
              You have the right to access, correct, and delete your personal
              information, as well as withdraw consent and delete your
              account. You can manage your data preferences in the app
              Settings at any time, or contact us at{" "}
              <a
                href="mailto:boxplayer-support@proton.me"
                className="text-skype-deep hover:underline"
              >
                boxplayer-support@proton.me
              </a>
              .
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-ink-900 mb-3">
              7. Children&apos;s Privacy
            </h2>
            <p className="text-ink-700 leading-relaxed">
              BoxPlayer is not intended for children under 13. We do not
              knowingly collect personal information from children. If we
              discover such collection, please contact us immediately for
              deletion.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-ink-900 mb-3">
              8. Policy Updates
            </h2>
            <p className="text-ink-700 leading-relaxed">
              We may update this Privacy Policy from time to time. Material
              changes will be communicated via in-app notification or email.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-ink-900 mb-3">
              9. Contact Us
            </h2>
            <p className="text-ink-700 leading-relaxed">
              If you have any questions about this Privacy Policy, please
              contact us at{" "}
              <a
                href="mailto:boxplayer-support@proton.me"
                className="text-skype-deep hover:underline"
              >
                boxplayer-support@proton.me
              </a>
              .
            </p>
          </section>

          <div className="mt-12 pt-6 border-t border-ink-100">
            <Link
              href="/en"
              className="text-sm text-skype-deep hover:underline inline-flex items-center gap-1"
            >
              ← Back to Home
            </Link>
          </div>
        </article>
      </main>
    </>
  );
}
