"use client";

import { motion } from "framer-motion";

/**
 * The ticket set sorted by what each request actually needed, in three parts:
 * one fixed answer, the user's own case, and genuine support work. Each part
 * has its own bracket above the bar so the three read before any number.
 */
const SEGMENTS = [
  {
    n: 360,
    pct: 37,
    label: "One fixed answer",
    bracket: "37% one fixed answer",
    detail:
      "Questions with one answer, often a bank policy. Nothing had gone wrong; the user needed information, not a person.",
    tone: "answer" as const,
  },
  {
    n: 420,
    pct: 43,
    label: "About the user's own case",
    bracket: "43% the user's own case",
    detail:
      "The answer depends on the user's role, their organisation, or a specific transaction. These need someone to look at the case.",
    tone: "case" as const,
  },
  {
    n: 195,
    pct: 20,
    label: "Genuinely support work",
    bracket: "20% genuinely support work",
    detail: "New bugs, feature requests, and edge cases that needed a person.",
    tone: "support" as const,
  },
];

const EASE = [0.16, 1, 0.3, 1] as const;

export default function TicketSplit() {
  return (
    <div className="cs-split">
      <div className="cs-split-brackets" aria-hidden>
        {SEGMENTS.map((s) => (
          <span key={s.label} className={`b is-${s.tone}`} style={{ flexBasis: `${s.pct}%` }}>
            {s.bracket}
          </span>
        ))}
      </div>

      <div
        className="cs-split-bar"
        role="img"
        aria-label="Of 975 tickets, 360 had one fixed answer, 420 were about the user's own case, and 195 were genuinely support work."
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
