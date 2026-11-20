"use client";

import { useEffect, useState, type RefObject } from "react";

/**
 * True while the element is on screen (with a small margin), false once it
 * has scrolled away. Unlike useInView it keeps watching, so looping scenes
 * can stop their timers and pause their CSS animations when nobody can see
 * them: most of them animate SVG, which the browser runs on the main thread,
 * and left running they slow down scrolling everywhere else on the page.
 *
 * Pair it with the global `.is-offscreen` rule, which pauses every CSS
 * animation inside the element.
 *
 * `initial` is the value before the observer has reported, which includes
 * the exported HTML before the JavaScript arrives. Pass true for anything
 * in the first screen (the hero), or its entrance stays paused, and the
 * scene blank, until the page has hydrated.
 */
export function useOnScreen(ref: RefObject<Element | null>, margin = "120px", initial = false) {
  const [onScreen, setOnScreen] = useState(initial);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([entry]) => setOnScreen(entry.isIntersecting), {
      rootMargin: margin,
    });
    obs.observe(el);
    return () => obs.disconnect();
  }, [ref, margin]);

  return onScreen;
}
