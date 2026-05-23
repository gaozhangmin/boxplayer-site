import Image from "next/image";

const SHOTS = [
  {
    src: "/images/desktop/win-media-library.png",
    title: "Media library",
    desc: "海报墙 · 元数据 · 自动识别",
    alt: "BoxPlayer 媒体库界面 — 海报墙、TMDB 元数据、剧集自动识别",
  },
  {
    src: "/images/desktop/win-anime-library.png",
    title: "Anime library",
    desc: "番剧 · 季度 · 进度同步",
    alt: "BoxPlayer 番剧库界面 — 季度分组与跨设备进度同步",
  },
  {
    src: "/images/desktop/win-media-server.png",
    title: "Media server",
    desc: "Plex / Jellyfin / Emby 原生接入",
    alt: "BoxPlayer 媒体服务器界面 — Plex、Jellyfin、Emby 原生协议接入",
  },
  {
    src: "/images/desktop/win-file-manager.png",
    title: "File manager",
    desc: "云盘 · WebDAV · SMB 一站直连",
    alt: "BoxPlayer 文件管理器 — 阿里云盘、OneDrive、WebDAV、SMB 一站直连",
  },
];

export default function Showcase() {
  return (
    <section
      id="showcase"
      aria-labelledby="showcase-heading"
      className="relative py-24 md:py-32 bg-sky-50/40"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="max-w-3xl">
          <span className="text-skype-deep font-semibold text-sm tracking-[0.18em] uppercase">
            Showcase
          </span>
          <h2
            id="showcase-heading"
            className="font-display mt-4 text-[clamp(2rem,4.5vw,3.25rem)] leading-[1.05] tracking-[-0.02em] text-ink-900 display-balance"
          >
            Built for the way{" "}
            <span className="italic text-skype-deep">cinephiles</span> watch.
          </h2>
          <p className="mt-5 text-ink-500 text-lg leading-relaxed">
            从一面海报墙开始,到一帧 HDR 画面结束 — 每个细节都为长片观影手感打磨。
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {SHOTS.map((s) => (
            <figure
              key={s.title}
              className="card-soft overflow-hidden ring-soft group"
            >
              <div className="aspect-[16/10] overflow-hidden bg-sky-50">
                <Image
                  src={s.src}
                  alt={s.alt}
                  width={2000}
                  height={1250}
                  loading="lazy"
                  className="w-full h-full object-cover transition duration-500 group-hover:scale-[1.02]"
                />
              </div>
              <figcaption className="p-6">
                <h3 className="font-semibold text-ink-900">{s.title}</h3>
                <p className="mt-1 text-ink-500 text-sm">{s.desc}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
