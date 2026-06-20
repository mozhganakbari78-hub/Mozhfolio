"use client";

import { motion } from "framer-motion";

/**
 * Hero illustration — a friendly flat-design skeleton that idles with a gentle
 * breathing bob, a soft blink, and a small hand sway. Synced to the site theme:
 * cream bones on a dark surface disc with a blue accent glow. Reduced-motion
 * users get a static pose (framer-motion respects prefers-reduced-motion via the
 * MotionConfig defaults / the OS setting on transitions we keep subtle).
 */

const BONE = "#ece7d6";
const BONE_SHADE = "#cfc9b6";
const SOCKET = "#15161a";

export default function HeroIllustration() {
  return (
    <div className="relative w-full max-w-md mx-auto aspect-square select-none" aria-hidden="true">
      {/* Accent glow behind */}
      <div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[78%] h-[78%] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, var(--accent-soft), transparent 68%)" }}
      />

      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 400" fill="none">
        {/* Surface disc */}
        <ellipse cx="200" cy="332" rx="120" ry="30" fill="var(--surface)" />
        <ellipse cx="200" cy="332" rx="120" ry="30" stroke="var(--border-strong)" strokeWidth="1" />

        {/* Ground shadow — scales inversely to the bob */}
        <motion.ellipse
          cx="200"
          cy="338"
          rx="58"
          ry="11"
          fill="#000"
          fillOpacity="0.35"
          animate={{ rx: [58, 50, 58], opacity: [0.35, 0.28, 0.35] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Whole skeleton bobs gently */}
        <motion.g
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        >
          {/* ── Legs ── */}
          <g stroke={BONE} strokeWidth="13" strokeLinecap="round" fill="none">
            <path d="M188 286 L184 330" />
            <path d="M212 286 L216 330" />
          </g>
          {/* knee + ankle joints */}
          <g fill={BONE}>
            <circle cx="186" cy="308" r="8" />
            <circle cx="214" cy="308" r="8" />
          </g>
          {/* feet */}
          <g stroke={BONE} strokeWidth="9" strokeLinecap="round" fill="none">
            <path d="M184 330 L170 334" />
            <path d="M216 330 L230 334" />
          </g>

          {/* ── Pelvis ── */}
          <path
            d="M173 278 Q200 296 227 278 Q224 262 200 264 Q176 262 173 278 Z"
            fill={BONE}
          />

          {/* ── Spine ── */}
          <g stroke={BONE} strokeWidth="10" strokeLinecap="round">
            <path d="M200 196 L200 268" />
          </g>

          {/* ── Ribcage ── */}
          <g stroke={BONE_SHADE} strokeWidth="6" strokeLinecap="round" fill="none">
            <path d="M200 214 Q170 210 165 226" />
            <path d="M200 214 Q230 210 235 226" />
            <path d="M200 234 Q168 232 162 250" />
            <path d="M200 234 Q232 232 238 250" />
            <path d="M200 254 Q172 254 170 270" />
            <path d="M200 254 Q228 254 230 270" />
          </g>

          {/* ── Arms (left sways) ── */}
          <motion.g
            style={{ originX: "158px", originY: "200px" }}
            animate={{ rotate: [0, -7, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          >
            <g stroke={BONE} strokeWidth="11" strokeLinecap="round" fill="none">
              <path d="M158 200 L146 244" />
              <path d="M146 244 L150 286" />
            </g>
            <circle cx="148" cy="245" r="7" fill={BONE} />
            {/* hand */}
            <g stroke={BONE} strokeWidth="5" strokeLinecap="round" fill="none">
              <path d="M150 286 L144 298" />
              <path d="M150 286 L151 300" />
              <path d="M150 286 L157 297" />
            </g>
          </motion.g>

          {/* right arm */}
          <motion.g
            style={{ originX: "242px", originY: "200px" }}
            animate={{ rotate: [0, 6, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.4 }}
          >
            <g stroke={BONE} strokeWidth="11" strokeLinecap="round" fill="none">
              <path d="M242 200 L254 244" />
              <path d="M254 244 L250 286" />
            </g>
            <circle cx="252" cy="245" r="7" fill={BONE} />
            <g stroke={BONE} strokeWidth="5" strokeLinecap="round" fill="none">
              <path d="M250 286 L244 297" />
              <path d="M250 286 L249 300" />
              <path d="M250 286 L256 298" />
            </g>
          </motion.g>

          {/* shoulders */}
          <g fill={BONE}>
            <circle cx="160" cy="200" r="9" />
            <circle cx="240" cy="200" r="9" />
          </g>

          {/* ── Skull ── */}
          <path
            d="M200 58
               C156 58 134 92 134 128
               C134 156 152 168 166 174
               L166 188
               C166 197 178 202 200 202
               C222 202 234 197 234 188
               L234 174
               C248 168 266 156 266 128
               C266 92 244 58 200 58 Z"
            fill={BONE}
          />
          {/* jaw seam */}
          <path d="M170 176 Q200 188 230 176" stroke={BONE_SHADE} strokeWidth="2.5" fill="none" strokeLinecap="round" />
          {/* teeth */}
          <g stroke={BONE_SHADE} strokeWidth="2" strokeLinecap="round">
            <path d="M186 184 L186 196" />
            <path d="M200 185 L200 197" />
            <path d="M214 184 L214 196" />
          </g>

          {/* eye sockets — blink */}
          <motion.g
            fill={SOCKET}
            animate={{ scaleY: [1, 1, 0.12, 1, 1] }}
            transition={{
              duration: 4,
              times: [0, 0.45, 0.5, 0.55, 1],
              repeat: Infinity,
              ease: "easeInOut",
            }}
            style={{ originY: "130px" }}
          >
            <ellipse cx="176" cy="130" rx="18" ry="20" />
            <ellipse cx="224" cy="130" rx="18" ry="20" />
          </motion.g>
          {/* eye glints */}
          <g fill="var(--accent-color)">
            <circle cx="182" cy="124" r="3.4" />
            <circle cx="230" cy="124" r="3.4" />
          </g>
          {/* nose */}
          <path d="M200 146 L193 162 L207 162 Z" fill={SOCKET} />
        </motion.g>
      </svg>
    </div>
  );
}
