"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Mail } from "lucide-react";
import { useInView } from "@/lib/useInView";

function GithubIcon({ size = 15 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
  );
}

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
    await new Promise((r) => setTimeout(r, 1200));
    setStatus("sent");
  };

  const socials = [
    { icon: GithubIcon, label: "GitHub", href: "https://github.com/mozhganakbari78-hub" },
    { icon: LinkedinIcon, label: "LinkedIn", href: "https://www.linkedin.com/in/mozhgan-akbari/" },
    { icon: Mail, label: "Email", href: "mailto:akbarimozhgan99@gmail.com" },
  ];

  return (
    <section id="contact" className="py-28 md:py-40 px-6" aria-labelledby="contact-heading">
      <div className="max-w-5xl mx-auto">
        <div ref={ref} className="grid md:grid-cols-2 gap-16 lg:gap-24 items-start">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="mono-label mb-5" style={{ color: "var(--accent-color)" }}>
              [ 05 ] — Contact
            </div>
            <h2
              id="contact-heading"
              className="text-4xl md:text-6xl font-semibold tracking-tight mb-6 leading-[1.02]"
              style={{ color: "var(--text-primary)", letterSpacing: "-0.03em" }}
            >
              Let&apos;s build something worth the detail.
            </h2>
            <p className="text-base leading-relaxed mb-8" style={{ color: "var(--text-secondary)" }}>
              I&apos;m open to product design roles, especially in B2B, enterprise, or fintech. If you&apos;re building something complex and want a designer who will read the tickets, I&apos;d like to hear about it.
            </p>

            <div className="space-y-3 mb-10">
              <a
                href="mailto:akbarimozhgan99@gmail.com"
                className="flex items-center gap-3 text-sm transition-opacity hover:opacity-70"
                style={{ color: "var(--text-secondary)" }}
              >
                <Mail size={15} />
                akbarimozhgan99@gmail.com
              </a>
              <a
                href="https://www.linkedin.com/in/mozhgan-akbari/"
                target="_blank"
                rel="noopener noreferrer"
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
                  aria-label={label}
                  className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-200 hover:opacity-70 border"
                  style={{
                    color: "var(--text-secondary)",
                    borderColor: "var(--border)",
                    background: "var(--surface)",
                  }}
                >
                  <Icon size={15} />
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
                style={{ background: "var(--surface)", borderColor: "var(--border)" }}
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
                style={{ background: "var(--surface)", borderColor: "var(--border)" }}
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
                      <Send size={13} />
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
