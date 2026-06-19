"use client";

import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import { projects, type Project, type CaseStudyBlock } from "@/data/projects";
import { useTheme } from "./ThemeProvider";
import { Sun, Moon } from "lucide-react";

const ease = [0.16, 1, 0.3, 1] as [number, number, number, number];

function CaseImage({ src, srcLight, caption, color }: { src: string; srcLight?: string; caption?: string; color: string }) {
  const [ok, setOk] = useState(true);
  const { theme } = useTheme();
  const activeSrc = theme === "light" && srcLight ? srcLight : src;
  if (!ok) return null;
  return (
    <motion.figure
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.7, ease }}
      className="my-4"
    >
      <div
        className="relative overflow-hidden rounded-lg border"
        style={{ borderColor: "var(--border)", background: "var(--bg-secondary)" }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={activeSrc}
          alt={caption ?? "Case study visual"}
          loading="lazy"
          onError={() => setOk(false)}
          className="w-full h-auto block"
        />
      </div>
      {caption && (
        <figcaption className="mt-4 flex items-start gap-3 text-sm" style={{ color: "var(--text-tertiary)" }}>
          <span
            className="mt-0.5 inline-flex w-6 h-6 flex-shrink-0 items-center justify-center rounded-sm"
            style={{ background: `${color}1a`, color }}
          >
            <ArrowUpRight size={13} />
          </span>
          <span className="leading-relaxed max-w-xl">{caption}</span>
        </figcaption>
      )}
    </motion.figure>
  );
}

