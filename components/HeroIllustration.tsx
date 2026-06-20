"use client";

import { useState } from "react";
import { motion } from "framer-motion";

/**
 * Hero illustration — a flat-design skeleton working at a MacBook. It types
 * (forearms tap, head nods toward the screen, the laptop logo pulses) until the
 * pointer enters, at which point it stops and looks up to face the viewer.
 * Synced to the site theme: cream bones, dark surface, blue accent glow.
 */

const BONE = "#ece7d6";
const BONE_SHADE = "#cfc9b6";
const SOCKET = "#15161a";

export default function HeroIllustration() {
  const [paused, setPaused] = useState(false);
  const state = paused ? "rest" : "type";

  return (
    <div
      className="relative w-full max-w-md mx-auto aspect-square select-none"
      aria-hidden="true"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* Accent glow behind */}
      <div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[78%] h-[78%] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, var(--accent-soft), transparent 68%)" }}
      />

      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 400" fill="none">
        {/* Desk */}
        <rect x="44" y="302" width="312" height="30" rx="12" fill="var(--surface)" />
        <rect x="44" y="302" width="312" height="30" rx="12" stroke="var(--border-strong)" strokeWidth="1" />
        {/* soft contact shadow under laptop */}
        <ellipse cx="200" cy="304" rx="110" ry="9" fill="#000" fillOpacity="0.25" />

        {/* ── Skeleton upper body (behind laptop) ── */}
        {/* spine + pelvis hint */}
        <g stroke={BONE} strokeWidth="10" strokeLinecap="round">
          <path d="M200 200 L200 262" />
        </g>
        {/* ribcage */}
        <g stroke={BONE_SHADE} strokeWidth="6" strokeLinecap="round" fill="none">
          <path d="M200 214 Q170 210 165 226" />
          <path d="M200 214 Q230 210 235 226" />
          <path d="M200 234 Q168 232 162 250" />
          <path d="M200 234 Q232 232 238 250" />
        </g>
        {/* shoulders */}
        <g fill={BONE}>
          <circle cx="164" cy="198" r="9" />
          <circle cx="236" cy="198" r="9" />
        </g>
        {/* upper arms (shoulder -> elbow) */}
        <g stroke={BONE} strokeWidth="11" strokeLinecap="round" fill="none">
          <path d="M164 198 L150 232" />
          <path d="M236 198 L250 232" />
        </g>

        {/* ── Head (nods while typing, lifts to face viewer on hover) ── */}
        <motion.g
          initial={false}
          animate={state}
          variants={{
            type: { y: [5, 8, 5], transition: { duration: 0.7, repeat: Infinity, ease: "easeInOut" } },
            rest: { y: 0, transition: { duration: 0.45, ease: "easeOut" } },
          }}
        >
          {/* neck */}
          <path d="M200 188 L200 200" stroke={BONE} strokeWidth="9" strokeLinecap="round" />
          {/* skull */}
          <path
            d="M200 58
               C156 58 134 92 134 128
               C134 156 152 168 166 174
               L166 188
               C166 197 178 202 200 202
               C222 202 234 197 234 188
               L234 174
               C248 168 266 156 266 128
               C266 92 244 58 200 58 Z"
            fill={BONE}
          />
          {/* jaw seam + teeth */}
          <path d="M170 176 Q200 188 230 176" stroke={BONE_SHADE} strokeWidth="2.5" fill="none" strokeLinecap="round" />
          <g stroke={BONE_SHADE} strokeWidth="2" strokeLinecap="round">
            <path d="M186 184 L186 196" />
            <path d="M200 185 L200 197" />
            <path d="M214 184 L214 196" />
          </g>
          {/* eye sockets */}
          <g fill={SOCKET}>
            <ellipse cx="176" cy="130" rx="18" ry="20" />
            <ellipse cx="224" cy="130" rx="18" ry="20" />
          </g>
          {/* gaze glints — look down at screen while typing, forward on hover */}
          <motion.g
            fill="var(--accent-color)"
            initial={false}
            animate={state}
            variants={{
              type: { y: 5, x: 0, opacity: 0.85, transition: { duration: 0.4 } },
              rest: { y: -2, x: 0, opacity: 1, transition: { duration: 0.4 } },
            }}
          >
            <circle cx="178" cy="130" r="3.6" />
            <circle cx="226" cy="130" r="3.6" />
          </motion.g>
          {/* nose */}
          <path d="M200 146 L193 162 L207 162 Z" fill={SOCKET} />
        </motion.g>

        {/* ── MacBook (over the lower torso) ── */}
        {/* lid back */}
        <rect x="118" y="250" width="164" height="50" rx="11" fill="var(--surface)" />
        <rect x="118" y="250" width="164" height="50" rx="11" stroke="var(--border-strong)" strokeWidth="1.5" />
        {/* glowing logo — pulses while working */}
        <motion.circle
          cx="200"
          cy="275"
          r="8"
          fill="var(--accent-color)"
          initial={false}
          animate={state}
          variants={{
            type: { opacity: [0.55, 1, 0.55], transition: { duration: 1.4, repeat: Infinity, ease: "easeInOut" } },
            rest: { opacity: 1, transition: { duration: 0.3 } },
          }}
        />
        {/* base / keyboard deck */}
        <path d="M104 300 L296 300 L284 312 L116 312 Z" fill="var(--surface-elevated)" stroke="var(--border-strong)" strokeWidth="1" />
        <line x1="116" y1="312" x2="284" y2="312" stroke="var(--border-strong)" strokeWidth="2" strokeLinecap="round" />

        {/* ── Forearms + hands (type on the deck) ── */}
        <motion.g
          initial={false}
          animate={state}
          variants={{
            type: { y: [0, -5, 0], transition: { duration: 0.34, repeat: Infinity, ease: "easeInOut" } },
            rest: { y: 0, transition: { duration: 0.2 } },
          }}
        >
          <path d="M150 232 L168 294" stroke={BONE} strokeWidth="11" strokeLinecap="round" fill="none" />
          <circle cx="150" cy="232" r="6.5" fill={BONE} />
          <g stroke={BONE} strokeWidth="4.5" strokeLinecap="round" fill="none">
            <path d="M168 294 L162 304" />
            <path d="M168 294 L169 306" />
            <path d="M168 294 L176 303" />
          </g>
        </motion.g>
        <motion.g
          initial={false}
          animate={state}
          variants={{
            type: { y: [0, -5, 0], transition: { duration: 0.34, repeat: Infinity, ease: "easeInOut", delay: 0.17 } },
            rest: { y: 0, transition: { duration: 0.2 } },
          }}
        >
          <path d="M250 232 L232 294" stroke={BONE} strokeWidth="11" strokeLinecap="round" fill="none" />
          <circle cx="250" cy="232" r="6.5" fill={BONE} />
          <g stroke={BONE} strokeWidth="4.5" strokeLinecap="round" fill="none">
            <path d="M232 294 L226 304" />
            <path d="M232 294 L231 306" />
            <path d="M232 294 L240 303" />
          </g>
        </motion.g>
      </svg>
    </div>
  );
}
