/**
 * Line illustrations for the hero result cards. Thin ink strokes with one
 * accent element and faint dimension lines, drawn in a 240×120 box.
 */
import type { ReactNode } from "react";

export type GlanceArtName =
  | "questions" | "products" | "oneDesign"
  | "tickets" | "audit" | "rules"
  | "ifThen" | "testing" | "rtl"
  | "deflect" | "onePage" | "live"
  | "oneRow" | "verified" | "branch"
  | "surfaces" | "dashboard" | "shadowing";

/* dimension line with end ticks */
function Dim({ x1, y1, x2, y2 }: { x1: number; y1: number; x2: number; y2: number }) {
  const v = x1 === x2;
  return (
    <g className="f">
      <path d={`M${x1},${y1} L${x2},${y2}`} />
      <path d={v ? `M${x1 - 4},${y1} h8 M${x2 - 4},${y2} h8` : `M${x1},${y1 - 4} v8 M${x2},${y2 - 4} v8`} />
    </g>
  );
}
function Bubble({ x, y, a }: { x: number; y: number; a?: boolean }) {
  return (
    <g className={a ? "a" : undefined}>
      <path d={`M${x + 4},${y} h22 a4,4 0 0 1 4,4 v10 a4,4 0 0 1 -4,4 h-14 l-6,5 v-5 h-2 a4,4 0 0 1 -4,-4 v-10 a4,4 0 0 1 4,-4z`} />
      <path d={`M${x + 12.5},${y + 6} a2.5,2.5 0 1 1 3,2.4 v1.6 M${x + 15.5},${y + 13.4} v.1`} />
    </g>
  );
}
function Ticket({ x, y, a, q, faint }: { x: number; y: number; a?: boolean; q?: boolean; faint?: boolean }) {
  return (
    <g className={a ? "a" : faint ? "f" : undefined}>
      <path d={`M${x},${y} h30 v9 a4,4 0 0 0 0,8 v9 h-30 v-9 a4,4 0 0 0 0,-8z`} />
      {q ? (
        <path d={`M${x + 12},${y + 9} a3,3 0 1 1 3.6,2.9 v2 M${x + 15.6},${y + 18.5} v.1`} />
      ) : (
        <path d={`M${x + 8},${y + 11} h14 M${x + 8},${y + 16} h10`} />
      )}
    </g>
  );
}

