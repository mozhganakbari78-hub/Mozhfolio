"use client";

import { motion } from "framer-motion";

/**
 * Repeated questions from the support tickets, as they appeared in the deck we
 * presented to the PM and product owner. Kept in Persian with an English gloss.
 * Uses the ticket-wall styles (.cs-tw) without the category tags.
 */
const QUESTIONS: { fa: string; en: string }[] = [
  {
    fa: "وضعیت چک ثبت‌شده را از کجا ببینم؟",
    en: "Where can I see the status of a cheque I’ve registered?",
  },
  {
    fa: "چرا امکان انتقال پول برای من وجود ندارد؟",
    en: "Why isn’t money transfer available to me?",
  },
  {
    fa: "چرا شماره حساب من نمایش داده نمی‌شود؟",
    en: "Why isn’t my account number showing?",
  },
  {
    fa: "چطور سطح دسترسی کاربران را تغییر دهیم؟",
    en: "How do we change users’ access levels?",
  },
  {
    fa: "چرا به بعضی بخش‌ها دسترسی ندارم؟",
    en: "Why can’t I access some sections?",
  },
  {
    fa: "چرا امکان درخواست تنخواه کارت برای من فعال نیست؟",
    en: "Why isn’t the petty cash card request available to me?",
  },
];

export default function UserQuestions() {
  return (
    <div className="cs-tw">
      <div className="cs-tw-grid">
        {QUESTIONS.map((q, i) => (
          <motion.div
            key={q.en}
            className="note"
            initial={{ opacity: 0, y: -12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ delay: 0.08 + i * 0.08, type: "spring", stiffness: 420, damping: 18, mass: 0.8 }}
          >
            <p className="fa" dir="rtl" lang="fa">
              {q.fa}
            </p>
            <p className="en">{q.en}</p>
          </motion.div>
        ))}
      </div>
      <p className="cs-tw-note">
        Repeated questions from the tickets, as they appeared in our deck. Translated for reference.
      </p>
    </div>
  );
}
