import { ARCH_SVG, ARCH_VIEWBOX } from "./dsArchitectureSvg";

/**
 * Version 2 token architecture, drawn inline so each layer can lift a little
 * when the pointer is over it (the plane or its labels). No background: it
 * sits on the page. The drawing is generated; see dsArchitectureSvg.ts.
 */
export default function DsArchitecture({ label }: { label: string }) {
  return (
    <svg
      className="ds-arch"
      viewBox={ARCH_VIEWBOX}
      role="img"
      aria-label={label}
      dangerouslySetInnerHTML={{ __html: ARCH_SVG }}
    />
  );
}
