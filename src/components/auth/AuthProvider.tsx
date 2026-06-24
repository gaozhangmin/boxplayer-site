"use client";

import { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";
import type { Session, User } from "@supabase/supabase-js";
import { supabase } from "@/lib/supabase";
import AuthModal from "./AuthModal";
import GoogleOneTap from "./GoogleOneTap";

type Language = "en" | "zh";
type SubscriptionState = "loading" | "free" | "pro" | "unknown";

type AuthContextValue = {
  session: Session | null;
  user: User | null;
  loading: boolean;
  subscription: SubscriptionState;
  openLogin: (lang: Language) => void;
  closeLogin: () => void;
  signOut: () => Promise<void>;
  refreshSubscription: () => Promise<void>;
};

const AuthContext = createContext<AuthContextValue | null>(null);

async function fetchSubscription(accessToken: string): Promise<SubscriptionState> {
  try {
    const response = await fetch("/api/me/subscription", { headers: { Authorization: `Bearer ${accessToken}` } });
    if (!response.ok) return "unknown";
    const data = await response.json();
    return data.isPro === true ? "pro" : "free";
  } catch {
    return "unknown";
  }
}

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [session, setSession] = useState<Session | null>(null);
  const [loading, setLoading] = useState(true);
  const [subscription, setSubscription] = useState<SubscriptionState>("loading");
  const [loginOpen, setLoginOpen] = useState(false);
  const [loginLang, setLoginLang] = useState<Language>("zh");

  useEffect(() => {
    let active = true;
    supabase.auth.getSession().then(async ({ data }) => {
      if (!active) return;
      setSession(data.session);
      setLoading(false);
      setSubscription(data.session?.access_token ? await fetchSubscription(data.session.access_token) : "free");
    });
    const { data: listener } = supabase.auth.onAuthStateChange((_event, nextSession) => {
      setSession(nextSession);
      setLoading(false);
      if (!nextSession?.access_token) {
        setSubscription("free");
        return;
      }
      setSubscription("loading");
      void fetchSubscription(nextSession.access_token).then(setSubscription);
    });
    return () => {
      active = false;
      listener.subscription.unsubscribe();
    };
  }, []);

  const refreshSubscription = useCallback(async () => {
    if (!session?.access_token) {
      setSubscription("free");
      return;
    }
    setSubscription("loading");
    setSubscription(await fetchSubscription(session.access_token));
  }, [session]);

  const value = useMemo<AuthContextValue>(() => ({
    session,
    user: session?.user || null,
    loading,
    subscription,
    openLogin: (lang) => { setLoginLang(lang); setLoginOpen(true); },
    closeLogin: () => setLoginOpen(false),
    signOut: async () => { await supabase.auth.signOut(); setSubscription("free"); },
    refreshSubscription
  }), [session, loading, subscription, refreshSubscription]);

  return (
    <AuthContext.Provider value={value}>
      {children}
      {!loading && <GoogleOneTap user={session?.user || null} />}
      <AuthModal open={loginOpen} lang={loginLang} onClose={() => setLoginOpen(false)} />
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) throw new Error("useAuth must be used inside AuthProvider");
  return context;
}
