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
                  <div className="mono-label mb-4" style={{ color: "var(--text-tertiary)" }}>
                    {cs.meta}
                  </div>
                  <h3
                    className="text-2xl md:text-3xl font-semibold tracking-tight mb-3 transition-colors duration-300 group-hover:text-[var(--accent-color)]"
                    style={{ color: "var(--text-primary)", letterSpacing: "-0.02em" }}
                  >
                    {cs.title}
                  </h3>
                  <p
                    className="text-sm md:text-base leading-relaxed line-clamp-2 mb-8"
                    style={{ color: "var(--text-tertiary)" }}
                  >
                    {cs.short}
                  </p>

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

          {/* Coming soon card */}
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, delay: caseStudies.length * 0.08, ease }}
          >
            <div
              className="relative grid md:grid-cols-2 overflow-hidden rounded-2xl border"
              style={{
                borderColor: "var(--border-strong)",
                borderStyle: "dashed",
                background: "var(--surface)",
                opacity: 0.55,
              }}
              aria-disabled="true"
            >
              {/* Left: content */}
              <div className="p-7 md:p-10 flex flex-col">
                <div className="mono-label mb-4" style={{ color: "var(--text-tertiary)" }}>
                  In progress
                </div>
                <h3
                  className="text-2xl md:text-3xl font-semibold tracking-tight mb-3"
                  style={{ color: "var(--text-primary)", letterSpacing: "-0.02em" }}
                >
                  New case study in the works.
                </h3>
                <p
                  className="text-sm md:text-base leading-relaxed line-clamp-2 mb-8"
                  style={{ color: "var(--text-tertiary)" }}
                >
                  Something I&apos;m currently designing. The messy parts included, as usual.
                </p>
                <div className="mt-auto">
                  <span
                    className="inline-flex items-center gap-2 text-sm font-medium px-3 py-1.5 rounded-full border"
                    style={{
                      color: "var(--text-tertiary)",
                      borderColor: "var(--border-strong)",
                      fontFamily: "var(--font-mono), ui-monospace, monospace",
                      fontSize: 11,
                      letterSpacing: "0.06em",
                    }}
                  >
                    COMING SOON
                  </span>
                </div>
              </div>

              {/* Right: placeholder */}
              <div
                className="hidden md:flex relative min-h-[260px] items-center justify-center"
                style={{ background: "var(--bg-secondary)" }}
              >
                <div
                  className="flex flex-col items-center gap-3"
                  style={{
                    fontFamily: "var(--font-mono), ui-monospace, monospace",
                    fontSize: 11,
                    color: "var(--text-tertiary)",
                    letterSpacing: "0.05em",
                  }}
                >
                  <div className="flex gap-1.5">
                    {[0, 1, 2].map((i) => (
                      <span
                        key={i}
                        className="w-2 h-2 rounded-full"
                        style={{ background: "var(--border-strong)" }}
                      />
                    ))}
                  </div>
                  <span>work in progress</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
