"use client";

import { motion } from "framer-motion";

/**
 * The ticket set sorted by what each request actually needed. The point of the
 * figure is the 80/20 line, so the two groups that never needed a person share
 * one colour and the support group gets its own: the reader should see one
 * block and one remainder before reading any number.
 */
const SEGMENTS = [
  {
    n: 420,
    pct: 43,
    label: "Repetitive, but conditional",
    detail:
      "The same question with no single answer. What is correct depends on the user's role, their organisation's state, and their permission level.",
    tone: "self" as const,
  },
  {
    n: 360,
    pct: 37,
    label: "Answerable by the FAQ",
    detail:
      "Nothing technical had gone wrong. The user did not know how to do something, or why the product was behaving the way it was.",
    tone: "self" as const,
  },
  {
    n: 195,
    pct: 20,
    label: "Genuinely support work",
    detail: "New bugs, feature requests, and edge cases that needed a person.",
    tone: "support" as const,
  },
];

const EASE = [0.16, 1, 0.3, 1] as const;

export default function TicketSplit() {
  return (
    <div className="cs-split">
      <div className="cs-split-brackets" aria-hidden>
        <span className="b is-self" style={{ flexBasis: "80%" }}>
          80% wanted an answer, not support
        </span>
        <span className="b is-support" style={{ flexBasis: "20%" }}>
          20%
        </span>
      </div>

      <div
        className="cs-split-bar"
        role="img"
        aria-label="Of 975 tickets, 420 were repetitive but conditional, 360 were answerable by the FAQ, and 195 genuinely needed support."
      >
        {SEGMENTS.map((s, i) => (
          <motion.span
            key={s.label}
            className={`seg is-${s.tone}`}
            style={{ flexBasis: `${s.pct}%` }}
            title={`${s.n} tickets — ${s.label}`}
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, delay: 0.1 + i * 0.12, ease: EASE }}
          />
        ))}
      </div>

      <ul className="cs-split-key">
        {SEGMENTS.map((s, i) => (
          <motion.li
            key={s.label}
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.45, delay: 0.3 + i * 0.1, ease: EASE }}
          >
            <span className={`chip is-${s.tone}`} aria-hidden />
            <span className="pct">{s.pct}%</span>
            <div className="body">
              <span className="lbl">
                {s.label}
                <span className="n">{s.n} tickets</span>
              </span>
              <span className="det">{s.detail}</span>
            </div>
          </motion.li>
        ))}
      </ul>
    </div>
  );
}
