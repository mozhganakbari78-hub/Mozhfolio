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
  illustration: "support" | "batch" | "designsystem" | "errorcopy" | "rules" | "bots";
};

export const caseStudies: CaseStudy[] = [
  {
    index: "01",
    slug: "iot-rule-builder",
    title: "Greenhouse rules in one sentence",
    short:
      "Operators who switched fans and heaters by hand after every alert now build rules alone: every rule reads as one sentence, built from live sensor readings and ready-made conditions.",
    description:
      "Designing an IoT rule builder for non-technical greenhouse operators: if-then rules in plain language, choices grounded in live sensor data, and scheduling that stays hidden until it's needed.",
    meta: "IoT · Logic Design",
    illustration: "rules",
  },
  {
    index: "02",
    slug: "design-system",
    title: "A design system engineers used",
    short:
      "Built from scratch, renamed to match the code, then split product from theme to carry four products. Developer questions dropped from ~8 to ~3 a day.",
    description:
      "Building a design system on Ant Design for a corporate banking platform, renaming it to match the code, then growing it to four products by separating product identity from theme.",
    meta: "Design Systems · Governance",
    illustration: "designsystem",
  },
  {
    index: "03",
    slug: "error-messages",
    title: "Errors that say what's next",
    short:
      "Three rules became the platform standard; \"what do I do now?\" tickets fell from 6 to 3 in 10.",
    description:
      "Auditing ~2,000 error messages on a corporate banking platform and turning them into a reusable framework: state the problem, give the next action, remove the blame.",
    meta: "UX Writing · Content Systems",
    illustration: "errorcopy",
  },
  {
    index: "04",
    slug: "reducing-support-friction",
    title: "Answers before the ticket",
    short:
      "Asked to refresh the FAQ, I first asked whether anyone reads it. The answers now come to users while they write a ticket.",
    description:
      "Reframing an FAQ redesign into a guidance problem inside a live corporate banking platform, built on an analysis of ~1,000 support tickets.",
    meta: "Problem Framing · Content Architecture",
    illustration: "support",
  },
  {
    index: "05",
    slug: "batch-transfer",
    title: "One bad row, not a failed file",
    short:
      "For companies that won't pay online: row-level checks and account-ownership verification, piloted in branches.",
    description:
      "Redesigning an offline batch-payment workflow for bank branches: isolating operational failure, surfacing financial risk before money moves, and sequencing the release under a fixed deadline.",
    meta: "Workflow Design · Risk & Validation",
    illustration: "batch",
  },
];

export function getCaseStudy(slug: string) {
  return caseStudies.find((c) => c.slug === slug);
}
