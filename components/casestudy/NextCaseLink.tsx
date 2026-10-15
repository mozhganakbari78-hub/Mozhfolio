"use client";

import { trackEvent } from "@/lib/gtag";

// Client wrapper for the "Next case →" links inside case study pages
// (server components can't attach onClick handlers themselves).
//
// A plain anchor rather than next/link: case studies ship encrypted, so the
// next one has to be requested as a document. A client-side route change would
// look for RSC data that is deliberately not published.
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
    <a
      href={href}
      className={className}
      onClick={() => trackEvent("case_study_click", { case_study_name: caseStudyName })}
    >
      {children}
    </a>
  );
}
