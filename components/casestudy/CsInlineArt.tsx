"use client";

import { motion } from "framer-motion";
import CountUp from "../CountUp";

const A = "var(--accent-color)";
/* Lightened accent for accent-coloured TEXT — the raw blue is unreadable at
   these sizes on the dark background. */
const AT = "var(--accent-ink)";
const FG = "var(--text-primary)";
const SUB = "var(--text-tertiary)";
const BD = "var(--border-strong)";
const BG = "var(--bg)";

const Mono: React.CSSProperties = {
  fontFamily: "var(--font-mono), ui-monospace, monospace",
  letterSpacing: 0.3,
};

/* Thin decorative strip shared wrapper */
function Strip({ children, label }: { children: React.ReactNode; label?: string }) {
  return (
    <div className="my-6 flex items-center gap-4" aria-hidden>
      {label && (
        <span style={{ ...Mono, fontSize: 9, color: SUB, whiteSpace: "nowrap", flexShrink: 0 }}>
          {label}
        </span>
      )}
      <div
        className="flex-1 flex items-center gap-2 rounded-xl px-4 py-3 overflow-hidden"
        style={{ background: BG, border: `1px solid ${BD}` }}
      >
        {children}
      </div>
    </div>
  );
}

/* ─── AFFINITY MAP: SupportFriction §03 ─── */
export function AffinityMap() {
  const bars = [
    { label: "Bill mgmt", pct: 74, color: AT },
    { label: "Cards", pct: 58, color: "#a78bfa" },
    { label: "Cheques", pct: 52, color: "#34d399" },
    { label: "Accounts", pct: 40, color: "#fbbf24" },
  ];

  return (
    <Strip label="ticket clusters">
      {bars.map((b, i) => (
        <div key={b.label} className="flex-1 flex flex-col gap-1.5 min-w-0">
          <div style={{ ...Mono, fontSize: 8.5, color: SUB, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
            {b.label}
          </div>
          <div className="rounded-full overflow-hidden" style={{ height: 3, background: BD }}>
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: `${b.pct}%` }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="h-full rounded-full"
              style={{ background: b.color }}
            />
          </div>
          <div style={{ ...Mono, fontSize: 8, color: b.color }}>{b.pct}%</div>
        </div>
      ))}
    </Strip>
  );
}

/* ─── UNIFIED FLOW: SupportFriction §04 ─── */
export function UnifiedFlow() {
  return (
    <Strip label="structural change">
      {/* Before */}
      <div className="flex gap-1">
        {["FAQ", "Ticket"].map((l) => (
          <span
            key={l}
            className="rounded px-2 py-1"
            style={{ ...Mono, fontSize: 9, color: SUB, background: "var(--bg-secondary)", border: `1px solid ${BD}` }}
          >
            {l}
          </span>
        ))}
      </div>

      <motion.span
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3 }}
        style={{ color: AT, fontSize: 14, flexShrink: 0 }}
      >
        &rarr;
      </motion.span>

      {/* After */}
      <motion.span
        initial={{ opacity: 0, x: 6 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4, duration: 0.45 }}
        className="rounded-lg px-3 py-1.5"
        style={{ ...Mono, fontSize: 9, color: FG, background: "var(--accent-soft)", border: `1px solid ${A}` }}
      >
        One surface
      </motion.span>

      <span style={{ ...Mono, fontSize: 8.5, color: SUB, flex: 1, textAlign: "right" }}>
        answers + escalation in a single flow
      </span>
    </Strip>
  );
}

