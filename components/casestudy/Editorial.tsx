"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ArrowLeftIcon } from "@heroicons/react/24/outline";

type Panel = { el: HTMLElement; label: string; inTimeline: boolean };

/**
 * Horizontal, timeline-driven case-study shell (konpo-style). Each top-level
 * block of the case article becomes a full-height panel laid out left-to-right.
 * Vertical wheel drives horizontal movement; tall panels scroll vertically first,
 * then hand off to horizontal at their boundary. A bottom timeline shows the
 * section labels and a progress fill, and clicking a label jumps to it.
 */
export default function Editorial({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const rootRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [panels, setPanels] = useState<Panel[]>([]);
  const [active, setActive] = useState(0);
  const [progress, setProgress] = useState(0);

  // Build panels from the article's direct children.
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
          // shorten long labels
          const short = after.length > 18 ? after.slice(0, 16).trimEnd() + "..." : after;
          label = short;
        } else {
          // inline art or shot panels — scrollable but not shown in timeline
          inTimeline = false;
        }
      }
      return { el, label, inTimeline };
    });
    setPanels(built);
  }, []);

  // Wheel: vertical → horizontal with inertial rAF lerp (smooth + fast).
  const targetX = useRef(0);
  const animating = useRef(false);
  const kickRef = useRef<(() => void) | null>(null);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    // On mobile (≤680px) the layout is vertical — skip horizontal scroll setup.
    if (window.innerWidth <= 680) return;

    targetX.current = track.scrollLeft;
    const SPEED = 1.5; // wheel-to-horizontal gain
    const EASE = 0.16; // higher = snappier

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
      if (Math.abs(e.deltaY) <= Math.abs(e.deltaX)) return; // real horizontal intent
      e.preventDefault();
      const max = track.scrollWidth - track.clientWidth;
      // re-sync target if the user interrupted with a jump or drag
      if (!animating.current) targetX.current = track.scrollLeft;
      targetX.current = Math.max(0, Math.min(max, targetX.current + e.deltaY * SPEED));
      kick();
    };

    // Drag-to-scroll
    let dragStartX = 0;
    let dragStartScroll = 0;
    let dragging = false;
    let dragDelta = 0;

    const onPointerDown = (e: PointerEvent) => {
      if ((e.target as HTMLElement).closest("a, button")) return;
      dragging = true;
      dragDelta = 0;
      dragStartX = e.clientX;
      dragStartScroll = track.scrollLeft;
      track.setPointerCapture(e.pointerId);
      track.style.cursor = "grabbing";
    };
    const onPointerMove = (e: PointerEvent) => {
      if (!dragging) return;
      dragDelta = dragStartX - e.clientX;
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

  // Track scroll → progress + active section + scroll-linked mockup scale.
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    if (window.innerWidth <= 680) return;
    const mockups = Array.from(track.querySelectorAll<HTMLElement>(".cs-mockup"));

    // Konpo-style reveal: each image grows from a smaller card to full size as
    // its panel slides into the centre of the viewport.
    const updateMockups = () => {
      const tr = track.getBoundingClientRect();
      const trackCenter = tr.left + tr.width / 2;
      for (const el of mockups) {
        const r = el.getBoundingClientRect();
        const c = r.left + r.width / 2;
        const dist = Math.min(1, Math.abs(c - trackCenter) / (tr.width * 0.9));
        const p = 1 - dist; // 1 at centre, 0 far away
        const scale = 0.86 + 0.14 * p;
        const op = 0.35 + 0.65 * p;
        el.style.setProperty("--mk-scale", scale.toFixed(3));
        el.style.setProperty("--mk-op", op.toFixed(3));
      }
    };

    const onScroll = () => {
      const max = track.scrollWidth - track.clientWidth;
      const ratio = max > 0 ? track.scrollLeft / max : 0;
      setProgress(ratio);
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

  // Reveal text blocks on horizontal entry.
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

  // Keyboard arrows move between panels.
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") jumpTo(Math.min(active + 1, panels.length - 1));
      else if (e.key === "ArrowLeft") jumpTo(Math.max(active - 1, 0));
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [active, panels]);

  const jumpTo = (i: number) => {
    const track = trackRef.current;
    const p = panels[i];
    if (!track || !p) return;
    const max = track.scrollWidth - track.clientWidth;
    targetX.current = Math.max(0, Math.min(max, p.el.offsetLeft));
    kickRef.current?.();
  };

  // Timeline: only show panels with meaningful labels, skip End/footer.
  const tlPanels = panels.filter((p) => p.inTimeline && p.label !== "End");

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
          <div className="cs-tl-fill" style={{ width: `${progress * 100}%` }} />
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
