"use client";

import { useRef } from "react";
import { motion, useInView, useReducedMotion, type TargetAndTransition, type Transition } from "framer-motion";
import { useOnScreen } from "@/lib/useOnScreen";

/**
 * The design system case in one picture: the scattered problems the team
 * started with flow into the system's three layers (source, identity,
 * semantic), and out come the results. Every label is taken from the case
 * itself. Two drawings share one sequence: a wide one (problems left,
 * results right) and, on phones, a tall one (problems on top, results below).
 *
 * The links shift from the problem colour to the system's blue on their way
 * in; once everything has drawn, small sparks keep travelling along them and
 * the layers float. Under reduced motion the finished picture shows, still.
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
const SETTLED = 2.9; // seconds until the reveal is done and the idle motion starts

const hex = (cx: number, cy: number, r: number) =>
  Array.from({ length: 6 }, (_, k) => {
    const a = (Math.PI / 180) * (60 * k - 90);
    return `${(cx + r * Math.cos(a)).toFixed(1)},${(cy + r * Math.sin(a)).toFixed(1)}`;
  }).join(" ");

const pts = (p: [number, number][]) => p.map(([x, y]) => `${x.toFixed(1)},${y.toFixed(1)}`).join(" ");

export default function DsProblemsToOutcomes() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.3 });
  const still = useReducedMotion() ?? false;
  const on = inView || still;
  // the idle motion (sparks, floating layers) runs only while it can be seen
  const onScreen = useOnScreen(ref);
  const live = on && !still && onScreen;

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
  const pill = (kind: "problem" | "result", x: number, y: number, w: number, h: number, label: string, at: number) => {
    const cx = x + h / 2;
    const cy = y + h / 2;
    return (
      <motion.g key={`${kind}-${label}`} className={`dp-pill is-${kind}`} {...step({ opacity: 0, x: kind === "problem" ? -10 : 10 }, { opacity: 1, x: 0 }, at, 0.45)}>
        <rect x={x} y={y} width={w} height={h} rx={h / 2} />
        <circle cx={cx} cy={cy} r={9.5} className="halo" />
        <circle cx={cx} cy={cy} r={6.5} className="ic" />
        {kind === "problem" ? (
          <path className="mk" d={`M${cx} ${cy - 3} L${cx} ${cy + 0.6} M${cx} ${cy + 2.9} L${cx} ${cy + 3}`} />
        ) : (
          <path className="mk" d={`M${cx - 2.8} ${cy} L${cx - 0.7} ${cy + 2.1} L${cx + 3} ${cy - 2.2}`} />
        )}
        <text x={cx + 15} y={cy + 4.3}>{label}</text>
      </motion.g>
    );
  };

  /** sparks travelling along a set of link paths, after the reveal */
  const sparks = (ids: string[], cls: string, dur: number) =>
    live ? (
      <motion.g initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: SETTLED, duration: 0.8 }}>
        {ids.map((id, i) => (
          <circle key={id} r={2.3} className={`dp-spark ${cls}`}>
            <animateMotion dur={`${dur}s`} begin={`${(i * 0.47) % dur}s`} repeatCount="indefinite" rotate="auto">
              <mpath href={`#${id}`} />
            </animateMotion>
          </circle>
        ))}
      </motion.g>
    ) : null;

  /** one 3D slab: a top face and the two visible sides */
  const slab = (cx: number, cy: number, hw: number, hh: number, t: number, cls: string) => (
    <g className={`dp-slab ${cls}`}>
      <polygon className="l" points={pts([[cx - hw, cy], [cx, cy + hh], [cx, cy + hh + t], [cx - hw, cy + t]])} />
      <polygon className="r" points={pts([[cx, cy + hh], [cx + hw, cy], [cx + hw, cy + t], [cx, cy + hh + t]])} />
      <polygon className="t" points={pts([[cx, cy - hh], [cx + hw, cy], [cx, cy + hh], [cx - hw, cy]])} />
    </g>
  );

  /** the system: a glowing hexagon, a faint outer ring, three floating slabs */
  const system = (id: string, cx: number, cy: number, r: number, at: number) => {
    const hw = r * 0.54;
    const hh = r * 0.27;
    const t = r * 0.1;
    const gap = r * 0.3;
    const layers = [
      { dy: gap, cls: "is-source" },
      { dy: 0, cls: "is-identity" },
      { dy: -gap, cls: "is-semantic" },
    ];
    return (
      <g>
        <defs>
          <filter id={id} x="-60%" y="-60%" width="220%" height="220%">
            <feGaussianBlur stdDeviation="16" />
          </filter>
        </defs>
        <motion.polygon className="dp-glow" points={hex(cx, cy, r * 0.92)} filter={`url(#${id})`} {...step({ opacity: 0 }, { opacity: 1 }, at + 0.3, 0.9)} />
        <motion.polygon className="dp-ring" points={hex(cx, cy, r + 13)} style={origin} {...step({ opacity: 0, scale: 0.9 }, { opacity: 1, scale: 1 }, at + 0.15, 0.7)} />
        <motion.polygon className="dp-hex" points={hex(cx, cy, r)} style={origin} {...step({ opacity: 0, scale: 0.85 }, { opacity: 1, scale: 1 }, at, 0.6)} />
        {layers.map((l, i) => (
          <motion.g key={l.cls} {...step({ opacity: 0, y: 14 }, { opacity: 1, y: 0 }, at + 0.25 + i * 0.15, 0.5)}>
            <motion.g
              animate={live ? { y: [0, -3, 0] } : { y: 0 }}
              transition={live ? { delay: SETTLED + i * 0.35, duration: 3.6, repeat: Infinity, ease: "easeInOut" } : { duration: 0 }}
            >
              {slab(cx, cy + l.dy - t / 2, hw, hh, t, l.cls)}
            </motion.g>
          </motion.g>
        ))}
      </g>
    );
  };

  /* ── wide: problems → system → results, left to right ── */
  const W = { w: 960, h: 400, cx: 480, cy: 212, r: 80 };
  const pY = PROBLEMS.map((_, i) => 52 + i * 68);
  const rY = RESULTS.map((_, i) => 86 + i * 68);
  const wPIds = pY.map((_, i) => `dp-wp-${i}`);
  const wRIds = rY.map((_, i) => `dp-wr-${i}`);
  const wide = (
    <svg className="dp-wide" viewBox={`0 0 ${W.w} ${W.h}`} role="img" aria-label={`Before: ${PROBLEMS.join(", ")}. These flow into the design system's three layers: source, identity and semantic. After: ${RESULTS.join(", ")}.`}>
      <defs>
        <linearGradient id="dp-wg-in" gradientUnits="userSpaceOnUse" x1="262" y1="0" x2={W.cx - W.r} y2="0">
          <stop offset="0" className="stop-problem" />
          <stop offset="1" className="stop-system" />
        </linearGradient>
        <linearGradient id="dp-wg-out" gradientUnits="userSpaceOnUse" x1={W.cx + W.r} y1="0" x2="668" y2="0">
          <stop offset="0" className="stop-system" />
          <stop offset="1" className="stop-result" />
        </linearGradient>
      </defs>

      <motion.text className="dp-head is-problem" x={22} y={30} {...step({ opacity: 0 }, { opacity: 1 }, 0)}>Before</motion.text>
      <motion.text className="dp-head is-result" x={668} y={64} {...step({ opacity: 0 }, { opacity: 1 }, 2.1)}>After</motion.text>

      {pY.map((y, i) => (
        <motion.path key={y} id={wPIds[i]} className="dp-link" stroke="url(#dp-wg-in)" d={`M262 ${y + 17} C 345 ${y + 17}, 340 ${W.cy}, ${W.cx - W.r + 10} ${W.cy}`} {...draw(0.5 + i * 0.06)} />
      ))}
      {rY.map((y, i) => (
        <motion.path key={y} id={wRIds[i]} className="dp-link" stroke="url(#dp-wg-out)" d={`M${W.cx + W.r - 10} ${W.cy} C 620 ${W.cy}, 612 ${y + 17}, 668 ${y + 17}`} {...draw(1.9 + i * 0.06, 0.6)} />
      ))}
      {sparks(wPIds, "is-in", 2.6)}
      {sparks(wRIds, "is-out", 2.2)}

      {PROBLEMS.map((p, i) => pill("problem", 22, pY[i], 240, 34, p, i * 0.08))}
      {system("dp-glow-wide", W.cx, W.cy, W.r, 1.1)}
      <motion.text className="dp-cap" x={W.cx} y={W.cy + W.r + 44} textAnchor="middle" {...step({ opacity: 0 }, { opacity: 1 }, 1.6)}>
        Source · Identity · Semantic
      </motion.text>
      {RESULTS.map((r, i) => pill("result", 668, rY[i], 270, 34, r, 2.2 + i * 0.14))}
    </svg>
  );

  /* ── tall (phones): problems on top, system, results below ── */
  const T = { w: 360, cx: 180, cy: 336, r: 60 };
  const tpY = PROBLEMS.map((_, i) => 8 + i * 38);
  const trY = RESULTS.map((_, i) => 492 + i * 38);
  const tPIds = [60, 120, 180, 240, 300].map((_, i) => `dp-tp-${i}`);
  const tRIds = [60, 140, 220, 300].map((_, i) => `dp-tr-${i}`);
  const tall = (
    <svg className="dp-tall" viewBox={`0 0 ${T.w} 646`} aria-hidden>
      <defs>
        <linearGradient id="dp-tg-in" gradientUnits="userSpaceOnUse" x1="0" y1="200" x2="0" y2={T.cy - T.r}>
          <stop offset="0" className="stop-problem" />
          <stop offset="1" className="stop-system" />
        </linearGradient>
        <linearGradient id="dp-tg-out" gradientUnits="userSpaceOnUse" x1="0" y1={T.cy + T.r + 30} x2="0" y2="484">
          <stop offset="0" className="stop-system" />
          <stop offset="1" className="stop-result" />
        </linearGradient>
      </defs>
      {[60, 120, 180, 240, 300].map((x, i) => (
        <motion.path key={x} id={tPIds[i]} className="dp-link" stroke="url(#dp-tg-in)" d={`M${x} 200 C ${x} 238, ${T.cx} 230, ${T.cx} ${T.cy - T.r - 10}`} {...draw(0.5 + i * 0.06)} />
      ))}
      {[60, 140, 220, 300].map((x, i) => (
        <motion.path key={x} id={tRIds[i]} className="dp-link" stroke="url(#dp-tg-out)" d={`M${T.cx} ${T.cy + T.r + 32} C ${T.cx} 462, ${x} 454, ${x} 484`} {...draw(1.9 + i * 0.06, 0.6)} />
      ))}
      {sparks(tPIds, "is-in", 2.4)}
      {sparks(tRIds, "is-out", 2)}
      {PROBLEMS.map((p, i) => pill("problem", 14, tpY[i], 332, 30, p, i * 0.08))}
      {system("dp-glow-tall", T.cx, T.cy, T.r, 1.1)}
      <motion.text className="dp-cap" x={T.cx} y={T.cy + T.r + 28} textAnchor="middle" {...step({ opacity: 0 }, { opacity: 1 }, 1.6)}>
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
