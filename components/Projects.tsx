"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import { caseStudies } from "@/data/caseStudies";
import CaseCardArt from "./CaseCardArt";

const ease = [0.16, 1, 0.3, 1] as [number, number, number, number];

export default function Projects() {
  return (
    <section id="projects" className="py-28 md:py-40 px-6" aria-labelledby="projects-heading">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease }}
          className="mb-16 md:mb-20 flex flex-col md:flex-row md:items-end md:justify-between gap-8"
        >
          <div>
            <div className="mono-label mb-5" style={{ color: "var(--accent-color)" }}>
              [ 02 ] Selected Work
            </div>
            <h2
              id="projects-heading"
              className="text-4xl md:text-6xl font-semibold tracking-tight max-w-2xl leading-[1.02]"
              style={{ color: "var(--text-primary)", letterSpacing: "-0.03em" }}
            >
              Case studies with the messy parts included.
            </h2>
          </div>
          <p className="text-sm md:text-base max-w-xs" style={{ color: "var(--text-tertiary)" }}>
            Not just final screens. Each case opens the context, constraints, decisions, and product reasoning behind the work.
          </p>
        </motion.div>

        <div className="grid gap-6 md:gap-7">
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
                className="group relative grid md:grid-cols-2 overflow-hidden rounded-2xl border transition-all duration-300 hover:border-[var(--accent-color)]"
                style={{ borderColor: "var(--border-strong)", background: "var(--surface)" }}
              >
                {/* Left: content */}
                <div className="p-7 md:p-10 flex flex-col">
                  <div className="flex flex-wrap items-center gap-2 mb-6">
                    {cs.tags.slice(0, 4).map((tag, ti) => {
                      const colors = ["purple", "pink", "yellow", "teal", "blue"];
                      const c = colors[(i * 2 + ti) % colors.length];
                      return (
                        <span key={tag} className={`tag-pill tag-pill--${c}`}>
                          {tag}
                        </span>
                      );
                    })}
                  </div>

                  <h3
                    className="text-2xl md:text-3xl font-semibold tracking-tight mb-3 transition-colors duration-300 group-hover:text-[var(--accent-color)]"
                    style={{ color: "var(--text-primary)", letterSpacing: "-0.02em" }}
                  >
                    {cs.title}
                  </h3>
                  <p
                    className="text-sm md:text-base leading-relaxed mb-8"
                    style={{ color: "var(--text-secondary)" }}
                  >
                    {cs.short}
                  </p>

                  <div className="grid grid-cols-3 gap-4 mb-8 max-w-md">
                    {cs.stats.map((s) => (
                      <div key={s.label}>
                        <div
                          className="text-2xl md:text-3xl font-semibold tracking-tight"
                          style={{ color: "var(--accent-color)", letterSpacing: "-0.02em" }}
                        >
                          {s.value}
                        </div>
                        <div
                          className="mono-label mt-1"
                          style={{ color: "var(--text-tertiary)" }}
                        >
                          {s.label}
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-auto">
                    <span
                      className="inline-flex items-center gap-2 text-sm font-medium transition-all duration-300 group-hover:gap-3"
                      style={{ color: "var(--accent-color)" }}
                    >
                      Read the case study
                      <ArrowRightIcon
                        style={{ width: 16, height: 16 }}
                        className="transition-transform duration-300 group-hover:translate-x-1"
                      />
                    </span>
                  </div>
                </div>

                {/* Right: illustration */}
                <div
                  className="hidden md:flex relative min-h-[360px] items-center justify-center"
                  style={{ background: "var(--bg-secondary)" }}
                >
                  <CaseCardArt name={cs.illustration} />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
