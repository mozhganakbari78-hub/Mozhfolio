"use client";

import { useEffect, useRef, useState } from "react";
import { useOnScreen } from "@/lib/useOnScreen";

/**
 * The greenhouse the product runs: a sensor reads the air, the controller
 * switches fans, misters and the heater, and one rule ties them together.
 * Line art in the site's style. The reading drifts and the rule fires when
 * it crosses the threshold, so the scene shows automation, not just devices.
 */

const W = 1200, H = 720;
const ROOF = (x: number) => {
  // quadratic roof from (140,300) over (600,60) to (1060,300); x is linear in t
  const t = (x - 140) / 920;
  return (1 - t) ** 2 * 300 + 2 * t * (1 - t) * 60 + t ** 2 * 300;
};
const LIMIT = 30;
// one cycle of the reading: rises past the limit, fan cools it back down
const TEMPS = [28.6, 29.1, 29.6, 30.2, 30.8, 31.2, 30.9, 30.4, 29.8, 29.2];

function Label({ x, y, k, v, on }: { x: number; y: number; k: string; v: string; on?: boolean }) {
  const w = Math.max(k.length * 11.5, v.length * 10.6) + 32;
  return (
    <g className={`gh-label${on ? " is-on" : ""}`} transform={`translate(${x} ${y})`}>
      <rect width={w} height={58} rx={10} />
      <text x={16} y={23} className="gh-k">{k}</text>
      <text x={16} y={46} className="gh-v">{v}</text>
    </g>
  );
}

function Plant({ x, s = 1, d = 0 }: { x: number; s?: number; d?: number }) {
  // Position on the outer group, sway on the inner one: the sway pivots on
  // the stem's base, so the plant leans in the air and never lifts.
  return (
    <g transform={`translate(${x} 600) scale(${s})`}>
      <g className="gh-plant" style={{ animationDelay: `${d}s` }}>
        <path d="M0,0 V-38" />
        <path d="M0,-16 C-14,-18 -22,-30 -20,-40 C-8,-38 0,-28 0,-16z" />
        <path d="M0,-26 C14,-28 24,-40 22,-50 C9,-48 0,-38 0,-26z" />
      </g>
    </g>
  );
}

