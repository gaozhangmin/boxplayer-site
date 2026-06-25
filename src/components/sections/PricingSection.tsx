"use client";

import { useState, useEffect } from "react";
import { AlertCircle, Check, ArrowRight, CheckCircle, Sparkles, XCircle } from "lucide-react";
import Link from "next/link";
import { useAuth } from "@/components/auth/AuthProvider";

function usePaymentStatus() {
  const [status, setStatus] = useState<"" | "success" | "cancelled" | "failed">("");
  useEffect(() => {
    if (typeof window === "undefined") return;
    const p = new URLSearchParams(window.location.hash.replace("#pricing", "").replace(/^\?/, "") || window.location.search);
    const paid = p.get("paid");
    const nextStatus = paid === "success" ? "success" : paid === "cancelled" || paid === "canceled" || paid === "cancel" ? "cancelled" : paid === "failed" || paid === "failure" ? "failed" : "";
    if (!nextStatus) return;

    const paidTimer = window.setTimeout(() => setStatus(nextStatus), 0);
    const appTimer = p.get("source") === "app"
      ? window.setTimeout(() => { window.location.href = `boxplayer-auth://payment-${nextStatus}`; }, 1200)
      : undefined;
    return () => {
      window.clearTimeout(paidTimer);
      if (appTimer) window.clearTimeout(appTimer);
    };
  }, []);
  return status;
}

