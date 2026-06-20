"use client";

import { motion } from "framer-motion";
import {
  MagnifyingGlassIcon,
  Square3Stack3DIcon,
  ArrowTrendingUpIcon,
  PuzzlePieceIcon,
} from "@heroicons/react/24/outline";
import { useInView } from "@/lib/useInView";

const capabilities = [
  {
    icon: MagnifyingGlassIcon,
    title: "Research-led",
    body: "I read the raw data myself, interviews, tickets, sessions, before touching a single screen.",
  },
  {
    icon: Square3Stack3DIcon,
    title: "Systems thinker",
    body: "From information architecture to design tokens, I build things that scale and stay maintainable.",
  },
  {
    icon: ArrowTrendingUpIcon,
    title: "Impact-focused",
    body: "I connect every decision to a user need and a business metric. Design that ships and moves numbers.",
  },
  {
    icon: PuzzlePieceIcon,
    title: "Delivery partner",
    body: "Close to engineering and product. I care about what ships, what scales, and what the next teammate can read.",
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
