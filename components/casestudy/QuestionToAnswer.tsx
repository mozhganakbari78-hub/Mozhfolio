"use client";

import { useRef } from "react";
import { motion, useInView, useReducedMotion, type TargetAndTransition, type Transition } from "framer-motion";

/**
 * "Answer first, ask later" in three steps: a user stuck with a tangle of
 * questions, the FAQ answers filtering down to the one that matches, and the
 * same user with their answer and no ticket filed. Line art on the shared
 * dark scene panel (.gh-scene). Draws in once on scroll, left to right; under
 * reduced motion the finished picture is shown and nothing moves.
 */

const EASE = [0.16, 1, 0.3, 1] as const;

/**
 * The tangle: one long looping line, like a ball of yarn. A sum of circles
 * turning at unrelated speeds never closes, so the loops cross and pile up.
 */
const TANGLE = (() => {
  const cx = 170, cy = 104, R = 70;
  const pts: string[] = [];
  const N = 520;
  for (let i = 0; i <= N; i++) {
    const t = (i / N) * Math.PI * 16;
    const x = cx + R * (0.62 * Math.cos(t) + 0.38 * Math.cos(2.71 * t + 0.6));
    const y = cy + R * 0.72 * (0.6 * Math.sin(1.13 * t) + 0.4 * Math.sin(3.37 * t + 1.1));
    pts.push(`${x.toFixed(1)},${y.toFixed(1)}`);
  }
  return `M${pts[0]} L${pts.slice(1).join(" ")}`;
})();

/** five-point star around (cx, cy) */
function star(cx: number, cy: number, ro: number, ri: number) {
  const p: string[] = [];
  for (let i = 0; i < 10; i++) {
    const a = -Math.PI / 2 + (i * Math.PI) / 5;
    const rad = i % 2 ? ri : ro;
    p.push(`${(cx + rad * Math.cos(a)).toFixed(1)},${(cy + rad * Math.sin(a)).toFixed(1)}`);
  }
  return p.join(" ");
}

const RAYS = Array.from({ length: 8 }, (_, i) => {
  const a = (i * Math.PI) / 4 - Math.PI / 2;
  const [c, s] = [Math.cos(a), Math.sin(a)];
  return `M${(800 + 38 * c).toFixed(1)} ${(118 + 38 * s).toFixed(1)} L${(800 + 50 * c).toFixed(1)} ${(118 + 50 * s).toFixed(1)}`;
});

const ROWS = [150, 180, 210];
const MATCH = 1;

