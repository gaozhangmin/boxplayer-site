import { Cloud, Sparkles, Layers, Zap, Shield, Repeat, Bot, BookOpen, Search, Globe } from "lucide-react";

const FEATURES_ZH = [
  { icon: Bot, title: "AI Agent · 智能搜索助手", body: "用自然语言描述需求,AI 自动搜索所有云盘和全网公开资源。查重、空间分析、文件分类整理 — 一句话搞定。Pro 版无限次使用。" },
  { icon: BookOpen, title: "AI 阅读助手 · 朗读 · 翻译", body: "阅读 PDF/EPUB 时随时向 AI 提问,结合上下文回答。语音朗读 5000 字/天,多音色可选。选中文字秒翻译,Google/Azure/AI 三引擎。" },
  { icon: Search, title: "全局搜索 · 本地 + 全网", body: "一键搜所有云盘 + 媒体服务器,文件名、文件夹、元数据全覆盖。全网公开网盘资源搜索,找到阿里云盘/夸克分享链接直接转存。" },
  { icon: Globe, title: "TMDB + 豆瓣电影发现", body: "实时热门电影排行榜,看到想看的直接搜云盘资源。支持 TMDB 热映/流行/高分和豆瓣 Top250/新片/口碑榜。" },
];
const FEATURES_EN = [
  { icon: Bot, title: "AI Agent · Smart Search Assistant", body: "Describe what you need in plain language. AI searches all your cloud drives and the open web. Dedup, storage analysis, file organization — one sentence does it all. Unlimited with Pro." },
  { icon: BookOpen, title: "AI Reading · TTS · Translation", body: "Ask AI questions while reading PDFs/EPUBs with full book context. Text-to-speech 5,000 chars/day, multiple voices. Instant translation with Google, Azure, and AI engines." },
  { icon: Search, title: "Global Search · Local + Web", body: "Search across all cloud drives and media servers in one click. File names, folders, metadata all covered. Save Aliyun/Quark share links directly to your drive." },
  { icon: Globe, title: "TMDB + Douban Movie Discovery", body: "Real-time trending movie charts. Find something you like and search your drives for it instantly. TMDB trending/popular/top-rated and Douban Top250." },
];
const OLD_FEATURES = [
  { icon: Cloud, title: "Cloud-direct streaming · 云盘直链播放", body: "阿里云盘、百度网盘、OneDrive、Google Drive、Dropbox、115 网盘、PikPak — 不下载,4K 秒开,边看边缓存,告别先下载再观看的老路。" },
  { icon: Sparkles, title: "True 4K HDR · 杜比视界 · UHD 原盘", body: "ISO 原盘、BDMV、VIDEO_TS、Dolby Vision、HDR10+、Dolby Atmos、DTS-HD MA、TrueHD 全支持,REMUX 文件原码率直出。" },
  { icon: Layers, title: "Smart media library · 海报墙刮削器", body: "海报墙、电影 / 剧集 / 番剧自动识别、TMDB 元数据、外挂字幕自动匹配 — 你的硬盘瞬间变 Netflix 体验。" },
  { icon: Zap, title: "Plex / Jellyfin / Emby 客户端", body: "原生协议接入三大主流媒体服务器 — 无论你的 Plex / Jellyfin / Emby 跑在 Windows、Linux、Docker、群晖、威联通、TrueNAS、unRAID,iOS、Apple TV、Mac、Windows、Linux 全平台同一进度。Infuse、VidHub、Kodi、VLC 的免费开源替代客户端。" },
  { icon: Repeat, title: "Across every screen · 跨设备同步", body: "iPhone、iPad、Apple TV 4K、MacBook、Windows、Linux 桌面 — 一份账号,全平台进度、收藏、历史一致。" },
  { icon: Shield, title: "NAS · 自建 NFS · 本地优先", body: "群晖、威联通、TrueNAS、unRAID 即插即用;Linux 自建 NFS、SMB、WebDAV、FTP 共享一键挂载,4K / 原盘原码率直出。你的资源、你的网络、你的私人影院 — BoxPlayer 不托管影片、不上传云端、不收集观影数据。" },
];
const OLD_FEATURES_EN = [
  { icon: Cloud, title: "Cloud-direct streaming", body: "Aliyun Drive, Baidu Netdisk, OneDrive, Google Drive, Dropbox, 115, PikPak — no download, 4K instant playback with smart caching. Stop downloading before watching." },
  { icon: Sparkles, title: "True 4K HDR · Dolby Vision · UHD BD", body: "ISO, BDMV, VIDEO_TS, Dolby Vision, HDR10+, Dolby Atmos, DTS-HD MA, TrueHD — all supported. REMUX files play at original bitrate." },
  { icon: Layers, title: "Smart media library · Poster wall scraper", body: "Auto-organized poster wall, movie/TV/anime recognition, TMDB metadata, external subtitle matching — your drive becomes Netflix." },
  { icon: Repeat, title: "Across every screen", body: "iPhone, iPad, Apple TV 4K, MacBook, Windows, Linux desktop — one account, progress synced everywhere." },
  { icon: Shield, title: "NAS · NFS · Local first", body: "Synology, QNAP, TrueNAS, unRAID plug-and-play. NFS, SMB, WebDAV, FTP — one-click mount. Your files, your network, your private cinema." },
];
const I18N_FEATURES = {
  zh: { badge: "Why BoxPlayer", heading: <>Not just a player. <span className="italic text-skype-deep">A whole theatre.</span></>, desc: "iOS 4K 播放器、Apple TV 杜比视界播放器、Mac 原盘播放器、Windows / Linux 媒体服务器客户端——同时也是阿里云盘、百度网盘、夸克、115 等 10+ 网盘的 AI 智能管理器。Infuse、VidHub、SenPlayer、Kodi、VLC、PotPlayer 的免费开源替代方案,同时也是 aliyunpan 小白羊的云端进化版。", desc2: "AI Agent 一句话搜全部网盘,AI 阅读助手陪你看书,全网资源一键保存——BoxPlayer 不只是播放器。", features: FEATURES_ZH.concat(OLD_FEATURES) },
  en: { badge: "Why BoxPlayer", heading: <>Not just a player. <span className="italic text-skype-deep">A whole theatre.</span></>, desc: "A 4K Dolby Vision player, Plex client, Jellyfin client, and Emby client in one — with AI Agent that searches 10+ cloud drives and the open web. The free open-source alternative to Infuse, VidHub, SenPlayer, Kodi, and VLC. The cloud-native evolution of aliyunpan tools.", desc2: "AI search across all drives, AI reading companion for PDF/EPUB, one-click save from web — BoxPlayer is more than a media player.", features: FEATURES_EN.concat(OLD_FEATURES_EN) },
};

