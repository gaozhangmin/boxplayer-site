"use client";

import { useState, useEffect } from "react";
import { Check, ArrowRight, CheckCircle, Sparkles } from "lucide-react";
import Link from "next/link";

function usePaymentSuccess() {
  const [paid, setPaid] = useState(false);
  useEffect(() => {
    if (typeof window === "undefined") return;
    const p = new URLSearchParams(window.location.hash.replace("#pricing", "").replace(/^\?/, ""));
    if (p.get("paid") === "success") {
      setPaid(true);
      setTimeout(() => { window.location.href = "boxplayer-auth://payment-success"; }, 3000);
    }
  }, []);
  return paid;
}

type Cycle = "monthly" | "yearly" | "lifetime";

const I18N = {
  en: {
    badge: "Pricing",
    title: <>Free forever. <span className="italic text-skype-deep">Pro when you need more.</span></>,
    desc: "Core file management, video playback, music, and local reading are always free. Upgrade to Pro for unlimited AI search, file organization, AI reading assistant, and more.",
    cycles: {
      monthly: { label: "Monthly", badge: "" },
      yearly: { label: "Yearly", badge: "Save 34%" },
      lifetime: { label: "Lifetime", badge: "Best value" },
    } as Record<Cycle, { label: string; badge: string }>,
    proPrice: { monthly: { amount: "$10", unit: "/mo", note: "Billed monthly" }, yearly: { amount: "$79", unit: "/yr", note: "≈ $6.6/mo · billed yearly" }, lifetime: { amount: "$199", unit: "", note: "One-time · lifetime access" } },
    free: {
      name: "Free",
      cost: "$0",
      tagline: "Everything you need to manage and enjoy your cloud drives.",
      features: [
        "Cloud drive file management",
        "Video & music playback",
        "Local book reading (PDF/EPUB)",
        "Multi-drive connection",
        "AI Smart Search — 5/day",
        "Global web search — 5/day",
      ],
      cta: "Get Started",
    },
    pro: {
      badge: "Most popular",
      name: "Pro",
      tagline: "Unlimited AI power for search, organization and reading.",
      features: [
        "Everything in Free, plus:",
        "Unlimited AI Smart Search",
        "Unlimited global web search",
        "One-click save share links",
        "AI File Organizer & dedup",
        "AI Reading Companion (PDF/EPUB)",
        "Text-to-Speech (5000 chars/day)",
        "Instant Translation (5000 chars/day)",
        "TMDB + Douban Movie Discovery",
        "Priority support",
      ],
      cta: "Upgrade to Pro",
    },
    successTitle: "Payment successful!",
    successDesc: "Activating Pro in the app…",
    ctaFoot: "Download the app and login to upgrade to Pro.",
    faqTitle: "Pricing FAQ",
    faqs: [
      { q: "What is Pro, and what do I get by upgrading?", a: "Pro unlocks the full power of BoxPlayer: unlimited AI Smart Search across all your cloud drives, unlimited global web search, one-click save of share links, AI file organizer & dedup, AI reading companion (PDF/EPUB), text-to-speech, instant translation, and TMDB + Douban movie discovery. The free tier remains free forever — Pro is for when you need unlimited AI and the advanced toolkit." },
      { q: "How do I upgrade to Pro? Which payment methods are supported?", a: "Download BoxPlayer and log in, then pick a plan inside the app. Monthly, yearly and lifetime options are all available. Payment is completed securely through the app via card / Apple / Google Pay, and Pro activates instantly after checkout — no waiting." },
      { q: "Does one subscription work on all my devices?", a: "Yes. Pro is tied to your BoxPlayer account — sign in on iPhone, iPad, Apple TV, Mac, Windows and Linux and Pro is active everywhere. Watch progress, library and favourites sync across every device automatically." },
      { q: "Can I cancel or get a refund?", a: "Monthly and yearly plans can be cancelled at any time; you keep Pro until the end of the current billing period. If Lifetime doesn't work out, contact support within 14 days of purchase for a full refund." },
    ] as { q: string; a: string }[],
  },
  zh: {
    badge: "价格",
    title: <>永久免费。 <span className="italic text-skype-deep">专业版解锁更多。</span></>,
    desc: "基础文件管理、视频播放、音乐、本地阅读始终免费。升级 Pro 解锁无限 AI 搜索、文件整理、AI 阅读助手等高级功能。",
    cycles: {
      monthly: { label: "月付", badge: "" },
      yearly: { label: "年付", badge: "省 34%" },
      lifetime: { label: "终身", badge: "超值" },
    } as Record<Cycle, { label: string; badge: string }>,
    proPrice: { monthly: { amount: "$10", unit: "/月", note: "按月订阅" }, yearly: { amount: "$79", unit: "/年", note: "≈ $6.6/月 · 按年付费" }, lifetime: { amount: "$199", unit: "", note: "一次买断 · 终身使用" } },
    free: {
      name: "免费版",
      cost: "$0",
      tagline: "管理并享受你的云盘所需的一切功能。",
      features: [
        "网盘文件管理",
        "视频播放 & 音乐播放",
        "本地书籍阅读 (PDF/EPUB)",
        "多网盘同时连接",
        "AI 智能搜索 — 5次/天",
        "全网资源搜索 — 5次/天",
      ],
      cta: "免费开始",
    },
    pro: {
      badge: "最受欢迎",
      name: "专业版",
      tagline: "无限的 AI 搜索、整理与阅读能力。",
      features: [
        "包含免费版全部功能，以及：",
        "无限 AI 智能搜索",
        "无限全网资源搜索",
        "全网资源一键保存",
        "AI 文件整理 & 查重",
        "AI 阅读助手 (PDF/EPUB)",
        "语音朗读 (5000字/天)",
        "即时翻译 (5000字/天)",
        "TMDB + 豆瓣电影发现",
        "优先技术支持",
      ],
      cta: "升级 Pro",
    },
    successTitle: "支付成功！",
    successDesc: "正在激活 App Pro…",
    ctaFoot: "下载 App 并登录后升级到专业版。",
    faqTitle: "价格常见问题",
    faqs: [
      { q: "什么是专业版？升级后能解锁哪些功能？", a: "专业版解锁 BoxPlayer 的全部能力：跨所有网盘的无限 AI 智能搜索、无限全网资源搜索、分享链接一键保存、AI 文件整理与查重、AI 阅读助手（PDF/EPUB）、语音朗读、即时翻译，以及 TMDB + 豆瓣电影发现。免费版永久免费 —— Pro 适合需要无限 AI 和高级工具链的用户。" },
      { q: "怎么升级到专业版？支持哪些支付方式？", a: "下载 BoxPlayer 并登录，在 App 内选择套餐即可，支持月付、年付、终身三种方案。支付通过 App 内安全完成，支持银行卡 / Apple Pay / Google Pay，支付成功后 Pro 立即激活，无需等待。" },
      { q: "一次订阅能在所有设备上使用吗？", a: "可以。Pro 与你的 BoxPlayer 账号绑定 —— 在 iPhone、iPad、Apple TV、Mac、Windows、Linux 登录同一账号即生效，观看进度、媒体库、收藏全设备自动同步。" },
      { q: "可以取消或退款吗？", a: "月付、年付可随时取消，当前计费周期内继续享受 Pro。终身版如不满意，购买后 14 天内联系客服可全额退款。" },
    ] as { q: string; a: string }[],
  },
};

