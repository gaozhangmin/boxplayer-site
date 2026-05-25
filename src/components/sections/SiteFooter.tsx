import Link from "next/link";
import Image from "next/image";
import { GithubIcon } from "@/components/icons/GithubIcon";

const GITHUB_REPO = "https://github.com/gaozhangmin/boxplayer";

export default function SiteFooter() {
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
          aria-label="底部导航"
          className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-ink-500"
        >
          <a href="#features" className="hover:text-skype-deep transition">
            Features
          </a>
          <a href="#opensource" className="hover:text-skype-deep transition">
            Open source
          </a>
          <a href="#cli" className="hover:text-skype-deep transition">
            CLI
          </a>
          <a href="#download" className="hover:text-skype-deep transition">
            Download
          </a>
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
            href="/privacy"
            className="hover:text-skype-deep transition"
            rel="nofollow"
          >
            Privacy
          </Link>
          <Link
            href="/terms"
            className="hover:text-skype-deep transition"
            rel="nofollow"
          >
            Terms
          </Link>
        </nav>
      </div>
    </footer>
  );
}
