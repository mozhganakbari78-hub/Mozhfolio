"use client";

import { useEffect, useRef, useState, useSyncExternalStore } from "react";

/**
 * How a trading bot turns market inputs into outcomes. Five inputs on the
 * left (chart, price, news, market, indicators) send signals along their
 * wires into the bot; every couple of seconds the bot sends one out to an
 * outcome card, Won or Lost, and that card's count goes up. No background of
 * its own: it sits on the page. Styles: .bs-* in case-study.css.
 */

const REDUCE = "(prefers-reduced-motion: reduce)";
const allowsMotion = () => !window.matchMedia(REDUCE).matches;
const subscribeMotion = (cb: () => void) => {
  const mq = window.matchMedia(REDUCE);
  mq.addEventListener("change", cb);
  return () => mq.removeEventListener("change", cb);
};

const BOT_IN: [number, number] = [520, 268];
const BOT_OUT: [number, number] = [680, 268];
const WON_IN: [number, number] = [850, 176];
const LOST_IN: [number, number] = [850, 372];
const TICK = 2400; // ms between outcomes
const TRAVEL = 900; // ms for a pulse to reach its card

type Input = { key: string; label: string; x: number; y: number };
const INPUTS: Input[] = [
  { key: "chart", label: "CHART", x: 118, y: 60 },
  { key: "price", label: "PRICE", x: 222, y: 150 },
  { key: "news", label: "NEWS", x: 98, y: 240 },
  { key: "market", label: "MARKET", x: 214, y: 330 },
  { key: "ind", label: "INDICATORS", x: 112, y: 420 },
];
const T = 78; // input tile size

const wire = (x1: number, y1: number, [x2, y2]: [number, number]) => {
  const mx = (x1 + x2) / 2;
  return `M${x1},${y1} C${mx},${y1} ${mx},${y2} ${x2},${y2}`;
};
const outWire = ([x1, y1]: [number, number], [x2, y2]: [number, number]) => {
  const mx = (x1 + x2) / 2;
  return `M${x1},${y1} C${mx},${y1} ${mx},${y2} ${x2},${y2}`;
};
const WON_PATH = outWire(BOT_OUT, WON_IN);
const LOST_PATH = outWire(BOT_OUT, LOST_IN);

function Icon({ k }: { k: string }) {
  switch (k) {
    case "chart":
      return (
        <g className="bs-ic">
          {[[14, 40, 22, 52], [26, 30, 18, 44], [38, 36, 24, 48], [50, 22, 18, 38], [62, 26, 16, 38]].map(([x, top, h, wick], i) => (
            <g key={i} className={i % 2 ? "bs-down" : "bs-up"}>
              <line x1={x} x2={x} y1={top - 6} y2={wick + 6} />
              <rect x={x - 4} y={top} width={8} height={h} rx={1.5} />
            </g>
          ))}
        </g>
      );
    case "price":
      return (
        <text x={T / 2} y={T / 2 + 13} textAnchor="middle" className="bs-dollar">
          $
        </text>
      );
    case "news":
      return (
        <g className="bs-ic">
          <rect x={16} y={18} width={46} height={42} rx={4} />
          <rect x={22} y={25} width={14} height={12} rx={1.5} className="bs-fill" />
          <line x1={41} x2={56} y1={27} y2={27} />
          <line x1={41} x2={56} y1={34} y2={34} />
          <line x1={22} x2={56} y1={44} y2={44} />
          <line x1={22} x2={50} y1={51} y2={51} />
        </g>
      );
    case "market":
      return (
        <g className="bs-ic">
          <circle cx={39} cy={39} r={21} />
          <ellipse cx={39} cy={39} rx={9} ry={21} />
          <line x1={18} x2={60} y1={39} y2={39} />
          <path d="M22,28 Q39,33 56,28 M22,50 Q39,45 56,50" />
        </g>
      );
    default:
      return (
        <g className="bs-ic">
          <rect x={16} y={44} width={9} height={16} rx={1.5} className="bs-fill" />
          <rect x={30} y={34} width={9} height={26} rx={1.5} className="bs-fill" />
          <rect x={44} y={24} width={9} height={36} rx={1.5} className="bs-fill" />
          <path d="M16,38 L32,26 L44,30 L62,14" />
          <path d="M55,14 L62,14 L62,21" />
        </g>
      );
  }
}

