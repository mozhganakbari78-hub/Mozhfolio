"use client";

import Link from "next/link";
import { trackEvent } from "@/lib/gtag";

// Client wrapper for the "Next case →" links inside case study pages
// (server components can't attach onClick handlers themselves).
export default function NextCaseLink({
  href,
  caseStudyName,
  className,
  children,
}: {
  href: string;
  caseStudyName: string;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className={className}
      onClick={() => trackEvent("case_study_click", { case_study_name: caseStudyName })}
    >
      {children}
    </Link>
  );
}