export default function Features({ lang = "zh" }: { lang?: "en" | "zh" }) {
  const t = I18N_FEATURES[lang];
  return (
    <section id="features" aria-labelledby="features-heading" className="relative py-16 sm:py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
        <div className="text-center max-w-3xl mx-auto">
          <span className="text-skype-deep font-semibold text-xs sm:text-sm tracking-[0.18em] uppercase">{t.badge}</span>
          <h2 id="features-heading" className="font-display mt-3 sm:mt-4 text-[clamp(1.75rem,6vw,3.25rem)] leading-[1.1] tracking-[-0.02em] text-ink-900 display-balance">{t.heading}</h2>
          <p className="mt-4 sm:mt-5 text-ink-500 text-base sm:text-lg leading-relaxed">{t.desc}</p>
          <p className="mt-4 sm:mt-5 text-ink-500 text-base sm:text-lg leading-relaxed">{t.desc2}</p>
        </div>
        <div className="mt-10 sm:mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {t.features.map((f) => (
            <div
              key={f.title}
              className="card-soft p-5 sm:p-7 transition hover:-translate-y-0.5 hover:shadow-lg"
            >
              <div
                className="w-10 h-10 rounded-xl bg-sky-50 ring-1 ring-sky-100 grid place-items-center text-skype-deep"
                aria-hidden
              >
                <f.icon className="w-5 h-5" strokeWidth={2} />
              </div>
              <h3 className="mt-4 sm:mt-5 font-semibold text-ink-900 text-base sm:text-lg">
                {f.title}
              </h3>
              <p className="mt-2 sm:mt-2.5 text-ink-500 leading-relaxed text-sm sm:text-[15px]">
                {f.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
