"use client";

import { motion } from "framer-motion";

/**
 * The matching order handed to the backend team. Shown as a sequence because
 * the last step is the one that protects the user: below the threshold the
 * product offers nothing rather than guessing.
 */
const STEPS = [
  {
    n: "01",
    t: "Normalise",
    p: "Arabic and Persian letters, half-spaces, and three sets of digits reduced to one form.",
  },
  {
    n: "02",
    t: "Resolve synonyms",
    p: "Tokens mapped to a base term through the shared dictionary.",
  },
  {
    n: "03",
    t: "Match and score",
    p: "Literal matches, plus a bonus when two keywords arrive next to each other.",
  },
  {
    n: "04",
    t: "De-weight common words",
    p: "Words that appear in a third of the questions carry less of the score.",
  },
  {
    n: "05",
    t: "Threshold",
    p: "At most five results. Below the threshold, show nothing at all.",
    last: true,
  },
];

const EASE = [0.16, 1, 0.3, 1] as const;

export default function MatchPipeline() {
  return (
    <ol className="cs-pipe">
      {STEPS.map((s, i) => (
        <motion.li
          key={s.n}
          className={s.last ? "is-last" : undefined}
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.45, delay: 0.08 * i, ease: EASE }}
        >
          <span className="n">{s.n}</span>
          <span className="t">{s.t}</span>
          <span className="p">{s.p}</span>
        </motion.li>
      ))}
    </ol>
  );
}
