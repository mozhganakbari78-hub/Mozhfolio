"use client";

import { motion } from "framer-motion";

export type Rewrite = {
  /** Short label for what the message is about. */
  label: string;
  before: { fa: string; en: string };
  after: { fa: string; en: string };
  /** What the rewrite fixed. */
  changes: string[];
};

const EASE = [0.16, 1, 0.3, 1] as const;

/**
 * Before/after pairs of real production error strings. The reveal is staged so
 * the reader watches the fix happen: the broken message lands, the arrow
 * crosses, the rewrite settles, then the change tags drop in. Runs once on
 * scroll — nothing loops.
 */
export default function MessageRewrite({ items }: { items: Rewrite[] }) {
  return (
    <div className="cs-msg-set">
      {items.map((m, i) => {
        // each card starts after the previous one has mostly landed
        const t = i * 0.35;
        return (
          <motion.div
            key={m.label}
            className="cs-msg"
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ delay: t, duration: 0.5, ease: EASE }}
          >
            <div className="cs-msg-head">
              <span className="n">{String(i + 1).padStart(2, "0")}</span>
              <span className="l">{m.label}</span>
            </div>

            <div className="cs-msg-pair">
              {/* the broken message lands first */}
              <motion.div
                className="cs-msg-row is-before"
                initial={{ opacity: 0, x: -14 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ delay: t + 0.15, duration: 0.45, ease: EASE }}
              >
                <span className="tag">Before</span>
                <p className="fa" dir="rtl" lang="fa">
                  {m.before.fa}
                </p>
                <p className="en">{m.before.en}</p>
              </motion.div>

              {/* the rewrite arrives from the other side */}
              <motion.div
                className="cs-msg-row is-after"
                initial={{ opacity: 0, x: 14 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ delay: t + 0.5, duration: 0.5, ease: EASE }}
              >
                <span className="tag">After</span>
                <p className="fa" dir="rtl" lang="fa">
                  {m.after.fa}
                </p>
                <p className="en">{m.after.en}</p>
              </motion.div>

              {/* transformation marker on the seam between the two */}
              <motion.span
                className="cs-msg-arrow"
                aria-hidden
                initial={{ opacity: 0, scale: 0.4 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{
                  delay: t + 0.38,
                  type: "spring",
                  stiffness: 460,
                  damping: 18,
                }}
              >
                &rarr;
              </motion.span>
            </div>

            {/* what changed, dropping in once the pair has settled */}
            <div className="cs-msg-changes">
              {m.changes.map((c, ci) => (
                <motion.span
                  key={c}
                  initial={{ opacity: 0, y: -12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{
                    delay: t + 0.85 + ci * 0.09,
                    type: "spring",
                    stiffness: 520,
                    damping: 15,
                    mass: 0.7,
                  }}
                >
                  {c}
                </motion.span>
              ))}
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}