const ART: Record<GlanceArtName, ReactNode> = {
  /* ── design system ── */
  questions: (
    <>
      {[0, 1, 2, 3].flatMap((r) => [0, 1].map((c) => <Bubble key={`${r}${c}`} x={14 + c * 38} y={10 + r * 26} />))}
      <path d="M100,60 h34 m-6,-5 l6,5 l-6,5" />
      {[0, 1, 2].map((r) => <Bubble key={r} x={152} y={30 + r * 26} a />)}
      <Dim x1={208} y1={30} x2={208} y2={100} />
    </>
  ),
  products: (
    <>
      <Dim x1={18} y1={14} x2={222} y2={14} />
      {[18, 72, 126, 180].map((x, i) => (
        <g key={x} className={i === 3 ? "a" : undefined}>
          <rect x={x} y={26} width={42} height={56} rx={4} />
          <path d={`M${x},${36} h42 M${x + 7},${46} h20 M${x + 7},${54} h28 M${x + 7},${62} h14`} />
          <rect x={x + 24} y={68} width={12} height={7} rx={2} />
          <path d={`M${x + 21},${82} v14`} />
        </g>
      ))}
      <rect x={14} y={96} width={212} height={12} rx={3} />
      {[30, 62, 94, 126, 158, 190].map((x) => <rect key={x} x={x} y={99} width={20} height={6} rx={1.5} className="f" />)}
    </>
  ),
  oneDesign: (
    <>
      <rect x={66} y={14} width={108} height={92} rx={6} />
      <path d="M66,26 h108" />
      <path className="a" d="M174,26 L66,106" />
      <path d="M76,38 h40 M76,48 h28 M76,58 h34" />
      <g className="a"><path d="M130,80 h34 M140,90 h24 M120,70 h44" /></g>
      <circle cx={34} cy={36} r={9} />
      <path d="M34,20 v4 M34,48 v4 M18,36 h4 M46,36 h4 M23,25 l3,3 M42,44 l3,3 M23,47 l3,-3 M42,28 l3,-3" />
      <path className="a" d="M214,27 a11,11 0 1 0 0,20 a8,8 0 1 1 0,-20z" />
      <Dim x1={66} y1={114} x2={174} y2={114} />
    </>
  ),
  /* ── error messages ── */
  tickets: (
    <>
      {[0, 1].flatMap((r) => [0, 1, 2, 3, 4].map((c) => {
        const i = r * 5 + c;
        return <Ticket key={i} x={16 + c * 44} y={16 + r * 46} q={i < 6} a={i < 3} faint={i >= 3 && i < 6} />;
      }))}
      <Dim x1={16} y1={112} x2={222} y2={112} />
    </>
  ),
  audit: (
    <>
      <rect x={44} y={30} width={74} height={84} rx={3} className="f" />
      <rect x={34} y={22} width={74} height={84} rx={3} />
      <rect x={24} y={14} width={74} height={84} rx={3} />
      <path d="M34,30 h40 M34,40 h54 M34,50 h30 M34,60 h48 M34,70 h38 M34,80 h50" />
      <g className="a">
        <circle cx={150} cy={58} r={22} />
        <path d="M166,74 l22,22" strokeWidth={2.4} />
        <path d="M140,58 l7,7 l13,-14" />
      </g>
      <Dim x1={210} y1={14} x2={210} y2={98} />
    </>
  ),
  rules: (
    <>
      {[0, 1, 2].map((i) => (
        <g key={i}>
          <rect x={30} y={14 + i * 34} width={150} height={26} rx={5} />
          <circle cx={46} cy={27 + i * 34} r={7} className="a" />
          <path d={`M62,${24 + i * 34} h${80 - i * 14} M62,${31 + i * 34} h${54 - i * 6}`} />
        </g>
      ))}
      <g className="a">
        <path d="M206,34 l14,6 v14 c0,12 -7,18 -14,21 c-7,-3 -14,-9 -14,-21 v-14z" />
        <path d="M200,52 l5,5 l9,-10" />
      </g>
      <Dim x1={30} y1={8} x2={180} y2={8} />
    </>
  ),
  /* ── rule builder ── */
  ifThen: (
    <>
      <rect x={14} y={30} width={74} height={60} rx={8} />
      <path d="M44,44 v26 a7,7 0 1 0 8,0 v-26 a4,4 0 0 0 -8,0z M48,58 v14" />
      <path d="M60,48 h14 M60,56 h10" className="f" />
      <path className="a" d="M96,60 h44 m-7,-6 l7,6 l-7,6" />
      <rect x={150} y={30} width={74} height={60} rx={8} className="a" />
      <g className="a">
        <circle cx={187} cy={60} r={3} />
        <path d="M187,57 c-2,-10 4,-14 9,-10 c3,3 -1,8 -6,10 M190,61 c10,2 13,8 8,11 c-4,2 -8,-2 -9,-8 M184,61 c-9,3 -14,-2 -11,-7 c3,-3 8,0 10,5" />
      </g>
      <Dim x1={14} y1={104} x2={224} y2={104} />
    </>
  ),
  testing: (
    <>
      <path d="M22,90 a42,42 0 0 1 84,0" />
      <path d="M30,90 h-8 M106,90 h-8 M64,48 v8 M34,60 l5,5 M94,60 l-5,5" className="f" />
      <path className="a" d="M64,90 l22,-28" strokeWidth={2} />
      <circle cx={64} cy={90} r={4} className="a" />
      <g>
        <path d="M150,20 h48 M150,100 h48 M156,20 c0,26 36,30 36,40 c0,10 -36,14 -36,40 M192,20 c0,26 -36,30 -36,40 c0,10 36,14 36,40" />
        <path className="a" d="M164,88 h20 l-10,-10z" />
      </g>
      <Dim x1={22} y1={110} x2={106} y2={110} />
      <Dim x1={214} y1={20} x2={214} y2={100} />
    </>
  ),
  rtl: (
    <>
      <rect x={84} y={8} width={72} height={106} rx={10} />
      <path d="M110,15 h20" />
      <path d="M144,32 h-44 M144,42 h-30 M144,52 h-38" />
      <rect x={100} y={64} width={44} height={22} rx={4} className="a" />
      <path className="a" d="M136,75 h-26 m6,-5 l-6,5 l6,5" />
      <path d="M144,96 h-26" />
      <path className="a" d="M60,40 h-34 m7,-6 l-7,6 l7,6" />
      <g className="a"><circle cx={194} cy={60} r={16} /><path d="M186,60 l6,6 l11,-12" /></g>
      <Dim x1={70} y1={8} x2={70} y2={114} />
    </>
  ),
  /* ── support ── */
  deflect: (
    <>
      {[0, 1, 2, 3, 4].map((i) => (
        <g key={i}>
          <Ticket x={18 + i * 42} y={30} faint={i < 4} a={i === 4} />
          {i < 4 ? <path d={`M${27 + i * 42},${76} l4,4 l8,-9`} /> : (
            <g className="a"><circle cx={203} cy={72} r={4} /><path d="M195,86 a8,8 0 0 1 16,0" /></g>
          )}
        </g>
      ))}
      <Dim x1={18} y1={18} x2={174} y2={18} />
      <Dim x1={18} y1={104} x2={216} y2={104} />
    </>
  ),
  onePage: (
    <>
      <rect x={14} y={10} width={52} height={44} rx={4} />
      <path d="M22,22 h6 M32,22 h26 M22,32 h6 M32,32 h20 M22,42 h6 M32,42 h24" />
      <rect x={14} y={66} width={52} height={44} rx={4} />
      <rect x={22} y={74} width={36} height={8} rx={2} />
      <rect x={22} y={88} width={36} height={14} rx={2} />
      <path d="M72,32 c30,0 30,26 58,26 M72,88 c30,0 30,-30 58,-30" className="f" />
      <path d="M124,53 l6,5 l-6,5" />
      <g className="a">
        <rect x={140} y={10} width={86} height={100} rx={6} />
        <rect x={150} y={22} width={66} height={12} rx={3} />
        <path d="M156,28 h2" />
      </g>
      <path d="M150,46 h44 M150,56 h56 M150,66 h38" />
      <rect x={150} y={82} width={66} height={18} rx={3} />
    </>
  ),
  live: (
    <>
      {[30, 60, 90].map((y) => <path key={y} d={`M14,${y} h212`} className="f" />)}
      <path d="M14,78 h30 l10,-20 l12,34 l14,-52 l14,46 l10,-16 h22 l10,-12 l12,24 l10,-30 l12,14 h24" />
      <g className="a">
        <circle cx={208} cy={64} r={4} />
        <circle cx={208} cy={64} r={10} opacity={0.6} />
        <circle cx={208} cy={64} r={17} opacity={0.3} />
      </g>
      <Dim x1={14} y1={110} x2={208} y2={110} />
    </>
  ),
  /* ── batch transfer ── */
  oneRow: (
    <>
      <rect x={20} y={8} width={170} height={104} rx={5} />
      {[1, 2, 3, 4].map((r) => <path key={r} d={`M20,${8 + r * 21} h170`} className="f" />)}
      <path d="M62,8 v104 M120,8 v104" className="f" />
      <rect x={20} y={50} width={170} height={21} className="a af" />
      {[0, 1, 3, 4].map((r) => <path key={r} d={`M200,${18 + r * 21} l4,4 l8,-8`} />)}
      <path className="a" d="M201,56 l9,9 M210,56 l-9,9" />
      {[0, 1, 2, 3, 4].map((r) => <path key={`l${r}`} d={`M30,${18 + r * 21} h22 M72,${18 + r * 21} h36 M130,${18 + r * 21} h${30 - (r % 2) * 8}`} />)}
    </>
  ),
  verified: (
    <>
      <rect x={18} y={22} width={130} height={80} rx={9} />
      <rect x={32} y={38} width={22} height={16} rx={3} />
      <path d="M32,70 h76 M32,84 h46" />
      <path d="M120,38 h14" className="f" />
      <g className="a">
        <path d="M178,26 l30,12 v24 c0,22 -15,32 -30,38 c-15,-6 -30,-16 -30,-38 v-24z" />
        <path d="M166,62 l9,9 l17,-19" strokeWidth={1.8} />
      </g>
      <Dim x1={18} y1={112} x2={148} y2={112} />
    </>
  ),
  branch: (
    <>
      <path d="M14,44 l40,-26 l40,26z M18,44 h72 M22,98 h64 M16,106 h76" />
      {[28, 44, 60, 76].map((x) => <path key={x} d={`M${x},50 v42`} />)}
      <path className="a" d="M100,78 c24,0 30,-30 62,-30" strokeDasharray="3 5" />
      <g className="a">
        <rect x={172} y={18} width={46} height={84} rx={8} />
        <path d="M188,26 h14" />
        <path d="M182,58 l7,7 l14,-15" />
      </g>
      <Dim x1={14} y1={114} x2={94} y2={114} />
    </>
  ),
  /* ── trading bots ── */
  surfaces: (
    <>
      {[14, 90, 166].map((x, i) => (
        <g key={x} className={i === 2 ? "a" : undefined}>
          <rect x={x} y={24} width={60} height={72} rx={6} />
          <path d={`M${x + 8},${38} h30 M${x + 8},${50} h44 M${x + 8},${62} h24 M${x + 8},${74} h38`} />
        </g>
      ))}
      <path d="M74,60 h16 M150,60 h16" className="f" />
      <Dim x1={14} y1={110} x2={226} y2={110} />
    </>
  ),
  dashboard: (
    <>
      {[30, 60, 90].map((y) => <path key={y} d={`M14,${y} h212`} className="f" />)}
      {[[30, 40, 70, 30, 80], [56, 50, 84, 44, 96], [82, 30, 58, 22, 66], [108, 44, 70, 36, 82], [134, 26, 50, 16, 58], [160, 36, 62, 28, 70], [186, 18, 42, 10, 50]].map(([x, t, b, hi, lo], i) => (
        <g key={x} className={i % 2 ? "a" : undefined}>
          <path d={`M${x + 6},${hi} V${lo}`} />
          <rect x={x} y={t} width={12} height={b - t} rx={1.5} />
        </g>
      ))}
      <Dim x1={14} y1={110} x2={226} y2={110} />
    </>
  ),
  shadowing: (
    <>
      <rect x={70} y={10} width={150} height={78} rx={6} />
      <path d="M140,88 v14 M118,104 h44" />
      <path className="a" d="M82,70 l20,-14 l16,8 l22,-24 l18,12 l24,-20" />
      <circle cx={30} cy={60} r={10} />
      <path d="M12,108 a18,20 0 0 1 36,0" />
      <circle cx={64} cy={70} r={9} className="a" />
      <path className="a" d="M48,112 a16,18 0 0 1 32,0" />
    </>
  ),
};

export default function GlanceArt({ name }: { name: GlanceArtName }) {
  return (
    <svg className="cs-result-art" viewBox="0 0 240 120" aria-hidden focusable="false">
      {ART[name]}
    </svg>
  );
}
