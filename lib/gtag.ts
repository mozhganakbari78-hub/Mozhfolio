// Lightweight GA4 event helper. Safe to call anywhere — no-ops if gtag isn't
// loaded yet (e.g. analytics disabled or blocked).
type GtagParams = Record<string, string | number | boolean | undefined>;

declare global {
  interface Window {
    gtag?: (
      command: "event" | "config" | "js",
      action: string,
      params?: GtagParams
    ) => void;
  }
}

export function trackEvent(action: string, params?: GtagParams) {
  if (typeof window === "undefined" || typeof window.gtag !== "function") return;
  window.gtag("event", action, params);
}
