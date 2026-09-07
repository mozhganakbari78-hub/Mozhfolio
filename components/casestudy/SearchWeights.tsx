"use client";

import { motion } from "framer-motion";

const EASE = [0.16, 1, 0.3, 1] as const;

const TIERS = [
  {
    w: "Weight 1",
    rule: "The word is already in the question",
    typed: "حساب",
    typedEn: "account",
    hit: "…حساب…",
    hitEn: "every question containing that word",
  },
  {
    w: "Weight 2",
    rule: "A known synonym of the word",
    typed: "وام",
    typedEn: "loan",
    hit: "تسهیلات",
    hitEn: "the term the content actually uses",
  },
];

/**
 * How search became implementable: two ranked passes instead of open-ended
 * keyword matching. Tier one is literal, tier two runs off a curated synonym
 * list, which is the part that cost engineering almost nothing to ship.
 */
export default function SearchWeights() {
  return (
    <div className="cs-sw">
      {TIERS.map((t, i) => (
        <motion.div
          key={t.w}
          className="tier"
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ delay: 0.1 + i * 0.18, duration: 0.5, ease: EASE }}
        >
          <div className="head">
            <span className="w">{t.w}</span>
            <span className="rule">{t.rule}</span>
          </div>
          <div className="row">
            <span className="chip typed">
              <span className="fa" dir="rtl" lang="fa">
                {t.typed}
              </span>
              <span className="gloss">user types &ldquo;{t.typedEn}&rdquo;</span>
            </span>
            <motion.span
              className="arw"
              aria-hidden
              initial={{ opacity: 0, x: -6 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ delay: 0.35 + i * 0.18, duration: 0.4, ease: EASE }}
            >
              &rarr;
            </motion.span>
            <span className="chip hit">
              <span className="fa" dir="rtl" lang="fa">
                {t.hit}
              </span>
              <span className="gloss">{t.hitEn}</span>
            </span>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
