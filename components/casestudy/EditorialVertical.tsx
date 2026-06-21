"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { ArrowLeftIcon } from "@heroicons/react/24/outline";

type Panel = { el: HTMLElement; label: string; inTimeline: boolean };

export default function EditorialVertical({ children }: { children: React.ReactNode }) {
  const rootRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [panels, setPanels] = useState<Panel[]>([]);
  const [active, setActive] = useState(0);

  useEffect(() => {
    const root = rootRef.current;
    const track = trackRef.current;
    if (!track || !root) return;

    // measure bar so panels can be exactly viewport-minus-bar tall
    const bar = root.querySelector<HTMLElement>(".cs-bar");
    if (bar) {
      root.style.setProperty("--bar-h", `${bar.offsetHeight}px`);
    }

    const article = track.querySelector("article");
    if (!article) return;

    const kids = (Array.from(article.children) as HTMLElement[]).filter(
      (el) => el.tagName !== "HR" && !el.classList.contains("cs-divider")
    );
    const built: Panel[] = kids.map((el, i) => {
      el.classList.add("cs-vpanel");
      let label = `${i + 1}`;
      let inTimeline = true;
      if (el.classList.contains("cs-hero")) label = "Overview";
      else if (el.classList.contains("cs-next")) label = "Next";
      else if (el.classList.contains("cs-foot")) {
        label = "End";
        inTimeline = false;
      } else {
        const num = el.querySelector(".cs-num")?.textContent ?? "";
        const after = num.split("/")[1]?.trim();
        if (after) {
          const short = after.length > 18 ? after.slice(0, 16).trimEnd() + "..." : after;
          label = short;
        } else {
          inTimeline = false;
        }
      }
      return { el, label, inTimeline };
    });
    setPanels(built);
  }, []);

  useEffect(() => {
    if (!panels.length) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            const idx = panels.findIndex((p) => p.el === e.target);
            if (idx >= 0 && e.intersectionRatio > 0.5) setActive(idx);
          }
        });
      },
      { threshold: [0.15, 0.5, 0.75] }
    );
    panels.forEach((p) => io.observe(p.el));
    return () => io.disconnect();
  }, [panels]);

  const jumpTo = (i: number) => {
    const p = panels[i];
    if (!p) return;
    p.el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const tlPanels = panels.filter((p) => p.inTimeline);

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

      <div className="cs-vtrack" ref={trackRef}>
        {children}
      </div>

      <div className="cs-vtimeline" aria-hidden={tlPanels.length === 0}>
        {tlPanels.map((p) => {
          const idx = panels.indexOf(p);
          return (
            <button
              key={idx}
              className={`cs-vtl-item${idx === active ? " active" : ""}`}
              onClick={() => jumpTo(idx)}
              aria-label={p.label}
            >
              <span className="dot" />
              <span className="txt">{p.label}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
