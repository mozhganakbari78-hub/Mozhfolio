"use client";

import { useRef } from "react";
import { motion, useInView, useReducedMotion, type TargetAndTransition, type Transition } from "framer-motion";

/**
 * The design system case in one picture: the scattered problems the team
 * started with flow into the system's three layers (source, identity,
 * semantic), and out come the results. Every label is taken from the case
 * itself. Two drawings share one sequence: a wide one (problems left,
 * results right) and, on phones, a tall one (problems on top, results below).
 * Draws in once on scroll; under reduced motion the finished picture shows.
 */

const PROBLEMS = [
  "No file structure",
  "Every product on one Figma page",
  "Nothing documented",
  "Every screen designed twice",
  "Colour styles, nothing tying them",
];

const RESULTS = [
  "1 design for light and dark",
  "4 products, one set of components",
  "~8 → ~3 developer questions a day",
  "Core components in one sprint",
];

const EASE = [0.16, 1, 0.3, 1] as const;

const hex = (cx: number, cy: number, r: number) =>
  Array.from({ length: 6 }, (_, k) => {
    const a = (Math.PI / 180) * (60 * k - 90);
    return `${(cx + r * Math.cos(a)).toFixed(1)},${(cy + r * Math.sin(a)).toFixed(1)}`;
  }).join(" ");

const rhomb = (cx: number, cy: number, hw: number, hh: number) =>
  `${cx},${cy - hh} ${cx + hw},${cy} ${cx},${cy + hh} ${cx - hw},${cy}`;

