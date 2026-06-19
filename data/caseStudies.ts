export type CaseStudy = {
  index: string;
  title: string;
  description: string;
  tags: string[];
  /** Path to the PDF inside /public. Opens in a new tab. */
  pdf: string;
  meta: string;
};

export const caseStudies: CaseStudy[] = [
  {
    index: "01",
    title: "Reducing Support Friction",
    description:
      "A data-driven support redesign for one of Iran's largest enterprise banking platforms — 400,000 users across 180,000 organizations. I read 734 tickets by hand and rebuilt the architecture around what was actually self-serviceable.",
    tags: ["Content Architecture", "Enterprise", "Banking"],
    pdf: "/case-studies/reducing-support-friction.pdf",
    meta: "Product Design · Content Strategy",
  },
  {
    index: "02",
    title: "Batch Transfer for Offline Clients",
    description:
      "A forced-timeline redesign that survived because the system underneath it was built to. The legacy tool failed an entire 200-row payment batch if one row broke — I rebuilt it to validate each row independently.",
    tags: ["Design System", "Banking", "Enterprise"],
    pdf: "/case-studies/batch-transfer.pdf",
    meta: "Product Design · Design System",
  },
  {
    index: "03",
    title: "Design System on a Live Platform",
    description:
      "Building a shared system on top of a live product — 90+ screens, permission-heavy, built on Ant Design, with no pause to rebuild. Cut frontend interruptions from 8–9 per day to 3–4.",
    tags: ["Design System", "Tokens", "Ant Design"],
    pdf: "/case-studies/design-system.pdf",
    meta: "Design System · Enterprise Banking",
  },
];
