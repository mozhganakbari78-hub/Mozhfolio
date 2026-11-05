"use client";

import { motion, type HTMLMotionProps, type TargetAndTransition } from "framer-motion";
import { useInView } from "@/lib/useInView";

/**
 * A scroll reveal that never leaves content hidden: it fires as soon as the
 * element enters the viewport, and at once for anything already scrolled past
 * or when the reader prefers reduced motion (see useInView).
 */
type Tag = "div" | "figure" | "footer";

export default function Reveal({
  as = "div",
  to,
  ...rest
}: { as?: Tag; to: TargetAndTransition } & HTMLMotionProps<"div">) {
  const { ref, inView } = useInView();
  const M = motion[as] as typeof motion.div;
  return <M ref={ref} animate={inView ? to : undefined} {...rest} />;
}
