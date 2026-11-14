"use client";

import { useRef, useEffect } from "react";
import Reveal from "@/components/Reveal";

const base = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const images: { src: string }[] = [
  { src: `${base}/projects/Bitoment.webp` },
  { src: `${base}/projects/Page25.webp` },
  { src: `${base}/projects/Screen14.webp` },
  { src: `${base}/projects/Screen2.webp` },
  { src: `${base}/projects/Screen3.webp` },
  { src: `${base}/projects/Screen5.webp` },
  { src: `${base}/projects/Screen6.webp` },
  { src: `${base}/projects/Screen7.webp` },
  { src: `${base}/projects/Screen8.webp` },
  { src: `${base}/projects/Screen9.webp` },
  { src: `${base}/projects/Screen10.webp` },
  { src: `${base}/projects/Screen11.webp` },
  { src: `${base}/projects/Screen12.webp` },
];

// Duplicate for seamless loop
const track = [...images, ...images];

export default function VisualWork() {
  const railRef = useRef<HTMLDivElement>(null);
  const wrapRef = useRef<HTMLDivElement>(null);
  const posRef = useRef(0);
  const rafRef = useRef<number>(0);
  const pausedRef = useRef(false);
  const dragRef = useRef({ active: false, startX: 0, startPos: 0 });

  useEffect(() => {
    const rail = railRef.current;
    const wrap = wrapRef.current;
    if (!rail || !wrap) return;

    // Speed is set in time, not per frame, so it is the same on 60 Hz and
    // 120 Hz screens: one card passes about every 10 seconds, at any width.
    const SECONDS_PER_CARD = 10;
    const cardWidth = () => (rail.firstElementChild as HTMLElement | null)?.offsetWidth ?? 600;

    let onScreen = true;
    let last = 0;

    const tick = (now: number) => {
      // Cap the step so returning to the tab doesn't make the rail jump.
      const dt = last ? Math.min(now - last, 50) : 0;
      last = now;
      if (!pausedRef.current) {
        posRef.current += (cardWidth() / SECONDS_PER_CARD) * (dt / 1000);
        const half = rail.scrollWidth / 2;
        if (posRef.current >= half) posRef.current -= half;
        rail.style.transform = `translateX(-${posRef.current}px)`;
      }
      if (onScreen) rafRef.current = requestAnimationFrame(tick);
    };

    rafRef.current = requestAnimationFrame(tick);

    // Don't animate the marquee while it's off screen.
    const vis = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !onScreen) {
          onScreen = true;
          last = 0;
          rafRef.current = requestAnimationFrame(tick);
        } else if (!entry.isIntersecting) {
          onScreen = false;
          cancelAnimationFrame(rafRef.current);
        }
      },
      { threshold: 0 }
    );
    vis.observe(wrap);

    // No preventDefault on pointerdown: it would also suppress the mouse events
    // the custom cursor follows, so the cursor froze during a drag and jumped
    // on release. Text selection and native image drag are blocked instead.
    const onPointerDown = (e: PointerEvent) => {
      if (e.button !== 0) return;
      dragRef.current = { active: true, startX: e.clientX, startPos: posRef.current };
      pausedRef.current = true;
      wrap.style.cursor = "grabbing";
    };
    const onPointerMove = (e: PointerEvent) => {
      if (!dragRef.current.active) return;
      const delta = dragRef.current.startX - e.clientX;
      const half = rail.scrollWidth / 2;
      let next = dragRef.current.startPos + delta;
      next = ((next % half) + half) % half;
      posRef.current = next;
      rail.style.transform = `translateX(-${posRef.current}px)`;
    };
    const onPointerUp = () => {
      if (!dragRef.current.active) return;
      dragRef.current.active = false;
      pausedRef.current = false;
      wrap.style.cursor = "grab";
    };

    const noNativeDrag = (e: Event) => e.preventDefault();
    wrap.addEventListener("pointerdown", onPointerDown);
    wrap.addEventListener("dragstart", noNativeDrag);
    window.addEventListener("pointermove", onPointerMove);
    window.addEventListener("pointerup", onPointerUp);
    window.addEventListener("pointercancel", onPointerUp);

    return () => {
      cancelAnimationFrame(rafRef.current);
      vis.disconnect();
      wrap.removeEventListener("pointerdown", onPointerDown);
      wrap.removeEventListener("dragstart", noNativeDrag);
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("pointerup", onPointerUp);
      window.removeEventListener("pointercancel", onPointerUp);
    };
  }, []);

  return (
    <section id="visual" className="py-28 md:py-40" aria-labelledby="visual-heading">
      {/* Header */}
      <div className="px-6 max-w-6xl mx-auto mb-16 md:mb-20">
        <Reveal as="div"
          initial={{ opacity: 0, y: 24 }}
          to={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-6"
        >
          <div>
            <div className="mono-label mb-5" style={{ color: "var(--accent-ink)" }}>
              [ 02 ] Visual Work
            </div>
            <h2
              id="visual-heading"
              className="text-[28px] md:text-[42px] font-semibold tracking-tight max-w-2xl leading-[1.02]"
              style={{ color: "var(--text-primary)", letterSpacing: "-0.03em" }}
            >
              Selected screens.
            </h2>
          </div>
        </Reveal>
      </div>

      {/* Marquee */}
      {/* no fade: the marquee is always visible, whatever the scroll position */}
      <div
        ref={wrapRef}
        className="overflow-hidden select-none"
        style={{ cursor: "grab", touchAction: "pan-y" }}
      >
        <div
          ref={railRef}
          className="flex gap-5 will-change-transform"
          style={{ width: "max-content" }}
        >
          {track.map((img, i) => (
            <figure
              key={`${img.src}-${i}`}
              className="group relative flex-none overflow-hidden rounded-2xl border"
              style={{
                width: "clamp(360px, 42vw, 720px)",
                height: "clamp(240px, 28vw, 460px)",
                borderColor: "var(--border-strong)",
                background: "var(--bg-secondary)",
              }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={img.src}
                alt=""
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                loading="lazy"
                decoding="async"
                draggable={false}
                style={{ imageRendering: "-webkit-optimize-contrast", backfaceVisibility: "hidden", transform: "translateZ(0)" }}
              />
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
