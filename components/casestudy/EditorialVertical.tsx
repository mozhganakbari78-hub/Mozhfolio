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
  const [tlVisible, setTlVisible] = useState(false);

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

  // Reveal-on-enter animation (panels are natural height now).
  useEffect(() => {
    if (!panels.length) return;
    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => e.isIntersecting && e.target.classList.add("in")),
      { threshold: 0.15 }
    );
    panels.forEach((p) => io.observe(p.el));
    return () => io.disconnect();
  }, [panels]);

  // Active dot = the panel whose top has crossed a line ~1/3 down the viewport.
  // Scroll-based so it stays correct when several short sections are visible.
  useEffect(() => {
    const track = trackRef.current;
    if (!track || !panels.length) return;
    const onScroll = () => {
      const line = track.getBoundingClientRect().top + track.clientHeight * 0.33;
      let idx = 0;
      panels.forEach((p, i) => {
        if (p.el.getBoundingClientRect().top <= line) idx = i;
      });
      setActive(idx);
    };
    onScroll();
    track.addEventListener("scroll", onScroll, { passive: true });
    return () => track.removeEventListener("scroll", onScroll);
  }, [panels]);

  // Show timeline only while scrolling / touching; auto-hide after pause.
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    let hideTimer: ReturnType<typeof setTimeout> | null = null;
    const show = () => {
      setTlVisible(true);
      if (hideTimer) clearTimeout(hideTimer);
      hideTimer = setTimeout(() => setTlVisible(false), 1400);
    };
    track.addEventListener("scroll", show, { passive: true });
    track.addEventListener("touchstart", show, { passive: true });
    track.addEventListener("pointerdown", show);
    return () => {
      track.removeEventListener("scroll", show);
      track.removeEventListener("touchstart", show);
      track.removeEventListener("pointerdown", show);
      if (hideTimer) clearTimeout(hideTimer);
    };
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
          <Link href="/" className="cs-sig">Mozhgan Akbari</Link>
        </div>
      </div>

      <div className="cs-vtrack" ref={trackRef}>
        {children}
      </div>

      <div className={`cs-vtimeline${tlVisible ? " visible" : ""}`} aria-hidden={tlPanels.length === 0}>
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
