"use client";

import { motion } from "framer-motion";

const EASE = [0.16, 1, 0.3, 1] as const;

export type Call = {
  /** The decision, as a short verb phrase. */
  title: string;
  /** The tension it resolved: what was pulling the other way. */
  tension: string;
  /** Why this side won. */
  why: string;
  /** What it cost, stated plainly. */
  gaveUp: string;
};

/**
 * The judgement calls in a case. Each card names the tension, the reason and
 * the price, because a decision without its cost reads as taste, not judgement.
 */
export default function SeniorCalls({ calls }: { calls: Call[] }) {
  return (
    <div className="cs-calls">
      {calls.map((c, i) => (
        <motion.div
          key={c.title}
          className="call"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ delay: 0.06 + i * 0.1, duration: 0.45, ease: EASE }}
        >
          <span className="n">Call {String(i + 1).padStart(2, "0")}</span>
          <span className="t">{c.title}</span>
          <span className="ten">{c.tension}</span>
          <span className="why">{c.why}</span>
          <span className="cost">
            <b>Trade-off</b>
            {c.gaveUp}
          </span>
        </motion.div>
      ))}
    </div>
  );
}
