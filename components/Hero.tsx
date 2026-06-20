"use client";

import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import { ArrowDownIcon, ArrowUpRightIcon } from "@heroicons/react/24/outline";
import ParticleField from "./ParticleField";
import HeroIllustration from "./HeroIllustration";

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
      className="relative min-h-screen flex items-center px-6 pt-28 pb-20 overflow-hidden"
      aria-label="Introduction"
    >
      {/* Layered background */}
      <div className="absolute inset-0 grid-bg pointer-events-none" aria-hidden="true" />
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <ParticleField />
      </div>
      <div
        className="absolute right-0 top-1/3 translate-x-1/4 -translate-y-1/2 w-[700px] h-[700px] pointer-events-none accent-glow"
        aria-hidden="true"
      />

      <div className="relative max-w-6xl mx-auto w-full grid lg:grid-cols-[1.1fr_0.9fr] gap-12 lg:gap-16 items-center">
        {/* Left — copy */}
        <motion.div variants={stagger} initial="initial" animate="animate" className="text-center lg:text-left">
          {/* Eyebrow disciplines */}
          <motion.div variants={fadeUp} className="flex justify-center lg:justify-start mb-8">
            <span
              className="mono-label inline-flex items-center gap-2 px-4 py-2 rounded-full border"
              style={{ color: "var(--accent-color)", borderColor: "var(--border-strong)", background: "var(--surface)" }}
            >
              <span className="w-1.5 h-1.5 rounded-full" style={{ background: "var(--accent-color)" }} />
              Product Thinking · Enterprise UX · Design Systems
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            variants={fadeUp}
            className="text-4xl sm:text-5xl md:text-[56px] font-semibold tracking-tight leading-[1.04] mb-7"
            style={{ color: "#FFFFFF", letterSpacing: "-0.03em" }}
          >
            Senior Product Designer
            <br />
            <span
              className="block text-3xl sm:text-4xl md:text-[40px] leading-[1.1] mt-2"
              style={{ color: "var(--text-secondary)", fontWeight: 300 }}
            >
              for products that cannot afford confusion.
            </span>
          </motion.h1>

          {/* Subtext */}
          <motion.p
            variants={fadeUp}
            className="text-base md:text-xl max-w-xl mx-auto lg:mx-0 leading-relaxed mb-9"
            style={{ color: "var(--text-secondary)" }}
          >
            I help teams turn complex workflows, scattered decisions, and operational friction
            into clear product experiences people can trust.
          </motion.p>

          {/* CTAs */}
          <motion.div variants={fadeUp} className="flex flex-wrap items-center justify-center lg:justify-start gap-3 mb-12">
            <button
              data-hand
              onClick={() => document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" })}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-medium transition-all duration-200 hover:opacity-90 hover:scale-[1.02]"
              style={{ background: "var(--accent-color)", color: "var(--accent-contrast)" }}
            >
              View case studies
              <ArrowUpRightIcon style={{ width: 15, height: 15 }} />
            </button>
            <button
              data-hand
              onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
              className="inline-flex items-center px-6 py-3 rounded-full text-sm font-medium transition-all duration-200 hover:opacity-80 border"
              style={{ color: "var(--text-primary)", borderColor: "var(--border-strong)" }}
            >
              Contact me
            </button>
          </motion.div>

          {/* Value pillars */}
          <motion.div
            variants={fadeUp}
            className="grid grid-cols-1 sm:grid-cols-3 gap-3 max-w-xl mx-auto lg:mx-0"
          >
            {[
              { title: "Systems over screens", sub: "Product thinking" },
              { title: "Friction into flow", sub: "Workflow design" },
              { title: "Scale by design", sub: "Design systems" },
            ].map((p) => (
              <div
                key={p.title}
                className="flex flex-col items-center lg:items-start gap-1 px-4 py-4 rounded-2xl border"
                style={{ borderColor: "var(--border-strong)", background: "var(--surface)" }}
              >
                <span className="text-sm font-medium" style={{ color: "var(--text-primary)" }}>
                  {p.title}
                </span>
                <span className="mono-label" style={{ color: "var(--text-tertiary)" }}>
                  {p.sub}
                </span>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* Right — illustration */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.3, ease }}
          className="hidden lg:block"
        >
          <HeroIllustration />
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
          <ArrowDownIcon style={{ width: 14, height: 14, color: "var(--text-tertiary)" }} />
        </motion.div>
      </motion.div>
    </section>
  );
}
