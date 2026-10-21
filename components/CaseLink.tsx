"use client";

import Link from "next/link";
import type { AnchorHTMLAttributes, ReactNode } from "react";
import lock from "@/config/lock.json";

/**
 * A link into a case study.
 *
 * Unlocked, these are ordinary Next links: the route is prefetched while the
 * card is on screen and the click is a client-side navigation, which is what
 * makes opening a case feel instant.
 *
 * Locked, the case studies are encrypted files and their route payloads are
 * deliberately not published, so a client-side navigation would have nothing
 * to fetch. The link has to be a plain anchor and the browser has to load the
 * document itself.
 *
 * Both sides read config/lock.json, so the link type can never drift out of
 * step with whether the pages are actually encrypted.
 */
export default function CaseLink({
  href,
  children,
  ...rest
}: { href: string; children: ReactNode } & AnchorHTMLAttributes<HTMLAnchorElement>) {
  if (lock.caseStudiesLocked) {
    return (
      <a href={href} {...rest}>
        {children}
      </a>
    );
  }
  return (
    <Link href={href} {...rest}>
      {children}
    </Link>
  );
}
