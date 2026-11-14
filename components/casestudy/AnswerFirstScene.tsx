"use client";

import { useRef } from "react";
import { motion, useInView, useReducedMotion, type TargetAndTransition, type Transition } from "framer-motion";

/**
 * "Answer first, ask later", as a scene: a user with a phone, and the
 * questions they would have filed as tickets rising out of it. Each one meets
 * its answer (the "?" turns into a check) before a ticket is ever sent.
 * Line art on the same dark panel as the other case scenes (.gh-scene).
 * Draws in once on scroll; the cards then drift and the links keep flowing.
 * With reduced motion, the finished state is shown and nothing moves.
 */

const EASE = [0.16, 1, 0.3, 1] as const;

const W = 190;
const H = 74;
const CARDS = [
  { x: 60, y: 112, link: "M360 340 C 300 332 168 292 155 186" },
  { x: 265, y: 26, link: "M360 216 L 360 100" },
  { x: 470, y: 112, link: "M360 340 C 420 332 552 292 565 186" },
];

export default function AnswerFirstScene() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.35 });
  const still = useReducedMotion() ?? false;
  const on = inView || still;

  /** one step of the sequence: from → to, starting at `at` seconds */
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
  const draw = (at: number, dur = 0.9) => step({ pathLength: 0, opacity: 0 }, { pathLength: 1, opacity: 1 }, at, dur);

  return (
    <figure ref={ref} className={`gh-scene af-scene${on && !still ? " is-on" : ""}`}>
      <svg viewBox="0 0 720 420" role="img" aria-label="A user holds a phone. Three questions rise from it, and each one is answered before a ticket is filed.">
        {/* links from the phone up to each question; drawn first so the person covers them */}
        {CARDS.map((c, i) => (
          <motion.path key={c.link} d={c.link} className="af-link" {...step({ opacity: 0 }, { opacity: 1 }, 1.0 + i * 0.15, 0.5)} />
        ))}

        {/* the person */}
        <motion.path
          className="af-body"
          d="M270 420 C274 350 304 318 350 314 L370 314 C416 318 446 350 450 420"
          {...draw(0.1)}
        />
        <motion.path className="af-line" d="M350 302 L350 314 M370 302 L370 314" {...draw(0.3, 0.4)} />
        <motion.circle className="af-body" cx={360} cy={268} r={36} {...draw(0, 0.8)} />
        <motion.path
          className="af-hair"
          d="M324 262 C320 228 344 212 364 214 C388 216 402 234 396 264 C392 248 380 238 364 240 C348 242 334 250 324 262 Z"
          {...step({ opacity: 0 }, { opacity: 1 }, 0.5, 0.5)}
        />
        <motion.path
          className="af-line"
          d="M338 270 A9 9 0 1 0 356 270 A9 9 0 1 0 338 270 M364 270 A9 9 0 1 0 382 270 A9 9 0 1 0 364 270 M356 270 L364 270 M352 289 Q360 294 368 289"
          {...draw(0.6, 0.6)}
        />

        {/* phone, held in both hands */}
        <motion.g {...step({ opacity: 0, y: 10 }, { opacity: 1, y: 0 }, 0.5, 0.5)}>
          <rect className="af-phone" x={338} y={340} width={44} height={70} rx={7} />
          <rect className="af-screen" x={343} y={348} width={34} height={50} rx={3} />
          <rect className="af-type" x={348} y={357} width={22} height={3} rx={1.5} />
          <rect className="af-type" x={348} y={364} width={15} height={3} rx={1.5} />
        </motion.g>
        <motion.path className="af-line" d="M292 372 C306 392 322 398 340 390 M428 372 C414 392 398 398 380 390" {...draw(0.4, 0.7)} />

        {/* the questions, rising one by one, then answered one by one */}
        {CARDS.map((c, i) => (
          <motion.g
            key={c.x}
            style={{ transformBox: "fill-box", transformOrigin: "center bottom" }}
            {...step({ opacity: 0, y: 18, scale: 0.92 }, { opacity: 1, y: 0, scale: 1 }, 1.3 + i * 0.2, 0.55)}
          >
            <motion.g
              animate={on && !still ? { y: [0, -5, 0] } : { y: 0 }}
              transition={on && !still ? { delay: 3.8 + i * 0.7, duration: 4.5, repeat: Infinity, ease: "easeInOut" } : { duration: 0 }}
            >
              <g className="af-card" transform={`translate(${c.x} ${c.y})`}>
                <rect width={W} height={H} rx={10} />
                <motion.rect className="af-ring" width={W} height={H} rx={10} {...step({ opacity: 0 }, { opacity: 1 }, 2.7 + i * 0.35, 0.4)} />
                <circle className="af-avatar" cx={24} cy={26} r={10} />
                <rect className="af-bar is-strong" x={44} y={19} width={100} height={6} rx={3} />
                <rect className="af-bar" x={44} y={31} width={64} height={6} rx={3} />
                <rect className="af-bar" x={16} y={52} width={132} height={6} rx={3} />

                {/* "?" while it's a question, a check once it's answered */}
                <motion.g className="af-q" {...step({ opacity: 1 }, { opacity: 0 }, 2.7 + i * 0.35, 0.25)}>
                  <circle cx={168} cy={26} r={11} />
                  <text x={168} y={30.5} textAnchor="middle">?</text>
                </motion.g>
                <motion.g
                  className="af-ok"
                  style={{ transformBox: "fill-box", transformOrigin: "center" }}
                  {...step({ opacity: 0, scale: 0.4 }, { opacity: 1, scale: 1 }, 2.8 + i * 0.35, 0.45)}
                >
                  <circle cx={168} cy={26} r={11} />
                  <path d="M163 26.5 L166.5 30 L173.5 22.5" />
                </motion.g>
              </g>
            </motion.g>
          </motion.g>
        ))}
      </svg>
    </figure>
  );
}
