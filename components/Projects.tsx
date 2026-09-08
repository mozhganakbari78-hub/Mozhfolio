"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import { caseStudies } from "@/data/caseStudies";
import CaseCardArt from "./CaseCardArt";
import { trackEvent } from "@/lib/gtag";

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
              className="text-[28px] md:text-[42px] font-semibold tracking-tight max-w-2xl leading-[1.02]"
              style={{ color: "var(--text-primary)", letterSpacing: "-0.03em" }}
            >
              The decisions, not just the screens.
            </h2>
          </div>
          <p className="text-sm md:text-base max-w-xs" style={{ color: "var(--text-tertiary)" }}>
            Each case opens the reframe, the evidence behind it, the trade-offs I owned, and what I
            would do differently.
          </p>
        </motion.div>

        <div className="grid gap-5">
          {caseStudies.map((cs, i) => (
            <motion.div
              key={cs.index}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.45, delay: i * 0.06, ease }}
            >
              <Link
                href={`/work/${cs.slug}`}
                data-hand
                onClick={() =>
                  trackEvent("case_study_click", { case_study_name: cs.title })
                }
                aria-label={`Read case study: ${cs.title}`}
                className="group relative grid md:grid-cols-2 overflow-hidden rounded-2xl border transition-all duration-300 hover:border-[var(--accent-ink)] hover:-translate-y-0.5"
                style={{ borderColor: "var(--border-strong)", background: "var(--surface)" }}
              >
                {/* Left: content */}
                <div className="p-6 md:p-8 flex flex-col">
                  {/* index + focus area */}
                  <div className="flex items-baseline gap-2.5 mb-4">
                    <span className="mono-label" style={{ color: "var(--accent-ink)" }}>
                      {cs.index}
                    </span>
                    <span className="mono-label" style={{ color: "var(--text-tertiary)" }}>
                      {cs.meta}
                    </span>
                  </div>

                  <h3
                    className="text-[17px] md:text-[20px] font-semibold tracking-tight mb-2.5 transition-colors duration-300 group-hover:text-[var(--accent-ink)]"
                    style={{
                      color: "var(--text-primary)",
                      letterSpacing: "-0.015em",
                      lineHeight: 1.3,
                    }}
                  >
                    {cs.title}
                  </h3>
                  <p
                    className="text-[13px] md:text-[13.5px] leading-relaxed mb-6 max-w-[34ch]"
                    style={{ color: "var(--text-tertiary)" }}
                  >
                    {cs.short}
                  </p>

                  <div className="mt-auto">
                    <span
                      className="inline-flex items-center gap-2 text-[13px] font-medium"
                      style={{ color: "var(--accent-ink)" }}
                    >
                      Read the case study
                      <span
                        className="inline-flex items-center justify-center rounded-full transition-transform duration-300 group-hover:translate-x-1"
                        style={{
                          width: 22,
                          height: 22,
                          border: "1px solid var(--accent-ink)",
                        }}
                      >
                        <ArrowRightIcon style={{ width: 12, height: 12 }} />
                      </span>
                    </span>
                  </div>
                </div>

                {/* Right: illustration */}
                <div
                  className="hidden md:flex relative min-h-[260px] items-center justify-center opacity-70 transition-opacity duration-300 group-hover:opacity-100"
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
