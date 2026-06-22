import type { Metadata } from "next";
import SiteNav from "@/components/sections/SiteNav";
import SiteFooter from "@/components/sections/SiteFooter";
import PricingSection from "@/components/sections/PricingSection";

const SITE_URL = "https://xbysite.pages.dev";
const TITLE = "价格 · 免费永久 + 专业版";
const DESCRIPTION =
  "BoxPlayer 永久免费，专业版一次购买即可在 Windows、Linux 和 macOS 解锁无限 AI 智能搜索、AI 文件整理、AI 阅读助手等高级功能。终身版 $199。";

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
      <SiteNav lang="zh" />
      <main className="flex-1">
        <PricingSection lang="zh" />
      </main>
      <SiteFooter lang="zh" />
    </>
  );
}
