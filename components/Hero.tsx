"use client";

import { motion } from "framer-motion";
import { ArrowDown, ExternalLink } from "lucide-react";

import type { Variants } from "framer-motion";

const stagger: Variants = {
  animate: { transition: { staggerChildren: 0.12, delayChildren: 0.2 } },
};

const easing = [0.16, 1, 0.3, 1] as [number, number, number, number];

const fadeUp: Variants = {
  initial: { y: 24, opacity: 0 },
  animate: { y: 0, opacity: 1, transition: { duration: 0.7, ease: easing } },
};

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center px-6 pt-20"
      aria-label="Introduction"
    >
      {/* Subtle grid background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, var(--border) 1px, transparent 0)`,
          backgroundSize: "32px 32px",
          opacity: 0.4,
        }}
        aria-hidden="true"
      />

      {/* Accent orb */}
      <div
        className="absolute top-1/3 right-1/4 w-96 h-96 rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(232,93,38,0.06) 0%, transparent 70%)",
          filter: "blur(40px)",
        }}
        aria-hidden="true"
      />

      <div className="relative max-w-6xl mx-auto w-full">
        <motion.div variants={stagger} initial="initial" animate="animate">
          {/* Tag line */}
          <motion.div variants={fadeUp} className="mb-8">
            <span
              className="inline-flex items-center gap-2 text-xs font-medium tracking-widest uppercase px-3 py-1.5 rounded-full border"
              style={{ color: "var(--accent-color)", borderColor: "rgba(232,93,38,0.25)", background: "rgba(232,93,38,0.06)" }}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-current animate-pulse" />
              Available for work
            </span>
          </motion.div>

          {/* Name */}
          <motion.h1
            variants={fadeUp}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-semibold tracking-tight leading-none mb-6"
            style={{ color: "var(--text-primary)", letterSpacing: "-0.03em" }}
          >
            Mozhgan
            <br />
            <span style={{ color: "var(--text-tertiary)", fontWeight: 300 }}>Akbari</span>
          </motion.h1>

          {/* Role */}
          <motion.p
            variants={fadeUp}
            className="text-lg md:text-xl font-medium mb-4 max-w-xl"
            style={{ color: "var(--text-secondary)" }}
          >
            Product Designer specializing in enterprise UX,
            <br />
            design systems, and friction reduction.
          </motion.p>

          {/* Value prop */}
          <motion.p
            variants={fadeUp}
            className="text-base md:text-lg max-w-lg mb-12 leading-relaxed"
            style={{ color: "var(--text-tertiary)" }}
          >
            I read 734 support tickets to understand one system. I turn messy, high-stakes B2B products into tools people actually trust.
          </motion.p>

          {/* CTAs */}
          <motion.div variants={fadeUp} className="flex flex-wrap gap-4">
            <button
              onClick={() => document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" })}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-medium transition-all duration-200 hover:opacity-90 hover:scale-[1.02] active:scale-[0.98]"
              style={{ background: "var(--text-primary)", color: "var(--bg)" }}
            >
              View case studies
              <ExternalLink size={14} />
            </button>
            <button
              onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-medium transition-all duration-200 hover:opacity-80 border"
              style={{ color: "var(--text-primary)", borderColor: "var(--border)" }}
            >
              Get in touch
            </button>
          </motion.div>

          {/* Stats */}
          <motion.div
            variants={fadeUp}
            className="flex flex-wrap gap-8 mt-16 pt-16 border-t"
            style={{ borderColor: "var(--border)" }}
          >
            {[
              { value: "400K+", label: "Users impacted" },
              { value: "90+", label: "Screens designed" },
              { value: "3", label: "Enterprise products" },
            ].map((stat) => (
              <div key={stat.label}>
                <div
                  className="text-3xl font-semibold mb-1 tracking-tight"
                  style={{ color: "var(--text-primary)" }}
                >
                  {stat.value}
                </div>
                <div className="text-sm" style={{ color: "var(--text-tertiary)" }}>
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4, duration: 0.6 }}
          className="absolute bottom-12 left-0 flex flex-col items-center gap-2"
          aria-hidden="true"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          >
            <ArrowDown size={16} style={{ color: "var(--text-tertiary)" }} />
          </motion.div>
          <span
            className="text-xs tracking-widest uppercase writing-mode-vertical rotate-90 origin-center"
            style={{ color: "var(--text-tertiary)", writingMode: "vertical-rl" }}
          >
            Scroll
          </span>
        </motion.div>
      </div>
    </section>
  );
}
