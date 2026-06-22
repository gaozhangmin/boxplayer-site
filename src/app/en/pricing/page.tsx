import type { Metadata } from "next";
import SiteNav from "@/components/sections/SiteNav";
import SiteFooter from "@/components/sections/SiteFooter";
import PricingSection from "@/components/sections/PricingSection";

const SITE_URL = "https://xbysite.pages.dev";
const TITLE = "Pricing — Free forever, Pro when you need more";
const DESCRIPTION =
  "BoxPlayer is free forever. A one-time $199 Pro purchase unlocks unlimited AI Smart Search, file organization, and the AI reading companion on Windows, Linux, and macOS.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: {
    canonical: "/en/pricing/",
    languages: {
      "en-US": "/en/pricing/",
      "zh-CN": "/pricing/",
      "x-default": "/pricing/",
    },
  },
  openGraph: {
    type: "website",
    url: `${SITE_URL}/en/pricing/`,
    title: `${TITLE} · BoxPlayer`,
    description: DESCRIPTION,
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: `${TITLE} · BoxPlayer`,
    description: DESCRIPTION,
  },
};

export default function PricingEn() {
  return (
    <>
      <SiteNav lang="en" />
      <main className="flex-1">
        <PricingSection lang="en" />
      </main>
      <SiteFooter lang="en" />
    </>
  );
}
