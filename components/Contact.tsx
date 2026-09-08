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
  const [fieldErrors, setFieldErrors] = useState<{ name?: string; email?: string; message?: string }>({});

  const validateField = (id: "name" | "email" | "message", value: string): string | undefined => {
    if (id === "name" && !value.trim()) return "Please enter your name.";
    if (id === "email") {
      if (!value.trim()) return "Please enter your email.";
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(value.trim()))
        return "Please enter a valid email address.";
    }
    if (id === "message" && !value.trim()) return "Please write a message.";
    return undefined;
  };

  const validate = () => {
    const errors: typeof fieldErrors = {
      name: validateField("name", form.name),
      email: validateField("email", form.email),
      message: validateField("message", form.message),
    };
    setFieldErrors(errors);
    return !errors.name && !errors.email && !errors.message;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setStatus("sending");
    trackEvent("contact_form_submit");
    try {
      const res = await fetch("https://formsubmit.co/ajax/akbarimozhgan99@gmail.com", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          message: form.message,
          _subject: `Mozhfolio contact from ${form.name}`,
          _template: "table",
        }),
      });
      if (!res.ok) throw new Error("send failed");
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  };

  const socials = [
    { icon: LinkedinIcon, label: "LinkedIn", href: "https://www.linkedin.com/in/mozhgan-akbari/" },
    { icon: EnvelopeIcon, label: "Email", href: "mailto:akbarimozhgan99@gmail.com" },
  ];

  return (
    <section id="contact" className="relative py-28 md:py-40 px-6 overflow-hidden" aria-labelledby="contact-heading">
      {/* Aurora glow. Static on purpose: animating scale/opacity on a blurred
          surface this large forces a full re-rasterisation every frame, which
          drops the whole page to a lower raster quality while scrolling. */}
      <div
        className="absolute pointer-events-none rounded-full blur-3xl"
        aria-hidden="true"
        style={{
          background: "var(--accent-color)",
          width: 900,
          height: 900,
          top: "-25%",
          left: "5%",
          opacity: 0.07,
        }}
      />
      <div
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
      />
      {/* Hexagon outline motif */}
      <svg
        className="absolute left-1/2 top-0 -translate-x-1/2 w-[1100px] max-w-none pointer-events-none"
        viewBox="0 0 1100 400"
        fill="none"
        aria-hidden="true"
        style={{ color: "var(--accent-ink)", opacity: 0.12 }}
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
            <div className="mono-label mb-5" style={{ color: "var(--accent-ink)" }}>
              [ 05 ] Contact
            </div>
            <h2
              id="contact-heading"
              className="text-[28px] md:text-[42px] font-semibold tracking-tight mb-6 leading-[1.02]"
              style={{ color: "var(--text-primary)", letterSpacing: "-0.03em" }}
            >
              The next problem worth solving.
            </h2>
            <p className="text-base leading-relaxed mb-8" style={{ color: "var(--text-secondary)" }}>
              I&apos;m considering product design roles where the work involves real complexity:
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
              <motion.div
                initial={{ opacity: 0, scale: 0.92, y: 12 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="relative overflow-hidden rounded-2xl p-10 border text-center"
                style={{ background: "#1C1D1F", borderColor: "var(--border)" }}
              >
                {/* soft glow behind the check */}
                <motion.div
                  aria-hidden="true"
                  className="absolute left-1/2 top-10 -translate-x-1/2 rounded-full blur-3xl pointer-events-none"
                  style={{ width: 220, height: 220, background: "var(--accent-color)" }}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: [0, 0.22, 0.12] }}
                  transition={{ duration: 1.4, times: [0, 0.5, 1], ease: "easeOut" }}
                />

                {/* animated check — circle + tick draw themselves */}
                <motion.svg
                  width="72"
                  height="72"
                  viewBox="0 0 72 72"
                  fill="none"
                  className="relative mx-auto mb-5"
                  initial={{ scale: 0.6, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ type: "spring", stiffness: 220, damping: 16, delay: 0.1 }}
                >
                  <motion.circle
                    cx="36"
                    cy="36"
                    r="32"
                    stroke="var(--accent-color)"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    initial={{ pathLength: 0, rotate: -90 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 0.7, ease: [0.65, 0, 0.35, 1], delay: 0.15 }}
                    style={{ transformOrigin: "center" }}
                  />
                  <motion.path
                    d="M23 37.5 L32 46.5 L49 27.5"
                    stroke="var(--accent-color)"
                    strokeWidth="4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 0.45, ease: [0.65, 0, 0.35, 1], delay: 0.75 }}
                  />
                </motion.svg>

                <motion.p
                  className="relative font-semibold text-lg mb-1"
                  style={{ color: "var(--text-primary)", letterSpacing: "-0.01em" }}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.9, ease: [0.16, 1, 0.3, 1] }}
                >
                  Message sent
                </motion.p>
                <motion.p
                  className="relative text-sm"
                  style={{ color: "var(--text-tertiary)" }}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 1.05, ease: [0.16, 1, 0.3, 1] }}
                >
                  Thanks for reaching out. I&apos;ll get back to you soon.
                </motion.p>
              </motion.div>
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
                      onChange={(e) => {
                        const id = field.id as "name" | "email";
                        setForm({ ...form, [id]: e.target.value });
                        setFieldErrors({
                          ...fieldErrors,
                          [id]: e.target.value ? validateField(id, e.target.value) : undefined,
                        });
                      }}
                      aria-invalid={!!fieldErrors[field.id as keyof typeof fieldErrors]}
                      className="w-full px-4 py-3 rounded-xl text-sm transition-all duration-200 outline-none border"
                      style={{
                        background: "var(--bg-secondary)",
                        color: "var(--text-primary)",
                        borderColor: fieldErrors[field.id as keyof typeof fieldErrors]
                          ? "#e8836e"
                          : "var(--border)",
                      }}
                    />
                    {fieldErrors[field.id as keyof typeof fieldErrors] && (
                      <p className="text-xs mt-1.5" style={{ color: "#e8836e" }}>
                        {fieldErrors[field.id as keyof typeof fieldErrors]}
                      </p>
                    )}
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
                    onChange={(e) => {
                      setForm({ ...form, message: e.target.value });
                      setFieldErrors({
                        ...fieldErrors,
                        message: e.target.value ? validateField("message", e.target.value) : undefined,
                      });
                    }}
                    aria-invalid={!!fieldErrors.message}
                    className="block w-full px-4 py-3 rounded-xl text-sm transition-all duration-200 outline-none border resize-none"
                    style={{
                      background: "var(--bg-secondary)",
                      color: "var(--text-primary)",
                      borderColor: fieldErrors.message ? "#e8836e" : "var(--border)",
                    }}
                  />
                  {fieldErrors.message && (
                    <p className="text-xs mt-1.5" style={{ color: "#e8836e" }}>
                      {fieldErrors.message}
                    </p>
                  )}
                </div>

                {status === "error" && (
                  <p className="text-xs" style={{ color: "#e8836e" }}>
                    Something went wrong sending your message. Please try again, or
                    email me directly.
                  </p>
                )}

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
