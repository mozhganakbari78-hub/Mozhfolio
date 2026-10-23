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
    title: "Answers that appear while users describe their problem",
    short:
      "Asked for a bigger FAQ, ~1,000 tickets showed 4 in 5 never needed a person. I moved the answers into the flow.",
    description:
      "Reframing an FAQ redesign into a guidance problem inside a live corporate banking platform, built on an analysis of ~1,000 support tickets.",
    meta: "Problem Framing · Content Architecture",
    illustration: "support",
  },
  {
    index: "02",
    slug: "batch-transfer",
    title: "Batch payments where one bad row no longer blocks the file",
    short:
      "Row-level failure and recipient checks before approval, shipped to branches on a fixed deadline.",
    description:
      "Redesigning an offline batch-payment workflow for bank branches: isolating operational failure, surfacing financial risk before money moves, and sequencing the release under a fixed deadline.",
    meta: "Workflow Design · Risk & Validation",
    illustration: "batch",
  },
  {
    index: "03",
    slug: "design-system",
    title: "A design system engineers actually adopted",
    short:
      "Developer questions to design dropped from ~8 to ~3 a day after I threw out my own token model.",
    description:
      "Building a design system inside a moving enterprise banking product: choosing adoption over theoretical purity, and turning consistency into operating infrastructure.",
    meta: "Design Systems · Governance",
    illustration: "designsystem",
  },
  {
    index: "04",
    slug: "error-messages",
    title: "Rewriting ~2,000 error messages so users know what to do next",
    short:
      "Three rules became the platform standard; \"what do I do now?\" tickets fell from 6 to 3 in 10.",
    description:
      "Auditing ~2,000 error messages on a corporate banking platform and turning them into a reusable framework: state the problem, give the next action, remove the blame.",
    meta: "UX Writing · Content Systems",
    illustration: "errorcopy",
  },
];

export function getCaseStudy(slug: string) {
  return caseStudies.find((c) => c.slug === slug);
}
