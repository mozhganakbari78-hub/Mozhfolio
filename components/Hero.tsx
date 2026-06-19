"use client";

import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import CountUp from "./CountUp";
import ParticleField from "./ParticleField";

const ease = [0.16, 1, 0.3, 1] as [number, number, number, number];

const stagger: Variants = {
  animate: { transition: { staggerChildren: 0.09, delayChildren: 0.1 } },
};

const fadeUp: Variants = {
  initial: { y: 26, opacity: 0 },
  animate: { y: 0, opacity: 1, transition: { duration: 0.8, ease } },
};

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-6 pt-28 pb-20 overflow-hidden text-center"
      aria-label="Introduction"
    >
      {/* Layered background */}
      <div className="absolute inset-0 grid-bg pointer-events-none" aria-hidden="true" />
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <ParticleField />
      </div>
      <div
        className="absolute left-1/2 top-1/3 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] pointer-events-none accent-glow"
        aria-hidden="true"
      />

      <div className="relative max-w-4xl mx-auto w-full">
        <motion.div variants={stagger} initial="initial" animate="animate">
          {/* Availability pill */}
          <motion.div variants={fadeUp} className="flex justify-center mb-8">
            <span
              className="mono-label inline-flex items-center gap-2 px-4 py-2 rounded-full border"
              style={{ color: "var(--text-secondary)", borderColor: "var(--border-strong)", background: "var(--surface)" }}
            >
              <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: "var(--accent-color)" }} />
              Available for work — 2026
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            variants={fadeUp}
            className="text-5xl sm:text-7xl md:text-8xl font-semibold tracking-tight leading-[0.95] mb-8"
            style={{ color: "var(--text-primary)", letterSpacing: "-0.04em" }}
          >
            Product designer
            <br />
            <span style={{ color: "var(--text-tertiary)", fontWeight: 300 }}>
              for complex products.
            </span>
          </motion.h1>

          {/* Subtext */}
          <motion.p
            variants={fadeUp}
            className="text-base md:text-xl max-w-2xl mx-auto leading-relaxed mb-10"
            style={{ color: "var(--text-secondary)" }}
          >
            I&apos;m Mozhgan Akbari. I turn messy, high-stakes B2B products into tools people
            actually trust — enterprise UX, design systems, and friction reduction.
          </motion.p>

          {/* CTAs */}
          <motion.div variants={fadeUp} className="flex flex-wrap items-center justify-center gap-3 mb-20">
            <button
              data-hand
              onClick={() => document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" })}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-medium transition-all duration-200 hover:opacity-90 hover:scale-[1.02]"
              style={{ background: "var(--accent-color)", color: "var(--accent-contrast)" }}
            >
              View case studies
              <ArrowUpRight size={15} />
            </button>
            <button
              data-hand
              onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
              className="inline-flex items-center px-6 py-3 rounded-full text-sm font-medium transition-all duration-200 hover:opacity-80 border"
              style={{ color: "var(--text-primary)", borderColor: "var(--border-strong)" }}
            >
              Get in touch
            </button>
          </motion.div>

          {/* Stats strip */}
          <motion.dl
            variants={fadeUp}
            className="grid grid-cols-3 max-w-2xl mx-auto gap-px border rounded-2xl overflow-hidden"
            style={{ borderColor: "var(--border)", background: "var(--border)" }}
          >
            {[
              { value: "~4 yrs", label: "Tech & finance" },
              { value: "400K+", label: "Users impacted" },
              { value: "2,000+", label: "UX cases improved" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="p-5 md:p-6"
                style={{ background: "var(--surface)" }}
              >
                <dt
                  className="text-2xl md:text-4xl font-semibold mb-2 tracking-tight"
                  style={{ color: "var(--text-primary)", letterSpacing: "-0.03em" }}
                >
                  <CountUp value={stat.value} />
                </dt>
                <dd className="mono-label" style={{ color: "var(--text-tertiary)" }}>
                  {stat.label}
                </dd>
              </div>
            ))}
          </motion.dl>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.3, duration: 0.6 }}
        className="hidden md:flex absolute bottom-8 left-1/2 -translate-x-1/2 items-center gap-2"
        aria-hidden="true"
      >
        <span className="mono-label" style={{ color: "var(--text-tertiary)" }}>
          Scroll
        </span>
        <motion.div animate={{ y: [0, 6, 0] }} transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}>
          <ArrowDown size={14} style={{ color: "var(--text-tertiary)" }} />
        </motion.div>
      </motion.div>
    </section>
  );
}
