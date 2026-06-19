import type { Metadata } from "next";
import SiteNav from "@/components/sections/SiteNav";
import SiteFooter from "@/components/sections/SiteFooter";
import PricingSection from "@/components/sections/PricingSection";

const SITE_URL = "https://xbysite.pages.dev";
const TITLE = "价格 · 免费永久 + 专业版";
const DESCRIPTION =
  "BoxPlayer 永久免费，专业版解锁无限 AI 智能搜索、AI 文件整理、AI 阅读助手等高级功能。月付 $10、年付 $79（省 34%）、终身 $199 一次买断，一次订阅全设备通用。";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: {
    canonical: "/pricing/",
    languages: {
      "zh-CN": "/pricing/",
      "en-US": "/en/pricing/",
      "x-default": "/pricing/",
    },
  },
  openGraph: {
    type: "website",
    url: `${SITE_URL}/pricing/`,
    title: `${TITLE} · BoxPlayer`,
    description: DESCRIPTION,
    locale: "zh_CN",
  },
  twitter: {
    card: "summary_large_image",
    title: `${TITLE} · BoxPlayer`,
    description: DESCRIPTION,
  },
};

export default function PricingZh() {
  return (
    <>
      <SiteNav />
      <main className="flex-1">
        <PricingSection lang="zh" />
      </main>
      <SiteFooter />
    </>
  );
}
