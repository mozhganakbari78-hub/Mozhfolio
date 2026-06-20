/**
 * Decorative SVG illustrations for project cards. Style mirrors the reference:
 * subtle dark surface, accent-colored glyphs, monospace labels.
 */

export type CaseIllustration = "support" | "batch" | "designsystem";

const A = "var(--accent-color)";
const FG = "var(--text-primary)";
const SUB = "var(--text-tertiary)";
const SURF = "var(--bg-secondary)";
const BD = "var(--border-strong)";

function Card({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
      <div
        className="absolute -right-24 -top-24 w-80 h-80 rounded-full opacity-30 blur-3xl pointer-events-none"
        style={{ background: A }}
        aria-hidden
      />
      {children}
    </div>
  );
}

const Mono: React.CSSProperties = {
  fontFamily: "var(--font-mono), ui-monospace, monospace",
  fontSize: 11,
  letterSpacing: 0.4,
};

function Support() {
  const rows = [
    { q: "can't log in", state: "Answered" },
    { q: "locked out of account", state: "Answered" },
    { q: "two-factor code expired", state: "Resolved" },
  ];
  return (
    <Card>
      <div
        className="relative w-[78%] max-w-[360px] rounded-xl p-5"
        style={{ background: SURF, border: `1px solid ${BD}` }}
      >
        <div className="flex gap-1.5 mb-4">
          <span className="w-2 h-2 rounded-full" style={{ background: "#3a3b3f" }} />
          <span className="w-2 h-2 rounded-full" style={{ background: "#3a3b3f" }} />
          <span className="w-2 h-2 rounded-full" style={{ background: "#3a3b3f" }} />
        </div>
        <div
          className="rounded-md px-3 py-2 mb-3"
          style={{ background: "var(--bg)", border: `1px solid ${BD}`, ...Mono, color: FG }}
        >
          can&apos;t log in<span className="inline-block w-[1px] h-3 ml-0.5 align-middle" style={{ background: A }} />
        </div>
        <div className="space-y-2">
          {rows.map((r) => (
            <div
              key={r.q}
              className="flex items-center gap-2 rounded-md px-2 py-2"
              style={{ background: "var(--bg)", border: `1px solid ${BD}` }}
            >
              <span className="w-1.5 h-1.5 rounded-full" style={{ background: A }} />
              <span className="flex-1 h-1.5 rounded-full" style={{ background: BD }} />
              <span
                className="px-2 py-0.5 rounded"
                style={{ ...Mono, color: A, background: "var(--accent-soft)", fontSize: 9.5 }}
              >
                {r.q}
              </span>
            </div>
          ))}
        </div>
      </div>
    </Card>
  );
}

function Batch() {
  const rows = [
    { name: "Amir K.", pct: "98%", ok: true },
    { name: "Sara R.", pct: "100%", ok: true },
    { name: "M. Reza", pct: "74%", ok: false },
    { name: "Niloo D.", pct: "99%", ok: true },
    { name: "Hossein", pct: "—", ok: null },
  ];
  return (
    <Card>
      <div
        className="relative w-[82%] max-w-[380px] rounded-xl p-4"
        style={{ background: SURF, border: `1px solid ${BD}` }}
      >
        <div className="flex items-center justify-between mb-3" style={{ ...Mono, color: SUB }}>
          <span>BATCH · 400 rows</span>
          <span style={{ color: A }}>verify ▸</span>
        </div>
        <div className="space-y-1.5">
          {rows.map((r, i) => (
            <div
              key={i}
              className="flex items-center gap-3 rounded-md px-3 py-2"
              style={{
                background: "var(--bg)",
                border: `1px solid ${r.ok === false ? "rgba(239,68,68,0.4)" : BD}`,
              }}
            >
              <span
                className="w-1.5 h-1.5 rounded-full"
                style={{
                  background: r.ok === true ? A : r.ok === false ? "#ef4444" : SUB,
                }}
              />
              <span style={{ ...Mono, color: FG, flex: 1 }}>{r.name}</span>
              <span
                style={{
                  ...Mono,
                  color: r.ok === false ? "#ef4444" : r.ok === true ? A : SUB,
                  fontVariantNumeric: "tabular-nums",
                }}
              >
                {r.pct}
              </span>
            </div>
          ))}
        </div>
      </div>
    </Card>
  );
}

function DesignSystem() {
  const tokens = ["Button", "Tag", "Input", "Card", "Table", "Modal", "Stepper", "Tabs", "Toast"];
  return (
    <Card>
      <div
        className="relative w-[82%] max-w-[380px] rounded-xl p-5"
        style={{ background: SURF, border: `1px solid ${BD}` }}
      >
        <div className="flex items-center justify-between mb-4" style={{ ...Mono, color: SUB }}>
          <span>DS · 29 components</span>
          <span style={{ color: A }}>v1.0</span>
        </div>
        <div className="grid grid-cols-3 gap-2">
          {tokens.map((t, i) => (
            <div
              key={t}
              className="rounded-md py-2.5 px-2 text-center"
              style={{
                background: i === 4 ? "var(--accent-soft)" : "var(--bg)",
                border: `1px solid ${i === 4 ? A : BD}`,
                ...Mono,
                color: i === 4 ? A : FG,
                fontSize: 10.5,
              }}
            >
              {t}
            </div>
          ))}
        </div>
        <div
          className="mt-4 rounded-md px-3 py-2 flex items-center justify-between"
          style={{ background: "var(--bg)", border: `1px solid ${BD}`, ...Mono, color: SUB }}
        >
          <span>cardColor</span>
          <span style={{ color: A }}>#1C1D1F</span>
        </div>
      </div>
    </Card>
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
