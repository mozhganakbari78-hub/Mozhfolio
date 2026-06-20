"use client";

import { motion } from "framer-motion";

export type CaseIllustration = "support" | "batch" | "designsystem";

const A = "var(--accent-color)";
const FG = "var(--text-primary)";
const SUB = "var(--text-tertiary)";
const SURF = "var(--bg-secondary)";
const BD = "var(--border-strong)";

const Mono: React.CSSProperties = {
  fontFamily: "var(--font-mono), ui-monospace, monospace",
  fontSize: 11,
  letterSpacing: 0.4,
};

function Frame({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
      <div
        className="absolute -right-32 -top-32 w-[420px] h-[420px] rounded-full opacity-25 blur-3xl pointer-events-none"
        style={{ background: A }}
        aria-hidden
      />
      <div
        className="absolute -left-20 -bottom-20 w-[300px] h-[300px] rounded-full opacity-10 blur-3xl pointer-events-none"
        style={{ background: A }}
        aria-hidden
      />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
          maskImage: "radial-gradient(ellipse at center, black 50%, transparent 85%)",
        }}
        aria-hidden
      />
      {children}
    </div>
  );
}

/* ─────────────────────────────  SUPPORT  ───────────────────────────── */
function Support() {
  const results = [
    "Why can't I log in to corporate banking?",
    "Account locked after multiple attempts",
    "Two-factor authentication code expired",
  ];

  return (
    <Frame>
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="relative w-[84%] max-w-[400px] rounded-2xl p-5 shadow-2xl"
        style={{
          background: SURF,
          border: `1px solid ${BD}`,
          boxShadow: "0 30px 80px rgba(0,0,0,0.55)",
        }}
      >
        <div className="flex items-center justify-between mb-4">
          <div className="flex gap-1.5">
            <span className="w-2 h-2 rounded-full" style={{ background: "#3a3b3f" }} />
            <span className="w-2 h-2 rounded-full" style={{ background: "#3a3b3f" }} />
            <span className="w-2 h-2 rounded-full" style={{ background: "#3a3b3f" }} />
          </div>
          <span style={{ ...Mono, color: SUB, fontSize: 9 }}>SUPPORT</span>
        </div>

        {/* Typing input */}
        <div
          className="rounded-lg px-3.5 py-3 mb-3 flex items-center gap-2"
          style={{ background: "var(--bg)", border: `1px solid ${BD}` }}
        >
          <div
            className="w-3.5 h-3.5 rounded-full border-2"
            style={{ borderColor: SUB, borderTopColor: "transparent" }}
          />
          <span style={{ ...Mono, color: FG, fontSize: 12 }}>can&apos;t log in</span>
          <motion.span
            animate={{ opacity: [1, 0, 1] }}
            transition={{ duration: 1, repeat: Infinity }}
            className="inline-block w-[2px] h-3.5 ml-0.5"
            style={{ background: A }}
          />
        </div>

        {/* Live results */}
        <div className="space-y-1.5">
          {results.map((r, i) => (
            <motion.div
              key={r}
              initial={{ opacity: 0, x: -8 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 + i * 0.12, duration: 0.5 }}
              className="flex items-center gap-2.5 rounded-lg px-3 py-2.5"
              style={{
                background: i === 0 ? "var(--accent-soft)" : "var(--bg)",
                border: `1px solid ${i === 0 ? A : BD}`,
              }}
            >
              <span
                className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                style={{ background: i === 0 ? A : SUB }}
              />
              <span
                style={{
                  ...Mono,
                  color: i === 0 ? FG : SUB,
                  fontSize: 10.5,
                  flex: 1,
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  whiteSpace: "nowrap",
                }}
              >
                {r}
              </span>
              {i === 0 && (
                <motion.span
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.7, type: "spring", stiffness: 300 }}
                  className="px-1.5 py-0.5 rounded"
                  style={{ background: A, color: "#fff", ...Mono, fontSize: 8.5 }}
                >
                  MATCH
                </motion.span>
              )}
            </motion.div>
          ))}
        </div>

        {/* Stats footer */}
        <div
          className="mt-4 pt-3 flex items-center justify-between"
          style={{ borderTop: `1px solid ${BD}`, ...Mono, color: SUB, fontSize: 9.5 }}
        >
          <span>1,000+ tickets analyzed</span>
          <span style={{ color: A }}>~45% self-served</span>
        </div>
      </motion.div>
    </Frame>
  );
}

