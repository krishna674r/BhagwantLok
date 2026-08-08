/**
 * Consent-gated analytics.
 * Nothing loads and no event fires until the visitor accepts.
 * Uses Google Analytics 4 when a measurement ID is configured; otherwise
 * events are collected in-memory only (privacy-friendly no-op).
 */

const CONSENT_KEY = "bl-analytics-consent";

export type Consent = "granted" | "denied";

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
    __blEvents?: { name: string; params?: Record<string, unknown>; at: number }[];
  }
}

const MEASUREMENT_ID = import.meta.env["VITE_LOVABLE_CONNECTOR_GOOGLE_ANALYTICS_API_KEY"] as
  | string
  | undefined;

export function getConsent(): Consent | null {
  if (typeof window === "undefined") return null;
  const v = window.localStorage.getItem(CONSENT_KEY);
  return v === "granted" || v === "denied" ? v : null;
}

export function setConsent(consent: Consent) {
  if (typeof window === "undefined") return;
  window.localStorage.setItem(CONSENT_KEY, consent);
  if (consent === "granted") initAnalytics();
}

let loaded = false;

export function initAnalytics() {
  if (typeof window === "undefined" || loaded) return;
  if (getConsent() !== "granted") return;
  loaded = true;

  window.__blEvents = window.__blEvents ?? [];

  if (!MEASUREMENT_ID) return; // no provider configured — local event log only

  const script = document.createElement("script");
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${MEASUREMENT_ID}`;
  document.head.appendChild(script);

  window.dataLayer = window.dataLayer || [];
  window.gtag = function gtag(...args: unknown[]) {
    window.dataLayer!.push(args);
  };
  window.gtag("js", new Date());
  window.gtag("config", MEASUREMENT_ID, { anonymize_ip: true });
}

export function trackEvent(name: string, params?: Record<string, unknown>) {
  if (typeof window === "undefined") return;
  if (getConsent() !== "granted") return;
  window.__blEvents = window.__blEvents ?? [];
  window.__blEvents.push(params ? { name, params, at: Date.now() } : { name, at: Date.now() });
  window.gtag?.("event", name, params ?? {});
}

export function trackPageView(path: string) {
  trackEvent("page_view", { page_path: path });
}
