"use client";

import { motion } from "framer-motion";

const A = "var(--accent-color)";
const SUB = "var(--text-tertiary)";
const BD = "var(--border-strong)";

const Mono: React.CSSProperties = {
  fontFamily: "var(--font-mono), ui-monospace, monospace",
  letterSpacing: 0.3,
};

/** The questions a bare failure message leaves behind. */
const QUESTIONS = [
  { t: "Did the money leave?", x: 8, y: 14, d: 0.9 },
  { t: "Was it my mistake?", x: 60, y: 8, d: 1.05 },
  { t: "Do I try again?", x: 4, y: 78, d: 1.2 },
  { t: "Who do I contact?", x: 62, y: 84, d: 1.35 },
];

/**
 * The shape of the problem: a message that confirms a failure and then stops,
 * leaving the user holding every question that actually matters.
 * Reveals once on scroll; nothing loops.
 */
export default function DeadEndMessage() {
  return (
    <div className="cs-deadend" aria-hidden>
      {/* the unanswered questions hanging around the dialog */}
      {QUESTIONS.map((q) => (
        <motion.span
          key={q.t}
          className="q"
          style={{ left: `${q.x}%`, top: `${q.y}%`, ...Mono }}
          initial={{ opacity: 0, y: 6 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ delay: q.d, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          {q.t}
        </motion.span>
      ))}

      {/* the dialog itself */}
      <motion.div
        className="dlg"
        initial={{ opacity: 0, y: 16, scale: 0.96 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="bar">
          <span className="dot" />
          <span className="dot" />
          <span className="dot" />
        </div>

        <div className="body">
          <motion.span
            className="ico"
            initial={{ scale: 0.5, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: 0.25, type: "spring", stiffness: 380, damping: 16 }}
          >
            !
          </motion.span>
          <motion.p
            className="msg"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: 0.4, duration: 0.4 }}
          >
            Transaction failed.
          </motion.p>

          {/* where the next step should have been */}
          <motion.div
            className="gap"
            initial={{ opacity: 0, scaleY: 0.6 }}
            whileInView={{ opacity: 1, scaleY: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: 0.62, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          >
            <span style={{ ...Mono }}>no next step</span>
          </motion.div>
        </div>
      </motion.div>

      <motion.p
        className="cap"
        style={{ ...Mono }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ delay: 1.5, duration: 0.5 }}
      >
        Informed, not helped.
      </motion.p>
    </div>
  );
}