const CYCLE_ORDER: Cycle[] = ["monthly", "yearly", "lifetime"];

export default function PricingSection({ lang = "zh" }: { lang?: "en" | "zh" }) {
  const paymentSuccess = usePaymentSuccess();
  const t = I18N[lang];
  const [cycle, setCycle] = useState<Cycle>("yearly");
  const faqs = t.faqs;
  const price = t.proPrice[cycle];

  return (
    <div aria-labelledby="pricing-heading" className="relative py-16 sm:py-24 md:py-32 bg-sky-50/30">
      {paymentSuccess && (
        <div className="mx-auto max-w-4xl px-4 mb-8">
          <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-6 flex items-center gap-4">
            <CheckCircle className="w-8 h-8 text-emerald-500 flex-shrink-0" />
            <div><p className="text-lg font-semibold text-emerald-800">{t.successTitle}</p><p className="text-sm text-emerald-600">{t.successDesc}</p></div>
          </div>
        </div>
      )}
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-10">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-skype-deep font-semibold text-xs sm:text-sm tracking-[0.18em] uppercase">{t.badge}</span>
          <h2 id="pricing-heading" className="font-display mt-3 text-[clamp(1.75rem,5vw,3rem)] leading-[1.1] tracking-[-0.02em] text-ink-900">{t.title}</h2>
          <p className="mt-4 text-ink-500 text-base sm:text-lg leading-relaxed">{t.desc}</p>
        </div>

        {/* Billing cycle toggle */}
        <div className="flex justify-center mb-10">
          <div role="tablist" aria-label={lang === "en" ? "Billing cycle" : "计费周期"} className="inline-flex items-center gap-1 p-1 bg-cloud border border-ink-100 rounded-full shadow-sm">
            {CYCLE_ORDER.map((c) => {
              const active = cycle === c;
              const meta = t.cycles[c];
              return (
                <button
                  key={c}
                  role="tab"
                  aria-selected={active}
                  type="button"
                  onClick={() => setCycle(c)}
                  className={`relative inline-flex items-center gap-2 px-4 sm:px-5 py-2 rounded-full text-sm font-semibold transition ${
                    active ? "bg-skype-deep text-white shadow" : "text-ink-500 hover:text-skype-deep"
                  }`}
                >
                  {meta.label}
                  {meta.badge && (
                    <span className={`text-[10px] font-bold px-1.5 py-0.5 rounded-full ${active ? "bg-white/20 text-white" : "bg-amber-100 text-gold"}`}>
                      {meta.badge}
                    </span>
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* Plan cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 items-start">
          {/* Free card */}
          <div className="card-soft p-7 sm:p-8 flex flex-col">
            <h3 className="font-display text-2xl text-ink-900">{t.free.name}</h3>
            <div className="mt-3 flex items-baseline gap-1">
              <span className="font-display text-5xl text-ink-900">{t.free.cost}</span>
            </div>
            <p className="mt-2 text-sm text-ink-500 leading-relaxed min-h-[2.5rem]">{t.free.tagline}</p>
            <Link href="/#download" className="mt-5 inline-flex items-center justify-center gap-2 px-6 py-3 border border-ink-200 text-ink-700 rounded-xl font-semibold text-sm hover:border-skype-deep hover:text-skype-deep transition">
              {t.free.cta}
            </Link>
            <ul className="mt-6 space-y-3 list-none">
              {t.free.features.map((f) => (
                <li key={f} className="flex items-start gap-2.5 text-sm text-ink-700">
                  <Check className="w-4 h-4 mt-0.5 text-leaf flex-shrink-0" strokeWidth={3} />
                  <span>{f}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Pro card */}
          <div className="card-soft ring-soft p-7 sm:p-8 flex flex-col relative md:scale-[1.02] bg-gradient-to-b from-sky-50/60 to-cloud">
            <span className="absolute -top-3 left-1/2 -translate-x-1/2 inline-flex items-center gap-1 px-3 py-1 rounded-full bg-skype-deep text-white text-xs font-semibold shadow">
              <Sparkles className="w-3.5 h-3.5" /> {t.pro.badge}
            </span>
            <h3 className="font-display text-2xl text-skype-deep">{t.pro.name}</h3>
            <div className="mt-3 flex items-baseline gap-1">
              <span className="font-display text-5xl text-ink-900">{price.amount}</span>
              {price.unit && <span className="text-lg text-ink-500 font-medium">{price.unit}</span>}
            </div>
            <p className="mt-2 text-sm text-ink-500 leading-relaxed min-h-[2.5rem]">{price.note}</p>
            <Link href="/#download" className="mt-5 inline-flex items-center justify-center gap-2 px-6 py-3 bg-skype-deep text-white rounded-xl font-semibold text-sm hover:opacity-90 transition shadow-lg shadow-skype-deep/20">
              {t.pro.cta} <ArrowRight className="w-4 h-4" />
            </Link>
            <ul className="mt-6 space-y-3 list-none">
              {t.pro.features.map((f, i) => (
                <li key={f} className={`flex items-start gap-2.5 text-sm ${i === 0 ? "font-semibold text-ink-900" : "text-ink-700"}`}>
                  <Check className={`w-4 h-4 mt-0.5 flex-shrink-0 ${i === 0 ? "text-ink-300" : "text-skype-deep"}`} strokeWidth={3} />
                  <span>{f}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Pricing FAQ */}
        <div className="mt-16">
          <h3 className="font-display text-center text-2xl sm:text-3xl text-ink-900 mb-8">{t.faqTitle}</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {faqs.map((f: { q: string; a: string }) => (
              <div key={f.q} className="card-soft p-6">
                <h4 className="font-semibold text-ink-900 text-[15px]">{f.q}</h4>
                <p className="mt-2 text-sm text-ink-500 leading-relaxed">{f.a}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Footer CTA */}
        <div className="text-center mt-16">
          <p className="text-ink-500 text-sm mb-4">{t.ctaFoot}</p>
          <Link href="/#download" className="inline-flex items-center gap-2 px-8 py-3.5 bg-skype-deep text-white rounded-xl font-semibold text-base hover:opacity-90 transition">{t.free.cta} <ArrowRight className="w-4 h-4" /></Link>
        </div>
      </div>
    </div>
  );
}
