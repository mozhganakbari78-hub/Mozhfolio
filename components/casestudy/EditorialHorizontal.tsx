"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { ArrowLeftIcon } from "@heroicons/react/24/outline";

type Panel = { el: HTMLElement; label: string; inTimeline: boolean };

export default function EditorialHorizontal({ children }: { children: React.ReactNode }) {
  const rootRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [panels, setPanels] = useState<Panel[]>([]);
  const [active, setActive] = useState(0);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    const article = track.querySelector("article");
    if (!article) return;

    const kids = (Array.from(article.children) as HTMLElement[]).filter(
      (el) => el.tagName !== "HR" && !el.classList.contains("cs-divider")
    );
    const built: Panel[] = kids.map((el, i) => {
      el.classList.add("cs-panel");
      let label = `${i + 1}`;
      let inTimeline = true;
      if (el.classList.contains("cs-hero")) label = "Overview";
      else if (el.classList.contains("cs-next")) label = "Next";
      else if (el.classList.contains("cs-foot")) { label = "End"; }
      else {
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

  const targetX = useRef(0);
  const animating = useRef(false);
  const kickRef = useRef<(() => void) | null>(null);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    targetX.current = track.scrollLeft;
    const SPEED = 1.5;
    const EASE = 0.16;

    const animate = () => {
      const cur = track.scrollLeft;
      const diff = targetX.current - cur;
      if (Math.abs(diff) < 0.5) {
        track.scrollLeft = targetX.current;
        animating.current = false;
        return;
      }
      track.scrollLeft = cur + diff * EASE;
      requestAnimationFrame(animate);
    };
    const kick = () => {
      if (!animating.current) {
        animating.current = true;
        requestAnimationFrame(animate);
      }
    };
    kickRef.current = kick;

    const onWheel = (e: WheelEvent) => {
      if (Math.abs(e.deltaY) <= Math.abs(e.deltaX)) return;
      e.preventDefault();
      const max = track.scrollWidth - track.clientWidth;
      if (!animating.current) targetX.current = track.scrollLeft;
      targetX.current = Math.max(0, Math.min(max, targetX.current + e.deltaY * SPEED));
      kick();
    };

    let dragStartX = 0;
    let dragStartScroll = 0;
    let dragging = false;

    const onPointerDown = (e: PointerEvent) => {
      if ((e.target as HTMLElement).closest("a, button")) return;
      dragging = true;
      dragStartX = e.clientX;
      dragStartScroll = track.scrollLeft;
      track.setPointerCapture(e.pointerId);
      track.style.cursor = "grabbing";
    };
    const onPointerMove = (e: PointerEvent) => {
      if (!dragging) return;
      const dragDelta = dragStartX - e.clientX;
      track.scrollLeft = dragStartScroll + dragDelta;
      targetX.current = track.scrollLeft;
    };
    const onPointerUp = () => {
      dragging = false;
      track.style.cursor = "";
    };

    track.addEventListener("wheel", onWheel, { passive: false });
    track.addEventListener("pointerdown", onPointerDown);
    track.addEventListener("pointermove", onPointerMove);
    track.addEventListener("pointerup", onPointerUp);
    track.addEventListener("pointercancel", onPointerUp);
    return () => {
      track.removeEventListener("wheel", onWheel);
      track.removeEventListener("pointerdown", onPointerDown);
      track.removeEventListener("pointermove", onPointerMove);
      track.removeEventListener("pointerup", onPointerUp);
      track.removeEventListener("pointercancel", onPointerUp);
    };
  }, [panels]);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    const mockups = Array.from(track.querySelectorAll<HTMLElement>(".cs-mockup"));

    const updateMockups = () => {
      const tr = track.getBoundingClientRect();
      const trackCenter = tr.left + tr.width / 2;
      for (const el of mockups) {
        const r = el.getBoundingClientRect();
        const c = r.left + r.width / 2;
        const dist = Math.min(1, Math.abs(c - trackCenter) / (tr.width * 0.9));
        const p = 1 - dist;
        const scale = 0.86 + 0.14 * p;
        const op = 0.35 + 0.65 * p;
        el.style.setProperty("--mk-scale", scale.toFixed(3));
        el.style.setProperty("--mk-op", op.toFixed(3));
      }
    };

    const onScroll = () => {
      const center = track.scrollLeft + track.clientWidth / 2;
      let idx = 0;
      panels.forEach((p, i) => {
        if (p.el.offsetLeft <= center) idx = i;
      });
      setActive(idx);
      updateMockups();
    };
    onScroll();
    track.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      track.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [panels]);

  useEffect(() => {
    const track = trackRef.current;
    if (!track || !panels.length) return;
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add("in")),
      { root: track, threshold: 0.15 }
    );
    track.querySelectorAll(".cs-reveal").forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, [panels]);

  const jumpTo = (i: number) => {
    const track = trackRef.current;
    const p = panels[i];
    if (!track || !p) return;
    const max = track.scrollWidth - track.clientWidth;
    targetX.current = Math.max(0, Math.min(max, p.el.offsetLeft));
    kickRef.current?.();
  };

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") jumpTo(Math.min(active + 1, panels.length - 1));
      else if (e.key === "ArrowLeft") jumpTo(Math.max(active - 1, 0));
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [active, panels]);

  const tlPanels = panels.filter((p) => p.inTimeline && p.label !== "End");

  // Align the fill line with the active dot: dots are evenly spaced, so the
  // fill should reach the active timeline item's fractional position — not the
  // raw scroll ratio (panels have unequal widths, so the two diverge).
  let activeTlIndex = 0;
  tlPanels.forEach((p, i) => {
    if (panels.indexOf(p) <= active) activeTlIndex = i;
  });
  const fillPct =
    tlPanels.length > 1 ? (activeTlIndex / (tlPanels.length - 1)) * 100 : 0;

  return (
    <div className="cs-root cs-horizontal" ref={rootRef}>
      <div className="cs-bar">
        <div className="cs-bar-inner">
          <Link href="/#projects" className="cs-back">
            <ArrowLeftIcon style={{ width: 14, height: 14 }} />
            All work
          </Link>
          <span className="cs-sig">Mozhgan Akbari</span>
        </div>
      </div>

      <div className="cs-htrack" ref={trackRef}>
        {children}
      </div>

      <div className="cs-timeline">
        <div className="cs-tl-line">
          <div className="cs-tl-fill" style={{ width: `${fillPct}%` }} />
        </div>
        <div className="cs-tl-labels">
          {tlPanels.map((p) => {
            const idx = panels.indexOf(p);
            return (
              <button
                key={idx}
                className={`cs-tl-item${idx === active ? " active" : ""}`}
                onClick={() => jumpTo(idx)}
              >
                <span className="dot" />
                <span className="txt">{p.label}</span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
