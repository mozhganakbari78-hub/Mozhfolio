"use client";

import { useEffect, useRef, useState, useSyncExternalStore } from "react";

const REDUCE = "(prefers-reduced-motion: reduce)";
const subscribe = (cb: () => void) => {
  const mq = window.matchMedia(REDUCE);
  mq.addEventListener("change", cb);
  return () => mq.removeEventListener("change", cb);
};
const prefersReduced = () => window.matchMedia(REDUCE).matches;

/**
 * Scroll reveal trigger. Fires as soon as any part of the element enters the
 * viewport, and also for anything already above it (an anchor jump, a fast
 * scroll or a refresh mid-page), so content never stays hidden. With reduced
 * motion it reports "in view" straight away.
 */
export function useInView() {
  const ref = useRef<HTMLDivElement>(null);
  const [seen, setSeen] = useState(false);
  const reduce = useSyncExternalStore(subscribe, prefersReduced, () => false);

  useEffect(() => {
    const el = ref.current;
    if (!el || reduce || typeof IntersectionObserver === "undefined") return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting || entry.boundingClientRect.top < 0) {
          setSeen(true);
          obs.disconnect();
        }
      },
      { threshold: 0, rootMargin: "0px 0px 10% 0px" }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [reduce]);

  return { ref, inView: seen || reduce };
}
