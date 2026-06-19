export type CaseStudyBlock =
  | { type: "section"; label: string; heading: string; body: string[] }
  | { type: "highlight"; label: string; heading: string; body: string[] }
  | { type: "quote"; body: string }
  | { type: "list"; label: string; heading: string; items: { title: string; body: string }[] }
  | { type: "metrics"; items: { value: string; label: string }[] }
  | { type: "image"; src: string; caption?: string };

export type Project = {
  id: string;
  index: string;
  title: string;
  subtitle: string;
  category: string;
  year: string;
  role: string;
  team: string;
  tags: string[];
  description: string;
  problem: string;
  outcome: string;
  color: string;
  cover?: string;
  heroStat: { value: string; label: string };
  caseStudy: CaseStudyBlock[];
};

export const projects: Project[] = [
  {
    id: "support-friction",
    index: "01",
    title: "Reducing Support Friction",
    subtitle: "A data-driven support redesign for an enterprise banking platform.",
    category: "Product Design · Content Strategy",
    year: "2026",
    role: "Feedback analysis & content architecture",
    team: "2-person project",
    tags: ["Content Architecture", "B2B", "Enterprise", "Banking"],
    description:
      "One of Iran's largest enterprise banking platforms — 400,000 users across 180,000 organizations. I redesigned the support system by reading 734 tickets manually and building an architecture around what was actually self-serviceable.",
    problem:
      "~45% of support tickets had static, knowable answers. The old FAQ was organized by feature name instead of user problem, had no search, and lived on a separate page from the ticket form.",
    outcome:
      "Unified FAQ and ticket form on one page with real-time FAQ filtering beside the ticket input.",
    color: "#0039ff",
    cover: "/projects/support-friction.png",
    heroStat: { value: "734", label: "tickets read by hand" },
    caseStudy: [
      {
        type: "image",
        src: "/projects/support-friction.png",
        caption: "Unified support experience — combining intelligent FAQ and ticketing in one seamless flow.",
      },
      {
        type: "section",
        label: "Context",
        heading: "Nobody comes here to browse.",
        body: [
          "One of Iran's largest enterprise banking platforms — 400,000 users across 180,000 organizations. They come to move money, issue cheques, run batch payments.",
          "When something is unclear, it doesn't cause minor friction. It blocks a workflow and turns into a support ticket. The support system split help into two pages: an FAQ, and a ticket form. To use it, you had to know which one you needed before you understood your own problem well enough to choose. Most people gave up and filed a ticket.",
        ],
      },
      {
        type: "section",
        label: "Problem",
        heading: "A pattern showed up fast.",
        body: [
          "I pulled two years of feedback from the back-office admin panel and read all 734 entries — about 30 a month. A large share of tickets had static, knowable answers. No account lookup, no agent needed. People just didn't know where to look.",
          "The old FAQ wasn't catching any of it. It was organized by feature name instead of user problem, had no search, and lived on a separate page from the ticket form. The question I started with: how much of this volume is actually self-serviceable — and what would the content need to look like to work?",
        ],
      },
      {
        type: "highlight",
        label: "Feedback Analysis",
        heading: "One rule, every entry.",
        body: [
          "I classified every entry by one rule: can the user solve this alone with a static answer, or does it need an agent? ~45% were FAQ-addressable. ~55% needed real support. That split is the spine of the whole project.",
          "Three high-volume categories were mixed; I split those by reading the actual entries, so the 45% is an informed estimate, not a clean cut.",
        ],
      },
      {
        type: "metrics",
        items: [
          { value: "~45%", label: "FAQ-addressable" },
          { value: "~55%", label: "needed real support" },
          { value: "150+", label: "questions to organize" },
        ],
      },
      {
        type: "section",
        label: "My Role",
        heading: "Two-person project. The analysis and content architecture were mine.",
        body: [
          "I read the ~734 entries manually and logged each one on a FigJam sticky note, grouped by topic. Manual, because the call — is this within the user's control, or does it need account access? — depended on context a keyword filter would miss.",
          "The recurring clusters became the category structure directly. And I wrote the FAQ questions in the user's words from the ticket text, not the product team's feature names.",
        ],
      },
      {
        type: "list",
        label: "Constraints",
        heading: "Three limits I designed around.",
        items: [
          { title: "Locked taxonomy", body: "The old categories were tied to ticket history in the database. Renaming them would silently break filtering for users tracking active cases — a real regression at this scale." },
          { title: "Search at 150 questions", body: "Browsing alone breaks down. Plain string-matching wasn't enough either — user language and product language rarely match." },
          { title: "Pre-launch", body: "The redesign sits in a test environment. No live data yet — which shaped how I framed every success metric." },
        ],
      },
      {
        type: "list",
        label: "Key Decisions",
        heading: "Four calls that shaped the redesign.",
        items: [
          { title: "Merge FAQ and ticket into one page", body: "Two surfaces forced a choice users couldn't yet make. I put both on one page, ticket CTA always visible — not buried under the FAQ." },
          { title: "Keyword search with per-question tagging", body: "Someone searching 'how to add a user' won't type the product's exact term. Tags bridge user language and product language." },
          { title: "Preserve legacy categories, migrate where possible", body: "A full rebuild would break filtering for 400k users. I migrated questions where the mapping was clean and added an 'Other' catch-all for the rest — knowingly trading taxonomic purity for stability." },
          { title: "Real-time FAQ filtering beside the ticket field", body: "Users filing a ticket are mid-task and under pressure. As they type their ticket message, matching FAQ answers surface live on the same page — no extra step, no decision." },
        ],
      },
      {
        type: "list",
        label: "Process",
        heading: "How the work actually ran.",
        items: [
          { title: "Manual review", body: "734 entries read individually, mapped on FigJam stickies for spatial pattern-finding." },
          { title: "Frequency clustering", body: "Recurring themes grouped by volume; clusters drove the categories, not the other way around." },
          { title: "Wireframe-first", body: "Structure locked with stakeholders before any visual polish, so objections surfaced early instead of as rework." },
          { title: "Annotated handoff", body: "Interaction states, edge cases, and tagging logic documented so a developer wouldn't need to ask." },
        ],
      },
      {
        type: "section",
        label: "Outcome",
        heading: "In test, not launched — so these are targets, not wins.",
        body: [
          "These are pre-launch targets tied to the analysis, not measured results. Ticket volume — baseline is ~30 addressable tickets/month (the 45% the analysis flagged); the first 60 days set a real conversion rate. Zero-result searches — search is new; the first 30 days set the baseline. FAQ-to-ticket conversion — wasn't trackable before; now it is.",
          "I'm calling these out as targets, not wins. There's no live data yet, and pretending otherwise wouldn't be honest.",
        ],
      },
      {
        type: "quote",
        body: "Support content is part of the product, not adjacent to it. Unclear guidance on a working feature produces the same behavior as a broken one — both end in a ticket. Reading 734 entries by hand was the only way to tell a content gap from an access issue from an actual bug — three problems that look identical in a dashboard and need completely different fixes.",
      },
      {
        type: "section",
        label: "Reflection",
        heading: "What I'd do differently.",
        body: [
          "The taxonomy I inherited wasn't a bad decision. It was a reasonable one made before scale made its cost visible. Worth remembering the next time I make a structural call that someone inherits later.",
          "The keyword tagging shipped without an owner for upkeep — who updates tags when a feature is renamed? I flagged it but didn't resolve it before handoff. Next time that gets decided up front, not left as an operational afterthought.",
        ],
      },
    ],
  },
  {
    id: "batch-transfer",
    index: "02",
    title: "Batch Transfer for Offline Clients",
    subtitle: "A forced-timeline redesign that survived because the system underneath it was built to.",
    category: "Product Design · Design System",
    year: "2026",
    role: "Lead designer — wireframes, prototype, UI",
    team: "2-person project",
    tags: ["Design System", "B2B", "Banking", "Enterprise"],
    description:
      "Corporate clients who won't transact online bring physical cheques and an Excel file into a branch. The legacy tool rejected an entire batch if one row failed. I redesigned it to validate each row independently.",
    problem:
      "The legacy system processed an uploaded payment file as one block. A single bad row in a batch of 200 failed the entire file — no validation upfront, no partial success.",
    outcome:
      "Per-row validation with errors surfaced before submission. If one row fails, only that row fails. Launched to a single branch first.",
    color: "#0039ff",
    heroStat: { value: "1 of 200", label: "rows could no longer kill a batch" },
    caseStudy: [
      {
        type: "section",
        label: "Context",
        heading: "Some clients won't transact online.",
        body: [
          "Security policy, internal rules, or institutional caution. So they do it the old way: bring physical cheques and an Excel file of payments into a branch, and a bank employee keys it all in.",
          "The bank already had a legacy tool for this. Nobody liked it. It was slow, error-prone, and built in a way that turned a single bad row into a failed afternoon. We were asked to replace it. On a forced timeline.",
        ],
      },
      {
        type: "section",
        label: "The Problem",
        heading: "One typo, an afternoon lost.",
        body: [
          "The legacy system processed an uploaded payment file as one block. If a single transaction in a batch of 200 failed — wrong account number, bad IBAN — the entire file was rejected.",
          "The employee wouldn't find out until the end. Then they'd hunt for the broken row in Excel, fix it, and re-upload all 200 from scratch. No validation upfront. No way to verify recipients. No feedback until it was too late to be useful.",
        ],
      },
      {
        type: "highlight",
        label: "The Constraint That Shaped Everything",
        heading: "The timeline was forced.",
        body: [
          "Normally that's where a project cuts corners and ships something fragile. What let us move fast was something I'd already built: a design system from a previous project — shared components, tokens, and patterns meant to be reused across the bank's tools.",
          "When this landed, I didn't start from zero. The speed didn't come from skipping work. It came from work I'd done earlier, on purpose. Systems work is invisible until the moment it saves you. This was that moment.",
        ],
      },
      {
        type: "list",
        label: "The Core Decision",
        heading: "Kill all-or-nothing.",
        items: [
          { title: "Every row validated independently", body: "Each transaction gets verified — including recipient account lookup — on its own. If one row has a problem, only that row fails. The other 199 go through." },
          { title: "Errors surface before submission", body: "Before the batch is finalized, the employee sees exactly which rows have problems and why. They know precisely what to fix, instead of searching blind through a rejected file." },
        ],
      },
      {
        type: "section",
        label: "Process, Honestly",
        heading: "The trade-off I won't overstate.",
        body: [
          "Because the timeline was forced, we did not run full usability testing the way we'd have liked. That was a real trade-off, not a step we forgot.",
          "Instead: research first, in person — branch visits and direct interviews. Wireframe and prototype for sign-off, so disagreements happened on paper, not in code. Then a limited rollout to a single branch — real employees on real batches. The limited rollout was the honest substitute for the testing we couldn't fit.",
        ],
      },
      {
        type: "quote",
        body: "A forced timeline is usually where quality dies. This one didn't, and the reason was a decision I'd made on an earlier project — to build the design system for reuse across products, not just the one in front of me.",
      },
    ],
  },
  {
    id: "design-system",
    index: "03",
    title: "Design System on a Live Platform",
    subtitle: "Building a shared system on top of a live product with 90+ screens and no pause to rebuild.",
    category: "Design System · Enterprise Banking",
    year: "2025",
    role: "Full ownership — build, maintenance, evolution",
    team: "2 designers, no DS engineer",
    tags: ["Design System", "Tokens", "Enterprise", "Ant Design"],
    description:
      "90+ screens across a complex, permission-heavy product built on Ant Design. I owned the design system while contributing to product design — and reduced frontend interruptions from 8–9 per day to 3–4.",
    problem:
      "Different spacing values, mismatched component states, drifting color usage. The frontend team was raising it 8–9 times a day: 'why does this look different here?'",
    outcome:
      "Frontend interruptions dropped from 8–9 per day to 3–4 and kept falling. The PO saw visible consistency improvement across screens.",
    color: "#0039ff",
    heroStat: { value: "8–9 → 3–4", label: "daily frontend interruptions" },
    caseStudy: [
      {
        type: "section",
        label: "Context",
        heading: "Already in production when I joined.",
        body: [
          "Enterprise corporate banking platform. 90+ screens across a complex, permission-heavy product used by institutional users. Frontend was built on Ant Design — a business decision made before I was involved, not negotiable.",
          "The frontend team had also built a custom theme in code from day one, with their own naming structure in place. Two designers total. I owned the design system while simultaneously contributing to product design. No dedicated DS engineer. No greenfield.",
        ],
      },
      {
        type: "highlight",
        label: "The Reframe",
        heading: "From design problem to velocity problem.",
        body: [
          "The frontend team was raising inconsistency constantly — roughly 8 to 9 times a day: 'why does this look different here?' or 'what's the correct state for this component?'",
          "Designers not having a shared system is a design problem. Developers stopping to ask design questions 8–9 times a day is a product velocity problem. That reframe is what made the case for investment.",
        ],
      },
      {
        type: "section",
        label: "Key Decision — Token Naming",
        heading: "Adoption over correctness.",
        body: [
          "I started with fully semantic token naming — role-based, intent-driven. The problem surfaced quickly: the frontend team's existing theme used a different naming structure. Two teams, same values, different names, constant translation on every handoff.",
          "I chose to align token naming to their existing structure. The reasoning was straightforward: a design system's value is in adoption, not in naming correctness. A perfectly semantic system that creates daily friction doesn't work. The trade-off was real and I documented it — acknowledged debt, not an oversight.",
        ],
      },
      {
        type: "list",
        label: "Governance",
        heading: "A coordination process I designed.",
        items: [
          { title: "Identify the need", body: "Any component requiring customization beyond Ant Design's defaults started with me flagging the gap." },
          { title: "Estimate with the tech lead", body: "I'd bring it to the frontend tech lead, estimate effort, then decide together — current sprint or backlog as documented debt." },
          { title: "No unilateral visual decisions", body: "No component changed in the codebase without that conversation. It kept the system from drifting and kept engineers from making visual calls alone." },
        ],
      },
      {
        type: "quote",
        body: "The questions shifted in nature too: from 'why does this look different' to 'we need a new component for this case' — which is a different, more productive kind of conversation.",
      },
    ],
  },
];

export const getProject = (id: string) => projects.find((p) => p.id === id);
