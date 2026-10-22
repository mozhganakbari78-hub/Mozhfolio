"use client";

import { motion } from "framer-motion";
import { useInView } from "@/lib/useInView";

const timeline = [
  { year: "Apr 2024 – Present", role: "Product Designer", company: "Sadad Informatic Corporation", note: "Share design ownership of Bank Melli Iran's corporate banking platform, with primary ownership of its back-office domain. Co-own the design system across both: 90+ screens, three brand configurations, governed with the frontend tech lead." },
  { year: "Nov 2023 – May 2024", role: "User Experience Designer", company: "IRO Team", note: "Mobile monitoring for IoT greenhouse systems. Turned programming-style conditional logic into visual rule building, so non-technical operators could automate without understanding if/else, and saw conflicting rules before confirming." },
  { year: "Nov 2021 – Nov 2023", role: "UI/UX Specialist", company: "Wallex Exchange · Algo Team", note: "Customer-facing trading experiences, translating crypto concepts into structured workflows. Validated MVPs with in-house traders and mentored an incoming design intern." },
  { year: "Sep 2017 – Sep 2021", role: "B.Sc. Computer Engineering", company: "Islamic Azad University, Central Tehran Branch", note: "" },
];

// Experience timeline hidden for now. Set this back to true to bring the
// resume column back; nothing else needs changing.
const SHOW_TIMELINE = false;

// Principles card row hidden for now. Set this back to true to bring it back.
const SHOW_PRINCIPLES = false;

const traits = [
  "I investigate the problem before designing the solution.",
  "I design workflows and systems, not isolated screens.",
  "I make trade-offs visible instead of hiding them.",
  "I optimize for solutions teams can build and users can successfully adopt.",
];

/** The About copy, as four short chapters. A single column of four equal
 *  paragraphs read as a wall and gave the eye nothing to land on; a label per
 *  chapter makes the section skimmable without cutting anything. */
const story = [
  {
    label: "Background",
    body: "Six years of designing enterprise banking and fintech products: corporate payment workflows, back-office tools, a multi-brand design system, and crypto trading experiences. What connects them is complexity and consequence, not one industry.",
    lede: true,
  },
  {
    label: "What the work looks like",
    body: "Some of it starts from nothing: a design system, a rule builder for operators who do not write code, a feature nobody had scoped yet. Some of it starts inside a live product with real users, established workflows and technical limits. Both begin the same way, by understanding the problem before proposing a solution.",
  },
  {
    label: "In practice",
    body: "That means working closely with Product, Engineering, and Support. I look for evidence before proposing solutions, read support patterns to understand where users struggle, and stay involved through implementation because that is often where design decisions meet reality.",
  },
  {
    label: "Now",
    body: "I work on a corporate banking platform for organizational customers, designing complex financial workflows and internal back-office tools.",
  },
];

/** The copy block. It sits in the left column next to the resume, and in the
 *  right column once the resume is hidden, so it lives in one place. */
function AboutProse({ inView }: { inView: boolean }) {
  return (
    <div>
      {story.map((chapter, i) => (
        <motion.div
          key={chapter.label}
          initial={{ opacity: 0, y: 14 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55, delay: 0.2 + i * 0.08, ease: [0.16, 1, 0.3, 1] }}
          className={i === 0 ? "" : "mt-6 pt-6"}
          style={i === 0 ? undefined : { borderTop: "1px solid var(--border-subtle)" }}
        >
          <div className="mono-label mb-2.5" style={{ color: "var(--text-tertiary)" }}>
            {chapter.label}
          </div>
          <p
            className={
              chapter.lede
                ? "text-[16px] md:text-[17px] leading-[1.6]"
                : "text-[14.5px] leading-[1.65]"
            }
            style={{
              color: chapter.lede ? "var(--text-primary)" : "var(--text-secondary)",
              letterSpacing: chapter.lede ? "-0.01em" : undefined,
            }}
          >
            {chapter.body}
          </p>
        </motion.div>
      ))}
    </div>
  );
}

export default function About() {
  const { ref, inView } = useInView();

  return (
    <section id="about" className="py-28 md:py-40 px-6" aria-labelledby="about-heading">
      {/* Same width as every section below, so the edges line up down the page. */}
      <div className="max-w-5xl mx-auto">
        {/* Two columns either way. With the timeline shown it is copy and
            resume; with it hidden the heading keeps the left column so the
            copy still has a readable measure instead of one very wide line. */}
        <div ref={ref} className="grid md:grid-cols-2 gap-16 lg:gap-24 items-start">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="mono-label mb-6" style={{ color: "var(--accent-ink)" }}>
              [ 01 ] About
            </div>
            {/* Two-tone, the same move the hero makes on the surname: the
                subject stays bright and the qualifier drops back. */}
            <h2
              id="about-heading"
              className="text-[24px] md:text-[32px] font-semibold mb-5 tracking-tight leading-[1.12]"
              style={{ color: "var(--text-primary)", letterSpacing: "-0.03em" }}
            >
              Designing products where a wrong decision{" "}
              <span style={{ color: "var(--text-secondary)" }}>
                costs more than a bad experience.
              </span>
            </h2>
            {SHOW_TIMELINE && <AboutProse inView={inView} />}

            {/* With the resume hidden the left column ran out of content half
                way down. The thesis of the section sits here instead of being
                buried in the third sentence of a paragraph. */}
            {!SHOW_TIMELINE && (
              <motion.figure
                className="mt-10 pt-9 mr-0 md:mr-6"
                style={{ borderTop: "1px solid var(--border-subtle)" }}
                initial={{ opacity: 0, y: 16 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              >
                <span
                  aria-hidden
                  className="block w-7 h-px mb-6"
                  style={{ background: "var(--accent-color)" }}
                />
                <blockquote
                  className="text-[18px] md:text-[21px] leading-[1.42] m-0"
                  style={{ color: "var(--text-primary)", letterSpacing: "-0.02em" }}
                >
                  The screen is rarely the hard part. The hard part is deciding what the system
                  should make easy, and what it should make impossible.
                </blockquote>
              </motion.figure>
            )}
          </motion.div>

          {/* Right — the resume, or the copy itself once the resume is off, so
              the section keeps both of its columns either way. */}
          {SHOW_TIMELINE ? (
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
                    <div className="text-xs mb-1" style={{ color: "var(--accent-ink)" }}>
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
          ) : (
            <motion.div
              initial={{ opacity: 0, y: 32 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            >
              <AboutProse inView={inView} />
            </motion.div>
          )}
        </div>

        {/* Principles — sits under both columns so the two stay the same height.
            Named 'Principles' because the Capabilities section already owns
            the 'How I work.' headline. */}
        {SHOW_PRINCIPLES && (
        <div className="mt-16 md:mt-20 pt-10" style={{ borderTop: "1px solid var(--border-subtle)" }}>
          <div className="mono-label mb-6" style={{ color: "var(--text-tertiary)" }}>
            Principles
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

        </div>
        )}
      </div>
    </section>
  );
}