const I18N = {
  en: {
    badge: "Pricing",
    title: <>Free forever. <span className="italic text-skype-deep">Pro when you need more.</span></>,
    desc: "Core file management, video playback, music, and local reading are always free. Upgrade to Pro for built-in AI search, AI reading, translation, TTS, semantic indexing, and advanced media workflows.",
    discount: "30% OFF",
    discountNote: "Limited launch offer · 70% price",
    proPrice: { amount: "$139", oldAmount: "$199", unit: "", note: "One-time · lifetime access" },
    monthly: {
      name: "Monthly",
      cycle: "monthly",
      amount: "$1.4",
      oldAmount: "$2",
      unit: "/mo",
      note: "per month · billed monthly",
      tagline: "Full Pro features with monthly flexibility.",
      features: [
        "Everything in Free, plus:",
        "Built-in BoxPlayer AI models",
        "AI Smart Search and semantic indexing",
        "AI Reading Companion for PDF/EPUB",
        "Instant translation for reading",
        "Text-to-Speech for reader playback",
        "AI Agent for cloud-drive search",
        "One-click save share links",
        "TMDB + Douban Movie Discovery",
        "Priority support",
      ],
      cta: "Subscribe Monthly",
    },
    yearly: {
      name: "Yearly",
      cycle: "yearly",
      amount: "$13.3",
      oldAmount: "$19",
      unit: "/yr",
      note: "per year · billed annually",
      tagline: "Best value for long-term Pro users.",
      features: [
        "Everything in Free, plus:",
        "Built-in BoxPlayer AI models",
        "AI Smart Search and semantic indexing",
        "AI Reading Companion for PDF/EPUB",
        "Instant translation for reading",
        "Text-to-Speech for reader playback",
        "AI Agent for cloud-drive search",
        "One-click save share links",
        "TMDB + Douban Movie Discovery",
        "Priority support",
      ],
      cta: "Subscribe Yearly",
    },
    free: {
      name: "Free",
      cost: "$0",
      tagline: "Everything you need to manage and enjoy your cloud drives.",
      features: [
        "Cloud drive file management",
        "Video & music playback",
        "Local book reading (PDF/EPUB)",
        "Multi-drive connection",
        "Local media library",
        "Open-source CLI and agent tools",
      ],
      cta: "Get Started",
    },
    pro: {
      badge: "Most popular",
      name: "Pro",
      tagline: "Monthly hosted AI credits for search, organization and reading.",
      features: [
        "Everything in Free, plus:",
        "Built-in BoxPlayer AI models",
        "AI Smart Search and semantic indexing",
        "AI Reading Companion for PDF/EPUB",
        "Instant translation for reading",
        "Text-to-Speech for reader playback",
        "AI Agent for cloud-drive search",
        "One-click save share links",
        "TMDB + Douban Movie Discovery",
        "Priority support",
      ],
      cta: "Upgrade to Pro",
    },
    successTitle: "Payment successful!",
    successDesc: "Activating Pro in the app…",
    cancelledTitle: "Purchase cancelled",
    cancelledDesc: "No payment was completed. You can retry whenever you are ready.",
    failedTitle: "Payment not completed",
    failedDesc: "The checkout did not finish successfully. Please try again or contact support if this keeps happening.",
    ctaFoot: "Download the app and login to upgrade to Pro.",
    faqTitle: "Pricing FAQ",
    faqs: [
      { q: "What is Pro, and what do I get by upgrading?", a: "Pro unlocks BoxPlayer's AI layer: built-in AI models with a monthly hosted AI credit allowance, AI Smart Search, semantic indexing, AI reading companion for PDF/EPUB, instant translation, text-to-speech, AI cloud-drive search, one-click share-link save, and TMDB + Douban movie discovery. BYOK usage can continue with your own provider quota, and the free tier remains free forever for core file and media workflows." },
      { q: "How do I upgrade to Pro? Which payment methods are supported?", a: "Download BoxPlayer and log in, then upgrade with the one-time lifetime plan. Payment is completed securely through Creem hosted checkout, and Pro activates after checkout." },
      { q: "Does one subscription work on all my devices?", a: "For now, Pro covers Windows, Linux, and macOS devices signed in with the same BoxPlayer account." },
      { q: "Can I get a refund?", a: "All subscriptions include a 7-day free trial, so you can try Pro before you are charged." },
    ] as { q: string; a: string }[],
  },
  zh: {
    badge: "价格",
    title: <>永久免费。 <span className="italic text-skype-deep">专业版解锁更多。</span></>,
    desc: "基础文件管理、视频播放、音乐、本地阅读始终免费。升级 Pro 解锁内置 AI 搜索、AI 阅读、翻译、朗读、语义索引和高级媒体工作流。",
    discount: "30% OFF",
    discountNote: "限时首发优惠 · 7 折",
    proPrice: { amount: "$139", oldAmount: "$199", unit: "", note: "一次买断 · 终身使用" },
    monthly: {
      name: "包月",
      cycle: "monthly",
      amount: "$1.4",
      oldAmount: "$2",
      unit: "/月",
      note: "每月 · 按月订阅",
      tagline: "灵活的按月订阅，随时可取消。",
      features: [
        "包含免费版全部功能，以及：",
        "内置 BoxPlayer AI 模型",
        "AI 智能搜索与语义索引",
        "PDF/EPUB AI 阅读助手",
        "阅读器即时翻译",
        "阅读器语音朗读",
        "AI Agent 网盘搜索",
        "全网资源一键保存",
        "TMDB + 豆瓣电影发现",
        "优先技术支持",
      ],
      cta: "按月订阅",
    },
    yearly: {
      name: "包年",
      cycle: "yearly",
      amount: "$13.3",
      oldAmount: "$19",
      unit: "/年",
      note: "每年 · 按年订阅",
      tagline: "长期使用的最佳选择。",
      features: [
        "包含免费版全部功能，以及：",
        "内置 BoxPlayer AI 模型",
        "AI 智能搜索与语义索引",
        "PDF/EPUB AI 阅读助手",
        "阅读器即时翻译",
        "阅读器语音朗读",
        "AI Agent 网盘搜索",
        "全网资源一键保存",
        "TMDB + 豆瓣电影发现",
        "优先技术支持",
      ],
      cta: "按年订阅",
    },
    free: {
      name: "免费版",
      cost: "$0",
      tagline: "管理并享受你的云盘所需的一切功能。",
      features: [
        "网盘文件管理",
        "视频播放 & 音乐播放",
        "本地书籍阅读 (PDF/EPUB)",
        "多网盘同时连接",
        "本地媒体库",
        "开源 CLI 和 Agent 工具",
      ],
      cta: "免费开始",
    },
    pro: {
      badge: "最受欢迎",
      name: "专业版",
      tagline: "每月托管 AI 用量，覆盖搜索、整理与阅读。",
      features: [
        "包含免费版全部功能，以及：",
        "内置 BoxPlayer AI 模型",
        "AI 智能搜索与语义索引",
        "PDF/EPUB AI 阅读助手",
        "阅读器即时翻译",
        "阅读器语音朗读",
        "AI Agent 网盘搜索",
        "全网资源一键保存",
        "TMDB + 豆瓣电影发现",
        "优先技术支持",
      ],
      cta: "升级 Pro",
    },
    successTitle: "支付成功！",
    successDesc: "正在激活 App Pro…",
    cancelledTitle: "已取消购买",
    cancelledDesc: "本次未完成支付，没有产生专业版授权。你可以随时重新购买。",
    failedTitle: "支付未完成",
    failedDesc: "本次结账没有成功完成，请重试；如果持续失败，请联系支持。",
    ctaFoot: "下载 App 并登录后升级到专业版。",
    faqTitle: "价格常见问题",
    faqs: [
      { q: "什么是专业版？升级后能解锁哪些功能？", a: "专业版解锁 BoxPlayer 的 AI 层：内置 AI 模型与每月托管 AI 用量、AI 智能搜索、语义索引、PDF/EPUB AI 阅读助手、即时翻译、语音朗读、AI 网盘搜索、分享链接一键保存，以及 TMDB + 豆瓣电影发现。BYOK 可继续使用你自己的模型额度，免费版继续永久免费，保留核心文件和媒体功能。" },
      { q: "怎么升级到专业版？支持哪些支付方式？", a: "下载 BoxPlayer 并登录后购买终身版。支付通过 Creem 托管结账页安全完成，支付后自动激活 Pro。" },
      { q: "一次订阅能在所有设备上使用吗？", a: "暂时仅覆盖 Windows、Linux 和 macOS，使用同一 BoxPlayer 账号登录即可。" },
      { q: "可以退款吗？", a: "现在所有订阅都提供 7 天免费试用，你可以先体验 Pro，再决定是否继续付费。" },
    ] as { q: string; a: string }[],
  },
};

