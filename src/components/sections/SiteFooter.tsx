import Link from "next/link";
import Image from "next/image";
import { GithubIcon } from "@/components/icons/GithubIcon";

const GITHUB_REPO = "https://github.com/gaozhangmin/boxplayer";

export default function SiteFooter({ lang = "zh" }: { lang?: "en" | "zh" }) {
  const isEn = lang === "en";
  const t = isEn
    ? {
        nav: "Footer navigation",
        features: "Features",
        pricing: "Pricing",
        openSource: "Open source",
        download: "Download",
        tickets: "Support",
        privacy: "Privacy Policy",
        terms: "Terms of Service",
        support: "Customer support",
      }
    : {
        nav: "底部导航",
        features: "功能",
        pricing: "价格",
        openSource: "开源",
        download: "下载",
        tickets: "工单",
        privacy: "隐私政策",
        terms: "使用条款",
        support: "客服邮箱: boxplayer-support@proton.me",
      };
  const homePrefix = isEn ? "/en/" : "/";
  const pricingHref = isEn ? "/en/pricing" : "/pricing";
  const supportHref = isEn ? "/en/support" : "/support";
  const privacyHref = isEn ? "/en/privacy" : "/privacy";
  const termsHref = isEn ? "/en/terms" : "/terms";
  return (
    <footer
      role="contentinfo"
      className="border-t border-ink-100 py-10 sm:py-14 mt-10"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10 flex flex-col md:flex-row md:items-center justify-between gap-5 sm:gap-6">
        <div className="flex flex-wrap items-center gap-2 sm:gap-2.5">
          <div
            className="w-7 h-7 rounded-lg bg-sky-100 grid place-items-center ring-1 ring-sky-200"
            aria-hidden
          >
            <Image
              src="/images/icons/blue.svg"
              alt=""
              width={18}
              height={18}
            />
          </div>
          <span className="font-semibold text-ink-700">BoxPlayer</span>
          <span className="text-ink-500 text-sm ml-2">
            © {new Date().getFullYear()} BoxPlayer Team · MIT licensed
          </span>
        </div>

        <nav
          aria-label={t.nav}
          className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-ink-500"
        >
          <a href={`${homePrefix}#features`} className="hover:text-skype-deep transition">
            {t.features}
          </a>
          <Link href={pricingHref} className="hover:text-skype-deep transition">
            {t.pricing}
          </Link>
          <a href={`${homePrefix}#opensource`} className="hover:text-skype-deep transition">
            {t.openSource}
          </a>
          <a href={`${homePrefix}#cli`} className="hover:text-skype-deep transition">
            CLI
          </a>
          <a href={`${homePrefix}#download`} className="hover:text-skype-deep transition">
            {t.download}
          </a>
          <Link href={supportHref} className="hover:text-skype-deep transition">
            {t.tickets}
          </Link>
          <a
            href={GITHUB_REPO}
            target="_blank"
            rel="noopener"
            className="hover:text-skype-deep transition inline-flex items-center gap-1.5"
          >
            <GithubIcon className="w-4 h-4" />
            GitHub
          </a>
          <Link
            href={privacyHref}
            className="hover:text-skype-deep transition"
            rel="nofollow"
          >
            {t.privacy}
          </Link>
          <Link
            href={termsHref}
            className="hover:text-skype-deep transition"
            rel="nofollow"
          >
            {t.terms}
          </Link>
          <a
            href="mailto:boxplayer-support@proton.me"
            className="hover:text-skype-deep transition"
          >
            {t.support}
          </a>
        </nav>
      </div>
    </footer>
  );
}
