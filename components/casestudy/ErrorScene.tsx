"use client";

import { motion } from "framer-motion";

/**
 * A small halftone illustration for each before/after message.
 * Before: a screen buried under error toasts, ✕ badges and a warning sign.
 * After: one calm screen, a check, and a single clear next step: retry,
 * use the new file, or come back in a few minutes.
 */
export type SceneHint = "retry" | "file" | "clock";

const EASE = [0.16, 1, 0.3, 1] as const;
const INK = "#e6e8ee";
const CARD = "#1b1c20";
const BLUE = "#2f7ff0";

const pop = (delay: number) => ({
  initial: { scale: 0, opacity: 0 },
  whileInView: { scale: 1, opacity: 1 },
  viewport: { once: true, amount: 0.4 },
  transition: { delay, type: "spring" as const, stiffness: 480, damping: 15 },
});

/* a card with a halftone drop shadow */
function Card({ x, y, w, h, children }: { x: number; y: number; w: number; h: number; children?: React.ReactNode }) {
  return (
    <g>
      <rect x={x + 5} y={y + 5} width={w} height={h} rx={7} fill="url(#es-dots)" />
      <rect x={x} y={y} width={w} height={h} rx={7} fill={CARD} stroke={INK} strokeWidth={1.6} />
      {children}
    </g>
  );
}

function Badge({ x, y, kind, delay }: { x: number; y: number; kind: "x" | "check"; delay: number }) {
  return (
    <motion.g {...pop(delay)} style={{ originX: 0.5, originY: 0.5 }}>
      <circle cx={x + 2.5} cy={y + 2.5} r={9.5} fill="url(#es-dots)" />
      <circle cx={x} cy={y} r={9} fill={kind === "x" ? BLUE : "#3fbf7f"} stroke={INK} strokeWidth={1.4} />
      {kind === "x" ? (
        <path d={`M${x - 3.5},${y - 3.5} l7,7 M${x + 3.5},${y - 3.5} l-7,7`} stroke="#fff" strokeWidth={2.2} strokeLinecap="round" />
      ) : (
        <path d={`M${x - 4},${y} l3,3 l5,-6`} stroke="#fff" strokeWidth={2.2} strokeLinecap="round" strokeLinejoin="round" fill="none" />
      )}
    </motion.g>
  );
}

function HintIcon({ hint, x, y }: { hint: SceneHint; x: number; y: number }) {
  const s = { stroke: "#fff", strokeWidth: 2, fill: "none", strokeLinecap: "round" as const, strokeLinejoin: "round" as const };
  if (hint === "retry")
    return (
      <g {...s}>
        <path d={`M${x - 5},${y + 2} a6,6 0 1 1 3,4.5`} />
        <path d={`M${x - 7},${y - 1} l2,3.5 l3.5,-2`} />
      </g>
    );
  if (hint === "file")
    return (
      <g {...s}>
        <path d={`M${x - 5},${y - 7} h6 l4,4 v10 h-10 z M${x + 1},${y - 7} v4 h4`} />
      </g>
    );
  return (
    <g {...s}>
      <circle cx={x} cy={y} r={6.5} />
      <motion.path
        d={`M${x},${y} V${y - 4.5}`}
        style={{ originX: 0.5, originY: 1 }}
        animate={{ rotate: 360 }}
        transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
      />
      <path d={`M${x},${y} h3.5`} />
    </g>
  );
}

export default function ErrorScene({ state, hint, delay = 0 }: { state: "before" | "after"; hint: SceneHint; delay?: number }) {
  const after = state === "after";
  return (
    <svg className="cs-escene" viewBox="0 0 220 124" aria-hidden focusable="false">
      <defs>
        <pattern id="es-dots" width="3.2" height="3.2" patternUnits="userSpaceOnUse">
          <circle cx="1.6" cy="1.6" r="0.8" fill="rgba(230,232,238,.55)" />
        </pattern>
        <pattern id="es-dots-blue" width="3.2" height="3.2" patternUnits="userSpaceOnUse">
          <circle cx="1.6" cy="1.6" r="0.9" fill="rgba(47,127,240,.75)" />
        </pattern>
      </defs>

      {/* faint guides */}
      <path d="M24,10 V112 M196,10 V112" stroke="rgba(230,232,238,.12)" strokeDasharray="3 4" />

      {/* the screen */}
      <Card x={52} y={14} w={112} h={92}>
        <circle cx={64} cy={26} r={4} fill={INK} />
        <path d={`M73,26 H${after ? 126 : 112}`} stroke={INK} strokeWidth={2.4} strokeLinecap="round" />
        <rect x={62} y={36} width={92} height={36} rx={5} fill={after ? "rgba(47,127,240,.12)" : "#0d0e10"} stroke={after ? "rgba(124,184,245,.5)" : "none"} />
        {!after && <rect x={62} y={36} width={92} height={36} rx={5} fill="url(#es-dots)" opacity={0.35} />}
        <circle cx={64} cy={84} r={4} fill={INK} />
        <path d="M73,84 H140 M73,93 H118" stroke={INK} strokeWidth={2.4} strokeLinecap="round" />
      </Card>

      {after ? (
        <>
          {/* one clear next step */}
          <motion.g
            initial={{ y: 10, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ delay: delay + 0.3, duration: 0.55, ease: EASE }}
          >
            <rect x={124} y={83} width={86} height={28} rx={14} fill="url(#es-dots-blue)" transform="translate(4 4)" />
            <rect x={124} y={83} width={86} height={28} rx={14} fill={BLUE} stroke={INK} strokeWidth={1.4} />
            <HintIcon hint={hint} x={140} y={97} />
            <path d="M154,97 H196" stroke="rgba(255,255,255,.9)" strokeWidth={2.4} strokeLinecap="round" />
          </motion.g>
          <Badge x={52} y={14} kind="check" delay={delay + 0.15} />
        </>
      ) : (
        <>
          {/* errors piling up */}
          <Card x={8} y={60} w={74} h={22}>
            <circle cx={20} cy={71} r={3.5} fill={INK} />
            <path d="M28,71 H70" stroke={INK} strokeWidth={2.2} strokeLinecap="round" />
          </Card>
          <Card x={140} y={30} w={70} h={22}>
            <rect x={146} y={35} width={50} height={12} rx={3} fill="#0d0e10" />
          </Card>
          <Card x={118} y={92} w={84} h={22}>
            <circle cx={130} cy={103} r={3.5} fill={INK} />
            <path d="M138,103 H186" stroke={INK} strokeWidth={2.2} strokeLinecap="round" />
          </Card>
          <Badge x={52} y={14} kind="x" delay={delay + 0.05} />
          <Badge x={10} y={60} kind="x" delay={delay + 0.15} />
          <Badge x={210} y={30} kind="x" delay={delay + 0.25} />
          <Badge x={202} y={92} kind="x" delay={delay + 0.35} />
          {/* warning sign */}
          <motion.g
            initial={{ scale: 0, rotate: -12 }}
            whileInView={{ scale: 1, rotate: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ delay: delay + 0.45, type: "spring", stiffness: 380, damping: 11 }}
            style={{ originX: 0.5, originY: 0.7 }}
          >
            <path d="M138,58 L156,88 H120 Z" fill="url(#es-dots)" transform="translate(3 3)" />
            <path d="M138,58 L156,88 H120 Z" fill={BLUE} stroke={INK} strokeWidth={1.6} strokeLinejoin="round" />
            <path d="M138,68 V78 M138,83 v.2" stroke="#fff" strokeWidth={2.6} strokeLinecap="round" />
          </motion.g>
        </>
      )}
    </svg>
  );
}
