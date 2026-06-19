"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/data/projects";

const ease = [0.16, 1, 0.3, 1] as [number, number, number, number];

export default function ProjectCard({
  project,
  index,
  total,
}: {
  project: Project;
  index: number;
  total: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, delay: index * 0.08, ease }}
    >
      <Link
        href={`/work/${project.id}`}
        className="group block relative"
        aria-label={`Open case study: ${project.title}`}
      >
        <article
          className="relative overflow-hidden transition-colors duration-300"
          style={{
            background: "var(--surface)",
            borderTop: "1px solid var(--border-strong)",
          }}
        >
          {/* hover accent line */}
          <span
            className="absolute top-0 left-0 h-px w-0 transition-all duration-500 group-hover:w-full"
            style={{ background: project.color }}
            aria-hidden
          />

          <div className="grid md:grid-cols-12 gap-6 md:gap-8 py-8 md:py-10 px-1">
            {/* Index */}
            <div className="md:col-span-2 flex items-start">
              <span
                className="font-mono text-sm transition-colors duration-300"
                style={{ color: "var(--text-tertiary)" }}
              >
                {project.index} <span style={{ color: "var(--text-tertiary)" }}>/ {String(total).padStart(2, "0")}</span>
              </span>
            </div>

            {/* Main */}
            <div className="md:col-span-7">
              <div className="mono-label mb-3" style={{ color: "var(--text-tertiary)" }}>
                {project.category} — {project.year}
              </div>
              <h3
                className="text-2xl md:text-4xl font-semibold tracking-tight mb-4 transition-transform duration-500 group-hover:translate-x-1"
                style={{ color: "var(--text-primary)", letterSpacing: "-0.025em" }}
              >
                {project.title}
              </h3>
              <p
                className="text-sm md:text-base leading-relaxed max-w-xl"
                style={{ color: "var(--text-secondary)" }}
              >
                {project.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mt-6">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="mono-label px-2.5 py-1 rounded-sm"
                    style={{ background: "var(--bg-secondary)", color: "var(--text-tertiary)" }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Stat + arrow */}
            <div className="md:col-span-3 flex md:flex-col md:items-end justify-between gap-4">
              <div className="md:text-right">
                <div
                  className="text-3xl md:text-4xl font-semibold tracking-tight mb-1"
                  style={{ color: project.color, letterSpacing: "-0.03em" }}
                >
                  {project.heroStat.value}
                </div>
                <div className="mono-label" style={{ color: "var(--text-tertiary)" }}>
                  {project.heroStat.label}
                </div>
              </div>
              <div
                className="flex-shrink-0 w-11 h-11 rounded-full flex items-center justify-center border transition-all duration-300 group-hover:scale-110"
                style={{
                  borderColor: "var(--border-strong)",
                  color: "var(--text-primary)",
                }}
              >
                <ArrowUpRight
                  size={18}
                  className="transition-transform duration-300 group-hover:rotate-45"
                />
              </div>
            </div>
          </div>
        </article>
      </Link>
    </motion.div>
  );
}
