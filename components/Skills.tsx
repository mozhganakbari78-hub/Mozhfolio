"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  MagnifyingGlassIcon,
  Square3Stack3DIcon,
  DocumentCheckIcon,
  CpuChipIcon,
} from "@heroicons/react/24/outline";
import { useInView } from "@/lib/useInView";

const capabilities = [
  {
    icon: MagnifyingGlassIcon,
    title: "Evidence earns scope",
    body: "I don't challenge a brief because I disagree with it. I go get the data that gives the team a reason to reconsider it, then bring back a problem worth solving instead of an opinion.",
  },
  {
    icon: Square3Stack3DIcon,
    title: "Systems over screens",
    body: "Component logic, token architecture, and a governance model the team actually uses. A design system is organisational memory: previously solved problems staying solved.",
  },
  {
    icon: DocumentCheckIcon,
    title: "Trade-offs, documented",
    body: "Live products force compromises. I make them deliberately, write down what they cost, and leave the reasoning behind, so the next person inherits a decision, not a mess.",
  },
  {
    icon: CpuChipIcon,
    title: "Designed to be adopted",
    body: "The cleanest model is worthless if the team needs a meeting to use it. I design inside the real constraint space (existing code, live operations, fixed deadlines) and optimise for what ships.",
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
          <div className="mono-label mb-5" style={{ color: "var(--accent-color)" }}>
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

        <div className="grid sm:grid-cols-2 gap-5">
          {capabilities.map((cap, ci) => {
            const Icon = cap.icon;
            return (
              <motion.div
                key={cap.title}
                initial={isTouch ? false : { opacity: 0, y: 28 }}
                animate={isTouch ? { opacity: 1, y: 0 } : undefined}
                whileInView={isTouch ? undefined : { opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.12 }}
                transition={{ duration: 0.6, delay: ci * 0.08, ease: [0.16, 1, 0.3, 1] }}
                className="relative rounded-2xl border p-7 transition-colors duration-300 hover:border-[var(--accent-color)]"
                style={{ borderColor: "var(--border-strong)", background: "var(--surface)" }}
              >
                <span
                  className="inline-flex items-center justify-center w-11 h-11 rounded-xl mb-8 border"
                  style={{ borderColor: "var(--border-strong)", background: "var(--bg-secondary)" }}
                >
                  <Icon style={{ width: 20, height: 20, color: "var(--text-primary)" }} />
                </span>
                <h3
                  className="text-lg font-semibold tracking-tight mb-3"
                  style={{ color: "var(--text-primary)", letterSpacing: "-0.015em" }}
                >
                  {cap.title}
                </h3>
                <p
                  className="text-sm leading-relaxed"
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
