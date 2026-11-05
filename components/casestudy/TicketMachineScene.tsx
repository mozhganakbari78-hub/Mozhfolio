"use client";

import { useEffect, useState, useSyncExternalStore } from "react";

/**
 * Before the redesign: the user types a ticket, hits Send, and does it again.
 * A ticket machine on an isometric floor. The screen fills with a new ticket,
 * the SEND key goes down, a ticket pops out of the slot and lands on the
 * support queue, which keeps growing. Line art on the same dark card as the
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
const LOOP = 2.6; // seconds per ticket

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
  const [count, setCount] = useState(128);

  useEffect(() => {
    if (!motion) return;
    const id = window.setInterval(() => setCount((c) => c + 1), LOOP * 1000);
    return () => window.clearInterval(id);
  }, [motion]);

  const M = iso(MACHINE[0], MACHINE[1]);
  const K = iso(KEYBOARD[0], KEYBOARD[1]);
  const slotIn = M(0, 0, 242);
  const slotTop = M(0, 0, 330);
  const pileTop = iso(QUEUE[0], QUEUE[1])(0, 0, 44);
  // out of the slot, straight up, then across to the queue
  const flight = `M${slotIn[0]},${slotIn[1]} L${slotTop[0]},${slotTop[1]} C${slotTop[0] + 90},${slotTop[1] - 40} ${pileTop[0] - 40},${pileTop[1] - 200} ${pileTop[0]},${pileTop[1]}`;
  const on = motion ? " is-on" : "";

  return (
    <figure
      className="cs-scene gh-scene hd-scene tm-scene"
      aria-label="Before: the user writes a support ticket, presses Send, and does it again. Every ticket lands in a support queue that keeps growing."
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
            Array.from({ length: 6 }, (_, c) => {
              if (r === 2 && c >= 3) return null;
              return <rect key={`${r}${c}`} x={10 + c * 31} y={9 + r * 25} width={25} height={19} rx={3} className="tm-key" />;
            })
          )}
          <g className={`tm-send${on}`}>
            <rect x={103} y={59} width={87} height={19} rx={3} />
            <text x={146.5} y={73} textAnchor="middle">SEND</text>
          </g>
        </g>
        <Label x={60} y={612} k="USER" v="writes, presses Send" />

        {/* the machine */}
        <Box at={MACHINE} x={-110} y={-80} w={220} d={160} h={240} />
        {/* front panel */}
        <g transform={faceY(MACHINE, -110, 80, 240)}>
          <text x={18} y={26} className="tm-brand">Support</text>
          <rect x={16} y={40} width={188} height={112} rx={6} className="tm-screen" />
          <text x={28} y={60} className="tm-screen-k">New ticket</text>
          {[0, 1, 2, 3].map((n) => (
            <rect key={n} x={28} y={72 + n * 16} width={[150, 120, 160, 90][n]} height={7} rx={3.5} className={`tm-type${on}`} style={{ animationDelay: `${n * 0.32}s` }} />
          ))}
          <rect x={16} y={168} width={40} height={26} rx={4} className="tm-btn" />
          <rect x={64} y={168} width={40} height={26} rx={4} className="tm-btn" />
          <rect x={112} y={168} width={40} height={26} rx={4} className="tm-btn" />
          <circle cx={184} cy={181} r={14} className="tm-dial" />
          <circle cx={184} cy={181} r={4} className={`tm-led${on}`} />
        </g>
        <Label x={410} y={78} k="SUPPORT FORM" v="one more ticket" on />

        {/* the queue */}
        {Array.from({ length: 7 }, (_, n) => (
          <Box key={n} at={QUEUE} x={-50} y={-34} z={n * 6} w={100} d={68} h={4} className="tm-paper" />
        ))}
        <Label x={880} y={620} k="SUPPORT QUEUE" v={`${count} tickets`} />

        {/* the ticket in flight */}
        {motion && (
          <g className="tm-flying">
            <rect x={-26} y={-16} width={52} height={32} rx={4} />
            <path d="M-16,-6 h26 M-16,2 h32 M-16,10 h18" />
            <animateMotion dur={`${LOOP}s`} repeatCount="indefinite" path={flight} keyPoints="0;0;0.28;1" keyTimes="0;0.62;0.74;1" calcMode="linear" />
            <animate attributeName="opacity" dur={`${LOOP}s`} repeatCount="indefinite" values="0;0;1;1;0" keyTimes="0;0.62;0.66;0.97;1" />
          </g>
        )}

        {/* slot on top, drawn after the ticket so the ticket rises out of it */}
        <Box at={MACHINE} x={-46} y={-16} z={240} w={92} d={32} h={12} />
        <g transform={faceTop(MACHINE, -40, -6, 252)}>
          <rect x={0} y={0} width={80} height={12} rx={2} className="tm-slot" />
        </g>
      </svg>
    </figure>
  );
}
