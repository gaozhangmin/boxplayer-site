"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import AccountControl from "@/components/auth/AccountControl";



const NAV_ZH = [
  { href: "#features", label: "功能" }, { href: "/pricing/", label: "价格", absolute: true },
  { href: "/support/", label: "工单", absolute: true },
  { href: "#opensource", label: "开源" }, { href: "#cli", label: "CLI · Agent" },
  { href: "#faq", label: "FAQ" }, { href: "#download", label: "下载" },
];
const NAV_EN = [
  { href: "#features", label: "Features" }, { href: "/en/pricing/", label: "Pricing", absolute: true },
  { href: "/en/support/", label: "Support", absolute: true },
  { href: "#opensource", label: "Open Source" }, { href: "#cli", label: "CLI · Agent" },
  { href: "#faq", label: "FAQ" }, { href: "#download", label: "Download" },
];
export default function SiteNav({ lang = "zh" }: { lang?: "en" | "zh" }) {
  const NAV = lang === "en" ? NAV_EN : NAV_ZH;
  const [open, setOpen] = useState(false);
  const pathname = usePathname() || "/";
  const isEn = pathname.startsWith("/en");
  // Mirror the current path on the other locale: /en/x <-> /x
  const otherHref = isEn
    ? pathname.replace(/^\/en/, "") || "/"
    : `/en${pathname === "/" ? "" : pathname}`;
  const langLabel = isEn ? "中文" : "EN";
  const homeHref = isEn ? "/en" : "/";
  const homePrefix = isEn ? "/en/" : "/";
  const downloadHref = isEn ? "/en/#download" : "/#download";
  const labels = isEn
    ? {
        mainNav: "Main navigation",
        home: "BoxPlayer home",
        download: "Get BoxPlayer — jump to download section",
        menuOpen: "Open menu",
        menuClose: "Close menu",
      }
    : {
        mainNav: "主导航",
        home: "BoxPlayer 首页",
        download: "Get BoxPlayer — 跳转到下载区域",
        menuOpen: "打开菜单",
        menuClose: "关闭菜单",
      };

  return (
    <header
      role="banner"
      className="sticky top-0 z-50 backdrop-blur-md bg-paper/80 border-b border-ink-100/60"
    >
      <nav
        aria-label={labels.mainNav}
        className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10 h-14 sm:h-16 flex items-center justify-between"
      >
        <Link
          href={homeHref}
          aria-label={labels.home}
          className="flex items-center gap-2 sm:gap-2.5"
        >
          <div
            className="w-7 h-7 sm:w-8 sm:h-8 rounded-xl bg-sky-100 grid place-items-center ring-1 ring-sky-200"
            aria-hidden
          >
            <Image
              src="/images/icons/blue.svg"
              alt=""
              width={20}
              height={20}
              className="w-4 h-4 sm:w-5 sm:h-5"
            />
          </div>
          <span className="font-semibold text-ink-900 tracking-tight">
            BoxPlayer
          </span>
        </Link>

        <ul className="hidden md:flex items-center gap-1 text-sm list-none">
          {NAV.map((n) => (
            <li key={n.href}>
              <Link href={n.absolute ? n.href : `${homePrefix}${n.href}`} className="btn-ghost text-sm">{n.label}</Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <div className="hidden sm:block"><AccountControl lang={lang} /></div>
          <Link
            href={otherHref}
            hrefLang={isEn ? "zh-CN" : "en-US"}
            className="btn-ghost text-sm px-2.5 sm:px-3"
            aria-label={isEn ? "Switch to Chinese" : "切换到英文"}
          >
            {langLabel}
          </Link>
          <Link
            href={downloadHref}
            className="btn-primary text-xs sm:text-sm px-3 sm:px-6 py-2 sm:py-3"
            aria-label={labels.download}
          >
            Get BoxPlayer
          </Link>
          <button
            type="button"
            aria-label={open ? labels.menuClose : labels.menuOpen}
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen((v) => !v)}
            className="md:hidden inline-flex items-center justify-center w-9 h-9 rounded-lg text-ink-700 hover:bg-sky-50 transition"
          >
            {open ? (
              <X className="w-5 h-5" aria-hidden />
            ) : (
              <Menu className="w-5 h-5" aria-hidden />
            )}
          </button>
        </div>
      </nav>

      {open && (
        <div
          id="mobile-nav"
          className="md:hidden border-t border-ink-100/60 bg-paper/95 backdrop-blur-md"
        >
          <ul className="mx-auto max-w-7xl px-4 sm:px-6 py-3 flex flex-col gap-1 list-none">
            {NAV.map((n) => (
              <li key={n.href}>
                <Link
                  href={n.absolute ? n.href : `${homePrefix}${n.href}`}
                  onClick={() => setOpen(false)}
                  className="block px-3 py-2.5 rounded-lg text-ink-700 font-medium hover:bg-sky-50 hover:text-skype-deep transition"
                >
                  {n.label}
                </Link>
              </li>
            ))}
            <li className="mt-1 pt-2 border-t border-ink-100">
              <AccountControl lang={lang} fullWidth />
            </li>
            <li>
              <Link
                href={otherHref}
                hrefLang={isEn ? "zh-CN" : "en-US"}
                onClick={() => setOpen(false)}
                className="block px-3 py-2.5 rounded-lg text-ink-700 font-medium hover:bg-sky-50 hover:text-skype-deep transition"
              >
                {isEn ? "中文" : "English"}
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
