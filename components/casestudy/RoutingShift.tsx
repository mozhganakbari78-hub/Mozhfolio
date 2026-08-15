"use client";

import { motion } from "framer-motion";

const A = "var(--accent-color)";
const SUB = "var(--text-tertiary)";
const FG = "var(--text-primary)";
const BD = "var(--border-strong)";

const Mono: React.CSSProperties = {
  fontFamily: "var(--font-mono), ui-monospace, monospace",
  letterSpacing: 0.3,
};

/**
 * The core shift of the case: who makes the routing decision.
 * Before, the user has to guess between two destinations. After, the
 * product surfaces the answer inside the moment of uncertainty.
 * Reveals once on scroll — no looping animation (keeps scroll cheap).
 */
export default function RoutingShift() {
  const reveal = (delay: number) => ({
    initial: { opacity: 0, y: 10 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.2 },
    transition: { delay, duration: 0.45, ease: [0.16, 1, 0.3, 1] as const },
  });

  const Node = ({
    children,
    tone = "muted",
  }: {
    children: React.ReactNode;
    tone?: "muted" | "accent" | "danger";
  }) => (
    <span
      className="rounded-lg px-3 py-2 text-center"
      style={{
        ...Mono,
        fontSize: 11,
        lineHeight: 1.35,
        color: tone === "accent" ? A : tone === "danger" ? "#e8836e" : SUB,
        background:
          tone === "accent"
            ? "var(--accent-soft)"
            : tone === "danger"
            ? "rgba(232,131,110,.08)"
            : "var(--bg-secondary)",
        border: `1px solid ${
          tone === "accent" ? A : tone === "danger" ? "rgba(232,131,110,.4)" : BD
        }`,
      }}
    >
      {children}
    </span>
  );

  const Arrow = () => (
    <span aria-hidden style={{ color: BD, fontSize: 13, flexShrink: 0 }}>
      &rarr;
    </span>
  );

  return (
    <div className="cs-routing">
      {/* BEFORE */}
      <motion.div className="cs-routing-col" {...reveal(0)}>
        <div className="cs-routing-head">
          <span className="tag" style={{ color: "#e8836e" }}>
            Before
          </span>
          <span className="who">The user makes the routing decision</span>
        </div>

        <div className="cs-routing-flow">
          <Node>Question</Node>
          <Arrow />
          <Node tone="danger">Decide where to go</Node>
        </div>

        <div className="cs-routing-split">
          <div className="branch">
            <span className="edge" aria-hidden />
            <Node>Browse FAQ</Node>
          </div>
          <div className="branch">
            <span className="edge" aria-hidden />
            <Node>Create ticket</Node>
          </div>
        </div>

        <p className="cs-routing-note">
          A choice made <em>before</em> the user understands their own problem.
        </p>
      </motion.div>

      {/* AFTER */}
      <motion.div className="cs-routing-col is-after" {...reveal(0.15)}>
        <div className="cs-routing-head">
          <span className="tag" style={{ color: A }}>
            After
          </span>
          <span className="who">The system helps make the decision</span>
        </div>

        <div className="cs-routing-flow">
          <Node tone="accent">Describe the problem</Node>
          <Arrow />
          <Node tone="accent">Relevant answers appear</Node>
        </div>

        <div className="cs-routing-split">
          <div className="branch">
            <span className="edge" aria-hidden />
            <Node tone="accent">Resolved → back to task</Node>
          </div>
          <div className="branch">
            <span className="edge" aria-hidden />
            <Node>Not resolved → ticket, with context</Node>
          </div>
        </div>

        <p className="cs-routing-note">
          Support content surfaces <em>inside</em> the moment of uncertainty.
        </p>
      </motion.div>
    </div>
  );
}
