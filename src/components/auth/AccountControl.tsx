"use client";

import { useEffect, useRef, useState } from "react";
import { BadgeCheck, ChevronDown, CircleUser, LogOut } from "lucide-react";
import { useAuth } from "./AuthProvider";

const COPY = {
  en: { signIn: "Sign in", signInHint: "Sign in with Google or email", account: "Account", pro: "Pro", free: "Free", loading: "Loading account", signOut: "Sign out" },
  zh: { signIn: "登录", signInHint: "使用 Google 或邮箱登录", account: "账户", pro: "专业版", free: "免费版", loading: "正在加载账户", signOut: "退出登录" }
} as const;

export default function AccountControl({ lang, fullWidth = false }: { lang: "en" | "zh"; fullWidth?: boolean }) {
  const { user, loading, subscription, openLogin, signOut } = useAuth();
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);
  const t = COPY[lang];

  useEffect(() => {
    if (!open) return;
    const closeOnOutside = (event: MouseEvent) => {
      if (!rootRef.current?.contains(event.target as Node)) setOpen(false);
    };
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    document.addEventListener("mousedown", closeOnOutside);
    window.addEventListener("keydown", closeOnEscape);
    return () => {
      document.removeEventListener("mousedown", closeOnOutside);
      window.removeEventListener("keydown", closeOnEscape);
    };
  }, [open]);

  if (loading) return <span aria-label={t.loading} className={fullWidth ? "block h-10 w-full" : "inline-block h-9 w-9"} />;

  if (!user) {
    return (
      <button type="button" aria-label={t.signInHint} title={t.signInHint} onClick={() => openLogin(lang)} className={fullWidth ? "flex w-full items-center gap-2 rounded-lg px-3 py-2.5 text-left font-medium text-ink-700 transition hover:bg-sky-50 hover:text-skype-deep" : "btn-ghost inline-flex items-center gap-2 px-2.5 text-sm"}>
        <CircleUser className="h-4 w-4" /> {t.signIn}
      </button>
    );
  }

  return (
    <div ref={rootRef} className={`relative ${fullWidth ? "w-full" : ""}`}>
      <button type="button" aria-haspopup="menu" aria-expanded={open} aria-label={t.account} onClick={() => setOpen((value) => !value)} className={fullWidth ? "flex w-full items-center gap-2 rounded-lg px-3 py-2.5 text-left font-medium text-ink-700 transition hover:bg-sky-50" : "btn-ghost inline-flex max-w-40 items-center gap-1.5 px-2.5 text-sm"}>
        <CircleUser className="h-4 w-4 shrink-0" />
        <span className="min-w-0 flex-1 truncate">{user.email || t.account}</span>
        <ChevronDown className="h-3.5 w-3.5 shrink-0" />
      </button>
      {open && (
        <div role="menu" className={`z-[70] mt-2 rounded-lg border border-ink-100 bg-paper p-2 shadow-xl ${fullWidth ? "w-full" : "absolute right-0 w-64"}`}>
          <div className="px-2 py-2">
            <p className="truncate text-sm font-semibold text-ink-900">{user.email}</p>
            <p className={`mt-1 inline-flex items-center gap-1 text-xs font-medium ${subscription === "pro" ? "text-emerald-600" : "text-ink-500"}`}>
              <BadgeCheck className="h-3.5 w-3.5" /> {subscription === "pro" ? t.pro : t.free}
            </p>
          </div>
          <button role="menuitem" type="button" onClick={async () => { setOpen(false); await signOut(); }} className="flex w-full items-center gap-2 rounded-lg px-2 py-2 text-left text-sm text-ink-700 transition hover:bg-sky-50 hover:text-ink-900">
            <LogOut className="h-4 w-4" /> {t.signOut}
          </button>
        </div>
      )}
    </div>
  );
}
