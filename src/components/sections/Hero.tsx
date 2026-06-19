import Image from "next/image";
import { ArrowRight } from "lucide-react";

const HERO = {
  zh: {
    eyebrow: "跨平台 · 4K HDR · AI 智能搜索",
    heading: <>AI 搜索 · 云盘管理 ·{" "}<span className="italic text-skype-deep">4K 播放</span><br className="hidden md:block" />全在 BoxPlayer。</>,
    desc: "AI Agent 一句话搜全部网盘+全网资源。AI 文件整理、AI 阅读助手、语音朗读、即时翻译。也是 4K HDR 播放器,Plex / Jellyfin / Emby 客户端。",
    sr: "BoxPlayer 是免费开源的跨平台云盘管理器与 AI 智能搜索助手,也是 4K HDR 视频播放器与媒体服务器客户端。Infuse、VidHub、SenPlayer、Kodi、VLC、PotPlayer 的免费开源替代方案,aliyunpan 小白羊的云端进化版。",
    download: "免费下载", features: "查看功能",
  },
  en: {
    eyebrow: "Cross-platform · 4K HDR · AI-powered",
    heading: <>AI Search · Cloud Drive Manager ·{" "}<span className="italic text-skype-deep">4K Player</span><br className="hidden md:block" />All in BoxPlayer.</>,
    desc: "AI Agent searches all your cloud drives and the open web. AI file organizer, reading companion, TTS and translation. Also a 4K HDR player, Plex / Jellyfin / Emby client.",
    sr: "BoxPlayer is a free open-source cloud drive manager, AI search assistant, and 4K HDR media player. The free alternative to Infuse, VidHub, SenPlayer, Kodi, and VLC.",
    download: "Free Download", features: "See Features",
  },
};

export default function Hero({ lang = "zh" }: { lang?: "en" | "zh" }) {
  const t = HERO[lang];
  return (
    <section className="relative overflow-hidden" aria-labelledby="hero-heading">
      <div className="absolute inset-0 ambient-glow pointer-events-none" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-10 pt-12 pb-12 sm:pt-20 sm:pb-16 md:pt-28 md:pb-24">
        <div className="flex flex-col items-center text-center">
          <span className="eyebrow">
            <span className="w-1.5 h-1.5 rounded-full bg-leaf" aria-hidden />
            <span>{t.eyebrow}</span>
          </span>
          <h1 id="hero-heading" className="font-display mt-6 sm:mt-7 text-[clamp(2rem,8vw,4.25rem)] leading-[1.08] tracking-[-0.02em] text-ink-900 display-balance max-w-4xl">{t.heading}</h1>
          <p className="sr-only">{t.sr}</p>
          <p className="mt-5 sm:mt-6 max-w-2xl text-ink-500 text-base sm:text-lg leading-relaxed">{t.desc}</p>
          <div className="mt-8 sm:mt-9 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full sm:w-auto max-w-xs sm:max-w-none">
            <a href="#download" className="btn-primary justify-center">{t.download}<ArrowRight className="w-4 h-4" aria-hidden /></a>
            <a href="#features" className="btn-ghost justify-center">{t.features}</a>
          </div>
        </div>
      </div>
    </section>
  );
}
