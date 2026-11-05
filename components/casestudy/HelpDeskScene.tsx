"use client";

import { useSyncExternalStore } from "react";

/**
 * Where a question goes now. Users type into the merged support page; the
 * page answers what has one fixed answer from the FAQ and sends it straight
 * back, and only cases that need a person reach the help desk. Isometric line
 * art on the same dark card and strokes as the greenhouse scene, so it reuses
 * the gh-* styles; the moving dots use the ticket-split colours.
 */

const C = 0.866;
type Pt = [number, number];

/** Isometric projection around a screen anchor: x runs down-right, y down-left, z up. */
const iso = (ax: number, ay: number) => (x: number, y: number, z = 0): Pt => [
  ax + (x - y) * C,
  ay + (x + y) * 0.5 - z,
];
const pts = (p: Pt[]) => p.map(([x, y]) => `${x.toFixed(1)},${y.toFixed(1)}`).join(" ");

/** A solid box: top, front-left (+y) and front-right (+x) faces. */
function Box({
  at, x, y, z = 0, w, d, h, className = "",
}: { at: Pt; x: number; y: number; z?: number; w: number; d: number; h: number; className?: string }) {
  const P = iso(at[0], at[1]);
  return (
    <g className={`gh-device hd-box ${className}`}>
      <polygon points={pts([P(x, y + d, z + h), P(x + w, y + d, z + h), P(x + w, y + d, z), P(x, y + d, z)])} className="hd-left" />
      <polygon points={pts([P(x + w, y, z + h), P(x + w, y + d, z + h), P(x + w, y + d, z), P(x + w, y, z)])} className="hd-right" />
      <polygon points={pts([P(x, y, z + h), P(x + w, y, z + h), P(x + w, y + d, z + h), P(x, y + d, z + h)])} className="hd-top" />
    </g>
  );
}

/** SVG matrix that draws flat 2D content onto a box's +y face (u along x, v downwards). */
const faceMatrix = (at: Pt, x: number, y: number, z: number) => {
  const [ex, ey] = iso(at[0], at[1])(x, y, z);
  return `matrix(${C} 0.5 0 1 ${ex} ${ey})`;
};

/** A round platform: a thin disc seen in isometric. */
function Disc({ cx, cy, r, t = 14, glow }: { cx: number; cy: number; r: number; t?: number; glow?: boolean }) {
  const rx = r * 1.2247, ry = r * 0.7071;
  return (
    <g className="gh-device hd-disc">
      <path d={`M${cx - rx},${cy} v${t} A${rx},${ry} 0 0 0 ${cx + rx},${cy + t} v${-t}`} />
      <ellipse cx={cx} cy={cy} rx={rx} ry={ry} />
      <ellipse cx={cx} cy={cy} rx={rx * 0.82} ry={ry * 0.82} className={glow ? "hd-ring is-glow" : "hd-ring"} />
    </g>
  );
}

/** A person, seen from slightly above. */
function Person({ x, y, s = 1, tone = "" }: { x: number; y: number; s?: number; tone?: string }) {
  return (
    <g className={`gh-device hd-person ${tone}`} transform={`translate(${x} ${y}) scale(${s})`}>
      <path d="M-17,0 C-17,-22 17,-22 17,0 Z" />
      <circle cx={0} cy={-31} r={10} />
    </g>
  );
}

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

/* the three stations, as screen points on the floor */
const USERS: Pt = [250, 500];
const PAGE: Pt = [600, 330];
const DESK: Pt = [930, 520];
const KB: Pt = [880, 200];

/* wires run along the isometric axes, with one elbow each */
const TO_PAGE = "M250,500 L548,328 L600,358";
const TO_DESK = "M600,358 L620,370 L930,550";
const TO_KB = "M600,330 L830,197";

/** A dot that travels a wire on a loop; drawn only when motion is allowed. */
function Mover({ path, dur, delay, tone, reverse }: { path: string; dur: number; delay: number; tone: string; reverse?: boolean }) {
  return (
    <circle r={6} className={`hd-dot ${tone}`}>
      <animateMotion
        dur={`${dur}s`}
        begin={`${delay}s`}
        repeatCount="indefinite"
        path={path}
        keyPoints={reverse ? "1;0" : "0;1"}
        keyTimes="0;1"
        calcMode="linear"
      />
    </circle>
  );
}

const REDUCE = "(prefers-reduced-motion: reduce)";
const allowsMotion = () => !window.matchMedia(REDUCE).matches;
const subscribeMotion = (cb: () => void) => {
  const mq = window.matchMedia(REDUCE);
  mq.addEventListener("change", cb);
  return () => mq.removeEventListener("change", cb);
};

