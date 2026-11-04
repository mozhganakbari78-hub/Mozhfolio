"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Custom pointer arrow in the accent colour, pinned exactly to the mouse.
 * Desktop-only (fine pointer). The overlay never blocks clicks (pointer-events
 * disabled throughout).
 */
export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const [enabled, setEnabled] = useState(false);
  const [down, setDown] = useState(false);
  const [hovering, setHovering] = useState(false);

  useEffect(() => {
    const fine = window.matchMedia("(pointer: fine)").matches;
    if (!fine) return;

    const enable = () => setEnabled(true);
    enable();
    document.documentElement.classList.add("has-custom-cursor");

    const onMove = (e: MouseEvent) => {
      // The arrow sits exactly on the pointer: any lag reads as the cursor
      // being sluggish.
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
        dotRef.current.style.opacity = "1";
      }
      const el = e.target as HTMLElement | null;
      const clickable = !!el?.closest(
        'a, button, [role="button"], input, textarea, select, label, [data-hand], summary'
      );
      setHovering(clickable);
    };
    const onDown = () => setDown(true);
    const onUp = () => setDown(false);
    const setVisible = (v: string) => {
      if (dotRef.current) dotRef.current.style.opacity = v;
    };
    const onLeave = () => setVisible("0");
    const onEnter = () => setVisible("1");

    window.addEventListener("mousemove", onMove, { passive: true });
    window.addEventListener("mousedown", onDown);
    window.addEventListener("mouseup", onUp);
    document.addEventListener("mouseleave", onLeave);
    document.addEventListener("mouseenter", onEnter);

    return () => {
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
      className="fixed left-0 top-0 pointer-events-none will-change-transform"
      // Hidden until the first mouse move gives it a position.
      style={{ opacity: 0, transition: "opacity 0.2s ease", zIndex: 2147483647 }}
    >
      <div
        className="relative"
        style={{
          transform: down ? "scale(0.85)" : hovering ? "scale(1.5)" : "scale(1)",
          transition: "transform 0.15s ease",
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
      </div>
    </div>
  );
}
