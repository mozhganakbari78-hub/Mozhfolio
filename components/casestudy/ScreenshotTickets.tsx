"use client";

import { motion } from "framer-motion";
import { PaperClipIcon } from "@heroicons/react/24/outline";

/**
 * The pattern that started the error-messages case: a support ticket that is
 * an attached screenshot of an error and little or nothing else. The error
 * texts are the platform's own old messages, quoted elsewhere in the case; the
 * tickets themselves are drawn, not copied from the queue.
 */
const TICKETS: { error: string; body?: string }[] = [
  { error: "You are not the creator of the request." },
  { error: "Invalid input parameters.", body: "What do I do now?" },
  { error: "Card inquiry service error." },
];

export default function ScreenshotTickets() {
  return (
    <figure className="cs-st">
      <div className="cs-st-grid">
        {TICKETS.map((t, i) => (
          <motion.div
            key={t.error}
            className="cs-st-card"
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: 0.1 + i * 0.14, duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="head">
              <span className="k">Support ticket</span>
              <span className="s">Open</span>
            </div>

            {/* the attachment: a cropped screenshot with the error on it */}
            <div className="shot" aria-hidden>
              <span className="ln" />
              <span className="ln short" />
              <div className="err">
                <span className="ico">!</span>
                <span className="tx">{t.error}</span>
              </div>
            </div>
            <span className="file">
              <PaperClipIcon aria-hidden /> screenshot.png
            </span>

            <div className="body">
              <span className="lab">Message</span>
              {t.body ? (
                <p className="said">&ldquo;{t.body}&rdquo;</p>
              ) : (
                <p className="none">No text</p>
              )}
            </div>
          </motion.div>
        ))}
      </div>
      <figcaption className="cs-st-note">
        The shape of those tickets, redrawn. The error texts are real; the tickets are internal to
        the bank.
      </figcaption>
    </figure>
  );
}
