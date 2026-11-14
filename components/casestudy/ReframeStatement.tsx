"use client";

import { motion } from "framer-motion";

const EASE = [0.16, 1, 0.3, 1] as const;

/** The four "how might we" questions from the analysis deck, in its order. */
const HMW = [
  {
    q: "How might we make filing a ticket simpler for users, without adding complexity?",
    lead: true,
  },
  { q: "How might we show the answers to repeated questions at the moment the user needs them?" },
  { q: "How might we guide users to the relevant FAQ answers before they file a ticket?" },
  { q: "How might we turn the FAQ from a static section into an active tool on the user’s path?" },
];

/**
 * The pivot of the case: the brief the team started with, ruled out, and the
 * four questions we took into the design instead. The first one carries the
 * constraint that shaped every later decision. Reveals once on scroll.
 */
export default function ReframeStatement() {
  return (
    <div className="cs-reframe">
      <motion.div
        className="rf rf-before"
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.5, ease: EASE }}
      >
        <span className="lab">Our first idea</span>
        <p className="q">
          &ldquo;How can we improve the FAQ section?&rdquo;
          <motion.span
            className="strike"
            aria-hidden
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ delay: 0.3, duration: 0.35, ease: EASE }}
          />
        </p>
      </motion.div>

      <motion.span
        className="rf-arrow"
        aria-hidden
        initial={{ opacity: 0, scale: 0.5 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ delay: 0.55, type: "spring", stiffness: 460, damping: 18 }}
      >
        &darr;
      </motion.span>

      <div className="rf-hmw">
        <span className="lab">What we asked instead</span>
        <ul>
          {HMW.map((h, i) => (
            <motion.li
              key={h.q}
              className={h.lead ? "is-lead" : undefined}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ delay: 0.65 + i * 0.1, duration: 0.45, ease: EASE }}
            >
              {h.lead ? <span className="tag">The constraint</span> : null}
              {h.q}
            </motion.li>
          ))}
        </ul>
      </div>
    </div>
  );
}
