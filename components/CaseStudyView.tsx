"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";
import type { Block, CaseStudy } from "@/data/caseStudies";
import BackToTop from "@/components/BackToTop";

const ease = [0.16, 1, 0.3, 1] as [number, number, number, number];

function Reveal({
  children,
  delay = 0,
}: {
  children: React.ReactNode;
  delay?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-70px" }}
      transition={{ duration: 0.65, delay, ease }}
    >
      {children}
    </motion.div>
  );
}

function Kicker({ children }: { children?: string }) {
  if (!children) return null;
  return (
    <div className="mono-label mb-4" style={{ color: "var(--accent-color)" }}>
      {children}
    </div>
  );
}

function Heading({ children }: { children: string }) {
  return (
    <h2
      className="text-2xl md:text-4xl font-semibold tracking-tight"
      style={{ color: "var(--text-primary)", letterSpacing: "-0.025em" }}
    >
      {children}
    </h2>
  );
}

function BlockView({ block }: { block: Block }) {
  switch (block.type) {
    case "lead":
      return (
        <Reveal>
          <p
            className="text-2xl md:text-4xl font-medium leading-[1.25] tracking-tight"
            style={{ color: "var(--text-primary)", letterSpacing: "-0.02em" }}
          >
            {block.text}
          </p>
        </Reveal>
      );

    case "stats":
      // Bento grid: first card spans 2 cols on md, rest fill naturally
      return (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
          {block.items.map((s, i) => (
            <Reveal key={i} delay={i * 0.07}>
              <div
                className={`h-full rounded-2xl border p-6 md:p-7 flex flex-col justify-between transition-all duration-300 hover:-translate-y-0.5 ${i === 0 ? "md:col-span-2" : ""}`}
                style={{
                  borderColor: "var(--border-strong)",
                  background: i === 0 ? "var(--accent-soft)" : "var(--surface)",
                }}
              >
                <div
                  className={`font-semibold tracking-tight mb-2 ${i === 0 ? "text-4xl md:text-5xl" : "text-3xl md:text-4xl"}`}
                  style={{ color: "var(--accent-color)", letterSpacing: "-0.03em" }}
                >
                  {s.value}
                </div>
                <div className="text-xs md:text-sm leading-snug mt-2" style={{ color: "var(--text-secondary)" }}>
                  {s.label}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      );

    case "section":
      return (
        <Reveal>
          <Kicker>{block.kicker}</Kicker>
          <Heading>{block.heading}</Heading>
          <div className="space-y-4 mt-6 max-w-2xl">
            {block.body.map((p, i) => (
              <p key={i} className="text-base md:text-lg leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                {p}
              </p>
            ))}
          </div>
        </Reveal>
      );

    case "split":
      return (
        <Reveal>
          <div className="grid md:grid-cols-[0.8fr_1.4fr] gap-8 md:gap-12">
            <div>
              <Kicker>{block.kicker}</Kicker>
              <Heading>{block.heading}</Heading>
            </div>
            <div className="space-y-4 md:pt-1">
              {block.body.map((p, i) => (
                <p key={i} className="text-base md:text-lg leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                  {p}
                </p>
              ))}
            </div>
          </div>
        </Reveal>
      );

    case "cards":
      return (
        <div>
          <Reveal>
            <Kicker>{block.kicker}</Kicker>
            {block.heading && <Heading>{block.heading}</Heading>}
          </Reveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
            {block.items.map((c, i) => (
              <Reveal key={i} delay={i * 0.07}>
                <div
                  className="group h-full rounded-2xl border p-6 md:p-7 transition-all duration-300 hover:-translate-y-1"
                  style={{ borderColor: "var(--border-strong)", background: "var(--surface)" }}
                >
                  <div
                    className="mb-4 inline-flex h-8 w-8 items-center justify-center rounded-full text-sm font-semibold"
                    style={{ background: "var(--accent-soft)", color: "var(--accent-color)" }}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <h3 className="text-lg font-semibold mb-2" style={{ color: "var(--text-primary)" }}>
                    {c.title}
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                    {c.text}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      );

    case "steps":
      return (
        <div>
          <Reveal>
            <Kicker>{block.kicker}</Kicker>
            <Heading>{block.heading}</Heading>
          </Reveal>
          <div className="mt-8 space-y-3">
            {block.items.map((s, i) => (
              <Reveal key={i} delay={i * 0.06}>
                <div
                  className="flex gap-5 rounded-2xl border p-5 md:p-6"
                  style={{ borderColor: "var(--border)", background: "var(--surface)" }}
                >
                  <div
                    className="shrink-0 font-mono text-sm pt-0.5"
                    style={{ color: "var(--accent-color)" }}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1" style={{ color: "var(--text-primary)" }}>
                      {s.title}
                    </h3>
                    <p className="text-sm md:text-base leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                      {s.text}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      );

    case "compare":
      return (
        <div>
          <Reveal>
            <Kicker>{block.kicker}</Kicker>
            <Heading>{block.heading}</Heading>
          </Reveal>
          <div className="grid md:grid-cols-2 gap-4 mt-8 items-stretch">
            <Reveal>
              <div
                className="h-full rounded-2xl border p-6 md:p-8"
                style={{ borderColor: "var(--border)", background: "var(--bg-secondary)" }}
              >
                <div className="mono-label mb-3" style={{ color: "var(--text-tertiary)" }}>
                  Before
                </div>
                <h3 className="text-lg font-semibold mb-3" style={{ color: "var(--text-secondary)" }}>
                  {block.before.title}
                </h3>
                <p className="text-sm md:text-base leading-relaxed" style={{ color: "var(--text-tertiary)" }}>
                  {block.before.text}
                </p>
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <div
                className="relative h-full rounded-2xl border p-6 md:p-8"
                style={{ borderColor: "var(--accent-color)", background: "var(--surface)" }}
              >
                <div
                  className="pointer-events-none absolute inset-0 rounded-2xl"
                  style={{ boxShadow: "inset 0 0 60px var(--accent-soft)" }}
                  aria-hidden
                />
                <div className="relative">
                  <div className="mono-label mb-3" style={{ color: "var(--accent-color)" }}>
                    After
                  </div>
                  <h3 className="text-lg font-semibold mb-3" style={{ color: "var(--text-primary)" }}>
                    {block.after.title}
                  </h3>
                  <p className="text-sm md:text-base leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                    {block.after.text}
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      );

    case "list":
      return (
        <Reveal>
          <Kicker>{block.kicker}</Kicker>
          <Heading>{block.heading}</Heading>
          {block.intro && (
            <p className="text-base md:text-lg leading-relaxed mt-5 max-w-2xl" style={{ color: "var(--text-secondary)" }}>
              {block.intro}
            </p>
          )}
          <ul className="mt-7 grid sm:grid-cols-2 gap-x-8 gap-y-4">
            {block.items.map((item, i) => (
              <li
                key={i}
                className="flex gap-3 text-base leading-relaxed"
                style={{ color: "var(--text-secondary)" }}
              >
                <ArrowRight size={16} className="mt-1 shrink-0" style={{ color: "var(--accent-color)" }} />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </Reveal>
      );

    case "table":
      return (
        <Reveal>
          <Kicker>{block.kicker}</Kicker>
          <Heading>{block.heading}</Heading>
          <div
            className="overflow-x-auto rounded-2xl border mt-8"
            style={{ borderColor: "var(--border)", background: "var(--surface)" }}
          >
            <table className="w-full text-left text-sm md:text-base">
              <thead>
                <tr style={{ borderBottom: "1px solid var(--border)" }}>
                  {block.columns.map((c) => (
                    <th key={c} className="px-4 py-3 font-medium whitespace-nowrap" style={{ color: "var(--text-tertiary)" }}>
                      {c}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {block.rows.map((row, i) => (
                  <tr key={i} className="transition-colors hover:bg-[var(--bg-secondary)]" style={{ borderTop: "1px solid var(--border)" }}>
                    {row.map((cell, j) => (
                      <td
                        key={j}
                        className="px-4 py-3"
                        style={{ color: j === 0 ? "var(--accent-color)" : j === 1 ? "var(--text-primary)" : "var(--text-secondary)" }}
                      >
                        {cell}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Reveal>
      );

    case "quote":
      return (
        <Reveal>
          <figure className="max-w-3xl mx-auto text-center">
            <div className="text-5xl leading-none mb-4" style={{ color: "var(--accent-color)" }} aria-hidden>
              &ldquo;
            </div>
            <blockquote
              className="text-2xl md:text-3xl font-medium leading-snug tracking-tight"
              style={{ color: "var(--text-primary)", letterSpacing: "-0.02em" }}
            >
              {block.text}
            </blockquote>
            {block.attribution && (
              <figcaption className="mono-label mt-5" style={{ color: "var(--text-tertiary)" }}>
                {block.attribution}
              </figcaption>
            )}
          </figure>
        </Reveal>
      );
  }
}

export default function CaseStudyView({ cs }: { cs: CaseStudy }) {
  return (
    <main className="px-6 pb-24">
      {/* Hero */}
      <header className="relative max-w-3xl mx-auto pt-20 md:pt-28">
        <div className="accent-glow pointer-events-none absolute -top-10 left-1/2 -translate-x-1/2 h-72 w-72 opacity-60" aria-hidden />

        <Link
          href="/#projects"
          data-hand
          className="relative inline-flex items-center gap-2 text-sm mb-12 transition-opacity hover:opacity-70"
          style={{ color: "var(--text-tertiary)" }}
        >
          <ArrowLeft size={15} />
          Back to work
        </Link>

        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, ease }}>
          <div className="mono-label mb-5" style={{ color: "var(--accent-color)" }}>
            [ {cs.index} ] — {cs.meta}
          </div>
          <h1
            className="text-4xl md:text-6xl font-semibold tracking-tight leading-[1.04] mb-6"
            style={{ color: "var(--text-primary)", letterSpacing: "-0.03em" }}
          >
            {cs.title}
          </h1>
          <p className="text-lg md:text-xl leading-relaxed" style={{ color: "var(--text-secondary)" }}>
            {cs.description}
          </p>
          <div className="flex flex-wrap gap-2 mt-7">
            {cs.tags.map((tag) => (
              <span
                key={tag}
                className="mono-label px-2.5 py-1 rounded-full border"
                style={{ color: "var(--text-tertiary)", borderColor: "var(--border)" }}
              >
                {tag}
              </span>
            ))}
          </div>
        </motion.div>

        <motion.dl
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.12, ease }}
          className="grid grid-cols-2 sm:grid-cols-4 gap-px mt-12 rounded-2xl overflow-hidden border"
          style={{ borderColor: "var(--border)", background: "var(--border)" }}
        >
          {cs.facts.map((f) => (
            <div key={f.label} className="p-5" style={{ background: "var(--surface)" }}>
              <dt className="mono-label mb-1.5" style={{ color: "var(--text-tertiary)" }}>
                {f.label}
              </dt>
              <dd className="text-sm font-medium" style={{ color: "var(--text-primary)" }}>
                {f.value}
              </dd>
            </div>
          ))}
        </motion.dl>
      </header>

      {/* Body — wider than the hero so cards and tables can breathe */}
      <div className="max-w-4xl mx-auto mt-20 md:mt-28 space-y-20 md:space-y-28">
        {cs.blocks.map((block, i) => (
          <BlockView key={i} block={block} />
        ))}
      </div>

      {/* Footer nav */}
      <div className="max-w-4xl mx-auto mt-24 pt-10 border-t" style={{ borderColor: "var(--border)" }}>
        <Link
          href="/#projects"
          data-hand
          className="inline-flex items-center gap-2 text-sm transition-opacity hover:opacity-70"
          style={{ color: "var(--accent-color)" }}
        >
          <ArrowLeft size={15} />
          Back to all work
        </Link>
      </div>

      <BackToTop />
    </main>
  );
}