export default function BotSignalsScene() {
  const motion = useSyncExternalStore(subscribeMotion, allowsMotion, () => false);
  const [won, setWon] = useState(31);
  const [lost, setLost] = useState(14);
  const [hit, setHit] = useState<"won" | "lost" | null>(null);
  const [pulse, setPulse] = useState<{ id: number; to: "won" | "lost" } | null>(null);
  const anim = useRef<SVGAnimateMotionElement>(null);

  // every tick the bot sends one signal out; about 7 in 10 are won
  useEffect(() => {
    if (!motion) return;
    let n = 0;
    const timers: number[] = [];
    const id = window.setInterval(() => {
      n += 1;
      const to = ((n - 1) * 7) % 10 < 7 ? "won" : "lost";
      setPulse({ id: n, to });
      timers.push(
        window.setTimeout(() => {
          if (to === "won") setWon((v) => v + 1);
          else setLost((v) => v + 1);
          setHit(to);
          timers.push(window.setTimeout(() => setHit(null), 650));
        }, TRAVEL)
      );
    }, TICK);
    return () => {
      window.clearInterval(id);
      timers.forEach((t) => window.clearTimeout(t));
    };
  }, [motion]);

  // start the outgoing pulse each time a new one is rendered
  useEffect(() => {
    anim.current?.beginElement();
  }, [pulse]);

  const rate = Math.round((won / (won + lost)) * 100);

  return (
    <figure
      className="cs-scene bs-scene"
      aria-label="Market inputs (chart, price, news, market and indicators) send signals into a trading bot, which turns each one into an outcome: won or lost, with a running count of each."
    >
      <svg viewBox="0 0 1200 540" role="img" aria-hidden>
        <defs>
          <radialGradient id="bs-glow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="var(--accent-ink)" stopOpacity=".35" />
            <stop offset="100%" stopColor="var(--accent-ink)" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* wires: inputs to the bot */}
        {INPUTS.map((t, i) => {
          const d = wire(t.x + T, t.y + T / 2, BOT_IN);
          return (
            <g key={t.key}>
              <path d={d} className="bs-wire" />
              <circle cx={t.x + T} cy={t.y + T / 2} r={3} className="bs-node" />
              {motion && (
                <circle r={3.2} className="bs-pulse">
                  <animateMotion dur="2.4s" repeatCount="indefinite" begin={`${(i * 0.47).toFixed(2)}s`} path={d} keyPoints="0;1" keyTimes="0;1" calcMode="spline" keySplines=".45 0 .55 1" />
                  <animate attributeName="opacity" dur="2.4s" repeatCount="indefinite" begin={`${(i * 0.47).toFixed(2)}s`} values="0;1;1;0" keyTimes="0;.1;.85;1" />
                </circle>
              )}
            </g>
          );
        })}

        {/* input tiles */}
        {INPUTS.map((t) => (
          <g key={t.key} transform={`translate(${t.x} ${t.y})`}>
            <rect width={T} height={T} rx={14} className="bs-tile" />
            <Icon k={t.key} />
            <text x={T / 2} y={T + 18} textAnchor="middle" className="bs-label">
              {t.label}
            </text>
          </g>
        ))}

        {/* wires: bot to outcomes */}
        <path d={WON_PATH} className={`bs-wire bs-won-wire${hit === "won" ? " is-hit" : ""}`} />
        <path d={LOST_PATH} className={`bs-wire bs-lost-wire${hit === "lost" ? " is-hit" : ""}`} />
        {motion && pulse && (
          <circle key={pulse.id} r={4} className={`bs-pulse is-${pulse.to}`}>
            <animateMotion
              ref={anim}
              begin="indefinite"
              dur={`${TRAVEL}ms`}
              fill="freeze"
              path={pulse.to === "won" ? WON_PATH : LOST_PATH}
              keyPoints="0;1"
              keyTimes="0;1"
              calcMode="spline"
              keySplines=".4 0 .2 1"
            />
          </circle>
        )}

        {/* the bot */}
        <ellipse cx={600} cy={452} rx={150} ry={34} fill="url(#bs-glow)" />
        <ellipse cx={600} cy={446} rx={118} ry={20} className="bs-ring" />
        <ellipse cx={600} cy={446} rx={84} ry={13} className="bs-ring is-inner" />
        <g className={`bs-bot${motion ? " is-on" : ""}`}>
          {/* head */}
          <rect x={530} y={128} width={140} height={112} rx={36} className="bs-shell" />
          <rect x={548} y={150} width={104} height={64} rx={22} className="bs-visor" />
          <rect x={570} y={174} width={20} height={9} rx={4.5} className="bs-eye" />
          <rect x={610} y={174} width={20} height={9} rx={4.5} className="bs-eye" />
          <rect x={516} y={164} width={16} height={40} rx={8} className="bs-shell" />
          <rect x={668} y={164} width={16} height={40} rx={8} className="bs-shell" />
          <line x1={600} x2={600} y1={128} y2={106} className="bs-line" />
          <circle cx={600} cy={100} r={6} className="bs-tip" />
          {/* body */}
          <rect x={548} y={250} width={104} height={118} rx={26} className="bs-shell" />
          <rect x={562} y={272} width={76} height={52} rx={10} className="bs-badge" />
          <text x={600} y={294} textAnchor="middle" className="bs-badge-t">TRADING</text>
          <text x={600} y={312} textAnchor="middle" className="bs-badge-t">BOT</text>
          <circle cx={600} cy={344} r={5} className="bs-led" />
          {/* arms */}
          <rect x={520} y={262} width={22} height={70} rx={11} className="bs-shell" />
          <rect x={658} y={262} width={22} height={70} rx={11} className="bs-shell" />
          {/* legs */}
          <rect x={566} y={372} width={26} height={54} rx={10} className="bs-shell" />
          <rect x={608} y={372} width={26} height={54} rx={10} className="bs-shell" />
        </g>

        {/* outcomes */}
        <g transform="translate(850 118)" className={`bs-card is-won${hit === "won" ? " is-hit" : ""}`}>
          <rect width={300} height={116} rx={18} className="bs-card-bg" />
          <path d="M28,70 L46,42 L64,70 Z" className="bs-tri" />
          <text x={86} y={52} className="bs-card-k">BUY · WON</text>
          <text x={86} y={80} className="bs-card-v">{won} signals</text>
          <circle cx={252} cy={58} r={24} className="bs-mark" />
          <path d="M241,58 L249,66 L264,50" className="bs-mark-g" />
        </g>
        <g transform="translate(850 314)" className={`bs-card is-lost${hit === "lost" ? " is-hit" : ""}`}>
          <rect width={300} height={116} rx={18} className="bs-card-bg" />
          <path d="M28,46 L46,74 L64,46 Z" className="bs-tri" />
          <text x={86} y={52} className="bs-card-k">SELL · LOST</text>
          <text x={86} y={80} className="bs-card-v">{lost} signals</text>
          <circle cx={252} cy={58} r={24} className="bs-mark" />
          <path d="M243,49 L261,67 M261,49 L243,67" className="bs-mark-g" />
        </g>
        <text x={1000} y={478} textAnchor="middle" className="bs-label">
          WIN RATE {rate}%
        </text>
      </svg>
    </figure>
  );
}
