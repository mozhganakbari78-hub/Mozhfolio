"use client";

import { motion } from "framer-motion";

const A = "var(--accent-color)";
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
    { label: "Bill mgmt", pct: 74, color: A },
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
        style={{ color: A, fontSize: 14, flexShrink: 0 }}
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
            <span style={{ ...Mono, fontSize: 9, color: r.ok ? SUB : "#ef4444" }}>
              {r.name} &nbsp;<b>{r.pct}%</b>
            </span>
          </motion.div>
        ))}
      </div>
      <span
        className="rounded px-2 py-1 flex-shrink-0"
        style={{ ...Mono, fontSize: 8.5, color: A, background: "var(--accent-soft)", border: `1px solid ${A}` }}
      >
        threshold 96%
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
        <span style={{ ...Mono, fontSize: 8.5, color: "#ef4444" }}>before</span>
        {states.map((_, i) => (
          <span
            key={i}
            className="w-5 h-5 rounded flex items-center justify-center"
            style={{
              background: "rgba(239,68,68,0.1)",
              border: "1px solid rgba(239,68,68,0.35)",
              ...Mono,
              fontSize: 7,
              color: "#ef4444",
            }}
          >
            {i === 2 ? "!" : "x"}
          </span>
        ))}
      </div>

      <span style={{ color: A, fontSize: 14, flexShrink: 0 }}>&rarr;</span>

      <div className="flex items-center gap-1">
        <span style={{ ...Mono, fontSize: 8.5, color: A }}>now</span>
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
              color: ok ? A : "#ef4444",
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
        style={{ ...Mono, fontSize: 8.5, color: A, background: "var(--accent-soft)", border: `1px solid ${A}` }}
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
          <span style={{ color: "#ef4444", fontSize: 11 }}>&#8800;</span>
          <span
            className="rounded px-2 py-1"
            style={{ ...Mono, fontSize: 8.5, color: A, background: "var(--accent-soft)", border: `1px solid ${A}` }}
          >
            {p.theirs}
          </span>
          {i < pairs.length - 1 && (
            <span style={{ color: BD, marginLeft: 4 }}>|</span>
          )}
        </motion.div>
      ))}
      <span style={{ ...Mono, fontSize: 8.5, color: "#ef4444", flex: 1, textAlign: "right" }}>
        nobody could map them
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
