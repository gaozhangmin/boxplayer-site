"use client";

import Script from "next/script";
import { useCallback, useEffect, useState } from "react";
import type { User } from "@supabase/supabase-js";
import { supabase } from "@/lib/supabase";

declare global {
  interface Window {
    google?: {
      accounts?: {
        id?: {
          initialize: (options: {
            client_id: string;
            callback: (response: { credential?: string; select_by?: string }) => void;
            auto_select?: boolean;
            cancel_on_tap_outside?: boolean;
            context?: "signin" | "signup" | "use";
            nonce?: string;
            prompt_parent_id?: string;
            use_fedcm_for_prompt?: boolean;
          }) => void;
          prompt: () => void;
          cancel: () => void;
        };
      };
    };
  }
}

const GOOGLE_CLIENT_ID = process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID || "";

async function generateNonce() {
  const nonce = btoa(String.fromCharCode(...crypto.getRandomValues(new Uint8Array(32))));
  const hashBuffer = await crypto.subtle.digest("SHA-256", new TextEncoder().encode(nonce));
  const hashedNonce = Array.from(new Uint8Array(hashBuffer))
    .map((byte) => byte.toString(16).padStart(2, "0"))
    .join("");
  return { nonce, hashedNonce };
}

export default function GoogleOneTap({ user }: { user: User | null }) {
  const [scriptReady, setScriptReady] = useState(false);

  const handleCredential = useCallback(async (credential: string, nonce: string) => {
    try {
      const { error } = await supabase.auth.signInWithIdToken({
        provider: "google",
        token: credential,
        nonce
      });
      if (error) console.error("[GoogleOneTap] signInWithIdToken failed:", error.message, error);
      else console.log("[GoogleOneTap] signInWithIdToken success");
    } catch (err) {
      console.error("[GoogleOneTap] signInWithIdToken error:", err);
    }
  }, []);

  useEffect(() => {
    if (!GOOGLE_CLIENT_ID || user || !scriptReady || !window.google?.accounts?.id) return;

    let cancelled = false;

    const initialize = async () => {
      try {
        const { nonce, hashedNonce } = await generateNonce();
        if (cancelled || user || !window.google?.accounts?.id) return;

        window.google.accounts.id.initialize({
          client_id: GOOGLE_CLIENT_ID,
          callback: (response) => {
            if (response.credential) void handleCredential(response.credential, nonce);
          },
          auto_select: false,
          cancel_on_tap_outside: true,
          context: "signin",
          nonce: hashedNonce,
          prompt_parent_id: "google-one-tap",
          use_fedcm_for_prompt: true
        });
        window.google.accounts.id.prompt();
      } catch (err) {
        console.error("[GoogleOneTap] initialize failed:", err);
      }
    };

    void initialize();

    return () => {
      cancelled = true;
      window.google?.accounts?.id?.cancel();
    };
  }, [scriptReady, user, handleCredential]);

  if (!GOOGLE_CLIENT_ID || user) return null;

  return (
    <>
      <Script src="https://accounts.google.com/gsi/client" strategy="afterInteractive" onLoad={() => setScriptReady(true)} />
      <div id="google-one-tap" className="fixed right-4 top-16 z-[80]" />
    </>
  );
}
