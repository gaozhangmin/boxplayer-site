"use client";

import { useState, useEffect } from "react";
import { Check, X, Minus, ArrowRight, Loader2, CheckCircle } from "lucide-react";
import Link from "next/link";

function usePaymentSuccess() {
  const [paid, setPaid] = useState(false);
  useEffect(() => {
    if (typeof window === "undefined") return;
    const p = new URLSearchParams(window.location.hash.replace("#pricing", "").replace(/^\?/, ""));
    if (p.get("paid") === "success") {
      setPaid(true);
      // Redirect back to app after showing success
      setTimeout(() => {
        window.location.href = "boxplayer-auth://payment-success";
      }, 3000);
    }
  }, []);
  return paid;
}

const FEATURES = [
  { name: "Cloud drive file management", free: true, pro: true },
  { name: "Video & music playback", free: true, pro: true },
  { name: "Local book reading (PDF/EPUB)", free: true, pro: true },
  { name: "Multi-drive connection", free: true, pro: true },
  { name: "AI Smart Search", free: "5/day", pro: "Unlimited" },
  { name: "Global web search", free: "5/day", pro: "Unlimited" },
  { name: "One-click save share links", free: false, pro: true },
  { name: "AI File Organizer & dedup", free: false, pro: true },
  { name: "AI Reading Companion (PDF/EPUB)", free: false, pro: true },
  { name: "Text-to-Speech (5000 chars/day)", free: false, pro: true },
  { name: "Instant Translation (5000 chars/day)", free: false, pro: true },
  { name: "TMDB + Douban Movie Discovery", free: false, pro: true },
  { name: "Priority support", free: false, pro: true },
];

export default function PricingSection() {
  const paymentSuccess = usePaymentSuccess();

  return (
    <section
      id="pricing"
      aria-labelledby="pricing-heading"
      className="relative py-16 sm:py-24 md:py-32 bg-sky-50/30"
    >
      {paymentSuccess && (
        <div className="mx-auto max-w-4xl px-4 mb-8">
          <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-6 flex items-center gap-4">
            <CheckCircle className="w-8 h-8 text-emerald-500 flex-shrink-0" />
            <div>
              <p className="text-lg font-semibold text-emerald-800">Payment successful!</p>
              <p className="text-sm text-emerald-600">Activating Pro in the app…</p>
            </div>
          </div>
        </div>
      )}

      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-10">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-skype-deep font-semibold text-xs sm:text-sm tracking-[0.18em] uppercase">
            Pricing
          </span>
          <h2
            id="pricing-heading"
            className="font-display mt-3 text-[clamp(1.75rem,5vw,3rem)] leading-[1.1] tracking-[-0.02em] text-ink-900"
          >
            Free forever.{" "}
            <span className="italic text-skype-deep">Pro when you need more.</span>
          </h2>
          <p className="mt-4 text-ink-500 text-base sm:text-lg leading-relaxed">
            Core file management, video playback, music, and local reading are always free.
            Upgrade to Pro for unlimited AI search, file organization, AI reading assistant, and more.
          </p>
        </div>

        {/* Feature comparison table */}
        <div className="card-soft overflow-hidden mb-8">
          <table className="w-full text-left">
            <thead>
              <tr className="border-b border-ink-100">
                <th className="py-4 px-4 sm:px-6 text-base font-semibold text-ink-900">Feature</th>
                <th className="py-4 px-3 sm:px-4 text-center text-sm font-semibold text-ink-500">Free</th>
                <th className="py-4 px-3 sm:px-4 text-center text-sm font-semibold text-skype-deep bg-amber-50/50">Pro · $10/mo</th>
              </tr>
            </thead>
            <tbody>
              {FEATURES.map((f, i) => (
                <tr key={i} className="border-b border-ink-50">
                  <td className="py-3 px-4 sm:px-6 text-sm text-ink-700">{f.name}</td>
                  <td className="py-3 px-3 sm:px-4 text-center">
                    {f.free === true ? (
                      <Check className="w-4 h-4 text-emerald-500 mx-auto" strokeWidth={3} />
                    ) : f.free === false ? (
                      <Minus className="w-4 h-4 text-ink-300 mx-auto" strokeWidth={2} />
                    ) : (
                      <span className="text-xs text-ink-500">{f.free}</span>
                    )}
                  </td>
                  <td className="py-3 px-3 sm:px-4 text-center bg-amber-50/50">
                    {f.pro === true ? (
                      <Check className="w-4 h-4 text-skype-deep mx-auto" strokeWidth={3} />
                    ) : f.pro === false ? (
                      <Minus className="w-4 h-4 text-ink-300 mx-auto" strokeWidth={2} />
                    ) : (
                      <span className="text-xs font-semibold text-skype-deep">{f.pro}</span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* CTA */}
        <div className="text-center">
          <p className="text-ink-500 text-sm mb-4">
            Download the app and login to upgrade to Pro.
          </p>
          <Link
            href="/#download"
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-skype-deep text-white rounded-xl font-semibold text-base hover:opacity-90 transition"
          >
            Get Started <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
