"use client";

import { motion, useReducedMotion, type MotionProps, type TargetAndTransition } from "framer-motion";
import {
  ArrowRightIcon,
  ChatBubbleLeftRightIcon,
  CheckCircleIcon,
  InboxIcon,
  LifebuoyIcon,
} from "@heroicons/react/24/outline";

/**
 * The insight of the FAQ case as a picture: everyone comes in through the
 * same support page, for one of three reasons, and each reason gets its own
 * design response. Shares were measured on two years of tickets. Static
 * apart from a single reveal.
 */
const ROUTES = [
  {
    tone: "self",
    pct: "37%",
    intent: "Looking for an answer",
    response: "Show the answer where they already are",
    Icon: CheckCircleIcon,
  },
  {
    tone: "case",
    pct: "43%",
    intent: "Need guidance or reassurance",
    response: "Help where we can, never block the ticket",
    Icon: LifebuoyIcon,
  },
  {
    tone: "support",
    pct: "20%",
    intent: "Need support from the start",
    response: "Reach support without a detour",
    Icon: ChatBubbleLeftRightIcon,
  },
] as const;

// where each branch meets its row, in % of the list's height
const ENDS = [15, 50, 85];
const EASE = [0.16, 1, 0.3, 1] as const;

export default function IntentRoutes() {
  const still = useReducedMotion() ?? false;
  const reveal = (delay: number, from: TargetAndTransition = { opacity: 0, y: 10 }): MotionProps =>
    still
      ? {}
      : {
          initial: from,
          whileInView: { opacity: 1, x: 0, y: 0 },
          viewport: { once: true, amount: 0.3 },
          transition: { delay, duration: 0.5, ease: EASE },
        };

  return (
    <figure
      className="cs-routes"
      aria-label="Everyone opens the same support page. 37% are looking for an answer: show it where they already are. 43% need guidance or reassurance: help where possible and never block the ticket. 20% need support from the start: let them reach it without a detour."
    >
      <motion.div className="rt-entry" {...reveal(0)}>
        <InboxIcon className="ic" aria-hidden />
        <span className="k">One way in</span>
        <b>The support page</b>
        <span className="sub">Three reasons to be there</span>
      </motion.div>

      <svg className="rt-branch" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden>
        {ROUTES.map((r, i) => (
          <motion.path
            key={r.tone}
            className={`is-${r.tone}`}
            d={`M0 50 C 55 50, 45 ${ENDS[i]}, 100 ${ENDS[i]}`}
            {...(still
              ? {}
              : {
                  initial: { pathLength: 0, opacity: 0 },
                  whileInView: { pathLength: 1, opacity: 1 },
                  viewport: { once: true, amount: 0.3 },
                  transition: { delay: 0.25 + i * 0.1, duration: 0.6, ease: EASE },
                })}
          />
        ))}
      </svg>

      <ol className="rt-list">
        {ROUTES.map((r, i) => (
          <motion.li key={r.tone} className={`rt-row is-${r.tone}`} {...reveal(0.45 + i * 0.12, { opacity: 0, x: -10 })}>
            <div className="intent">
              <span className="pct">{r.pct}</span>
              <span className="lbl">{r.intent}</span>
            </div>
            <ArrowRightIcon className="arrow" aria-hidden />
            <div className="resp">
              <r.Icon className="ic" aria-hidden />
              <span>{r.response}</span>
            </div>
          </motion.li>
        ))}
      </ol>
    </figure>
  );
}
