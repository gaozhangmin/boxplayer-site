import type { Metadata } from "next";
import SiteNav from "@/components/sections/SiteNav";
import Hero from "@/components/sections/Hero";
import Features from "@/components/sections/Features";
import PricingSection from "@/components/sections/PricingSection";
import Showcase from "@/components/sections/Showcase";
import Sources from "@/components/sections/Sources";
import OpenSource from "@/components/sections/OpenSource";
import DeveloperCLI from "@/components/sections/DeveloperCLI";
import Download from "@/components/sections/Download";
import FAQ from "@/components/sections/FAQ";
import SiteFooter from "@/components/sections/SiteFooter";

const SITE_URL = "https://xbysite.pages.dev";
const TITLE_EN = "BoxPlayer — Cloud Drive Manager · AI Smart Search · 4K HDR Player · Plex / Jellyfin / Emby Client";
const DESCRIPTION_EN = "BoxPlayer is a free open-source cross-platform cloud drive manager and AI-powered search assistant. AI Agent searches all your cloud drives and the open web. AI file organizer, reading companion, text-to-speech and translation. Also a 4K HDR video player and media server client for iOS, Apple TV, macOS, Windows and Linux — native Plex, Jellyfin and Emby client.";

export const metadata: Metadata = {
  title: TITLE_EN,
  description: DESCRIPTION_EN,
  alternates: {
    canonical: "/en/",
    languages: { "en-US": "/en/", "zh-CN": "/", "x-default": "/" },
  },
  openGraph: {
    type: "website", url: `${SITE_URL}/en/`, title: TITLE_EN, description: DESCRIPTION_EN,
    locale: "en_US", alternateLocale: ["zh_CN"], siteName: "BoxPlayer",
  },
  twitter: { card: "summary_large_image", title: TITLE_EN, description: DESCRIPTION_EN },
};

export default function HomeEn() {
  return (
    <>
      <SiteNav />
      <main className="flex-1">
        <Hero lang="en" />
        <Features lang="en" />
        <PricingSection lang="en" />
        <Showcase lang="en" />
        <Sources />
        <OpenSource />
        <DeveloperCLI />
        <Download />
        <FAQ />
      </main>
      <SiteFooter />
    </>
  );
}
