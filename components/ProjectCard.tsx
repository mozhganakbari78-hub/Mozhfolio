"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, X, ChevronRight } from "lucide-react";
import type { Project } from "@/data/projects";

export default function ProjectCard({ project, index }: { project: Project; index: number }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <motion.article
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.7, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
        className="group relative rounded-2xl overflow-hidden cursor-pointer transition-all duration-300"
        style={{
          background: "var(--surface)",
          border: "1px solid var(--border)",
          boxShadow: "var(--shadow)",
        }}
        onClick={() => setOpen(true)}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => e.key === "Enter" && setOpen(true)}
        aria-label={`Open case study: ${project.title}`}
        whileHover={{ y: -4 }}
      >
        {/* Color bar */}
        <div
          className="h-1 w-full transition-all duration-500 group-hover:h-1.5"
          style={{ background: project.color }}
          aria-hidden="true"
        />

        <div className="p-8">
          {/* Meta */}
          <div className="flex items-start justify-between mb-6">
            <div>
              <span
                className="text-xs font-medium tracking-widest uppercase mb-2 block"
                style={{ color: "var(--text-tertiary)" }}
              >
                {project.category}
              </span>
              <span
                className="text-xs px-2 py-0.5 rounded"
                style={{ background: "var(--bg-secondary)", color: "var(--text-tertiary)" }}
              >
                {project.year}
              </span>
            </div>
            <div
              className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 group-hover:scale-110"
              style={{ background: `${project.color}15`, color: project.color }}
            >
              <ArrowUpRight size={16} />
            </div>
          </div>

          {/* Title */}
          <h3
            className="text-xl md:text-2xl font-semibold mb-3 tracking-tight"
            style={{ color: "var(--text-primary)", letterSpacing: "-0.02em" }}
          >
            {project.title}
          </h3>

          <p className="text-sm leading-relaxed mb-6" style={{ color: "var(--text-secondary)" }}>
            {project.description}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-8">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="text-xs px-2.5 py-1 rounded-full"
                style={{ background: "var(--bg-secondary)", color: "var(--text-tertiary)" }}
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Problem / Outcome */}
          <div className="grid grid-cols-2 gap-4 pt-6 border-t" style={{ borderColor: "var(--border)" }}>
            <div>
              <div className="text-xs font-medium mb-1" style={{ color: "var(--text-tertiary)" }}>
                Problem
              </div>
              <p className="text-xs leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                {project.problem}
              </p>
            </div>
            <div>
              <div className="text-xs font-medium mb-1" style={{ color: "var(--text-tertiary)" }}>
                Outcome
              </div>
              <p className="text-xs leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                {project.outcome}
              </p>
            </div>
          </div>

          <div
            className="mt-6 flex items-center gap-1.5 text-xs font-medium transition-all duration-200 group-hover:gap-2"
            style={{ color: project.color }}
          >
            Read case study
            <ChevronRight size={12} className="transition-transform group-hover:translate-x-0.5" />
          </div>
        </div>
      </motion.article>

      {/* Case Study Modal */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-end md:items-center justify-center p-0 md:p-6"
            style={{ background: "rgba(0,0,0,0.5)", backdropFilter: "blur(8px)" }}
            onClick={(e) => e.target === e.currentTarget && setOpen(false)}
            role="dialog"
            aria-modal="true"
            aria-label={`Case study: ${project.title}`}
          >
            <motion.div
              initial={{ y: 60, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 60, opacity: 0 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="w-full md:max-w-2xl max-h-[90vh] md:max-h-[80vh] overflow-y-auto rounded-t-3xl md:rounded-2xl"
              style={{ background: "var(--surface)", border: "1px solid var(--border)" }}
            >
              {/* Color bar */}
              <div className="h-1 w-full sticky top-0" style={{ background: project.color }} />

              <div className="p-8">
                {/* Header */}
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <span
                      className="text-xs font-medium tracking-widest uppercase mb-2 block"
                      style={{ color: "var(--text-tertiary)" }}
                    >
                      {project.category} · {project.year}
                    </span>
                    <h2
                      className="text-2xl font-semibold tracking-tight"
                      style={{ color: "var(--text-primary)", letterSpacing: "-0.02em" }}
                    >
                      {project.title}
                    </h2>
                    <p className="text-sm mt-2" style={{ color: "var(--text-secondary)" }}>
                      {project.subtitle}
                    </p>
                  </div>
                  <button
                    onClick={() => setOpen(false)}
                    className="w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0 ml-4 transition-opacity hover:opacity-60"
                    style={{ background: "var(--bg-secondary)", color: "var(--text-secondary)" }}
                    aria-label="Close case study"
                  >
                    <X size={15} />
                  </button>
                </div>

                {/* Case study sections */}
                <div className="space-y-8">
                  {project.caseStudy.map((section, i) => (
                    <div key={i}>
                      {section.type === "highlight" ? (
                        <div
                          className="p-5 rounded-xl border-l-4"
                          style={{
                            background: `${project.color}08`,
                            borderColor: project.color,
                          }}
                        >
                          <div
                            className="text-sm font-semibold mb-2"
                            style={{ color: project.color }}
                          >
                            {section.heading}
                          </div>
                          <p className="text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                            {section.body}
                          </p>
                        </div>
                      ) : section.type === "quote" ? (
                        <blockquote
                          className="pl-5 border-l-2"
                          style={{ borderColor: "var(--border)" }}
                        >
                          <div
                            className="text-xs font-medium tracking-widest uppercase mb-2"
                            style={{ color: "var(--text-tertiary)" }}
                          >
                            {section.heading}
                          </div>
                          <p
                            className="text-sm leading-relaxed italic"
                            style={{ color: "var(--text-secondary)" }}
                          >
                            {section.body}
                          </p>
                        </blockquote>
                      ) : (
                        <div>
                          <h3
                            className="text-sm font-semibold mb-2"
                            style={{ color: "var(--text-primary)" }}
                          >
                            {section.heading}
                          </h3>
                          <p
                            className="text-sm leading-relaxed whitespace-pre-line"
                            style={{ color: "var(--text-secondary)" }}
                          >
                            {section.body}
                          </p>
                        </div>
                      )}
                    </div>
                  ))}
                </div>

                <div
                  className="mt-8 pt-6 border-t flex flex-wrap gap-2"
                  style={{ borderColor: "var(--border)" }}
                >
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-2.5 py-1 rounded-full"
                      style={{ background: "var(--bg-secondary)", color: "var(--text-tertiary)" }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
