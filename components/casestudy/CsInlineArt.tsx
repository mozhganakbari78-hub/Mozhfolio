"use client";

import { motion } from "framer-motion";

const A = "var(--accent-color)";
const FG = "var(--text-primary)";
const SUB = "var(--text-tertiary)";
const SURF = "var(--bg-secondary)";
const BD = "var(--border-strong)";
const BG = "var(--bg)";

const Mono: React.CSSProperties = {
  fontFamily: "var(--font-mono), ui-monospace, monospace",
  fontSize: 10,
  letterSpacing: 0.3,
};

function MiniFrame({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <figure
      className={`relative overflow-hidden rounded-2xl ${className}`}
      style={{ background: SURF, border: `1px solid ${BD}` }}
      aria-hidden
    >
      {/* Glow */}
      <div
        className="absolute -right-16 -top-16 w-[240px] h-[240px] rounded-full opacity-20 blur-3xl pointer-events-none"
        style={{ background: A }}
      />
      {/* Grid overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)",
          backgroundSize: "24px 24px",
          maskImage: "radial-gradient(ellipse at center, black 50%, transparent 90%)",
        }}
      />
      <div className="relative p-5">{children}</div>
    </figure>
  );
}

/* ─── AFFINITY MAP: SupportFriction §03 ─── */
export function AffinityMap() {
  const clusters = [
    { label: "Bill mgmt", count: 74, color: A },
    { label: "Cards", count: 58, color: "#a78bfa" },
    { label: "Cheques", count: 52, color: "#34d399" },
    { label: "Accounts", count: 40, color: "#fbbf24" },
  ];

  return (
    <MiniFrame className="my-8">
      <div style={{ ...Mono, color: SUB, fontSize: 9, marginBottom: 12 }}>
        FIGJAM · affinity clusters · ~1,000 tickets
      </div>
      <div className="grid grid-cols-2 gap-2">
        {clusters.map((c, i) => (
          <motion.div
            key={c.label}
            initial={{ opacity: 0, scale: 0.88 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="rounded-xl p-3"
            style={{ background: BG, border: `1px solid ${BD}` }}
          >
            <div style={{ ...Mono, color: FG, fontWeight: 600, marginBottom: 6 }}>{c.label}</div>
            <div className="rounded-full overflow-hidden" style={{ height: 4, background: BD }}>
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: `${c.count}%` }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + i * 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="h-full rounded-full"
                style={{ background: c.color }}
              />
            </div>
            <div
              className="flex justify-between mt-1.5"
              style={{ ...Mono, fontSize: 8.5 }}
            >
              <span style={{ color: c.color }}>{c.count}% self-service</span>
              <span style={{ color: SUB }}>{100 - c.count}% support</span>
            </div>
          </motion.div>
        ))}
      </div>
      <div
        className="mt-3 pt-3 flex items-center gap-2"
        style={{ borderTop: `1px solid ${BD}`, ...Mono, color: SUB, fontSize: 8.5 }}
      >
        <span
          className="w-2 h-2 rounded-full flex-shrink-0"
          style={{ background: A, boxShadow: `0 0 6px ${A}` }}
        />
        Answerable without a human = opportunity to deflect
      </div>
    </MiniFrame>
  );
}

/* ─── UNIFIED FLOW: SupportFriction §04 ─── */
export function UnifiedFlow() {
  return (
    <MiniFrame className="my-8">
      <div style={{ ...Mono, color: SUB, fontSize: 9, marginBottom: 14 }}>
        BEFORE vs. AFTER · entry point structure
      </div>
      <div className="flex gap-3 items-center">
        {/* Before: two separate boxes */}
        <div className="flex-1">
          <div style={{ ...Mono, color: "#ef4444", fontSize: 8.5, marginBottom: 6 }}>Before</div>
          <div className="space-y-2">
            {["FAQ page", "Ticket form"].map((label) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, x: -8 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45 }}
                className="rounded-lg px-3 py-2 text-center"
                style={{ background: BG, border: `1px solid ${BD}`, ...Mono, color: SUB, fontSize: 9.5 }}
              >
                {label}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Arrow */}
        <motion.div
          initial={{ opacity: 0, scale: 0.6 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.4, type: "spring" }}
          style={{ ...Mono, color: A, fontSize: 18 }}
        >
          &rarr;
        </motion.div>

        {/* After: single unified box */}
        <div className="flex-1">
          <div style={{ ...Mono, color: A, fontSize: 8.5, marginBottom: 6 }}>After</div>
          <motion.div
            initial={{ opacity: 0, x: 8 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.25, duration: 0.5 }}
            className="rounded-xl px-3 py-5 text-center"
            style={{ background: "var(--accent-soft)", border: `1px solid ${A}`, ...Mono, color: FG, fontSize: 10, fontWeight: 600 }}
          >
            One support surface
            <div style={{ color: SUB, fontWeight: 400, fontSize: 8.5, marginTop: 4 }}>
              answers + escalation in one flow
            </div>
          </motion.div>
        </div>
      </div>
    </MiniFrame>
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
    <MiniFrame className="my-8">
      <div className="flex items-center justify-between mb-3">
        <div style={{ ...Mono, color: SUB, fontSize: 9 }}>RECIPIENT VERIFICATION</div>
        <div
          className="px-2 py-0.5 rounded"
          style={{ background: "var(--accent-soft)", color: A, ...Mono, fontSize: 9 }}
        >
          threshold: 96%
        </div>
      </div>
      <div className="space-y-1.5">
        {rows.map((r, i) => (
          <motion.div
            key={r.name}
            initial={{ opacity: 0, x: -6 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 + i * 0.08, duration: 0.4 }}
            className="flex items-center gap-2.5 rounded-lg px-3 py-2"
            style={{
              background: r.ok ? BG : "rgba(239,68,68,0.07)",
              border: `1px solid ${r.ok ? BD : "rgba(239,68,68,0.4)"}`,
            }}
          >
            <span
              className="w-1.5 h-1.5 rounded-full flex-shrink-0"
              style={{
                background: r.ok ? A : "#ef4444",
                boxShadow: r.ok ? `0 0 5px ${A}` : "0 0 5px rgba(239,68,68,0.7)",
              }}
            />
            <span style={{ ...Mono, color: FG, flex: 1 }}>{r.name}</span>
            <span
              style={{
                ...Mono,
                color: r.ok ? SUB : "#ef4444",
                fontWeight: 700,
                fontVariantNumeric: "tabular-nums",
              }}
            >
              {r.pct}%
            </span>
            {!r.ok && (
              <motion.span
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.7, type: "spring", stiffness: 300 }}
                style={{
                  ...Mono,
                  fontSize: 8,
                  color: "#ef4444",
                  background: "rgba(239,68,68,0.18)",
                  padding: "1px 5px",
                  borderRadius: 3,
                }}
              >
                REVIEW
              </motion.span>
            )}
          </motion.div>
        ))}
      </div>
      <div
        className="mt-3 pt-3"
        style={{ borderTop: `1px solid ${BD}`, ...Mono, color: SUB, fontSize: 8.5 }}
      >
        Below 96% = approver sees mismatch before confirming
      </div>
    </MiniFrame>
  );
}

/* ─── ROW ISOLATION: BatchTransfer §04b ─── */
export function RowIsolation() {
  return (
    <MiniFrame className="my-8">
      <div style={{ ...Mono, color: SUB, fontSize: 9, marginBottom: 12 }}>
        BATCH · row failure model
      </div>
      <div className="flex gap-3">
        {/* Old: all fail */}
        <div className="flex-1">
          <div style={{ ...Mono, color: "#ef4444", fontSize: 8.5, marginBottom: 6 }}>Old: all-or-nothing</div>
          <div className="space-y-1">
            {[true, true, false, true, true].map((ok, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07 }}
                className="rounded px-2 py-1 text-right"
                style={{
                  background: "rgba(239,68,68,0.1)",
                  border: "1px solid rgba(239,68,68,0.3)",
                  ...Mono,
                  fontSize: 8.5,
                  color: "#ef4444",
                }}
              >
                {ok ? "failed" : "BAD ROW"}
              </motion.div>
            ))}
          </div>
        </div>
        {/* New: isolate */}
        <div className="flex-1">
          <div style={{ ...Mono, color: A, fontSize: 8.5, marginBottom: 6 }}>New: isolated</div>
          <div className="space-y-1">
            {[true, true, false, true, true].map((ok, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + i * 0.07 }}
                className="rounded px-2 py-1 text-right"
                style={{
                  background: ok ? BG : "rgba(239,68,68,0.1)",
                  border: `1px solid ${ok ? BD : "rgba(239,68,68,0.4)"}`,
                  ...Mono,
                  fontSize: 8.5,
                  color: ok ? A : "#ef4444",
                }}
              >
                {ok ? "sent" : "SKIP"}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </MiniFrame>
  );
}

