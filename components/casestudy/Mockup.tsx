"use client";

import { useState } from "react";
import { Maximize2 } from "lucide-react";

/**
 * Case-study mockup. Reveals on horizontal scroll (the `.cs-mockup` class is
 * observed by Editorial). The inline frame is height-capped so it never pushes
 * a panel past the bottom edge; hovering (or focusing) enlarges the shot to a
 * full-screen overlay so the fine detail is actually readable.
 */
export default function Mockup({
  src,
  alt,
  caption,
}: {
  src: string;
  alt: string;
  caption?: string;
}) {
  const [zoom, setZoom] = useState(false);
  const url = `${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}${src}`;

  return (
    <>
      <div
        className="cs-mockup"
        onMouseEnter={() => setZoom(true)}
        onMouseLeave={() => setZoom(false)}
        onClick={() => setZoom(true)}
        role="button"
        tabIndex={0}
        onFocus={() => setZoom(true)}
        onBlur={() => setZoom(false)}
        aria-label={`${alt} — hover to enlarge`}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={url} alt={alt} />
        <span className="cs-mockup-zoom">
          <Maximize2 size={13} />
          Hover to enlarge
        </span>
      </div>
      {caption ? <div className="cs-mockup-caption">{caption}</div> : null}

      {/* Full-screen enlarged preview */}
      <div
        className={`cs-lightbox${zoom ? " open" : ""}`}
        aria-hidden={!zoom}
        onMouseEnter={() => setZoom(false)}
        onClick={() => setZoom(false)}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={url} alt={alt} />
      </div>
    </>
  );
}
