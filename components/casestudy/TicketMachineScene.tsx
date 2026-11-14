"use client";

import { useEffect, useState, useSyncExternalStore } from "react";

/**
 * Before the redesign: the user types a ticket, hits Send, and does it again.
 * A ticket machine on an isometric floor. The screen fills with a new ticket,
 * the SEND key goes down, and one more sheet lands on the support queue,
 * which keeps growing. Line art on the same dark card as the
 * greenhouse scene, so it reuses the gh-* and hd-* base styles.
 */

const C = 0.866;
type Pt = [number, number];
const iso = (ax: number, ay: number) => (x: number, y: number, z = 0): Pt => [ax + (x - y) * C, ay + (x + y) * 0.5 - z];
const pts = (p: Pt[]) => p.map(([x, y]) => `${x.toFixed(1)},${y.toFixed(1)}`).join(" ");

function Box({ at, x, y, z = 0, w, d, h, className = "" }: { at: Pt; x: number; y: number; z?: number; w: number; d: number; h: number; className?: string }) {
  const P = iso(at[0], at[1]);
  return (
    <g className={`gh-device hd-box ${className}`}>
      <polygon points={pts([P(x, y + d, z + h), P(x + w, y + d, z + h), P(x + w, y + d, z), P(x, y + d, z)])} className="hd-left" />
      <polygon points={pts([P(x + w, y, z + h), P(x + w, y + d, z + h), P(x + w, y + d, z), P(x + w, y, z)])} className="hd-right" />
      <polygon points={pts([P(x, y, z + h), P(x + w, y, z + h), P(x + w, y + d, z + h), P(x, y + d, z + h)])} className="hd-top" />
    </g>
  );
}

/* flat content drawn onto a box's +y face (u along x, v downwards) or its top (u along x, v along y) */
const faceY = (at: Pt, x: number, y: number, z: number) => {
  const [ex, ey] = iso(at[0], at[1])(x, y, z);
  return `matrix(${C} 0.5 0 1 ${ex} ${ey})`;
};
const faceTop = (at: Pt, x: number, y: number, z: number) => {
  const [ex, ey] = iso(at[0], at[1])(x, y, z);
  return `matrix(${C} 0.5 ${-C} 0.5 ${ex} ${ey})`;
};

function Label({ x, y, k, v, on }: { x: number; y: number; k: string; v: string; on?: boolean }) {
  const w = Math.max(k.length * 11.5, v.length * 10.6) + 32;
  return (
    <g className={`gh-label${on ? " is-on" : ""}`} transform={`translate(${x} ${y})`}>
      <rect width={w} height={58} rx={10} />
      <text x={16} y={23} className="gh-k">{k}</text>
      <text x={16} y={46} className="gh-v">{v}</text>
    </g>
  );
}

const MACHINE: Pt = [600, 470];
const KEYBOARD: Pt = [250, 560];
const QUEUE: Pt = [960, 540];
const LOOP = 4; // seconds per ticket, matches the 4s CSS loop
const PRESS = 0.54; // the SEND key is down at 52–56% of the loop
const BASE = 7, MAX = 16; // sheets in the queue at rest, and at most

/* a coiled cable between two points */
function coil(a: Pt, b: Pt, turns = 14, r = 7) {
  const [dx, dy] = [b[0] - a[0], b[1] - a[1]];
  const len = Math.hypot(dx, dy), nx = -dy / len, ny = dx / len;
  const steps = turns * 12;
  let d = `M${a[0]},${a[1]}`;
  for (let i = 1; i <= steps; i++) {
    const t = i / steps;
    const s = Math.sin(t * turns * Math.PI * 2) * r * Math.sin(Math.PI * t);
    d += ` L${(a[0] + dx * t + nx * s).toFixed(1)},${(a[1] + dy * t + ny * s).toFixed(1)}`;
  }
  return d;
}

const REDUCE = "(prefers-reduced-motion: reduce)";
const allowsMotion = () => !window.matchMedia(REDUCE).matches;
const subscribeMotion = (cb: () => void) => {
  const mq = window.matchMedia(REDUCE);
  mq.addEventListener("change", cb);
  return () => mq.removeEventListener("change", cb);
};

