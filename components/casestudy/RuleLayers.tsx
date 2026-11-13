"use client";

import { motion, useReducedMotion } from "framer-motion";

/**
 * Decision 2 in one picture: every error message is built on the same three
 * rules. Three plates stack up, one per rule, and the message the user sees
 * sits on top. Each plate is labelled on the left. The plates settle in from
 * the bottom up, once, when the picture scrolls into view.
 */

const CX = 430; // plate centre, x
const A = 170; // half-width of a plate
const B = 98; // half-height of a plate
const T = 10; // plate thickness

// bottom to top: the three rules, then the message itself
const LAYERS = [
  { y: 330, label: "Never blames" },
  { y: 280, label: "Gives the next step" },
  { y: 230, label: "Says what happened" },
  { y: 150, label: "What the user sees", top: true },
];

const EASE = [0.16, 1, 0.3, 1] as const;

function Plate({ y, top }: { y: number; top?: boolean }) {
  const L = CX - A, R = CX + A;
  return (
    <g className={`rl-plate${top ? " is-top" : ""}`}>
      {/* the two visible edges, then the top face */}
      <polygon points={`${L},${y} ${CX},${y + B} ${CX},${y + B + T} ${L},${y + T}`} className="rl-side" />
      <polygon points={`${CX},${y + B} ${R},${y} ${R},${y + T} ${CX},${y + B + T}`} className="rl-side2" />
      <polygon points={`${L},${y} ${CX},${y - B} ${R},${y} ${CX},${y + B}`} className="rl-face" />
      {top ? (
        /* the message card, laid flat on the top plate */
        <g transform={`matrix(${A / 200} ${-B / 200} ${A / 200} ${B / 200} ${L} ${y})`}>
          <rect x={40} y={40} width={120} height={120} rx={16} className="rl-card" />
          <circle cx={66} cy={66} r={10} className="rl-dot" />
          <rect x={86} y={60} width={56} height={10} rx={5} className="rl-ink" />
          <rect x={56} y={92} width={86} height={8} rx={4} className="rl-ink soft" />
          <rect x={56} y={108} width={64} height={8} rx={4} className="rl-ink soft" />
          <rect x={56} y={128} width={50} height={18} rx={9} className="rl-btn" />
        </g>
      ) : (
        <polygon
          points={`${L + 34},${y} ${CX},${y - B + 20} ${R - 34},${y} ${CX},${y + B - 20}`}
          className="rl-inset"
        />
      )}
    </g>
  );
}

export default function RuleLayers() {
  const still = useReducedMotion();
  return (
    <figure
      className="cs-scene rl-scene"
      aria-label="Three stacked layers, one per rule: says what happened, gives the next step, never blames. The message the user sees sits on top of them."
    >
      <motion.svg viewBox="0 30 640 420" initial={still ? false : "hidden"} whileInView="show" viewport={{ once: true, margin: "0px 0px -15% 0px" }} aria-hidden>
        {LAYERS.map((l, i) => (
          <motion.g
            key={l.label}
            variants={{ hidden: { opacity: 0, y: 40 }, show: { opacity: 1, y: 0 } }}
            transition={{ delay: 0.15 + i * 0.22, duration: 0.6, ease: EASE }}
          >
            <Plate y={l.y} top={l.top} />
          </motion.g>
        ))}
        {/* labels, with a leader line to the left corner of their plate */}
        {LAYERS.map((l, i) => (
          <motion.g
            key={`label-${l.label}`}
            className={`rl-label${l.top ? " is-top" : ""}`}
            variants={{ hidden: { opacity: 0, x: -8 }, show: { opacity: 1, x: 0 } }}
            transition={{ delay: 0.35 + i * 0.22, duration: 0.45, ease: EASE }}
          >
            <text x={24} y={l.y + 6}>{l.label}</text>
            <circle cx={l.top ? 214 : 204} cy={l.y} r={3} />
            <line x1={l.top ? 222 : 212} y1={l.y} x2={CX - A - 6} y2={l.y} />
          </motion.g>
        ))}
      </motion.svg>
    </figure>
  );
}
