"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";

const NAV = [
  { href: "#features", label: "Features" },
  { href: "#pricing", label: "Pricing" },
  { href: "#opensource", label: "Open source" },
  { href: "#cli", label: "CLI · Agent" },
  { href: "#faq", label: "FAQ" },
  { href: "#download", label: "Download" },
];

export default function SiteNav() {
  const [open, setOpen] = useState(false);

  return (
    <header
      role="banner"
      className="sticky top-0 z-50 backdrop-blur-md bg-paper/80 border-b border-ink-100/60"
    >
      <nav
        aria-label="主导航"
        className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10 h-14 sm:h-16 flex items-center justify-between"
      >
        <Link
          href="/"
          aria-label="BoxPlayer 首页"
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
              <a href={n.href} className="btn-ghost text-sm">
                {n.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <a
            href="#download"
            className="btn-primary text-xs sm:text-sm px-3 sm:px-6 py-2 sm:py-3"
            aria-label="Get BoxPlayer — 跳转到下载区域"
          >
            Get BoxPlayer
          </a>
          <button
            type="button"
            aria-label={open ? "关闭菜单" : "打开菜单"}
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
                <a
                  href={n.href}
                  onClick={() => setOpen(false)}
                  className="block px-3 py-2.5 rounded-lg text-ink-700 font-medium hover:bg-sky-50 hover:text-skype-deep transition"
                >
                  {n.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