export default function TicketMachineScene() {
  const motion = useSyncExternalStore(subscribeMotion, allowsMotion, () => false);
  const [sent, setSent] = useState(0);

  // one more ticket each time the SEND key goes down
  useEffect(() => {
    if (!motion) return;
    let id = 0;
    const first = window.setTimeout(() => {
      setSent((n) => n + 1);
      id = window.setInterval(() => setSent((n) => n + 1), LOOP * 1000);
    }, LOOP * PRESS * 1000);
    return () => {
      window.clearTimeout(first);
      window.clearInterval(id);
    };
  }, [motion]);
  const sheets = Math.min(BASE + sent, MAX);

  const M = iso(MACHINE[0], MACHINE[1]);
  const K = iso(KEYBOARD[0], KEYBOARD[1]);
  const on = motion ? " is-on" : "";

  return (
    <figure
      className="cs-scene gh-scene hd-scene tm-scene"
      aria-label="Before: the user writes a support ticket, hits Enter, and does it again. Every ticket lands in a support queue that keeps growing."
    >
      <svg viewBox="0 60 1200 620" role="img" aria-hidden>
        <defs>
          <radialGradient id="tm-fade" cx="50%" cy="55%" r="60%">
            <stop offset="0%" stopColor="#fff" stopOpacity="1" />
            <stop offset="100%" stopColor="#fff" stopOpacity="0" />
          </radialGradient>
          <mask id="tm-grid-mask">
            <rect x="0" y="0" width="1200" height="720" fill="url(#tm-fade)" />
          </mask>
        </defs>

        {/* floor */}
        <g className="hd-grid" mask="url(#tm-grid-mask)">
          {Array.from({ length: 25 }, (_, k) => {
            const P = iso(600, 400);
            const o = (k - 12) * 60;
            const a = P(-800, o), b = P(800, o), c = P(o, -800), e = P(o, 800);
            return (
              <g key={k}>
                <path d={`M${a[0]},${a[1]} L${b[0]},${b[1]}`} />
                <path d={`M${c[0]},${c[1]} L${e[0]},${e[1]}`} />
              </g>
            );
          })}
        </g>

        {/* cable: keyboard to machine */}
        <path d={coil(K(100, 0, 8), M(-70, 80, 40))} className="tm-cable" />

        {/* keyboard */}
        <Box at={KEYBOARD} x={-100} y={-45} w={200} d={90} h={16} />
        <g transform={faceTop(KEYBOARD, -100, -45, 16)}>
          {Array.from({ length: 3 }, (_, r) =>
            Array.from({ length: 4 }, (_, c) => (
              <rect key={`${r}${c}`} x={10 + c * 31} y={9 + r * 25} width={25} height={19} rx={3} className="tm-key" />
            ))
          )}
          {/* the big ENTER key: lifts, slams down, and sends a ripple out */}
          <g className={`tm-enter${on}`}>
            <rect x={130} y={5} width={64} height={77} rx={7} className="tm-enter-ring" />
            <rect x={137} y={12} width={56} height={69} rx={5} className="tm-enter-base" />
            <g className="tm-enter-cap">
              <rect x={134} y={9} width={56} height={69} rx={5} className="tm-enter-key" />
              <text x={162} y={31} textAnchor="middle">ENTER</text>
              <path d="M174 41 L174 54 L150 54 M156 48 L150 54 L156 60" className="tm-enter-arrow" />
            </g>
          </g>
        </g>
        <Label x={60} y={612} k="USER" v="writes, hits Enter" />

        {/* the machine */}
        <Box at={MACHINE} x={-110} y={-80} w={220} d={160} h={240} />
        {/* front panel */}
        <g transform={faceY(MACHINE, -110, 80, 240)}>
          <text x={18} y={26} className="tm-brand">Support</text>
          <rect x={16} y={40} width={188} height={112} rx={6} className="tm-screen" />
          <text x={28} y={60} className="tm-screen-k">New ticket</text>
          {[0, 1, 2, 3].map((n) => (
            <rect key={n} x={28} y={72 + n * 16} width={[150, 120, 160, 90][n]} height={7} rx={3.5} className={`tm-type${on} l${n}`} />
          ))}
          <rect x={16} y={168} width={40} height={26} rx={4} className="tm-btn" />
          <rect x={64} y={168} width={40} height={26} rx={4} className="tm-btn" />
          <rect x={112} y={168} width={40} height={26} rx={4} className="tm-btn" />
          <circle cx={184} cy={181} r={14} className="tm-dial" />
          <circle cx={184} cy={181} r={4} className={`tm-led${on}`} />
        </g>
        <Label x={410} y={78} k="SUPPORT FORM" v="one more ticket" on />

        {/* the queue */}
        {Array.from({ length: sheets }, (_, n) => {
          const sheet = <Box at={QUEUE} x={-50} y={-34} z={n * 6} w={100} d={68} h={4} className="tm-paper" />;
          // the newest sheet drops onto the pile; keyed by `sent` so it lands again at the cap
          return n === sheets - 1 && sent > 0 ? (
            <g key={`new-${sent}`} className="tm-land">{sheet}</g>
          ) : (
            <g key={n}>{sheet}</g>
          );
        })}
        <Label x={880} y={620} k="SUPPORT QUEUE" v={`${128 + sent} tickets`} />

      </svg>
    </figure>
  );
}
