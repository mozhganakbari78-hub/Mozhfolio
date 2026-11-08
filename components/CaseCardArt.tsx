"use client";

import { motion } from "framer-motion";

export type CaseIllustration = "support" | "batch" | "designsystem" | "errorcopy" | "rules" | "bots";

const A = "var(--accent-color)";
const AI = "var(--accent-ink)";
const FAIL = "#e8836e";
const LINE = "rgba(255,255,255,0.10)";
const SUB = "var(--text-tertiary)";
const FG = "var(--text-primary)";
// A muted sage, so the seedlings read as plants without pulling focus.
const LEAF = "rgba(126, 178, 138, 0.62)";
const EASE = [0.16, 1, 0.3, 1] as const;

const Mono: React.CSSProperties = {
  fontFamily: "var(--font-mono), ui-monospace, monospace",
  fontSize: 10,
  letterSpacing: 0.4,
};

/**
 * One idea per card, labelled just enough to be read at a glance. Detailed
 * mock-ups turn into texture at this size; unlabelled shapes turn into
 * decoration. This sits between the two. Nothing loops.
 */
function Frame({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
      <div
        className="absolute -right-24 -top-24 w-[340px] h-[340px] rounded-full opacity-[0.10] blur-3xl pointer-events-none"
        style={{ background: A }}
        aria-hidden
      />
      <div className="relative w-[64%] max-w-[230px] py-5 md:py-0 md:w-[74%] md:max-w-[260px]">{children}</div>
    </div>
  );
}

/* Start once the card is a little way onto the screen: the default fires on
   the first pixel (the first card finished before anyone reached it), and
   -35% made it feel late. */
const VIEW = { once: true, margin: "0px 0px -15% 0px" } as const;

const rise = (delay: number) => ({
  initial: { opacity: 0, y: 8 },
  whileInView: { opacity: 1, y: 0 },
  viewport: VIEW,
  transition: { delay: delay * 0.75, duration: 0.45, ease: EASE },
});

