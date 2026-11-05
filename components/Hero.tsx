"use client";

import { ArrowUpRightIcon } from "@heroicons/react/24/outline";
import HeroIso from "@/components/HeroIso";

// The entrance is a CSS animation, not framer variants: framer starts the
// elements at opacity 0 in the exported HTML, so the hero stayed blank until
// the JavaScript had downloaded and hydrated. CSS plays from the first paint.

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-[100svh] flex items-center px-6 pt-24 md:pt-28 pb-12 overflow-hidden"
      aria-label="Introduction"
      style={{ background: "radial-gradient(ellipse 70% 60% at 70% 45%, #17181b 0%, transparent 70%)" }}
    >
      <div className="relative max-w-6xl mx-auto w-full grid lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] items-center gap-x-10 gap-y-2">

        {/* The statement, drawn as an exploded isometric stack */}
        <div className="lg:order-last -mx-6 lg:mx-0">
          <HeroIso />
        </div>

        {/* above the scene, so its guide lines pass under the text */}
        <div className="relative z-10">
          {/* Name and role: the page's h1, set small */}
          <div className="hero-rise mb-5" style={{ animationDelay: "0s" }}>
            <h1
              className="text-[15px] font-medium"
              style={{ color: "var(--text-primary)", letterSpacing: "-0.005em" }}
            >
              Mozhgan Akbari · Product Designer
            </h1>
          </div>

          {/* the statement in words, for readers that can't see the drawing */}
          <p className="sr-only">Hard problems. Obvious screens.</p>

          {/* Supporting line */}
          <p
            className="hero-rise leading-[1.2] mb-9"
            style={{
              animationDelay: "0.1s",
              fontSize: "clamp(24px, 2.6vw, 34px)",
              fontWeight: 400,
              letterSpacing: "-0.025em",
              color: "var(--text-primary)",
              textWrap: "balance",
            }}
          >
            Workflows, design systems and UX writing,{" "}
            <span style={{ color: "var(--text-secondary)" }}>built on evidence from real users.</span>
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
            className="hero-rise flex flex-col gap-4"
            style={{ animationDelay: "0.2s", borderTop: "1px solid var(--border-strong)", paddingTop: 20 }}
          >
            {[
              { label: "6 years", note: "shipping live products" },
              { label: "Banking · Fintech · Crypto · IoT", note: "domains designed for" },
              { label: "BSc Computer Engineering", note: "engineering-fluent by training" },
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
