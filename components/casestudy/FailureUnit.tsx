"use client";

import { motion } from "framer-motion";

/**
 * The central shift of the batch case: what counts as the unit of failure.
 * Before, one invalid row invalidates the whole run. After, the same row
 * fails alone while everything valid keeps moving.
 * Reveals once on scroll — no looping animation.
 */
export default function FailureUnit() {
  const COUNT = 24;
  const BAD = 11; // the one invalid row, same position in both grids

  const cell = (state: "bad" | "reset" | "ok", i: number, delay: number) => (
    <motion.span
      key={i}
      className={`cs-fu-cell is-${state}`}
      initial={{ opacity: 0, scale: 0.6 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        delay: delay + i * 0.012,
        type: "spring",
        stiffness: 420,
        damping: 22,
      }}
    />
  );

  return (
    <div className="cs-fu">
      {/* BEFORE */}
      <div className="cs-fu-col">
        <div className="cs-fu-head">
          <span className="tag is-bad">Before</span>
          <span className="rule">One bad row = one failed batch</span>
        </div>
        <div className="cs-fu-grid" aria-hidden>
          {Array.from({ length: COUNT }, (_, i) =>
            cell(i === BAD ? "bad" : "reset", i, 0)
          )}
        </div>
        <p className="cs-fu-note">
          The run resets. Every valid transaction has to be processed again.
        </p>
      </div>

      {/* AFTER */}
      <div className="cs-fu-col is-after">
        <div className="cs-fu-head">
          <span className="tag is-ok">After</span>
          <span className="rule">One bad row = one problem to resolve</span>
        </div>
        <div className="cs-fu-grid" aria-hidden>
          {Array.from({ length: COUNT }, (_, i) =>
            cell(i === BAD ? "bad" : "ok", i, 0.25)
          )}
        </div>
        <p className="cs-fu-note">
          The failed row carries its own state. The rest of the batch continues.
        </p>
      </div>
    </div>
  );
}
