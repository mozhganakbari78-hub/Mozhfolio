"use client";

import { useEffect } from "react";

/**
 * Warms the browser cache for the case studies while the visitor is still on
 * the home page.
 *
 * A case study needs its own stylesheet and scripts, which the home page
 * doesn't load. On a first visit the browser had to fetch them after the
 * click, and the stylesheet blocks the first paint, so the first case opened
 * slowly while every later one was instant. Once the home page has finished
 * loading and the browser is idle, this fetches the case pages and the files
 * they use at low priority, so the first click is as fast as the second.
 *
 * Plain fetch() rather than <link rel="prefetch">, which Safari doesn't
 * support. Skipped when the visitor has asked to save data.
 */
export default function CasePrefetch({ hrefs }: { hrefs: string[] }) {
  useEffect(() => {
    const conn = (navigator as Navigator & { connection?: { saveData?: boolean } }).connection;
    if (conn?.saveData || !hrefs.length) return;

    let cancelled = false;
    const get = (url: string) =>
      fetch(url, { priority: "low" } as RequestInit).catch(() => undefined);

    const run = async () => {
      // Files the home page already has don't need fetching again.
      const have = new Set(
        Array.from(document.querySelectorAll<HTMLLinkElement | HTMLScriptElement>("link[href], script[src]"))
          .map((el) => new URL((el as HTMLLinkElement).href || (el as HTMLScriptElement).src, location.href).pathname)
      );

      const [first, ...rest] = hrefs;
      const res = await get(first);
      if (cancelled || !res?.ok) return;
      const html = await res.text();

      // Every case is the same route, so they share these files.
      const assets = new Set<string>();
      for (const m of html.matchAll(/(?:href|src)="(\/_next\/static\/[^"]+\.(?:css|js))"/g)) {
        if (!have.has(m[1])) assets.add(m[1]);
      }
      for (const url of [...assets, ...rest]) {
        if (cancelled) return;
        await get(url);
      }
    };

    const idle = (cb: () => void) =>
      typeof window.requestIdleCallback === "function"
        ? window.requestIdleCallback(cb, { timeout: 4000 })
        : setTimeout(cb, 1500);

    const start = () => idle(() => void run());
    if (document.readyState === "complete") start();
    else window.addEventListener("load", start, { once: true });

    return () => {
      cancelled = true;
      window.removeEventListener("load", start);
    };
  }, [hrefs]);

  return null;
}
