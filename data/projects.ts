export type Project = {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  year: string;
  tags: string[];
  description: string;
  problem: string;
  outcome: string;
  color: string;
  index: number;
  caseStudy: CaseStudySection[];
};

export type CaseStudySection = {
  heading: string;
  body: string;
  type?: "quote" | "highlight" | "default";
};

export const projects: Project[] = [
  {
    id: "support-friction",
    title: "Reducing Support Friction",
    subtitle: "A data-driven support redesign for an enterprise banking platform.",
    category: "Product Design · Content Strategy · B2B",
    year: "2026",
    tags: ["Content Architecture", "B2B", "Enterprise", "Banking"],
    description:
      "One of Iran's largest enterprise banking platforms — 400,000 users across 180,000 organizations. I redesigned the support system by reading 734 tickets manually and building an architecture around what was actually self-serviceable.",
    problem:
      "~45% of support tickets had static, knowable answers. The old FAQ was organized by feature name instead of user problem, had no search, and lived on a separate page from the ticket form.",
    outcome:
      "Unified FAQ and ticket form on one page. Real-time FAQ filtering beside the ticket input. Keyword tagging that bridges user language and product language.",
    color: "#e85d26",
    index: 0,
    caseStudy: [
      {
        heading: "Context",
        body: "One of Iran's largest enterprise banking platforms — 400,000 users across 180,000 organizations. Nobody comes here to browse. They come to move money, issue cheques, run batch payments. When something is unclear, it doesn't cause minor friction. It blocks a workflow and turns into a support ticket.",
      },
      {
        heading: "Problem",
        body: "I pulled two years of feedback from the back-office admin panel and read all 734 entries — about 30 a month. A pattern showed up fast: a large share of tickets had static, knowable answers. No account lookup, no agent needed. People just didn't know where to look.",
      },
      {
        heading: "~45% were FAQ-addressable",
        body: "I classified every entry by one rule: can the user solve this alone with a static answer, or does it need an agent? That split is the spine of the whole project.",
        type: "highlight",
      },
      {
        heading: "Key Decisions",
        body: "01 · Merge FAQ and ticket into one page — Two surfaces forced a choice users couldn't yet make.\n\n02 · Keyword search with per-question tagging — Someone searching 'how to add a user' won't type the product's exact term.\n\n03 · Real-time FAQ filtering beside the ticket field — As users type their ticket message, matching FAQ answers surface live on the same page.",
      },
      {
        heading: "Reflection",
        body: "Support content is part of the product, not adjacent to it. Unclear guidance on a working feature produces the same behavior as a broken one — both end in a ticket. Aggregate numbers hide that. Reading 734 entries by hand was the only way to tell a content gap from an access issue from an actual bug.",
        type: "quote",
      },
    ],
  },
  {
    id: "batch-transfer",
    title: "Batch Transfer for Offline Clients",
    subtitle: "A forced-timeline redesign that survived because the system underneath it was built to.",
    category: "Product Design · Design System · B2B Banking",
    year: "2026",
    tags: ["Design System", "B2B", "Banking", "Enterprise"],
    description:
      "Corporate clients who won't transact online bring physical cheques and an Excel file into a branch. The legacy tool rejected an entire batch if one row failed. I redesigned it to validate each row independently.",
    problem:
      "The legacy system processed an uploaded payment file as one block. A single bad row in a batch of 200 failed the entire file — no validation upfront, no partial success, just a failed afternoon.",
    outcome:
      "Per-row validation with errors surfaced before submission. If one row fails, only that row fails. Launched to a single branch first for controlled rollout.",
    color: "#2563eb",
    index: 1,
    caseStudy: [
      {
        heading: "Context",
        body: "Some corporate clients won't transact online — security policy, internal rules, or institutional caution. So they do it the old way: bring physical cheques and an Excel file of payments into a branch, and a bank employee keys it all in.",
      },
      {
        heading: "The Problem",
        body: "The legacy system processed an uploaded payment file as one block. If a single transaction in a batch of 200 failed — wrong account number, bad IBAN — the entire file was rejected. The employee wouldn't find out until the end. Then they'd hunt for the broken row in Excel, fix it, and re-upload all 200 from scratch.",
      },
      {
        heading: "The Constraint That Shaped Everything",
        body: "The timeline was forced. What let us move fast was something I'd already built: the design system from a previous project. I'd designed it to cover more than its original product — shared components, tokens, and patterns meant to be reused across the bank's tools. Systems work is invisible until the moment it saves you. This was that moment.",
        type: "highlight",
      },
      {
        heading: "The Core Decision: Kill All-or-Nothing",
        body: "Every row is validated and checked independently. If one row has a problem, only that row fails. The other 199 go through. Errors surface before submission, not after. This turns a failed batch from 'start over' into 'fix one line.'",
      },
      {
        heading: "Reflection",
        body: "The lesson here isn't about this feature. It's about the system underneath it. A forced timeline is usually where quality dies. This one didn't, and the reason was a decision I'd made on an earlier project — to build the design system for reuse across products.",
        type: "quote",
      },
    ],
  },
  {
    id: "design-system",
    title: "Design System on a Live Enterprise Platform",
    subtitle: "Building a shared system on top of a live product with 90+ screens and no pause to rebuild.",
    category: "Design System · Enterprise Banking",
    year: "2025",
    tags: ["Design System", "Tokens", "Enterprise", "Ant Design"],
    description:
      "90+ screens across a complex, permission-heavy product. Frontend built on Ant Design. Two designers total. I owned the design system while simultaneously contributing to product design — and reduced frontend interruptions from 8–9 per day to 3–4.",
    problem:
      "Different spacing values, component states that didn't match across pages, color usage that drifted screen to screen. The frontend team was raising it constantly — roughly 8–9 questions a day: 'why does this look different here?'",
    outcome:
      "Frontend interruptions dropped from 8–9 per day to 3–4, and continued decreasing as coverage grew. The PO saw visible consistency improvement across screens.",
    color: "#7c3aed",
    index: 2,
    caseStudy: [
      {
        heading: "Context",
        body: "Enterprise corporate banking platform. Already in production when I joined. 90+ screens across a complex, permission-heavy product. Frontend was built on Ant Design — a business decision made before I was involved, not negotiable.",
      },
      {
        heading: "The Problem Reframe",
        body: "Designers not having a shared system is a design problem. Developers stopping to ask design questions 8–9 times a day is a product velocity problem. That reframe is what made the case for investment.",
        type: "highlight",
      },
      {
        heading: "Key Decision — Token Naming",
        body: "I started with fully semantic token naming. The problem surfaced quickly: the frontend team's existing theme used a different naming structure. Two teams, same values, different names, constant translation on every handoff.\n\nI chose alignment over semantic purity. A design system's value is in adoption, not in naming correctness. A perfectly semantic system that creates daily friction doesn't work.",
      },
      {
        heading: "Governance",
        body: "Any component requiring customization beyond Ant Design's defaults followed a consistent process: identify the need, bring it to the frontend tech lead, estimate effort, then decide together whether it fit the current sprint or went into the backlog. That kept the system from drifting.",
      },
      {
        heading: "Outcome",
        body: "Frontend interruptions dropped from 8–9 per day to 3–4. The questions shifted in nature too: from 'why does this look different' to 'we need a new component for this case' — which is a different, more productive kind of conversation.",
        type: "highlight",
      },
    ],
  },
];
