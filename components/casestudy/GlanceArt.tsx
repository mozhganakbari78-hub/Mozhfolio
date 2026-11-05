/**
 * Small animated illustrations for the hero result cards: solid shapes on a
 * faint grid, the accent element lit with a gradient and a soft glow, ringed
 * marker dots that pulse. Each one moves the way its figure works: bars
 * grow, a fan spins, a needle sweeps, a dot travels down the path.
 * Drawn in a 240×120 box. Shared gradients live in <GlanceDefs/>.
 */
import type { CSSProperties, ReactNode } from "react";

export type GlanceArtName =
  | "questions" | "products" | "oneDesign"
  | "tickets" | "audit" | "rules"
  | "ifThen" | "testing" | "rtl"
  | "deflect" | "onePage" | "live"
  | "oneRow" | "verified" | "branch"
  | "surfaces" | "dashboard" | "shadowing";

const d = (s: number): CSSProperties => ({ animationDelay: `${s}s` });

/* marker: ringed dot with a pulsing halo */
const Mk = ({ x, y, t = 0 }: { x: number; y: number; t?: number }) => (
  <g>
    <circle cx={x} cy={y} r={5} className="halo" style={d(t)} />
    <circle cx={x} cy={y} r={5} className="mk" />
  </g>
);
const Pill = ({ x, y, w, c = "p", t }: { x: number; y: number; w: number; c?: string; t?: number }) => (
  <rect x={x} y={y} width={w} height={5} rx={2.5} className={t === undefined ? c : `${c} slide`} style={t === undefined ? undefined : d(t)} />
);
const Base = ({ y = 104, x1 = 30, x2 = 210 }: { y?: number; x1?: number; x2?: number }) => (
  <path d={`M${x1},${y} H${x2}`} className="ln" />
);
/* a dot that travels along a path, forever */
const Travel = ({ path, dur = 2.4, t = 0 }: { path: string; dur?: number; t?: number }) => (
  <circle r={3.5} className="travel">
    <animateMotion dur={`${dur}s`} begin={`${t}s`} repeatCount="indefinite" path={path} />
  </circle>
);

/* window-like card: body, header strip, two text lines */
function Card({ x, y, w, h, a, dash, t = 0 }: { x: number; y: number; w: number; h: number; a?: boolean; dash?: boolean; t?: number }) {
  return (
    <g className="rise" style={d(t)}>
      <rect x={x} y={y} width={w} height={h} rx={5} className={dash ? "dash" : "g3"} />
      {!dash && <rect x={x} y={y} width={w} height={8} rx={4} className={a ? "ac glow" : "g1"} />}
      {!dash && <Pill x={x + 6} y={y + 16} w={w * 0.6} />}
      {!dash && <Pill x={x + 6} y={y + 26} w={w * 0.4} c="p2" />}
    </g>
  );
}

