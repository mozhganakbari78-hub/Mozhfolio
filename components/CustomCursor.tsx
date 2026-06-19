"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Figma-style multiplayer cursor: a pointer arrow that trails a named label
 * ("Mozhgan Akbari"). On fine-pointer (desktop) devices only. When hovering an
 * element marked with [data-hand] (primary CTAs), a small skeleton hand appears
 * near the cursor. Smoothed with rAF lerp. Never blocks clicks (pointer-events
 * are disabled on the whole overlay).
 */
export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const [enabled, setEnabled] = useState(false);
  const [hand, setHand] = useState(false);
  const [down, setDown] = useState(false);

  useEffect(() => {
    const fine = window.matchMedia("(pointer: fine)").matches;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!fine) return;

    setEnabled(true);
    document.documentElement.classList.add("has-custom-cursor");

    const target = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    const pos = { ...target };
    let raf = 0;

    const render = () => {
      // Lerp toward the target for smooth trailing (or snap if reduced motion).
      const ease = reduce ? 1 : 0.2;
      pos.x += (target.x - pos.x) * ease;
      pos.y += (target.y - pos.y) * ease;
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${pos.x}px, ${pos.y}px, 0)`;
      }
      raf = requestAnimationFrame(render);
    };

    const onMove = (e: MouseEvent) => {
      target.x = e.clientX;
      target.y = e.clientY;
      const el = (e.target as HTMLElement | null)?.closest?.("[data-hand]");
      setHand(Boolean(el));
    };
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
    document.addEventListener("mouseleave", onLeave);
    document.addEventListener("mouseenter", onEnter);
    raf = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mousedown", onDown);
      window.removeEventListener("mouseup", onUp);
      document.removeEventListener("mouseleave", onLeave);
      document.removeEventListener("mouseenter", onEnter);
      document.documentElement.classList.remove("has-custom-cursor");
    };
  }, []);

  if (!enabled) return null;

  return (
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
        {/* Figma-style pointer arrow */}
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

        {/* Name label */}
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

        {/* Skeleton hand — appears over [data-hand] CTAs */}
        <div
          className="absolute left-6 top-9"
          style={{
            opacity: hand ? 1 : 0,
            transform: hand ? "translateY(0) rotate(0deg)" : "translateY(6px) rotate(-12deg)",
            transition: "opacity 0.22s ease, transform 0.28s cubic-bezier(0.16,1,0.3,1)",
          }}
        >
          <SkeletonHand />
        </div>
      </div>
    </div>
  );
}

/** Minimal pointing skeleton hand drawn in SVG — playful, lightweight. */
function SkeletonHand() {
  return (
    <svg
      width="30"
      height="34"
      viewBox="0 0 30 34"
      fill="none"
      style={{ filter: "drop-shadow(0 2px 6px rgba(0,0,0,0.5))" }}
    >
      <g stroke="#e9ebf2" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" fill="rgba(233,235,242,0.12)">
        {/* palm + wrist */}
        <path d="M7 21c-1.5-2-3-5-3-7 0-1.2 1.4-1.4 2.2-.4l2.3 3" />
        <path d="M8 17V6.5c0-1.1 1.8-1.1 1.8 0V15" />
        {/* index finger pointing up */}
        <path d="M9.8 15V3.2c0-1.2 1.9-1.2 1.9 0V14" />
        {/* middle / ring / pinky folded */}
        <path d="M11.7 14V5c0-1.1 1.8-1.1 1.8 0v9" />
        <path d="M13.5 14V6.4c0-1.1 1.8-1.1 1.8 0V15" />
        <path d="M15.3 15.2c2.2-1.4 4-1.2 5 .2 1.2 1.7.6 4.4-1 6.6-1.2 1.7-2.4 3-2.4 5v.5H8.4v-.6c0-1.6-.6-2.6-1.4-3.7" />
      </g>
      {/* knuckle joints */}
      <g fill="#e9ebf2">
        <circle cx="10.7" cy="3" r="0.9" />
        <circle cx="12.6" cy="4.8" r="0.9" />
        <circle cx="14.4" cy="6.2" r="0.9" />
      </g>
    </svg>
  );
}