export default function DsProblemsToOutcomes() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.3 });
  const still = useReducedMotion() ?? false;
  const on = inView || still;

  const step = (
    from: TargetAndTransition,
    to: TargetAndTransition,
    at: number,
    dur = 0.5,
  ): { initial: false | TargetAndTransition; animate: TargetAndTransition; transition: Transition } => ({
    initial: still ? false : from,
    animate: on ? to : from,
    transition: still ? { duration: 0 } : { delay: at, duration: dur, ease: EASE },
  });
  const draw = (at: number, dur = 0.7) => step({ pathLength: 0, opacity: 0 }, { pathLength: 1, opacity: 1 }, at, dur);
  const origin = { transformBox: "fill-box" as const, transformOrigin: "center" };

  /** a problem pill (red, "!") or a result pill (blue, check) */
  const pill = (kind: "problem" | "result", x: number, y: number, w: number, h: number, label: string, at: number) => (
    <motion.g key={`${kind}-${label}`} className={`dp-pill is-${kind}`} {...step({ opacity: 0, x: kind === "problem" ? -10 : 10 }, { opacity: 1, x: 0 }, at, 0.45)}>
      <rect x={x} y={y} width={w} height={h} rx={h / 2} />
      <circle cx={x + h / 2} cy={y + h / 2} r={7} className="ic" />
      {kind === "problem" ? (
        <path className="mk" d={`M${x + h / 2} ${y + h / 2 - 3.5} L${x + h / 2} ${y + h / 2 + 0.5} M${x + h / 2} ${y + h / 2 + 3} L${x + h / 2} ${y + h / 2 + 3.2}`} />
      ) : (
        <path className="mk" d={`M${x + h / 2 - 3} ${y + h / 2} L${x + h / 2 - 0.8} ${y + h / 2 + 2.3} L${x + h / 2 + 3.2} ${y + h / 2 - 2.4}`} />
      )}
      <text x={x + h / 2 + 14} y={y + h / 2 + 4.3}>{label}</text>
    </motion.g>
  );

  /** the system: a glowing hexagon with the three token layers inside */
  const system = (id: string, cx: number, cy: number, r: number, at: number) => (
    <g>
      <defs>
        <filter id={id} x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="14" />
        </filter>
      </defs>
      <motion.polygon className="dp-glow" points={hex(cx, cy, r * 0.9)} filter={`url(#${id})`} {...step({ opacity: 0 }, { opacity: 1 }, at + 0.3, 0.8)} />
      <motion.polygon className="dp-hex" points={hex(cx, cy, r)} style={origin} {...step({ opacity: 0, scale: 0.85 }, { opacity: 1, scale: 1 }, at, 0.6)} />
      {[
        { dy: r * 0.28, cls: "is-source" },
        { dy: 0, cls: "is-identity" },
        { dy: -r * 0.28, cls: "is-semantic" },
      ].map((l, i) => (
        <motion.polygon
          key={l.cls}
          className={`dp-layer ${l.cls}`}
          points={rhomb(cx, cy + l.dy, r * 0.56, r * 0.24)}
          {...step({ opacity: 0, y: 10 }, { opacity: 1, y: 0 }, at + 0.25 + i * 0.15, 0.45)}
        />
      ))}
    </g>
  );

  /* ── wide: problems → system → results, left to right ── */
  const W = { w: 960, h: 394, cx: 480, cy: 200, r: 82 };
  const pY = PROBLEMS.map((_, i) => 40 + i * 70);
  const rY = RESULTS.map((_, i) => 75 + i * 70);
  const wide = (
    <svg className="dp-wide" viewBox={`0 0 ${W.w} ${W.h}`} role="img" aria-label={`Problems: ${PROBLEMS.join(", ")}. They flow into the design system's three layers: source, identity and semantic. Results: ${RESULTS.join(", ")}.`}>
      {pY.map((y, i) => (
        <motion.path key={y} className="dp-link is-problem" d={`M262 ${y + 17} C 340 ${y + 17}, 340 ${W.cy}, ${W.cx - W.r + 4} ${W.cy}`} {...draw(0.5 + i * 0.06)} />
      ))}
      {rY.map((y, i) => (
        <motion.path key={y} className="dp-link is-result" d={`M${W.cx + W.r - 4} ${W.cy} C 620 ${W.cy}, 610 ${y + 17}, 668 ${y + 17}`} {...draw(1.9 + i * 0.06, 0.6)} />
      ))}
      {PROBLEMS.map((p, i) => pill("problem", 22, pY[i], 240, 34, p, i * 0.08))}
      {system("dp-glow-wide", W.cx, W.cy, W.r, 1.1)}
      <motion.text className="dp-cap" x={W.cx} y={W.cy + W.r + 34} textAnchor="middle" {...step({ opacity: 0 }, { opacity: 1 }, 1.6)}>
        Source · Identity · Semantic
      </motion.text>
      {RESULTS.map((r, i) => pill("result", 668, rY[i], 270, 34, r, 2.2 + i * 0.14))}
    </svg>
  );

  /* ── tall (phones): problems on top, system, results below ── */
  const T = { w: 360, cx: 180, cy: 330, r: 62 };
  const tpY = PROBLEMS.map((_, i) => 8 + i * 38);
  const trY = RESULTS.map((_, i) => 486 + i * 38);
  const tall = (
    <svg className="dp-tall" viewBox={`0 0 ${T.w} 640`} aria-hidden>
      {[60, 120, 180, 240, 300].map((x, i) => (
        <motion.path key={x} className="dp-link is-problem" d={`M${x} 200 C ${x} 236, ${T.cx} 230, ${T.cx} ${T.cy - T.r + 2}`} {...draw(0.5 + i * 0.06)} />
      ))}
      {[60, 140, 220, 300].map((x, i) => (
        <motion.path key={x} className="dp-link is-result" d={`M${T.cx} ${T.cy + T.r + 30} C ${T.cx} 456, ${x} 448, ${x} 478`} {...draw(1.9 + i * 0.06, 0.6)} />
      ))}
      {PROBLEMS.map((p, i) => pill("problem", 14, tpY[i], 332, 30, p, i * 0.08))}
      {system("dp-glow-tall", T.cx, T.cy, T.r, 1.1)}
      <motion.text className="dp-cap" x={T.cx} y={T.cy + T.r + 22} textAnchor="middle" {...step({ opacity: 0 }, { opacity: 1 }, 1.6)}>
        Source · Identity · Semantic
      </motion.text>
      {RESULTS.map((r, i) => pill("result", 14, trY[i], 332, 30, r, 2.2 + i * 0.14))}
    </svg>
  );

  return (
    <figure ref={ref} className="gh-scene dp-scene">
      {wide}
      {tall}
    </figure>
  );
}
