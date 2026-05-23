import { Cloud, Sparkles, Layers, Zap, Shield, Repeat } from "lucide-react";

const FEATURES = [
  {
    icon: Cloud,
    title: "Cloud-direct streaming · 云盘直链播放",
    body: "阿里云盘、百度网盘、OneDrive、Google Drive、Dropbox、115 网盘、PikPak — 不下载,4K 秒开,边看边缓存,告别先下载再观看的老路。",
  },
  {
    icon: Sparkles,
    title: "True 4K HDR · 杜比视界 · UHD 原盘",
    body: "ISO 原盘、BDMV、VIDEO_TS、Dolby Vision、HDR10+、Dolby Atmos、DTS-HD MA、TrueHD 全支持,REMUX 文件原码率直出。",
  },
  {
    icon: Layers,
    title: "Smart media library · 海报墙刮削器",
    body: "海报墙、电影 / 剧集 / 番剧自动识别、TMDB 元数据、外挂字幕自动匹配 — 你的硬盘瞬间变 Netflix 体验。",
  },
  {
    icon: Zap,
    title: "Plex / Jellyfin / Emby 客户端",
    body: "原生协议接入三大主流媒体服务器 — 无论你的 Plex / Jellyfin / Emby 跑在 Windows、Linux、Docker、群晖、威联通、TrueNAS、unRAID,iOS、Apple TV、Mac、Windows、Linux 全平台同一进度。Infuse、VidHub、Kodi、VLC 的免费开源替代客户端。",
  },
  {
    icon: Repeat,
    title: "Across every screen · 跨设备同步",
    body: "iPhone、iPad、Apple TV 4K、MacBook、Windows、Linux 桌面 — 一份账号,全平台进度、收藏、历史一致。",
  },
  {
    icon: Shield,
    title: "NAS · 自建 NFS · 本地优先",
    body: "群晖、威联通、TrueNAS、unRAID 即插即用;Linux 自建 NFS、SMB、WebDAV、FTP 共享一键挂载,4K / 原盘原码率直出。你的资源、你的网络、你的私人影院 — BoxPlayer 不托管影片、不上传云端、不收集观影数据。",
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
            iOS 4K 播放器、Apple TV 杜比视界播放器、Mac 原盘播放器、Windows / Linux 媒体服务器客户端
            —— 一份订阅就能拿到 Plex 客户端、Jellyfin 客户端、Emby 客户端的能力,
            兼容 Windows / Linux / Docker / 群晖 / 威联通 / TrueNAS / unRAID 上自建的媒体服务器与 NFS 共享,
            是 Infuse、VidHub、Kodi、VLC、PotPlayer 的免费开源替代方案。
          </p>
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
