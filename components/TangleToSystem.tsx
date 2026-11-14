"use client";

import { useInView } from "@/lib/useInView";
import { useOnScreen } from "@/lib/useOnScreen";

/**
 * "How I work" in one picture: a tangle of loose strands on the left all
 * converge on one vertical line, and leave it as five straight rails with
 * nodes, one per way of working listed below. The strands draw in, then the
 * rails, then the nodes light up in turn. Decorative. Styles: .tts-* in
 * globals.css.
 */

const W = 560;
const H = 380;
const SPINE = 300; // where the tangle becomes a structure
const RAILS = [58, 124, 190, 256, 322];
const COL1 = 400;
const COL2 = 500;

// small seeded generator, so the tangle is the same on every render
function rng(seed: number) {
  let s = seed;
  return () => {
    s = (s * 16807) % 2147483647;
    return (s - 1) / 2147483646;
  };
}

const STRANDS: string[] = (() => {
  const r = rng(7);
  const out: string[] = [];
  for (let i = 0; i < 26; i++) {
    const end = RAILS[i % RAILS.length];
    let x = 10 + r() * 140;
    let y = 20 + r() * (H - 40);
    let d = `M${x.toFixed(1)},${y.toFixed(1)}`;
    const loops = 2 + Math.floor(r() * 2);
    for (let k = 0; k < loops; k++) {
      const nx = 20 + r() * 240;
      const ny = 15 + r() * (H - 30);
      d += ` C${(x + (r() - 0.5) * 260).toFixed(1)},${(y + (r() - 0.5) * 240).toFixed(1)} ${(nx + (r() - 0.5) * 260).toFixed(1)},${(ny + (r() - 0.5) * 240).toFixed(1)} ${nx.toFixed(1)},${ny.toFixed(1)}`;
      x = nx;
      y = ny;
    }
    // last leg straightens out into the spine, arriving level with its rail
    d += ` C${(x + 60).toFixed(1)},${y.toFixed(1)} ${SPINE - 70},${end} ${SPINE},${end}`;
    out.push(d);
  }
  return out;
})();

export default function TangleToSystem() {
  const { ref, inView } = useInView();
  const onScreen = useOnScreen(ref);
  return (
    <div ref={ref} className={`tts${inView ? " is-on" : ""}${onScreen ? "" : " is-offscreen"}`} aria-hidden="true">
      <svg viewBox={`0 0 ${W} ${H}`}>
        <defs>
          <linearGradient id="tts-fade" x1="0" x2="1" y1="0" y2="0">
            <stop offset="0%" stopColor="#fff" stopOpacity="0" />
            <stop offset="35%" stopColor="#fff" stopOpacity="1" />
          </linearGradient>
          <mask id="tts-mask">
            <rect width={W} height={H} fill="url(#tts-fade)" />
          </mask>
        </defs>

        {/* the tangle */}
        <g mask="url(#tts-mask)">
          {STRANDS.map((d, i) => (
            <path key={i} d={d} pathLength={1} className="tts-strand" style={{ ["--i" as string]: i }} />
          ))}
        </g>

        {/* the spine */}
        <line x1={SPINE} x2={SPINE} y1={0} y2={H} pathLength={1} className="tts-spine" />

        {/* rails: every rail reaches the first column; the lower three go on */}
        {RAILS.map((y, i) => (
          <g key={y} style={{ ["--i" as string]: i }}>
            <line x1={SPINE} x2={i >= 2 ? COL2 : COL1} y1={y} y2={y} pathLength={1} className="tts-rail" />
            <circle cx={SPINE} cy={y} r={4} className="tts-join" />
          </g>
        ))}
        <line x1={COL1} x2={COL1} y1={RAILS[0]} y2={RAILS[4]} pathLength={1} className="tts-rail is-col" />
        <line x1={COL2} x2={COL2} y1={RAILS[2]} y2={RAILS[4]} pathLength={1} className="tts-rail is-col" />

        {/* nodes light up in turn */}
        {RAILS.map((y, i) => (
          <circle key={`a${y}`} cx={COL1} cy={y} r={5} className="tts-node" style={{ ["--i" as string]: i }} />
        ))}
        {RAILS.slice(2).map((y, i) => (
          <circle key={`b${y}`} cx={COL2} cy={y} r={5} className="tts-node" style={{ ["--i" as string]: i + 5 }} />
        ))}
      </svg>
    </div>
  );
}
