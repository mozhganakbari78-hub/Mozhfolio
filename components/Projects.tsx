"use client";

import { motion } from "framer-motion";
import { projects } from "@/data/projects";
import ProjectCard from "./ProjectCard";

export default function Projects() {
  return (
    <section id="projects" className="py-32 px-6" aria-labelledby="projects-heading">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="mb-16"
        >
          <span
            className="text-xs font-medium tracking-widest uppercase mb-4 block"
            style={{ color: "var(--accent-color)" }}
          >
            Case Studies
          </span>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <h2
              id="projects-heading"
              className="text-3xl md:text-4xl font-semibold tracking-tight max-w-lg"
              style={{ color: "var(--text-primary)", letterSpacing: "-0.02em" }}
            >
              Three projects. Each one taught me something about working at scale.
            </h2>
            <p
              className="text-sm md:text-base max-w-xs"
              style={{ color: "var(--text-tertiary)" }}
            >
              Click any card to read the full case study.
            </p>
          </div>
        </motion.div>

        {/* Projects grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
