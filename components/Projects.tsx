"use client";

import { motion } from "framer-motion";
import { projects } from "@/data/projects";
import ProjectCard from "./ProjectCard";

const ease = [0.16, 1, 0.3, 1] as [number, number, number, number];

export default function Projects() {
  return (
    <section id="projects" className="py-28 md:py-40 px-6" aria-labelledby="projects-heading">
      <div className="max-w-5xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease }}
          className="mb-16 md:mb-20 flex flex-col md:flex-row md:items-end md:justify-between gap-8"
        >
          <div>
            <div className="mono-label mb-5" style={{ color: "var(--accent-color)" }}>
              [ 02 ] — Selected Work
            </div>
            <h2
              id="projects-heading"
              className="text-4xl md:text-6xl font-semibold tracking-tight max-w-2xl leading-[1.02]"
              style={{ color: "var(--text-primary)", letterSpacing: "-0.03em" }}
            >
              Three projects at enterprise scale.
            </h2>
          </div>
          <p
            className="text-sm md:text-base max-w-xs"
            style={{ color: "var(--text-tertiary)" }}
          >
            Each opens a full case study — context, decisions, and the trade-offs behind them.
          </p>
        </motion.div>

        {/* Project list */}
        <div>
          {projects.map((project, i) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={i}
              total={projects.length}
            />
          ))}
          <div className="border-t" style={{ borderColor: "var(--border-strong)" }} />
        </div>
      </div>
    </section>
  );
}
