/**
 * The error case as one machine. On the left, the pile: about 2,000 error
 * messages, each written one by one, floating above it as the dead ends users
 * saw. One message at a time drops into the machine, which checks it against
 * the three rules (the lights on its front). What comes out on the right is
 * the message the user now sees: what happened and what to do next. Technical
 * errors drop into the logs bin instead. Same isometric line art as the
 * ticket machine in the support case, so it reuses the gh-* and hd-* styles;
 * its own parts are .em-* in case-study.css.
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

/* flat content drawn onto a box face: the front-left (+y) face, the
   front-right (+x) face, or the top */
const faceY = (at: Pt, x: number, y: number, z: number) => {
  const [ex, ey] = iso(at[0], at[1])(x, y, z);
  return `matrix(${C} 0.5 0 1 ${ex} ${ey})`;
};
const faceX = (at: Pt, x: number, y: number, z: number) => {
  const [ex, ey] = iso(at[0], at[1])(x, y, z);
  return `matrix(${C} -0.5 0 1 ${ex} ${ey})`;
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
const PILE: Pt = [250, 560];
const LOGS: Pt = [880, 600];

/* the dead ends users used to see, floating over the pile */
const CHIPS: { t: string; x: number; y: number }[] = [
  { t: "Error", x: 70, y: 150 },
  { t: "ERR_4012", x: 250, y: 104 },
  { t: "You are not the creator of the request", x: 40, y: 236 },
  { t: "Operation failed", x: 200, y: 316 },
  { t: "Invalid input parameters", x: 52, y: 394 },
];
const chipW = (t: string) => t.length * 9.4 + 30;

/* the scattered sheets in the pile: x, y, z */
const SHEETS: [number, number, number][] = [
  [-70, -40, 0], [-20, -10, 4], [-60, 10, 8], [-10, -50, 12], [-40, -20, 16], [-30, -30, 20],
];

const RULES = ["says what happened", "gives the next step", "never blames"];

export default function ErrorMachineScene() {
  return (
    <figure
      className="cs-scene gh-scene hd-scene em-scene"
      aria-label="Before: a pile of about 2,000 error messages, each a dead end, such as 'Error', 'ERR_4012' and 'You are not the creator of the request'. One at a time they go through a machine that checks the three rules: say what happened, give the next step, never blame. Out comes the message the user now sees: 'The account details weren't entered correctly. Please check them and try again.' Technical errors drop into the logs instead."
    >
      <svg viewBox="0 70 1200 620" role="img" aria-hidden>
        <defs>
          <radialGradient id="em-fade" cx="50%" cy="55%" r="60%">
            <stop offset="0%" stopColor="#fff" stopOpacity="1" />
            <stop offset="100%" stopColor="#fff" stopOpacity="0" />
          </radialGradient>
          <mask id="em-grid-mask">
            <rect x="0" y="0" width="1200" height="720" fill="url(#em-fade)" />
          </mask>
        </defs>

        {/* floor */}
        <g className="hd-grid" mask="url(#em-grid-mask)">
          {Array.from({ length: 25 }, (_, k) => {
            const P = iso(600, 420);
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

        {/* BEFORE: the pile of one-off messages */}
        {SHEETS.map(([x, y, z], i) => (
          <Box key={i} at={PILE} x={x} y={y} z={z} w={110} d={70} h={4} className="em-sheet" />
        ))}
        <g transform={faceTop(PILE, -30, -30, 24)}>
          <rect x={12} y={12} width={50} height={6} rx={3} className="em-ink-bad" />
          <rect x={12} y={26} width={80} height={5} rx={2.5} className="em-ink" />
          <rect x={12} y={38} width={64} height={5} rx={2.5} className="em-ink" />
        </g>
        {CHIPS.map((c, i) => (
          <g key={c.t} className={`em-chip b${i % 3}`}>
            <rect x={c.x} y={c.y} width={chipW(c.t)} height={36} rx={18} />
            <text x={c.x + 15} y={c.y + 24}>{c.t}</text>
          </g>
        ))}
        <Label x={86} y={626} k="BEFORE" v="~2,000 one-off messages" />

        {/* one message on its way into the machine */}
        <g className="em-fly">
          <rect x={-34} y={-12} width={68} height={24} rx={5} />
          <rect x={-24} y={-4} width={30} height={5} rx={2.5} className="em-ink-bad" />
        </g>

        {/* the machine */}
        <Box at={MACHINE} x={-110} y={-80} w={220} d={160} h={230} />
        {/* intake slot on top */}
        <g transform={faceTop(MACHINE, -110, -80, 230)}>
          <rect x={50} y={64} width={120} height={22} rx={4} className="em-slot" />
        </g>
        {/* front panel: the three rules */}
        <g transform={faceY(MACHINE, -110, 80, 230)}>
          <text x={18} y={30} className="tm-brand">Error check</text>
          <text x={18} y={58} className="tm-screen-k">3 rules</text>
          {RULES.map((t, i) => (
            <g key={t}>
              <circle cx={30} cy={84 + i * 34} r={9} className={`em-led l${i}`} />
              <text x={48} y={89 + i * 34} className="em-rule">{t}</text>
            </g>
          ))}
          <rect x={16} y={192} width={188} height={20} rx={4} className="tm-btn" />
        </g>
        {/* output slot on the right face */}
        <g transform={faceX(MACHINE, 110, 80, 230)}>
          <rect x={24} y={120} width={112} height={14} rx={3} className="em-slot" />
        </g>

        {/* AFTER: what the user now sees */}
        <path d="M712 418 C 770 410, 800 300, 850 292" className="em-wire" />
        <g className="em-out">
          <rect x={850} y={150} width={320} height={176} rx={14} className="em-card" />
          <text x={872} y={182} className="tm-screen-k">What the user sees</text>
          <text x={872} y={214} className="em-msg-h">The account details weren&apos;t</text>
          <text x={872} y={238} className="em-msg-h">entered correctly.</text>
          <text x={872} y={266} className="em-msg-b">Please check them and try again.</text>
          <rect x={872} y={282} width={136} height={30} rx={15} className="em-btn" />
          <text x={940} y={302} textAnchor="middle" className="em-btn-t">Check details</text>
        </g>

        {/* technical errors go to the logs, not the user */}
        <Box at={LOGS} x={-50} y={-40} w={100} d={80} h={56} className="em-bin" />
        <g className="em-drop">
          <rect x={-26} y={-9} width={52} height={18} rx={4} />
        </g>
        <Label x={968} y={598} k="TECHNICAL ERRORS" v="to the logs" />
      </svg>
    </figure>
  );
}
