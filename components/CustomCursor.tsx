"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Figma-style multiplayer cursor — a pointer arrow trailing a "Mozhgan Akbari"
 * label, smoothed with rAF lerp. Desktop-only (fine pointer). The overlay never
 * blocks clicks (pointer-events disabled throughout).
 */
export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const [enabled, setEnabled] = useState(false);
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
    <>
      {/* Trailing Figma-style cursor */}
      <div
        ref={dotRef}
        aria-hidden="true"
        className="fixed left-0 top-0 pointer-events-none will-change-transform"
        style={{ opacity: 1, transition: "opacity 0.2s ease", zIndex: 2147483647 }}
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
    </>
  );
}