const ART: Record<GlanceArtName, ReactNode> = {
  /* ── design system ── */
  questions: (
    <>
      {[78, 66, 58, 46, 40].map((h, i) => (
        <rect key={i} x={46 + i * 30} y={104 - h} width={20} height={h} rx={3} className={`grow ${i < 2 ? "g1" : "dash"}`} style={d(0.1 + i * 0.12)} />
      ))}
      <rect x={196} y={74} width={20} height={30} rx={3} className="grow ac glow" style={d(0.75)} />
      <path d="M56,24 C100,30 150,56 206,72" className="ln dashed draw" pathLength={1} style={d(0.9)} />
      <Mk x={56} y={24} />
      <Mk x={206} y={74} t={0.6} />
      <Base x1={36} x2={226} />
    </>
  ),
  products: (
    <>
      {[34, 80, 126, 172].map((x, i) => <Card key={x} x={x} y={22} w={38} h={50} a={i === 3} t={0.1 + i * 0.12} />)}
      {[53, 99, 145, 191].map((x) => <path key={x} d={`M${x},72 V84`} className="ln" />)}
      <rect x={30} y={84} width={184} height={18} rx={4} className="g2" />
      {[38, 70, 102, 134, 166].map((x, i) => <rect key={x} x={x} y={90} width={24} height={6} rx={2} className="blink g1" style={d(i * 0.3)} />)}
      <Travel path="M53,84 V72" dur={1.6} />
      <Travel path="M191,84 V72" dur={1.6} t={0.8} />
      <Mk x={191} y={26} t={0.4} />
    </>
  ),
  oneDesign: (
    <>
      <clipPath id="ga-od-l"><path d="M60,14 H180 L60,106z" /></clipPath>
      <clipPath id="ga-od-r"><path d="M180,14 V106 H60z" /></clipPath>
      {[["ga-od-l", "lt"], ["ga-od-r", "g3"]].map(([id, c]) => (
        <g key={id} clipPath={`url(#${id})`}>
          <rect x={60} y={14} width={120} height={92} rx={6} className={c} />
          <Pill x={72} y={28} w={56} c={c === "lt" ? "pd" : "p"} />
          <Pill x={72} y={40} w={38} c={c === "lt" ? "pd2" : "p2"} />
          <rect x={72} y={56} width={44} height={22} rx={4} className={c === "lt" ? "pd3" : "g2"} />
          <rect x={132} y={84} width={36} height={12} rx={3} className="ac glow" />
        </g>
      ))}
      <path d="M180,14 L60,106" className="ln" />
      {/* light/dark switch */}
      <rect x={196} y={50} width={30} height={18} rx={9} className="g2" />
      <circle cx={205} cy={59} r={6} className="knob" />
      <Mk x={120} y={60} />
    </>
  ),
  /* ── error messages ── */
  tickets: (
    <>
      {Array.from({ length: 10 }, (_, i) => {
        const x = 40 + (i % 5) * 34, y = 22 + Math.floor(i / 5) * 40;
        const c = i < 3 ? "ac glow" : i < 6 ? "dash fade" : "g2";
        return (
          <g key={i} className="pop" style={d(0.08 * i)}>
            <rect x={x} y={y} width={26} height={30} rx={4} className={c} />
            {i < 3 && <path d={`M${x + 9},${y + 11} a4,4 0 1 1 5,3.8 v2.4 M${x + 14},${y + 22} v.4`} className="q" />}
          </g>
        );
      })}
      <Mk x={53} y={22} t={0.8} />
    </>
  ),
  audit: (
    <>
      <rect x={34} y={12} width={172} height={96} rx={6} className="g3" />
      <Pill x={46} y={22} w={50} />
      <Pill x={150} y={22} w={20} c="p2" />
      {[0, 1, 2, 3].map((r) => (
        <g key={r}>
          <path d={`M34,${38 + r * 18} H206`} className="ln2" />
          <Pill x={46} y={45 + r * 18} w={40 + (r % 2) * 14} c="p2" />
          <Pill x={170} y={45 + r * 18} w={22} c="p2" />
        </g>
      ))}
      <g className="scan">
        <rect x={40} y={40} width={160} height={16} rx={3} className="outline" />
        <rect x={46} y={45} width={54} height={5} rx={2.5} className="ac glow" />
      </g>
    </>
  ),
  rules: (
    <>
      {[0, 1, 2].map((i) => (
        <g key={i} className="rise" style={d(0.15 * i)}>
          <rect x={44} y={16 + i * 32} width={152} height={24} rx={5} className="g3" />
          <rect x={50} y={22 + i * 32} width={12} height={12} rx={3} className="ac glow seq" style={d(0.6 * i)} />
          <Pill x={70} y={25 + i * 32} w={86 - i * 18} />
          <path d={`M178,${28 + i * 32} l3,3 l6,-6`} className="tick seq" style={d(0.6 * i)} />
        </g>
      ))}
      <Mk x={196} y={28} t={0.3} />
    </>
  ),
  /* ── rule builder ── */
  ifThen: (
    <>
      <rect x={34} y={30} width={64} height={60} rx={8} className="g2" />
      <rect x={60} y={40} width={8} height={32} rx={4} className="g3" />
      <rect x={61.5} y={50} width={5} height={22} rx={2.5} className="mercury hot" />
      <circle cx={64} cy={74} r={7} className="hot" />
      <path d="M98,60 H142" className="ln" />
      <Travel path="M98,60 H142" dur={1.4} />
      <rect x={142} y={30} width={64} height={60} rx={8} className="ac glow" />
      <g className="spin" style={{ transformOrigin: "174px 60px" }}>
        {[0, 120, 240].map((r) => (
          <path key={r} d="M174,60 C166,48 168,40 175,39 C182,40 180,50 174,60z" transform={`rotate(${r} 174 60)`} className="wh" />
        ))}
      </g>
      <circle cx={174} cy={60} r={3} className="ac" />
    </>
  ),
  testing: (
    <>
      <path d="M30,92 A44,44 0 0 1 118,92" className="arc g2s" />
      <path d="M30,92 A44,44 0 0 1 96,54" className="arc acs draw" pathLength={1} />
      <path d="M74,92 L98,62" className="needle sweep" style={{ transformOrigin: "74px 92px" }} />
      <Mk x={74} y={92} />
      <path d="M150,20 H202 L182,58 L202,100 H150 L170,58z" className="g2" />
      <path d="M164,26 H188 L176,48z" className="g1 sand-top" />
      <path d="M176,58 V96" className="stream" />
      <path d="M160,100 L176,72 L192,100z" className="ac glow sand-bot" />
    </>
  ),
  rtl: (
    <>
      <rect x={90} y={8} width={64} height={104} rx={10} className="g3" />
      <rect x={110} y={14} width={24} height={4} rx={2} className="g1" />
      <Pill x={104} y={30} w={40} t={0.1} />
      <Pill x={118} y={42} w={26} c="p2" t={0.25} />
      <Pill x={110} y={54} w={34} c="p2" t={0.4} />
      <rect x={102} y={74} width={42} height={14} rx={4} className="ac glow slide" style={d(0.55)} />
      <path d="M70,40 H42 M50,33 L42,40 L50,47" className="ln nudge" />
      <Mk x={154} y={81} t={0.9} />
    </>
  ),
  /* ── support ── */
  deflect: (
    <>
      <circle cx={120} cy={60} r={40} className="donut g1s" />
      <circle cx={120} cy={60} r={40} className="donut acs draw" pathLength={1} transform="rotate(-90 120 60)" style={{ strokeDasharray: "0.8 1" }} />
      <circle cx={120} cy={60} r={24} className="ring" />
      <circle cx={120} cy={60} r={10} className="g2" />
      <Mk x={120} y={20} />
      <Mk x={82} y={47.6} t={0.7} />
    </>
  ),
  onePage: (
    <>
      <Card x={30} y={14} w={54} h={40} dash />
      <Card x={30} y={66} w={54} h={40} dash />
      <path d="M84,34 C110,34 110,60 134,60 M84,86 C110,86 110,60 134,60" className="ln" />
      <Travel path="M84,34 C110,34 110,60 134,60" dur={1.8} />
      <Travel path="M84,86 C110,86 110,60 134,60" dur={1.8} t={0.9} />
      <Card x={134} y={18} w={76} h={84} a t={0.2} />
      <rect x={140} y={82} width={64} height={12} rx={3} className="g2" />
      <rect x={144} y={86} width={30} height={4} rx={2} className="p typing" />
    </>
  ),
  live: (
    <>
      <path d="M30,84 L58,70 L86,78 L114,48 L142,60 L170,36 L196,44" className="line g1s draw" pathLength={1} />
      <path d="M30,96 L58,88 L86,92 L114,76 L142,82 L170,66 L196,70" className="line acs draw glow" pathLength={1} style={d(0.3)} />
      <path d="M196,22 V104" className="ln" />
      <rect x={178} y={10} width={36} height={12} rx={6} className="ac glow" />
      <circle cx={186} cy={16} r={2.5} className="wh blink" />
      <Pill x={192} y={13.5} w={16} c="pw" />
      <Mk x={196} y={44} />
      <Mk x={196} y={70} t={0.6} />
      <Base x1={26} x2={214} />
    </>
  ),
  /* ── batch transfer ── */
  oneRow: (
    <>
      <rect x={34} y={10} width={172} height={100} rx={6} className="g3" />
      {[0, 1, 2, 3, 4].map((r) => (
        <g key={r}>
          {r > 0 && <path d={`M34,${10 + r * 20} H206`} className="ln2" />}
          <Pill x={46} y={18 + r * 20} w={44} c={r === 2 ? "ac" : "p2"} />
          <Pill x={110} y={18 + r * 20} w={30} c="p2" />
          {r === 2
            ? <path d="M186,56 l8,8 M194,56 l-8,8" className="x blink" />
            : <path d={`M185,${21 + r * 20} l3,3 l6,-6`} className="tick pop" style={d(0.15 * r)} />}
        </g>
      ))}
      <rect x={38} y={51} width={164} height={18} rx={3} className="outline glow-w" />
    </>
  ),
  verified: (
    <>
      <rect x={30} y={26} width={120} height={72} rx={9} className="g2" />
      <rect x={42} y={40} width={22} height={16} rx={3} className="g1" />
      <path d="M48,40 v16 M58,40 v16 M42,48 h22" className="ln2" />
      <Pill x={42} y={70} w={70} />
      <Pill x={42} y={82} w={44} c="p2" />
      <g className="float">
        <path d="M176,24 l32,13 v24 c0,22 -16,32 -32,38 c-16,-6 -32,-16 -32,-38 v-24z" className="ac glow" />
        <path d="M164,60 l9,9 l17,-19" className="check draw" pathLength={1} style={d(0.4)} />
      </g>
    </>
  ),
  branch: (
    <>
      <path d="M30,46 L68,22 L106,46z" className="g1" />
      {[38, 54, 70, 86].map((x) => <rect key={x} x={x} y={52} width={10} height={40} rx={2} className="g2" />)}
      <rect x={30} y={94} width={76} height={8} rx={2} className="g1" />
      <path d="M112,80 C138,80 146,52 170,52" className="ln dashed" />
      <Travel path="M112,80 C138,80 146,52 170,52" dur={2} />
      <g className="float">
        <rect x={170} y={18} width={44} height={84} rx={8} className="ac glow" />
        <rect x={182} y={26} width={20} height={4} rx={2} className="wh" />
        <path d="M182,60 l7,7 l13,-14" className="check draw" pathLength={1} style={d(0.6)} />
      </g>
    </>
  ),
  /* ── trading bots ── */
  surfaces: (
    <>
      {[30, 94, 158].map((x, i) => <Card key={x} x={x} y={24} w={52} h={72} a={i === 2} t={0.15 * i} />)}
      <path d="M82,60 H94 M146,60 H158" className="ln" />
      <Travel path="M82,60 H94" dur={1.2} />
      <Travel path="M146,60 H158" dur={1.2} t={0.6} />
      <Mk x={184} y={24} t={0.5} />
    </>
  ),
  dashboard: (
    <>
      {[[40, 52, 84], [66, 44, 78], [92, 60, 96], [118, 34, 66], [144, 40, 72], [170, 24, 56], [196, 30, 60]].map(([x, t, b], i) => (
        <g key={x} className="grow-g" style={d(0.08 * i)}>
          <path d={`M${x + 5},${t - 8} V${b + 8}`} className="ln" />
          <rect x={x} y={t} width={10} height={b - t} rx={2} className={i === 5 ? "ac glow" : i % 2 ? "g1" : "g2"} />
        </g>
      ))}
      <Mk x={175} y={24} t={0.6} />
      <Base x1={30} x2={216} />
    </>
  ),
  shadowing: (
    <>
      <rect x={70} y={10} width={140} height={78} rx={6} className="g3" />
      <path d="M82,70 L102,58 L118,64 L140,42 L158,52 L190,30" className="line acs draw glow" pathLength={1} />
      <Mk x={190} y={30} />
      <rect x={134} y={88} width={12} height={12} className="g2" />
      <circle cx={34} cy={62} r={10} className="g1" />
      <path d="M16,108 a18,20 0 0 1 36,0z" className="g1" />
      <circle cx={62} cy={70} r={9} className="ac" />
      <path d="M46,112 a16,18 0 0 1 32,0z" className="ac glow" />
    </>
  ),
};