/* Support: the answer shows up while the question is typed, so the ticket never leaves. */
function Support() {
  return (
    <Frame>
      <div className="grid gap-2">
        <motion.div className="flex items-baseline justify-between" {...rise(0)}>
          <span style={{ ...Mono, color: SUB }}>new ticket</span>
          <span style={{ ...Mono, color: AI }}>answered first</span>
        </motion.div>
        <svg viewBox="0 0 260 120" className="w-full h-auto block" aria-hidden>
          {/* the answer bubble pops up above the input */}
          <motion.g
            initial={{ opacity: 0, y: 10, scale: 0.9 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={VIEW}
            transition={{ delay: 0.45, duration: 0.5, ease: EASE }}
            style={{ transformOrigin: "60px 50px" }}
          >
            <rect x={14} y={8} width={150} height={40} rx={10} fill="var(--accent-soft)" stroke={AI} strokeWidth={1} />
            <path d="M40 48 l8 8 l6 -8 z" fill="var(--accent-soft)" stroke={AI} strokeWidth={1} strokeLinejoin="round" />
            <circle cx={30} cy={28} r={7} fill={AI} opacity={0.9} />
            <path d="M26.5 28 l2.5 2.5 l4.5 -5" stroke="#fff" strokeWidth={1.6} fill="none" strokeLinecap="round" strokeLinejoin="round" />
            <rect x={44} y={20} width={96} height={5} rx={2.5} fill={AI} opacity={0.75} />
            <rect x={44} y={31} width={68} height={5} rx={2.5} fill={AI} opacity={0.45} />
          </motion.g>
          {/* the question being typed */}
          <rect x={14} y={70} width={170} height={30} rx={8} fill="rgba(255,255,255,0.03)" stroke={LINE} strokeWidth={1} />
          <motion.rect
            x={26} y={82} height={6} rx={3} fill={SUB}
            initial={{ width: 0 }} whileInView={{ width: 92 }} viewport={VIEW}
            transition={{ duration: 0.6, ease: "linear" }}
          />
          <motion.rect x={122} y={79} width={1.6} height={12} fill={FG}
            initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={VIEW} transition={{ delay: 0.41 }} />
          {/* the ticket that no longer needs sending */}
          <motion.g
            initial={{ x: 0, y: 0, rotate: 0, opacity: 1 }}
            whileInView={{ x: 18, y: 10, rotate: 14, opacity: 0.35 }}
            viewport={VIEW}
            transition={{ delay: 0.83, duration: 0.7, ease: EASE }}
            style={{ transformOrigin: "212px 70px" }}
          >
            <path d="M192 54 h44 v10 a4 4 0 0 0 0 8 v10 h-44 v-10 a4 4 0 0 0 0 -8 z" fill="rgba(255,255,255,0.03)" stroke={SUB} strokeWidth={1} />
            <line x1={204} y1={56} x2={204} y2={80} stroke={SUB} strokeWidth={1} strokeDasharray="2 2" />
            <rect x={209} y={64} width={20} height={4} rx={2} fill={SUB} />
            <rect x={209} y={71} width={14} height={4} rx={2} fill={SUB} opacity={0.6} />
          </motion.g>
          <motion.text x={190} y={108} fill={SUB} style={{ ...Mono, fontSize: 9 }}
            initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={VIEW} transition={{ delay: 1.2 }}>
            not needed
          </motion.text>
        </svg>
      </div>
    </Frame>
  );
}

/* Batch: a conveyor of payment rows; the bad one is lifted off, the rest roll on. */
function Batch() {
  const boxes = [0, 1, 2, 3, 4, 5];
  const BAD = 3;
  return (
    <Frame>
      <div className="grid gap-2">
        <motion.div className="flex items-baseline justify-between" {...rise(0)}>
          <span style={{ ...Mono, color: SUB }}>54 rows</span>
          <span style={{ ...Mono, color: AI }}>53 paid</span>
        </motion.div>
        <svg viewBox="0 0 260 120" className="w-full h-auto block" aria-hidden>
          {/* belt and rollers */}
          <rect x={6} y={84} width={248} height={10} rx={5} fill="rgba(255,255,255,0.03)" stroke={LINE} strokeWidth={1} />
          {Array.from({ length: 9 }, (_, i) => (
            <circle key={i} cx={20 + i * 28} cy={89} r={2.5} fill={LINE} />
          ))}
          {/* boxes ride along the belt */}
          {boxes.map((i) => {
            const bad = i === BAD;
            const x = 14 + i * 36;
            return (
              <motion.g
                key={i}
                initial={{ x: -30, opacity: 0 }}
                whileInView={bad ? { x: 0, y: -46, opacity: 1 } : { x: 0, opacity: 1 }}
                viewport={VIEW}
                transition={bad
                  ? { delay: 0.11 + i * 0.08, duration: 0.9, ease: EASE, y: { delay: 0.75, duration: 0.5, ease: EASE } }
                  : { delay: 0.11 + i * 0.08, duration: 0.6, ease: EASE }}
              >
                <rect x={x} y={62} width={26} height={22} rx={3}
                  fill={bad ? "rgba(232,131,110,0.18)" : "rgba(255,255,255,0.04)"}
                  stroke={bad ? FAIL : SUB} strokeWidth={1} />
                <line x1={x + 13} y1={62} x2={x + 13} y2={70} stroke={bad ? FAIL : SUB} strokeWidth={1} />
                {bad && <text x={x + 13} y={78} textAnchor="middle" fill={FAIL} style={{ ...Mono, fontSize: 9 }}>!</text>}
              </motion.g>
            );
          })}
          {/* the little arm that lifts the bad row off */}
          <motion.g initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={VIEW} transition={{ delay: 0.68, duration: 0.3 }}>
            <line x1={135} y1={0} x2={135} y2={14} stroke={LINE} strokeWidth={1.5} />
            <path d="M127 14 h16 M127 14 v4 M143 14 v4" stroke={FAIL} strokeWidth={1.2} fill="none" />
          </motion.g>
          <motion.text x={166} y={30} fill={FAIL} style={{ ...Mono, fontSize: 9 }}
            initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={VIEW} transition={{ delay: 1.12 }}>
            fix this one
          </motion.text>
          {/* the rest arrive */}
          <motion.g initial={{ opacity: 0, x: -6 }} whileInView={{ opacity: 1, x: 0 }} viewport={VIEW} transition={{ delay: 1.05, duration: 0.4 }}>
            <path d="M232 112 l10 0 m-4 -4 l4 4 l-4 4" stroke={AI} strokeWidth={1.4} fill="none" strokeLinecap="round" strokeLinejoin="round" />
            <text x={6} y={115} fill={SUB} style={{ ...Mono, fontSize: 9 }}>the rest keep going</text>
          </motion.g>
        </svg>
      </div>
    </Frame>
  );
}

/* Design system: same bricks, three brand towers. */
const BW = 22, BH = 10, GROUND = 112;
const Brick = ({ x, y, c, delay }: { x: number; y: number; c: string; delay: number }) => (
  <motion.g
    initial={{ opacity: 0, y: -14 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={VIEW}
    transition={{ delay, duration: 0.35, ease: EASE }}
  >
    <rect x={x + 4} y={y - 3} width={5} height={3} rx={1} fill={c} opacity={0.85} />
    <rect x={x + 13} y={y - 3} width={5} height={3} rx={1} fill={c} opacity={0.85} />
    <rect x={x} y={y} width={BW} height={BH} rx={2} fill={c} opacity={0.5} stroke={c} strokeWidth={1} />
  </motion.g>
);

function DesignSystem() {
  // Same bricks, four buildings: one set of parts builds every product.
  const towers = [
    { x: 34, rows: 4, c: "#5575B1" },
    { x: 86, rows: 6, c: "#16B2FF" },
    { x: 138, rows: 3, c: "#F9B741" },
    { x: 190, rows: 2, c: "#339599" },
  ];
  const starts = towers.map((_, i) => towers.slice(0, i).reduce((n, t) => n + t.rows, 0));
  return (
    <Frame>
      <div className="grid gap-2">
        <motion.div className="flex items-baseline justify-between" {...rise(0)}>
          <span style={{ ...Mono, color: SUB }}>same bricks</span>
          <span style={{ ...Mono, color: AI }}>4 products</span>
        </motion.div>
        <svg viewBox="0 0 260 120" className="w-full h-auto block" aria-hidden>
          {towers.map((t, ti) =>
            Array.from({ length: t.rows }, (_, r) => (
              <Brick key={`${t.x}-${r}`} x={t.x} y={GROUND - BH - r * (BH + 3)} c={t.c} delay={0.2 + 0.07 * (starts[ti] + r)} />
            ))
          )}
          {/* windows */}
          {towers.map((t, i) => (
            <motion.rect
              key={`w${i}`} x={t.x + 8} y={GROUND - BH - (BH + 3) + 3} width={6} height={5} rx={1} fill={FG} opacity={0.7}
              initial={{ opacity: 0 }} whileInView={{ opacity: 0.7 }} viewport={VIEW} transition={{ delay: 0.98 + i * 0.1 }}
            />
          ))}
          {/* crane over the purple tower, lowering one more brick */}
          <motion.g initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={VIEW} transition={{ delay: 0.68, duration: 0.4 }}>
            <line x1={240} y1={GROUND} x2={240} y2={8} stroke={LINE} strokeWidth={1.5} />
            <line x1={186} y1={8} x2={254} y2={8} stroke={LINE} strokeWidth={1.5} />
            <line x1={240} y1={8} x2={254} y2={20} stroke={LINE} strokeWidth={1} />
          </motion.g>
          <motion.g
            initial={{ y: -20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={VIEW}
            transition={{ delay: 0.83, duration: 0.7, ease: EASE }}
          >
            <line x1={201} y1={8} x2={201} y2={58} stroke={SUB} strokeWidth={1} strokeDasharray="2 2" />
            <rect x={195} y={58} width={5} height={3} rx={1} fill="#339599" opacity={0.85} />
            <rect x={204} y={58} width={5} height={3} rx={1} fill="#339599" opacity={0.85} />
            <rect x={190} y={61} width={BW} height={BH} rx={2} fill="#339599" opacity={0.5} stroke="#339599" strokeWidth={1} />
          </motion.g>
          <line x1={0} x2={260} y1={GROUND + 0.5} y2={GROUND + 0.5} stroke={LINE} strokeWidth={1.2} />
        </svg>
        <motion.span style={{ ...Mono, color: SUB }} {...rise(1.4)}>
          one set of parts, every product built from it
        </motion.span>
      </div>
    </Frame>
  );
}

/* Error copy: a dead-end sign fades, a signpost points to the next step. */
function ErrorCopy() {
  return (
    <Frame>
      <div className="grid gap-2">
        <motion.div className="flex items-baseline justify-between" {...rise(0)}>
          <span style={{ ...Mono, color: SUB }}>transaction failed</span>
          <span style={{ ...Mono, color: AI }}>now what?</span>
        </motion.div>
        <svg viewBox="0 0 260 120" className="w-full h-auto block" aria-hidden>
          <line x1={0} x2={260} y1={112.5} y2={112.5} stroke={LINE} strokeWidth={1.2} />
          {/* the old dead-end sign, fading out */}
          <motion.g
            initial={{ opacity: 1 }} whileInView={{ opacity: 0.35 }} viewport={VIEW}
            transition={{ delay: 0.38, duration: 0.6 }}
          >
            <line x1={48} y1={58} x2={48} y2={112} stroke={SUB} strokeWidth={2} />
            <rect x={22} y={30} width={52} height={30} rx={5} fill="rgba(232,131,110,0.14)" stroke={FAIL} strokeWidth={1} />
            <text x={48} y={50} textAnchor="middle" fill={FAIL} style={{ ...Mono, fontSize: 13 }}>✕</text>
            <text x={48} y={22} textAnchor="middle" fill={SUB} style={{ ...Mono, fontSize: 9 }}>error 4012</text>
          </motion.g>
          {/* the signpost: what happened, and where to go next */}
          <motion.line x1={170} y1={30} x2={170} y2={112} stroke={SUB} strokeWidth={2}
            initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={VIEW} transition={{ delay: 0.45, duration: 0.4 }} />
          <motion.g initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }} viewport={VIEW} transition={{ delay: 0.68, duration: 0.45, ease: EASE }}>
            <path d="M94 32 h74 v18 h-74 l-9 -9 z" fill="rgba(255,255,255,0.04)" stroke={SUB} strokeWidth={1} />
            <text x={132} y={44} textAnchor="middle" fill={FG} style={{ ...Mono, fontSize: 8 }}>what happened</text>
          </motion.g>
          <motion.g initial={{ opacity: 0, x: 10 }} whileInView={{ opacity: 1, x: 0 }} viewport={VIEW} transition={{ delay: 0.86, duration: 0.45, ease: EASE }}>
            <path d="M172 60 h76 l9 9 l-9 9 h-76 z" fill="var(--accent-soft)" stroke={AI} strokeWidth={1} />
            <text x={210} y={72} textAnchor="middle" fill={FG} style={{ ...Mono, fontSize: 8 }}>what to do next</text>
          </motion.g>
          <motion.circle cx={170} cy={28} r={3} fill={AI}
            initial={{ scale: 0 }} whileInView={{ scale: 1 }} viewport={VIEW} transition={{ delay: 1.05 }} />
        </svg>
      </div>
    </Frame>
  );
}

/* Rule builder: the logic underneath, three plain blocks on top. */
/* Rules: a greenhouse, a live reading inside it, and the one-sentence rule it drives. */
function Rules() {
  // Arched greenhouse in outline, with ribs and a row of seedlings.
  const ribs = [58, 94, 130, 166, 202];
  const plants = [40, 76, 112, 148, 184, 220];
  return (
    <Frame>
      <div className="grid gap-2.5">
        <div className="relative">
          <svg viewBox="0 0 260 120" className="w-full h-auto block" aria-hidden>
            <motion.path
              d="M14 112 V62 Q14 14 130 14 Q246 14 246 62 V112"
              fill="rgba(255,255,255,0.02)"
              stroke={LINE}
              strokeWidth={1.2}
              initial={{ pathLength: 0, opacity: 0 }}
              whileInView={{ pathLength: 1, opacity: 1 }}
              viewport={VIEW}
              transition={{ duration: 0.9, ease: EASE }}
            />
            {ribs.map((x, k) => (
              <motion.line
                key={x}
                x1={x}
                x2={x}
                y1={x === 130 ? 14 : 20 + Math.abs(130 - x) * 0.16}
                y2={112}
                stroke={LINE}
                strokeWidth={0.8}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={VIEW}
                transition={{ delay: 0.22 + k * 0.05, duration: 0.4 }}
              />
            ))}
            <line x1={4} x2={256} y1={112} y2={112} stroke={LINE} strokeWidth={1.2} />
            {plants.map((x, k) => (
              <motion.g
                key={x}
                stroke={LEAF}
                strokeWidth={1.2}
                strokeLinecap="round"
                fill="none"
                initial={{ opacity: 0, y: 4 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={VIEW}
                transition={{ delay: 0.34 + k * 0.05, duration: 0.4, ease: EASE }}
              >
                <path d={`M${x} 112 V100`} />
                <path d={`M${x} 104 q-6 -2 -7 -8 q6 1 7 8`} />
                <path d={`M${x} 101 q6 -2 7 -8 q-6 1 -7 8`} />
              </motion.g>
            ))}
            {/* the sensor, with its reading */}
            <motion.g
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={VIEW}
              transition={{ delay: 0.52, duration: 0.4 }}
            >
              <circle cx={176} cy={58} r={9} fill="var(--accent-soft)" />
              <circle cx={176} cy={58} r={3.2} fill={AI} />
              <line x1={176} x2={176} y1={61} y2={92} stroke={AI} strokeWidth={0.8} strokeDasharray="2 3" />
            </motion.g>
          </svg>
          <motion.div
            className="absolute rounded-md px-2 py-1"
            style={{ left: "14%", top: "34%", border: `1px solid ${AI}`, background: "var(--accent-soft)" }}
            {...rise(0.8)}
          >
            <span style={{ ...Mono, color: FG }}>humidity · 34% now</span>
          </motion.div>
        </div>

        <motion.div className="flex items-center gap-1.5" {...rise(1)}>
          <span
            className="rounded-md px-2 py-1"
            style={{ ...Mono, color: SUB, border: `1px solid ${LINE}`, background: "rgba(255,255,255,0.02)" }}
          >
            if &gt; 30
          </span>
          <span style={{ ...Mono, color: SUB }}>→</span>
          <span
            className="rounded-md px-2 py-1 flex items-center gap-1.5"
            style={{ ...Mono, color: FG, border: `1px solid ${AI}`, background: "var(--accent-soft)" }}
          >
            <span className="w-1.5 h-1.5 rounded-full" style={{ background: AI }} />
            fan on
          </span>
        </motion.div>
      </div>
    </Frame>
  );
}

/* Bots: one bot card, Running. A short candlestick chart of the pair with
   one buy and one sell marked on it, so it reads as a bot trading, not just
   a price; the won / lost count and P&L underneath. Kept sparse to match
   the other cards. */
const GAIN = "#6cc58f";
// [open, close, high, low] in chart y (smaller is higher); green when close < open
const CANDLES: [number, number, number, number][] = [
  [62, 54, 50, 68], [54, 60, 50, 64], [60, 46, 42, 63], [46, 38, 33, 50],
  [38, 44, 34, 48], [44, 30, 26, 47], [30, 22, 17, 34], [22, 26, 18, 30],
];
const cx = (i: number) => 16 + i * 32.5;
// stretch the moves so the bodies read at card size
const sy = (y: number) => 8 + (y - 14) * 1.3;
// one round trip: bought low, sold high
const TRADES: [number, "B" | "S"][] = [[1, "B"], [6, "S"]];
function BotGlyph() {
  return (
    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round" aria-hidden>
      <rect x="1.8" y="3.6" width="8.4" height="6.4" rx="1.8" />
      <path d="M6 3.6V1.8" />
      <circle cx="6" cy="1.4" r=".5" fill="currentColor" stroke="none" />
      <circle cx="4.4" cy="6.6" r=".75" fill="currentColor" stroke="none" />
      <circle cx="7.6" cy="6.6" r=".75" fill="currentColor" stroke="none" />
      <path d="M1.8 6.8H1M10.2 6.8H11" />
    </svg>
  );
}
function Bots() {
  return (
    <Frame>
      <div className="grid gap-3">
        <motion.div className="flex items-center justify-between" {...rise(0)}>
          <span className="flex items-center gap-2" style={{ ...Mono, color: SUB }}>
            <span
              className="w-5 h-5 rounded-md flex items-center justify-center"
              style={{ border: "1px solid rgba(108,197,143,0.4)", background: "rgba(108,197,143,0.10)", color: GAIN }}
            >
              <BotGlyph />
            </span>
            <span><span style={{ color: FG }}>Bot</span> · BTC/USDT</span>
          </span>
          <span
            className="rounded-full px-2 py-0.5 flex items-center gap-1.5"
            style={{ ...Mono, color: GAIN, border: "1px solid rgba(108,197,143,0.45)", background: "rgba(108,197,143,0.10)" }}
          >
            <span className="relative flex w-1.5 h-1.5">
              <span className="absolute inset-0 rounded-full animate-ping" style={{ background: GAIN, opacity: 0.6 }} />
              <span className="relative w-1.5 h-1.5 rounded-full" style={{ background: GAIN }} />
            </span>
            Running
          </span>
        </motion.div>
        <svg viewBox="0 0 260 90" className="w-full h-auto block overflow-visible" aria-hidden>
          {/* candles, left to right */}
          {CANDLES.map(([o0, c0, h0, l0], i) => {
            const [o, c, h, l] = [o0, c0, h0, l0].map(sy);
            const up = c < o;
            const col = up ? GAIN : FAIL;
            return (
              <motion.g
                key={i}
                initial={{ opacity: 0, y: 6 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={VIEW}
                transition={{ delay: 0.15 + i * 0.06, duration: 0.35, ease: EASE }}
              >
                <line x1={cx(i)} x2={cx(i)} y1={h} y2={l} stroke={col} strokeWidth={1.3} strokeLinecap="round" />
                <rect
                  x={cx(i) - 7}
                  y={Math.min(o, c)}
                  width={14}
                  height={Math.max(3, Math.abs(c - o))}
                  rx={1.2}
                  fill={col}
                  fillOpacity={up ? 0.9 : 0.85}
                />
              </motion.g>
            );
          })}
          {/* the bot's trades on the chart */}
          {TRADES.map(([i, side], k) => {
            const [h, l] = [CANDLES[i][2], CANDLES[i][3]].map(sy);
            const buy = side === "B";
            const y = buy ? l + 9 : h - 9;
            const col = buy ? GAIN : FAIL;
            return (
              <motion.g
                key={k}
                initial={{ opacity: 0, scale: 0.6 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={VIEW}
                style={{ transformOrigin: `${cx(i)}px ${y}px` }}
                transition={{ delay: 0.85 + k * 0.12, type: "spring", stiffness: 420, damping: 20 }}
              >
                <circle cx={cx(i)} cy={y} r={6} fill="#141518" stroke={col} strokeWidth={1.1} />
                <text x={cx(i)} y={y + 2.6} textAnchor="middle" fill={col} style={{ ...Mono, fontSize: 7.5, fontWeight: 700 }}>
                  {side}
                </text>
              </motion.g>
            );
          })}
        </svg>
        <motion.div {...rise(1.1)}>
          <div className="flex items-baseline justify-between">
            <span style={{ ...Mono, color: SUB }}>31 won · 14 lost</span>
            <span style={{ ...Mono, color: GAIN }}>P&amp;L +412.80</span>
          </div>
        </motion.div>
      </div>
    </Frame>
  );
}

const map: Record<CaseIllustration, () => React.JSX.Element> = {
  support: Support,
  batch: Batch,
  designsystem: DesignSystem,
  errorcopy: ErrorCopy,
  rules: Rules,
  bots: Bots,
};

export default function CaseCardArt({ name }: { name: CaseIllustration }) {
  const C = map[name];
  return <C />;
}
