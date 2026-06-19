import type { Metadata } from "next";
import SiteNav from "@/components/sections/SiteNav";
import SiteFooter from "@/components/sections/SiteFooter";
import PricingSection from "@/components/sections/PricingSection";

const SITE_URL = "https://xbysite.pages.dev";
const TITLE = "Pricing — Free forever, Pro when you need more";
const DESCRIPTION =
  "BoxPlayer is free forever. Pro unlocks unlimited AI Smart Search, AI file organizer, AI reading companion and more. $10/mo, $79/yr (save 34%), or $199 lifetime — one subscription works on every device.";

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
      <SiteNav />
      <main className="flex-1">
        <PricingSection lang="en" />
      </main>
      <SiteFooter />
    </>
  );
}
