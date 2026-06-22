"use client";

import { useEffect, useState } from "react";
import { Loader2, CheckCircle } from "lucide-react";
import { supabase } from "@/lib/supabase";
import { normalizeAuthNextPath } from "@/lib/authRedirect.mjs";

export default function AuthCallbackPage() {
  const [status, setStatus] = useState<"loading" | "success" | "error">("loading");
  const [message, setMessage] = useState("");

  useEffect(() => {
    let redirectTimer: number | undefined;
    async function handleCallback() {
      const query = new URLSearchParams(window.location.search);
      const nextPath = normalizeAuthNextPath(query.get("next"));
      const isEn = nextPath.startsWith("/en/");
      try {
        const code = query.get("code");
        if (code) {
          const { error } = await supabase.auth.exchangeCodeForSession(code);
          if (error) throw error;
        } else {
          const hash = new URLSearchParams(window.location.hash.slice(1));
          const accessToken = hash.get("access_token");
          const refreshToken = hash.get("refresh_token");
          if (accessToken) {
            const { error } = await supabase.auth.setSession({ access_token: accessToken, refresh_token: refreshToken || "" });
            if (error) throw error;
          }
        }

        const { data: { user }, error } = await supabase.auth.getUser();
        if (error) throw error;
        if (!user?.id) throw new Error(isEn ? "No authenticated session was found." : "未找到有效登录会话。");
        setStatus("success");
        setMessage(isEn ? "Signed in. Redirecting…" : "登录成功，正在跳转…");
        redirectTimer = window.setTimeout(() => {
          window.location.replace(nextPath);
        }, 1500);
      } catch (callbackError) {
        setStatus("error");
        setMessage(callbackError instanceof Error ? callbackError.message : (isEn ? "Sign-in failed." : "登录失败。"));
      }
    }
    void handleCallback();
    return () => {
      if (redirectTimer) window.clearTimeout(redirectTimer);
    };
  }, []);

  return (
    <div className="flex items-center justify-center min-h-screen bg-paper">
      <div className="text-center max-w-sm px-6">
        {status === "loading" && (
          <>
            <Loader2 className="w-8 h-8 mx-auto text-skype-deep animate-spin" />
            <p className="mt-4 text-ink-600">Signing in / 正在登录…</p>
          </>
        )}
        {status === "success" && (
          <>
            <CheckCircle className="w-12 h-12 mx-auto text-emerald-500" />
            <p className="mt-4 text-lg font-semibold text-ink-900">{message}</p>
          </>
        )}
        {status === "error" && (
          <p className="text-base text-red-500">{message}</p>
        )}
      </div>
    </div>
  );
}
