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
      "The brief was “improve the FAQ.” I reviewed two years of support tickets, found the real problem was structural, and used the evidence to expand the project into a unified support experience.",
    description:
      "How I reframed an FAQ redesign into a structural change to how users reach support inside a live corporate banking platform, built on an analysis of ~1,000 tickets across two years.",
    meta: "Problem Framing · Content Architecture",
    illustration: "support",
  },
  {
    index: "02",
    slug: "batch-transfer",
    title: "A bad row should fail alone. A wrong transfer should be caught early.",
    short:
      "One invalid row could reset an entire payroll batch, and a mistyped account could pay the wrong person silently. Under a fixed deadline, I changed the unit of failure and made recipient risk visible before approval.",
    description:
      "Redesigning an offline batch-payment workflow for bank branches: isolating operational failure, surfacing financial risk before money moves, and sequencing the release under a fixed deadline.",
    meta: "Workflow Design · Risk & Validation",
    illustration: "batch",
  },
  {
    index: "03",
    slug: "design-system",
    title: "The design system worked when the team stopped asking what to use.",
    short:
      "90+ live screens, an inherited Ant Design theme, and no system engineer. My cleaner token model made collaboration harder, so I replaced it with the frontend team’s language instead of defending it.",
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
      "~2,000 error messages told people a transaction had failed, then stopped. Some blamed them for rules they were never shown. I audited the set, defined three rules, and the framework became the platform standard.",
    description:
      "Auditing ~2,000 error messages on a corporate banking platform and turning them into a reusable framework: state the problem, give the next action, remove the blame.",
    meta: "UX Writing · Content Systems",
    illustration: "errorcopy",
  },
];

export function getCaseStudy(slug: string) {
  return caseStudies.find((c) => c.slug === slug);
}
