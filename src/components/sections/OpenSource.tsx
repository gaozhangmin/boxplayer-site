import { Code2, Heart, Star, Scale } from "lucide-react";
import { GithubIcon } from "@/components/icons/GithubIcon";

const GITHUB_REPO = "https://github.com/gaozhangmin/boxplayer";
const GITHUB_RELEASE = "https://github.com/gaozhangmin/boxplayer/releases/latest";

const HIGHLIGHTS = [
  {
    icon: Code2,
    title: "源码完全开放",
    body: "Windows / Linux 客户端在 GitHub 上 100% 开源,代码、构建脚本、Release 二进制全部公开,审计、自托管、二次开发,你说了算。",
  },
  {
    icon: Heart,
    title: "永久免费,没有付费墙",
    body: "不限时、不锁码率、不缩水音轨。HDR、杜比视界、ISO 原盘、Plex/Jellyfin/Emby 接入 — 全部不收费。",
  },
  {
    icon: Scale,
    title: "MIT 友好的协议",
    body: "你可以读它、改它、把它拿去 fork 做自己的播放器。我们只希望它让更多人在大屏上享受好画质。",
  },
];

export default function OpenSource({ lang = "zh" }: { lang?: "en" | "zh" }) {
  return (
    <section
      id="opensource"
      aria-labelledby="opensource-heading"
      className="relative py-16 sm:py-24 md:py-32 bg-sky-50/40 overflow-hidden"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
        <div className="grid lg:grid-cols-[1.05fr_0.95fr] gap-10 sm:gap-12 lg:gap-20 items-start">
          {/* Left: pitch */}
          <div className="min-w-0">
            <span className="eyebrow">
              <span
                className="w-1.5 h-1.5 rounded-full bg-leaf"
                aria-hidden
              />
              <span className="hidden sm:inline">The only free &amp; open-source one</span>
              <span className="sm:hidden">Free &amp; open-source</span>
            </span>
            <h2
              id="opensource-heading"
              className="font-display mt-6 sm:mt-7 text-[clamp(1.875rem,6vw,3.5rem)] leading-[1.1] tracking-[-0.02em] text-ink-900 display-balance"
            >
              全网唯一{" "}
              <span className="italic text-skype-deep">免费开源</span>
              <br className="hidden md:block" />
              的跨端视频播放器。
            </h2>
            <p className="mt-5 sm:mt-6 text-ink-500 text-base sm:text-lg leading-relaxed max-w-xl">
              市面上跨平台播放器要么收钱、要么闭源、要么砍 Linux。
              BoxPlayer 在 Windows 与 Linux 桌面端是 <strong className="text-ink-900">完全免费 + 代码开源</strong>
              的 — 一份代码,所有人都能编译、审计、修改、分发。
            </p>

            <div className="mt-7 sm:mt-8 flex flex-wrap gap-3">
              <a
                href={GITHUB_REPO}
                target="_blank"
                rel="noopener"
                className="inline-flex items-center gap-2 rounded-xl bg-ink-900 hover:bg-ink-700 transition text-white px-5 py-3 text-sm font-semibold"
                aria-label="View BoxPlayer on GitHub"
              >
                <GithubIcon className="w-4 h-4" />
                View on GitHub
              </a>
              <a
                href={GITHUB_RELEASE}
                target="_blank"
                rel="noopener"
                className="btn-ghost text-sm border border-ink-100"
              >
                <Star className="w-4 h-4" aria-hidden />
                Download release
              </a>
            </div>

            <dl className="mt-8 sm:mt-10 grid grid-cols-3 max-w-md gap-x-4 sm:gap-x-6 gap-y-2">
              <div>
                <dt className="text-[10px] sm:text-xs uppercase tracking-wider text-ink-300">
                  License
                </dt>
                <dd className="mt-1 font-semibold text-ink-900 flex items-center gap-1.5 text-sm sm:text-base">
                  <Scale className="w-4 h-4 text-skype-deep" aria-hidden />
                  MIT
                </dd>
              </div>
              <div>
                <dt className="text-[10px] sm:text-xs uppercase tracking-wider text-ink-300">
                  Platforms
                </dt>
                <dd className="mt-1 font-semibold text-ink-900 text-sm sm:text-base">Win · Linux</dd>
              </div>
              <div>
                <dt className="text-[10px] sm:text-xs uppercase tracking-wider text-ink-300">
                  Cost
                </dt>
                <dd className="mt-1 font-semibold text-ink-900 text-sm sm:text-base">$0 forever</dd>
              </div>
            </dl>

            {/* Star history — community proof, sits right under the stats */}
            <div className="mt-8 sm:mt-10 card-soft p-4 sm:p-5 max-w-md">
              <div className="flex items-center justify-between gap-3 mb-3">
                <div className="flex items-center gap-2">
                  <div
                    className="w-9 h-9 shrink-0 rounded-xl bg-sky-50 ring-1 ring-sky-100 grid place-items-center text-skype-deep"
                    aria-hidden
                  >
                    <Star className="w-4 h-4" />
                  </div>
                  <h3 className="font-semibold text-ink-900 text-[15px]">
                    Star history
                  </h3>
                </div>
                <a
                  href="https://www.star-history.com/#gaozhangmin/gaozhangmin&gaozhangmin/boxplayer&Date"
                  target="_blank"
                  rel="noopener"
                  className="text-xs text-skype-deep hover:underline"
                >
                  View →
                </a>
              </div>
              <a
                href="https://www.star-history.com/#gaozhangmin/gaozhangmin&gaozhangmin/boxplayer&Date"
                target="_blank"
                rel="noopener"
                aria-label="Open full Star history chart"
                className="block"
              >
                <picture>
                  <source
                    media="(prefers-color-scheme: dark)"
                    srcSet="https://api.star-history.com/svg?repos=gaozhangmin/gaozhangmin,gaozhangmin/boxplayer&type=Date&theme=dark"
                  />
                  <img
                    src="https://api.star-history.com/svg?repos=gaozhangmin/gaozhangmin,gaozhangmin/boxplayer&type=Date"
                    alt="Star History Chart for gaozhangmin/gaozhangmin and gaozhangmin/boxplayer"
                    loading="lazy"
                    className="block w-full h-auto max-h-56 object-contain rounded-lg"
                  />
                </picture>
              </a>
            </div>
          </div>

          {/* Right: feature cards */}
          <ul className="space-y-4 list-none min-w-0" aria-label="开源亮点">
            {HIGHLIGHTS.map((h) => (
              <li
                key={h.title}
                className="card-soft p-5 sm:p-7 hover:-translate-y-0.5 transition"
              >
                <div className="flex items-start gap-4">
                  <div
                    className="w-10 h-10 shrink-0 rounded-xl bg-sky-50 ring-1 ring-sky-100 grid place-items-center text-skype-deep"
                    aria-hidden
                  >
                    <h.icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-ink-900 text-base sm:text-lg">
                      {h.title}
                    </h3>
                    <p className="mt-1.5 text-ink-500 leading-relaxed text-sm sm:text-[15px]">
                      {h.body}
                    </p>
                  </div>
                </div>
              </li>
            ))}

            {/* Mock terminal card */}
            <li className="card-soft p-0 overflow-hidden">
              <div className="flex items-center gap-1.5 bg-ink-900 px-4 py-2.5">
                <span className="w-2.5 h-2.5 rounded-full bg-coral" aria-hidden />
                <span className="w-2.5 h-2.5 rounded-full bg-gold" aria-hidden />
                <span className="w-2.5 h-2.5 rounded-full bg-leaf" aria-hidden />
                <span className="ml-3 text-xs font-mono text-ink-300">
                  build.sh
                </span>
              </div>
              <pre className="bg-ink-900 text-xs sm:text-sm leading-6 px-4 sm:px-5 py-4 font-mono text-sky-200 overflow-x-auto m-0">
                <code>{`# Linux / Windows
git clone https://github.com/gaozhangmin/boxplayer.git
cd boxplayer
pnpm install
pnpm run build:linux   # or build:win`}</code>
              </pre>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
