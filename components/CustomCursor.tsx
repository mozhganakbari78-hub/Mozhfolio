"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Two things live here, both desktop-only (fine pointer):
 *
 * 1. A Figma-style multiplayer cursor — a pointer arrow trailing a "Mozhgan
 *    Akbari" label, smoothed with rAF lerp.
 * 2. A rive.app-style skeleton hand that, instead of following the cursor,
 *    rises up out of any element marked [data-hand] (the primary CTAs) and
 *    taps it on hover. The hand is anchored to the hovered element's rect.
 *
 * The overlay never blocks clicks (pointer-events disabled throughout).
 */
type Rect = { x: number; y: number } | null;

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const [enabled, setEnabled] = useState(false);
  const [down, setDown] = useState(false);
  const [handAt, setHandAt] = useState<Rect>(null);

  useEffect(() => {
    const fine = window.matchMedia("(pointer: fine)").matches;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!fine) return;

    setEnabled(true);
    document.documentElement.classList.add("has-custom-cursor");

    const target = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    const pos = { ...target };
    let raf = 0;
    let activeEl: HTMLElement | null = null;

    const render = () => {
      const ease = reduce ? 1 : 0.2;
      pos.x += (target.x - pos.x) * ease;
      pos.y += (target.y - pos.y) * ease;
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${pos.x}px, ${pos.y}px, 0)`;
      }
      raf = requestAnimationFrame(render);
    };

    // Anchor the hand to the bottom-center of the hovered CTA so it reads as
    // "reaching up out of the button".
    const anchorTo = (el: HTMLElement | null) => {
      if (!el) {
        setHandAt(null);
        return;
      }
      const r = el.getBoundingClientRect();
      setHandAt({ x: r.left + r.width / 2, y: r.bottom });
    };

    const onMove = (e: MouseEvent) => {
      target.x = e.clientX;
      target.y = e.clientY;
      const el = (e.target as HTMLElement | null)?.closest?.("[data-hand]") as
        | HTMLElement
        | null;
      if (el !== activeEl) {
        activeEl = el;
        anchorTo(el);
      }
    };
    const reanchor = () => anchorTo(activeEl);
    const onDown = () => setDown(true);
    const onUp = () => setDown(false);
    const onLeave = () => {
      if (dotRef.current) dotRef.current.style.opacity = "0";
    };
    const onEnter = () => {
      if (dotRef.current) dotRef.current.style.opacity = "1";
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    window.addEventListener("mousedown", onDown);
    window.addEventListener("mouseup", onUp);
    window.addEventListener("scroll", reanchor, { passive: true });
    window.addEventListener("resize", reanchor);
    document.addEventListener("mouseleave", onLeave);
    document.addEventListener("mouseenter", onEnter);
    raf = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mousedown", onDown);
      window.removeEventListener("mouseup", onUp);
      window.removeEventListener("scroll", reanchor);
      window.removeEventListener("resize", reanchor);
      document.removeEventListener("mouseleave", onLeave);
      document.removeEventListener("mouseenter", onEnter);
      document.documentElement.classList.remove("has-custom-cursor");
    };
  }, []);

  if (!enabled) return null;

  return (
    <>
      {/* Trailing Figma-style cursor */}
      <div
        ref={dotRef}
        aria-hidden="true"
        className="fixed left-0 top-0 z-[9999] pointer-events-none will-change-transform"
        style={{ opacity: 1, transition: "opacity 0.2s ease" }}
      >
        <div
          className="relative"
          style={{
            transform: down ? "scale(0.85)" : "scale(1)",
            transition: "transform 0.12s ease",
          }}
        >
          <svg
            width="22"
            height="22"
            viewBox="0 0 22 22"
            fill="none"
            style={{ filter: "drop-shadow(0 2px 6px rgba(0,0,0,0.5))" }}
          >
            <path
              d="M3 2L17.5 8.5L10.8 10.8L8.5 17.5L3 2Z"
              fill="var(--accent-color)"
              stroke="#fff"
              strokeWidth="1.2"
              strokeLinejoin="round"
            />
          </svg>
          <span
            className="absolute left-5 top-4 whitespace-nowrap rounded-md px-2 py-1 text-[11px] font-medium tracking-tight"
            style={{
              background: "var(--accent-color)",
              color: "#fff",
              boxShadow: "0 4px 14px rgba(0,0,0,0.35)",
            }}
          >
            Mozhgan Akbari
          </span>
        </div>
      </div>

      {/* rive.app-style skeleton hand — rises out of the hovered CTA and taps */}
      <div
        aria-hidden="true"
        className="fixed left-0 top-0 z-[9998] pointer-events-none"
        style={{
          transform: handAt
            ? `translate3d(${handAt.x}px, ${handAt.y}px, 0)`
            : "translate3d(-200px, -200px, 0)",
          transition: "transform 0.18s cubic-bezier(0.16,1,0.3,1)",
        }}
      >
        <div
          style={{
            // Hand grows upward from the button's bottom edge, centered on it.
            transformOrigin: "bottom center",
            marginLeft: "-15px",
            opacity: handAt ? 1 : 0,
            // Slide up + tap loop, driven by CSS keyframes in globals.css.
            animation: handAt ? "hand-rise 0.34s cubic-bezier(0.16,1,0.3,1) both, hand-tap 1.1s ease-in-out 0.34s infinite" : "none",
          }}
        >
          <SkeletonHand />
        </div>
      </div>
    </>
  );
}

/** Minimal pointing skeleton hand drawn in SVG — playful, lightweight. */
function SkeletonHand() {
  return (
    <svg
      width="30"
      height="38"
      viewBox="0 0 30 38"
      fill="none"
      style={{ filter: "drop-shadow(0 3px 8px rgba(0,0,0,0.55))" }}
    >
      <g
        stroke="#eef0f6"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="rgba(238,240,246,0.14)"
      >
        {/* index finger pointing up to press the button */}
        <path d="M14 16V3.4c0-1.3 2-1.3 2 0V15" />
        {/* folded fingers */}
        <path d="M16 14V6c0-1.2 2-1.2 2 0v9" />
        <path d="M18 15V7.4c0-1.2 2-1.2 2 0V16" />
        <path d="M20 16.4c2.2-1.4 4-1.2 5 .3 1.2 1.8.5 4.6-1.1 6.9-1.2 1.8-2.4 3.1-2.4 5.2v.6" />
        {/* thumb + palm + wrist */}
        <path d="M14 16.5l-2.6-3.4c-.8-1.1-2.3-.9-2.3.4 0 2.1 1.6 5.2 3.1 7.3" />
        <path d="M12.2 21v9.2c0 1.6.6 2.7 1.4 3.8" />
        <path d="M21.5 35.4v-1.8c0-2 1.2-3.4 2.4-5.2" />
      </g>
      <g fill="#eef0f6">
        <circle cx="15" cy="3.2" r="0.95" />
        <circle cx="17" cy="6" r="0.95" />
        <circle cx="19" cy="7.4" r="0.95" />
      </g>
    </svg>
  );
}
