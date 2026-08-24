"use client";

import { motion } from "framer-motion";

/**
 * The observed change in what error-related tickets looked like: roughly six in
 * ten used to be "what do I do now", and roughly three in ten were after the
 * rewrite. Ten dots per row so the ratio reads without a chart, and without
 * implying a precision the number does not have.
 */
function Row({
  label,
  filled,
  tone,
  delay,
}: {
  label: string;
  filled: number;
  tone: "before" | "after";
  delay: number;
}) {
  return (
    <div className="cs-ratio-row">
      <span className={`rl is-${tone}`}>{label}</span>
      <div className="dots" aria-hidden>
        {Array.from({ length: 10 }, (_, i) => (
          <motion.span
            key={i}
            className={`d${i < filled ? ` on is-${tone}` : ""}`}
            initial={{ opacity: 0, scale: 0.4 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{
              delay: delay + i * 0.045,
              type: "spring",
              stiffness: 500,
              damping: 16,
              mass: 0.7,
            }}
          />
        ))}
      </div>
      <span className="rv">{filled} in 10</span>
    </div>
  );
}

export default function TicketRatio() {
  return (
    <div className="cs-ratio">
      <p className="cs-ratio-q">
        Tickets that were a screenshot of an error, asking what to do now
      </p>
      <Row label="Before" filled={6} tone="before" delay={0.15} />
      <Row label="After" filled={3} tone="after" delay={0.65} />
      <p className="cs-ratio-note">
        Proportions observed in the support queue. The underlying ticket data is internal to the
        bank, so the ratio is what I can share.
      </p>
    </div>
  );
}
