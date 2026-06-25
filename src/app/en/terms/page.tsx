import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

const SITE_URL = "https://xbysite.pages.dev";
const TITLE = "Terms of Use";
const DESCRIPTION =
  "BoxPlayer Terms of Use — Understand your rights and responsibilities when using BoxPlayer.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: {
    canonical: "/en/terms/",
    languages: {
      "en-US": "/en/terms/",
      "zh-CN": "/terms/",
      "x-default": "/terms/",
    },
  },
  openGraph: {
    type: "website",
    url: `${SITE_URL}/en/terms/`,
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

export default function TermsEn() {
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
          <span className="ml-auto text-sm text-ink-300">Terms of Use</span>
        </nav>
      </header>

      <main className="flex-1 py-16 md:py-24">
        <article className="mx-auto max-w-3xl px-6">
          <h1 className="font-display text-3xl md:text-4xl tracking-[-0.02em] text-ink-900 mb-8">
            Terms of Use
          </h1>

          <p className="text-ink-500 mb-6">
            Last updated: June {new Date().getFullYear()}
          </p>

          <p className="text-ink-700 mb-8 leading-relaxed">
            Welcome to BoxPlayer. These Terms of Use (&ldquo;Terms&rdquo;)
            constitute a legal agreement between you and the BoxPlayer team.
            By downloading, installing, or using BoxPlayer, you agree to be
            bound by these Terms. If you do not agree, do not use BoxPlayer.
          </p>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-ink-900 mb-3">
              1. License and Use
            </h2>
            <p className="text-ink-700 leading-relaxed mb-3">
              BoxPlayer grants you a limited, non-exclusive, non-transferable,
              personal license to:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-ink-700 leading-relaxed">
              <li>Install and use BoxPlayer on your personal devices</li>
              <li>
                Use, modify, and distribute the BoxPlayer desktop open-source
                code under the MIT license
              </li>
              <li>
                Use BoxPlayer for personal media playback and home theater
                scenarios
              </li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-ink-900 mb-3">
              2. User Responsibilities
            </h2>
            <p className="text-ink-700 leading-relaxed mb-3">
              As a BoxPlayer user, you agree to:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-ink-700 leading-relaxed">
              <li>
                Not use BoxPlayer for any illegal purpose or to infringe upon
                intellectual property rights
              </li>
              <li>
                Not reverse-engineer, crack, or circumvent BoxPlayer&apos;s
                security mechanisms (except the open-source desktop version)
              </li>
              <li>
                Take responsibility for the content in your connected media
                servers, cloud drives, and network shares (NFS, SMB, WebDAV,
                etc.)
              </li>
              <li>
                Comply with the terms of service of third-party services you
                connect to (such as Plex, Jellyfin, Emby, Aliyun Drive,
                OneDrive, etc.)
              </li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-ink-900 mb-3">
              3. Intellectual Property
            </h2>
            <p className="text-ink-700 leading-relaxed">
              The BoxPlayer desktop version (Windows / Linux) source code is
              open-sourced on GitHub under the MIT license. The BoxPlayer
              name, icon, UI design, and mobile client code are protected by
              copyright. These Terms do not grant you any rights to BoxPlayer
              trademarks or branding.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-ink-900 mb-3">
              4. Disclaimer of Warranties
            </h2>
            <p className="text-ink-700 leading-relaxed mb-3">
              BoxPlayer is provided &ldquo;as is&rdquo; without warranties of
              any kind, express or implied, including but not limited to
              warranties of merchantability, fitness for a particular
              purpose, and non-infringement. We do not warrant that:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-ink-700 leading-relaxed">
              <li>BoxPlayer will meet your specific requirements</li>
              <li>
                The service will be uninterrupted, timely, secure, or
                error-free
              </li>
              <li>Any errors will be corrected</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-ink-900 mb-3">
              5. Limitation of Liability
            </h2>
            <p className="text-ink-700 leading-relaxed">
              To the maximum extent permitted by law, the BoxPlayer team
              shall not be liable for any direct, indirect, incidental,
              special, or consequential damages arising from the use or
              inability to use the software, including but not limited to
              data loss, device damage, or loss of profits.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-ink-900 mb-3">
              6. Third-Party Services
            </h2>
            <p className="text-ink-700 leading-relaxed">
              BoxPlayer supports connecting to third-party services (such as
              Plex, Jellyfin, Emby, Aliyun Drive, OneDrive, etc.). These
              services have their own terms of service and privacy policies.
              Please review them before use. BoxPlayer is not responsible for
              the content, availability, or conduct of third-party services.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-ink-900 mb-3">
              7. Termination
            </h2>
            <p className="text-ink-700 leading-relaxed">
              We reserve the right to suspend or terminate your access to
              BoxPlayer if you violate these Terms. You may terminate this
              agreement at any time by deleting the app and your account.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-ink-900 mb-3">
              8. Changes to Terms
            </h2>
            <p className="text-ink-700 leading-relaxed">
              We may update these Terms from time to time. Material changes
              will be communicated via in-app notification or email. Continued
              use of BoxPlayer constitutes acceptance of the revised Terms.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-ink-900 mb-3">
              9. Contact Us
            </h2>
            <p className="text-ink-700 leading-relaxed">
              If you have any questions about these Terms of Use, please
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
