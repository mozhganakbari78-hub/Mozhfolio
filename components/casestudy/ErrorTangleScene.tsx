"use client";

import { motion, type TargetAndTransition, type Transition, type Variants } from "framer-motion";

/**
 * The error case in one picture: about 2,000 messages written one by one sit
 * in a knot, each a dead end ("Error", "ERR_4012", "You are not the creator
 * of the request"). One thread leaves the knot, passes through the three
 * rules, and comes out as three tidy paths: technical errors go to the logs,
 * what the user can act on becomes a message with a next step, and causes
 * outside our control say so and point to a retry. Drawn once, on scroll.
 *
 * Two layouts of the same scene: left to right on wide screens, top to
 * bottom on phones (.ets-wide / .ets-tall, switched in case-study.css).
 */

type Pt = [number, number];
type Chip = { t: string; x: number; y: number };
type Card = { x: number; y: number; w: number };
type Layout = {
  w: number;
  h: number;
  entry: Pt;
  knot: Pt;
  rx: number;
  ry: number;
  exit: Pt;
  chips: Chip[];
  before: Pt;
  gate: { x: number; y: number; w: number; h: number };
  /** the line from the gate to the three cards */
  route: string;
  logs: Card;
  msg: Card;
  ext: Card;
  after: Pt;
};

const EASE = [0.16, 1, 0.3, 1] as const;
const MONO = "var(--font-code), ui-monospace, monospace";
const INK = "#eef0f4";
const FAINT = "rgba(238, 240, 244, .5)";
const LINE = "rgba(238, 240, 244, .55)";
const ACC = "var(--accent-ink)";
const FAIL = "#e8836e";
const WARN = "#e0b455";

// small seeded generator, so the knot is the same on every render
function rng(seed: number) {
  let s = seed;
  return () => {
    s = (s * 16807) % 2147483647;
    return (s - 1) / 2147483646;
  };
}

/* One thread from the entry, looping around the knot, out to the exit.
   Catmull-Rom through random points inside an ellipse, as cubic curves. */
function strand(L: Layout, seed: number): string {
  const r = rng(seed);
  const p: Pt[] = [L.entry];
  for (let i = 0; i < 9; i++) {
    const a = r() * Math.PI * 2;
    const d = 0.35 + r() * 0.65;
    p.push([L.knot[0] + Math.cos(a) * L.rx * d, L.knot[1] + Math.sin(a) * L.ry * d]);
  }
  p.push(L.exit);
  let d = `M${p[0][0].toFixed(1)},${p[0][1].toFixed(1)}`;
  for (let i = 0; i < p.length - 1; i++) {
    const p0 = p[Math.max(0, i - 1)], p1 = p[i], p2 = p[i + 1], p3 = p[Math.min(p.length - 1, i + 2)];
    const c1: Pt = [p1[0] + (p2[0] - p0[0]) / 6, p1[1] + (p2[1] - p0[1]) / 6];
    const c2: Pt = [p2[0] - (p3[0] - p1[0]) / 6, p2[1] - (p3[1] - p1[1]) / 6];
    d += ` C${c1[0].toFixed(1)},${c1[1].toFixed(1)} ${c2[0].toFixed(1)},${c2[1].toFixed(1)} ${p2[0].toFixed(1)},${p2[1].toFixed(1)}`;
  }
  return d;
}

/* each part fades or draws in at its own moment of one sequence */
const at = (delay: number, hidden: TargetAndTransition, show: TargetAndTransition, duration = 0.45): { variants: Variants; transition: Transition } => ({
  variants: { hidden, show },
  transition: { delay, duration, ease: EASE },
});
const draw = (delay: number, duration: number) => at(delay, { pathLength: 0, opacity: 0 }, { pathLength: 1, opacity: 1 }, duration);
const fade = (delay: number) => at(delay, { opacity: 0, y: 8 }, { opacity: 1, y: 0 });

const chipW = (t: string) => t.length * 6.7 + 22;

