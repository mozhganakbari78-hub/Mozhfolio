"use client";

import { motion } from "framer-motion";

/**
 * The same ticket set, sorted by what each request actually needed rather than
 * what it asked. The point of the figure is the 80/20 line, so the two
 * deflectable groups share one colour and the support group gets its own: the
 * reader should see one block and one remainder before reading any number.
 */
const SEGMENTS = [
  {
    pct: 43,
    label: "Needed guidance or reassurance",
    tone: "self" as const,
  },
  {
    pct: 37,
    label: "Were looking for an answer",
    tone: "self" as const,
  },
  {
    pct: 20,
    label: "Genuinely needed direct support",
    tone: "support" as const,
  },
];

const EASE = [0.16, 1, 0.3, 1] as const;

export default function TicketSplit() {
  return (
    <div className="cs-split">
      <div className="cs-split-brackets" aria-hidden>
        <span className="b is-self" style={{ flexBasis: "80%" }}>
          80% answerable without a person
        </span>
        <span className="b is-support" style={{ flexBasis: "20%" }}>
          20%
        </span>
      </div>

      <div
        className="cs-split-bar"
        role="img"
        aria-label="Of around 1,000 support tickets, 43 percent needed guidance or reassurance, 37 percent were looking for an answer, and 20 percent genuinely needed direct support."
      >
        {SEGMENTS.map((s, i) => (
          <motion.span
            key={s.label}
            className={`seg is-${s.tone}`}
            style={{ flexBasis: `${s.pct}%` }}
            title={`${s.pct}% — ${s.label}`}
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
            <span className="lbl">{s.label}</span>
          </motion.li>
        ))}
      </ul>
    </div>
  );
}
