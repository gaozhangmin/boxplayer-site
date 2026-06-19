import { Apple, Smartphone, Monitor, Tv } from "lucide-react";
import { GithubIcon } from "@/components/icons/GithubIcon";

const APP_STORE_URL = "https://apps.apple.com/us/app/boxplayer/id6739804060";
const GITHUB_RELEASE_URL =
  "https://github.com/gaozhangmin/boxplayer/releases/latest";

const PLATFORMS = [
  {
    icon: Apple,
    name: "iOS · iPadOS",
    desc: "在 App Store 下载",
    href: APP_STORE_URL,
    cta: "App Store",
    accent: "store",
  },
  {
    icon: Tv,
    name: "Apple TV",
    desc: "tvOS 原生体验,客厅大屏首选",
    href: APP_STORE_URL,
    cta: "App Store",
    accent: "store",
  },
  {
    icon: Monitor,
    name: "macOS",
    desc: "Apple Silicon 原生,M 芯片满血",
    href: APP_STORE_URL,
    cta: "Mac App Store",
    accent: "store",
  },
  {
    icon: GithubIcon,
    name: "Windows",
    desc: "免费开源 · GitHub Release",
    href: GITHUB_RELEASE_URL,
    cta: "GitHub Release",
    accent: "github",
  },
  {
    icon: GithubIcon,
    name: "Linux",
    desc: "免费开源 · AppImage / deb / rpm",
    href: GITHUB_RELEASE_URL,
    cta: "GitHub Release",
    accent: "github",
  },
  {
    icon: Smartphone,
    name: "Android",
    desc: "Google Play 与 APK · Coming soon",
    href: undefined,
    cta: "敬请期待",
    accent: "muted",
  },
];

export default function Download({ lang = "zh" }: { lang?: "en" | "zh" }) {
  const t = lang === "en" ? { mac: "macOS", ios: "iOS · iPadOS", atv: "Apple TV", windows: "Windows", linux: "Linux", android: "Android", heading: "Download BoxPlayer", appStore: "Download on App Store", github: "GitHub Releases", badge: "Download" } : { mac: "macOS", ios: "iOS · iPadOS", atv: "Apple TV", windows: "Windows", linux: "Linux", android: "Android", heading: "下载 BoxPlayer", appStore: "App Store 下载", github: "GitHub 下载", badge: "下载" };
  return (
    <section
      id="download"
      aria-labelledby="download-heading"
      className="relative py-16 sm:py-24 md:py-32 ambient-glow overflow-hidden"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-10">
        <div className="card-soft ring-soft px-5 py-10 sm:px-8 sm:py-14 md:px-16 md:py-20 text-center">
          <span className="text-skype-deep font-semibold text-xs sm:text-sm tracking-[0.18em] uppercase">
            Free during preview
          </span>
          <h2
            id="download-heading"
            className="font-display mt-3 sm:mt-4 text-[clamp(1.875rem,7vw,3.75rem)] leading-[1.1] tracking-[-0.02em] text-ink-900 display-balance"
          >
            Get BoxPlayer on{" "}
            <span className="italic text-skype-deep">every screen.</span>
          </h2>
          <p className="mt-4 sm:mt-5 max-w-xl mx-auto text-ink-500 text-base sm:text-lg leading-relaxed">
            目前阶段完全免费。Apple 全家桶可在 App Store 直接下载,Windows
            与 Linux 桌面端 100% 免费开源,GitHub 上获取最新构建。
          </p>

          <ul
            className="mt-10 sm:mt-12 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-3"
            aria-label="BoxPlayer 支持的下载平台"
          >
            {PLATFORMS.map((p) => {
              const inner = (
                <>
                  <div
                    className={
                      p.accent === "github"
                        ? "w-10 h-10 rounded-xl bg-ink-900 grid place-items-center text-white"
                        : "w-10 h-10 rounded-xl bg-sky-50 ring-1 ring-sky-100 grid place-items-center text-skype-deep"
                    }
                    aria-hidden
                  >
                    <p.icon className="w-5 h-5" />
                  </div>
                  <div className="text-center">
                    <div className="font-semibold text-ink-900 text-sm">
                      {p.name}
                    </div>
                    <div className="text-ink-500 text-xs mt-0.5 leading-snug">{p.desc}</div>
                    <div
                      className={
                        p.accent === "muted"
                          ? "mt-2 sm:mt-3 text-xs font-medium text-ink-300"
                          : "mt-2 sm:mt-3 text-xs font-semibold text-skype-deep"
                      }
                    >
                      {p.cta}
                      {p.accent !== "muted" ? " →" : ""}
                    </div>
                  </div>
                </>
              );

              return (
                <li key={p.name}>
                  {p.href ? (
                    <a
                      href={p.href}
                      target="_blank"
                      rel="noopener"
                      className="card-soft px-3 py-4 sm:px-4 sm:py-5 flex flex-col items-center text-left gap-2 hover:-translate-y-0.5 hover:shadow-lg transition h-full"
                    >
                      {inner}
                    </a>
                  ) : (
                    <div className="card-soft px-3 py-4 sm:px-4 sm:py-5 flex flex-col items-center text-left gap-2 opacity-70 h-full">
                      {inner}
                    </div>
                  )}
                </li>
              );
            })}
          </ul>

          <p className="mt-6 sm:mt-8 text-xs text-ink-500 leading-relaxed">
            App Store 适用于 iOS 16+ / iPadOS 16+ / tvOS 16+ / macOS 13+ ·
            Windows 10+ 与主流 Linux 发行版从 GitHub Release 获取。
          </p>
        </div>
      </div>
    </section>
  );
}
