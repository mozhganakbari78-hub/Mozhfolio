"use client";

import { useEffect, useRef, useState, useSyncExternalStore } from "react";

/**
 * "Hard problems. Obvious screens." as an isometric stack. The idea: the
 * complexity stays where it is; a simple screen sits on top and hides it.
 *
 * Bottom layer (01 Problem): the plate itself, covered in tangled lines,
 * nodes, scribbles and faint stray code, with "Hard problems." in the dim
 * colour. Top layer (02 Screen): a clean panel the same size, with only
 * "Obvious screens.", floating above. Clicking (or Enter / Space) drops it
 * onto the plate, which it covers exactly; clicking again lifts it.
 * Under reduced motion the screen starts in place and nothing animates.
 *
 * Decorative: the hero carries the same words as real text in a visually
 * hidden line. Styles: .iso-* in globals.css.
 */

const REDUCE = "(prefers-reduced-motion: reduce)";
const allowsMotion = () => !window.matchMedia(REDUCE).matches;
const subscribeMotion = (cb: () => void) => {
  const mq = window.matchMedia(REDUCE);
  mq.addEventListener("change", cb);
  return () => mq.removeEventListener("change", cb);
};

// generic noise underneath, nothing from a real project: stray code, hex,
// half-finished notes. Kept around (never over) the "Hard problems." line.
const CODE: [string, number, number][] = [
  ["fn(x) => x * 2", 30.5, 1.3],
  ["0x3F9A // ?", 39, 3.1],
  ["if (a && !b) retry()", 2.5, 9.2],
  ["TODO: fix later", 14, 11.6],
  ["null ?? undefined", 26, 9.9],
  ["v2.0.1-beta", 3, 14.6],
  ["while (true) { ... }", 19.5, 15.3],
  ["#ff00aa", 38, 15.6],
];

// scribbles: loose hand-drawn squiggles, as if someone thought out loud here
const SCRIBBLES = [
  "M30,6.2 c1,-1.2 2,1.2 3,0 s2,1.2 3,0 s2,1.2 3,0 s2,1.4 3.2,0",
  "M4,12.6 q2,-2 4,0 t4,0 t4,0",
  "M33,12.4 c-2,1.5 1,3 3,1.5 s1,-3 -1.5,-2.2 s-1,3.2 2,3",
  "M9.5,16.2 l1.4,-1 l1.2,1 l1.4,-1 l1.2,1 l1.4,-1",
];

// nodes (plate coordinates, em) and the tangle of links between them, kept
// to the right of and below the text
const NODES: [number, number][] = [
  [34, 5.6], [40.5, 4.2], [43.5, 9], [36.5, 11.8], [29.5, 7.6], [8, 12.6],
  [18.5, 13.2], [27.5, 12.6], [41, 13.6], [6.5, 15.9], [14.5, 16.3], [31, 16], [43, 16.1],
];
const LINKS: [number, number, number][] = [
  // from, to, bend
  [0, 3, 2.5], [1, 4, -3], [2, 7, 3], [4, 8, -2.5], [0, 6, 3.5], [3, 5, -3],
  [1, 11, 4], [7, 9, -2], [5, 10, 1.5], [6, 12, -3], [8, 10, 3], [2, 11, -2.5], [4, 12, 4],
];
const curve = ([a, b, k]: [number, number, number]) => {
  const [x1, y1] = NODES[a], [x2, y2] = NODES[b];
  const mx = (x1 + x2) / 2, my = (y1 + y2) / 2;
  const len = Math.hypot(x2 - x1, y2 - y1) || 1;
  const cx = mx - ((y2 - y1) / len) * k, cy = my + ((x2 - x1) / len) * k;
  return `M${x1},${y1} Q${cx.toFixed(2)},${cy.toFixed(2)} ${x2},${y2}`;
};