/* ─────────────────────────────  BATCH  ───────────────────────────── */
function Batch() {
  const rows = [
    { name: "David Chen", pct: 100, state: "ok" as const },
    { name: "Sarah Miller", pct: 98, state: "ok" as const },
    { name: "M. Johnson", pct: 74, state: "warn" as const },
    { name: "Laura Kim", pct: 99, state: "ok" as const },
    { name: "Robert T.", pct: 100, state: "ok" as const },
  ];

  return (
    <Frame>
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="relative w-[86%] max-w-[420px] rounded-2xl p-5"
        style={{
          background: SURF,
          border: `1px solid ${BD}`,
          boxShadow: "0 30px 80px rgba(0,0,0,0.55)",
        }}
      >
        <div className="flex items-center justify-between mb-3">
          <div>
            <div style={{ ...Mono, color: SUB, fontSize: 9.5 }}>BATCH · payroll</div>
            <div style={{ ...Mono, color: FG, fontSize: 13, marginTop: 2, fontWeight: 600 }}>
              400 rows
            </div>
          </div>
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="px-2.5 py-1 rounded-md flex items-center gap-1.5"
            style={{ background: "var(--accent-soft)", color: A, ...Mono, fontSize: 10 }}
          >
            <motion.span
              animate={{ opacity: [1, 0.4, 1] }}
              transition={{ duration: 1.4, repeat: Infinity }}
              className="w-1.5 h-1.5 rounded-full"
              style={{ background: A }}
            />
            verifying
          </motion.div>
        </div>

        {/* Progress bar */}
        <div
          className="rounded-full h-1 mb-3 overflow-hidden"
          style={{ background: BD }}
        >
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "78%" }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="h-full rounded-full"
            style={{ background: A }}
          />
        </div>

        {/* Rows */}
        <div className="space-y-1.5">
          {rows.map((r, i) => (
            <motion.div
              key={r.name}
              initial={{ opacity: 0, x: -8 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 + i * 0.07, duration: 0.4 }}
              className="flex items-center gap-3 rounded-lg px-3 py-2"
              style={{
                background: r.state === "warn" ? "rgba(239,68,68,0.08)" : "var(--bg)",
                border: `1px solid ${r.state === "warn" ? "rgba(239,68,68,0.45)" : BD}`,
              }}
            >
              <span
                className="w-2 h-2 rounded-full flex-shrink-0"
                style={{
                  background: r.state === "warn" ? "#ef4444" : A,
                  boxShadow: r.state === "warn"
                    ? "0 0 8px rgba(239,68,68,0.7)"
                    : "0 0 6px rgba(1,116,220,0.5)",
                }}
              />
              <span style={{ ...Mono, color: FG, fontSize: 10.5, flex: 1 }}>{r.name}</span>
              <div className="flex items-center gap-1.5">
                <span
                  style={{
                    ...Mono,
                    color: r.state === "warn" ? "#ef4444" : SUB,
                    fontSize: 10.5,
                    fontVariantNumeric: "tabular-nums",
                    fontWeight: 600,
                  }}
                >
                  {r.pct}%
                </span>
                {r.state === "warn" && (
                  <span
                    style={{
                      ...Mono,
                      color: "#ef4444",
                      fontSize: 8.5,
                      padding: "1px 5px",
                      borderRadius: 3,
                      background: "rgba(239,68,68,0.18)",
                    }}
                  >
                    REVIEW
                  </span>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        <div
          className="mt-3 pt-3 flex items-center justify-between"
          style={{ borderTop: `1px solid ${BD}`, ...Mono, color: SUB, fontSize: 9.5 }}
        >
          <span>match threshold</span>
          <span style={{ color: A, fontWeight: 600 }}>96%</span>
        </div>
      </motion.div>
    </Frame>
  );
}

/* ──────────────────────────  DESIGN SYSTEM  ────────────────────────── */
function DesignSystem() {
  const components = [
    { name: "Button", v: "primary" },
    { name: "Tag", v: "small" },
    { name: "Input", v: "default" },
    { name: "Card", v: "elevated" },
    { name: "Table", v: "compact", active: true },
    { name: "Modal", v: "modal" },
    { name: "Stepper", v: "3-step" },
    { name: "Tabs", v: "underline" },
    { name: "Toast", v: "info" },
  ];

  const colors = [
    { c: "#0174DC", n: "primary" },
    { c: "#FEFEFF", n: "neutral" },
    { c: "#34d399", n: "success" },
    { c: "#fbbf24", n: "warn" },
    { c: "#ef4444", n: "danger" },
  ];

  return (
    <Frame>
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="relative w-[88%] max-w-[420px]"
      >
        {/* Floating token tooltip */}
        <motion.div
          initial={{ opacity: 0, y: 6 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.9, duration: 0.4 }}
          className="absolute z-10 rounded-lg px-3 py-2 shadow-xl"
          style={{
            top: -18,
            right: -8,
            background: "var(--bg)",
            border: `1px solid ${A}`,
            ...Mono,
            fontSize: 9.5,
            boxShadow: "0 12px 30px rgba(0,0,0,0.5)",
          }}
        >
          <div style={{ color: SUB }}>token</div>
          <div style={{ color: A, fontWeight: 600, marginTop: 2 }}>cardColor → #1C1D1F</div>
        </motion.div>

        {/* Main panel */}
        <div
          className="rounded-2xl p-5"
          style={{
            background: SURF,
            border: `1px solid ${BD}`,
            boxShadow: "0 30px 80px rgba(0,0,0,0.55)",
          }}
        >
          <div className="flex items-center justify-between mb-4">
            <div>
              <div style={{ ...Mono, color: SUB, fontSize: 9.5 }}>DESIGN SYSTEM</div>
              <div style={{ ...Mono, color: FG, fontSize: 13, fontWeight: 600, marginTop: 2 }}>
                Full coverage
              </div>
            </div>
            <div
              className="px-2 py-0.5 rounded"
              style={{ background: "var(--accent-soft)", color: A, ...Mono, fontSize: 9 }}
            >
              v1.0
            </div>
          </div>

          {/* Color row */}
          <div className="flex items-center gap-2 mb-4">
            {colors.map((cc, i) => (
              <motion.div
                key={cc.n}
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + i * 0.06, type: "spring", stiffness: 260 }}
                className="w-6 h-6 rounded-md flex-shrink-0"
                style={{
                  background: cc.c,
                  border: `1.5px solid var(--bg)`,
                  boxShadow: `0 0 0 1px ${BD}`,
                }}
                title={cc.n}
              />
            ))}
            <div
              className="ml-auto px-2 py-0.5 rounded"
              style={{ background: "var(--bg)", border: `1px solid ${BD}`, ...Mono, color: SUB, fontSize: 9 }}
            >
              tokens
            </div>
          </div>

          {/* Component grid */}
          <div className="grid grid-cols-3 gap-1.5">
            {components.map((c, i) => (
              <motion.div
                key={c.name}
                initial={{ opacity: 0, y: 6 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 + i * 0.04, duration: 0.35 }}
                className="rounded-lg py-2 px-2.5"
                style={{
                  background: c.active ? "var(--accent-soft)" : "var(--bg)",
                  border: `1px solid ${c.active ? A : BD}`,
                }}
              >
                <div
                  style={{
                    ...Mono,
                    color: c.active ? A : FG,
                    fontSize: 10.5,
                    fontWeight: 600,
                  }}
                >
                  {c.name}
                </div>
                <div style={{ ...Mono, color: SUB, fontSize: 8.5, marginTop: 1 }}>
                  {c.v}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </Frame>
  );
}

const map: Record<CaseIllustration, () => React.JSX.Element> = {
  support: Support,
  batch: Batch,
  designsystem: DesignSystem,
};

export default function CaseCardArt({ name }: { name: CaseIllustration }) {
  const C = map[name];
  return <C />;
}
