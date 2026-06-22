"use client";

import { useEffect, useState } from "react";
import { Code2, Globe2, Loader2, Mail, X } from "lucide-react";
import { supabase } from "@/lib/supabase";

type Language = "en" | "zh";

const COPY = {
  en: {
    title: "Sign in to BoxPlayer",
    desc: "Sign in before purchasing Pro.",
    github: "Continue with GitHub",
    google: "Continue with Google",
    divider: "or use email",
    email: "Email address",
    code: "Verification code",
    send: "Send code",
    verify: "Verify and sign in",
    resend: "Use another email",
    close: "Close login",
    invalidEmail: "Enter a valid email address.",
    invalidCode: "Enter the verification code.",
    codeSent: "A verification code was sent to your email."
  },
  zh: {
    title: "登录 BoxPlayer",
    desc: "购买专业版前请先登录。",
    github: "使用 GitHub 登录",
    google: "使用 Google 登录",
    divider: "或使用邮箱",
    email: "邮箱地址",
    code: "验证码",
    send: "发送验证码",
    verify: "验证并登录",
    resend: "更换邮箱",
    close: "关闭登录",
    invalidEmail: "请输入有效邮箱地址。",
    invalidCode: "请输入验证码。",
    codeSent: "验证码已发送到你的邮箱。"
  }
} as const;

export default function AuthModal({ open, lang, onClose }: { open: boolean; lang: Language; onClose: () => void }) {
  const t = COPY[lang];
  const [email, setEmail] = useState("");
  const [code, setCode] = useState("");
  const [codeSent, setCodeSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [notice, setNotice] = useState("");

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open, onClose]);

  if (!open) return null;

  async function handleOAuth(provider: "github" | "google") {
    setLoading(true);
    setError("");
    try {
      const nextPath = lang === "en" ? "/en/pricing/" : "/pricing/";
      const { error: authError } = await supabase.auth.signInWithOAuth({
        provider,
        options: {
          redirectTo: `${window.location.origin}/auth/callback/?next=${encodeURIComponent(nextPath)}`
        }
      });
      if (authError) throw authError;
    } catch (authError) {
      setError(authError instanceof Error ? authError.message : "Authentication failed");
      setLoading(false);
    }
  }

  async function handleSendCode() {
    const normalizedEmail = email.trim();
    if (!normalizedEmail.includes("@")) {
      setError(t.invalidEmail);
      return;
    }
    setLoading(true);
    setError("");
    setNotice("");
    try {
      const { error: authError } = await supabase.auth.signInWithOtp({
        email: normalizedEmail,
        options: { shouldCreateUser: true }
      });
      if (authError) throw authError;
      setEmail(normalizedEmail);
      setCodeSent(true);
      setNotice(t.codeSent);
    } catch (authError) {
      setError(authError instanceof Error ? authError.message : "Authentication failed");
    } finally {
      setLoading(false);
    }
  }

  async function handleVerifyCode() {
    const token = code.trim();
    if (!token) {
      setError(t.invalidCode);
      return;
    }
    setLoading(true);
    setError("");
    try {
      const { error: authError } = await supabase.auth.verifyOtp({ email, token, type: "email" });
      if (authError) throw authError;
      onClose();
    } catch (authError) {
      setError(authError instanceof Error ? authError.message : "Authentication failed");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div role="presentation" className="fixed inset-0 z-[100] flex items-center justify-center bg-ink-900/45 px-4 backdrop-blur-sm" onMouseDown={(event) => { if (event.target === event.currentTarget) onClose(); }}>
      <div role="dialog" aria-modal="true" aria-labelledby="auth-modal-title" className="relative w-full max-w-sm rounded-lg border border-ink-100 bg-paper p-6 shadow-2xl">
        <button type="button" aria-label={t.close} onClick={onClose} className="absolute right-3 top-3 inline-flex h-9 w-9 items-center justify-center rounded-lg text-ink-500 transition hover:bg-sky-50 hover:text-ink-900">
          <X className="h-5 w-5" />
        </button>
        <h2 id="auth-modal-title" className="pr-10 text-xl font-semibold text-ink-900">{t.title}</h2>
        <p className="mt-2 text-sm text-ink-500">{t.desc}</p>

        <div className="mt-6 grid gap-3">
          <button type="button" disabled={loading} onClick={() => handleOAuth("github")} className="inline-flex h-11 items-center justify-center gap-2 rounded-lg bg-ink-900 px-4 text-sm font-semibold text-white transition hover:opacity-90 disabled:opacity-60">
            <Code2 className="h-5 w-5" /> {t.github}
          </button>
          <button type="button" disabled={loading} onClick={() => handleOAuth("google")} className="inline-flex h-11 items-center justify-center gap-2 rounded-lg border border-ink-200 bg-white px-4 text-sm font-semibold text-ink-800 transition hover:border-skype-deep disabled:opacity-60">
            <Globe2 className="h-5 w-5" /> {t.google}
          </button>
        </div>

        <div className="my-5 flex items-center gap-3 text-xs text-ink-400"><span className="h-px flex-1 bg-ink-100" /><span>{t.divider}</span><span className="h-px flex-1 bg-ink-100" /></div>

        <div className="grid gap-3">
          <label className="grid gap-1.5 text-sm font-medium text-ink-700">
            {t.email}
            <div className="flex items-center gap-2 rounded-lg border border-ink-200 bg-white px-3 focus-within:border-skype-deep">
              <Mail className="h-4 w-4 text-ink-400" />
              <input type="email" value={email} disabled={codeSent || loading} onChange={(event) => setEmail(event.target.value)} className="h-11 min-w-0 flex-1 bg-transparent text-sm text-ink-900 outline-none" />
            </div>
          </label>
          {codeSent && (
            <label className="grid gap-1.5 text-sm font-medium text-ink-700">
              {t.code}
              <input inputMode="numeric" autoComplete="one-time-code" value={code} disabled={loading} onChange={(event) => setCode(event.target.value)} className="h-11 rounded-lg border border-ink-200 bg-white px-3 text-sm text-ink-900 outline-none focus:border-skype-deep" />
            </label>
          )}
          {notice && <p className="text-sm text-emerald-600">{notice}</p>}
          {error && <p role="alert" className="text-sm text-red-600">{error}</p>}
          <button type="button" disabled={loading} onClick={codeSent ? handleVerifyCode : handleSendCode} className="inline-flex h-11 items-center justify-center gap-2 rounded-lg bg-skype-deep px-4 text-sm font-semibold text-white transition hover:opacity-90 disabled:opacity-60">
            {loading && <Loader2 className="h-4 w-4 animate-spin" />}{codeSent ? t.verify : t.send}
          </button>
          {codeSent && <button type="button" disabled={loading} onClick={() => { setCodeSent(false); setCode(""); setNotice(""); setError(""); }} className="text-sm font-medium text-skype-deep">{t.resend}</button>}
        </div>
      </div>
    </div>
  );
}
