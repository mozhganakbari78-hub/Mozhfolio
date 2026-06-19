"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { caseStudies, type CaseStudy } from "@/data/caseStudies";

const ease = [0.16, 1, 0.3, 1] as [number, number, number, number];

/* ── Ghost SVG illustrations — outline only, same colour family as surface ── */

function IllustrationSupport() {
  return (
    <svg viewBox="0 0 320 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <g stroke="currentColor" strokeWidth="1.2" opacity="0.18">
        {/* Ticket rows */}
        {[0,1,2,3,4].map(i => (
          <g key={i} transform={`translate(0, ${i * 36})`}>
            <rect x="20" y="8" width="280" height="24" rx="6" />
            <rect x="32" y="15" width="60" height="10" rx="3" />
            <rect x="104" y="15" width="140" height="10" rx="3" />
            <circle cx="280" cy="20" r="6" />
          </g>
        ))}
        {/* Funnel shape */}
        <path d="M20 195 L100 120 L220 120 L300 195" strokeDasharray="4 4" />
        <line x1="100" y1="120" x2="220" y2="120" />
        <rect x="130" y="135" width="60" height="18" rx="4" />
      </g>
    </svg>
  );
}

function IllustrationBatch() {
  return (
    <svg viewBox="0 0 320 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <g stroke="currentColor" strokeWidth="1.2" opacity="0.18">
        {/* Spreadsheet grid */}
        {[0,1,2,3,4,5].map(i => (
          <line key={`h${i}`} x1="20" y1={20 + i * 30} x2="300" y2={20 + i * 30} />
        ))}
        {[0,1,2,3,4].map(i => (
          <line key={`v${i}`} x1={20 + i * 70} y1="20" x2={20 + i * 70} y2="170" />
        ))}
        {/* Error row highlight */}
        <rect x="20" y="80" width="280" height="30" rx="0" strokeDasharray="3 3" />
        {/* Check marks on valid rows */}
        {[20,50,110,140].map((y,i) => (
          <path key={i} d={`M258 ${y+10} l7 7 l12-12`} />
        ))}
        {/* X on error row */}
        <path d="M258 87 l12 12 M270 87 l-12 12" />
        {/* Arrow showing before→after */}
        <path d="M160 180 L160 195" strokeWidth="2" />
        <path d="M154 190 L160 198 L166 190" />
      </g>
    </svg>
  );
}

function IllustrationSystem() {
  return (
    <svg viewBox="0 0 320 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <g stroke="currentColor" strokeWidth="1.2" opacity="0.18">
        {/* Component tree */}
        {/* Root */}
        <rect x="120" y="10" width="80" height="28" rx="6" />
        <line x1="160" y1="38" x2="160" y2="58" />
        {/* Second level */}
        <line x1="80" y1="58" x2="240" y2="58" />
        <rect x="40" y="58" width="80" height="28" rx="6" />
        <rect x="200" y="58" width="80" height="28" rx="6" />
        <line x1="80" y1="86" x2="80" y2="106" />
        <line x1="240" y1="86" x2="240" y2="106" />
        {/* Third level */}
        <rect x="20" y="106" width="50" height="24" rx="5" />
        <rect x="80" y="106" width="50" height="24" rx="5" />
        <rect x="215" y="106" width="50" height="24" rx="5" />
        {/* Token swatches */}
        {[0,1,2,3,4,5].map(i => (
          <circle key={i} cx={30 + i * 44} cy="165" r="14" />
        ))}
        {/* Connector lines */}
        <line x1="80" y1="130" x2="80" y2="151" strokeDasharray="3 3" />
        <line x1="80" y1="151" x2="30" y2="151" strokeDasharray="3 3" />
        <line x1="30" y1="151" x2="30" y2="151" strokeDasharray="3 3" />
      </g>
    </svg>
  );
}

const illustrations: Record<string, React.FC> = {
  "reducing-support-friction": IllustrationSupport,
  "batch-transfer": IllustrationBatch,
  "design-system": IllustrationSystem,
};

/* ── Card ────────────────────────────────────────────────────────────────── */

