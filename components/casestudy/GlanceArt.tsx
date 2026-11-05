/**
 * Small illustrations for the hero result cards: solid grey shapes on a
 * faint grid, one element in the accent blue, marker dots with a white ring.
 * Drawn in a 240×120 box.
 */
import type { ReactNode } from "react";

export type GlanceArtName =
  | "questions" | "products" | "oneDesign"
  | "tickets" | "audit" | "rules"
  | "ifThen" | "testing" | "rtl"
  | "deflect" | "onePage" | "live"
  | "oneRow" | "verified" | "branch"
  | "surfaces" | "dashboard" | "shadowing";

const Mk = ({ x, y }: { x: number; y: number }) => <circle cx={x} cy={y} r={5} className="mk" />;
const Pill = ({ x, y, w, c = "p" }: { x: number; y: number; w: number; c?: string }) => (
  <rect x={x} y={y} width={w} height={5} rx={2.5} className={c} />
);
const Base = ({ y = 104, x1 = 30, x2 = 210 }: { y?: number; x1?: number; x2?: number }) => (
  <path d={`M${x1},${y} H${x2}`} className="ln" />
);

/* A window-like card: body, header strip, two text lines. */
function Card({ x, y, w, h, a, dash }: { x: number; y: number; w: number; h: number; a?: boolean; dash?: boolean }) {
  return (
    <g>
      <rect x={x} y={y} width={w} height={h} rx={5} className={dash ? "dash" : "g3"} />
      {!dash && <rect x={x} y={y} width={w} height={8} rx={4} className={a ? "ac" : "g1"} />}
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
        <rect key={i} x={46 + i * 30} y={104 - h} width={20} height={h} rx={3} className={i < 2 ? "g1" : "dash"} />
      ))}
      <rect x={196} y={104 - 30} width={20} height={30} rx={3} className="ac" />
      <Mk x={206} y={74} />
      <Mk x={56} y={26} />
      <Base x1={36} x2={226} />
    </>
  ),
  products: (
    <>
      {[34, 80, 126, 172].map((x, i) => <Card key={x} x={x} y={24} w={38} h={50} a={i === 3} />)}
      <rect x={30} y={84} width={184} height={16} rx={4} className="g2" />
      {[38, 70, 102, 134, 166].map((x) => <rect key={x} x={x} y={89} width={24} height={6} rx={2} className="g1" />)}
      <Mk x={191} y={28} />
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
          <rect x={132} y={84} width={36} height={12} rx={3} className="ac" />
        </g>
      ))}
      <path d="M180,14 L60,106" className="ln" />
      <Mk x={120} y={60} />
    </>
  ),
  /* ── error messages ── */
  tickets: (
    <>
      {Array.from({ length: 10 }, (_, i) => {
        const x = 40 + (i % 5) * 34, y = 22 + Math.floor(i / 5) * 40;
        const c = i < 3 ? "ac" : i < 6 ? "dash" : "g2";
        return <rect key={i} x={x} y={y} width={26} height={30} rx={4} className={c} />;
      })}
      <Mk x={53} y={22} />
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
          <Pill x={46} y={45 + r * 18} w={r === 1 ? 54 : 40 + (r % 2) * 10} c={r === 1 ? "ac" : "p2"} />
          <Pill x={170} y={45 + r * 18} w={22} c="p2" />
        </g>
      ))}
      <rect x={40} y={58} width={70} height={16} rx={3} className="outline" />
    </>
  ),
  rules: (
    <>
      {[0, 1, 2].map((i) => (
        <g key={i}>
          <rect x={44} y={16 + i * 32} width={152} height={24} rx={5} className="g3" />
          <rect x={50} y={22 + i * 32} width={12} height={12} rx={3} className="ac" />
          <Pill x={70} y={25 + i * 32} w={86 - i * 18} />
        </g>
      ))}
      <Mk x={196} y={28} />
    </>
  ),
  /* ── rule builder ── */
  ifThen: (
    <>
      <rect x={34} y={30} width={64} height={60} rx={8} className="g2" />
      <rect x={60} y={42} width={8} height={30} rx={4} className="g1" />
      <circle cx={64} cy={74} r={7} className="g1" />
      <path d="M98,60 H142" className="ln" />
      <rect x={142} y={30} width={64} height={60} rx={8} className="ac" />
      <g className="wh">
        {[0, 120, 240].map((r) => (
          <path key={r} d="M174,60 C166,48 168,40 175,39 C182,40 180,50 174,60z" transform={`rotate(${r} 174 60)`} />
        ))}
      </g>
      <Mk x={120} y={60} />
    </>
  ),
  testing: (
    <>
      <path d="M30,92 A44,44 0 0 1 118,92" className="arc g2s" />
      <path d="M30,92 A44,44 0 0 1 96,54" className="arc acs" />
      <path d="M74,92 L98,62" className="needle" />
      <Mk x={74} y={92} />
      <path d="M150,20 H202 L182,58 L202,100 H150 L170,58z" className="g2" />
      <path d="M160,100 L176,72 L192,100z" className="ac" />
      <path d="M164,26 H188 L176,48z" className="g1" />
    </>
  ),
  rtl: (
    <>
      <rect x={90} y={8} width={64} height={104} rx={10} className="g3" />
      <rect x={110} y={14} width={24} height={4} rx={2} className="g1" />
      <Pill x={104} y={30} w={40} />
      <Pill x={118} y={42} w={26} c="p2" />
      <Pill x={110} y={54} w={34} c="p2" />
      <rect x={102} y={74} width={42} height={14} rx={4} className="ac" />
      <path d="M70,40 H42 M50,33 L42,40 L50,47" className="ln" />
      <Mk x={154} y={81} />
    </>
  ),
  /* ── support ── */
  deflect: (
    <>
      <circle cx={120} cy={60} r={40} className="donut g1s" />
      <path d="M120,20 A40,40 0 1 1 82,47.6" className="donut acs" />
      <circle cx={120} cy={60} r={22} className="ring" />
      <Mk x={120} y={20} />
      <Mk x={82} y={47.6} />
    </>
  ),
  onePage: (
    <>
      <Card x={30} y={14} w={54} h={40} dash />
      <Card x={30} y={66} w={54} h={40} dash />
      <path d="M84,34 C110,34 110,60 134,60 M84,86 C110,86 110,60 134,60" className="ln" />
      <Card x={134} y={18} w={76} h={84} a />
      <rect x={140} y={82} width={64} height={12} rx={3} className="g2" />
      <Mk x={134} y={60} />
    </>
  ),
  live: (
    <>
      <path d="M30,84 L58,70 L86,78 L114,48 L142,60 L170,36 L196,44" className="line g1s" />
      <path d="M30,96 L58,88 L86,92 L114,76 L142,82 L170,66 L196,70" className="line acs" strokeDasharray="0" />
      <path d="M196,24 V104" className="ln" />
      <Mk x={196} y={44} />
      <Mk x={196} y={70} />
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
          <circle cx={190} cy={20 + r * 20} r={4} className={r === 2 ? "ac" : "g1"} />
        </g>
      ))}
      <rect x={38} y={51} width={164} height={18} rx={3} className="outline" />
    </>
  ),
  verified: (
    <>
      <rect x={30} y={26} width={120} height={72} rx={9} className="g2" />
      <rect x={42} y={40} width={22} height={16} rx={3} className="g1" />
      <Pill x={42} y={70} w={70} />
      <Pill x={42} y={82} w={44} c="p2" />
      <path d="M176,24 l32,13 v24 c0,22 -16,32 -32,38 c-16,-6 -32,-16 -32,-38 v-24z" className="ac" />
      <path d="M164,60 l9,9 l17,-19" className="check" />
    </>
  ),
  branch: (
    <>
      <path d="M30,46 L68,22 L106,46z" className="g1" />
      {[38, 54, 70, 86].map((x) => <rect key={x} x={x} y={52} width={10} height={40} rx={2} className="g2" />)}
      <rect x={30} y={94} width={76} height={8} rx={2} className="g1" />
      <path d="M112,80 C138,80 146,52 170,52" className="ln dashed" />
      <rect x={170} y={18} width={44} height={84} rx={8} className="ac" />
      <rect x={180} y={30} width={24} height={4} rx={2} className="wh" />
      <Mk x={170} y={52} />
    </>
  ),
  /* ── trading bots ── */
  surfaces: (
    <>
      {[30, 94, 158].map((x, i) => <Card key={x} x={x} y={24} w={52} h={72} a={i === 2} />)}
      <path d="M82,60 H94 M146,60 H158" className="ln" />
      <Mk x={184} y={24} />
    </>
  ),
  dashboard: (
    <>
      {[[40, 52, 84], [66, 44, 78], [92, 60, 96], [118, 34, 66], [144, 40, 72], [170, 24, 56], [196, 30, 60]].map(([x, t, b], i) => (
        <g key={x}>
          <path d={`M${x + 5},${t - 8} V${b + 8}`} className="ln" />
          <rect x={x} y={t} width={10} height={b - t} rx={2} className={i === 5 ? "ac" : i % 2 ? "g1" : "g2"} />
        </g>
      ))}
      <Mk x={175} y={24} />
      <Base x1={30} x2={216} />
    </>
  ),
  shadowing: (
    <>
      <rect x={70} y={10} width={140} height={78} rx={6} className="g3" />
      <path d="M82,70 L102,58 L118,64 L140,42 L158,52 L190,30" className="line acs" />
      <Mk x={190} y={30} />
      <rect x={134} y={88} width={12} height={12} className="g2" />
      <circle cx={34} cy={62} r={10} className="g1" />
      <path d="M16,108 a18,20 0 0 1 36,0z" className="g1" />
      <circle cx={62} cy={70} r={9} className="ac" />
      <path d="M46,112 a16,18 0 0 1 32,0z" className="ac" />
    </>
  ),
};

export default function GlanceArt({ name }: { name: GlanceArtName }) {
  const grid = `ga-grid-${name}`;
  return (
    <svg className="cs-result-art" viewBox="0 0 240 120" aria-hidden focusable="false">
      <defs>
        <radialGradient id={`${grid}-g`}>
          <stop offset="0" stopColor="#fff" stopOpacity="1" />
          <stop offset="1" stopColor="#fff" stopOpacity="0" />
        </radialGradient>
        <mask id={grid}>
          <rect width="240" height="120" fill={`url(#${grid}-g)`} />
        </mask>
      </defs>
      <g className="grid" mask={`url(#${grid})`}>
        {Array.from({ length: 13 }, (_, i) => <path key={`v${i}`} d={`M${i * 20},0 V120`} />)}
        {Array.from({ length: 7 }, (_, i) => <path key={`h${i}`} d={`M0,${i * 20} H240`} />)}
      </g>
      {ART[name]}
    </svg>
  );
}