/* ─── MATCH THRESHOLD: BatchTransfer §04a ─── */
export function MatchThreshold() {
  const rows = [
    { name: "David Chen", pct: 100, ok: true },
    { name: "Sarah M.", pct: 98, ok: true },
    { name: "M. Johnson", pct: 74, ok: false },
    { name: "Laura Kim", pct: 99, ok: true },
  ];

  return (
    <Strip label="recipient match">
      <div className="flex-1 flex gap-1.5 items-center flex-wrap">
        {rows.map((r, i) => (
          <motion.div
            key={r.name}
            initial={{ opacity: 0, y: 4 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08, duration: 0.35 }}
            className="flex items-center gap-1.5 rounded-lg px-2.5 py-1"
            style={{
              background: r.ok ? "var(--bg-secondary)" : "rgba(239,68,68,0.07)",
              border: `1px solid ${r.ok ? BD : "rgba(239,68,68,0.4)"}`,
            }}
          >
            <span
              className="w-1.5 h-1.5 rounded-full"
              style={{
                background: r.ok ? A : "#ef4444",
                boxShadow: r.ok ? `0 0 4px ${A}` : "0 0 4px rgba(239,68,68,0.7)",
              }}
            />
            <span style={{ ...Mono, fontSize: 9, color: r.ok ? SUB : "var(--fail)" }}>
              {r.name} &nbsp;<b>{r.pct}%</b>
            </span>
          </motion.div>
        ))}
      </div>
      <span
        className="rounded px-2 py-1 flex-shrink-0"
        style={{ ...Mono, fontSize: 8.5, color: AT, background: "var(--accent-soft)", border: `1px solid ${A}` }}
      >
        flagged for review
      </span>
    </Strip>
  );
}

/* ─── ROW ISOLATION: BatchTransfer §04b ─── */
export function RowIsolation() {
  const states = [true, true, false, true, true];
  return (
    <Strip label="row failure">
      <div className="flex items-center gap-1 flex-shrink-0">
        <span style={{ ...Mono, fontSize: 8.5, color: "var(--fail)" }}>before</span>
        {states.map((_, i) => (
          <span
            key={i}
            className="w-5 h-5 rounded flex items-center justify-center"
            style={{
              background: "rgba(239,68,68,0.1)",
              border: "1px solid rgba(239,68,68,0.35)",
              ...Mono,
              fontSize: 7,
              color: "var(--fail)",
            }}
          >
            {i === 2 ? "!" : "x"}
          </span>
        ))}
      </div>

      <span style={{ color: AT, fontSize: 14, flexShrink: 0 }}>&rarr;</span>

      <div className="flex items-center gap-1">
        <span style={{ ...Mono, fontSize: 8.5, color: AT }}>now</span>
        {states.map((ok, i) => (
          <motion.span
            key={i}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 + i * 0.07 }}
            className="w-5 h-5 rounded flex items-center justify-center"
            style={{
              background: ok ? "var(--bg-secondary)" : "rgba(239,68,68,0.1)",
              border: `1px solid ${ok ? BD : "rgba(239,68,68,0.4)"}`,
              ...Mono,
              fontSize: 7,
              color: ok ? A : "var(--fail)",
            }}
          >
            {ok ? "✓" : "!"}
          </motion.span>
        ))}
      </div>
      <span style={{ ...Mono, fontSize: 8.5, color: SUB, flex: 1, textAlign: "right" }}>
        one bad row, not the whole batch
      </span>
    </Strip>
  );
}

/* ─── DS SPEED: BatchTransfer §06 ─── */
export function DsSpeed() {
  const parts = ["data table", "status chips", "upload states", "review footer", "modal", "tokens"];
  return (
    <Strip label="reused from DS">
      <div className="flex flex-wrap gap-1.5 flex-1">
        {parts.map((p, i) => (
          <motion.span
            key={p}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.07 }}
            className="rounded px-2 py-0.5"
            style={{ background: "var(--bg-secondary)", border: `1px solid ${BD}`, ...Mono, fontSize: 9, color: FG }}
          >
            {p}
          </motion.span>
        ))}
      </div>
      <span
        className="flex-shrink-0 rounded px-2 py-1"
        style={{ ...Mono, fontSize: 8.5, color: AT, background: "var(--accent-soft)", border: `1px solid ${A}` }}
      >
        assembled, not drawn
      </span>
    </Strip>
  );
}

/* ─── TOKEN BRIDGE: DesignSystem §03 ─── */
export function TokenBridge() {
  const pairs = [
    { mine: "Color-Base-Solid-bg", theirs: "cardColor" },
    { mine: "Color-Base-Tonal-bg", theirs: "cardSecondaryColor" },
  ];

  return (
    <Strip label="naming conflict">
      {pairs.map((p, i) => (
        <motion.div
          key={p.mine}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.12 }}
          className="flex items-center gap-1.5"
        >
          <span
            className="rounded px-2 py-1"
            style={{ ...Mono, fontSize: 8.5, color: SUB, background: "var(--bg-secondary)", border: `1px solid ${BD}` }}
          >
            {p.mine}
          </span>
          <span style={{ color: "var(--fail)", fontSize: 11 }}>&#8800;</span>
          <span
            className="rounded px-2 py-1"
            style={{ ...Mono, fontSize: 8.5, color: AT, background: "var(--accent-soft)", border: `1px solid ${A}` }}
          >
            {p.theirs}
          </span>
          {i < pairs.length - 1 && (
            <span style={{ color: BD, marginLeft: 4 }}>|</span>
          )}
        </motion.div>
      ))}
      <span style={{ ...Mono, fontSize: 8.5, color: "var(--fail)", flex: 1, textAlign: "right" }}>
        two naming systems to translate between
      </span>
    </Strip>
  );
}

