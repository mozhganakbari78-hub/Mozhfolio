"use client";

import { motion } from "framer-motion";
import { ArrowDownIcon, ArrowUpRightIcon } from "@heroicons/react/24/outline";
import ParticleField from "./ParticleField";

// The entrance is a CSS animation, not framer variants: framer starts the
// elements at opacity 0 in the exported HTML, so the hero stayed blank until
// the JavaScript had downloaded and hydrated. CSS plays from the first paint.

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center px-6 pt-28 pb-24 overflow-hidden"
      aria-label="Introduction"
    >
      {/* Subtle grid */}
      <div className="absolute inset-0 grid-bg pointer-events-none" aria-hidden="true" />
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <ParticleField />
      </div>

      {/* Radial fade from bottom */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse 80% 60% at 50% 120%, var(--accent-color) 0%, transparent 60%)",
          opacity: 0.07,
        }}
        aria-hidden="true"
      />

      <div className="relative max-w-6xl mx-auto w-full">
        <div>

          {/* Eyebrow */}
          <div className="hero-rise mb-10" style={{ animationDelay: "0.05s" }}>
            <span
              className="mono-label"
              style={{ color: "var(--accent-ink)" }}
            >
              Product Designer · Enterprise UX · Design Systems
            </span>
          </div>

          {/* Name */}
          <div className="hero-rise" style={{ animationDelay: "0.15s" }}>
            <h1
              className="font-semibold leading-[0.96] mb-8"
              style={{
                fontSize: "clamp(52px, 10vw, 112px)",
                letterSpacing: "-0.04em",
                color: "var(--text-primary)",
              }}
            >
              Mozhgan
              <br />
              <span style={{ color: "var(--text-secondary)" }}>Akbari.</span>
            </h1>
          </div>

          {/* Tagline */}
          <p
            className="hero-rise max-w-4xl leading-snug mb-4"
            style={{
              animationDelay: "0.25s",
              fontSize: "clamp(18px, 2vw, 24px)",
              fontWeight: 300,
              letterSpacing: "-0.015em",
              color: "var(--text-secondary)",
            }}
          >
            Designing clarity in complex systems.
          </p>
          <p
            className="hero-rise max-w-4xl leading-snug mb-12"
            style={{
              animationDelay: "0.35s",
              fontSize: "clamp(16px, 1.6vw, 20px)",
              fontWeight: 300,
              letterSpacing: "-0.01em",
              color: "var(--text-tertiary)",
            }}
          >
            Enterprise workflows, financial products, and design systems at scale.
          </p>

          {/* CTAs */}
          <div className="hero-rise flex flex-wrap items-center gap-3 mb-20" style={{ animationDelay: "0.45s" }}>
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
          </div>

          {/* Discipline strip */}
          <div
            className="hero-rise flex flex-wrap items-center gap-x-8 gap-y-3"
            style={{ animationDelay: "0.55s", borderTop: "1px solid var(--border-strong)", paddingTop: 24 }}
          >
            {[
              { label: "6 years", note: "shipping live products" },
              { label: "Banking · Fintech · Crypto · IoT", note: "domains designed for" },
              { label: "CS background", note: "engineering-fluent by training" },
            ].map((item) => (
              <div key={item.label} className="flex flex-col gap-0.5">
                <span className="text-sm font-medium" style={{ color: "var(--text-primary)" }}>
                  {item.label}
                </span>
                <span className="mono-label" style={{ color: "var(--text-tertiary)" }}>
                  {item.note}
                </span>
              </div>
            ))}
          </div>

        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.6 }}
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
