"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sun, Moon, Menu, X } from "lucide-react";
import { useTheme } from "./ThemeProvider";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Work", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

export default function Navigation() {
  const { theme, toggle } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleLink = (href: string) => {
    setMenuOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <motion.header
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
        style={{
          backgroundColor: scrolled ? "var(--surface-elevated)" : "transparent",
          backdropFilter: scrolled ? "blur(16px)" : "none",
          borderBottom: scrolled ? "1px solid var(--border-subtle)" : "none",
        }}
      >
        <nav
          className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between"
          aria-label="Main navigation"
        >
          <a
            href="#"
            className="text-sm font-medium tracking-tight"
            style={{ color: "var(--text-primary)" }}
            aria-label="Mozhgan Akbari — home"
          >
            M.Akbari
          </a>

          {/* Desktop nav */}
          <ul className="hidden md:flex items-center gap-8" role="list">
            {navLinks.map((link) => (
              <li key={link.href}>
                <button
                  onClick={() => handleLink(link.href)}
                  className="text-sm transition-colors duration-200 hover:opacity-100"
                  style={{ color: "var(--text-secondary)" }}
                >
                  {link.label}
                </button>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-3">
            <button
              onClick={toggle}
              aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
              className="w-9 h-9 rounded-full flex items-center justify-center transition-all duration-200 hover:opacity-80"
              style={{ color: "var(--text-secondary)", background: "var(--bg-secondary)" }}
            >
              <AnimatePresence mode="wait">
                <motion.span
                  key={theme}
                  initial={{ rotate: -30, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 30, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  {theme === "light" ? <Moon size={15} /> : <Sun size={15} />}
                </motion.span>
              </AnimatePresence>
            </button>

            {/* Mobile menu button */}
            <button
              className="md:hidden w-9 h-9 rounded-full flex items-center justify-center"
              style={{ color: "var(--text-secondary)", background: "var(--bg-secondary)" }}
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
              aria-expanded={menuOpen}
            >
              {menuOpen ? <X size={15} /> : <Menu size={15} />}
            </button>
          </div>
        </nav>
      </motion.header>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 md:hidden flex flex-col pt-20 px-6 pb-8"
            style={{ background: "var(--bg)" }}
          >
            <ul className="flex flex-col gap-2" role="list">
              {navLinks.map((link, i) => (
                <motion.li
                  key={link.href}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.06 }}
                >
                  <button
                    onClick={() => handleLink(link.href)}
                    className="text-2xl font-medium py-2 w-full text-left transition-colors"
                    style={{ color: "var(--text-primary)" }}
                  >
                    {link.label}
                  </button>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
