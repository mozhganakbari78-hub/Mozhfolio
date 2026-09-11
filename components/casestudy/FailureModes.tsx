"use client";

import { motion } from "framer-motion";

const EASE = [0.16, 1, 0.3, 1] as const;
const ROWS = 12;
const BAD = 7;

/**
 * The two failures side by side, each shown through its consequence rather
 * than its cause. Left: one bad row appears, and every other row goes dark with
 * it. Right: nothing goes wrong at all, which is the point.
 */
export default function FailureModes() {
  return (
    <div className="cs-fm">
      {/* batch-level: one row takes the rest down */}
      <div className="fm">
        <span className="lab is-fail">Failure 01 · Processing failure</span>
        <div className="head">
          <span>54 transactions uploaded</span>
          <span className="ok">53 of them valid</span>
        </div>
        <div className="rows" aria-hidden>
          {Array.from({ length: ROWS }, (_, i) => (
            <motion.span
              key={i}
              className={`r${i === BAD ? " bad" : ""}`}
              initial={{ opacity: 0, scaleX: 0.3 }}
              whileInView={
                i === BAD
                  ? { opacity: 1, scaleX: 1 }
                  : { opacity: [0, 1, 1, 0.22], scaleX: 1 }
              }
              viewport={{ once: true, amount: 0.2 }}
              transition={
                i === BAD
                  ? { delay: 0.4, duration: 0.3, ease: EASE }
                  : {
                      delay: 0.05 + i * 0.02,
                      duration: 1.5,
                      times: [0, 0.2, 0.45, 0.75],
                      ease: EASE,
                    }
              }
            />
          ))}
        </div>
        <motion.div
          className="verdict is-bad"
          initial={{ opacity: 0, y: 6 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ delay: 1.05, duration: 0.4, ease: EASE }}
        >
          Batch rejected · <strong>0 processed</strong>
        </motion.div>
        <p className="cap">
          One unprocessable row and the 53 valid transactions go nowhere. The employee investigates,
          corrects, and submits the whole file again.
        </p>
      </div>

      {/* recipient risk: nothing goes wrong */}
      <div className="fm">
        <span className="lab is-warn">Failure 02 · Recipient risk</span>
        <div className="rec">
          {[
            { k: "Account number", v: "•••• 12345", tone: "" },
            { k: "Name in the file", v: "A. Rahimi", tone: "" },
            { k: "Registered holder", v: "M. Hosseini", tone: "bad" },
          ].map((f, i) => (
            <motion.div
              key={f.k}
              className={`f ${f.tone}`}
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: 0.15 + i * 0.16, duration: 0.4, ease: EASE }}
            >
              <span className="k">{f.k}</span>
              <span className="v">{f.v}</span>
            </motion.div>
          ))}
        </div>
        <motion.div
          className="verdict is-ok"
          initial={{ opacity: 0, y: 6 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ delay: 0.95, duration: 0.4, ease: EASE }}
        >
          ✓ Transfer completed successfully
        </motion.div>
        <p className="cap">
          The account exists, so nothing fails and nothing is flagged. The money reaches{" "}
          <strong>the wrong person</strong>, and the system reports success.
        </p>
      </div>
    </div>
  );
}
