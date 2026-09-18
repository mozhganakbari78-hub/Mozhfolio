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
    const EASE = 0.22;

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

    // Everything the scroll handler needs is measured here and nowhere else.
    // Reading a rect inside the scroll handler forces a synchronous layout on
    // a frame that has already written scrollLeft, which is what made the
    // track feel heavy: the browser had to re-lay-out the whole article
    // before it could answer, sixty times a second.
    let anchors: number[] = [];
    let mockCenters: number[] = [];
    let dotX: number[] = [];
    let lineW = 1;
    let viewHalf = 0;
    // Last value written per mockup: setting a custom property invalidates
    // style for that subtree, and most mockups sit pinned at their resting
    // values for the whole scroll.
    const lastP = new Array(mockups.length).fill(-1);

    const measure = () => {
      anchors = stages.map((s) => panels[s.firstIdx].el.offsetLeft);
      viewHalf = track.clientWidth / 2;

      const tr = track.getBoundingClientRect();
      const sl = track.scrollLeft;
      mockCenters = mockups.map((el) => {
        const r = el.getBoundingClientRect();
        return r.left - tr.left + sl + r.width / 2;
      });

      const line = lineRef.current;
      if (line) {
        const lr = line.getBoundingClientRect();
        lineW = lr.width || 1;
        dotX = dotRefs.current.map((d) => {
          if (!d) return 0;
          const rd = d.getBoundingClientRect();
          return rd.left + rd.width / 2 - lr.left;
        });
      } else {
        lineW = 1;
        dotX = [];
      }
    };
    measure();

    let lastStage = -1;
    let queued = false;

    // Continuous timeline sync: find the current stage from the viewport
    // centre, then interpolate the fill between that stage's dot and the next
    // one. Pure arithmetic over the cached measurements, so the frame is a
    // write-only frame.
    const sync = () => {
      queued = false;
      const center = track.scrollLeft + viewHalf;

      if (stages.length) {
        let k = 0;
        for (let i = 0; i < anchors.length; i++) if (anchors[i] <= center) k = i;

        let frac = 1;
        if (k < anchors.length - 1) {
          frac = (center - anchors[k]) / (anchors[k + 1] - anchors[k]);
          frac = Math.max(0, Math.min(1, frac));
        }

        // Only touch React state when the stage actually changes; this used to
        // re-render the timeline on every scroll event.
        if (k !== lastStage) {
          lastStage = k;
          setActiveStage(k);
        }

        const fill = fillRef.current;
        const xa = dotX[k] ?? 0;
        const xb = dotX[k + 1] ?? xa;
        if (fill) {
          const x = Math.max(0, xa + (xb - xa) * frac);
          fill.style.transform = `scaleX(${(x / lineW).toFixed(4)})`;
        }
      }

      const reach = viewHalf * 1.8;
      for (let i = 0; i < mockups.length; i++) {
        const p = 1 - Math.min(1, Math.abs(mockCenters[i] - center) / reach);
        if (Math.abs(p - lastP[i]) < 0.004) continue;
        lastP[i] = p;
        // A wide scale range means the compositor is stretching a rasterised
        // layer for most of the scroll, which softens the screenshot text.
        // Keep the lift small and let opacity carry the reveal.
        mockups[i].style.setProperty("--mk-scale", (0.96 + 0.04 * p).toFixed(3));
        mockups[i].style.setProperty("--mk-op", (0.35 + 0.65 * p).toFixed(3));
      }
    };

    // Coalesce bursts of scroll events into one read/write per frame.
    const onScroll = () => {
      if (queued) return;
      queued = true;
      requestAnimationFrame(sync);
    };
    const onResize = () => {
      measure();
      onScroll();
    };
    sync();
    // Label widths move the dots once the mono webfont lands, so take the
    // measurements again rather than caching the fallback-font positions.
    document.fonts?.ready.then(onResize).catch(() => {});
    track.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onResize);
    return () => {
      track.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
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
