"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { PaperAirplaneIcon, EnvelopeIcon } from "@heroicons/react/24/outline";
import { useInView } from "@/lib/useInView";
import { trackEvent } from "@/lib/gtag";

function LinkedinIcon({ size = 15 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

export default function Contact() {
  const { ref, inView } = useInView();
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    trackEvent("contact_form_submit");
    await new Promise((r) => setTimeout(r, 1200));
    setStatus("sent");
  };

  const socials = [
    { icon: LinkedinIcon, label: "LinkedIn", href: "https://www.linkedin.com/in/mozhgan-akbari/" },
    { icon: EnvelopeIcon, label: "Email", href: "mailto:akbarimozhgan99@gmail.com" },
  ];

  return (
    <section id="contact" className="relative py-28 md:py-40 px-6 overflow-hidden" aria-labelledby="contact-heading">
      {/* Pulsing aurora glow */}
      <motion.div
        className="absolute pointer-events-none rounded-full blur-3xl"
        aria-hidden="true"
        style={{
          background: "var(--accent-color)",
          width: 900,
          height: 900,
          top: "-25%",
          left: "5%",
          opacity: 0.08,
        }}
        animate={{ opacity: [0.04, 0.09, 0.04], scale: [0.95, 1.05, 0.95] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute pointer-events-none rounded-full blur-3xl"
        aria-hidden="true"
        style={{
          background: "var(--accent-color)",
          width: 700,
          height: 700,
          bottom: "-25%",
          right: "0%",
          opacity: 0.05,
        }}
        animate={{ opacity: [0.02, 0.07, 0.02], scale: [1.05, 0.95, 1.05] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      />
      {/* Hexagon outline motif */}
      <svg
        className="absolute left-1/2 top-0 -translate-x-1/2 w-[1100px] max-w-none pointer-events-none"
        viewBox="0 0 1100 400"
        fill="none"
        aria-hidden="true"
        style={{ color: "var(--accent-color)", opacity: 0.12 }}
      >
        {Array.from({ length: 7 }).map((_, row) =>
          Array.from({ length: 11 }).map((__, col) => {
            const w = 84;
            const h = 96;
            const x = col * (w * 0.86) + (row % 2 ? w * 0.43 : 0);
            const y = row * (h * 0.5);
            const pts = [
              [x + w / 2, y],
              [x + w, y + h / 4],
              [x + w, y + (h * 3) / 4],
              [x + w / 2, y + h],
              [x, y + (h * 3) / 4],
              [x, y + h / 4],
            ]
              .map((p) => p.join(","))
              .join(" ");
            return (
              <polygon
                key={`${row}-${col}`}
                points={pts}
                stroke="currentColor"
                strokeWidth="1"
                fill="none"
              />
            );
          })
        )}
      </svg>
      {/* fade the motif into the background */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{ background: "linear-gradient(to bottom, transparent, var(--bg) 70%)" }}
      />

      <div className="relative max-w-5xl mx-auto">
        <div ref={ref} className="grid md:grid-cols-2 gap-16 lg:gap-24 items-start">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="mono-label mb-5" style={{ color: "var(--accent-color)" }}>
              [ 05 ] Contact
            </div>
            <h2
              id="contact-heading"
              className="text-4xl md:text-6xl font-semibold tracking-tight mb-6 leading-[1.02]"
              style={{ color: "var(--text-primary)", letterSpacing: "-0.03em" }}
            >
              The next problem worth solving.
            </h2>
            <p className="text-base leading-relaxed mb-8" style={{ color: "var(--text-secondary)" }}>
              I&apos;m considering senior product design roles where the work involves real complexity:
              regulated domains, enterprise tooling, fintech, multi-stakeholder systems. If you&apos;re
              building something where every decision compounds, let&apos;s talk.
            </p>

            <div className="space-y-3 mb-10">
              <a
                href="mailto:akbarimozhgan99@gmail.com"
                onClick={() => trackEvent("email_click")}
                className="flex items-center gap-3 text-sm transition-opacity hover:opacity-70"
                style={{ color: "var(--text-secondary)" }}
              >
                <EnvelopeIcon style={{ width: 15, height: 15 }} />
                akbarimozhgan99@gmail.com
              </a>
              <a
                href="https://www.linkedin.com/in/mozhgan-akbari/"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackEvent("linkedin_click")}
                className="flex items-center gap-3 text-sm transition-opacity hover:opacity-70"
                style={{ color: "var(--text-secondary)" }}
              >
                <LinkedinIcon size={15} />
                linkedin.com/in/mozhgan-akbari
              </a>
            </div>

            <div className="flex gap-3">
              {socials.map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => trackEvent("social_click", { network: label })}
                  aria-label={label}
                  className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-200 hover:opacity-70 border"
                  style={{
                    color: "var(--text-secondary)",
                    borderColor: "var(--border)",
                    background: "var(--surface)",
                  }}
                >
                  <Icon style={{ width: 15, height: 15 }} />
                </a>
              ))}
            </div>
          </motion.div>

          {/* Right — Form */}
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          >
            {status === "sent" ? (
              <div
                className="rounded-2xl p-8 border text-center"
                style={{ background: "#1C1D1F", borderColor: "var(--border)" }}
              >
                <div className="text-2xl mb-2">✓</div>
                <p className="font-medium mb-1" style={{ color: "var(--text-primary)" }}>
                  Message sent
                </p>
                <p className="text-sm" style={{ color: "var(--text-tertiary)" }}>
                  I&apos;ll get back to you soon.
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="rounded-2xl p-8 border space-y-5"
                style={{ background: "#1C1D1F", borderColor: "var(--border)" }}
                noValidate
              >
                {[
                  { id: "name", label: "Name", type: "text", placeholder: "Your name" },
                  { id: "email", label: "Email", type: "email", placeholder: "your@email.com" },
                ].map((field) => (
                  <div key={field.id}>
                    <label
                      htmlFor={field.id}
                      className="block text-xs font-medium mb-2"
                      style={{ color: "var(--text-secondary)" }}
                    >
                      {field.label}
                    </label>
                    <input
                      id={field.id}
                      type={field.type}
                      required
                      placeholder={field.placeholder}
                      value={form[field.id as keyof typeof form]}
                      onChange={(e) => setForm({ ...form, [field.id]: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl text-sm transition-all duration-200 outline-none border"
                      style={{
                        background: "var(--bg-secondary)",
                        color: "var(--text-primary)",
                        borderColor: "var(--border)",
                      }}
                    />
                  </div>
                ))}

                <div>
                  <label
                    htmlFor="message"
                    className="block text-xs font-medium mb-2"
                    style={{ color: "var(--text-secondary)" }}
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={5}
                    placeholder="Tell me what you're building..."
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl text-sm transition-all duration-200 outline-none border resize-none"
                    style={{
                      background: "var(--bg-secondary)",
                      color: "var(--text-primary)",
                      borderColor: "var(--border)",
                    }}
                  />
                </div>

                <button
                  type="submit"
                  data-hand
                  disabled={status === "sending"}
                  className="w-full flex items-center justify-center gap-2 py-3 rounded-xl text-sm font-medium transition-all duration-200 hover:opacity-90 disabled:opacity-50"
                  style={{ background: "var(--accent-color)", color: "var(--accent-contrast)" }}
                >
                  {status === "sending" ? (
                    "Sending..."
                  ) : (
                    <>
                      Send message
                      <PaperAirplaneIcon style={{ width: 13, height: 13 }} />
                    </>
                  )}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