export default function PricingSection({ lang = "zh" }: { lang?: "en" | "zh" }) {
  const paymentStatus = usePaymentStatus();
  const { session, openLogin, refreshSubscription, subscription } = useAuth();
  const t = I18N[lang];
  const [checkoutLoading, setCheckoutLoading] = useState(false);
  const [checkoutError, setCheckoutError] = useState("");
  const faqs = t.faqs;
  const price = t.proPrice;
  const source = typeof window !== "undefined" && new URLSearchParams(window.location.search).get("source") === "app" ? "app" : "web";

  const showActivating = paymentStatus === "success" && subscription !== "pro";
  const showActivated = paymentStatus === "success" && subscription === "pro";

  useEffect(() => {
    if (paymentStatus === "success") void refreshSubscription();
  }, [paymentStatus, refreshSubscription]);

  useEffect(() => {
    if (!showActivating || !session?.access_token) return;
    const interval = setInterval(() => void refreshSubscription(), 3000);
    return () => clearInterval(interval);
  }, [showActivating, session, refreshSubscription]);

  async function handleCheckout(cycle: string) {
    setCheckoutError("");
    if (!session?.access_token) {
      openLogin(lang);
      return;
    }
    setCheckoutLoading(true);
    try {
      const resp = await fetch("/api/creem/checkout", {
        method: "POST",
        headers: { "content-type": "application/json", Authorization: `Bearer ${session.access_token}` },
        body: JSON.stringify({ cycle, source }),
      });
      const payload = await resp.json();
      if (!resp.ok || !payload.checkoutUrl) throw new Error(payload.error || "checkout_failed");
      window.location.href = payload.checkoutUrl;
    } catch (error) {
      setCheckoutError(error instanceof Error ? error.message : "checkout_failed");
    } finally {
      setCheckoutLoading(false);
    }
  }

  return (
    <div id="pricing" aria-labelledby="pricing-heading" className="relative py-16 sm:py-24 md:py-32 bg-sky-50/30">
      {paymentStatus === "success" && showActivated && (
        <div className="mx-auto max-w-4xl px-4 mb-8">
          <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-6 flex items-center gap-4">
            <CheckCircle className="w-8 h-8 text-emerald-500 flex-shrink-0" />
            <div><p className="text-lg font-semibold text-emerald-800">Pro 已激活！</p><p className="text-sm text-emerald-600">已拥有全部专业版功能，可以关闭此页面了。</p></div>
          </div>
        </div>
      )}
      {paymentStatus === "success" && showActivating && (
        <div className="mx-auto max-w-4xl px-4 mb-8">
          <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-6 flex items-center gap-4">
            <CheckCircle className="w-8 h-8 text-emerald-500 flex-shrink-0" />
            <div><p className="text-lg font-semibold text-emerald-800">{t.successTitle}</p><p className="text-sm text-emerald-600">{t.successDesc}</p></div>
          </div>
        </div>
      )}
      {paymentStatus === "cancelled" && (
        <div className="mx-auto max-w-4xl px-4 mb-8">
          <div className="bg-amber-50 border border-amber-200 rounded-2xl p-6 flex items-center gap-4">
            <AlertCircle className="w-8 h-8 text-amber-500 flex-shrink-0" />
            <div><p className="text-lg font-semibold text-amber-800">{t.cancelledTitle}</p><p className="text-sm text-amber-700">{t.cancelledDesc}</p></div>
          </div>
        </div>
      )}
      {paymentStatus === "failed" && (
        <div className="mx-auto max-w-4xl px-4 mb-8">
          <div className="bg-rose-50 border border-rose-200 rounded-2xl p-6 flex items-center gap-4">
            <XCircle className="w-8 h-8 text-rose-500 flex-shrink-0" />
            <div><p className="text-lg font-semibold text-rose-800">{t.failedTitle}</p><p className="text-sm text-rose-700">{t.failedDesc}</p></div>
          </div>
        </div>
      )}
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-10">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-skype-deep font-semibold text-xs sm:text-sm tracking-[0.18em] uppercase">{t.badge}</span>
          <h2 id="pricing-heading" className="font-display mt-3 text-[clamp(1.75rem,5vw,3rem)] leading-[1.1] tracking-[-0.02em] text-ink-900">{t.title}</h2>
          <p className="mt-4 text-ink-500 text-base sm:text-lg leading-relaxed">{t.desc}</p>
          <div className="mt-5 inline-flex items-center gap-2 rounded-full border border-coral/30 bg-coral/10 px-4 py-2 text-sm font-semibold text-coral">
            <Sparkles className="h-4 w-4" />
            <span>{t.discount}</span>
            <span className="h-4 w-px bg-coral/30" />
            <span>{t.discountNote}</span>
          </div>
        </div>

        {/* Plan cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 items-start">
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

          {/* Monthly card */}
          <div className="card-soft p-7 sm:p-8 flex flex-col">
            <h3 className="font-display text-2xl text-ink-900">{t.monthly.name}</h3>
            <div className="mt-3 inline-flex w-fit rounded-full bg-coral/10 px-2.5 py-1 text-xs font-semibold text-coral">{t.discount}</div>
            <div className="mt-3 flex items-baseline gap-1">
              <span className="text-base font-semibold text-ink-300 line-through">{t.monthly.oldAmount}</span>
              <span className="font-display text-5xl text-ink-900">{t.monthly.amount}</span>
              {t.monthly.unit && <span className="text-lg text-ink-500 font-medium">{t.monthly.unit}</span>}
            </div>
            <p className="mt-2 text-sm text-ink-500 leading-relaxed min-h-[2.5rem]">{t.monthly.note}</p>
            <button type="button" disabled={checkoutLoading} onClick={() => handleCheckout(t.monthly.cycle)} className="mt-5 inline-flex items-center justify-center gap-2 px-6 py-3 border border-ink-200 text-ink-700 rounded-xl font-semibold text-sm hover:border-skype-deep hover:text-skype-deep transition disabled:opacity-60">
              {t.monthly.cta}
            </button>
            <ul className="mt-6 space-y-3 list-none">
              {t.monthly.features.map((f, i) => (
                <li key={f} className={`flex items-start gap-2.5 text-sm ${i === 0 ? "font-semibold text-ink-900" : "text-ink-700"}`}>
                  <Check className={`w-4 h-4 mt-0.5 flex-shrink-0 ${i === 0 ? "text-ink-300" : "text-leaf"}`} strokeWidth={3} />
                  <span>{f}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Yearly card */}
          <div className="card-soft p-7 sm:p-8 flex flex-col">
            <h3 className="font-display text-2xl text-ink-900">{t.yearly.name}</h3>
            <div className="mt-3 inline-flex w-fit rounded-full bg-coral/10 px-2.5 py-1 text-xs font-semibold text-coral">{t.discount}</div>
            <div className="mt-3 flex items-baseline gap-1">
              <span className="text-base font-semibold text-ink-300 line-through">{t.yearly.oldAmount}</span>
              <span className="font-display text-5xl text-ink-900">{t.yearly.amount}</span>
              {t.yearly.unit && <span className="text-lg text-ink-500 font-medium">{t.yearly.unit}</span>}
            </div>
            <p className="mt-2 text-sm text-ink-500 leading-relaxed min-h-[2.5rem]">{t.yearly.note}</p>
            <button type="button" disabled={checkoutLoading} onClick={() => handleCheckout(t.yearly.cycle)} className="mt-5 inline-flex items-center justify-center gap-2 px-6 py-3 bg-skype-deep text-white rounded-xl font-semibold text-sm hover:opacity-90 transition shadow-lg shadow-skype-deep/20 disabled:opacity-60">
              {checkoutLoading ? (lang === "en" ? "Opening checkout..." : "正在打开支付...") : t.yearly.cta} <ArrowRight className="w-4 h-4" />
            </button>
            <ul className="mt-6 space-y-3 list-none">
              {t.yearly.features.map((f, i) => (
                <li key={f} className={`flex items-start gap-2.5 text-sm ${i === 0 ? "font-semibold text-ink-900" : "text-ink-700"}`}>
                  <Check className={`w-4 h-4 mt-0.5 flex-shrink-0 ${i === 0 ? "text-ink-300" : "text-leaf"}`} strokeWidth={3} />
                  <span>{f}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Pro Lifetime card */}
          <div className="card-soft ring-soft p-7 sm:p-8 flex flex-col relative md:scale-[1.02] bg-gradient-to-b from-sky-50/60 to-cloud">
            <span className="absolute -top-3 left-1/2 -translate-x-1/2 inline-flex items-center gap-1 px-3 py-1 rounded-full bg-skype-deep text-white text-xs font-semibold shadow">
              <Sparkles className="w-3.5 h-3.5" /> {t.pro.badge}
            </span>
            <h3 className="font-display text-2xl text-skype-deep">{t.pro.name}</h3>
            <div className="mt-3 inline-flex w-fit rounded-full bg-coral/10 px-2.5 py-1 text-xs font-semibold text-coral">{t.discount}</div>
            <div className="mt-3 flex items-baseline gap-1">
              <span className="text-base font-semibold text-ink-300 line-through">{price.oldAmount}</span>
              <span className="font-display text-5xl text-ink-900">{price.amount}</span>
              {price.unit && <span className="text-lg text-ink-500 font-medium">{price.unit}</span>}
            </div>
            <p className="mt-2 text-sm text-ink-500 leading-relaxed min-h-[2.5rem]">{price.note}</p>
            <button type="button" disabled={checkoutLoading} onClick={() => handleCheckout("lifetime")} className="mt-5 inline-flex items-center justify-center gap-2 px-6 py-3 bg-skype-deep text-white rounded-xl font-semibold text-sm hover:opacity-90 transition shadow-lg shadow-skype-deep/20 disabled:opacity-60">
              {checkoutLoading ? (lang === "en" ? "Opening checkout..." : "正在打开支付...") : t.pro.cta} <ArrowRight className="w-4 h-4" />
            </button>
            {checkoutError && <p className="mt-3 text-sm text-red-500 leading-relaxed">{checkoutError}</p>}
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
          <button type="button" disabled={checkoutLoading} onClick={() => handleCheckout("lifetime")} className="inline-flex items-center gap-2 px-8 py-3.5 bg-skype-deep text-white rounded-xl font-semibold text-base hover:opacity-90 transition disabled:opacity-60">{t.pro.cta} <ArrowRight className="w-4 h-4" /></button>
        </div>
      </div>
    </div>
  );
}
