"use client";

import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/data/projects";
import { useTheme } from "./ThemeProvider";

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
  const flip = index % 2 === 1;
  const [imgOk, setImgOk] = useState(true);
  const showCover = Boolean(project.cover) && imgOk;
  const { theme } = useTheme();
  const coverSrc =
    theme === "light" && project.coverLight ? project.coverLight : project.cover;

  return (
    <motion.div
      initial={{ opacity: 0, y: 48 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.8, delay: index * 0.06, ease }}
    >
      <Link
        href={`/work/${project.id}`}
        className="group block focus-visible:outline-none"
        aria-label={`Open case study: ${project.title}`}
      >
        <div
          className={`grid md:grid-cols-2 items-stretch border ${
            flip ? "md:[direction:rtl]" : ""
          }`}
          style={{ borderColor: "var(--border-strong)" }}
        >
          {/* COVER PANEL */}
          <div
            className="relative aspect-[16/11] md:aspect-auto md:min-h-[400px] overflow-hidden [direction:ltr]"
            style={{ background: "var(--bg-secondary)" }}
          >
            {showCover ? (
              <>
                {/* real cover image */}
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={coverSrc}
                  alt={`${project.title} cover`}
                  loading="lazy"
                  onError={() => setImgOk(false)}
                  className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-[700ms] ease-out group-hover:scale-[1.04]"
                />
                {/* readability gradient */}
                <div
                  className="absolute inset-0 transition-opacity duration-300 group-hover:opacity-0"
                  style={{ background: "linear-gradient(to top, rgba(0,0,0,0.55), rgba(0,0,0,0.05) 55%)" }}
                  aria-hidden
                />
                <div className="absolute inset-0 p-7 md:p-9 flex flex-col justify-between transition-opacity duration-300 group-hover:opacity-0">
                  <div className="mono-label" style={{ color: "rgba(255,255,255,0.8)" }}>
                    {project.index} / {String(total).padStart(2, "0")}
                  </div>
                  <div>
                    <div
                      className="text-4xl md:text-5xl font-semibold tracking-tight mb-1"
                      style={{ color: "#fff", letterSpacing: "-0.04em" }}
                    >
                      {project.heroStat.value}
                    </div>
                    <div className="mono-label" style={{ color: "rgba(255,255,255,0.7)" }}>
                      {project.heroStat.label}
                    </div>
                  </div>
                </div>
              </>
            ) : (
              <>
                {/* hairline grid */}
                <div className="absolute inset-0 grid-bg opacity-70" aria-hidden />

                {/* giant index watermark */}
                <span
                  className="absolute -bottom-10 -right-4 font-semibold leading-none select-none transition-colors duration-500 group-hover:opacity-0"
                  style={{
                    fontSize: "16rem",
                    color: "var(--border-strong)",
                    letterSpacing: "-0.05em",
                  }}
                  aria-hidden
                >
                  {project.index}
                </span>

                {/* default content */}
                <div className="absolute inset-0 p-7 md:p-9 flex flex-col justify-between transition-opacity duration-300 group-hover:opacity-0">
                  <div className="mono-label" style={{ color: "var(--text-tertiary)" }}>
                    {project.index} / {String(total).padStart(2, "0")}
                  </div>
                  <div>
                    <div
                      className="text-5xl md:text-6xl font-semibold tracking-tight mb-2"
                      style={{ color: "var(--accent-color)", letterSpacing: "-0.04em" }}
                    >
                      {project.heroStat.value}
                    </div>
                    <div className="mono-label" style={{ color: "var(--text-tertiary)" }}>
                      {project.heroStat.label}
                    </div>
                  </div>
                </div>
              </>
            )}

            {/* HOVER OVERLAY — blue sweep from bottom */}
            <div
              className="absolute inset-0 flex flex-col justify-between p-7 md:p-9 translate-y-full group-hover:translate-y-0 transition-transform duration-[600ms] [transition-timing-function:cubic-bezier(0.16,1,0.3,1)]"
              style={{ background: "var(--accent-color)" }}
            >
              <div className="flex items-start justify-between">
                <span className="mono-label" style={{ color: "rgba(255,255,255,0.7)" }}>
                  Case study {project.index}
                </span>
                <ArrowUpRight size={26} color="#fff" />
              </div>
              <div>
                <div
                  className="text-4xl md:text-5xl font-semibold tracking-tight"
                  style={{ color: "#fff", letterSpacing: "-0.035em" }}
                >
                  View
                  <br />
                  case study
                </div>
              </div>
            </div>
          </div>

          {/* META PANEL */}
          <div
            className="p-7 md:p-9 flex flex-col justify-between gap-8 [direction:ltr] border-t md:border-t-0"
            style={{ borderColor: "var(--border-strong)", background: "var(--surface)" }}
          >
            <div>
              <div className="mono-label mb-5" style={{ color: "var(--text-tertiary)" }}>
                {project.category} — {project.year}
              </div>
              <h3
                className="text-3xl md:text-4xl font-semibold tracking-tight mb-5 transition-colors duration-300 group-hover:text-[var(--accent-color)]"
                style={{ color: "var(--text-primary)", letterSpacing: "-0.025em" }}
              >
                {project.title}
              </h3>
              <p
                className="text-sm md:text-base leading-relaxed"
                style={{ color: "var(--text-secondary)" }}
              >
                {project.description}
              </p>
            </div>

            <div className="flex flex-wrap items-end justify-between gap-4">
              <div className="flex flex-wrap gap-2">
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
              <span
                className="mono-label inline-flex items-center gap-1.5 whitespace-nowrap transition-colors duration-300 group-hover:text-[var(--accent-color)]"
                style={{ color: "var(--text-primary)" }}
              >
                Read
                <ArrowUpRight
                  size={13}
                  className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </span>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
