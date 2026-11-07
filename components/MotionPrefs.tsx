"use client";

import { useEffect } from "react";
import { MotionGlobalConfig } from "framer-motion";

/**
 * When the reader prefers reduced motion, every framer-motion animation jumps
 * straight to its end state, so reveals show content at once instead of fading.
 *
 * It also ends the "before JavaScript" state. The exported HTML carries each
 * scroll reveal's starting style (opacity 0), so on a slow phone every section
 * below the hero stayed blank until the scripts had loaded, several seconds in.
 * globals.css shows those elements while <html> lacks .hydrated. Once React is
 * running, anything already on screen or above it is marked data-seen and stays
 * shown; everything further down drops back to its starting style and reveals
 * as it scrolls into view, as before.
 */
export default function MotionPrefs() {
  useEffect(() => {
    const vh = window.innerHeight;
    // [data-reveal] is set by the inline script in layout.tsx while the HTML
    // still carries each reveal's starting style
    document
      .querySelectorAll<HTMLElement>("[data-reveal]")
      .forEach((el) => {
        if (el.getBoundingClientRect().top < vh) el.setAttribute("data-seen", "");
      });
    document.documentElement.classList.add("hydrated");
  }, []);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const apply = () => {
      MotionGlobalConfig.skipAnimations = mq.matches;
    };
    apply();
    mq.addEventListener("change", apply);
    return () => mq.removeEventListener("change", apply);
  }, []);
  return null;
}
