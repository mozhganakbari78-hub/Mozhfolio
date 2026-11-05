"use client";

import { useEffect, useRef, useState, useSyncExternalStore } from "react";

/**
 * "Hard problems. Obvious screens." as an exploded isometric stack: a plate
 * with glowing corner handles and dashed guides running off the frame.
 * "Obvious screens." lies flat and square on the plate; "Hard problems."
 * floats above it, a little crooked, over a dashed outline of where it lands.
 * Clicking the scene drops it into place; clicking again lifts it back up. The scene leans
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
  const [landed, setLanded] = useState(false);
  // set after the first click, so the lift animation never plays on load
  const [touched, setTouched] = useState(false);

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
    <div className="iso">
      <div ref={world} className={`iso-world${landed ? " is-landed" : ""}${touched ? " was-landed" : ""}`} aria-hidden="true">
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
          <div className="iso-tile iso-obvious"><span className="iso-tag"><b>02</b>Screen</span>Obvious screens.</div>
        </div>

        {/* the problem: up in the air and crooked; its outline waits on the plate */}
        {/* entrance on the tile, not the wrap: the wrap's opacity is the landed toggle */}
        <div className="iso-layer iso-ghost-wrap">
          <div className="iso-tile iso-hard iso-ghost iso-in-plate">Hard problems.</div>
        </div>
        {/* the floating tile's shadow, cast on the plate and the other tile */}
        {/* three levels: the wrap hides it when landed, the middle one fades it in on
            load with the tile's drop, the tile itself carries the float/land/lift motion */}
        <div className="iso-layer iso-shadow-wrap">
          <div className="iso-layer iso-shadow-enter">
            <div className={`iso-tile iso-hard iso-shadow${motion ? " is-on" : ""}`}>Hard problems.</div>
          </div>
        </div>
        {/* ripple on impact, same footprint as the tile */}
        <div className="iso-layer iso-ripple-wrap">
          <div className="iso-tile iso-hard iso-ripple">Hard problems.</div>
        </div>
        <div className="iso-hard-wrap">
          <div className={`iso-float${motion ? " is-on" : ""}`}>
            <div className="iso-layer iso-in-hard">
              <div className="iso-tile iso-hard"><span className="iso-tag"><b>01</b>Problem</span>Hard problems.</div>
            </div>
          </div>
        </div>
      </div>

      <button
        type="button"
        data-hand
        className="iso-hit"
        aria-pressed={landed}
        aria-label={landed ? "Lift the hard problem back up" : "Drop the hard problem into place"}
        onClick={() => {
          setTouched(true);
          setLanded((v) => !v);
        }}
      />
      <span className="iso-hint" aria-hidden="true">
        {/* "Click" with a mouse, "Tap" on touch screens; CSS picks one */}
        <span className="iso-hint-fine">Click</span>
        <span className="iso-hint-touch">Tap</span>
        {landed ? " to lift it" : " to place it"}
      </span>
    </div>
  );
}