/* ─── GOVERNANCE FLOW: DesignSystem §05 ─── */
export function GovernanceFlow() {
  const steps = ["Identify", "Check Ant defaults", "Review with lead", "Estimate", "Decide", "Document"];

  return (
    <Strip label="every component">
      <div className="flex items-center gap-1 flex-1 flex-wrap">
        {steps.map((s, i) => (
          <motion.div
            key={s}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            className="flex items-center gap-1"
          >
            <span
              className="rounded px-2 py-1"
              style={{
                ...Mono,
                fontSize: 8.5,
                color: i === 4 ? A : SUB,
                background: i === 4 ? "var(--accent-soft)" : "var(--bg-secondary)",
                border: `1px solid ${i === 4 ? A : BD}`,
              }}
            >
              {i + 1}. {s}
            </span>
            {i < steps.length - 1 && (
              <span style={{ color: BD, fontSize: 10, flexShrink: 0 }}>&rsaquo;</span>
            )}
          </motion.div>
        ))}
      </div>
    </Strip>
  );
}

/* ─── SYSTEM ANATOMY: layered visual showing tokens → patterns ─── */
export function SystemAnatomy() {
  const tokens = [
    { c: "#0174DC", n: "primary" },
    { c: "#1C1D1F", n: "surface" },
    { c: "#34d399", n: "success" },
    { c: "#fbbf24", n: "warn" },
    { c: "#ef4444", n: "danger" },
    { c: "#a78bfa", n: "info" },
  ];

  const layers = [
    {
      label: "Tokens",
      note: "Shared values aligned with implementation language",
      count: "foundation",
    },
    {
      label: "Components",
      note: "Variants, states and rules documented for engineering",
      count: "core components",
    },
    {
      label: "Patterns",
      note: "Common solutions for recurring product workflows",
      count: "approved compositions",
    },
    {
      label: "Governance",
      note: "How new needs enter and evolve the system",
      count: "decision process",
    },
  ];

  return (
    <div
      className="cs-scene my-10 rounded-2xl overflow-hidden"
      style={{ background: BG, border: `1px solid ${BD}` }}
    >
      <div
        className="flex items-center justify-between px-5 py-3"
        style={{ borderBottom: `1px solid ${BD}`, background: "var(--bg-secondary)" }}
      >
        <span style={{ ...Mono, fontSize: 10, color: SUB, letterSpacing: 1.2 }}>
          SYSTEM ANATOMY
        </span>
        <div className="flex items-center gap-2">
          {tokens.map((t, i) => (
            <motion.div
              key={t.n}
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06, type: "spring", stiffness: 280 }}
              className="w-3.5 h-3.5 rounded-full"
              style={{ background: t.c, boxShadow: `0 0 0 1.5px var(--bg-secondary), 0 0 0 2.5px ${BD}` }}
              title={t.n}
            />
          ))}
        </div>
      </div>

      <div className="p-6 grid grid-cols-1 md:grid-cols-4 gap-3">
        {layers.map((layer, i) => (
          <motion.div
            key={layer.label}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 + i * 0.1, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="relative rounded-xl p-4"
            style={{
              background: i === 2 ? "var(--accent-soft)" : "var(--bg-secondary)",
              border: `1px solid ${i === 2 ? A : BD}`,
            }}
          >
            <div className="flex items-center justify-between mb-3">
              <span
                style={{
                  ...Mono,
                  fontSize: 9,
                  color: i === 2 ? A : SUB,
                  letterSpacing: 0.8,
                }}
              >
                0{i + 1} · {layer.count}
              </span>
              <motion.span
                initial={{ width: 0 }}
                whileInView={{ width: 16 }}
                viewport={{ once: true }}
                transition={{ delay: 0.35 + i * 0.1, duration: 0.5 }}
                className="h-px"
                style={{ background: i === 2 ? A : BD }}
              />
            </div>
            <div
              style={{
                color: FG,
                fontSize: 15,
                fontWeight: 600,
                letterSpacing: -0.2,
                marginBottom: 4,
              }}
            >
              {layer.label}
            </div>
            <div style={{ ...Mono, fontSize: 9.5, color: SUB, lineHeight: 1.5 }}>
              {layer.note}
            </div>

            {i < layers.length - 1 && (
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 + i * 0.1 }}
                className="hidden md:block absolute -right-2 top-1/2 -translate-y-1/2 z-10"
                style={{ color: BD, fontSize: 16 }}
              >
                &rsaquo;
              </motion.div>
            )}
          </motion.div>
        ))}
      </div>

      <div
        className="px-5 py-3 flex items-center justify-between"
        style={{ borderTop: `1px solid ${BD}`, background: "var(--bg-secondary)" }}
      >
        <span style={{ ...Mono, fontSize: 9, color: SUB }}>
          Each layer documents the trade-offs, not just the output.
        </span>
        <span
          className="rounded px-2 py-0.5"
          style={{
            ...Mono,
            fontSize: 9,
            color: AT,
            background: "var(--accent-soft)",
            border: `1px solid ${A}`,
          }}
        >
          shipped
        </span>
      </div>
    </div>
  );
}

