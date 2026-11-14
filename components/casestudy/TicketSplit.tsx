"use client";

import { motion } from "framer-motion";

/**
 * The ticket set sorted by what each request actually needed, in three parts:
 * looking for an answer, needing guidance, and genuinely needing support.
 * Each part has its own bracket above the bar so the three read before any
 * number. Categories follow the analysis deck.
 */
const SEGMENTS = [
  {
    n: 360,
    pct: 37,
    label: "Looking for an answer",
    bracket: "37% looking for an answer",
    detail:
      "Unclear steps, information that doesn't show (an account, a report, a status), or how to activate a service like money transfer. Nothing is broken; the user doesn't know how or why.",
    tone: "self" as const,
  },
  {
    n: 420,
    pct: 43,
    label: "Needs guidance or reassurance",
    bracket: "43% need guidance",
    detail:
      "Repeated patterns, but the answer depends on the user's role, their organisation's status, or their access level. Similar questions with no single answer.",
    tone: "case" as const,
  },
  {
    n: 195,
    pct: 20,
    label: "Genuinely needs support",
    bracket: "20% need support",
    detail: "New bugs, feature requests, specific scenarios and edge cases.",
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
        aria-label="Of 975 tickets, 360 were looking for an answer, 420 needed guidance or reassurance, and 195 genuinely needed support."
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
