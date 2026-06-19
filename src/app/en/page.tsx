import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Cloud, Sparkles, Layers, Zap, Repeat, Shield, Apple, Smartphone, Monitor, Tv } from "lucide-react";
import PricingSection from "@/components/sections/PricingSection";

const SITE_URL = "https://xbysite.pages.dev";
const TITLE_EN = "BoxPlayer — Cross-platform 4K HDR media player & Plex / Jellyfin / Emby client for Windows, Linux, macOS, Apple TV and iOS";
const DESCRIPTION_EN =
  "BoxPlayer is a free open-source cross-platform 4K HDR video player and media server client. Native Plex, Jellyfin and Emby client for Windows, Linux, macOS, Apple TV and iOS. Connect to self-hosted media servers, self-hosted NFS, SMB, WebDAV and FTP shares — including Synology, QNAP, TrueNAS and unRAID. Stream from Aliyun Drive, OneDrive, Google Drive, Dropbox and more, with progress synced across every screen.";

export const metadata: Metadata = {
  title: TITLE_EN,
  description: DESCRIPTION_EN,
  keywords: [
    "BoxPlayer",
    "free media player",
    "open source video player",
    "cross platform media player",
    "4K HDR player",
    "Dolby Vision player",
    "HDR10 player",
    "iOS video player",
    "Apple TV media player",
    "macOS video player",
    "Windows video player",
    "Linux video player",
    "Plex client",
    "Plex client for Windows",
    "Plex client for Linux",
    "Plex client for Apple TV",
    "Jellyfin client",
    "Jellyfin client for Windows",
    "Jellyfin client for Linux",
    "Jellyfin client for Apple TV",
    "Jellyfin client for macOS",
    "Emby client",
    "Emby client for Windows",
    "Emby client for Linux",
    "Kodi alternative",
    "Infuse alternative",
    "VLC alternative",
    "self hosted media server",
    "home media server client",
    "media server client",
    "Windows media server",
    "Linux media server",
    "Docker Jellyfin",
    "Docker Plex",
    "Synology media server",
    "QNAP media server",
    "TrueNAS media server",
    "unRAID media server",
    "NFS video player",
    "NFS media player",
    "self hosted NFS",
    "NFS share player",
    "SMB video player",
    "WebDAV video player",
    "FTP video player",
    "NAS video player",
    "Aliyun Drive player",
    "OneDrive player",
    "Google Drive player",
    "Dropbox player",
    "ISO Blu-ray player",
    "UHD Blu-ray player",
  ],
  alternates: {
    canonical: "/en/",
    languages: {
      "en-US": "/en/",
      "zh-CN": "/",
      "x-default": "/",
    },
  },
  openGraph: {
    type: "website",
    url: `${SITE_URL}/en/`,
    title: TITLE_EN,
    description: DESCRIPTION_EN,
    locale: "en_US",
    alternateLocale: ["zh_CN"],
    siteName: "BoxPlayer",
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE_EN,
    description: DESCRIPTION_EN,
  },
};

const FEATURES = [
  {
    icon: Cloud,
    title: "Cloud-direct streaming",
    body: "Stream straight from Aliyun Drive, Baidu Pan, OneDrive, Google Drive, Dropbox — no downloads, instant 4K playback with smart cache.",
  },
  {
    icon: Sparkles,
    title: "True 4K HDR & Dolby Vision",
    body: "Original ISO, VIDEO_TS, Dolby Vision, HDR10+, Dolby Atmos and DTS-HD MA — every frame, every sound.",
  },
  {
    icon: Layers,
    title: "Smart media library",
    body: "Poster wall, auto-recognition, TMDB metadata, automatic subtitle matching. Your drive, finally Netflix-elegant.",
  },
  {
    icon: Zap,
    title: "Plex · Jellyfin · Emby client",
    body: "Native client for the major media servers — connect once to your self-hosted Plex / Jellyfin / Emby on Windows, Linux, Docker, Synology, QNAP, TrueNAS or unRAID, every device stays in sync.",
  },
  {
    icon: Repeat,
    title: "Across every screen",
    body: "iPhone, iPad, Apple TV, Mac, Windows, Linux — one account, one timeline.",
  },
  {
    icon: Shield,
    title: "NAS · self-hosted NFS · local-first",
    body: "Mount Synology / QNAP / TrueNAS / unRAID NAS, plus self-hosted NFS, SMB, WebDAV and FTP shares — your library, your network, your devices. BoxPlayer doesn't host content and doesn't phone home.",
  },
];