function Scene({ L, className }: { L: Layout; className: string }) {
  const g = L.gate;
  const rules = ["says what happened", "gives the next step", "never blames"];
  return (
    <motion.svg
      className={className}
      viewBox={`0 0 ${L.w} ${L.h}`}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "0px 0px -15% 0px" }}
      aria-hidden
    >
      {/* BEFORE: the knot of one-off messages */}
      <motion.text x={L.before[0]} y={L.before[1]} fill={FAINT} style={{ fontFamily: MONO, fontSize: 11, letterSpacing: "0.12em" }} {...fade(0)}>
        BEFORE · ~2,000 MESSAGES
      </motion.text>
      {[11, 23, 41].map((s, i) => (
        <motion.path key={s} d={strand(L, s)} fill="none" stroke={LINE} strokeWidth={1.4} strokeLinecap="round" {...draw(0.1 + i * 0.15, 1.3)} />
      ))}
      {L.chips.map((c, i) => (
        <motion.g key={c.t} {...at(0.45 + i * 0.12, { opacity: 0, scale: 0.85 }, { opacity: 1, scale: 1 }, 0.35)} style={{ transformOrigin: `${c.x + chipW(c.t) / 2}px ${c.y + 13}px` }}>
          <rect x={c.x} y={c.y} width={chipW(c.t)} height={26} rx={13} fill="#211716" stroke="rgba(232,131,110,.55)" strokeWidth={1} />
          <text x={c.x + 11} y={c.y + 17} fill="#f0a99a" style={{ fontFamily: MONO, fontSize: 11 }}>{c.t}</text>
        </motion.g>
      ))}

      {/* the three rules every message has to pass */}
      <motion.g {...fade(1.45)}>
        <rect x={g.x} y={g.y} width={g.w} height={g.h} rx={14} fill="#121a26" stroke={ACC} strokeWidth={1.2} />
        <text x={g.x + 18} y={g.y + 28} fill={ACC} style={{ fontFamily: MONO, fontSize: 11, letterSpacing: "0.12em" }}>3 RULES</text>
      </motion.g>
      {rules.map((t, i) => (
        <motion.g key={t} {...fade(1.65 + i * 0.15)}>
          <circle cx={g.x + 26} cy={g.y + 52 + i * 26} r={8} fill="rgba(124,184,245,.16)" />
          <path d={`M${g.x + 22} ${g.y + 52 + i * 26} l3 3 l5 -6`} fill="none" stroke={ACC} strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round" />
          <text x={g.x + 42} y={g.y + 56 + i * 26} fill={INK} style={{ fontSize: 13 }}>{t}</text>
        </motion.g>
      ))}

      {/* AFTER: one route to three kinds of message */}
      <motion.path d={L.route} fill="none" stroke={LINE} strokeWidth={1.4} strokeLinecap="round" strokeLinejoin="round" {...draw(2.1, 0.7)} />
      <motion.text x={L.after[0]} y={L.after[1]} fill={FAINT} style={{ fontFamily: MONO, fontSize: 11, letterSpacing: "0.12em" }} {...fade(2.2)}>
        AFTER
      </motion.text>

      {/* technical: out of the user's way */}
      <motion.g {...fade(2.45)}>
        <rect x={L.logs.x} y={L.logs.y} width={L.logs.w} height={64} rx={12} fill="#15161a" stroke="rgba(238,240,244,.18)" strokeWidth={1} />
        <text x={L.logs.x + 16} y={L.logs.y + 24} fill={FAINT} style={{ fontFamily: MONO, fontSize: 10, letterSpacing: "0.12em" }}>TECHNICAL · MOVED TO LOGS</text>
        <text x={L.logs.x + 16} y={L.logs.y + 46} fill={FAINT} style={{ fontFamily: MONO, fontSize: 12 }}>FTP transfer failed → on-call team</text>
      </motion.g>

      {/* what the user can act on */}
      <motion.g {...fade(2.7)}>
        <rect x={L.msg.x} y={L.msg.y} width={L.msg.w} height={150} rx={14} fill="#121a26" stroke={ACC} strokeWidth={1.2} />
        <text x={L.msg.x + 18} y={L.msg.y + 28} fill={ACC} style={{ fontFamily: MONO, fontSize: 10, letterSpacing: "0.12em" }}>WHAT THE USER SEES</text>
        <text x={L.msg.x + 18} y={L.msg.y + 54} fill={INK} style={{ fontSize: 14, fontWeight: 600 }}>The account details weren&apos;t</text>
        <text x={L.msg.x + 18} y={L.msg.y + 73} fill={INK} style={{ fontSize: 14, fontWeight: 600 }}>entered correctly.</text>
        <text x={L.msg.x + 18} y={L.msg.y + 96} fill={FAINT} style={{ fontSize: 13 }}>Please check them and try again.</text>
        <rect x={L.msg.x + 18} y={L.msg.y + 110} width={118} height={28} rx={14} fill="var(--accent)" />
        <text x={L.msg.x + 77} y={L.msg.y + 128} textAnchor="middle" fill="#fff" style={{ fontSize: 12, fontWeight: 600 }}>Check details</text>
      </motion.g>

      {/* not ours to fix: say so, and what to try */}
      <motion.g {...fade(2.95)}>
        <rect x={L.ext.x} y={L.ext.y} width={L.ext.w} height={98} rx={12} fill="#1b1810" stroke="rgba(224,180,85,.5)" strokeWidth={1} />
        <text x={L.ext.x + 16} y={L.ext.y + 24} fill={WARN} style={{ fontFamily: MONO, fontSize: 10, letterSpacing: "0.12em" }}>OUTSIDE OUR CONTROL</text>
        <text x={L.ext.x + 16} y={L.ext.y + 47} fill={INK} style={{ fontSize: 13 }}>Card inquiry is unavailable right now.</text>
        <text x={L.ext.x + 16} y={L.ext.y + 66} fill={FAINT} style={{ fontSize: 12.5 }}>Try again in a few minutes.</text>
        <text x={L.ext.x + 16} y={L.ext.y + 85} fill={ACC} style={{ fontSize: 12.5 }}>Contact support if it continues</text>
      </motion.g>

      {/* a quiet mark for "dead end" on the old knot, once the new path exists */}
      <motion.circle cx={L.exit[0]} cy={L.exit[1]} r={4} fill={FAIL} {...at(1.3, { opacity: 0 }, { opacity: 0.9 }, 0.3)} />
    </motion.svg>
  );
}

