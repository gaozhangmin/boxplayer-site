"use client";

import Script from "next/script";
import { useCallback, useEffect, useRef, useState } from "react";
import type { User } from "@supabase/supabase-js";
import { supabase } from "@/lib/supabase";

function generateNonce() {
  const array = new Uint8Array(32);
  crypto.getRandomValues(array);
  return btoa(String.fromCharCode(...array)).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
}

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

export default function GoogleOneTap({ user }: { user: User | null }) {
  const [scriptReady, setScriptReady] = useState(false);
  const nonceRef = useRef(generateNonce());

  const handleCredential = useCallback(async (credential: string) => {
    try {
      const { error } = await supabase.auth.signInWithIdToken({
        provider: "google",
        token: credential,
        nonce: nonceRef.current
      });
      if (error) console.error("[GoogleOneTap] signInWithIdToken failed:", error.message, error);
    } catch (err) {
      console.error("[GoogleOneTap] signInWithIdToken error:", err);
    }
  }, []);

  useEffect(() => {
    if (!GOOGLE_CLIENT_ID || user || !scriptReady || !window.google?.accounts?.id) return;

    window.google.accounts.id.initialize({
      client_id: GOOGLE_CLIENT_ID,
      callback: (response) => {
        if (response.credential) void handleCredential(response.credential);
      },
      nonce: nonceRef.current,
      auto_select: false,
      cancel_on_tap_outside: true,
      context: "signin",
      prompt_parent_id: "google-one-tap",
      use_fedcm_for_prompt: true
    });
    window.google.accounts.id.prompt();

    return () => window.google?.accounts?.id?.cancel();
  }, [scriptReady, user, handleCredential]);

  if (!GOOGLE_CLIENT_ID || user) return null;

  return (
    <>
      <Script src="https://accounts.google.com/gsi/client" strategy="afterInteractive" onLoad={() => setScriptReady(true)} />
      <div id="google-one-tap" className="fixed right-4 top-16 z-[80]" />
    </>
  );
}