const PLATFORMS = [
  { icon: Apple, name: "iOS · iPadOS", desc: "Search BoxPlayer on the App Store" },
  { icon: Tv, name: "Apple TV", desc: "Native tvOS, made for the living room" },
  { icon: Monitor, name: "macOS", desc: "Apple Silicon native, full M-chip speed" },
  { icon: Smartphone, name: "Android", desc: "Google Play & APK · Coming soon" },
];

export default function HomeEn() {
  return (
    <>
      <header
        role="banner"
        className="sticky top-0 z-50 backdrop-blur-md bg-paper/80 border-b border-ink-100/60"
      >
        <nav
          aria-label="Primary"
          className="mx-auto max-w-7xl px-6 lg:px-10 h-16 flex items-center justify-between"
        >
          <Link href="/en" className="flex items-center gap-2.5">
            <div
              className="w-8 h-8 rounded-xl bg-sky-100 grid place-items-center ring-1 ring-sky-200"
              aria-hidden
            >
              <Image src="/images/icons/blue.svg" alt="" width={20} height={20} />
            </div>
            <span className="font-semibold text-ink-900 tracking-tight">BoxPlayer</span>
          </Link>
          <div className="flex items-center gap-2 text-sm">
            <Link href="/" className="btn-ghost text-sm" hrefLang="zh-CN">
              中文
            </Link>
            <a href="#download" className="btn-primary text-sm">
              Get BoxPlayer
            </a>
          </div>
        </nav>
      </header>

      <main className="flex-1">
        {/* Hero */}
        <section
          aria-labelledby="hero-heading-en"
          className="relative overflow-hidden"
        >
          <div className="absolute inset-0 ambient-glow pointer-events-none" />
          <div className="relative mx-auto max-w-7xl px-6 lg:px-10 pt-20 pb-16 md:pt-28 md:pb-24">
            <div className="flex flex-col items-center text-center">
              <span className="eyebrow">
                <span className="w-1.5 h-1.5 rounded-full bg-leaf" aria-hidden />
                Cross-platform · 4K HDR · Cloud native
              </span>
              <h1
                id="hero-heading-en"
                className="font-display mt-7 text-[clamp(2.5rem,6vw,4.25rem)] leading-[1.08] tracking-[-0.02em] text-ink-900 display-balance max-w-4xl"
              >
                A media player your{" "}
                <span className="italic text-skype-deep">library</span>
                <br className="hidden md:block" />
                actually deserves.
              </h1>
              <p className="mt-6 max-w-2xl text-ink-500 text-lg leading-relaxed">
                BoxPlayer is a cross-platform 4K HDR video player and Plex / Jellyfin / Emby client for Windows, Linux, macOS, Apple TV and iOS — connect to self-hosted media servers and NFS / SMB / WebDAV shares, with progress synced across every screen.
              </p>
              <div className="mt-9 flex items-center gap-3">
                <a href="#download" className="btn-primary">
                  Download for free <ArrowRight className="w-4 h-4" aria-hidden />
                </a>
                <a href="#features" className="btn-ghost">
                  See how it works
                </a>
              </div>
              <p className="mt-5 text-sm italic text-ink-300">
                Free during preview · iOS · Android · Apple TV · macOS · Windows
              </p>
            </div>

            <div className="relative mt-16 md:mt-20">
              <div className="absolute -inset-x-10 -top-10 -bottom-10 bg-gradient-to-b from-sky-100/40 via-transparent to-transparent rounded-[40px] blur-2xl pointer-events-none" />
              <div className="relative card-soft overflow-hidden ring-soft">
                <Image
                  src="/images/desktop/win-hero.png"
                  alt="BoxPlayer cross-platform 4K HDR media player and Plex / Jellyfin / Emby client UI on Windows, Linux and macOS, with poster wall and self-hosted NFS / SMB sources"
                  width={2400}
                  height={1500}
                  priority
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Features */}
        <section
          id="features"
          aria-labelledby="features-heading-en"
          className="relative py-24 md:py-32"
        >
          <div className="mx-auto max-w-7xl px-6 lg:px-10">
            <div className="text-center max-w-3xl mx-auto">
              <span className="text-skype-deep font-semibold text-sm tracking-[0.18em] uppercase">
                Why BoxPlayer
              </span>
              <h2
                id="features-heading-en"
                className="font-display mt-4 text-[clamp(2rem,4.5vw,3.25rem)] leading-[1.05] tracking-[-0.02em] text-ink-900 display-balance"
              >
                Not just a player.{" "}
                <span className="italic text-skype-deep">A whole theatre.</span>
              </h2>
              <p className="mt-5 text-ink-500 text-lg leading-relaxed">
                Plenty of players exist. Few get clouds, original discs, media servers, subtitles, and cross-device progress right in one place. BoxPlayer does.
              </p>
            </div>

            <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {FEATURES.map((f) => (
                <div
                  key={f.title}
                  className="card-soft p-7 transition hover:-translate-y-0.5 hover:shadow-lg"
                >
                  <div
                    className="w-10 h-10 rounded-xl bg-sky-50 ring-1 ring-sky-100 grid place-items-center text-skype-deep"
                    aria-hidden
                  >
                    <f.icon className="w-5 h-5" strokeWidth={2} />
                  </div>
                  <h3 className="mt-5 font-semibold text-ink-900 text-lg">{f.title}</h3>
                  <p className="mt-2.5 text-ink-500 leading-relaxed text-[15px]">{f.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Download */}
        <section
          id="download"
          aria-labelledby="download-heading-en"
          className="relative py-24 md:py-32 ambient-glow overflow-hidden"
        >
          <div className="mx-auto max-w-5xl px-6 lg:px-10">
            <div className="card-soft ring-soft px-8 py-14 md:px-16 md:py-20 text-center">
              <span className="text-skype-deep font-semibold text-sm tracking-[0.18em] uppercase">
                Free during preview
              </span>
              <h2
                id="download-heading-en"
                className="font-display mt-4 text-[clamp(2.25rem,5vw,3.75rem)] leading-[1.05] tracking-[-0.02em] text-ink-900 display-balance"
              >
                Get BoxPlayer on{" "}
                <span className="italic text-skype-deep">every screen.</span>
              </h2>
              <p className="mt-5 max-w-xl mx-auto text-ink-500 text-lg leading-relaxed">
                Free during preview. Sign in once, sync progress, libraries and favourites across every device.
              </p>
              <ul
                className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-3 list-none"
                aria-label="Supported platforms"
              >
                {PLATFORMS.map((p) => (
                  <li
                    key={p.name}
                    className="card-soft px-4 py-5 flex flex-col items-center text-left gap-2 hover:-translate-y-0.5 transition"
                  >
                    <div
                      className="w-10 h-10 rounded-xl bg-sky-50 ring-1 ring-sky-100 grid place-items-center text-skype-deep"
                      aria-hidden
                    >
                      <p.icon className="w-5 h-5" />
                    </div>
                    <div className="text-center">
                      <div className="font-semibold text-ink-900 text-sm">{p.name}</div>
                      <div className="text-ink-500 text-xs mt-0.5">{p.desc}</div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
        <PricingSection />
      </main>

      <footer role="contentinfo" className="border-t border-ink-100 py-14 mt-10">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="flex items-center gap-2.5">
            <div
              className="w-7 h-7 rounded-lg bg-sky-100 grid place-items-center ring-1 ring-sky-200"
              aria-hidden
            >
              <Image src="/images/icons/blue.svg" alt="" width={18} height={18} />
            </div>
            <span className="font-semibold text-ink-700">BoxPlayer</span>
            <span className="text-ink-300 text-sm ml-2">
              © {new Date().getFullYear()} BoxPlayer Team
            </span>
          </div>
          <nav aria-label="Footer" className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-ink-500">
            <Link href="/" hrefLang="zh-CN" className="hover:text-skype-deep transition">
              中文
            </Link>
            <a href="#features" className="hover:text-skype-deep transition">
              Features
            </a>
            <a href="#download" className="hover:text-skype-deep transition">
              Download
            </a>
            <Link
              href="/en/privacy"
              className="hover:text-skype-deep transition"
              rel="nofollow"
            >
              Privacy
            </Link>
            <Link
              href="/en/terms"
              className="hover:text-skype-deep transition"
              rel="nofollow"
            >
              Terms
            </Link>
          </nav>
        </div>
      </footer>
    </>
  );
}
