"use client";

import { motion } from "framer-motion";

/**
 * Real questions from the support queue, kept in the language they were written
 * in with an English gloss underneath. The point of the figure is the shape of
 * the set: almost nothing here reports a broken feature. People are asking
 * where something is, or what state it is in.
 */
type Note = { fa: string; en: string; tag: "where" | "state" | "how" };

const NOTES: Note[] = [
  { fa: "از کجا باید امضا کنم؟", en: "Where am I supposed to sign?", tag: "where" },
  { fa: "تغییر امضادار؟", en: "How do I change a signatory?", tag: "how" },
  { fa: "راجع به سقف برداشت؟", en: "About the withdrawal limit?", tag: "where" },
  {
    fa: "عدم نمایش درخواست در کارتابل بعد از ثبت؟",
    en: "My request isn't in the cartable after submitting it.",
    tag: "state",
  },
  {
    fa: "من امضادار حساب هستم ولی پیامک واریز و برداشت برایم نمی‌آید",
    en: "I'm a signatory on the account, but I don't get deposit and withdrawal SMS.",
    tag: "state",
  },
  {
    fa: "شرایط برداشت بعد از طی تمام مراحل تایید نشده، چقدر زمان می‌برد؟",
    en: "Withdrawal terms still not approved after every step. How long does this take?",
    tag: "state",
  },
];

const TAGS: Record<Note["tag"], string> = {
  where: "Where is it?",
  how: "How do I do it?",
  state: "What state is it in?",
};

export default function TicketWall() {
  return (
    <div className="cs-tw">
      <div className="cs-tw-grid">
        {NOTES.map((n, i) => (
          <motion.div
            key={n.en}
            className={`note is-${n.tag}`}
            initial={{ opacity: 0, y: -18, rotate: i % 2 ? 1.2 : -1.2 }}
            whileInView={{ opacity: 1, y: 0, rotate: i % 2 ? 0.8 : -0.8 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              delay: 0.1 + i * 0.09,
              type: "spring",
              stiffness: 420,
              damping: 16,
              mass: 0.8,
            }}
          >
            <p className="fa" dir="rtl" lang="fa">
              {n.fa}
            </p>
            <p className="en">{n.en}</p>
            <span className="tag">{TAGS[n.tag]}</span>
          </motion.div>
        ))}
      </div>
      <p className="cs-tw-note">
        Six from the queue, translated for reference. Almost none of them report a broken feature.
      </p>
    </div>
  );
}
