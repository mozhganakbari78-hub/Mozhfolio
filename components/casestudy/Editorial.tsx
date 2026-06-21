"use client";

import { useEffect, useState } from "react";
import EditorialHorizontal from "./EditorialHorizontal";
import EditorialVertical from "./EditorialVertical";

export default function Editorial({ children }: { children: React.ReactNode }) {
  const [isMobile, setIsMobile] = useState<boolean | null>(null);

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 900px)");
    const update = () => setIsMobile(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  if (isMobile === null) {
    return <EditorialVertical>{children}</EditorialVertical>;
  }

  return isMobile ? (
    <EditorialVertical>{children}</EditorialVertical>
  ) : (
    <EditorialHorizontal>{children}</EditorialHorizontal>
  );
}
