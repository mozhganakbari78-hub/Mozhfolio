"use client";

import { motion } from "framer-motion";
import { useInView } from "@/lib/useInView";

const timeline = [
  { year: "Apr 2024 – Present", role: "Product Designer", company: "Sadad Informatic Corporation", note: "Share design ownership of Bank Melli Iran's corporate banking platform, serving 58,000 organizations, with primary ownership of its standalone back-office domain. Co-own the design system spanning both — 90+ live screens, three brand configurations — and govern it with the frontend tech lead." },
  { year: "Nov 2023 – May 2024", role: "User Experience Designer", company: "IRO Team", note: "Mobile monitoring and control for sensor-heavy IoT greenhouse systems. Converted programming-style conditional logic into visual rule building, so non-technical operators could define automation without understanding if/else — surfacing conflicting rules before confirmation." },
  { year: "Nov 2021 – Nov 2023", role: "UI/UX Specialist", company: "Wallex Exchange — Algo Team", note: "Customer-facing trading and fintech experiences, translating crypto concepts and system behavior into structured workflows. Validated MVPs with in-house traders, and mentored an incoming design intern through the team's workflow." },
  { year: "Sep 2017 – Sep 2021", role: "B.Sc. Computer Engineering", company: "Islamic Azad University, Central Tehran Branch", note: "" },
];

const traits = [
  "I build the evidence before I ask for scope.",
  "I design workflows, not isolated screens.",
  "I document the trade-off instead of hiding it.",
  "I optimise for what a team will actually adopt.",
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
              I design inside systems that are already running.
            </h2>
            <p className="text-base leading-relaxed mb-6" style={{ color: "var(--text-secondary)" }}>
              Product designer with around five years across enterprise banking, fintech, and
              crypto. No greenfield, no pause in delivery &mdash; existing code, live operations,
              fixed deadlines. That constraint is where I do my best work, because it forces the
              real question: not what the ideal design would be, but what this team can actually
              adopt.
            </p>
            <p className="text-base leading-relaxed mb-10" style={{ color: "var(--text-secondary)" }}>
              I work closely with product, engineering, and support to challenge assumptions,
              navigate technical trade-offs, and carry decisions through implementation and release.
              Most of my recent work is a live corporate banking platform serving 58,000
              organizations.
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
