"use client";

import { motion } from "framer-motion";

const EASE = [0.16, 1, 0.3, 1] as const;

/**
 * The pivot of the case: the brief the team started with, and the problem the
 * evidence actually described. The old framing fades and rules itself out as
 * the new one lands, so the swap reads as a decision rather than a list.
 * Reveals once on scroll, no looping animation.
 */
export default function ReframeStatement() {
  return (
    <div className="cs-reframe">
      <motion.div
        className="rf rf-before"
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5, ease: EASE }}
      >
        <span className="lab">The brief</span>
        <p className="q">
          &ldquo;Users need more FAQ content.&rdquo;
          <motion.span
            className="strike"
            aria-hidden
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: 0.75, duration: 0.45, ease: EASE }}
          />
        </p>
      </motion.div>

      <motion.span
        className="rf-arrow"
        aria-hidden
        initial={{ opacity: 0, scale: 0.5 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ delay: 1.05, type: "spring", stiffness: 460, damping: 18 }}
      >
        &darr;
      </motion.span>

      <motion.div
        className="rf rf-after"
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ delay: 1.2, duration: 0.55, ease: EASE }}
      >
        <span className="lab">What the tickets described</span>
        <p className="q">
          &ldquo;Users need better guidance when they hit uncertainty{" "}
          <em>inside a workflow</em>.&rdquo;
        </p>
      </motion.div>
    </div>
  );
}
