import { useEffect, useState } from "react";
import { useRouter } from "@tanstack/react-router";

import { getConsent, initAnalytics, setConsent, trackPageView } from "@/lib/analytics";

export function ConsentBanner() {
  const [visible, setVisible] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const consent = getConsent();
    if (consent === null) {
      const t = window.setTimeout(() => setVisible(true), 2200);
      return () => window.clearTimeout(t);
    }
    if (consent === "granted") {
      initAnalytics();
      trackPageView(window.location.pathname);
    }
    return undefined;
  }, []);

  useEffect(() => {
    return router.subscribe("onResolved", () => {
      trackPageView(window.location.pathname);
    });
  }, [router]);

  if (!visible) return null;

  const decide = (value: "granted" | "denied") => {
    setConsent(value);
    setVisible(false);
    if (value === "granted") trackPageView(window.location.pathname);
  };

  return (
    <div
      role="dialog"
      aria-label="Privacy preference"
      className="fixed inset-x-3 bottom-3 z-50 mx-auto max-w-xl rounded-xl border border-gold/25 bg-black/80 p-4 backdrop-blur-md sm:inset-x-auto sm:right-5 sm:bottom-5"
    >
      <p className="font-body text-[0.72rem] leading-6 tracking-[0.06em] text-ivory/75">
        We use anonymous analytics to understand how this realm is explored. Nothing is stored until
        you agree.
      </p>
      <div className="mt-3 flex justify-end gap-2">
        <button
          onClick={() => decide("denied")}
          className="rounded-md border border-ivory/20 px-3 py-1.5 font-body text-[0.65rem] tracking-[0.2em] text-ivory/60 transition-colors hover:text-ivory"
        >
          DECLINE
        </button>
        <button
          onClick={() => decide("granted")}
          className="rounded-md border border-gold/50 bg-gold/15 px-3 py-1.5 font-body text-[0.65rem] tracking-[0.2em] text-gold transition-colors hover:bg-gold/25"
        >
          ACCEPT
        </button>
      </div>
    </div>
  );
}