export default function HelpDeskScene() {
  // false on the server and for readers who asked for less motion
  const motion = useSyncExternalStore(subscribeMotion, allowsMotion, () => false);

  const pageAt: Pt = [PAGE[0], PAGE[1] - 14];
  const deskAt: Pt = [DESK[0], DESK[1] - 14];
  const kbAt: Pt = [KB[0], KB[1]];

  return (
    <figure
      className="cs-scene gh-scene hd-scene"
      aria-label="Users type into the merged support page. Questions with one fixed answer are answered there from the FAQ; only cases that need a person go on to the help desk."
    >
      <svg viewBox="0 40 1200 640" role="img" aria-hidden>
        <defs>
          <radialGradient id="hd-fade" cx="50%" cy="55%" r="60%">
            <stop offset="0%" stopColor="#fff" stopOpacity="1" />
            <stop offset="100%" stopColor="#fff" stopOpacity="0" />
          </radialGradient>
          <mask id="hd-grid-mask">
            <rect x="0" y="0" width="1200" height="720" fill="url(#hd-fade)" />
          </mask>
        </defs>

        {/* isometric floor grid, fading out towards the edges */}
        <g className="hd-grid" mask="url(#hd-grid-mask)">
          {Array.from({ length: 25 }, (_, k) => {
            const P = iso(600, 380);
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

        {/* wires */}
        <g className="gh-wires">
          <path d={TO_PAGE} />
          <path d={TO_DESK} className="is-idle" />
          <path d={TO_KB} className="is-idle" />
        </g>

        {/* the FAQ: a stack of answer units */}
        {[0, 1, 2].map((n) => (
          <g key={n}>
            <Box at={kbAt} x={-40} y={-40} z={n * 30} w={80} d={80} h={24} />
            <g transform={faceMatrix(kbAt, -40, 40, n * 30 + 24)}>
              <path d="M12,9 h34 M12,15 h22" className="gh-device hd-slot" />
              <circle cx={66} cy={12} r={3} className={`hd-led${motion ? " is-blink" : ""}`} style={{ animationDelay: `${n * 0.7}s` }} />
            </g>
          </g>
        ))}
        <Label x={968} y={150} k="FAQ" v="89 answers" />

        {/* users */}
        <Disc cx={USERS[0]} cy={USERS[1]} r={110} />
        <Person x={USERS[0] - 70} y={USERS[1] + 4} s={0.95} />
        <Person x={USERS[0]} y={USERS[1] + 34} />
        <Person x={USERS[0] + 66} y={USERS[1] - 2} s={0.95} />
        <Label x={70} y={600} k="USERS" v="type a question" />

        {/* the merged support page */}
        <Disc cx={PAGE[0]} cy={PAGE[1]} r={120} glow />
        <Box at={pageAt} x={-90} y={-6} w={180} d={8} h={150} />
        <g transform={faceMatrix(pageAt, -90, 2, 150)} className="hd-page">
          {/* FAQ column */}
          <rect x={12} y={14} width={70} height={122} rx={4} className="hd-pane" />
          {[0, 1, 2, 3].map((n) => (
            <rect key={n} x={20} y={24 + n * 27} width={54} height={19} rx={3} className={`hd-answer${n === 1 ? " is-match" : ""}`} />
          ))}
          {/* ticket form */}
          <rect x={92} y={14} width={76} height={122} rx={4} className="hd-pane" />
          <rect x={100} y={26} width={60} height={14} rx={3} className="hd-input" />
          <rect x={104} y={31} width={40} height={4} rx={2} className={`hd-typing${motion ? " is-on" : ""}`} />
          <path d="M100,52 h56 M100,62 h44 M100,72 h50" className="gh-device hd-slot" />
          <rect x={126} y={116} width={34} height={12} rx={3} className="hd-send" />
        </g>
        <Label x={420} y={60} k="SUPPORT PAGE" v="answers as they type" on />

        {/* help desk */}
        <Disc cx={DESK[0]} cy={DESK[1]} r={130} />
        {[
          { x: -110, y: -50 },
          { x: 10, y: -50 },
        ].map((p, n) => (
          <g key={n}>
            <Box at={deskAt} x={p.x} y={p.y} w={86} d={46} h={28} />
            <Box at={deskAt} x={p.x + 18} y={p.y + 4} z={28} w={48} d={4} h={34} className="hd-monitor" />
            <g transform={faceMatrix(deskAt, p.x + 18, p.y + 8, 62)}>
              <rect x={5} y={5} width={38} height={24} rx={2} className={`hd-screen${motion ? " is-glow" : ""}`} style={{ animationDelay: `${n * 1.3}s` }} />
            </g>
          </g>
        ))}
        {(() => {
          const P = iso(deskAt[0], deskAt[1]);
          const a = P(-67, 34), b = P(53, 34);
          return (
            <>
              <Person x={a[0]} y={a[1]} tone="is-agent" />
              <Person x={b[0]} y={b[1]} tone="is-agent" />
            </>
          );
        })()}
        <Label x={900} y={612} k="HELP DESK" v="cases that need a person" />

        {/* the flow: tickets out, fixed answers back, the rest to the desk */}
        {motion && (
          <g>
            <Mover path={TO_PAGE} dur={3} delay={0} tone="is-ticket" />
            <Mover path={TO_PAGE} dur={3} delay={1} tone="is-ticket" />
            <Mover path={TO_PAGE} dur={3} delay={2} tone="is-ticket" />
            <Mover path={TO_PAGE} dur={3} delay={0.5} tone="is-answer" reverse />
            <Mover path={TO_PAGE} dur={3} delay={2} tone="is-answer" reverse />
            <Mover path={TO_DESK} dur={3.4} delay={1.6} tone="is-support" />
            <Mover path={TO_KB} dur={2.4} delay={0.8} tone="is-query" />
            <Mover path={TO_KB} dur={2.4} delay={1.2} tone="is-query" reverse />
          </g>
        )}

        {/* key */}
        <g className="hd-key" transform="translate(70 80)">
          <circle cx={6} cy={0} r={6} className="hd-dot is-answer" />
          <text x={22} y={5}>answered on the page</text>
          <circle cx={6} cy={30} r={6} className="hd-dot is-support" />
          <text x={22} y={35}>sent to the help desk</text>
        </g>
      </svg>
    </figure>
  );
}
