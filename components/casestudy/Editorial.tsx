"use client";

import { useEffect, useState } from "react";
import EditorialHorizontal from "./EditorialHorizontal";
import EditorialVertical from "./EditorialVertical";

type View = "vertical" | "horizontal";
const KEY = "cs-view";

export default function Editorial({ children }: { children: React.ReactNode }) {
  // null until mounted: the choice depends on the pointer and on storage,
  // neither of which exists during the static export.
  const [touch, setTouch] = useState<boolean | null>(null);
  const [view, setView] = useState<View>("vertical");

  useEffect(() => {
    // Small screens and touch devices always get the vertical layout: the
    // horizontal one is driven by a mouse wheel.
    const mq = window.matchMedia("(max-width: 900px), (pointer: coarse)");
    const update = () => setTouch(mq.matches);
    const restore = () => {
      try {
        if (localStorage.getItem(KEY) === "horizontal") setView("horizontal");
      } catch {}
    };
    restore();
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  const choose = (v: View) => {
    setView(v);
    try {
      localStorage.setItem(KEY, v);
    } catch {}
  };

  if (touch === null) return null;
  if (touch) return <EditorialVertical>{children}</EditorialVertical>;

  return (
    <>
      {view === "horizontal" ? (
        <EditorialHorizontal>{children}</EditorialHorizontal>
      ) : (
        <EditorialVertical>{children}</EditorialVertical>
      )}
      <div className="cs-viewtoggle" role="group" aria-label="Case study layout">
        <button type="button" aria-pressed={view === "vertical"} onClick={() => choose("vertical")}>
          Scroll
        </button>
        <button type="button" aria-pressed={view === "horizontal"} onClick={() => choose("horizontal")}>
          Slides
        </button>
      </div>
    </>
  );
}
