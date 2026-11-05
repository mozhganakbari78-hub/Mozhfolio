"use client";

import { ArrowUpRightIcon } from "@heroicons/react/24/outline";

// The entrance is a CSS animation, not framer variants: framer starts the
// elements at opacity 0 in the exported HTML, so the hero stayed blank until
// the JavaScript had downloaded and hydrated. CSS plays from the first paint.

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-[100svh] flex items-center px-6 pt-28 md:pt-28 pb-12 md:pb-12 overflow-hidden"
      aria-label="Introduction"
    >
      {/* Subtle grid */}
      <div className="absolute inset-0 grid-bg pointer-events-none" aria-hidden="true" />

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

          {/* Name and role: the page's h1, set small */}
          <div className="hero-rise mb-6" style={{ animationDelay: "0s" }}>
            <h1
              className="text-[15px] font-medium"
              style={{ color: "var(--text-primary)", letterSpacing: "-0.005em" }}
            >
              Mozhgan Akbari · Product Designer
            </h1>
          </div>

          {/* Statement: the largest text on the page, one phrase per line */}
          <div className="hero-rise" style={{ animationDelay: "0.05s" }}>
            <p
              className="font-semibold leading-[0.96] mb-6"
              style={{
                fontSize: "clamp(30px, 9vw, 68px)",
                letterSpacing: "-0.04em",
                color: "var(--text-primary)",
              }}
            >
              <span className="block whitespace-nowrap">Hard problems.</span>
              <span className="block whitespace-nowrap" style={{ color: "var(--text-secondary)" }}>
                Obvious screens.
              </span>
            </p>
          </div>

          {/* Supporting line */}
          <p
            className="hero-rise max-w-4xl leading-snug mb-9"
            style={{
              animationDelay: "0.1s",
              fontSize: "clamp(18px, 2vw, 24px)",
              fontWeight: 300,
              letterSpacing: "-0.015em",
              color: "var(--text-secondary)",
              textWrap: "pretty",
            }}
          >
            Workflows, design systems and UX writing, built on evidence from real users.
          </p>

          {/* CTAs */}
          <div className="hero-rise flex flex-wrap items-center gap-3 mb-12" style={{ animationDelay: "0.15s" }}>
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
            style={{ animationDelay: "0.2s", borderTop: "1px solid var(--border-strong)", paddingTop: 20 }}
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

    </section>
  );
}
