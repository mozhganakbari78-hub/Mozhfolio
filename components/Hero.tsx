"use client";

import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import CountUp from "./CountUp";

const ease = [0.16, 1, 0.3, 1] as [number, number, number, number];

const stagger: Variants = {
  animate: { transition: { staggerChildren: 0.09, delayChildren: 0.15 } },
};

const fadeUp: Variants = {
  initial: { y: 28, opacity: 0 },
  animate: { y: 0, opacity: 1, transition: { duration: 0.8, ease } },
};

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center px-6 pt-24 pb-16 overflow-hidden"
      aria-label="Introduction"
    >
      {/* Grid background */}
      <div className="absolute inset-0 grid-bg pointer-events-none" aria-hidden="true" />

      {/* top hairline + corner labels */}
      <div
        className="absolute top-20 inset-x-6 h-px hidden md:block"
        style={{ background: "var(--border)" }}
        aria-hidden="true"
      />

      <div className="relative max-w-5xl mx-auto w-full">
        <motion.div variants={stagger} initial="initial" animate="animate">
          {/* status row */}
          <motion.div
            variants={fadeUp}
            className="flex items-center justify-between mb-12 md:mb-16"
          >
            <span className="mono-label flex items-center gap-2" style={{ color: "var(--text-secondary)" }}>
              <span
                className="w-1.5 h-1.5 rounded-full animate-pulse"
                style={{ background: "var(--accent-color)" }}
              />
              Available — 2026
            </span>
            <span className="mono-label hidden sm:block" style={{ color: "var(--text-tertiary)" }}>
              Tehran, Iran / Remote
            </span>
          </motion.div>

          {/* Name / headline */}
          <motion.h1
            variants={fadeUp}
            className="text-6xl sm:text-7xl md:text-8xl lg:text-[8.5rem] font-semibold tracking-tight leading-[0.92] mb-8"
            style={{ color: "var(--text-primary)", letterSpacing: "-0.04em" }}
          >
            Product
            <br />
            <span style={{ color: "var(--text-tertiary)", fontWeight: 300 }}>designer.</span>
          </motion.h1>

          <motion.div
            variants={fadeUp}
            className="grid md:grid-cols-12 gap-8 items-end border-t pt-8"
            style={{ borderColor: "var(--border)" }}
          >
            <div className="md:col-span-5">
              <div className="mono-label mb-3" style={{ color: "var(--text-tertiary)" }}>
                Mozhgan Akbari
              </div>
              <p className="text-base md:text-lg leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                I turn messy, high-stakes B2B products into tools people actually trust — enterprise UX, design systems, and friction reduction.
              </p>
            </div>

            <div className="md:col-span-4 md:col-start-9">
              <p className="text-sm leading-relaxed mb-6" style={{ color: "var(--text-tertiary)" }}>
                I read 734 support tickets to understand one system. The detail is the work.
              </p>
              <div className="flex flex-wrap gap-3">
                <button
                  onClick={() => document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" })}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-200 hover:opacity-90 hover:scale-[1.02]"
                  style={{ background: "var(--accent-color)", color: "var(--accent-contrast)" }}
                >
                  View work
                  <ArrowUpRight size={14} />
                </button>
                <button
                  onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
                  className="inline-flex items-center px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-200 hover:opacity-70 border"
                  style={{ color: "var(--text-primary)", borderColor: "var(--border-strong)" }}
                >
                  Contact
                </button>
              </div>
            </div>
          </motion.div>

          {/* Stats strip */}
          <motion.dl
            variants={fadeUp}
            className="grid grid-cols-3 gap-px mt-16 border-t border-l"
            style={{ borderColor: "var(--border)", background: "var(--border)" }}
          >
            {[
              { value: "~4 yrs", label: "Tech & finance" },
              { value: "400K+", label: "Users impacted" },
              { value: "2,000+", label: "UX cases improved" },
            ].map((stat) => (
              <motion.div
                key={stat.label}
                whileHover={{ y: -4 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="p-5 md:p-6 border-r border-b"
                style={{ borderColor: "var(--border)", background: "var(--bg)" }}
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
              </motion.div>
            ))}
          </motion.dl>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.3, duration: 0.6 }}
          className="hidden md:flex absolute -bottom-4 right-0 items-center gap-2"
          aria-hidden="true"
        >
          <span className="mono-label" style={{ color: "var(--text-tertiary)" }}>
            Scroll
          </span>
          <motion.div animate={{ y: [0, 6, 0] }} transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}>
            <ArrowDown size={14} style={{ color: "var(--text-tertiary)" }} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