/* Gradients and the grid's fade, defined once per page by CsGlance. */
export function GlanceDefs() {
  return (
    <svg width="0" height="0" style={{ position: "absolute" }} aria-hidden focusable="false">
      <defs>
        <linearGradient id="ga-ac" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#3f95ff" />
          <stop offset="1" stopColor="#0a5fd1" />
        </linearGradient>
        <linearGradient id="ga-hot" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#ffb86b" />
          <stop offset="1" stopColor="#ff7a59" />
        </linearGradient>
        <radialGradient id="ga-fade-g">
          <stop offset="0" stopColor="#fff" />
          <stop offset="1" stopColor="#fff" stopOpacity="0" />
        </radialGradient>
        <mask id="ga-fade" maskContentUnits="objectBoundingBox">
          <rect width="1" height="1" fill="url(#ga-fade-g)" />
        </mask>
      </defs>
    </svg>
  );
}

export default function GlanceArt({ name }: { name: GlanceArtName }) {
  return (
    <svg className="cs-result-art" viewBox="0 0 240 120" aria-hidden focusable="false">
      <ellipse cx="120" cy="64" rx="96" ry="44" className="bloom" />
      <g className="grid" mask="url(#ga-fade)">
        <rect width="240" height="120" fill="transparent" />
        {Array.from({ length: 13 }, (_, i) => <path key={`v${i}`} d={`M${i * 20},0 V120`} />)}
        {Array.from({ length: 7 }, (_, i) => <path key={`h${i}`} d={`M0,${i * 20} H240`} />)}
      </g>
      {ART[name]}
    </svg>
  );
}
