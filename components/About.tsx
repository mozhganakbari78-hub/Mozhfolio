"use client";

import { motion } from "framer-motion";
import { useInView } from "@/lib/useInView";

const timeline = [
  { year: "Apr 2024 – Present", role: "Product Designer", company: "Sadad Informatic Corporation", note: "Share design ownership of Bank Melli Iran's corporate banking platform (58,000 organizations), with primary ownership of its back-office domain. Co-own the design system across both: 90+ screens, three brand configurations, governed with the frontend tech lead." },
  { year: "Nov 2023 – May 2024", role: "User Experience Designer", company: "IRO Team", note: "Mobile monitoring for IoT greenhouse systems. Turned programming-style conditional logic into visual rule building, so non-technical operators could automate without understanding if/else, and saw conflicting rules before confirming." },
  { year: "Nov 2021 – Nov 2023", role: "UI/UX Specialist", company: "Wallex Exchange · Algo Team", note: "Customer-facing trading experiences, translating crypto concepts into structured workflows. Validated MVPs with in-house traders and mentored an incoming design intern." },
  { year: "Sep 2017 – Sep 2021", role: "B.Sc. Computer Engineering", company: "Islamic Azad University, Central Tehran Branch", note: "" },
];

const traits = [
  "I investigate the problem before designing the solution.",
  "I design workflows and systems, not isolated screens.",
  "I make trade-offs visible instead of hiding them.",
  "I optimize for solutions teams can build and users can successfully adopt.",
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
              className="text-[24px] md:text-[32px] font-semibold mb-5 tracking-tight leading-[1.12]"
              style={{ color: "var(--text-primary)", letterSpacing: "-0.03em" }}
            >
              Designing products that already have users, constraints, and history.
            </h2>
            <p className="text-[14.5px] leading-[1.65] mb-4" style={{ color: "var(--text-secondary)" }}>
              Five years of designing enterprise banking, fintech, and operational products. Most of
              my work has been inside existing systems: products with real users, established
              workflows, technical limitations, and business constraints.
            </p>
            <p className="text-[14.5px] leading-[1.65] mb-4" style={{ color: "var(--text-secondary)" }}>
              I enjoy working in those environments because the challenge is rarely creating the
              perfect solution from scratch. It is understanding what already exists, finding the
              real problem behind the request, and designing something the team can actually build
              and users can actually adopt.
            </p>
            <p className="text-[14.5px] leading-[1.65] mb-4" style={{ color: "var(--text-secondary)" }}>
              In practice, that means working closely with Product, Engineering, and Support. I look
              for evidence before proposing solutions, read support patterns to understand where
              users struggle, and stay involved through implementation because that is often where
              design decisions meet reality.
            </p>
            <p className="text-[14.5px] leading-[1.65]" style={{ color: "var(--text-secondary)" }}>
              Currently, I work on a corporate banking platform used by 58,000 organizations,
              designing complex financial workflows and internal operational tools.
            </p>

          </motion.div>

          {/* Right — Timeline */}
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="mono-label mb-6" style={{ color: "var(--text-tertiary)" }}>
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

              <div className="space-y-8 pl-8">
                {timeline.map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: 16 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.25 + i * 0.12 }}
                    className="relative"
                  >
                    {/* current role: a slow ring so the timeline reads as live.
                        Only transform and opacity animate, so it stays on the
                        compositor and costs nothing while scrolling. */}
                    {i === 0 && (
                      <span
                        className="now-pulse absolute -left-8 top-1.5 w-2 h-2 rounded-full translate-x-[-3px]"
                        style={{ background: "var(--accent-color)" }}
                        aria-hidden="true"
                      />
                    )}
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
                      className="text-[15px] font-semibold mb-1"
                      style={{ color: "var(--text-primary)" }}
                    >
                      {item.role}
                    </div>
                    <div className="text-[13.5px] mb-2" style={{ color: "var(--text-secondary)" }}>
                      {item.company}
                    </div>
                    {item.note && (
                      <div className="text-[12.5px] leading-[1.6]" style={{ color: "var(--text-tertiary)" }}>
                        {item.note}
                      </div>
                    )}
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* How I work — sits under both columns so the two stay the same height */}
        <div className="mt-16 md:mt-20 pt-10" style={{ borderTop: "1px solid var(--border-subtle)" }}>
          <div className="mono-label mb-6" style={{ color: "var(--text-tertiary)" }}>
            How I work
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {traits.map((trait, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 12 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.45, delay: 0.35 + i * 0.07, ease: [0.16, 1, 0.3, 1] }}
                className="rounded-xl p-4"
                style={{
                  background: "var(--surface)",
                  border: "1px solid var(--border-strong)",
                }}
              >
                <span
                  aria-hidden
                  className="block w-1.5 h-1.5 rounded-full mb-3"
                  style={{ background: "var(--accent-color)" }}
                />
                <span
                  className="text-[13px] leading-relaxed block"
                  style={{ color: "var(--text-secondary)" }}
                >
                  {trait}
                </span>
              </motion.div>
            ))}
          </div>

          <motion.p
            className="text-[12.5px] leading-relaxed mt-8 max-w-3xl"
            style={{ color: "var(--text-tertiary)" }}
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.7 }}
          >
            One pattern I&apos;ve noticed in my own work: strong evidence before a decision, strong
            reflection after it, and not enough measurement defined before launch. I&apos;m fixing
            that at the design stage rather than the retrospective.
          </motion.p>
        </div>
      </div>
    </section>
  );
}
