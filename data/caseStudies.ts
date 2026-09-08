// Case study pages render from dedicated components in components/casestudy/.
// This file carries only what the rest of the site needs: the work-section
// cards and the per-page metadata.

export type CaseStudy = {
  index: string;
  slug: string;
  title: string;
  /** Card copy on the home page. */
  short: string;
  /** <meta description> for the case study page. */
  description: string;
  /** Small label above the card title. */
  meta: string;
  illustration: "support" | "batch" | "designsystem" | "errorcopy";
};

export const caseStudies: CaseStudy[] = [
  {
    index: "01",
    slug: "reducing-support-friction",
    title: "The answers already existed. People couldn't reach them in time.",
    short:
      "The brief was to improve the FAQ. ~1,000 tickets said that was never the problem.",
    description:
      "Reframing an FAQ redesign into a guidance problem inside a live corporate banking platform, built on an analysis of ~1,000 support tickets.",
    meta: "Problem Framing · Content Architecture",
    illustration: "support",
  },
  {
    index: "02",
    slug: "batch-transfer",
    title: "A bad row should fail alone. A wrong transfer should never leave.",
    short:
      "One bad row could reset a whole payroll batch. The other failure never looked like one.",
    description:
      "Redesigning an offline batch-payment workflow for bank branches: isolating operational failure, surfacing financial risk before money moves, and sequencing the release under a fixed deadline.",
    meta: "Workflow Design · Risk & Validation",
    illustration: "batch",
  },
  {
    index: "03",
    slug: "design-system",
    title: "The design system worked when decisions stopped living in people’s heads.",
    short:
      "My cleaner token model made collaboration harder, so I threw it out.",
    description:
      "Building a design system inside a moving enterprise banking product: choosing adoption over theoretical purity, and turning consistency into operating infrastructure.",
    meta: "Design Systems · Governance",
    illustration: "designsystem",
  },
  {
    index: "04",
    slug: "error-messages",
    title: "Users knew something had failed. They didn't know what to do next.",
    short:
      "~2,000 messages announced a failure and then stopped. Three rules fixed the pattern.",
    description:
      "Auditing ~2,000 error messages on a corporate banking platform and turning them into a reusable framework: state the problem, give the next action, remove the blame.",
    meta: "UX Writing · Content Systems",
    illustration: "errorcopy",
  },
];

export function getCaseStudy(slug: string) {
  return caseStudies.find((c) => c.slug === slug);
}
