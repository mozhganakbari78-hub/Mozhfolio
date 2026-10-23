"use client";

import { motion } from "framer-motion";

const EASE = [0.16, 1, 0.3, 1] as const;

/**
 * The whole case in three beats, straight after the hero. A reader who stops
 * here still leaves with the problem, the insight, and what changed; every
 * panel after it is evidence for one of these three lines.
 */
export default function CsSnapshot({
  steps,
}: {
  steps: { k: string; t: string }[];
}) {
  return (
    <div className="cs-snap">
      {steps.map((s, i) => (
        <motion.div
          key={s.k}
          className="step"
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ delay: 0.08 + i * 0.14, duration: 0.5, ease: EASE }}
        >
          <span className="n" aria-hidden>
            {String(i + 1).padStart(2, "0")}
          </span>
          <span className="k">{s.k}</span>
          <span className="t">{s.t}</span>
        </motion.div>
      ))}
    </div>
  );
}
