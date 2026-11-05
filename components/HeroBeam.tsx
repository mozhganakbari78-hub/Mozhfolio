"use client";

import { useEffect, useRef, useState, useSyncExternalStore } from "react";

/**
 * Hero centrepiece: a "+ Design" field whose caret throws a beam of light
 * across the hero. The beam types what each case study set out to design,
 * and tilts a little toward the pointer. Decorative: the case studies below
 * say the same thing in words.
 */

const PHRASES = [
  "error messages people act on",
  "one system for four products",
  "fewer support tickets",
  "rules a grower can write",
];

const TYPE_MS = 45;
const DELETE_MS = 18;
const HOLD_MS = 2200;
const GAP_MS = 350;

const REDUCE = "(prefers-reduced-motion: reduce)";
const allowsMotion = () => !window.matchMedia(REDUCE).matches;
const subscribeMotion = (cb: () => void) => {
  const mq = window.matchMedia(REDUCE);
  mq.addEventListener("change", cb);
  return () => mq.removeEventListener("change", cb);
};

export default function HeroBeam() {
  const motion = useSyncExternalStore(subscribeMotion, allowsMotion, () => false);
  const [phrase, setPhrase] = useState(0);
  const [shown, setShown] = useState(PHRASES[0].length);
  const caretRef = useRef<HTMLSpanElement>(null);
  const beamRef = useRef<HTMLDivElement>(null);

  // type, hold, delete, next
  useEffect(() => {
    if (!motion) return;
    let alive = true;
    let t = 0;
    let i = 0;
    let n = PHRASES[0].length;
    const wait = (ms: number, fn: () => void) => {
      t = window.setTimeout(() => alive && fn(), ms);
    };
    const del = () => {
      if (n > 0) {
        n -= 1;
        setShown(n);
        wait(DELETE_MS, del);
      } else {
        i = (i + 1) % PHRASES.length;
        setPhrase(i);
        wait(GAP_MS, type);
      }
    };
    const type = () => {
      if (n < PHRASES[i].length) {
        n += 1;
        setShown(n);
        wait(TYPE_MS, type);
      } else {
        wait(HOLD_MS, del);
      }
    };
    wait(HOLD_MS, del);
    return () => {
      alive = false;
      window.clearTimeout(t);
    };
  }, [motion]);

  // the beam leans toward the pointer, a few degrees at most
  useEffect(() => {
    if (!motion) return;
    const onMove = (e: PointerEvent) => {
      const caret = caretRef.current, beam = beamRef.current;
      if (!caret || !beam) return;
      const r = caret.getBoundingClientRect();
      const dx = Math.max(e.clientX - r.left, 120);
      const deg = (Math.atan2(e.clientY - (r.top + r.height / 2), dx) * 180) / Math.PI;
      beam.style.setProperty("--tilt", `${Math.max(-12, Math.min(12, deg * 0.5)).toFixed(2)}deg`);
    };
    window.addEventListener("pointermove", onMove, { passive: true });
    return () => window.removeEventListener("pointermove", onMove);
  }, [motion]);

  const text = PHRASES[phrase].slice(0, motion ? shown : undefined);

  return (
    <div className="hb" aria-hidden="true">
      <div className="hb-field">
        <span className="hb-plus">+</span>
        <span className="hb-verb">Design</span>
        <span ref={caretRef} className={`hb-caret${motion ? " is-on" : ""}`}>
          <div ref={beamRef} className={`hb-beam${motion ? " is-on" : ""}`}>
            <div className="hb-cone" />
          </div>
          <span className="hb-sparks">
            {Array.from({ length: 7 }, (_, k) => (
              <i key={k} style={{ ["--k" as string]: k }} />
            ))}
          </span>
        </span>
        <span className="hb-text">{text}</span>
      </div>
    </div>
  );
}
