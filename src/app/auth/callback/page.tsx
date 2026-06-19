"use client";

import { useEffect, useState } from "react";
import { createClient } from "@supabase/supabase-js";
import { Loader2, CheckCircle } from "lucide-react";

const SUPABASE_URL = "https://ltqipofjjqjlbbfsgihi.supabase.co";
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imx0cWlwb2ZqanFqbGJiZnNnaWhpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDA0OTQxNjgsImV4cCI6MjA1NjA3MDE2OH0.g1vk-DaWbicHnSVZoGqskd0vOu-NuWtsDaMvFhe22mE";

export default function AuthCallbackPage() {
  const [status, setStatus] = useState<"loading" | "success" | "error">("loading");
  const [message, setMessage] = useState("");

  useEffect(() => {
    async function handleCallback() {
      try {
        const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
        const hash = window.location.hash.substring(1);
        const params = new URLSearchParams(hash);
        const access_token = params.get("access_token");
        const refresh_token = params.get("refresh_token");

        if (!access_token) {
          // Try query params (some OAuth flows use query)
          const qp = new URLSearchParams(window.location.search);
          const qt = qp.get("access_token") || qp.get("token");
          if (!qt) throw new Error("No token found");
          const { error } = await supabase.auth.setSession({
            access_token: qt,
            refresh_token: qp.get("refresh_token") || "",
          });
          if (error) throw error;
        } else {
          const { error } = await supabase.auth.setSession({
            access_token,
            refresh_token: refresh_token || "",
          });
          if (error) throw error;
        }

        const { data: { user } } = await supabase.auth.getUser();
        if (user?.email) {
          localStorage.setItem("app_user_email", user.email);
          localStorage.setItem("app_user_authed", "1");
        }
        setStatus("success");
        setMessage("登录成功！正在跳转…");
        setTimeout(() => {
          window.location.href = "/#pricing";
        }, 1500);
      } catch (e: any) {
        setStatus("error");
        setMessage(e?.message || "登录失败");
      }
    }
    handleCallback();
  }, []);

  return (
    <div className="flex items-center justify-center min-h-screen bg-paper">
      <div className="text-center max-w-sm px-6">
        {status === "loading" && (
          <>
            <Loader2 className="w-8 h-8 mx-auto text-skype-deep animate-spin" />
            <p className="mt-4 text-ink-600">正在登录…</p>
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
