"use client";

import { useEffect, useRef, useState } from "react";
import { useInView, useMotionValue, animate } from "framer-motion";

/**
 * Animated number counter. Parses a display string like "~4 yrs", "400K+",
 * or "2,000+" into prefix / number / suffix, then counts the number up from
 * zero the first time it scrolls into view. Non-numeric strings render as-is.
 */
export default function CountUp({
  value,
  duration = 1.6,
  className,
  style,
}: {
  value: string;
  duration?: number;
  className?: string;
  style?: React.CSSProperties;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const mv = useMotionValue(0);
  const [display, setDisplay] = useState("0");

  const match = value.match(/^(\D*)([\d,.]+)(.*)$/);
  const prefix = match ? match[1] : "";
  const numericStr = match ? match[2].replace(/,/g, "") : "";
  const suffix = match ? match[3] : "";
  const target = numericStr ? parseFloat(numericStr) : NaN;
  const hasDecimal = numericStr.includes(".");
  const decimals = hasDecimal ? numericStr.split(".")[1].length : 0;

  useEffect(() => {
    if (!inView || isNaN(target)) return;
    const controls = animate(mv, target, {
      duration,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (v) =>
        setDisplay(
          v.toLocaleString("en-US", {
            minimumFractionDigits: decimals,
            maximumFractionDigits: decimals,
          })
        ),
    });
    return () => controls.stop();
  }, [inView, target, duration, decimals, mv]);

  // Fallback: render the original string verbatim if we couldn't parse a number.
  if (isNaN(target)) {
    return (
      <span ref={ref} className={className} style={style}>
        {value}
      </span>
    );
  }

  return (
    <span ref={ref} className={className} style={style}>
      {prefix}
      {display}
      {suffix}
    </span>
  );
}
