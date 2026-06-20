"use client";

import { motion } from "framer-motion";

const base = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const items: { src: string; alt: string; span?: string }[] = [
  { src: `${base}/projects/support-faq.png`, alt: "Unified support surface", span: "md:col-span-2 md:row-span-2" },
  { src: `${base}/projects/batch-upload.png`, alt: "Batch upload, per-row preview" },
  { src: `${base}/projects/batch-validation.png`, alt: "Recipient verification at approval" },
  { src: `${base}/projects/support-faq-filter.png`, alt: "Live FAQ filtering as the user types", span: "md:col-span-2" },
];

export default function VisualWork() {
  return (
    <section id="visual" className="py-28 md:py-40 px-6" aria-labelledby="visual-heading">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="mb-16 md:mb-20 flex flex-col md:flex-row md:items-end md:justify-between gap-6"
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

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5 md:auto-rows-[220px]">
          {items.map((it, i) => (
            <motion.figure
              key={it.src}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.06, ease: [0.16, 1, 0.3, 1] }}
              className={`group relative overflow-hidden rounded-2xl border transition-all duration-300 hover:border-[var(--accent-color)] ${it.span ?? ""}`}
              style={{ borderColor: "var(--border-strong)", background: "var(--bg-secondary)" }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={it.src}
                alt={it.alt}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                style={{ background: "linear-gradient(to top, rgba(0,0,0,0.55), transparent 55%)" }}
                aria-hidden
              />
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
