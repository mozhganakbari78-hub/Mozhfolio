"use client";

import { useEffect, useRef } from "react";

/**
 * Interactive particle constellation rendered on a single canvas.
 * Floating dots drift slowly and link to nearby neighbours with hairlines;
 * the cursor pulls in links and gently nudges particles. Colours are read
 * live from CSS variables so it adapts to light/dark themes. Honors
 * prefers-reduced-motion by rendering a single static frame.
 */
export default function ParticleField({
  density = 0.00008,
  className,
}: {
  density?: number;
  className?: string;
}) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    type P = { x: number; y: number; vx: number; vy: number };
    let particles: P[] = [];
    let w = 0;
    let h = 0;
    let raf = 0;

    const mouse = { x: -9999, y: -9999, active: false };

    // Resolve theme colours from CSS variables (hex → rgb).
    const readColors = () => {
      const styles = getComputedStyle(document.documentElement);
      const accent = styles.getPropertyValue("--accent-color").trim() || "#0039ff";
      const dot = styles.getPropertyValue("--text-tertiary").trim() || "#6e6e6b";
      const toRgb = (hex: string) => {
        const m = hex.replace("#", "");
        const full = m.length === 3 ? m.split("").map((c) => c + c).join("") : m;
        const n = parseInt(full, 16);
        return { r: (n >> 16) & 255, g: (n >> 8) & 255, b: n & 255 };
      };
      return { accent: toRgb(accent), dot: toRgb(dot) };
    };
    let colors = readColors();

    const linkDist = 130;
    const mouseDist = 180;

    const resize = () => {
      w = canvas.clientWidth;
      h = canvas.clientHeight;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      const count = Math.min(Math.max(Math.floor(w * h * density), 24), 140);
      particles = Array.from({ length: count }, () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.35,
        vy: (Math.random() - 0.5) * 0.35,
      }));
    };

    const draw = () => {
      ctx.clearRect(0, 0, w, h);
      const { accent, dot } = colors;

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        if (!reduceMotion) {
          p.x += p.vx;
          p.y += p.vy;
          if (p.x < 0 || p.x > w) p.vx *= -1;
          if (p.y < 0 || p.y > h) p.vy *= -1;

          // Subtle pull toward the cursor.
          if (mouse.active) {
            const dx = mouse.x - p.x;
            const dy = mouse.y - p.y;
            const d = Math.hypot(dx, dy);
            if (d < mouseDist && d > 0) {
              const f = (1 - d / mouseDist) * 0.6;
              p.x += (dx / d) * f;
              p.y += (dy / d) * f;
            }
          }
        }

        // Dot.
        ctx.beginPath();
        ctx.arc(p.x, p.y, 1.6, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${dot.r},${dot.g},${dot.b},0.55)`;
        ctx.fill();

        // Links to neighbours.
        for (let j = i + 1; j < particles.length; j++) {
          const q = particles[j];
          const dx = p.x - q.x;
          const dy = p.y - q.y;
          const d = Math.hypot(dx, dy);
          if (d < linkDist) {
            const a = (1 - d / linkDist) * 0.22;
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(q.x, q.y);
            ctx.strokeStyle = `rgba(${dot.r},${dot.g},${dot.b},${a})`;
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        }

        // Accent links to the cursor.
        if (mouse.active) {
          const dx = p.x - mouse.x;
          const dy = p.y - mouse.y;
          const d = Math.hypot(dx, dy);
          if (d < mouseDist) {
            const a = (1 - d / mouseDist) * 0.5;
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(mouse.x, mouse.y);
            ctx.strokeStyle = `rgba(${accent.r},${accent.g},${accent.b},${a})`;
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        }
      }

      if (!reduceMotion) raf = requestAnimationFrame(draw);
    };

    const onMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
      mouse.active = mouse.y >= 0 && mouse.y <= h;
    };
    const onLeave = () => {
      mouse.active = false;
      mouse.x = -9999;
      mouse.y = -9999;
    };
    const onTheme = () => {
      colors = readColors();
    };

    resize();
    draw();

    window.addEventListener("resize", resize);
    window.addEventListener("mousemove", onMove, { passive: true });
    window.addEventListener("mouseout", onLeave);
    // Theme toggle swaps the .dark class on <html>; re-read colours when it changes.
    const observer = new MutationObserver(onTheme);
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseout", onLeave);
      observer.disconnect();
    };
  }, [density]);

  return (
    <canvas
      ref={canvasRef}
      className={className}
      style={{ width: "100%", height: "100%", display: "block" }}
      aria-hidden="true"
    />
  );
}