const WIDE: Layout = {
  w: 1000,
  h: 480,
  entry: [0, 250],
  knot: [215, 250],
  rx: 125,
  ry: 135,
  exit: [372, 250],
  before: [24, 36],
  chips: [
    { t: "Error", x: 70, y: 86 },
    { t: "ERR_4012", x: 262, y: 74 },
    { t: "You are not the creator of the request", x: 60, y: 196 },
    { t: "FTP transfer failed", x: 18, y: 318 },
    { t: "Operation failed", x: 250, y: 290 },
    { t: "Invalid input parameters", x: 150, y: 396 },
  ],
  gate: { x: 410, y: 170, w: 200, h: 140 },
  route: "M372,250 H410 M610,250 H648 M648,82 V418 M648,82 H690 M648,250 H690 M648,418 H690",
  logs: { x: 690, y: 50, w: 290 },
  msg: { x: 690, y: 175, w: 290 },
  ext: { x: 690, y: 369, w: 290 },
  after: [692, 36],
};

const TALL: Layout = {
  w: 480,
  h: 980,
  entry: [240, 0],
  knot: [240, 190],
  rx: 125,
  ry: 120,
  exit: [240, 340],
  before: [20, 28],
  chips: [
    { t: "Error", x: 40, y: 62 },
    { t: "ERR_4012", x: 330, y: 52 },
    { t: "You are not the creator of the request", x: 70, y: 150 },
    { t: "FTP transfer failed", x: 16, y: 236 },
    { t: "Operation failed", x: 300, y: 222 },
    { t: "Invalid input parameters", x: 130, y: 300 },
  ],
  gate: { x: 120, y: 380, w: 240, h: 140 },
  route: "M240,340 V380 M240,520 V900",
  logs: { x: 40, y: 580, w: 400 },
  msg: { x: 40, y: 670, w: 400 },
  ext: { x: 40, y: 848, w: 400 },
  after: [40, 564],
};

export default function ErrorTangleScene() {
  return (
    <figure
      className="cs-scene ets-scene"
      aria-label="Before: about 2,000 error messages in a knot, each a dead end. After: every message passes three rules (say what happened, give the next step, never blame). Technical errors move to the logs, errors the user can act on say what to do, and causes outside our control say so and suggest a retry."
    >
      <Scene L={WIDE} className="ets-wide" />
      <Scene L={TALL} className="ets-tall" />
    </figure>
  );
}
