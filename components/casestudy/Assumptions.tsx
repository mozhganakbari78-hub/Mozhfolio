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
    a: "The main problem is speed. Employees want to get through files faster.",
    b: "Throughput was never the complaint. The complaint was when failures showed up.",
  },
  {
    a: "A failed batch is an edge case worth handling gracefully.",
    b: "It was routine enough to shape how people worked around the whole tool.",
  },
  {
    a: "Employees can already tell which rows failed and why.",
    b: "They could not. Finding the bad row was manual investigation every time.",
  },
  {
    a: "A validated account number is enough to consider a transfer safe.",
    b: "Valid and correct are different things, and only one of them was checked.",
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
            <span className="lab">We assumed</span>
            <span className="txt">{p.a}</span>
          </div>
          <span className="arw" aria-hidden>
            &rarr;
          </span>
          <div className="side is-b">
            <span className="lab">Branches showed</span>
            <span className="txt">{p.b}</span>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
