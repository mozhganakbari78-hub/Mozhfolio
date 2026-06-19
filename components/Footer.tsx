"use client";

import { motion } from "framer-motion";
import { Mail, ArrowUpRight } from "lucide-react";

function LinkedinIcon({ size = 15 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

export default function Footer() {
  const year = new Date().getFullYear();

  const links = [
    { label: "Email", href: "mailto:akbarimozhgan99@gmail.com", icon: Mail, external: false },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/mozhgan-akbari/",
      icon: LinkedinIcon,
      external: true,
    },
  ];

  return (
    <motion.footer
      className="px-6 py-14 border-t"
      style={{ borderColor: "var(--border)" }}
      role="contentinfo"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="max-w-5xl mx-auto flex flex-col gap-10">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-8">
          <div>
            <div className="text-lg font-medium tracking-tight" style={{ color: "var(--text-primary)" }}>
              Mozhgan Akbari
            </div>
            <p className="text-sm mt-1" style={{ color: "var(--text-tertiary)" }}>
              Product Designer — enterprise UX &amp; design systems.
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            {links.map(({ label, href, icon: Icon, external }) => (
              <a
                key={label}
                href={href}
                target={external ? "_blank" : undefined}
                rel={external ? "noopener noreferrer" : undefined}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full border text-sm transition-all duration-200 hover:border-[var(--accent-color)] hover:text-[var(--text-primary)]"
                style={{ color: "var(--text-secondary)", borderColor: "var(--border-strong)" }}
              >
                <Icon size={14} />
                {label}
                <ArrowUpRight size={13} />
              </a>
            ))}
          </div>
        </div>

        <div
          className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-8 border-t"
          style={{ borderColor: "var(--border)" }}
        >
          <span className="text-xs" style={{ color: "var(--text-tertiary)" }}>
            © {year} Mozhgan Akbari
          </span>
          <span className="text-xs" style={{ color: "var(--text-tertiary)" }}>
            Designed &amp; built with intention.
          </span>
        </div>
      </div>
    </motion.footer>
  );
}
