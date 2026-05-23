import { Cloud, Sparkles, Layers, Zap, Shield, Repeat } from "lucide-react";

const FEATURES = [
  {
    icon: Cloud,
    title: "Cloud-direct streaming",
    body: "阿里云盘、百度网盘、OneDrive、Google Drive、Dropbox — 不下载也能秒级 4K 播放,边看边缓存。",
  },
  {
    icon: Sparkles,
    title: "True 4K HDR · 杜比视界",
    body: "原盘 ISO、VIDEO_TS、DV/HDR10+、Dolby Atmos · DTS-HD MA 全支持。一帧不丢、一声不漏。",
  },
  {
    icon: Layers,
    title: "Smart media library",
    body: "海报墙、剧集自动识别、TMDB 元数据、字幕自动匹配 — 你的硬盘像 Netflix 一样优雅。",
  },
  {
    icon: Zap,
    title: "Plex · Jellyfin · Emby",
    body: "原生协议接入主流媒体服务器,连接一次,所有设备同步进度、收藏与历史记录。",
  },
  {
    icon: Repeat,
    title: "Across every screen",
    body: "iPhone、iPad、Apple TV、Mac、Windows、Android — 一份订阅,所有设备共用同一段时间线。",
  },
  {
    icon: Shield,
    title: "Local-first privacy",
    body: "你的资源、你的网络、你的设备。BoxPlayer 不存影片、不传云端、不挖你数据。",
  },
];

export default function Features() {
  return (
    <section
      id="features"
      aria-labelledby="features-heading"
      className="relative py-24 md:py-32"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="text-center max-w-3xl mx-auto">
          <span className="text-skype-deep font-semibold text-sm tracking-[0.18em] uppercase">
            Why BoxPlayer
          </span>
          <h2
            id="features-heading"
            className="font-display mt-4 text-[clamp(2rem,4.5vw,3.25rem)] leading-[1.05] tracking-[-0.02em] text-ink-900 display-balance"
          >
            Not just a player.{" "}
            <span className="italic text-skype-deep">A whole theatre.</span>
          </h2>
          <p className="mt-5 text-ink-500 text-lg leading-relaxed">
            播放器很多,但能把云盘、原盘、媒体服务器、字幕、跨设备进度一次做对的,只有 BoxPlayer。
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {FEATURES.map((f) => (
            <div
              key={f.title}
              className="card-soft p-7 transition hover:-translate-y-0.5 hover:shadow-lg"
            >
              <div
                className="w-10 h-10 rounded-xl bg-sky-50 ring-1 ring-sky-100 grid place-items-center text-skype-deep"
                aria-hidden
              >
                <f.icon className="w-5 h-5" strokeWidth={2} />
              </div>
              <h3 className="mt-5 font-semibold text-ink-900 text-lg">
                {f.title}
              </h3>
              <p className="mt-2.5 text-ink-500 leading-relaxed text-[15px]">
                {f.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