function CaseCard({ cs, index }: { cs: CaseStudy; index: number }) {
  const Illustration = illustrations[cs.slug] ?? IllustrationSupport;
  return (
    <motion.div
      initial={{ opacity: 0, y: 36 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.7, delay: index * 0.1, ease }}
    >
      <Link
        href={`/work/${cs.slug}`}
        data-hand
        aria-label={`Read case study: ${cs.title}`}
        className="group relative flex flex-col overflow-hidden rounded-3xl border transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl"
        style={{
          borderColor: "var(--border-strong)",
          background: "var(--surface)",
          minHeight: 380,
        }}
      >
        {/* Ambient glow on hover */}
        <div
          className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-700 group-hover:opacity-100 rounded-3xl"
          style={{ boxShadow: "inset 0 0 80px var(--accent-soft)" }}
          aria-hidden
        />

        {/* Top content area */}
        <div className="relative flex-1 p-7 md:p-8">
          {/* Icon badge + meta */}
          <div className="flex items-center gap-3 mb-5">
            <div
              className="flex h-9 w-9 items-center justify-center rounded-xl text-sm font-bold"
              style={{ background: "var(--accent-soft)", color: "var(--accent-color)" }}
            >
              {cs.index}
            </div>
            <span className="mono-label" style={{ color: "var(--text-tertiary)" }}>
              {cs.meta}
            </span>
          </div>

          {/* Title */}
          <h3
            className="text-xl md:text-2xl font-semibold tracking-tight leading-snug mb-3 transition-colors duration-300 group-hover:text-[var(--accent-color)]"
            style={{ color: "var(--text-primary)", letterSpacing: "-0.02em" }}
          >
            {cs.title}
          </h3>

          {/* Description */}
          <p
            className="text-sm leading-relaxed mb-5"
            style={{ color: "var(--text-secondary)" }}
          >
            {cs.description}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-1.5">
            {cs.tags.map((tag) => (
              <span
                key={tag}
                className="mono-label px-2 py-0.5 rounded-full border"
                style={{ color: "var(--text-tertiary)", borderColor: "var(--border)" }}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Ghost illustration area */}
        <div
          className="relative h-44 overflow-hidden"
          style={{ color: "var(--accent-color)", background: "var(--bg-secondary)" }}
        >
          {/* Subtle top fade */}
          <div
            className="pointer-events-none absolute inset-x-0 top-0 h-12 z-10"
            style={{ background: "linear-gradient(to bottom, var(--surface), transparent)" }}
            aria-hidden
          />
          <div className="absolute inset-0 flex items-end">
            <Illustration />
          </div>
          {/* CTA */}
          <div className="absolute right-6 bottom-6 z-20">
            <span
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full text-xs font-medium transition-all duration-300 group-hover:gap-2.5"
              style={{ background: "var(--accent-color)", color: "#fff" }}
            >
              Read case study
              <ArrowUpRight size={13} />
            </span>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}

/* ── Section ─────────────────────────────────────────────────────────────── */

export default function Projects() {
  return (
    <section id="projects" className="py-28 md:py-40 px-6" aria-labelledby="projects-heading">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease }}
          className="mb-14 md:mb-16 flex flex-col md:flex-row md:items-end md:justify-between gap-6"
        >
          <div>
            <div className="mono-label mb-4" style={{ color: "var(--accent-color)" }}>
              [ 02 ] — Selected Work
            </div>
            <h2
              id="projects-heading"
              className="text-4xl md:text-6xl font-semibold tracking-tight leading-[1.02]"
              style={{ color: "var(--text-primary)", letterSpacing: "-0.03em" }}
            >
              Case studies, in full.
            </h2>
          </div>
          <p className="text-sm md:text-base max-w-xs" style={{ color: "var(--text-tertiary)" }}>
            Context, decisions, and the trade-offs behind each one.
          </p>
        </motion.div>

        {/* Card grid — 3 columns on large screens */}
        <div className="grid gap-5 md:gap-6 md:grid-cols-3">
          {caseStudies.map((cs, i) => (
            <CaseCard key={cs.slug} cs={cs} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
