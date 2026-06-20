"use client";

import { motion } from "framer-motion";
import {
  MagnifyingGlassIcon,
  Square3Stack3DIcon,
  DocumentCheckIcon,
  CpuChipIcon,
} from "@heroicons/react/24/outline";
import { useInView } from "@/lib/useInView";

const capabilities = [
  {
    icon: MagnifyingGlassIcon,
    title: "Frame first, design second",
    body: "I start with the question behind the brief, not the wireframe. What is actually broken, who owns it, and what does success mean for the business -- before a single screen is opened.",
  },
  {
    icon: Square3Stack3DIcon,
    title: "Systems over screens",
    body: "My output is component logic, token architecture, and governance frameworks that hold up at scale. A screen is just the visible surface of a decision.",
  },
  {
    icon: DocumentCheckIcon,
    title: "Decisions, not just deliverables",
    body: "I document the trade-offs that shaped every call. When the product changes, the reasoning travels with it -- and the next designer does not have to reverse-engineer intent.",
  },
  {
    icon: CpuChipIcon,
    title: "Engineering-fluent",
    body: "I work inside the constraint space of real products: API limits, token pipelines, handoff quality. Design that ships without a translation layer.",
  },
];

export default function Skills() {
  const { ref, inView } = useInView();

  return (
    <section id="skills" className="py-28 md:py-40 px-6" aria-labelledby="skills-heading">
      <div className="max-w-5xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="mb-16 md:mb-20 max-w-2xl"
        >
          <div className="mono-label mb-5" style={{ color: "var(--accent-color)" }}>
            [ 03 ] Capabilities
          </div>
          <h2
            id="skills-heading"
            className="text-4xl md:text-6xl font-semibold tracking-tight leading-[1.02]"
            style={{ color: "var(--text-primary)", letterSpacing: "-0.03em" }}
          >
            How I work.
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {capabilities.map((cap, ci) => {
            const Icon = cap.icon;
            return (
              <motion.div
                key={cap.title}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, delay: ci * 0.08, ease: [0.16, 1, 0.3, 1] }}
                className="relative rounded-2xl border p-7 transition-all duration-300 hover:border-[var(--accent-color)]"
                style={{ borderColor: "var(--border-strong)", background: "var(--surface)" }}
              >
                <span
                  className="inline-flex items-center justify-center w-11 h-11 rounded-xl mb-8 border"
                  style={{ borderColor: "var(--border-strong)", background: "var(--bg-secondary)" }}
                >
                  <Icon style={{ width: 20, height: 20, color: "var(--text-primary)" }} />
                </span>
                <h3
                  className="text-lg font-semibold tracking-tight mb-3"
                  style={{ color: "var(--text-primary)", letterSpacing: "-0.015em" }}
                >
                  {cap.title}
                </h3>
                <p
                  className="text-sm leading-relaxed"
                  style={{ color: "var(--text-tertiary)" }}
                >
                  {cap.body}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