function Block({ block, color }: { block: CaseStudyBlock; color: string }) {
  const reveal = {
    initial: { opacity: 0, y: 28 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-60px" },
    transition: { duration: 0.7, ease },
  };

  if (block.type === "image") {
    return <CaseImage src={block.src} srcLight={block.srcLight} caption={block.caption} color={color} />;
  }

  if (block.type === "metrics") {
    return (
      <motion.div
        {...reveal}
        className="grid grid-cols-1 sm:grid-cols-3 border-t border-b my-4"
        style={{ borderColor: "var(--border-strong)" }}
      >
        {block.items.map((m, i) => (
          <div
            key={i}
            className="py-10 px-6 border-b sm:border-b-0 sm:border-r last:border-r-0 last:border-b-0"
            style={{ borderColor: "var(--border)" }}
          >
            <div
              className="text-4xl md:text-5xl font-semibold tracking-tight mb-2"
              style={{ color: "var(--text-primary)", letterSpacing: "-0.03em" }}
            >
              {m.value}
            </div>
            <div className="mono-label" style={{ color: "var(--text-tertiary)" }}>
              {m.label}
            </div>
          </div>
        ))}
      </motion.div>
    );
  }

  if (block.type === "quote") {
    return (
      <motion.blockquote
        {...reveal}
        className="py-12 my-6 border-l-2 pl-8 md:pl-12"
        style={{ borderColor: color }}
      >
        <p
          className="text-2xl md:text-3xl font-light leading-snug tracking-tight"
          style={{ color: "var(--text-primary)", letterSpacing: "-0.02em" }}
        >
          {block.body}
        </p>
      </motion.blockquote>
    );
  }

  if (block.type === "list") {
    return (
      <motion.div {...reveal} className="py-4">
        <BlockHeader label={block.label} heading={block.heading} />
        <div className="mt-10 grid gap-px" style={{ background: "var(--border)" }}>
          {block.items.map((item, i) => (
            <div
              key={i}
              className="grid grid-cols-[auto_1fr] gap-6 md:gap-10 p-6 md:p-8"
              style={{ background: "var(--bg)" }}
            >
              <span
                className="font-mono text-sm pt-0.5"
                style={{ color }}
              >
                {String(i + 1).padStart(2, "0")}
              </span>
              <div>
                <h4
                  className="text-base md:text-lg font-medium mb-2"
                  style={{ color: "var(--text-primary)" }}
                >
                  {item.title}
                </h4>
                <p
                  className="text-sm md:text-base leading-relaxed"
                  style={{ color: "var(--text-secondary)" }}
                >
                  {item.body}
                </p>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    );
  }

  // section or highlight
  const isHighlight = block.type === "highlight";
  return (
    <motion.div
      {...reveal}
      className={isHighlight ? "py-10 px-6 md:px-10 my-6 rounded-sm" : "py-4"}
      style={
        isHighlight
          ? { background: "var(--bg-secondary)", border: "1px solid var(--border)" }
          : undefined
      }
    >
      <BlockHeader label={block.label} heading={block.heading} accent={isHighlight ? color : undefined} />
      <div className="mt-6 space-y-5 max-w-2xl">
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
    </motion.div>
  );
}

function BlockHeader({
  label,
  heading,
  accent,
}: {
  label: string;
  heading: string;
  accent?: string;
}) {
  return (
    <div>
      <div className="mono-label mb-3" style={{ color: accent ?? "var(--text-tertiary)" }}>
        {label}
      </div>
      <h3
        className="text-2xl md:text-3xl font-semibold tracking-tight"
        style={{ color: "var(--text-primary)", letterSpacing: "-0.02em" }}
      >
        {heading}
      </h3>
    </div>
  );
}

export default function CaseStudy({
  project,
  next,
}: {
  project: Project;
  next: Project;
}) {
  const { theme, toggle } = useTheme();

  return (
    <article>
      {/* Top bar */}
      <header
        className="fixed top-0 inset-x-0 z-50 backdrop-blur-md border-b"
        style={{ background: "var(--surface-elevated)", borderColor: "var(--border)" }}
      >
        <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 text-sm transition-opacity hover:opacity-70"
            style={{ color: "var(--text-secondary)" }}
          >
            <ArrowLeft size={15} />
            <span className="mono-label">Back to work</span>
          </Link>
          <button
            onClick={toggle}
            aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
            className="w-9 h-9 flex items-center justify-center rounded-full transition-opacity hover:opacity-70"
            style={{ color: "var(--text-secondary)", background: "var(--bg-secondary)" }}
          >
            {theme === "light" ? <Moon size={15} /> : <Sun size={15} />}
          </button>
        </div>
      </header>

      {/* Hero */}
      <section className="relative pt-32 pb-20 px-6 overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-60 pointer-events-none" aria-hidden />
        <div
          className="absolute top-0 left-0 right-0 h-px"
          style={{ background: project.color }}
          aria-hidden
        />
        <div className="relative max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease }}
            className="flex items-center gap-4 mb-8"
          >
            <span
              className="font-mono text-sm px-2.5 py-1 rounded-sm"
              style={{ background: `${project.color}1a`, color: project.color }}
            >
              {project.index} / {String(projects.length).padStart(2, "0")}
            </span>
            <span className="mono-label" style={{ color: "var(--text-tertiary)" }}>
              {project.category}
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.05, ease }}
            className="text-5xl md:text-7xl font-semibold tracking-tight leading-[0.98] mb-6 max-w-3xl"
            style={{ color: "var(--text-primary)", letterSpacing: "-0.035em" }}
          >
            {project.title}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15, ease }}
            className="text-lg md:text-xl max-w-2xl leading-relaxed mb-14"
            style={{ color: "var(--text-secondary)" }}
          >
            {project.subtitle}
          </motion.p>

          {/* Meta row */}
          <motion.dl
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25, ease }}
            className="grid grid-cols-2 md:grid-cols-4 gap-px border-t border-l"
            style={{ borderColor: "var(--border)", background: "var(--border)" }}
          >
            {[
              { k: "Year", v: project.year },
              { k: "Role", v: project.role },
              { k: "Team", v: project.team },
              { k: project.heroStat.label, v: project.heroStat.value },
            ].map((item, i) => (
              <div
                key={i}
                className="p-5 border-r border-b"
                style={{ borderColor: "var(--border)", background: "var(--bg)" }}
              >
                <dt className="mono-label mb-2" style={{ color: "var(--text-tertiary)" }}>
                  {item.k}
                </dt>
                <dd className="text-sm font-medium" style={{ color: "var(--text-primary)" }}>
                  {item.v}
                </dd>
              </div>
            ))}
          </motion.dl>
        </div>
      </section>

      {/* Body */}
      <section className="px-6 pb-24">
        <div className="max-w-5xl mx-auto flex flex-col gap-4">
          {project.caseStudy.map((block, i) => (
            <Block key={i} block={block} color={project.color} />
          ))}
        </div>
      </section>

      {/* Next project */}
      <Link href={`/work/${next.id}`} className="block group">
        <section
          className="relative px-6 py-20 border-t overflow-hidden transition-colors"
          style={{ borderColor: "var(--border)" }}
        >
          <div className="max-w-5xl mx-auto flex items-center justify-between gap-6">
            <div>
              <div className="mono-label mb-3" style={{ color: "var(--text-tertiary)" }}>
                Next case study — {next.index}
              </div>
              <h2
                className="text-3xl md:text-5xl font-semibold tracking-tight transition-transform duration-500 group-hover:translate-x-2"
                style={{ color: "var(--text-primary)", letterSpacing: "-0.03em" }}
              >
                {next.title}
              </h2>
            </div>
            <div
              className="flex-shrink-0 w-14 h-14 rounded-full flex items-center justify-center transition-all duration-500 group-hover:scale-110"
              style={{ background: next.color, color: "#fff" }}
            >
              <ArrowRight size={20} />
            </div>
          </div>
        </section>
      </Link>

      {/* Footer */}
      <footer
        className="px-6 py-10 border-t"
        style={{ borderColor: "var(--border)" }}
      >
        <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm transition-opacity hover:opacity-70"
            style={{ color: "var(--text-secondary)" }}
          >
            <ArrowLeft size={14} />
            Mozhgan Akbari
          </Link>
          <Link
            href="/#contact"
            className="inline-flex items-center gap-1.5 text-sm transition-opacity hover:opacity-70"
            style={{ color: "var(--text-secondary)" }}
          >
            Get in touch
            <ArrowUpRight size={14} />
          </Link>
        </div>
      </footer>
    </article>
  );
}
