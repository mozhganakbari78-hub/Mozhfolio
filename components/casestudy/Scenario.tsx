"use client";

import { motion } from "framer-motion";

const EASE = [0.16, 1, 0.3, 1] as const;

export type ScenarioStep = {
  /** What the person does. */
  label: string;
  /** What they are thinking at that moment, in their words. */
  thought?: string;
  tone?: "pain" | "good";
};

/**
 * One person's moment with the product, step by step. The same scenario runs
 * twice in a case, before and after, so the reader judges the design by what
 * it changes for someone rather than by a description of the screens.
 */
export default function Scenario({
  kind,
  who,
  steps,
  end,
  note,
}: {
  kind: "before" | "after";
  who: string;
  steps: ScenarioStep[];
  end: string;
  note?: string;
}) {
  return (
    <div className={`cs-scn is-${kind}`}>
      <div className="scn-head">
        <span className="scn-tag">{kind === "before" ? "Before" : "After"}</span>
        <span className="scn-who">{who}</span>
      </div>
      <ol className="scn-steps">
        {steps.map((s, i) => (
          <motion.li
            key={s.label}
            className={s.tone ? `is-${s.tone}` : undefined}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ delay: 0.05 + i * 0.08, duration: 0.4, ease: EASE }}
          >
            <span className="dot" aria-hidden />
            <span className="lbl">{s.label}</span>
            {s.thought ? <span className="thought">&ldquo;{s.thought}&rdquo;</span> : null}
          </motion.li>
        ))}
      </ol>
      <div className="scn-end">{end}</div>
      {note ? <div className="scn-note">{note}</div> : null}
    </div>
  );
}