export default function HeroIso() {
  const motion = useSyncExternalStore(subscribeMotion, allowsMotion, () => true);
  const world = useRef<HTMLDivElement>(null);
  // null until the first click: then the reader's choice wins; before it,
  // reduced motion means the screen is already in place
  const [choice, setChoice] = useState<boolean | null>(null);
  const placed = choice ?? !motion;
  // focus ring only when the focus came from the keyboard; some browsers
  // treat a click on this button as :focus-visible and draw it anyway
  const [kbd, setKbd] = useState(false);

  useEffect(() => {
    if (!motion) return;
    const onMove = (e: PointerEvent) => {
      const w = world.current;
      if (!w) return;
      const px = e.clientX / window.innerWidth - 0.5;
      const py = e.clientY / window.innerHeight - 0.5;
      w.style.setProperty("--rz", `${(px * 11).toFixed(2)}deg`);
      w.style.setProperty("--rx", `${(py * -8).toFixed(2)}deg`);
    };
    window.addEventListener("pointermove", onMove, { passive: true });
    return () => window.removeEventListener("pointermove", onMove);
  }, [motion]);

  const cls = `iso-world${placed ? " is-landed" : ""}${choice !== null ? " was-landed" : ""}`;

  return (
    <div className="iso">
      <div ref={world} className={cls} aria-hidden="true">
        {/* guides along every edge of the plate, fading off the frame */}
        <div className="iso-guide x" style={{ top: 0 }} />
        <div className="iso-guide x" style={{ top: "17em" }} />
        <div className="iso-guide y" style={{ left: 0 }} />
        <div className="iso-guide y" style={{ left: "46em" }} />

        {/* 01 Problem: the plate, full of tangle */}
        <div className="iso-plate iso-in-plate">
          <svg className="iso-tangle" viewBox="0 0 46 17" preserveAspectRatio="none">
            {LINKS.map((l, i) => (
              <path key={i} d={curve(l)} />
            ))}
            {SCRIBBLES.map((d, i) => (
              <path key={`s${i}`} d={d} className="iso-scribble" />
            ))}
            {NODES.map(([x, y], i) => (
              <circle key={i} cx={x} cy={y} r={0.28} />
            ))}
          </svg>
          {CODE.map(([t, x, y]) => (
            <span key={t} className="iso-code" style={{ left: `${x}em`, top: `${y}em` }}>
              {t}
            </span>
          ))}
          <div className="iso-problem">
            <span className="iso-tag"><b>01</b>Problem</span>
            Hard problems.
          </div>
        </div>
        {[[0, 0], [46, 0], [0, 17], [46, 17]].map(([x, y]) => (
          <div key={`${x}-${y}`} className="iso-handle iso-in-plate" style={{ left: `${x}em`, top: `${y}em` }} />
        ))}

        {/* the floating screen's shadow on the plate. Three levels: the wrap hides
            it once placed, the middle one fades it in with the screen's drop on
            load, the inner one carries the float / land / lift motion */}
        <div className="iso-layer iso-shadow-wrap">
          <div className="iso-layer iso-shadow-enter">
            <div className={`iso-shadow${motion ? " is-on" : ""}`} />
          </div>
        </div>

        {/* a ripple runs out from the screen's edge when it hits */}
        <div className="iso-layer iso-ripple-wrap">
          <div className="iso-ripple" />
        </div>

        {/* 02 Screen: clean, floating, until it is placed */}
        <div className="iso-screen-wrap">
          <div className={`iso-float${motion ? " is-on" : ""}`}>
            <div className="iso-layer iso-in-hard">
              <div className="iso-screen">
                <span className="iso-tag"><b>02</b>Screen</span>
                Obvious screens.
              </div>
            </div>
          </div>
        </div>
      </div>

      <button
        type="button"
        data-hand
        className={`iso-hit${kbd ? " is-kbd" : ""}`}
        onKeyUp={(e) => {
          if (e.key === "Tab" || e.key === "Enter" || e.key === " ") setKbd(true);
        }}
        onPointerDown={() => setKbd(false)}
        onBlur={() => setKbd(false)}
        aria-pressed={placed}
        aria-label={placed ? "Lift the screen off the complexity" : "Place the screen over the complexity"}
        onClick={() => setChoice(!placed)}
      />
      <span className="iso-hint" aria-hidden="true">
        {placed ? (
          "Placed"
        ) : (
          <>
            {/* "Click" with a mouse, "Tap" on touch screens; CSS picks one */}
            <span className="iso-hint-fine">Click</span>
            <span className="iso-hint-touch">Tap</span> to hide the complexity
          </>
        )}
      </span>
    </div>
  );
}
