import Image from "next/image";

const SHOTS_ZH = [
  { src: "/images/desktop/ai-agent.png", title: "AI Agent", desc: "AI 搜索 · 文件整理 · 智能助手", alt: "BoxPlayer AI Agent — 自然语言搜索、文件查重、空间分析" },
  { src: "/images/desktop/book-reader.png", title: "AI Reader", desc: "AI 阅读 · 语音朗读 · 即时翻译", alt: "BoxPlayer AI 阅读器 — PDF/EPUB 阅读、AI 问答、TTS 朗读、翻译" },
  { src: "/images/desktop/search-global.png", title: "Global Search", desc: "全网网盘资源搜索", alt: "BoxPlayer 全网搜索 — 聚合阿里云盘、夸克、百度等平台公开资源" },
  { src: "/images/desktop/search-local.png", title: "Local Search", desc: "全云盘 + 媒体服务器检索", alt: "BoxPlayer 本地搜索 — 一键搜索所有已登录云盘和媒体服务器" },
  { src: "/images/desktop/book-home.png", title: "Book Library", desc: "书籍库 · 扫描 · 分类管理", alt: "BoxPlayer 书籍库 — 全云盘扫描、格式识别、书架管理" },
  { src: "/images/desktop/music-library.png", title: "Music Library", desc: "音乐库 · 艺人 · 专辑", alt: "BoxPlayer 音乐库 — 全云盘音乐扫描、专辑封面、艺人分组" },
];
const SHOTS_EN = [
  { src: "/images/desktop/ai-agent.png", title: "AI Agent", desc: "Smart search · File organizer", alt: "BoxPlayer AI Agent — natural language search, dedup, storage analysis" },
  { src: "/images/desktop/book-reader.png", title: "AI Reader", desc: "AI reading · TTS · Translation", alt: "BoxPlayer AI Reader — PDF/EPUB with AI Q&A, text-to-speech, translation" },
  { src: "/images/desktop/search-global.png", title: "Global Search", desc: "Public cloud drive search", alt: "BoxPlayer Global Search — aggregates Aliyun, Quark, Baidu and more" },
  { src: "/images/desktop/search-local.png", title: "Local Search", desc: "All drives + media servers", alt: "BoxPlayer Local Search — one-click search across all logged-in drives" },
  { src: "/images/desktop/book-home.png", title: "Book Library", desc: "Book library · Scanner", alt: "BoxPlayer Book Library — scan all drives, format detection, shelf management" },
  { src: "/images/desktop/music-library.png", title: "Music Library", desc: "Music · Artists · Albums", alt: "BoxPlayer Music Library — scan all drives, album covers, artist grouping" },
];
const I18N_SHOWCASE = {
  zh: { badge: "Showcase", heading: <>Built for the way <span className="italic text-skype-deep">cinephiles</span> watch.</>, desc: "从一面海报墙开始,到一帧 HDR 画面结束 — 每个细节都为长片观影手感打磨。", shots: SHOTS_ZH },
  en: { badge: "Showcase", heading: <>Built for the way <span className="italic text-skype-deep">cinephiles</span> watch.</>, desc: "From a poster wall to the final HDR frame — every detail crafted for long-form cinema.", shots: SHOTS_EN },
};

export default function Showcase({ lang = "zh" }: { lang?: "en" | "zh" }) {
  const t = I18N_SHOWCASE[lang];
  return (
    <section id="showcase" aria-labelledby="showcase-heading" className="relative py-16 sm:py-24 md:py-32 bg-sky-50/40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
        <div className="max-w-3xl">
          <span className="text-skype-deep font-semibold text-xs sm:text-sm tracking-[0.18em] uppercase">{t.badge}</span>
          <h2 id="showcase-heading" className="font-display mt-3 sm:mt-4 text-[clamp(1.75rem,6vw,3.25rem)] leading-[1.1] tracking-[-0.02em] text-ink-900 display-balance">{t.heading}</h2>
          <p className="mt-4 sm:mt-5 text-ink-500 text-base sm:text-lg leading-relaxed">{t.desc}</p>
        </div>

        <div className="mt-10 sm:mt-14 grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 md:gap-8">
          {t.shots.map((s) => (
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
              <figcaption className="p-5 sm:p-6">
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