export default function QuestionToAnswer() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.35 });
  const still = useReducedMotion() ?? false;
  const on = inView || still;

  const step = (
    from: TargetAndTransition,
    to: TargetAndTransition,
    at: number,
    dur = 0.5,
  ): { initial: false | TargetAndTransition; animate: TargetAndTransition; transition: Transition } => ({
    initial: still ? false : from,
    animate: on ? to : from,
    transition: still ? { duration: 0 } : { delay: at, duration: dur, ease: EASE },
  });
  const draw = (at: number, dur = 0.7) => step({ pathLength: 0, opacity: 0 }, { pathLength: 1, opacity: 1 }, at, dur);
  const pop = (at: number) => step({ opacity: 0, scale: 0.5 }, { opacity: 1, scale: 1 }, at, 0.45);
  const origin = { transformBox: "fill-box" as const, transformOrigin: "center" };

  /** a person drawn from the shoulders up, holding a phone */
  const person = (cx: number, at: number) => (
    <g key={cx}>
      <motion.path
        className="qa-body"
        d={`M${cx - 52} 340 C${cx - 50} 292 ${cx - 28} 268 ${cx} 266 C${cx + 28} 268 ${cx + 50} 292 ${cx + 52} 340`}
        {...draw(at, 0.6)}
      />
      <motion.circle className="qa-body" cx={cx} cy={232} r={24} {...draw(at + 0.1, 0.6)} />
      <motion.g {...step({ opacity: 0, y: 6 }, { opacity: 1, y: 0 }, at + 0.4, 0.4)}>
        <rect className="qa-phone" x={cx - 12} y={290} width={24} height={38} rx={4} />
        <rect className="qa-screen" x={cx - 8} y={295} width={16} height={26} rx={2} />
      </motion.g>
    </g>
  );

  return (
    <figure ref={ref} className="gh-scene qa-scene">
      <svg
        viewBox="0 0 960 340"
        role="img"
        aria-label="Three steps: a user stuck with a tangle of questions; FAQ answers filtering down to the one that matches; the same user with their answer and no ticket filed."
      >
        {/* 1 · stuck */}
        <motion.path className="qa-tangle" d={TANGLE} {...draw(0, 1.8)} />
        {person(176, 0.3)}
        <motion.g style={origin} {...pop(1.1)}>
          <path className="qa-warn" d="M88 214 L108 248 L68 248 Z" />
          <path className="qa-warn-mark" d="M88 226 L88 236 M88 241.5 L88 242" />
        </motion.g>

        <motion.path className="qa-arrow" d="M296 190 L350 190 M342 183 L350 190 L342 197" {...draw(1.6, 0.45)} />

        {/* 2 · answer first: the FAQ stack, and the one answer that matches */}
        {[
          [412, 64],
          [404, 76],
          [396, 88],
        ].map(([x, y], i) => (
          <motion.rect
            key={x}
            className="qa-sheet"
            x={x}
            y={y}
            width={190}
            height={150}
            rx={10}
            {...step({ opacity: 0, y: -16 }, { opacity: 1, y: 0 }, 1.9 + i * 0.12, 0.45)}
          />
        ))}
        <motion.g {...step({ opacity: 0, y: -16 }, { opacity: 1, y: 0 }, 2.26, 0.5)}>
          <rect className="qa-card" x={388} y={100} width={190} height={150} rx={10} />
          <rect className="qa-search" x={404} y={114} width={158} height={20} rx={10} />
          <circle className="qa-faint" cx={418} cy={124} r={4.5} />
          <path className="qa-faint" d="M421.5 127.5 L425 131" />
          <rect className="qa-typed" x={432} y={121.5} width={60} height={5} rx={2.5} />
        </motion.g>
        <motion.rect
          className="qa-match"
          x={398}
          y={ROWS[MATCH] - 11}
          width={170}
          height={22}
          rx={6}
          {...step({ opacity: 0, scaleX: 0.6 }, { opacity: 1, scaleX: 1 }, 3.0, 0.45)}
          style={{ transformBox: "fill-box", transformOrigin: "left center" }}
        />
        {ROWS.map((y, i) => (
          <motion.g key={y} {...step({ opacity: 0, x: -6 }, { opacity: i === MATCH ? 1 : 0.55, x: 0 }, 2.6 + i * 0.1, 0.4)}>
            <circle className={i === MATCH ? "qa-dot is-match" : "qa-dot"} cx={412} cy={y} r={4} />
            <rect className={i === MATCH ? "qa-row is-match" : "qa-row"} x={424} y={y - 3} width={i === 2 ? 84 : 116} height={6} rx={3} />
          </motion.g>
        ))}

        <motion.path className="qa-arrow" d="M616 190 L670 190 M662 183 L670 190 L662 197" {...draw(3.3, 0.45)} />

        {/* 3 · answered: same user, no ticket */}
        {person(800, 3.6)}
        <motion.polygon className="qa-star" points={star(800, 118, 24, 10)} style={origin} {...step({ opacity: 0, scale: 0.3, rotate: -30 }, { opacity: 1, scale: 1, rotate: 0 }, 4.2, 0.6)} />
        {RAYS.map((d, i) => (
          <motion.path key={d} className="qa-ray" d={d} {...draw(4.5 + i * 0.03, 0.3)} />
        ))}
      </svg>

      <figcaption className="qa-steps">
        <span>
          <b>Stuck</b>A question, and no idea where to look
        </span>
        <span>
          <b>Answer first</b>The FAQ filters as they type
        </span>
        <span>
          <b>Done</b>Answered, no ticket filed
        </span>
      </figcaption>
    </figure>
  );
}