/* ─── MULTI-BRAND TOKENS: visual color ramp across 3 projects ─── */
export function MultiBrandTokens() {
  const ramps = [
    { name: "Project 1", colors: ["#EAEEF5", "#AABAD8", "#5575B1", "#2A539E", "#1C2E4F", "#0F192B"] },
    { name: "Project 2", colors: ["#FEF8EC", "#FDE2B3", "#FAC567", "#F9B741", "#935100", "#130000"] },
    { name: "Project 3", colors: ["#E5F2F2", "#99CACC", "#339599", "#007A7F", "#00393D", "#001617"] },
  ];
  const steps = [50, 200, 400, 500, 700, 950];

  return (
    <div
      className="cs-scene my-10 rounded-2xl overflow-hidden"
      style={{ background: BG, border: `1px solid ${BD}` }}
    >
      <div
        className="flex items-center justify-between px-5 py-3"
        style={{ borderBottom: `1px solid ${BD}`, background: "var(--bg-secondary)" }}
      >
        <span style={{ ...Mono, fontSize: 10, color: SUB, letterSpacing: 1.2 }}>
          MULTI-BRAND · ONE SYSTEM
        </span>
        <span style={{ ...Mono, fontSize: 9, color: AT }}>3 product pipelines</span>
      </div>

      <div className="p-5 md:p-6">
        {/* Step headers */}
        <div
          className="grid items-center mb-3"
          style={{ gridTemplateColumns: `120px repeat(${steps.length}, 1fr)`, gap: 8 }}
        >
          <span style={{ ...Mono, fontSize: 9, color: SUB }}>token</span>
          {steps.map((s) => (
            <span key={s} style={{ ...Mono, fontSize: 9, color: SUB, textAlign: "center" }}>
              Brand-{s}
            </span>
          ))}
        </div>

        {/* Ramps */}
        <div className="flex flex-col gap-2">
          {ramps.map((r, ri) => (
            <motion.div
              key={r.name}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: ri * 0.1, duration: 0.5 }}
              className="grid items-center"
              style={{ gridTemplateColumns: `120px repeat(${steps.length}, 1fr)`, gap: 8 }}
            >
              <span style={{ ...Mono, fontSize: 10, color: FG, fontWeight: 600 }}>
                {r.name}
              </span>
              {r.colors.map((c, ci) => (
                <motion.div
                  key={ci}
                  initial={{ scale: 0.7, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.15 + ri * 0.1 + ci * 0.04, type: "spring", stiffness: 240 }}
                  className="rounded-md"
                  style={{
                    background: c,
                    height: 28,
                    boxShadow: `inset 0 0 0 1px rgba(255,255,255,0.04)`,
                  }}
                  title={`${r.name} Brand-${steps[ci]} · ${c}`}
                />
              ))}
            </motion.div>
          ))}
        </div>
      </div>

      <div
        className="px-5 py-3 flex items-center justify-between"
        style={{ borderTop: `1px solid ${BD}`, background: "var(--bg-secondary)" }}
      >
        <span style={{ ...Mono, fontSize: 9, color: SUB }}>
          Same token names, swappable values. The component layer never changes.
        </span>
      </div>
    </div>
  );
}

