"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

/**
 * Editorial shell for the case-study pages. Renders the warm-paper theme,
 * a sticky back bar, and runs the scroll-reveal IntersectionObserver over any
 * `.cs-reveal` element in its subtree.
 */
export default function Editorial({ children }: { children: React.ReactNode }) {
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;
    const els = root.querySelectorAll(".cs-reveal");
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            obs.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12 }
    );
    els.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <div className="cs-root" ref={rootRef}>
      <div className="cs-bar">
        <div className="cs-wrap">
          <Link href="/#projects" className="cs-back">
            <ArrowLeft size={14} />
            All work
          </Link>
          <span className="cs-sig">Mozhgan Akbari</span>
        </div>
      </div>
      <div className="cs-wrap">{children}</div>
    </div>
  );
}
