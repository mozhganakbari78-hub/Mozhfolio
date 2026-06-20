"use client";

import { useRef, useEffect } from "react";
import { motion } from "framer-motion";

const base = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const images: { src: string; alt: string }[] = [
  { src: `${base}/projects/support-faq.png`, alt: "Unified support surface" },
  { src: `${base}/projects/batch-upload.png`, alt: "Batch upload, per-row preview" },
  { src: `${base}/projects/support-faq-filter.png`, alt: "Live FAQ filtering" },
  { src: `${base}/projects/batch-validation.png`, alt: "Recipient verification at approval" },
];

// Duplicate for seamless loop
const track = [...images, ...images];

export default function VisualWork() {
  const railRef = useRef<HTMLDivElement>(null);
  const posRef = useRef(0);
  const rafRef = useRef<number>(0);
  const pausedRef = useRef(false);

  useEffect(() => {
    const rail = railRef.current;
    if (!rail) return;

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
    return () => cancelAnimationFrame(rafRef.current);
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
            A look at the surface, not the story. Visit a case study for the reasoning behind it.
          </p>
        </motion.div>
      </div>

      {/* Marquee */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="overflow-hidden"
        onMouseEnter={() => { pausedRef.current = true; }}
        onMouseLeave={() => { pausedRef.current = false; }}
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
                width: "clamp(280px, 32vw, 520px)",
                height: "clamp(180px, 22vw, 340px)",
                borderColor: "var(--border-strong)",
                background: "var(--bg-secondary)",
              }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={img.src}
                alt={img.alt}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                loading="lazy"
                draggable={false}
              />
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                style={{ background: "linear-gradient(to top, rgba(0,0,0,0.5), transparent 55%)" }}
                aria-hidden
              />
              <figcaption
                className="absolute bottom-0 left-0 right-0 px-5 pb-4 pt-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-sm font-medium"
                style={{
                  color: "#fff",
                  background: "linear-gradient(to top, rgba(0,0,0,0.55), transparent)",
                }}
              >
                {img.alt}
              </figcaption>
            </figure>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
