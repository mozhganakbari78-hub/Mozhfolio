"use client";

import { motion } from "framer-motion";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <motion.footer
      className="py-10 px-6 border-t"
      style={{ borderColor: "var(--border)" }}
      role="contentinfo"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <span className="text-sm" style={{ color: "var(--text-tertiary)" }}>
          © {year} Mozhgan Akbari
        </span>
        <span className="text-xs" style={{ color: "var(--text-tertiary)" }}>
          Designed &amp; built with intention.
        </span>
      </div>
    </motion.footer>
  );
}