/* ─── TICKET BOARD: SupportFriction §03 — live sorting animation ───
   Tickets stream out of an inbox and get sorted into "answerable" vs
   "needs a human". Loops forever; compact so panels never scroll. */
export function TicketBoard() {
  // deterministic layout — no Math.random, stable between SSR and client
  const dots = Array.from({ length: 14 }, (_, i) => {
    const answerable = i % 3 !== 2; // ~2/3 answerable
    const lane = i % 4;
    return {
      k: i,
      answerable,
      delay: i * 0.55,
      targetY: (answerable ? 34 : 118) + lane * 7,
      targetX: 452 + (i % 5) * 22,
      color: answerable ? A : "var(--fail)",
    };
  });

  return (
    <div
      className="cs-scene my-8 rounded-2xl overflow-hidden"
      style={{ background: BG, border: `1px solid ${BD}` }}
      aria-hidden
    >
      <div
        className="flex items-center justify-between px-5 py-2.5"
        style={{ borderBottom: `1px solid ${BD}`, background: "var(--bg-secondary)" }}
      >
        <span style={{ ...Mono, fontSize: 10, color: SUB, letterSpacing: 1.2 }}>
          ~1,000 TICKETS · SORTED BY HAND
        </span>
        <span style={{ ...Mono, fontSize: 9, color: AT }}>could they have self-served?</span>
      </div>

      <svg viewBox="0 0 600 170" width="100%" style={{ display: "block" }}>
        {/* inbox */}
        <rect x="18" y="62" width="64" height="46" rx="9" fill="var(--bg-secondary)" stroke={BD} />
        <text x="50" y="89" textAnchor="middle" fill={SUB} style={{ ...Mono, fontSize: 9 }}>
          inbox
        </text>

        {/* guide lines */}
        <path d="M 90 85 C 200 85 260 52 420 52" stroke={BD} strokeDasharray="3 5" fill="none" />
        <path d="M 90 85 C 200 85 260 132 420 132" stroke={BD} strokeDasharray="3 5" fill="none" />

        {/* destination bins */}
        <rect x="440" y="24" width="142" height="52" rx="9" fill="var(--accent-soft)" stroke={A} />
        <text x="511" y="45" textAnchor="middle" fill={A} style={{ ...Mono, fontSize: 9 }}>
          answer already exists
        </text>
        <text x="511" y="60" textAnchor="middle" fill={SUB} style={{ ...Mono, fontSize: 8 }}>
          → self-serve, if reachable
        </text>
        <rect x="440" y="98" width="142" height="52" rx="9" fill="rgba(239,68,68,0.06)" stroke="rgba(239,68,68,0.45)" />
        <text x="511" y="119" textAnchor="middle" fill="var(--fail)" style={{ ...Mono, fontSize: 9 }}>
          genuinely needs a human
        </text>
        <text x="511" y="134" textAnchor="middle" fill={SUB} style={{ ...Mono, fontSize: 8 }}>
          → route to support
        </text>

        {/* moving tickets */}
        {dots.map((d) => (
          <motion.circle
            key={d.k}
            r={4.5}
            fill={d.color}
            initial={{ cx: 60, cy: 85, opacity: 0 }}
            animate={{
              cx: [60, 250, d.targetX],
              cy: [85, 85, d.targetY],
              opacity: [0, 1, 1, 0],
            }}
            transition={{
              duration: 3.2,
              times: [0, 0.45, 1],
              opacity: { times: [0, 0.1, 0.85, 1], duration: 3.2 },
              delay: d.delay,
              repeat: Infinity,
              repeatDelay: dots.length * 0.55 - 3.2,
              ease: "easeInOut",
            }}
          />
        ))}
      </svg>
    </div>
  );
}

/* ─── PANIC JOURNEY: SupportFriction §02 — the fork users face ───
   A user-dot travels the task path, hits the fork, hesitates on a red
   pulse, then falls into "ticket" every time. Loops forever. */