export default function GreenhouseScene() {
  const [i, setI] = useState(4);
  const fig = useRef<HTMLElement>(null);
  const onScreen = useOnScreen(fig);

  useEffect(() => {
    if (!onScreen || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = window.setInterval(() => setI((n) => (n + 1) % TEMPS.length), 1500);
    return () => window.clearInterval(id);
  }, [onScreen]);

  const temp = TEMPS[i];
  const hum = Math.round(74 - (temp - 28.6) * 3);
  const on = temp > LIMIT;
  const mullions = [300, 450, 600, 750, 900];

  return (
    <figure ref={fig} className={`cs-scene gh-scene${onScreen ? "" : " is-offscreen"}`} aria-label={`Greenhouse automation: the sensor reads ${temp.toFixed(1)} °C; the rule turns the fan on above ${LIMIT} °C`}>
      <svg viewBox={`0 150 ${W} ${H - 150}`} role="img" aria-hidden>
        {/* greenhouse frame */}
        <g className="gh-frame">
          <path d="M140,600 V300 Q600,60 1060,300 V600" />
          <path d="M140,300 H1060" className="gh-faint" />
          {mullions.map((x) => <path key={x} d={`M${x},600 V${ROOF(x)}`} className="gh-faint" />)}
          <path d="M80,600 H1120" />
        </g>

        {/* crop */}
        {[420, 470, 525, 680, 735, 790, 845, 895].map((x, n) => (
          <Plant key={x} x={x} s={0.9 + (n % 3) * 0.12} d={n * 0.35} />
        ))}

        {/* data lines from the controller */}
        <g className="gh-wires">
          <path d="M600,452 C600,380 330,420 266,410" className={`gh-flow${on ? "" : " is-idle"}`} />
          <path d="M266,392 C420,330 700,336 990,392" className={`gh-flow${on ? "" : " is-idle"}`} />
          <path d="M266,400 C400,360 560,340 660,332" className="gh-flow is-idle" />
          <path d="M218,450 V520" className="gh-flow is-idle" />
        </g>

        {/* controller */}
        <g className="gh-device">
          <rect x={170} y={376} width={96} height={74} rx={8} />
          <rect x={182} y={388} width={50} height={30} rx={3} className="gh-screen" />
          <path d={`M188,${410 - (temp - 28) * 4} l10,-4 l10,3 l10,-6 l8,2`} className="gh-accent" />
          {[0, 1, 2].map((n) => <circle key={n} cx={246} cy={394 + n * 14} r={3.5} className={n === 0 && on ? "gh-led is-on" : "gh-led"} />)}
        </g>
        <Label x={286} y={436} k="CONTROLLER" v="fans · misters · heater" />

        {/* heater */}
        <g className="gh-device">
          <rect x={164} y={520} width={112} height={72} rx={8} />
          <path d="M180,556 l8,-14 l8,28 l8,-28 l8,28 l8,-28 l8,28 l8,-28 l8,28 l8,-14" className={on ? "gh-coil" : "gh-coil is-warm"} />
        </g>
        <Label x={292} y={528} k="HEATER" v={on ? "off" : "standby"} />

        {/* mister */}
        <g className="gh-device">
          <path d="M660,332 H900" />
          {[680, 760, 840].map((x) => <path key={x} d={`M${x},332 v8`} />)}
        </g>
        <g className="gh-drops">
          {[680, 760, 840].flatMap((x, a) => [0, 1, 2].map((b) => (
            <circle key={`${x}${b}`} cx={x} cy={350} r={3} style={{ animationDelay: `${a * 0.3 + b * 0.55}s` }} />
          )))}
        </g>
        <Label x={660} y={236} k="MISTER" v={`humidity ${hum} %`} />

        {/* fan on the end wall */}
        <g className="gh-device">
          <circle cx={1000} cy={410} r={46} />
          <g className={`gh-blades${on ? " is-on" : ""}`} style={{ transformOrigin: "1000px 410px" }}>
            {[0, 120, 240].map((r) => (
              <path key={r} d="M1000,410 C990,388 994,372 1004,370 C1014,372 1010,392 1000,410z" transform={`rotate(${r} 1000 410)`} />
            ))}
          </g>
          <circle cx={1000} cy={410} r={4} className="gh-accent-fill" />
        </g>
        <g className={`gh-air${on ? " is-on" : ""}`}>
          {[392, 410, 428].map((y, n) => <path key={y} d={`M940,${y} h-60`} style={{ animationDelay: `${n * 0.25}s` }} />)}
        </g>
        <Label x={928} y={470} k="FAN" v={on ? "on" : "off"} on={on} />

        {/* sensor on its post */}
        <g className="gh-device">
          <path d="M600,600 V492" />
          <rect x={582} y={452} width={36} height={40} rx={6} />
          <path d="M590,466 h20 M590,476 h14" className="gh-faint" />
        </g>
        <g className="gh-pulse">
          <circle cx={600} cy={472} r={30} />
          <circle cx={600} cy={472} r={30} style={{ animationDelay: "1.1s" }} />
        </g>
        <Label x={632} y={430} k="SENSOR" v={`${temp.toFixed(1)} °C · ${hum} %`} on={on} />

        {/* the rule that runs it */}
        <g className={`gh-rule${on ? " is-on" : ""}`} transform="translate(300 636)">
          <rect width={600} height={56} rx={28} />
          <text x={32} y={36}>
            <tspan className="gh-kw">IF</tspan>
            <tspan dx={12}>temperature &gt; {LIMIT} °C</tspan>
            <tspan dx={18} className="gh-kw">THEN</tspan>
            <tspan dx={12}>turn on the fan</tspan>
          </text>
          <circle cx={568} cy={28} r={7} className="gh-dot" />
        </g>
      </svg>
    </figure>
  );
}
