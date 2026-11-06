"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "@/lib/useInView";
import Reveal from "@/components/Reveal";
import TangleToSystem from "@/components/TangleToSystem";

// One plain sentence each: the section is skimmed, so every line has to make
// its point without a second read.
const capabilities = [
  {
    title: "Evidence earns scope",
    body: "I bring evidence, not opinion: support tickets and watching people work. That is what gets a team to rethink the problem.",
  },
  {
    title: "Systems over screens",
    body: "I design reusable components and tokens, so a problem solved once stays solved for the whole team.",
  },
  {
    title: "Risk before polish",
    body: "Where a mistake is costly, I first make the wrong action hard, then make the right one easy.",
  },
  {
    title: "Trade-offs, documented",
    body: "Every compromise is written down with its cost, so the next decision starts from context.",
  },
  {
    title: "Designed to be adopted",
    body: "I design within real constraints: existing code, operations and deadlines. If the team can't ship it, it isn't done.",
  },
  {
    title: "Words are interface",
    body: "An error message, a label or a confirmation is part of the design. I write each one to say what happened and what to do next.",
  },
];

export default function Skills() {
  const { ref, inView } = useInView();
  // Resolve on the client's first render so touch devices never flash the
  // scroll-reveal animation.
  const [isTouch] = useState(
    () => typeof window !== "undefined" && window.matchMedia("(pointer: coarse)").matches
  );
  const [active, setActive] = useState(0);

  return (
    <section id="skills" className="py-28 md:py-40 px-6" aria-labelledby="skills-heading">
      <div className="max-w-5xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="mb-12 md:mb-16 grid md:grid-cols-[minmax(0,1fr)_minmax(0,1.15fr)] items-center gap-8 md:gap-10"
        >
          <div>
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
            <p
              className="mt-5 text-[16px] md:text-[18px] leading-[1.5] max-w-[34ch]"
              style={{ color: "var(--text-secondary)" }}
            >
              Problems arrive tangled.{" "}
              <span style={{ color: "var(--text-primary)" }}>I leave a structure the team can build on.</span>
            </p>
          </div>
          {/* the tangle becoming five rails, one per item below */}
          <TangleToSystem />
        </motion.div>

        {/* Numbered columns, each on its own thin rule. One is active at a
            time (the first by default, then whichever the pointer is on): its
            number and title take the accent and its bar lights up. */}
        <div role="list" className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-12 md:gap-y-14" onMouseLeave={() => setActive(0)}>
          {capabilities.map((cap, ci) => {
            const on = active === ci;
            return (
              <Reveal as="div"
                key={cap.title}
                initial={isTouch ? false : { opacity: 0, y: 16 }}
                to={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: ci * 0.06, ease: [0.16, 1, 0.3, 1] }}
              >
                <div
                  role="listitem"
                  className="hiw-col"
                  data-on={on || undefined}
                  onMouseEnter={() => setActive(ci)}
                  onFocus={() => setActive(ci)}
                  tabIndex={-1}
                >
                  <span className="hiw-num">{String(ci + 1).padStart(2, "0")}.</span>
                  <h3 className="hiw-title">{cap.title}</h3>
                  <p className="hiw-body">{cap.body}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
