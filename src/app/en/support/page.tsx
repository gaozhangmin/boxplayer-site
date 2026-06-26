import type { Metadata } from "next";
import SiteFooter from "@/components/sections/SiteFooter";
import SiteNav from "@/components/sections/SiteNav";
import SupportTicketForm from "@/components/support/SupportTicketForm";

const SITE_URL = "https://xbysite.pages.dev";
const TITLE = "Support Tickets · Bugs and Feature Requests";
const DESCRIPTION = "Submit BoxPlayer software bugs, platform compatibility issues, and feature requests. Sign-in is optional; signed-in tickets are linked to your account.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: {
    canonical: "/en/support/",
    languages: {
      "en-US": "/en/support/",
      "zh-CN": "/support/",
      "x-default": "/support/",
    },
  },
  openGraph: {
    type: "website",
    url: `${SITE_URL}/en/support/`,
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

export default function SupportEn() {
  return (
    <>
      <SiteNav lang="en" />
      <main className="flex-1">
        <SupportTicketForm lang="en" />
      </main>
      <SiteFooter lang="en" />
    </>
  );
}
