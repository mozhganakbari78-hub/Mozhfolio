"use client";

import { motion } from "framer-motion";

const EASE = [0.16, 1, 0.3, 1] as const;

/**
 * What the two of us believed before the branch visits, and what the visits
 * actually showed. Written down first so neither of us could quietly rewrite
 * an assumption after the fact.
 */
const PAIRS = [
  {
    a: "Improving processing speed would create the biggest impact.",
    b: "The bigger issue was not speed alone. It was the lack of visibility when something failed, and how to recover from it.",
  },
  {
    a: "Existing validation was enough to reduce transfer risk.",
    b: "A technically valid account did not guarantee the intended recipient.",
  },
  {
    a: "The batch was the right unit of failure.",
    b: "The real unit of recovery was the individual transaction.",
  },
];

export default function Assumptions() {
  return (
    <div className="cs-assume">
      {PAIRS.map((p, i) => (
        <motion.div
          key={p.a}
          className="pair"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ delay: 0.08 + i * 0.11, duration: 0.45, ease: EASE }}
        >
          <div className="side is-a">
            <span className="lab">Assumption {String(i + 1).padStart(2, "0")}</span>
            <span className="txt">{p.a}</span>
          </div>
          <span className="arw" aria-hidden>
            &rarr;
          </span>
          <div className="side is-b">
            <span className="lab">What we found</span>
            <span className="txt">{p.b}</span>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
