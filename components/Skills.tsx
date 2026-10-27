"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  MagnifyingGlassIcon,
  Square3Stack3DIcon,
  DocumentCheckIcon,
  CpuChipIcon,
  ShieldCheckIcon,
} from "@heroicons/react/24/outline";
import { useInView } from "@/lib/useInView";

// One plain sentence each: the section is skimmed, so every line has to make
// its point without a second read.
const capabilities = [
  {
    icon: MagnifyingGlassIcon,
    title: "Evidence earns scope",
    body: "I bring evidence, not opinion: support tickets and watching people work. That is what gets a team to rethink the problem.",
  },
  {
    icon: Square3Stack3DIcon,
    title: "Systems over screens",
    body: "I design reusable components and tokens, so a problem solved once stays solved for the whole team.",
  },
  {
    icon: ShieldCheckIcon,
    title: "Risk before polish",
    body: "Where a mistake costs money, I first make the wrong action hard, then make the right one easy.",
  },
  {
    icon: DocumentCheckIcon,
    title: "Trade-offs, documented",
    body: "Every compromise is written down with its cost, so the next decision starts from context.",
  },
  {
    icon: CpuChipIcon,
    title: "Designed to be adopted",
    body: "I design within real constraints: existing code, operations and deadlines. If the team can't ship it, it isn't done.",
  },
];

export default function Skills() {
  const { ref, inView } = useInView();
  // Resolve on the client's first render so touch devices never flash the
  // scroll-reveal animation.
  const [isTouch] = useState(
    () => typeof window !== "undefined" && window.matchMedia("(pointer: coarse)").matches
  );

  return (
    <section id="skills" className="py-28 md:py-40 px-6" aria-labelledby="skills-heading">
      <div className="max-w-5xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="mb-16 md:mb-20 max-w-2xl"
        >
          <div className="mono-label mb-5" style={{ color: "var(--accent-ink)" }}>
            [ 04 ] Capabilities
          </div>
          <h2
            id="skills-heading"
            className="text-[28px] md:text-[42px] font-semibold tracking-tight leading-[1.02]"
            style={{ color: "var(--text-primary)", letterSpacing: "-0.03em" }}
          >
            How I work.
          </h2>
        </motion.div>

        {/* One list rather than five boxes: an odd number of cards left the
            last one stranded, and the stacked icon/title pair opened a gap in
            every card that read as unfinished. */}
        <div
          className="rounded-2xl border overflow-hidden"
          style={{ borderColor: "var(--border-strong)", background: "var(--surface)" }}
        >
          {capabilities.map((cap, ci) => {
            const Icon = cap.icon;
            return (
              <motion.div
                key={cap.title}
                initial={isTouch ? false : { opacity: 0, y: 16 }}
                animate={isTouch ? { opacity: 1, y: 0 } : undefined}
                whileInView={isTouch ? undefined : { opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.45, delay: ci * 0.06, ease: [0.16, 1, 0.3, 1] }}
                className="group grid grid-cols-[24px_1fr] md:grid-cols-[26px_260px_1fr] gap-x-4 md:gap-x-5 gap-y-2 px-6 py-6 md:px-8 md:py-7 transition-colors duration-300 hover:bg-[var(--bg-secondary)]"
                style={{
                  borderTop: ci === 0 ? "none" : "1px solid var(--border-subtle)",
                }}
              >
                <Icon
                  style={{ width: 20, height: 20, color: "var(--accent-ink)" }}
                  className="mt-[3px] md:mt-0.5 shrink-0"
                />
                <h3
                  className="text-[16px] md:text-[17px] font-semibold tracking-tight"
                  style={{ color: "var(--text-primary)", letterSpacing: "-0.015em" }}
                >
                  {cap.title}
                </h3>
                <p
                  className="col-start-2 md:col-start-auto text-[15px] md:text-[16px] leading-[1.6] max-w-[56ch]"
                  style={{ color: "var(--text-secondary)" }}
                >
                  {cap.body}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
