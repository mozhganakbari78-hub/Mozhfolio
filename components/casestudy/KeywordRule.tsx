"use client";

import { motion } from "framer-motion";

/**
 * The exception to the extraction rules. Conjugated verbs were stripped, but
 * verbal nouns had to stay: in these two questions the verbal noun is the only
 * token that tells them apart, so removing it would have collapsed two
 * different answers into one keyword set.
 */
const PAIR = [
  {
    fa: "چطور می‌توان امضادار را در سامانه بانکداری سازمانی ",
    verb: "تعریف",
    faEnd: " کرد؟",
    en: "How do I define a signatory in the corporate banking system?",
  },
  {
    fa: "چطور می‌توان امضادار را در سامانه بانکداری سازمانی ",
    verb: "تغییر",
    faEnd: " داد؟",
    en: "How do I change a signatory in the corporate banking system?",
  },
];

const SHARED = ["امضادار", "سامانه", "بانکداری", "سازمانی"];

const EASE = [0.16, 1, 0.3, 1] as const;

export default function KeywordRule() {
  return (
    <div className="cs-krule">
      {PAIR.map((q, i) => (
        <motion.div
          key={q.verb}
          className="q"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.5, delay: 0.1 + i * 0.12, ease: EASE }}
        >
          <p className="fa" dir="rtl" lang="fa">
            {q.fa}
            <mark>{q.verb}</mark>
            {q.faEnd}
          </p>
          <p className="en">{q.en}</p>
          <div className="toks" dir="rtl" lang="fa">
            {SHARED.map((t) => (
              <span className="t" key={t}>
                {t}
              </span>
            ))}
            <span className="t is-key">{q.verb}</span>
          </div>
        </motion.div>
      ))}

      <motion.p
        className="verdict"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.5, delay: 0.42, ease: EASE }}
      >
        Strip the verbal noun and both questions reduce to the same four keywords. The rule that
        made the set clean would have made two different answers indistinguishable.
      </motion.p>
    </div>
  );
}
