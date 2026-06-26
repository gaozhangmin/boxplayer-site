"use client";

import { FormEvent, useMemo, useState } from "react";
import { Bug, CheckCircle2, Lightbulb, Loader2, Send } from "lucide-react";
import { useAuth } from "@/components/auth/AuthProvider";

type Language = "en" | "zh";
type TicketType = "bug" | "feature";

type TicketResponse = {
  ticket?: {
    id: string;
    number: string;
    status: string;
    createdAt: string | null;
  };
  error?: string;
};

const COPY = {
  zh: {
    eyebrow: "产品工单",
    title: "提交 Bug 或功能需求",
    subtitle: "这里接收和 BoxPlayer 软件相关的问题、复现路径、兼容性反馈和新功能建议。无需登录即可提交；登录后会自动关联你的账号。",
    bug: "Bug",
    feature: "Feature",
    titleLabel: "标题",
    titlePlaceholder: "例如：EPUB 阅读器切换双页后无法滚动",
    descriptionLabel: "描述",
    descriptionPlaceholder: "请说明你遇到的问题、使用场景，或希望新增的功能。",
    emailLabel: "联系邮箱",
    emailPlaceholder: "可选，用于我们需要进一步确认时联系你",
    versionLabel: "软件版本",
    versionPlaceholder: "例如：4.0.53",
    platformLabel: "系统平台",
    platformPlaceholder: "例如：macOS 15 / Windows 11 / iOS 18",
    stepsLabel: "复现步骤",
    stepsPlaceholder: "1. 打开...\n2. 点击...\n3. 出现...",
    expectedLabel: "期望行为",
    expectedPlaceholder: "你原本期望软件如何工作？",
    submit: "提交工单",
    submitting: "提交中",
    signedIn: "已登录，工单会关联当前账号。",
    anonymous: "未登录也可以提交；填写邮箱有助于后续跟进。",
    successTitle: "工单已提交",
    successPrefix: "工单编号",
    successDetail: "我们会按严重程度和影响范围处理。需要补充信息时会通过邮箱联系你。",
    errorFallback: "提交失败，请稍后重试。",
    requiredHint: "标题至少 4 个字符，描述至少 10 个字符。",
    scopeTitle: "适合提交的内容",
    scopeItems: ["播放、阅读器、云盘、AI 搜索等软件 Bug", "平台兼容性问题和可复现的崩溃", "能改善日常使用效率的功能建议"],
    privacyTitle: "提交会记录",
    privacyItems: ["你填写的内容和可选邮箱", "登录用户的账号 ID 和邮箱", "浏览器 User-Agent，用于定位平台问题"]
  },
  en: {
    eyebrow: "Product tickets",
    title: "Submit a bug or feature request",
    subtitle: "Send BoxPlayer software issues, reproduction details, compatibility reports, and feature ideas. Sign-in is optional; signed-in tickets are linked to your account automatically.",
    bug: "Bug",
    feature: "Feature",
    titleLabel: "Title",
    titlePlaceholder: "Example: EPUB reader cannot scroll after switching to two-page mode",
    descriptionLabel: "Description",
    descriptionPlaceholder: "Describe the issue, workflow, or feature you want added.",
    emailLabel: "Contact email",
    emailPlaceholder: "Optional, used if we need follow-up details",
    versionLabel: "App version",
    versionPlaceholder: "Example: 4.0.53",
    platformLabel: "Platform",
    platformPlaceholder: "Example: macOS 15 / Windows 11 / iOS 18",
    stepsLabel: "Steps to reproduce",
    stepsPlaceholder: "1. Open...\n2. Click...\n3. See...",
    expectedLabel: "Expected behavior",
    expectedPlaceholder: "What did you expect BoxPlayer to do?",
    submit: "Submit ticket",
    submitting: "Submitting",
    signedIn: "Signed in. This ticket will be linked to your account.",
    anonymous: "You can submit without signing in. Adding an email helps us follow up.",
    successTitle: "Ticket submitted",
    successPrefix: "Ticket number",
    successDetail: "We triage tickets by severity and impact. We will use your email if more details are needed.",
    errorFallback: "Submission failed. Please try again later.",
    requiredHint: "Title must be at least 4 characters. Description must be at least 10 characters.",
    scopeTitle: "Good ticket topics",
    scopeItems: ["Playback, reader, cloud drive, and AI search bugs", "Platform compatibility issues and reproducible crashes", "Feature requests that improve daily workflows"],
    privacyTitle: "What is stored",
    privacyItems: ["Your submitted content and optional email", "Account ID and email for signed-in users", "Browser User-Agent for platform diagnostics"]
  }
} as const;