export function PanicJourney() {
  return (
    <div
      className="cs-scene my-8 rounded-2xl overflow-hidden"
      style={{ background: BG, border: `1px solid ${BD}` }}
      aria-hidden
    >
      <div
        className="flex items-center justify-between px-5 py-2.5"
        style={{ borderBottom: `1px solid ${BD}`, background: "var(--bg-secondary)" }}
      >
        <span style={{ ...Mono, fontSize: 10, color: SUB, letterSpacing: 1.2 }}>
          WHERE THE TICKET ACTUALLY HAPPENS
        </span>
        <span style={{ ...Mono, fontSize: 9, color: "var(--fail)" }}>the guess is the failure</span>
      </div>

      <svg viewBox="0 0 600 150" width="100%" style={{ display: "block" }}>
        {/* main path to the fork */}
        <path d="M 30 75 H 300" stroke={BD} strokeWidth="1.5" fill="none" />
        {/* branches */}
        <path d="M 300 75 C 340 75 350 38 395 38" stroke={BD} strokeDasharray="3 5" fill="none" />
        <path d="M 300 75 C 340 75 350 112 395 112" stroke={BD} strokeWidth="1.5" fill="none" />

        <text x="30" y="60" fill={SUB} style={{ ...Mono, fontSize: 9 }}>mid-task, money on the line</text>

        {/* fork pulse */}
        <motion.circle
          cx="300" cy="75" r="8" fill="none" stroke="#ef4444" strokeWidth="1.5"
          animate={{ scale: [0.6, 1.7], opacity: [0.9, 0] }}
          transition={{ duration: 1.4, repeat: Infinity, ease: "easeOut" }}
          style={{ transformOrigin: "300px 75px" }}
        />
        <text x="300" y="100" textAnchor="middle" fill="var(--fail)" style={{ ...Mono, fontSize: 9 }}>
          guess?
        </text>

        {/* FAQ branch (the road not taken) */}
        <rect x="400" y="22" width="120" height="32" rx="8" fill="var(--bg-secondary)" stroke={BD} />
        <text x="460" y="42" textAnchor="middle" fill={SUB} style={{ ...Mono, fontSize: 9 }}>
          FAQ · maybe it&apos;s there?
        </text>

        {/* Ticket branch (the safe path) */}
        <rect x="400" y="96" width="120" height="32" rx="8" fill="rgba(239,68,68,0.06)" stroke="rgba(239,68,68,0.45)" />
        <text x="460" y="116" textAnchor="middle" fill="var(--fail)" style={{ ...Mono, fontSize: 9 }}>
          ticket · feels safe
        </text>

        {/* travelling user dot — always ends in ticket */}
        <motion.circle
          r="5.5"
          fill={A}
          animate={{
            cx: [30, 300, 300, 460],
            cy: [75, 75, 75, 112],
            opacity: [0, 1, 1, 1, 0],
          }}
          transition={{
            duration: 4,
            times: [0, 0.45, 0.62, 1],
            opacity: { times: [0, 0.08, 0.5, 0.9, 1], duration: 4 },
            repeat: Infinity,
            repeatDelay: 0.6,
            ease: "easeInOut",
          }}
        />
      </svg>
    </div>
  );
}

/* ─── BATCH FLOW: BatchTransfer §03 — rows flowing through validation ───
   Green rows stream through the pipeline; the bad row gets caught at the
   validation gate and ejected while the rest keep flowing. Loops forever. */
