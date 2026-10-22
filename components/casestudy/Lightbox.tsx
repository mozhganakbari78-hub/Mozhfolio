"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

/**
 * Full-screen view for a case-study image.
 *
 * Rendered through a portal into <body> on purpose: the horizontal case-study
 * layout captures wheel events on its track and turns them into sideways
 * scroll, so an overlay rendered inside that track would scroll the case
 * behind it. Outside the track, nothing reaches that listener.
 *
 * Opens fitted to the screen. Clicking the image switches to actual pixels so
 * small text in a screenshot can be read, with the overlay scrolling.
 */
export default function Lightbox({
  src,
  alt,
  caption,
  onClose,
}: {
  src: string;
  alt: string;
  caption?: string;
  onClose: () => void;
}) {
  const [zoomed, setZoomed] = useState(false);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [onClose]);

  // Only ever rendered from a click handler, so there is no server pass to
  // guard against beyond this.
  if (typeof document === "undefined") return null;

  return createPortal(
    <div
      className={`cs-lb${zoomed ? " is-zoomed" : ""}`}
      role="dialog"
      aria-modal="true"
      aria-label={alt}
      onClick={onClose}
    >
      <button type="button" className="cs-lb-close" onClick={onClose} aria-label="Close">
        Close
        <span aria-hidden>esc</span>
      </button>

      <div className="cs-lb-stage" onClick={(e) => e.stopPropagation()}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={src}
          alt={alt}
          onClick={() => setZoomed((z) => !z)}
          title={zoomed ? "Fit to screen" : "View at full size"}
        />
      </div>

      {caption ? (
        <p className="cs-lb-caption" onClick={(e) => e.stopPropagation()}>
          {caption}
          <span className="hint">{zoomed ? "Click the image to fit" : "Click the image to zoom"}</span>
        </p>
      ) : null}
    </div>,
    document.body
  );
}
