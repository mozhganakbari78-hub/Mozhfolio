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

const capabilities = [
  {
    icon: MagnifyingGlassIcon,
    title: "Evidence earns scope",
    body: "I don't challenge a brief with opinion. I bring evidence that helps the team reconsider the problem, then align on what is worth solving.",
  },
  {
    icon: Square3Stack3DIcon,
    title: "Systems over screens",
    body: "I design reusable decision systems, not just individual screens. Components, tokens, and governance turn solved problems into shared team knowledge.",
  },
  {
    icon: ShieldCheckIcon,
    title: "Risk before polish",
    body: "In high-impact workflows I make uncertainty visible before optimising the experience. The best decision is often preventing the wrong action, not just making the right one easier.",
  },
  {
    icon: DocumentCheckIcon,
    title: "Trade-offs, documented",
    body: "Live products require compromises. I make them explicit, document the cost, and leave the reasoning behind so the next decision starts from context, not confusion.",
  },
  {
    icon: CpuChipIcon,
    title: "Designed to be adopted",
    body: "The cleanest model is worthless if the team needs a meeting to use it. I design within real constraints: existing code, operational needs, and delivery pressure, because adoption is the measure of success.",
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
            [ 03 ] Capabilities
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
                className="group grid md:grid-cols-[26px_260px_1fr] gap-x-5 gap-y-2 px-6 py-6 md:px-8 md:py-7 transition-colors duration-300 hover:bg-[var(--bg-secondary)]"
                style={{
                  borderTop: ci === 0 ? "none" : "1px solid var(--border-subtle)",
                }}
              >
                <Icon
                  style={{ width: 20, height: 20, color: "var(--accent-ink)" }}
                  className="mt-0.5 hidden md:block"
                />
                <h3
                  className="text-[16px] font-semibold tracking-tight"
                  style={{ color: "var(--text-primary)", letterSpacing: "-0.015em" }}
                >
                  {cap.title}
                </h3>
                <p
                  className="text-[13.5px] leading-relaxed"
                  style={{ color: "var(--text-tertiary)" }}
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
