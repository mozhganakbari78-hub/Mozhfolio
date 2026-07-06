"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";
import { ArrowLeftIcon } from "@heroicons/react/24/outline";

type Panel = { el: HTMLElement; label: string; inTimeline: boolean; stage: string };
type Stage = { label: string; firstIdx: number; stageKey: string };

export default function EditorialHorizontal({ children }: { children: React.ReactNode }) {
  const rootRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);
  const fillRef = useRef<HTMLDivElement>(null);
  const dotRefs = useRef<(HTMLSpanElement | null)[]>([]);
  const [panels, setPanels] = useState<Panel[]>([]);
  const [activeStage, setActiveStage] = useState(0);

  // One dot per stage number: sections sharing a leading number ("03 / …")
  // collapse into a single timeline stop.
  const stages = useMemo<Stage[]>(() => {
    const out: Stage[] = [];
    panels.forEach((p, idx) => {
      if (!p.inTimeline || p.label === "End") return;
      const last = out[out.length - 1];
      if (last && last.stageKey === p.stage) return;
      out.push({ label: p.label, firstIdx: idx, stageKey: p.stage });
    });
    return out;
  }, [panels]);

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
      let stage = `${i + 1}`;
      if (el.classList.contains("cs-hero")) { label = "Overview"; stage = "hero"; }
      else if (el.classList.contains("cs-next")) { label = "Next"; stage = "next"; }
      else if (el.classList.contains("cs-foot")) { label = "End"; stage = "foot"; }
      else {
        const num = el.querySelector(".cs-num")?.textContent ?? "";
        const before = num.split("/")[0]?.trim();
        const after = num.split("/")[1]?.trim();
        if (after) {
          const short = after.length > 18 ? after.slice(0, 16).trimEnd() + "..." : after;
          label = short;
          // group timeline dots by the leading stage number (e.g. "03")
          stage = before || after;
        } else {
          inTimeline = false;
        }
      }
      return { el, label, inTimeline, stage };
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

    // Continuous timeline sync: find the current stage from the viewport
    // center, then interpolate the fill to the exact measured position
    // between that stage's dot and the next one. Fill and dots can never
    // drift apart because the fill is derived from the dots themselves.
    const onScroll = () => {
      if (stages.length) {
        const anchors = stages.map((s) => panels[s.firstIdx].el.offsetLeft);
        const center = track.scrollLeft + track.clientWidth / 2;

        let k = 0;
        anchors.forEach((a, i) => {
          if (a <= center) k = i;
        });
        let frac = 0;
        if (k < anchors.length - 1) {
          frac = (center - anchors[k]) / (anchors[k + 1] - anchors[k]);
          frac = Math.max(0, Math.min(1, frac));
        } else {
          frac = 1;
        }

        setActiveStage(k);

        const line = lineRef.current;
        const fill = fillRef.current;
        const dA = dotRefs.current[k];
        const dB = dotRefs.current[k + 1] ?? dA;
        if (line && fill && dA && dB) {
          const lr = line.getBoundingClientRect();
          const ra = dA.getBoundingClientRect();
          const rb = dB.getBoundingClientRect();
          const xa = ra.left + ra.width / 2 - lr.left;
          const xb = rb.left + rb.width / 2 - lr.left;
          fill.style.width = `${Math.max(0, xa + (xb - xa) * frac)}px`;
        }
      }
      updateMockups();
    };
    onScroll();
    track.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      track.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [panels, stages]);

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

  const jumpToStage = (i: number) => {
    const track = trackRef.current;
    const s = stages[i];
    if (!track || !s) return;
    const max = track.scrollWidth - track.clientWidth;
    targetX.current = Math.max(0, Math.min(max, panels[s.firstIdx].el.offsetLeft));
    kickRef.current?.();
  };

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") jumpToStage(Math.min(activeStage + 1, stages.length - 1));
      else if (e.key === "ArrowLeft") jumpToStage(Math.max(activeStage - 1, 0));
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeStage, stages]);

  return (
    <div className="cs-root cs-horizontal" ref={rootRef}>
      <div className="cs-bar">
        <div className="cs-bar-inner">
          <Link href="/#projects" className="cs-back">
            <ArrowLeftIcon style={{ width: 14, height: 14 }} />
            All work
          </Link>
          <Link href="/" className="cs-sig">Mozhgan Akbari</Link>
        </div>
      </div>

      <div className="cs-htrack" ref={trackRef}>
        {children}
      </div>

      <div className="cs-timeline">
        <div className="cs-tl-line" ref={lineRef}>
          <div className="cs-tl-fill" ref={fillRef} />
        </div>
        <div className="cs-tl-labels">
          {stages.map((s, i) => (
            <button
              key={s.firstIdx}
              className={`cs-tl-item${i === activeStage ? " active" : ""}`}
              onClick={() => jumpToStage(i)}
            >
              <span
                className="dot"
                ref={(el) => {
                  dotRefs.current[i] = el;
                }}
              />
              <span className="txt">{s.label}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