/* ─── DS SPEED: BatchTransfer §06 ─── */
export function DsSpeed() {
  const parts = ["data table", "status chips", "upload states", "review footer", "modal", "tokens"];
  return (
    <MiniFrame className="my-8">
      <div style={{ ...Mono, color: SUB, fontSize: 9, marginBottom: 12 }}>
        REUSED COMPONENTS · assembled, not drawn
      </div>
      <div className="flex flex-wrap gap-2">
        {parts.map((p, i) => (
          <motion.span
            key={p}
            initial={{ opacity: 0, y: 6 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.09, duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="rounded-lg px-3 py-1.5"
            style={{ background: BG, border: `1px solid ${BD}`, ...Mono, color: FG, fontSize: 9.5 }}
          >
            {p}
          </motion.span>
        ))}
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.8, duration: 0.5 }}
        className="mt-4 rounded-xl px-4 py-2.5 flex items-center gap-2"
        style={{ background: "var(--accent-soft)", border: `1px solid ${A}` }}
      >
        <span
          className="w-2 h-2 rounded-full flex-shrink-0"
          style={{ background: A, boxShadow: `0 0 6px ${A}` }}
        />
        <span style={{ ...Mono, color: FG, fontSize: 10 }}>
          Spent time on workflow logic, not drawing screens
        </span>
      </motion.div>
    </MiniFrame>
  );
}

