import type { AnchorHTMLAttributes, ReactNode } from "react";

/**
 * A link into a case study.
 *
 * Always a plain anchor, so the browser loads the case study's own document.
 * That page is static HTML that paints before any JavaScript runs, so it
 * shows up quickly. A Next client-side navigation instead waits for the
 * route's payload, scripts and stylesheet before it shows anything, which on
 * a slow connection measured about twice as long. It also keeps the link
 * working when the case studies are encrypted, since their route payloads
 * aren't published then (see config/lock.json).
 */
export default function CaseLink({
  href,
  children,
  ...rest
}: { href: string; children: ReactNode } & AnchorHTMLAttributes<HTMLAnchorElement>) {
  return (
    <a href={href} {...rest}>
      {children}
    </a>
  );
}
