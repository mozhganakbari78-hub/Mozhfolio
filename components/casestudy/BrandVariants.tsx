"use client";

import { motion } from "framer-motion";

const EASE = [0.16, 1, 0.3, 1] as const;

/**
 * The multi-brand claim, shown rather than stated: the same component contract
 * rendered under three brand palettes, with the shared token names listed once
 * underneath. What changes is the value column, never the component.
 */
const BRANDS = [
  { name: "Project 1", primary: "#2A539E", soft: "rgba(42,83,158,0.16)", tint: "#AABAD8" },
  { name: "Project 2", primary: "#F9B741", soft: "rgba(249,183,65,0.16)", tint: "#FDE2B3" },
  { name: "Project 3", primary: "#007A7F", soft: "rgba(0,122,127,0.16)", tint: "#99CACC" },
];

const TOKENS = ["color.primary", "color.primary.soft", "color.primary.tint"];

export default function BrandVariants() {
  return (
    <div className="cs-brands">
      <div className="head">
        <span className="ttl">Same contract · different values</span>
        <span className="sub">One component layer, three product identities</span>
      </div>

      <div className="cols">
        {BRANDS.map((b, i) => (
          <motion.div
            key={b.name}
            className="col"
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ delay: 0.08 + i * 0.12, duration: 0.5, ease: EASE }}
          >
            <span className="bname">{b.name}</span>

            {/* the same three elements every time, only the values differ */}
            <span className="btn" style={{ background: b.primary }}>
              Confirm
            </span>
            <span className="btn is-ghost" style={{ borderColor: b.primary, color: b.primary }}>
              Cancel
            </span>
            <span className="chip" style={{ background: b.soft, color: b.tint }}>
              <span className="dot" style={{ background: b.primary }} />
              Pending
            </span>
            <span className="field">
              <span className="fill" style={{ background: b.primary }} />
            </span>
          </motion.div>
        ))}
      </div>

      <div className="tokens">
        {TOKENS.map((t, ti) => (
          <motion.div
            key={t}
            className="trow"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ delay: 0.5 + ti * 0.08, duration: 0.4 }}
          >
            <code>{t}</code>
            {BRANDS.map((b) => (
              <span
                key={b.name}
                className="sw"
                style={{
                  background:
                    ti === 0 ? b.primary : ti === 1 ? b.soft : b.tint,
                  borderColor: ti === 1 ? b.primary : "transparent",
                }}
              />
            ))}
          </motion.div>
        ))}
      </div>

      <p className="foot">
        The component behaviour never changes. Only the value behind a token name does.
      </p>
    </div>
  );
}