function initialForm() {
  return {
    type: "bug" as TicketType,
    title: "",
    description: "",
    contactEmail: "",
    appVersion: "",
    platform: "",
    reproductionSteps: "",
    expectedBehavior: ""
  };
}

export default function SupportTicketForm({ lang }: { lang: Language }) {
  const { session, user } = useAuth();
  const [form, setForm] = useState(initialForm);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");
  const [submitted, setSubmitted] = useState<TicketResponse["ticket"] | null>(null);
  const t = COPY[lang];

  const canSubmit = useMemo(() => form.title.trim().length >= 4 && form.description.trim().length >= 10 && !submitting, [form.description, form.title, submitting]);

  const update = (key: keyof ReturnType<typeof initialForm>, value: string) => {
    setForm((current) => ({ ...current, [key]: value }));
  };

  const submit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!canSubmit) {
      setError(t.requiredHint);
      return;
    }
    setSubmitting(true);
    setError("");
    setSubmitted(null);
    try {
      const headers: Record<string, string> = { "content-type": "application/json" };
      if (session?.access_token) headers.authorization = `Bearer ${session.access_token}`;
      const response = await fetch("/api/support/tickets", {
        method: "POST",
        headers,
        body: JSON.stringify({ ...form, locale: lang, source: "web" })
      });
      const data = (await response.json().catch(() => ({}))) as TicketResponse;
      if (!response.ok || !data.ticket) throw new Error(data.error || t.errorFallback);
      setSubmitted(data.ticket);
      setForm(initialForm());
    } catch (nextError) {
      setError(nextError instanceof Error ? nextError.message : t.errorFallback);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section className="mx-auto grid max-w-7xl gap-8 px-4 py-12 sm:px-6 lg:grid-cols-[minmax(0,1fr)_360px] lg:px-10 lg:py-16">
      <div className="min-w-0">
        <div className="mb-8">
          <span className="eyebrow">{t.eyebrow}</span>
          <h1 className="mt-4 font-display text-3xl text-ink-900 sm:text-4xl">{t.title}</h1>
          <p className="mt-4 max-w-3xl text-base leading-7 text-ink-500">{t.subtitle}</p>
        </div>

        {submitted && (
          <div className="mb-6 rounded-lg border border-leaf/30 bg-leaf/10 px-4 py-4 text-ink-700">
            <div className="flex items-start gap-3">
              <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-leaf" aria-hidden />
              <div>
                <p className="font-semibold text-ink-900">{t.successTitle}</p>
                <p className="mt-1 text-sm">
                  {t.successPrefix}: <span className="font-mono font-semibold text-skype-deep">{submitted.number || submitted.id}</span>
                </p>
                <p className="mt-2 text-sm leading-6 text-ink-500">{t.successDetail}</p>
              </div>
            </div>
          </div>
        )}

        <form onSubmit={submit} className="rounded-lg border border-ink-100 bg-cloud p-4 shadow-sm sm:p-6">
          <div className="mb-5 grid grid-cols-2 gap-3">
            <button type="button" onClick={() => update("type", "bug")} className={`flex items-center justify-center gap-2 rounded-lg border px-4 py-3 text-sm font-semibold transition ${form.type === "bug" ? "border-coral bg-coral/10 text-ink-900" : "border-ink-100 text-ink-500 hover:border-coral/50 hover:text-ink-900"}`}>
              <Bug className="h-4 w-4" aria-hidden /> {t.bug}
            </button>
            <button type="button" onClick={() => update("type", "feature")} className={`flex items-center justify-center gap-2 rounded-lg border px-4 py-3 text-sm font-semibold transition ${form.type === "feature" ? "border-gold bg-gold/15 text-ink-900" : "border-ink-100 text-ink-500 hover:border-gold/60 hover:text-ink-900"}`}>
              <Lightbulb className="h-4 w-4" aria-hidden /> {t.feature}
            </button>
          </div>

          <div className="grid gap-4">
            <label className="grid gap-2">
              <span className="text-sm font-semibold text-ink-700">{t.titleLabel}</span>
              <input required minLength={4} maxLength={160} value={form.title} onChange={(event) => update("title", event.target.value)} placeholder={t.titlePlaceholder} className="rounded-lg border border-ink-100 bg-paper px-3 py-3 text-sm text-ink-900 outline-none transition placeholder:text-ink-300 focus:border-skype focus:ring-2 focus:ring-sky-100" />
            </label>

            <label className="grid gap-2">
              <span className="text-sm font-semibold text-ink-700">{t.descriptionLabel}</span>
              <textarea required minLength={10} maxLength={5000} rows={6} value={form.description} onChange={(event) => update("description", event.target.value)} placeholder={t.descriptionPlaceholder} className="resize-y rounded-lg border border-ink-100 bg-paper px-3 py-3 text-sm leading-6 text-ink-900 outline-none transition placeholder:text-ink-300 focus:border-skype focus:ring-2 focus:ring-sky-100" />
            </label>

            <div className="grid gap-4 sm:grid-cols-2">
              <label className="grid gap-2">
                <span className="text-sm font-semibold text-ink-700">{t.emailLabel}</span>
                <input type="email" maxLength={254} value={form.contactEmail} onChange={(event) => update("contactEmail", event.target.value)} placeholder={t.emailPlaceholder} className="rounded-lg border border-ink-100 bg-paper px-3 py-3 text-sm text-ink-900 outline-none transition placeholder:text-ink-300 focus:border-skype focus:ring-2 focus:ring-sky-100" />
              </label>
              <label className="grid gap-2">
                <span className="text-sm font-semibold text-ink-700">{t.versionLabel}</span>
                <input maxLength={80} value={form.appVersion} onChange={(event) => update("appVersion", event.target.value)} placeholder={t.versionPlaceholder} className="rounded-lg border border-ink-100 bg-paper px-3 py-3 text-sm text-ink-900 outline-none transition placeholder:text-ink-300 focus:border-skype focus:ring-2 focus:ring-sky-100" />
              </label>
            </div>

            <label className="grid gap-2">
              <span className="text-sm font-semibold text-ink-700">{t.platformLabel}</span>
              <input maxLength={120} value={form.platform} onChange={(event) => update("platform", event.target.value)} placeholder={t.platformPlaceholder} className="rounded-lg border border-ink-100 bg-paper px-3 py-3 text-sm text-ink-900 outline-none transition placeholder:text-ink-300 focus:border-skype focus:ring-2 focus:ring-sky-100" />
            </label>

            <label className="grid gap-2">
              <span className="text-sm font-semibold text-ink-700">{t.stepsLabel}</span>
              <textarea maxLength={3000} rows={4} value={form.reproductionSteps} onChange={(event) => update("reproductionSteps", event.target.value)} placeholder={t.stepsPlaceholder} className="resize-y rounded-lg border border-ink-100 bg-paper px-3 py-3 text-sm leading-6 text-ink-900 outline-none transition placeholder:text-ink-300 focus:border-skype focus:ring-2 focus:ring-sky-100" />
            </label>

            <label className="grid gap-2">
              <span className="text-sm font-semibold text-ink-700">{t.expectedLabel}</span>
              <textarea maxLength={2000} rows={3} value={form.expectedBehavior} onChange={(event) => update("expectedBehavior", event.target.value)} placeholder={t.expectedPlaceholder} className="resize-y rounded-lg border border-ink-100 bg-paper px-3 py-3 text-sm leading-6 text-ink-900 outline-none transition placeholder:text-ink-300 focus:border-skype focus:ring-2 focus:ring-sky-100" />
            </label>
          </div>

          <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-sm leading-6 text-ink-500">{user ? t.signedIn : t.anonymous}</p>
            <button type="submit" disabled={!canSubmit} className="btn-primary justify-center disabled:cursor-not-allowed disabled:bg-ink-300 disabled:shadow-none disabled:hover:translate-y-0">
              {submitting ? <Loader2 className="h-4 w-4 animate-spin" aria-hidden /> : <Send className="h-4 w-4" aria-hidden />}
              {submitting ? t.submitting : t.submit}
            </button>
          </div>

          {error && <p className="mt-4 rounded-lg border border-coral/30 bg-coral/10 px-3 py-2 text-sm text-ink-700">{error}</p>}
        </form>
      </div>

      <aside className="space-y-4 lg:pt-28">
        <div className="rounded-lg border border-ink-100 bg-cloud p-5">
          <h2 className="text-base font-semibold text-ink-900">{t.scopeTitle}</h2>
          <ul className="mt-4 space-y-3 text-sm leading-6 text-ink-500">
            {t.scopeItems.map((item) => (
              <li key={item} className="flex gap-2">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-skype" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="rounded-lg border border-ink-100 bg-cloud p-5">
          <h2 className="text-base font-semibold text-ink-900">{t.privacyTitle}</h2>
          <ul className="mt-4 space-y-3 text-sm leading-6 text-ink-500">
            {t.privacyItems.map((item) => (
              <li key={item} className="flex gap-2">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-leaf" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </aside>
    </section>
  );
}
