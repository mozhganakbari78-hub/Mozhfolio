"use client";

import { motion } from "framer-motion";
import type { Variants } from "framer-motion";

/**
 * Custom hero illustration — an abstract "complexity into clarity" composition:
 * a clean product surface (interface frame) with floating workflow chips, nodes,
 * and connecting lines drifting around it. Replaces the generic look with
 * something crafted and on-brand. Gentle, reduced-motion-aware float.
 */

const float = (delay: number, dist = 10): Variants => ({
  animate: {
    y: [0, -dist, 0],
    transition: { duration: 6 + delay, repeat: Infinity, ease: "easeInOut", delay },
  },
});

function Chip({
  label,
  className,
  delay,
  accent,
}: {
  label: string;
  className?: string;
  delay: number;
  accent?: boolean;
}) {
  return (
    <motion.div
      className={`absolute rounded-xl border px-3 py-2 text-[11px] font-medium backdrop-blur-sm ${className ?? ""}`}
      style={{
        borderColor: accent ? "var(--accent-color)" : "var(--border-strong)",
        background: "var(--surface-elevated)",
        color: accent ? "var(--accent-color)" : "var(--text-secondary)",
        boxShadow: "var(--shadow-md)",
      }}
      variants={float(delay)}
      animate="animate"
    >
      {label}
    </motion.div>
  );
}

export default function HeroIllustration() {
  return (
    <div className="relative w-full max-w-md mx-auto aspect-square select-none" aria-hidden="true">
      {/* Connecting line layer */}
      <svg
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 400 400"
        fill="none"
        style={{ color: "var(--accent-color)" }}
      >
        <motion.path
          d="M70 90 C 140 70, 180 140, 200 200 S 300 320, 330 300"
          stroke="currentColor"
          strokeWidth="1"
          strokeOpacity="0.35"
          strokeDasharray="4 6"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2, ease: "easeInOut" }}
        />
        <motion.path
          d="M90 320 C 150 300, 170 230, 210 190 S 300 110, 340 110"
          stroke="currentColor"
          strokeWidth="1"
          strokeOpacity="0.2"
          strokeDasharray="2 8"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2.4, ease: "easeInOut", delay: 0.3 }}
        />
        {[
          [70, 90],
          [330, 300],
          [90, 320],
          [340, 110],
        ].map(([cx, cy], i) => (
          <circle key={i} cx={cx} cy={cy} r="3" fill="currentColor" fillOpacity="0.5" />
        ))}
      </svg>

      {/* Central product surface */}
      <motion.div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-44 rounded-2xl border overflow-hidden"
        style={{
          borderColor: "var(--border-strong)",
          background: "var(--surface)",
          boxShadow: "var(--shadow-lg)",
        }}
        variants={float(0.5, 6)}
        animate="animate"
      >
        {/* window bar */}
        <div
          className="flex items-center gap-1.5 px-3 py-2.5 border-b"
          style={{ borderColor: "var(--border)" }}
        >
          <span className="w-2 h-2 rounded-full" style={{ background: "var(--border-strong)" }} />
          <span className="w-2 h-2 rounded-full" style={{ background: "var(--border-strong)" }} />
          <span className="w-2 h-2 rounded-full" style={{ background: "var(--accent-color)" }} />
        </div>
        {/* content rows */}
        <div className="p-3.5 space-y-2.5">
          <div className="h-2 rounded-full w-3/4" style={{ background: "var(--accent-soft)" }} />
          <div className="h-2 rounded-full w-full" style={{ background: "var(--border-strong)" }} />
          <div className="h-2 rounded-full w-5/6" style={{ background: "var(--border-strong)" }} />
          <div className="grid grid-cols-2 gap-2 pt-1">
            <div className="h-10 rounded-lg" style={{ background: "var(--accent-soft)" }} />
            <div className="h-10 rounded-lg border" style={{ borderColor: "var(--border-strong)" }} />
          </div>
          <div className="h-2 rounded-full w-2/3" style={{ background: "var(--border-strong)" }} />
        </div>
      </motion.div>

      {/* Floating workflow chips */}
      <Chip label="Problem framing" className="left-0 top-[14%]" delay={0.2} accent />
      <Chip label="Error states" className="right-0 top-[28%]" delay={0.9} />
      <Chip label="Design tokens" className="left-[4%] bottom-[20%]" delay={1.4} />
      <Chip label="Handoff" className="right-[2%] bottom-[12%]" delay={0.6} accent />
    </div>
  );
}
