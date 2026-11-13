"use client";

import { motion } from "framer-motion";
import { ArrowRightIcon, CheckIcon, SparklesIcon } from "@heroicons/react/24/outline";

const EASE = [0.16, 1, 0.3, 1] as const;

const CHECKS = [
  "Still true about money",
  "Still true about permissions",
  "Passes the three rules",
];

function Lines({ n = 3 }: { n?: number }) {
  return (
    <div className="rows" aria-hidden>
      {Array.from({ length: n }, (_, i) => (
        <span key={i} className="row">
          <i />
          <i className="short" />
        </span>
      ))}
    </div>
  );
}

/**
 * Decision 3 as a flow: the exported messages, the AI drafts that handled the
 * volume, and the hand review every draft had to pass before it shipped.
 * Reveals once on scroll; nothing loops.
 */
export default function DraftReview() {
  const step = (i: number) => ({
    initial: { opacity: 0, y: 12 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.3 },
    transition: { delay: 0.1 + i * 0.22, duration: 0.55, ease: EASE },
  });

  return (
    <div className="cs-dr">
      <motion.div className="cs-dr-step is-old" {...step(0)}>
        <span className="n">01</span>
        <span className="t">Old messages</span>
        <Lines />
        <span className="d">~2,000, from the backend export</span>
      </motion.div>

      <ArrowRightIcon className="cs-dr-arrow" aria-hidden />

      <motion.div className="cs-dr-step is-draft" {...step(1)}>
        <span className="n">02</span>
        <span className="t">
          AI drafts <SparklesIcon aria-hidden />
        </span>
        <Lines />
        <span className="d">Handles the volume</span>
      </motion.div>

      <ArrowRightIcon className="cs-dr-arrow" aria-hidden />

      <motion.div className="cs-dr-step is-review" {...step(2)}>
        <span className="n">03</span>
        <span className="t">My review</span>
        <ul className="checks">
          {CHECKS.map((c, i) => (
            <motion.li
              key={c}
              initial={{ opacity: 0, x: -6 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: 0.8 + i * 0.16, duration: 0.4, ease: EASE }}
            >
              <CheckIcon aria-hidden />
              {c}
            </motion.li>
          ))}
        </ul>
        <span className="d">Every message, by hand</span>
      </motion.div>
    </div>
  );
}
