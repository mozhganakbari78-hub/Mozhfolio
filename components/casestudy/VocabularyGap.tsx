"use client";

import { motion } from "framer-motion";

const EASE = [0.16, 1, 0.3, 1] as const;

/**
 * Why a searchable FAQ was never going to be enough: the user and the system
 * do not describe the same event with the same words. Shown side by side so
 * the mismatch is the whole argument, in the original language plus a gloss.
 */
export default function VocabularyGap() {
  return (
    <div className="cs-vocab">
      <motion.div
        className="vg is-user"
        initial={{ opacity: 0, x: -14 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5, ease: EASE }}
      >
        <span className="lab">What the user types</span>
        <p className="fa" dir="rtl" lang="fa">
          چرا پول نرفته؟
        </p>
        <p className="en">&ldquo;Why hasn&apos;t the money gone through?&rdquo;</p>
      </motion.div>

      <motion.span
        className="vg-gap"
        aria-hidden
        initial={{ opacity: 0, scale: 0.6 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ delay: 0.45, type: "spring", stiffness: 440, damping: 18 }}
      >
        ≠
      </motion.span>

      <motion.div
        className="vg is-system"
        initial={{ opacity: 0, x: 14 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ delay: 0.2, duration: 0.5, ease: EASE }}
      >
        <span className="lab">What the product calls it</span>
        <p className="fa" dir="rtl" lang="fa">
          تراکنش پایا در انتظار پردازش است
        </p>
        <p className="en">&ldquo;The Paya transaction is pending processing.&rdquo;</p>
      </motion.div>
    </div>
  );
}
