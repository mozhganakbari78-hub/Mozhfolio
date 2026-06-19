"use client";

import { motion } from "framer-motion";
import { useInView } from "@/lib/useInView";

/* Per-capability line illustrations — same outline language as the hero. */
const illustrations: Record<string, React.ReactNode> = {
  "Product Thinking": (
    <>
      <circle cx="14" cy="20" r="4" />
      <circle cx="34" cy="12" r="4" />
      <circle cx="40" cy="32" r="4" />
      <path d="M18 19 31 13M35 16 39 28M17 23 37 32" strokeDasharray="3 4" />
    </>
  ),
  "Workflow Design": (
    <>
      <rect x="6" y="10" width="12" height="9" rx="2" />
      <rect x="32" y="10" width="12" height="9" rx="2" />
      <rect x="19" y="27" width="12" height="9" rx="2" />
      <path d="M18 14h14M12 19v8h13M38 19v8H25" strokeDasharray="3 4" />
    </>
  ),
  "Design Systems": (
    <>
      <rect x="8" y="10" width="10" height="10" rx="2" />
      <rect x="22" y="10" width="10" height="10" rx="2" />
      <rect x="36" y="10" width="6" height="10" rx="2" />
      <rect x="8" y="26" width="6" height="10" rx="2" />
      <rect x="18" y="26" width="10" height="10" rx="2" />
      <rect x="32" y="26" width="10" height="10" rx="2" />
    </>
  ),
  "Delivery Partnership": (
    <>
      <path d="M10 30c0-6 4-10 10-10s10 4 10 10" />
      <circle cx="20" cy="14" r="5" />
      <path d="M30 24l8-2M30 30l8 2" strokeDasharray="3 4" />
      <circle cx="40" cy="22" r="2.5" />
      <circle cx="40" cy="32" r="2.5" />
    </>
  ),
};

const capabilities = [
  {
    title: "Product Thinking",
    tags: [
      "Problem framing",
      "User research",
      "Decision mapping",
      "Product reasoning",
      "Support signals",
      "Data informed decisions",
    ],
    body:
      "I do not jump from brief to screen. I first understand what the product is asking the user to decide, where confusion happens, and what the team needs to learn before designing.",
  },
  {
    title: "Workflow Design",
    tags: [
      "Complex flows",
      "Information architecture",
      "Error states",
      "Edge cases",
      "Operational tools",
      "Interaction design",
    ],
    body:
      "I design the parts of the product where users need clarity, recovery, and confidence. The goal is not only a cleaner interface, but a workflow that helps people move forward without costly mistakes.",
  },
  {
    title: "Design Systems",
    tags: [
      "Reusable components",
      "Token based foundations",
      "Pattern libraries",
      "UX writing patterns",
      "Documentation",
      "Adoption with teams",
    ],
    body:
      "I build design systems as product infrastructure. Not just UI kits, but reusable foundations that help teams move faster while keeping the experience consistent.",
  },
  {
    title: "Delivery Partnership",
    tags: [
      "Figma",
      "FigJam",
      "Ant Design",
      "Material Design",
      "Jira",
      "ClickUp",
      "Engineering handoff",
    ],
    body:
      "I stay close to product, engineering, and implementation. I care about what ships, what scales, and what the next team member can understand after I am no longer in the room.",
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
            [ 03 ] — Capabilities
          </div>
          <h2
            id="skills-heading"
            className="text-4xl md:text-6xl font-semibold tracking-tight leading-[1.02] mb-6"
            style={{ color: "var(--text-primary)", letterSpacing: "-0.03em" }}
          >
            How I help product teams move through complexity.
          </h2>
          <p className="text-base md:text-lg leading-relaxed" style={{ color: "var(--text-secondary)" }}>
            I bring the mix of product thinking, systems thinking, and delivery discipline needed
            for complex B2B products.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-5 md:gap-6">
          {capabilities.map((cap, ci) => (
            <motion.div
              key={cap.title}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: ci * 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="relative rounded-2xl border p-7 md:p-9 flex flex-col"
              style={{ borderColor: "var(--border-strong)", background: "var(--surface)" }}
            >
              <div className="flex items-center justify-between mb-5">
                <span
                  className="flex items-center justify-center w-14 h-14 rounded-xl border"
                  style={{ borderColor: "var(--border-strong)", background: "var(--bg-secondary)" }}
                >
                  <svg
                    width="50"
                    height="46"
                    viewBox="0 0 50 46"
                    fill="none"
                    stroke="var(--accent-color)"
                    strokeWidth="1.4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    {illustrations[cap.title]}
                  </svg>
                </span>
                <span className="font-mono text-sm" style={{ color: "var(--accent-color)" }}>
                  {String(ci + 1).padStart(2, "0")}
                </span>
              </div>
              <h3
                className="text-xl md:text-2xl font-semibold tracking-tight mb-5"
                style={{ color: "var(--text-primary)", letterSpacing: "-0.02em" }}
              >
                {cap.title}
              </h3>
              <div className="flex flex-wrap gap-2 mb-6">
                {cap.tags.map((tag) => (
                  <span
                    key={tag}
                    className="mono-label px-2.5 py-1 rounded-full border"
                    style={{ color: "var(--text-tertiary)", borderColor: "var(--border)" }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <p
                className="text-sm md:text-base leading-relaxed mt-auto"
                style={{ color: "var(--text-secondary)" }}
              >
                {cap.body}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
