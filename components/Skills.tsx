"use client";

import { motion } from "framer-motion";
import { useInView } from "@/lib/useInView";

const skillGroups = [
  {
    category: "Design",
    skills: [
      { name: "Product Design", level: 95 },
      { name: "Design Systems", level: 92 },
      { name: "UX Research", level: 85 },
      { name: "Interaction Design", level: 88 },
      { name: "Information Architecture", level: 87 },
      { name: "Prototyping", level: 90 },
    ],
  },
  {
    category: "Tools",
    skills: [
      { name: "Figma", level: 97 },
      { name: "FigJam", level: 90 },
      { name: "Material Design", level: 86 },
      { name: "Ant Design", level: 84 },
      { name: "Jira / ClickUp", level: 82 },
    ],
  },
  {
    category: "Domain",
    skills: [
      { name: "Banking / Fintech", level: 92 },
      { name: "Enterprise B2B", level: 90 },
      { name: "Crypto Exchange", level: 84 },
      { name: "IoT Dashboards", level: 80 },
      { name: "Accessibility", level: 85 },
    ],
  },
  {
    category: "Process",
    skills: [
      { name: "User Research", level: 90 },
      { name: "Journey Mapping", level: 87 },
      { name: "UX Writing", level: 88 },
      { name: "Cross-functional Collab", level: 92 },
      { name: "Agile / Mentorship", level: 84 },
    ],
  },
];

function SkillBar({ name, level, delay }: { name: string; level: number; delay: number }) {
  const { ref, inView } = useInView(0.1);

  return (
    <div ref={ref} className="mb-4">
      <div className="flex justify-between items-center mb-1.5">
        <span className="text-sm" style={{ color: "var(--text-secondary)" }}>
          {name}
        </span>
        <span className="text-xs" style={{ color: "var(--text-tertiary)" }}>
          {level}%
        </span>
      </div>
      <div
        className="h-1 rounded-full overflow-hidden"
        style={{ background: "var(--bg-secondary)" }}
        role="meter"
        aria-valuenow={level}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-label={`${name}: ${level}%`}
      >
        <motion.div
          className="h-full rounded-full"
          initial={{ width: 0 }}
          animate={inView ? { width: `${level}%` } : {}}
          transition={{ duration: 0.9, delay, ease: [0.16, 1, 0.3, 1] }}
          style={{ background: "var(--text-primary)" }}
        />
      </div>
    </div>
  );
}

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
          className="mb-16 md:mb-20"
        >
          <div className="mono-label mb-5" style={{ color: "var(--accent-color)" }}>
            [ 03 ] — Capabilities
          </div>
          <h2
            id="skills-heading"
            className="text-4xl md:text-6xl font-semibold tracking-tight leading-[1.02]"
            style={{ color: "var(--text-primary)", letterSpacing: "-0.03em" }}
          >
            What I bring to the table.
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {skillGroups.map((group, gi) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: gi * 0.1, ease: [0.16, 1, 0.3, 1] }}
            >
              <div
                className="mono-label mb-6 pb-3 border-b flex items-center justify-between"
                style={{ color: "var(--text-tertiary)", borderColor: "var(--border-strong)" }}
              >
                <span>{group.category}</span>
                <span style={{ color: "var(--accent-color)" }}>{String(gi + 1).padStart(2, "0")}</span>
              </div>
              {group.skills.map((skill, si) => (
                <SkillBar
                  key={skill.name}
                  name={skill.name}
                  level={skill.level}
                  delay={0.1 + si * 0.06}
                />
              ))}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
