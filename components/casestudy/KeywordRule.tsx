"use client";

import { motion } from "framer-motion";

/**
 * The exception to the extraction rules. Conjugated verbs were stripped, but
 * verbal nouns had to stay: here the verbal noun is the only token that tells
 * the two questions apart, and they are opposites. Removing it would have
 * collapsed granting access and revoking it into one keyword set.
 */
const PAIR = [
  {
    fa: "چطور می‌توان دسترسی یک کاربر به حساب را ",
    verb: "تعریف",
    faEnd: " کرد؟",
    en: "How do I grant a user access to an account?",
  },
  {
    fa: "چطور می‌توان دسترسی یک کاربر به حساب را ",
    verb: "حذف",
    faEnd: " کرد؟",
    en: "How do I remove a user's access to an account?",
  },
];

const SHARED = ["دسترسی", "کاربر", "حساب"];

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
        Strip the verbal noun and both questions reduce to the same three keywords. In a banking
        back office, granting access and revoking it would have become the same search.
      </motion.p>
    </div>
  );
}
