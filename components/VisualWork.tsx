"use client";

import { useRef, useEffect } from "react";
import { motion } from "framer-motion";

const base = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const images: { src: string }[] = [
  { src: `${base}/projects/Screen2.png` },
  { src: `${base}/projects/Screen3.png` },
  { src: `${base}/projects/Screen5.png` },
  { src: `${base}/projects/Screen6.png` },
  { src: `${base}/projects/Screen7.png` },
  { src: `${base}/projects/Screen8.png` },
  { src: `${base}/projects/Screen9.png` },
  { src: `${base}/projects/Screen10.png` },
  { src: `${base}/projects/Screen11.png` },
  { src: `${base}/projects/Screen12.png` },
  { src: `${base}/projects/Screen13.png` },
];

// Duplicate for seamless loop
const track = [...images, ...images];

export default function VisualWork() {
  const railRef = useRef<HTMLDivElement>(null);
  const wrapRef = useRef<HTMLDivElement>(null);
  const posRef = useRef(0);
  const rafRef = useRef<number>(0);
  const pausedRef = useRef(false);
  const dragRef = useRef({ active: false, startX: 0, startPos: 0 });

  useEffect(() => {
    const rail = railRef.current;
    const wrap = wrapRef.current;
    if (!rail || !wrap) return;

    const SPEED = 0.55; // px per frame

    const tick = () => {
      if (!pausedRef.current) {
        posRef.current += SPEED;
        const half = rail.scrollWidth / 2;
        if (posRef.current >= half) posRef.current -= half;
        rail.style.transform = `translateX(-${posRef.current}px)`;
      }
      rafRef.current = requestAnimationFrame(tick);
    };

    rafRef.current = requestAnimationFrame(tick);

    const onPointerDown = (e: PointerEvent) => {
      dragRef.current = { active: true, startX: e.clientX, startPos: posRef.current };
      pausedRef.current = true;
      wrap.style.cursor = "grabbing";
      wrap.setPointerCapture(e.pointerId);
    };
    const onPointerMove = (e: PointerEvent) => {
      if (!dragRef.current.active) return;
      const delta = dragRef.current.startX - e.clientX;
      const half = rail.scrollWidth / 2;
      let next = dragRef.current.startPos + delta;
      // wrap within [0, half)
      next = ((next % half) + half) % half;
      posRef.current = next;
      rail.style.transform = `translateX(-${posRef.current}px)`;
    };
    const onPointerUp = () => {
      dragRef.current.active = false;
      pausedRef.current = false;
      wrap.style.cursor = "grab";
    };

    wrap.addEventListener("pointerdown", onPointerDown);
    wrap.addEventListener("pointermove", onPointerMove);
    wrap.addEventListener("pointerup", onPointerUp);
    wrap.addEventListener("pointercancel", onPointerUp);

    return () => {
      cancelAnimationFrame(rafRef.current);
      wrap.removeEventListener("pointerdown", onPointerDown);
      wrap.removeEventListener("pointermove", onPointerMove);
      wrap.removeEventListener("pointerup", onPointerUp);
      wrap.removeEventListener("pointercancel", onPointerUp);
    };
  }, []);

  return (
    <section id="visual" className="py-28 md:py-40" aria-labelledby="visual-heading">
      {/* Header */}
      <div className="px-6 max-w-6xl mx-auto mb-16 md:mb-20">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-6"
        >
          <div>
            <div className="mono-label mb-5" style={{ color: "var(--accent-color)" }}>
              [ 04 ] Visual Work
            </div>
            <h2
              id="visual-heading"
              className="text-4xl md:text-6xl font-semibold tracking-tight max-w-2xl leading-[1.02]"
              style={{ color: "var(--text-primary)", letterSpacing: "-0.03em" }}
            >
              Selected screens.
            </h2>
          </div>
          <p className="text-sm md:text-base max-w-xs" style={{ color: "var(--text-tertiary)" }}>
            UI design and 3D work. A look at the surface.
          </p>
        </motion.div>
      </div>

      {/* Marquee */}
      <motion.div
        ref={wrapRef}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="overflow-hidden select-none"
        style={{ cursor: "grab" }}
      >
        <div
          ref={railRef}
          className="flex gap-5 will-change-transform"
          style={{ width: "max-content" }}
        >
          {track.map((img, i) => (
            <figure
              key={`${img.src}-${i}`}
              className="group relative flex-none overflow-hidden rounded-2xl border"
              style={{
                width: "clamp(360px, 42vw, 720px)",
                height: "clamp(240px, 28vw, 460px)",
                borderColor: "var(--border-strong)",
                background: "var(--bg-secondary)",
              }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={img.src}
                alt=""
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                loading="eager"
                draggable={false}
                style={{ imageRendering: "-webkit-optimize-contrast", backfaceVisibility: "hidden", transform: "translateZ(0)" }}
              />
            </figure>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
