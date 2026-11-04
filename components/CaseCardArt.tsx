"use client";

import { motion } from "framer-motion";

export type CaseIllustration = "support" | "batch" | "designsystem" | "errorcopy" | "rules";

const A = "var(--accent-color)";
const AI = "var(--accent-ink)";
const FAIL = "#e8836e";
const LINE = "rgba(255,255,255,0.10)";
const SUB = "var(--text-tertiary)";
const FG = "var(--text-primary)";
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
      <div className="relative w-[74%] max-w-[260px]">{children}</div>
    </div>
  );
}

const rise = (delay: number) => ({
  initial: { opacity: 0, y: 8 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { delay, duration: 0.45, ease: EASE },
});

/* Support: the question is still being typed and the answer is already there. */
function Support() {
  return (
    <Frame>
      <div className="grid gap-2.5">
        <motion.div
          className="rounded-lg px-3 py-2.5"
          style={{ border: `1px solid ${LINE}`, background: "rgba(255,255,255,0.02)" }}
          {...rise(0)}
        >
          <span style={{ ...Mono, color: SUB }}>why hasn&apos;t the money…</span>
        </motion.div>

        <motion.div
          className="rounded-lg px-3 py-2.5 flex items-center gap-2"
          style={{ border: `1px solid ${AI}`, background: "var(--accent-soft)" }}
          {...rise(0.28)}
        >
          <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: AI }} />
          <span style={{ ...Mono, color: FG }}>answer, in the flow</span>
        </motion.div>

        <motion.div className="pl-1" {...rise(0.46)}>
          <span style={{ ...Mono, color: SUB }}>ticket · only if it doesn&apos;t help</span>
        </motion.div>
      </div>
    </Frame>
  );
}

/* Batch: one row fails, the rest keep going. */
function Batch() {
  return (
    <Frame>
      <div className="grid gap-2">
        <motion.div className="flex items-baseline justify-between" {...rise(0)}>
          <span style={{ ...Mono, color: SUB }}>54 rows</span>
          <span style={{ ...Mono, color: AI }}>53 continue</span>
        </motion.div>

        <div className="grid gap-[6px]">
          {Array.from({ length: 8 }, (_, i) => (
            <motion.span
              key={i}
              className="h-[7px] rounded-full"
              style={{
                background: i === 4 ? FAIL : LINE,
                boxShadow: i === 4 ? `0 0 14px rgba(232,131,110,0.45)` : "none",
              }}
              initial={{ opacity: 0, scaleX: 0.4 }}
              whileInView={{ opacity: 1, scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.12 + i * 0.05, duration: 0.35, ease: EASE }}
            />
          ))}
        </div>

        <motion.div className="flex items-center gap-1.5" {...rise(0.6)}>
          <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: FAIL }} />
          <span style={{ ...Mono, color: SUB }}>1 row fails on its own</span>
        </motion.div>
      </div>
    </Frame>
  );
}

/* Design system: one shared contract, and the exception you decide on. */
function DesignSystem() {
  return (
    <Frame>
      <div className="grid gap-2.5">
        <motion.div className="flex items-baseline justify-between" {...rise(0)}>
          <span style={{ ...Mono, color: SUB }}>one shared contract</span>
          <span style={{ ...Mono, color: AI }}>3 brands</span>
        </motion.div>

        <div className="grid grid-cols-5 gap-2">
          {Array.from({ length: 10 }, (_, i) => (
            <motion.span
              key={i}
              className="aspect-square rounded"
              style={{
                background: i === 6 ? A : "transparent",
                border: `1px solid ${i === 6 ? A : LINE}`,
              }}
              initial={{ opacity: 0, scale: 0.7 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.12 + i * 0.035, duration: 0.32, ease: EASE }}
            />
          ))}
        </div>

        <motion.span style={{ ...Mono, color: SUB }} {...rise(0.5)}>
          one exception, decided out loud
        </motion.span>
      </div>
    </Frame>
  );
}

/* Error copy: the message that stops, and the one that points somewhere. */
function ErrorCopy() {
  return (
    <Frame>
      <div className="grid gap-3">
        <motion.div
          className="rounded-lg px-3 py-2.5 grid gap-1.5"
          style={{ border: `1px solid rgba(232,131,110,0.4)` }}
          {...rise(0)}
        >
          <span style={{ ...Mono, color: FAIL }}>transaction failed</span>
          <span className="h-[5px] rounded-full" style={{ width: "38%", background: LINE }} />
        </motion.div>

        <motion.div
          className="rounded-lg px-3 py-2.5 grid gap-1.5"
          style={{ border: `1px solid ${AI}`, background: "var(--accent-soft)" }}
          {...rise(0.26)}
        >
          <span style={{ ...Mono, color: FG }}>what happened</span>
          <span style={{ ...Mono, color: AI }}>what to do next</span>
        </motion.div>
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
              viewport={{ once: true }}
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
                viewport={{ once: true }}
                transition={{ delay: 0.3 + k * 0.05, duration: 0.4 }}
              />
            ))}
            <line x1={4} x2={256} y1={112} y2={112} stroke={LINE} strokeWidth={1.2} />
            {plants.map((x, k) => (
              <motion.g
                key={x}
                stroke={SUB}
                strokeWidth={1.2}
                strokeLinecap="round"
                fill="none"
                initial={{ opacity: 0, y: 4 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.45 + k * 0.05, duration: 0.4, ease: EASE }}
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
              viewport={{ once: true }}
              transition={{ delay: 0.7, duration: 0.4 }}
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

const map: Record<CaseIllustration, () => React.JSX.Element> = {
  support: Support,
  batch: Batch,
  designsystem: DesignSystem,
  errorcopy: ErrorCopy,
  rules: Rules,
};

export default function CaseCardArt({ name }: { name: CaseIllustration }) {
  const C = map[name];
  return <C />;
}
