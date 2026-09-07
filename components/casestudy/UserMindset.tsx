"use client";

import { motion } from "framer-motion";

const STATES = [
  {
    k: "01",
    t: "Trying to finish, fast",
    p: "They are mid-payment or mid-transfer, not browsing help content.",
  },
  {
    k: "02",
    t: "Unsure whose fault it is",
    p: "Did I do something wrong, or did the system stop me?",
  },
  {
    k: "03",
    t: "Worried about the consequence",
    p: "Did the money move? Can this be undone? Who do I tell?",
  },
];

/**
 * The three things true about a user at the moment they need help in a
 * financial product. Cards fall in with spring physics so the section reads as
 * weight landing rather than text appearing.
 */
export default function UserMindset() {
  return (
    <div className="cs-mindset">
      {STATES.map((s, i) => (
        <motion.div
          key={s.k}
          className="ms"
          initial={{ opacity: 0, y: -26 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{
            delay: 0.12 + i * 0.13,
            type: "spring",
            stiffness: 420,
            damping: 15,
            mass: 0.8,
          }}
        >
          <span className="k">{s.k}</span>
          <span className="t">{s.t}</span>
          <span className="p">{s.p}</span>
        </motion.div>
      ))}
    </div>
  );
}
