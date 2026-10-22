"use client";

import { useState } from "react";
import Lightbox from "./Lightbox";

/**
 * Case-study mockup, shown full inside its own panel. Reveals on horizontal
 * scroll (the `.cs-mockup` class is observed by Editorial). The frame is a
 * button: inside a panel the screenshots are small, and the detail that makes
 * them worth showing only reads at full size.
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
  const url = `${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}${src}`;
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="cs-mockup">
        <button
          type="button"
          className="cs-zoom"
          onClick={() => setOpen(true)}
          aria-label={`View larger: ${alt}`}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={url} alt={alt} loading="lazy" decoding="async" />
          <span className="cs-zoom-badge" aria-hidden>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="11" cy="11" r="7" />
              <path d="M20 20l-3.5-3.5M11 8v6M8 11h6" strokeLinecap="round" />
            </svg>
          </span>
        </button>
      </div>
      {caption ? <div className="cs-mockup-caption">{caption}</div> : null}

      {open ? (
        <Lightbox src={url} alt={alt} caption={caption} onClose={() => setOpen(false)} />
      ) : null}
    </>
  );
}
