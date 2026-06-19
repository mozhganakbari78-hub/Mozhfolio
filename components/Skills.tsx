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
      { name: "Notion", level: 82 },
      { name: "Principle", level: 75 },
      { name: "Ant Design", level: 80 },
    ],
  },
  {
    category: "Domain",
    skills: [
      { name: "Enterprise B2B", level: 93 },
      { name: "Banking / Fintech", level: 90 },
      { name: "Content Strategy", level: 82 },
      { name: "Accessibility (WCAG)", level: 85 },
      { name: "Design Tokens", level: 88 },
    ],
  },
  {
    category: "Process",
    skills: [
      { name: "Systems Thinking", level: 92 },
      { name: "Feedback Analysis", level: 88 },
      { name: "Cross-functional Collab", level: 90 },
      { name: "Stakeholder Alignment", level: 85 },
      { name: "Annotated Handoff", level: 87 },
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
    <section id="skills" className="py-32 px-6" aria-labelledby="skills-heading">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="mb-16"
        >
          <span
            className="text-xs font-medium tracking-widest uppercase mb-4 block"
            style={{ color: "var(--accent-color)" }}
          >
            Skills
          </span>
          <h2
            id="skills-heading"
            className="text-3xl md:text-4xl font-semibold tracking-tight"
            style={{ color: "var(--text-primary)", letterSpacing: "-0.02em" }}
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
                className="text-xs font-semibold tracking-widest uppercase mb-6 pb-3 border-b"
                style={{ color: "var(--text-tertiary)", borderColor: "var(--border)" }}
              >
                {group.category}
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
