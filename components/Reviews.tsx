"use client";

import { motion } from "framer-motion";
import { ChatBubbleLeftEllipsisIcon, ArrowUpRightIcon } from "@heroicons/react/24/outline";
import { reviews } from "@/data/reviews";

const ease = [0.16, 1, 0.3, 1] as [number, number, number, number];

export default function Reviews() {
  return (
    <section id="reviews" className="py-28 md:py-40 px-6" aria-labelledby="reviews-heading">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease }}
          className="mb-16 md:mb-20"
        >
          <div className="mono-label mb-5" style={{ color: "var(--accent-color)" }}>
            [ 04 ] Reviews
          </div>
          <h2
            id="reviews-heading"
            className="text-4xl md:text-6xl font-semibold tracking-tight leading-[1.02]"
            style={{ color: "var(--text-primary)", letterSpacing: "-0.03em" }}
          >
            What people say.
          </h2>
        </motion.div>

        <div className="grid gap-5 md:gap-6 md:grid-cols-3">
          {reviews.map((r, i) => (
            <motion.figure
              key={i}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.08, ease }}
              className="group relative flex flex-col justify-between gap-8 rounded-2xl border p-7 md:p-8 transition-all duration-300 hover:-translate-y-1"
              style={{ borderColor: "var(--border-strong)", background: "var(--surface)" }}
            >
              <div
                className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                style={{ boxShadow: "inset 0 0 0 1px var(--accent-soft), 0 20px 50px rgba(0,0,0,0.4)" }}
                aria-hidden
              />
              <div className="relative">
                <ChatBubbleLeftEllipsisIcon style={{ width: 22, height: 22, color: "var(--accent-color)" }} className="mb-5" />
                <blockquote
                  className="text-base leading-relaxed"
                  style={{ color: "var(--text-secondary)" }}
                >
                  {r.text}
                </blockquote>
              </div>
              <figcaption className="relative">
                <div className="text-sm font-medium" style={{ color: "var(--text-primary)" }}>
                  {r.name}
                </div>
                <div className="text-xs mt-0.5" style={{ color: "var(--text-tertiary)" }}>
                  {r.role}
                </div>
                {r.source && (
                  <a
                    href={r.href ?? "#"}
                    target={r.href ? "_blank" : undefined}
                    rel={r.href ? "noopener noreferrer" : undefined}
                    className="mono-label mt-3 inline-flex items-center gap-1 transition-opacity hover:opacity-70"
                    style={{ color: "var(--accent-color)" }}
                  >
                    {r.source}
                    <ArrowUpRightIcon style={{ width: 11, height: 11 }} />
                  </a>
                )}
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
