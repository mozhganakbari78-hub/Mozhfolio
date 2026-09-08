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
    b: "The main frustration was not how long the process took. It was the uncertainty after submission: when something failed, employees had limited visibility into what went wrong and how to recover.",
  },
  {
    a: "Batch failures were occasional exceptions that needed better error handling.",
    b: "Failures happened often enough that employees had developed manual ways of identifying problematic rows and recovering from failed batches.",
  },
  {
    a: "Existing validation helped employees understand which transactions needed attention.",
    b: "Employees could see that something failed, but identifying the problematic row and the reason required manual investigation.",
  },
  {
    a: "Valid account details were enough to reduce transfer risk.",
    b: "Account validation confirmed that an account existed. It did not confirm that the account belonged to the intended recipient.",
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
