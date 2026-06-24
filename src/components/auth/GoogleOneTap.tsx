"use client";

import Script from "next/script";
import { useEffect, useState } from "react";
import type { User } from "@supabase/supabase-js";
import { supabase } from "@/lib/supabase";

declare global {
  interface Window {
    google?: {
      accounts?: {
        id?: {
          initialize: (options: {
            client_id: string;
            callback: (response: { credential?: string }) => void;
            auto_select?: boolean;
            cancel_on_tap_outside?: boolean;
            context?: "signin" | "signup" | "use";
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

  useEffect(() => {
    if (!GOOGLE_CLIENT_ID || user || !scriptReady || !window.google?.accounts?.id) return;

    window.google.accounts.id.initialize({
      client_id: GOOGLE_CLIENT_ID,
      callback: (response) => {
        if (!response.credential) return;
        void supabase.auth.signInWithIdToken({
          provider: "google",
          token: response.credential
        });
      },
      auto_select: false,
      cancel_on_tap_outside: true,
      context: "signin",
      prompt_parent_id: "google-one-tap",
      use_fedcm_for_prompt: true
    });
    window.google.accounts.id.prompt();

    return () => window.google?.accounts?.id?.cancel();
  }, [scriptReady, user]);

  if (!GOOGLE_CLIENT_ID || user) return null;

  return (
    <>
      <Script src="https://accounts.google.com/gsi/client" strategy="afterInteractive" onLoad={() => setScriptReady(true)} />
      <div id="google-one-tap" className="fixed right-4 top-16 z-[80]" />
    </>
  );
}