export function BatchFlow() {
  const rows = Array.from({ length: 8 }, (_, i) => ({
    k: i,
    bad: i === 4,
    delay: i * 0.7,
    lane: 62 + (i % 3) * 14,
  }));

  return (
    <div
      className="cs-scene my-8 rounded-2xl overflow-hidden"
      style={{ background: BG, border: `1px solid ${BD}` }}
      aria-hidden
    >
      <div
        className="flex items-center justify-between px-5 py-2.5"
        style={{ borderBottom: `1px solid ${BD}`, background: "var(--bg-secondary)" }}
      >
        <span style={{ ...Mono, fontSize: 10, color: SUB, letterSpacing: 1.2 }}>
          ONE BAD ROW FAILS ALONE
        </span>
        <span style={{ ...Mono, fontSize: 9, color: AT }}>399 others keep moving</span>
      </div>

      <svg viewBox="0 0 600 165" width="100%" style={{ display: "block" }}>
        {/* pipeline */}
        <path d="M 20 82 H 580" stroke={BD} strokeDasharray="3 5" fill="none" />

        {/* validation gate */}
        <rect x="268" y="34" width="4" height="96" rx="2" fill={A} opacity="0.85" />
        <motion.rect
          x="266" y="34" width="8" height="96" rx="4" fill={A}
          animate={{ opacity: [0.05, 0.3, 0.05] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        />
        <text x="270" y="24" textAnchor="middle" fill={A} style={{ ...Mono, fontSize: 9 }}>
          validate
        </text>

        {/* submit zone */}
        <rect x="500" y="52" width="80" height="60" rx="9" fill="var(--accent-soft)" stroke={A} />
        <text x="540" y="86" textAnchor="middle" fill={A} style={{ ...Mono, fontSize: 9 }}>
          submit
        </text>

        {/* rejected tray */}
        <rect x="230" y="138" width="82" height="22" rx="6" fill="rgba(239,68,68,0.06)" stroke="rgba(239,68,68,0.45)" />
        <text x="271" y="152" textAnchor="middle" fill="var(--fail)" style={{ ...Mono, fontSize: 8 }}>
          row 212 · fix &amp; retry
        </text>

        {/* flowing rows */}
        {rows.map((r) =>
          r.bad ? (
            <motion.rect
              key={r.k}
              width="16" height="8" rx="2.5"
              fill="#ef4444"
              initial={{ x: 12, y: r.lane, opacity: 0 }}
              animate={{
                x: [12, 252, 252, 262],
                y: [r.lane, r.lane, r.lane, 142],
                opacity: [0, 1, 1, 1, 0],
              }}
              transition={{
                duration: 4.2,
                times: [0, 0.5, 0.62, 1],
                opacity: { times: [0, 0.08, 0.6, 0.92, 1], duration: 4.2 },
                delay: r.delay,
                repeat: Infinity,
                repeatDelay: rows.length * 0.7 - 4.2,
                ease: "easeInOut",
              }}
            />
          ) : (
            <motion.rect
              key={r.k}
              width="16" height="8" rx="2.5"
              fill={A}
              initial={{ x: 12, y: r.lane, opacity: 0 }}
              animate={{ x: [12, 530], opacity: [0, 1, 1, 0] }}
              transition={{
                duration: 3.6,
                opacity: { times: [0, 0.08, 0.88, 1], duration: 3.6 },
                delay: r.delay,
                repeat: Infinity,
                repeatDelay: rows.length * 0.7 - 3.6,
                ease: "easeInOut",
              }}
            />
          )
        )}
      </svg>
    </div>
  );
}

/* ─── BUTTON PROPERTIES: visual showing variant matrix ─── */
export function ButtonProperties() {
  const props = [
    { name: "State", values: ["Enabled", "Disabled", "Hover", "Pressed"] },
    { name: "Type", values: ["Primary", "Secondary", "Dashed", "Ghost"] },
    { name: "Size", values: ["XL", "Large", "Small", "Default"] },
    { name: "Loading", values: ["True", "False"] },
    { name: "Icon", values: ["Left", "Right", "Only", "None"] },
  ];

  return (
    <div
      className="cs-scene my-10 rounded-2xl overflow-hidden"
      style={{ background: BG, border: `1px solid ${BD}` }}
    >
      <div
        className="flex items-center justify-between px-5 py-3"
        style={{ borderBottom: `1px solid ${BD}`, background: "var(--bg-secondary)" }}
      >
        <div className="flex items-center gap-2">
          <span
            className="rounded px-2 py-0.5"
            style={{
              ...Mono,
              fontSize: 9,
              color: FG,
              background: "var(--bg)",
              border: `1px solid ${BD}`,
            }}
          >
            btn
          </span>
          <span style={{ ...Mono, fontSize: 10, color: SUB, letterSpacing: 1 }}>
            COMPONENT PROPERTIES
          </span>
        </div>
        <span style={{ ...Mono, fontSize: 9, color: AT }}>documented inline</span>
      </div>

      <div className="p-5 md:p-6 flex flex-col gap-2.5">
        {props.map((p, pi) => (
          <motion.div
            key={p.name}
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: pi * 0.08, duration: 0.4 }}
            className="rounded-lg flex items-center gap-3 px-3.5 py-2.5"
            style={{ background: "var(--bg-secondary)", border: `1px solid ${BD}` }}
          >
            <span
              className="flex items-center justify-center"
              style={{ width: 18, height: 18, color: AT }}
              aria-hidden
            >
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M7 1 L13 7 L7 13 L1 7 Z" stroke="currentColor" strokeWidth="1.5" />
              </svg>
            </span>
            <span style={{ ...Mono, fontSize: 11, color: FG, fontWeight: 600, minWidth: 70 }}>
              {p.name}
            </span>
            <div className="flex gap-1.5 flex-wrap flex-1">
              {p.values.map((v, vi) => (
                <motion.span
                  key={v}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + pi * 0.08 + vi * 0.04 }}
                  className="rounded px-2 py-0.5"
                  style={{
                    ...Mono,
                    fontSize: 9,
                    color: vi === 0 ? A : SUB,
                    background: vi === 0 ? "var(--accent-soft)" : "var(--bg)",
                    border: `1px solid ${vi === 0 ? A : BD}`,
                  }}
                >
                  {v}
                </motion.span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      <div
        className="px-5 py-3 flex items-center justify-between"
        style={{ borderTop: `1px solid ${BD}`, background: "var(--bg-secondary)" }}
      >
        <span style={{ ...Mono, fontSize: 9, color: SUB }}>
          Devs ship the right variant without asking. The spec is the source.
        </span>
      </div>
    </div>
  );
}

/* ─── BIG STATS: a cause→effect chain the reader can follow ───
   Numbers connected by arrows so they read as one sentence:
   "400 rows → 1 wrong digit → 0 ways to catch it". Optional headline
   above and takeaway line below tie the story together. */
export function BigStats({
  items,
  headline,
  takeaway,
}: {
  items: { value: string; label: string }[];
  headline?: string;
  takeaway?: string;
}) {
  return (
    <div className="cs-bigstats relative w-full" style={{ padding: "20px 0" }}>
      {headline && (
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10"
          style={{ ...Mono, fontSize: 12, letterSpacing: 1.5, color: SUB, textTransform: "uppercase" }}
        >
          {headline}
        </motion.p>
      )}

      <div className="relative flex flex-wrap justify-center items-center" style={{ gap: "clamp(16px, 3vw, 40px)" }}>
        {items.map((s, i) => (
          <div key={s.label} className="flex items-center" style={{ gap: "clamp(16px, 3vw, 40px)" }}>
            <motion.div
              className="text-center"
              style={{ maxWidth: 240 }}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15 + i * 0.25, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            >
              <CountUp
                value={s.value}
                style={{
                  display: "block",
                  fontWeight: 800,
                  fontSize: "clamp(56px, 8.5vw, 108px)",
                  lineHeight: 1,
                  letterSpacing: "-0.03em",
                  color: "#fff",
                }}
              />
              <div
                className="mx-auto my-3"
                style={{ width: 30, height: 2, borderRadius: 2, background: A }}
              />
              <div style={{ ...Mono, fontSize: 12, color: SUB, lineHeight: 1.5 }}>{s.label}</div>
            </motion.div>

            {/* connective arrow between numbers */}
            {i < items.length - 1 && (
              <motion.span
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.15 + i * 0.25 + 0.18, duration: 0.4 }}
                aria-hidden
                style={{ color: AT, fontSize: "clamp(24px, 3vw, 40px)", fontWeight: 300, lineHeight: 1, transform: "translateY(-16px)" }}
              >
                &rarr;
              </motion.span>
            )}
          </div>
        ))}
      </div>

      {takeaway && (
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 + items.length * 0.25, duration: 0.6 }}
          className="text-center mx-auto mt-12"
          style={{ maxWidth: 620, fontSize: "clamp(18px, 2vw, 22px)", fontWeight: 600, color: FG, letterSpacing: "-0.01em", lineHeight: 1.4 }}
        >
          {takeaway}
        </motion.p>
      )}
    </div>
  );
}

/* ─── CHIP DROP: component chips fall in one by one with a springy bounce ───
   Newtonian feel — each chip drops from above and settles with overshoot. */
export function ChipDrop({ items }: { items: string[] }) {
  return (
    <div className="cs-chips">
      {items.map((c, i) => (
        <motion.span
          key={c}
          initial={{ opacity: 0, y: -46, rotate: -4 }}
          whileInView={{ opacity: 1, y: 0, rotate: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{
            delay: i * 0.045,
            type: "spring",
            stiffness: 520,
            damping: 14,
            mass: 0.8,
          }}
        >
          {c}
        </motion.span>
      ))}
    </div>
  );
}
