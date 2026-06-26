import type { Metadata } from "next";
import SiteFooter from "@/components/sections/SiteFooter";
import SiteNav from "@/components/sections/SiteNav";
import SupportTicketForm from "@/components/support/SupportTicketForm";

const SITE_URL = "https://xbysite.pages.dev";
const TITLE = "提交工单 · Bug 与功能需求";
const DESCRIPTION = "向 BoxPlayer 提交软件 Bug、平台兼容性问题和功能需求。无需登录即可提交，登录后会自动关联账号。";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: {
    canonical: "/support/",
    languages: {
      "zh-CN": "/support/",
      "en-US": "/en/support/",
      "x-default": "/support/",
    },
  },
  openGraph: {
    type: "website",
    url: `${SITE_URL}/support/`,
    title: `${TITLE} · BoxPlayer`,
    description: DESCRIPTION,
    locale: "zh_CN",
  },
  twitter: {
    card: "summary",
    title: `${TITLE} · BoxPlayer`,
    description: DESCRIPTION,
  },
};

export default function SupportZh() {
  return (
    <>
      <SiteNav lang="zh" />
      <main className="flex-1">
        <SupportTicketForm lang="zh" />
      </main>
      <SiteFooter lang="zh" />
    </>
  );
}
