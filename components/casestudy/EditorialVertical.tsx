"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { ArrowLeftIcon } from "@heroicons/react/24/outline";

export default function EditorialVertical({ children }: { children: React.ReactNode }) {
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;
    const article = root.querySelector("article");
    if (!article) return;

    const kids = Array.from(article.children) as HTMLElement[];
    for (const el of kids) {
      if (el.tagName === "HR") continue;
      el.classList.add("cs-reveal");
    }

    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            io.unobserve(e.target);
          }
        }),
      { threshold: 0.12, rootMargin: "0px 0px -80px 0px" }
    );
    kids.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <div className="cs-root cs-vertical" ref={rootRef}>
      <div className="cs-bar">
        <div className="cs-bar-inner">
          <Link href="/#projects" className="cs-back">
            <ArrowLeftIcon style={{ width: 14, height: 14 }} />
            All work
          </Link>
          <span className="cs-sig">Mozhgan Akbari</span>
        </div>
      </div>

      <div className="cs-vtrack">{children}</div>
    </div>
  );
}
