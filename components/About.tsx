"use client";

import { motion } from "framer-motion";
import { useInView } from "@/lib/useInView";

const timeline = [
  { year: "2026", role: "Senior Product Designer", company: "Enterprise Banking Platform", note: "Led support redesign + batch transfer product" },
  { year: "2025", role: "Product Designer", company: "Corporate Banking Platform", note: "Built design system from 0 on a live product" },
  { year: "2024", role: "UX Designer", company: "Fintech Startup", note: "0-to-1 mobile banking product" },
];

const traits = [
  "I read data before I sketch.",
  "I document trade-offs, not just decisions.",
  "I treat support tickets as design feedback.",
  "I build systems that survive my absence.",
];

export default function About() {
  const { ref, inView } = useInView();

  return (
    <section id="about" className="py-28 md:py-40 px-6" aria-labelledby="about-heading">
      <div className="max-w-5xl mx-auto">
        <div ref={ref} className="grid md:grid-cols-2 gap-16 lg:gap-24 items-start">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="mono-label mb-6" style={{ color: "var(--accent-color)" }}>
              [ 01 ] — About
            </div>
            <h2
              id="about-heading"
              className="text-3xl md:text-5xl font-semibold mb-6 tracking-tight leading-[1.05]"
              style={{ color: "var(--text-primary)", letterSpacing: "-0.03em" }}
            >
              I design for the moments when things go wrong.
            </h2>
            <p className="text-base leading-relaxed mb-6" style={{ color: "var(--text-secondary)" }}>
              My work lives in enterprise B2B — banking platforms, design systems, complex workflows. The users I design for aren't browsing. They're under pressure, on deadline, and one unclear interface away from a support ticket.
            </p>
            <p className="text-base leading-relaxed mb-10" style={{ color: "var(--text-secondary)" }}>
              I combine product thinking with systems thinking. I care as much about why a decision was made as what it looks like. And I document trade-offs honestly — because the next designer who inherits my work deserves to know what I was working around.
            </p>

            {/* Traits */}
            <div className="space-y-3">
              {traits.map((trait, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -12 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + i * 0.08, ease: [0.16, 1, 0.3, 1] }}
                  className="flex items-start gap-3"
                >
                  <span
                    className="mt-2 w-1.5 h-1.5 rounded-full flex-shrink-0"
                    style={{ background: "var(--accent-color)" }}
                  />
                  <span className="text-sm" style={{ color: "var(--text-secondary)" }}>
                    {trait}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right — Timeline */}
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="mono-label mb-8" style={{ color: "var(--text-tertiary)" }}>
              Experience
            </div>

            <div className="relative">
              {/* Timeline line */}
              <div
                className="absolute left-0 top-2 bottom-2 w-px"
                style={{ background: "var(--border)" }}
                aria-hidden="true"
              />

              <div className="space-y-10 pl-8">
                {timeline.map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: 16 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.25 + i * 0.12 }}
                    className="relative"
                  >
                    {/* Dot */}
                    <div
                      className="absolute -left-8 top-1.5 w-2 h-2 rounded-full border-2 translate-x-[-3px]"
                      style={{
                        background: i === 0 ? "var(--accent-color)" : "var(--bg)",
                        borderColor: i === 0 ? "var(--accent-color)" : "var(--border)",
                      }}
                      aria-hidden="true"
                    />
                    <div className="text-xs mb-1" style={{ color: "var(--accent-color)" }}>
                      {item.year}
                    </div>
                    <div
                      className="text-sm font-medium mb-0.5"
                      style={{ color: "var(--text-primary)" }}
                    >
                      {item.role}
                    </div>
                    <div className="text-sm mb-2" style={{ color: "var(--text-secondary)" }}>
                      {item.company}
                    </div>
                    <div className="text-xs" style={{ color: "var(--text-tertiary)" }}>
                      {item.note}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
