"use client";

import { motion } from "framer-motion";

/**
 * Real questions from the support queue, kept in the language they were written
 * in with an English gloss underneath. The point of the figure is the shape of
 * the set: almost nothing here reports a broken feature. People are asking
 * where something is, or what state it is in.
 */
type Note = { fa: string; en: string; tag: "how" | "state" };

const NOTES: Note[] = [
  {
    fa: "چطور برای حسابم امضادار تعریف کنم؟",
    en: "How do I add a signatory to my account?",
    tag: "how",
  },
  {
    fa: "نحوه تغییر شرایط برداشت به چه شکل هست؟",
    en: "How do I change the withdrawal terms?",
    tag: "how",
  },
  {
    fa: "چطور شماره امضادار برای دریافت پیامک‌ها را می‌توان تغییر داد؟",
    en: "How can a signatory's number for receiving SMS be changed?",
    tag: "how",
  },
  {
    fa: "علت خالی بودن شماره حساب‌های سازمان چیه؟",
    en: "Why is the organization's account number list empty?",
    tag: "state",
  },
  {
    fa: "عدم نمایش درخواست در کارتابل بعد از ثبت؟",
    en: "My request doesn't appear in the cartable after I submit it.",
    tag: "state",
  },
  {
    fa: "من امضادار حساب هستم ولی پیامک واریز و برداشت برایم نمی‌آید",
    en: "I'm a signatory on the account, but I don't get deposit and withdrawal SMS.",
    tag: "state",
  },
];

const TAGS: Record<Note["tag"], string> = {
  how: "How do I do this?",
  state: "What is going on with mine?",
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
        Six from the queue, translated for reference. Not one of them reports a broken feature.
      </p>
    </div>
  );
}
