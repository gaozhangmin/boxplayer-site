import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section
      className="relative overflow-hidden"
      aria-labelledby="hero-heading"
    >
      <div className="absolute inset-0 ambient-glow pointer-events-none" />
      <div className="relative mx-auto max-w-7xl px-6 lg:px-10 pt-20 pb-16 md:pt-28 md:pb-24">
        <div className="flex flex-col items-center text-center">
          <span className="eyebrow">
            <span className="w-1.5 h-1.5 rounded-full bg-leaf" aria-hidden />
            Cross-platform · 4K HDR · Cloud native
          </span>

          <h1
            id="hero-heading"
            className="font-display mt-7 text-[clamp(2.5rem,6vw,4.25rem)] leading-[1.08] tracking-[-0.02em] text-ink-900 display-balance max-w-4xl"
          >
            A media player your{" "}
            <span className="italic text-skype-deep">library</span>
            <br className="hidden md:block" />
            actually deserves.
          </h1>

          <p className="sr-only">
            BoxPlayer 是免费开源的跨平台视频播放器,iOS 播放器、Apple TV 播放器、Mac 播放器、Windows 播放器、Linux 播放器全平台可用。原生 Plex 客户端、Jellyfin 客户端、Emby 客户端,直连阿里云盘、百度网盘、OneDrive、Google Drive、115 网盘、PikPak、SMB、WebDAV、NFS、NAS。支持 4K HDR10、Dolby Vision 杜比视界、Dolby Atmos 杜比全景声、HDR10+、DTS-HD MA、TrueHD、ISO 原盘、BDMV、UHD 蓝光,是 Infuse、VidHub、Kodi、VLC、PotPlayer、nPlayer、MX Player 的免费替代方案。
          </p>

          <p className="mt-6 max-w-2xl text-ink-500 text-lg leading-relaxed">
            iOS 播放器、Apple TV 4K 播放器、macOS / Windows / Linux 桌面播放器 —
            一份代码,所有屏幕。原生 Plex / Jellyfin / Emby 客户端,直连阿里云盘、OneDrive、115 网盘、SMB、WebDAV,支持 4K HDR、杜比视界、原盘 ISO 与 UHD 蓝光。
          </p>

          <div className="mt-9 flex items-center gap-3">
            <a
              href="#download"
              className="btn-primary"
              aria-label="Download for free — BoxPlayer 免费下载"
            >
              Download for free
              <ArrowRight className="w-4 h-4" aria-hidden />
            </a>
            <a
              href="#features"
              className="btn-ghost"
              aria-label="See how it works — 查看功能"
            >
              See how it works
            </a>
          </div>

          <p className="mt-5 text-sm italic text-ink-500">
            Free during preview · iOS · Android · Apple TV · macOS · Windows
          </p>
        </div>

        <div className="relative mt-16 md:mt-20">
          <div className="absolute -inset-x-10 -top-10 -bottom-10 bg-gradient-to-b from-sky-100/40 via-transparent to-transparent rounded-[40px] blur-2xl pointer-events-none" />
          <div className="relative card-soft overflow-hidden ring-soft">
            <Image
              src="/images/desktop/win-hero.png"
              alt="BoxPlayer 跨平台 4K HDR 视频播放器主界面截图,展示媒体库与海报墙"
              width={2400}
              height={1500}
              priority
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
