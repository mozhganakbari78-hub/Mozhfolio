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

/**
 * Before/after pairs of real production error strings. The Persian original is
 * the evidence; the English line underneath makes it readable for reviewers who
 * don't read Farsi. Reveals once on scroll, no looping animation.
 */
export default function MessageRewrite({ items }: { items: Rewrite[] }) {
  return (
    <div className="cs-msg-set">
      {items.map((m, i) => (
        <motion.div
          key={m.label}
          className="cs-msg"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ delay: i * 0.1, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="cs-msg-head">
            <span className="n">{String(i + 1).padStart(2, "0")}</span>
            <span className="l">{m.label}</span>
          </div>

          <div className="cs-msg-row is-before">
            <span className="tag">Before</span>
            <p className="fa" dir="rtl" lang="fa">
              {m.before.fa}
            </p>
            <p className="en">{m.before.en}</p>
          </div>

          <div className="cs-msg-changes">
            {m.changes.map((c) => (
              <span key={c}>{c}</span>
            ))}
          </div>

          <div className="cs-msg-row is-after">
            <span className="tag">After</span>
            <p className="fa" dir="rtl" lang="fa">
              {m.after.fa}
            </p>
            <p className="en">{m.after.en}</p>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