/* ─── TOKEN BRIDGE: DesignSystem §03 ─── */
export function TokenBridge() {
  const pairs = [
    { mine: "Color-Base-Solid-bg", theirs: "cardColor" },
    { mine: "Color-Base-Tonal-bg", theirs: "cardSecondaryColor" },
    { mine: "Color-Text-Primary", theirs: "textSecondary" },
  ];

  return (
    <MiniFrame className="my-8">
      <div style={{ ...Mono, color: SUB, fontSize: 9, marginBottom: 12 }}>
        TOKEN NAMING · the translation problem
      </div>
      {pairs.map((p, i) => (
        <motion.div
          key={p.mine}
          initial={{ opacity: 0, y: 5 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.12, duration: 0.45 }}
          className="flex items-center gap-2 mb-2"
        >
          <div
            className="flex-1 rounded-lg px-2.5 py-2"
            style={{ background: BG, border: `1px solid ${BD}`, ...Mono, color: SUB, fontSize: 9 }}
          >
            {p.mine}
          </div>
          <span style={{ color: "#ef4444", fontSize: 14 }}>&#8800;</span>
          <div
            className="flex-1 rounded-lg px-2.5 py-2"
            style={{ background: "var(--accent-soft)", border: `1px solid ${A}`, ...Mono, color: A, fontSize: 9 }}
          >
            {p.theirs}
          </div>
        </motion.div>
      ))}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.6 }}
        className="mt-3 rounded-lg px-3 py-2"
        style={{ background: BG, border: `1px solid ${BD}`, ...Mono, color: SUB, fontSize: 8.5 }}
      >
        Developers kept asking: <span style={{ color: "#ef4444" }}>"which one in our code maps to this?"</span>
      </motion.div>
    </MiniFrame>
  );
}

/* ─── GOVERNANCE FLOW: DesignSystem §05 ─── */
export function GovernanceFlow() {
  const steps = [
    "Identify need or inconsistency",
    "Check Ant Design defaults",
    "Review with frontend lead",
    "Estimate effort + risk",
    "This sprint or backlog?",
    "Document the decision",
  ];

  return (
    <MiniFrame className="my-8">
      <div style={{ ...Mono, color: SUB, fontSize: 9, marginBottom: 14 }}>
        GOVERNANCE · every component decision
      </div>
      <div className="flex flex-col gap-2">
        {steps.map((s, i) => (
          <motion.div
            key={s}
            initial={{ opacity: 0, x: -8 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08, duration: 0.4 }}
            className="flex items-center gap-3"
          >
            <span
              className="flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center text-center"
              style={{
                background: i === 4 ? "var(--accent-soft)" : BG,
                border: `1px solid ${i === 4 ? A : BD}`,
                ...Mono,
                fontSize: 8.5,
                color: i === 4 ? A : SUB,
                fontWeight: 700,
              }}
            >
              {i + 1}
            </span>
            <span style={{ ...Mono, color: i === 4 ? FG : SUB, fontSize: 9.5 }}>{s}</span>
          </motion.div>
        ))}
      </div>
    </MiniFrame>
  );
}
