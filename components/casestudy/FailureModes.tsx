"use client";

import { motion } from "framer-motion";

const EASE = [0.16, 1, 0.3, 1] as const;
const ROWS = 14;
const BAD = 8;

/**
 * The two failures side by side. Left: one bad row takes the whole batch down.
 * Right: the row is perfectly valid and still pays the wrong person, which is
 * the failure the interface could not show at all.
 */
export default function FailureModes() {
  return (
    <div className="cs-fm">
      {/* batch-level */}
      <div className="fm">
        <span className="lab is-fail">Failure 01 · Batch level</span>
        <div className="rows" aria-hidden>
          {Array.from({ length: ROWS }, (_, i) => (
            <motion.span
              key={i}
              className={`r${i === BAD ? " bad" : ""}`}
              initial={{ opacity: 0, scaleX: 0.3 }}
              whileInView={{ opacity: 1, scaleX: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: 0.05 + i * 0.025, duration: 0.3, ease: EASE }}
            />
          ))}
        </div>
        <motion.p
          className="cap"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ delay: 0.6, duration: 0.4 }}
        >
          One invalid row <strong>invalidates the run</strong>. Every valid transaction waits for a
          problem it has nothing to do with.
        </motion.p>
      </div>

      {/* recipient risk */}
      <div className="fm">
        <span className="lab is-warn">Failure 02 · Recipient risk</span>
        <div className="rec">
          {[
            { k: "Account number", v: "•••• 12345", tone: "" },
            { k: "Name in the file", v: "Ali", tone: "" },
            { k: "Registered holder", v: "Reza", tone: "bad" },
          ].map((f, i) => (
            <motion.div
              key={f.k}
              className={`f ${f.tone}`}
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: 0.15 + i * 0.14, duration: 0.4, ease: EASE }}
            >
              <span className="k">{f.k}</span>
              <span className="v">{f.v}</span>
            </motion.div>
          ))}
          <motion.div
            className="verdict"
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ delay: 0.62, duration: 0.4, ease: EASE }}
          >
            <span className="ok">✓ Valid account</span>
            <span className="no">✕ Wrong recipient</span>
          </motion.div>
        </div>
        <p className="cap">
          Nothing fails. The transfer completes exactly as instructed, to{" "}
          <strong>the wrong person</strong>.
        </p>
      </div>
    </div>
  );
}
