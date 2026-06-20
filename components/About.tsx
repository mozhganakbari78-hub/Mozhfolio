"use client";

import { motion } from "framer-motion";
import { useInView } from "@/lib/useInView";

const timeline = [
  { year: "2024 – Present", role: "Product Designer", company: "Sadad Informatic Corporation", note: "Enterprise corporate banking platform. Contributed to the design system, designed workflow-heavy banking tools, and shipped a batch payments redesign and support experience under real deadlines." },
  { year: "2023 – 2024", role: "Product Designer", company: "IRO Team", note: "Mobile app for remote IoT greenhouse monitoring. Designed sensor controls, notifications, and conditional automation rules for non-technical operators." },
  { year: "2021 – 2023", role: "UI/UX Designer", company: "Wallex Exchange", note: "Consumer cryptocurrency exchange across web and mobile. Built reusable UI components and shipped iteratively with developers over two years." },
  { year: "2017 – 2021", role: "B.Sc. Computer Engineering", company: "Islamic Azad University, Central Tehran Branch", note: "" },
];

const traits = [
  "I read data before I sketch.",
  "I turn support signals into product insight.",
  "I design workflows, not isolated screens.",
  "I build systems that can scale beyond me.",
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
              [ 01 ] About
            </div>
            <h2
              id="about-heading"
              className="text-3xl md:text-5xl font-semibold mb-6 tracking-tight leading-[1.05]"
              style={{ color: "var(--text-primary)", letterSpacing: "-0.03em" }}
            >
              I design where clarity becomes critical.
            </h2>
            <p className="text-base leading-relaxed mb-6" style={{ color: "var(--text-secondary)" }}>
              Product designer with around four years in fintech and enterprise software. I work close to engineering, design within real product and technical constraints, and care more about decisions that ship and get adopted than about polish.
            </p>
            <p className="text-base leading-relaxed mb-10" style={{ color: "var(--text-secondary)" }}>
              Most of my recent work is on a live corporate banking platform, where I helped build the design system and designed workflow-heavy banking tools alongside engineering.
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
              <motion.div
                className="absolute left-0 top-2 bottom-2 w-px origin-top"
                style={{ background: "var(--border)" }}
                initial={{ scaleY: 0 }}
                animate={inView ? { scaleY: 1 } : {}}
                transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
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
                    {item.note && (
                      <div className="text-xs" style={{ color: "var(--text-tertiary)" }}>
                        {item.note}
                      </div>
                    )}
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
