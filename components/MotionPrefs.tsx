"use client";

import { useEffect } from "react";
import { MotionGlobalConfig } from "framer-motion";

/**
 * When the reader prefers reduced motion, every framer-motion animation jumps
 * straight to its end state, so reveals show content at once instead of fading.
 */
export default function MotionPrefs() {
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
