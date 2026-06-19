"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { caseStudies } from "@/data/caseStudies";

const ease = [0.16, 1, 0.3, 1] as [number, number, number, number];

export default function Projects() {
  return (
    <section id="projects" className="py-28 md:py-40 px-6" aria-labelledby="projects-heading">
      <div className="max-w-5xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease }}
          className="mb-16 md:mb-20 flex flex-col md:flex-row md:items-end md:justify-between gap-8"
        >
          <div>
            <div className="mono-label mb-5" style={{ color: "var(--accent-color)" }}>
              [ 02 ] — Selected Work
            </div>
            <h2
              id="projects-heading"
              className="text-4xl md:text-6xl font-semibold tracking-tight max-w-2xl leading-[1.02]"
              style={{ color: "var(--text-primary)", letterSpacing: "-0.03em" }}
            >
              Case studies, in full.
            </h2>
          </div>
          <p className="text-sm md:text-base max-w-xs" style={{ color: "var(--text-tertiary)" }}>
            Each opens the full case study — context, decisions, and the trade-offs behind them.
          </p>
        </motion.div>

        {/* Case study cards */}
        <div className="grid gap-5 md:gap-6">
          {caseStudies.map((cs, i) => (
            <motion.div
              key={cs.index}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7, delay: i * 0.08, ease }}
            >
            <Link
              href={`/work/${cs.slug}`}
              data-hand
              aria-label={`Read case study: ${cs.title}`}
              className="group relative block overflow-hidden rounded-2xl border p-7 md:p-10 transition-colors duration-300"
              style={{ borderColor: "var(--border-strong)", background: "var(--surface)" }}
            >
              {/* hover glow */}
              <div
                className="pointer-events-none absolute -inset-px opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                style={{
                  background:
                    "radial-gradient(500px circle at var(--mx,50%) var(--my,0%), var(--accent-soft), transparent 60%)",
                }}
                aria-hidden
              />

              <div className="relative grid md:grid-cols-[auto_1fr_auto] items-start gap-6 md:gap-10">
                {/* index */}
                <div
                  className="font-mono text-sm pt-1"
                  style={{ color: "var(--accent-color)" }}
                >
                  {cs.index} / {String(caseStudies.length).padStart(2, "0")}
                </div>

                {/* body */}
                <div>
                  <div className="mono-label mb-3" style={{ color: "var(--text-tertiary)" }}>
                    {cs.meta}
                  </div>
                  <h3
                    className="text-2xl md:text-4xl font-semibold tracking-tight mb-4 transition-colors duration-300 group-hover:text-[var(--accent-color)]"
                    style={{ color: "var(--text-primary)", letterSpacing: "-0.025em" }}
                  >
                    {cs.title}
                  </h3>
                  <p
                    className="text-sm md:text-base leading-relaxed max-w-2xl mb-6"
                    style={{ color: "var(--text-secondary)" }}
                  >
                    {cs.description}
                  </p>
                  <div className="flex flex-wrap items-center gap-2">
                    {cs.tags.map((tag) => (
                      <span
                        key={tag}
                        className="mono-label px-2.5 py-1 rounded-full border"
                        style={{ color: "var(--text-tertiary)", borderColor: "var(--border)" }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* CTA */}
                <div className="flex md:flex-col items-center md:items-end gap-3 md:text-right">
                  <span
                    className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full text-sm font-medium whitespace-nowrap transition-all duration-300 group-hover:gap-3"
                    style={{ background: "var(--accent-soft)", color: "var(--accent-color)" }}
                  >
                    Read Case Study
                    <ArrowUpRight size={15} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </span>
                </div>
              </div>
            </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
