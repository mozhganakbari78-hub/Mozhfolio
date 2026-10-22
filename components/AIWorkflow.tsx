"use client";

import { motion } from "framer-motion";
import { useInView } from "@/lib/useInView";

const practices = [
  {
    k: "Scale",
    title: "AI for volume, me for the risky part",
    body: "Clustering a thousand support tickets is work nobody should do by hand. I let AI group them, then read the highest-risk cases myself before any of it became a design decision.",
  },
  {
    k: "Speed",
    title: "A prototype instead of a spec",
    body: "Requirements become something clickable in hours. On a consumer banking bot, that let the PM and me settle scope the same day rather than argue about a document, and production UI reached handoff two days later.",
  },
  {
    k: "Leverage",
    title: "A design team of agents",
    body: "I built a multi-agent setup in Claude Code: a lead agent scopes the problem and briefs seven specialists across research, UI, design systems, testing and handoff, connected to Figma through MCP. Every output comes back to me.",
  },
];

export default function AIWorkflow() {
  const { ref, inView } = useInView();

  return (
    <section id="ai" className="py-28 md:py-40 px-6" aria-labelledby="ai-heading">
      <div className="max-w-5xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="mb-16 md:mb-20 max-w-2xl"
        >
          <div className="mono-label mb-5" style={{ color: "var(--accent-ink)" }}>
            [ 05 ] AI in my workflow
          </div>
          <h2
            id="ai-heading"
            className="text-[28px] md:text-[42px] font-semibold tracking-tight leading-[1.02]"
            style={{ color: "var(--text-primary)", letterSpacing: "-0.03em" }}
          >
            AI handles the volume.{" "}
            <span style={{ color: "var(--text-secondary)" }}>The judgment stays mine.</span>
          </h2>
        </motion.div>

        {/* Three plain cards rather than the Capabilities list, so the two
            sections do not read as the same block twice. */}
        <div className="grid md:grid-cols-3 gap-4">
          {practices.map((p, i) => (
            <motion.div
              key={p.k}
              initial={{ opacity: 0, y: 14 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + i * 0.09, ease: [0.16, 1, 0.3, 1] }}
              className="rounded-2xl border p-6 md:p-7"
              style={{ borderColor: "var(--border-strong)", background: "var(--surface)" }}
            >
              <div className="mono-label mb-5" style={{ color: "var(--accent-ink)" }}>
                {p.k}
              </div>
              <h3
                className="text-[15.5px] font-semibold tracking-tight mb-2.5"
                style={{ color: "var(--text-primary)", letterSpacing: "-0.015em", lineHeight: 1.3 }}
              >
                {p.title}
              </h3>
              <p className="text-[13px] leading-relaxed" style={{ color: "var(--text-tertiary)" }}>
                {p.body}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.42 }}
          className="mt-10 pt-9 text-[16px] md:text-[18px] leading-[1.5]"
          style={{
            borderTop: "1px solid var(--border-subtle)",
            color: "var(--text-primary)",
            letterSpacing: "-0.015em",
          }}
        >
          AI speeds up my exploration.{" "}
          <span style={{ color: "var(--text-tertiary)" }}>
            Evidence and judgment drive my decisions.
          </span>
        </motion.p>
      </div>
    </section>
  );
}
