import Link from "next/link";
import Image from "next/image";

const NAV = [
  { href: "#features", label: "Features" },
  { href: "#showcase", label: "Showcase" },
  { href: "#opensource", label: "Open source" },
  { href: "#cli", label: "CLI · Agent" },
  { href: "#download", label: "Download" },
];

export default function SiteNav() {
  return (
    <header
      role="banner"
      className="sticky top-0 z-50 backdrop-blur-md bg-paper/80 border-b border-ink-100/60"
    >
      <nav
        aria-label="主导航"
        className="mx-auto max-w-7xl px-6 lg:px-10 h-16 flex items-center justify-between"
      >
        <Link
          href="/"
          aria-label="BoxPlayer 首页"
          className="flex items-center gap-2.5"
        >
          <div
            className="w-8 h-8 rounded-xl bg-sky-100 grid place-items-center ring-1 ring-sky-200"
            aria-hidden
          >
            <Image
              src="/images/icons/blue.svg"
              alt=""
              width={20}
              height={20}
              className="w-5 h-5"
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

        <a
          href="#download"
          className="btn-primary text-sm"
          aria-label="Get BoxPlayer — 跳转到下载区域"
        >
          Get BoxPlayer
        </a>
      </nav>
    </header>
  );
}
