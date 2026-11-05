"use client";

import { useEffect, useRef, useSyncExternalStore } from "react";

/**
 * "Hard problems. Obvious screens." as an exploded isometric stack: a plate
 * with glowing corner handles and dashed guides running off the frame.
 * "Obvious screens." lies flat and square on the plate; "Hard problems."
 * floats above it, a little crooked, over a dashed outline of where it lands. The scene leans
 * a few degrees toward the pointer. Decorative: the hero says the same
 * thing in a visually hidden line. Styles: .iso-* in globals.css.
 */

const REDUCE = "(prefers-reduced-motion: reduce)";
const allowsMotion = () => !window.matchMedia(REDUCE).matches;
const subscribeMotion = (cb: () => void) => {
  const mq = window.matchMedia(REDUCE);
  mq.addEventListener("change", cb);
  return () => mq.removeEventListener("change", cb);
};

export default function HeroIso() {
  const motion = useSyncExternalStore(subscribeMotion, allowsMotion, () => false);
  const world = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!motion) return;
    const onMove = (e: PointerEvent) => {
      const w = world.current;
      if (!w) return;
      const px = e.clientX / window.innerWidth - 0.5;
      const py = e.clientY / window.innerHeight - 0.5;
      w.style.setProperty("--rz", `${(px * 6).toFixed(2)}deg`);
      w.style.setProperty("--rx", `${(py * -5).toFixed(2)}deg`);
    };
    window.addEventListener("pointermove", onMove, { passive: true });
    return () => window.removeEventListener("pointermove", onMove);
  }, [motion]);

  return (
    <div className="iso" aria-hidden="true">
      <div ref={world} className="iso-world">
        {/* guides along every edge of the plate, fading off the frame */}
        <div className="iso-guide x" style={{ top: 0 }} />
        <div className="iso-guide x" style={{ top: "17em" }} />
        <div className="iso-guide y" style={{ left: 0 }} />
        <div className="iso-guide y" style={{ left: "46em" }} />

        <div className="iso-plate iso-in-plate" />
        {[[0, 0], [46, 0], [0, 17], [46, 17]].map(([x, y]) => (
          <div key={`${x}-${y}`} className="iso-handle iso-in-plate" style={{ left: `${x}em`, top: `${y}em` }} />
        ))}

        {/* the answer: flat, square, on the plate */}
        <div className="iso-layer iso-in-obvious">
          <div className="iso-tile iso-obvious">Obvious screens.</div>
        </div>

        {/* the problem: up in the air and crooked; its outline waits on the plate */}
        <div className="iso-layer iso-ghost-wrap iso-in-plate">
          <div className="iso-tile iso-hard iso-ghost">Hard problems.</div>
        </div>
        <div className={`iso-hard-wrap${motion ? " is-on" : ""}`}>
          <div className="iso-layer iso-in-hard">
            <div className="iso-tile iso-hard">Hard problems.</div>
          </div>
        </div>
      </div>
    </div>
  );
}
