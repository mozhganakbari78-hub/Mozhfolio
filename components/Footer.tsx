"use client";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      className="py-10 px-6 border-t"
      style={{ borderColor: "var(--border)" }}
      role="contentinfo"
    >
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <span className="text-sm" style={{ color: "var(--text-tertiary)" }}>
          © {year} Mozhgan Akbari
        </span>
        <span className="text-xs" style={{ color: "var(--text-tertiary)" }}>
          Designed & built with intention.
        </span>
      </div>
    </footer>
  );
}
