"use client";

import { motion } from "framer-motion";

const PARTS = [
  {
    k: "01",
    rule: "State the problem",
    text: "Your access is not registered in the offline batch deposit system.",
    note: "In the user's words, not the system's",
    tone: "state" as const,
  },
  {
    k: "02",
    rule: "Give the next action",
    text: "Please contact support to register or activate it.",
    note: "Self-recovery if possible, escalation if not",
    tone: "action" as const,
  },
  {
    k: "03",
    rule: "Remove the blame",
    text: "…not “you are not registered”, “you don't have permission”",
    note: "Describe the rule, not the user's supposed mistake",
    tone: "blame" as const,
  },
];

/**
 * The three rules shown as the anatomy of one message rather than a list,
 * so the framework reads as a shape you can check copy against.
 * Reveals once on scroll; no looping animation.
 */
export default function MessageAnatomy() {
  return (
    <div className="cs-anat">
      {PARTS.map((p, i) => (
        <motion.div
          key={p.k}
          className={`cs-anat-row is-${p.tone}`}
          initial={{ opacity: 0, x: -10 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ delay: i * 0.14, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* the rule's colour bar draws down as the row lands */}
          <motion.span
            className="bar"
            aria-hidden
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ delay: i * 0.14 + 0.12, duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
          />
          <div className="k">
            <span className="n">{p.k}</span>
            <span className="r">{p.rule}</span>
          </div>
          <div className="v">
            <p className="t">{p.text}</p>
            <p className="note">{p.note}</p>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
