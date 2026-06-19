"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import type { Block, CaseStudy } from "@/data/caseStudies";
import BackToTop from "@/components/BackToTop";

const ease = [0.16, 1, 0.3, 1] as [number, number, number, number];

function BlockView({ block }: { block: Block }) {
  switch (block.type) {
    case "section":
      return (
        <div>
          <h2
            className="text-2xl md:text-3xl font-semibold tracking-tight mb-5"
            style={{ color: "var(--text-primary)", letterSpacing: "-0.02em" }}
          >
            {block.heading}
          </h2>
          <div className="space-y-4">
            {block.body.map((p, i) => (
              <p
                key={i}
                className="text-base md:text-lg leading-relaxed"
                style={{ color: "var(--text-secondary)" }}
              >
                {p}
              </p>
            ))}
          </div>
        </div>
      );

    case "list":
      return (
        <div>
          <h2
            className="text-2xl md:text-3xl font-semibold tracking-tight mb-5"
            style={{ color: "var(--text-primary)", letterSpacing: "-0.02em" }}
          >
            {block.heading}
          </h2>
          {block.intro && (
            <p
              className="text-base md:text-lg leading-relaxed mb-5"
              style={{ color: "var(--text-secondary)" }}
            >
              {block.intro}
            </p>
          )}
          <ul className="space-y-3">
            {block.items.map((item, i) => (
              <li
                key={i}
                className="flex gap-3 text-base md:text-lg leading-relaxed"
                style={{ color: "var(--text-secondary)" }}
              >
                <span
                  className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full"
                  style={{ background: "var(--accent-color)" }}
                  aria-hidden
                />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      );

    case "table":
      return (
        <div>
          <h2
            className="text-2xl md:text-3xl font-semibold tracking-tight mb-5"
            style={{ color: "var(--text-primary)", letterSpacing: "-0.02em" }}
          >
            {block.heading}
          </h2>
          <div
            className="overflow-x-auto rounded-2xl border"
            style={{ borderColor: "var(--border)", background: "var(--surface)" }}
          >
            <table className="w-full text-left text-sm md:text-base">
              <thead>
                <tr style={{ borderBottom: "1px solid var(--border)" }}>
                  {block.columns.map((c) => (
                    <th
                      key={c}
                      className="px-4 py-3 font-medium whitespace-nowrap"
                      style={{ color: "var(--text-tertiary)" }}
                    >
                      {c}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {block.rows.map((row, i) => (
                  <tr key={i} style={{ borderTop: "1px solid var(--border)" }}>
                    {row.map((cell, j) => (
                      <td
                        key={j}
                        className="px-4 py-3"
                        style={{
                          color: j === 0 ? "var(--accent-color)" : "var(--text-secondary)",
                        }}
                      >
                        {cell}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      );

    case "quote":
      return (
        <blockquote
          className="border-l-2 pl-6 py-2 text-xl md:text-2xl font-medium leading-snug"
          style={{ borderColor: "var(--accent-color)", color: "var(--text-primary)" }}
        >
          {block.text}
        </blockquote>
      );
  }
}

export default function CaseStudyView({ cs }: { cs: CaseStudy }) {
  return (
    <main className="px-6 py-20 md:py-28">
      <article className="max-w-3xl mx-auto">
        {/* Back link */}
        <Link
          href="/#projects"
          data-hand
          className="inline-flex items-center gap-2 text-sm mb-12 transition-opacity hover:opacity-70"
          style={{ color: "var(--text-tertiary)" }}
        >
          <ArrowLeft size={15} />
          Back to work
        </Link>

        {/* Header */}
        <motion.header
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease }}
        >
          <div className="mono-label mb-5" style={{ color: "var(--accent-color)" }}>
            [ {cs.index} ] — {cs.meta}
          </div>
          <h1
            className="text-4xl md:text-6xl font-semibold tracking-tight leading-[1.04] mb-6"
            style={{ color: "var(--text-primary)", letterSpacing: "-0.03em" }}
          >
            {cs.title}
          </h1>
          <p
            className="text-lg md:text-xl leading-relaxed"
            style={{ color: "var(--text-secondary)" }}
          >
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
        </motion.header>

        {/* Facts */}
        <motion.dl
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease }}
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

        {/* Body blocks */}
        <div className="mt-16 md:mt-20 space-y-14 md:space-y-16">
          {cs.blocks.map((block, i) => (
            <motion.section
              key={i}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, ease }}
            >
              <BlockView block={block} />
            </motion.section>
          ))}
        </div>

        {/* Footer nav */}
        <div className="mt-20 pt-10 border-t" style={{ borderColor: "var(--border)" }}>
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
      </article>

      <BackToTop />
    </main>
  );
}
