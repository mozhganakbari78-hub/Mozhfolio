"use client";

import { motion } from "framer-motion";

export type CaseIllustration = "support" | "batch" | "designsystem" | "errorcopy";

const A = "var(--accent-color)";
const AI = "var(--accent-ink)";
const LINE = "rgba(255,255,255,0.10)";
const EASE = [0.16, 1, 0.3, 1] as const;

/**
 * One mark per case, not a miniature of the product. At card size a detailed
 * mock reads as texture; a single shape reads as an idea. Every reveal runs
 * once and nothing loops.
 */
function Frame({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
      <div
        className="absolute -right-24 -top-24 w-[340px] h-[340px] rounded-full opacity-[0.10] blur-3xl pointer-events-none"
        style={{ background: A }}
        aria-hidden
      />
      <div className="relative w-[62%] max-w-[240px]">{children}</div>
    </div>
  );
}

/* Support: a question typed, and the answer arriving under it. */
function Support() {
  return (
    <Frame>
      <div className="grid gap-3">
        <motion.div
          className="h-9 rounded-lg"
          style={{ border: `1px solid ${LINE}` }}
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: EASE }}
        />
        <div className="grid gap-2 pl-3">
          {["100%", "72%", "54%"].map((w, i) => (
            <motion.span
              key={w}
              className="h-[6px] rounded-full"
              style={{ width: w, background: i === 0 ? A : LINE }}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.25 + i * 0.1, duration: 0.45, ease: EASE }}
            />
          ))}
        </div>
      </div>
    </Frame>
  );
}

/* Batch: a stack of rows, one of them broken, the rest untouched. */
function Batch() {
  return (
    <Frame>
      <div className="grid gap-[7px]">
        {Array.from({ length: 9 }, (_, i) => (
          <motion.span
            key={i}
            className="h-[7px] rounded-full"
            style={{
              background: i === 5 ? "#e8836e" : LINE,
              boxShadow: i === 5 ? "0 0 14px rgba(232,131,110,0.45)" : "none",
            }}
            initial={{ opacity: 0, scaleX: 0.4 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.06 * i, duration: 0.4, ease: EASE }}
          />
        ))}
      </div>
    </Frame>
  );
}

/* Design system: one shape repeated, and the one exception. */
function DesignSystem() {
  return (
    <Frame>
      <div className="grid grid-cols-4 gap-2.5">
        {Array.from({ length: 12 }, (_, i) => (
          <motion.span
            key={i}
            className="aspect-square rounded-md"
            style={{
              background: i === 6 ? A : "transparent",
              border: `1px solid ${i === 6 ? A : LINE}`,
            }}
            initial={{ opacity: 0, scale: 0.7 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.03 * i, duration: 0.35, ease: EASE }}
          />
        ))}
      </div>
    </Frame>
  );
}

/* Error copy: a message that stops, and one that carries on to a next step. */
function ErrorCopy() {
  return (
    <Frame>
      <div className="grid gap-4">
        <motion.div
          className="rounded-lg px-3 py-2.5 grid gap-1.5"
          style={{ border: "1px solid rgba(232,131,110,0.35)" }}
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45, ease: EASE }}
        >
          <span className="h-[6px] rounded-full" style={{ width: "62%", background: "#e8836e" }} />
        </motion.div>
        <motion.div
          className="rounded-lg px-3 py-2.5 grid gap-1.5"
          style={{ border: `1px solid ${AI}`, background: "var(--accent-soft)" }}
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.22, duration: 0.45, ease: EASE }}
        >
          <span className="h-[6px] rounded-full" style={{ width: "82%", background: AI }} />
          <span className="h-[6px] rounded-full" style={{ width: "58%", background: LINE }} />
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
};

export default function CaseCardArt({ name }: { name: CaseIllustration }) {
  const C = map[name];
  return <C />;
}
