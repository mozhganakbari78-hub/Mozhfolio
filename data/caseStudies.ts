// Case studies render as full, editorial pages inside the site (no PDFs).
// Content is lifted from the original case study documents, then arranged into
// a varied block vocabulary so each page has rhythm and pulls the reader down.

export type Block =
  // Oversized opening line — the hook.
  | { type: "lead"; text: string }
  // Big-number callout row.
  | { type: "stats"; items: { value: string; label: string }[] }
  // Standard prose section with a small kicker.
  | { type: "section"; kicker?: string; heading: string; body: string[] }
  // Label on the left, prose on the right (editorial split).
  | { type: "split"; kicker?: string; heading: string; body: string[] }
  // Grid of cards.
  | { type: "cards"; kicker?: string; heading?: string; items: { title: string; text: string }[] }
  // Numbered vertical steps.
  | { type: "steps"; kicker?: string; heading: string; items: { title: string; text: string }[] }
  // Before / after contrast.
  | { type: "compare"; kicker?: string; heading: string; before: { title: string; text: string }; after: { title: string; text: string } }
  // Simple bulleted list.
  | { type: "list"; kicker?: string; heading: string; intro?: string; items: string[] }
  // Data table.
  | { type: "table"; kicker?: string; heading: string; columns: string[]; rows: string[][] }
  // Pull quote.
  | { type: "quote"; text: string; attribution?: string };

export type CaseStudy = {
  index: string;
  slug: string;
  title: string;
  description: string;
  tags: string[];
  meta: string;
  facts: { label: string; value: string }[];
  blocks: Block[];
};

export const caseStudies: CaseStudy[] = [
  {
    index: "01",
    slug: "reducing-support-friction",
    title: "From Support Feedback to Self-Service Knowledge",
    description:
      "A data-driven FAQ redesign for a corporate banking platform, built from 1,345 real user feedback entries.",
    tags: ["UX Research", "Information Architecture", "Enterprise Banking"],
    meta: "Product Design · Content Strategy",
    facts: [
      { label: "Role", value: "UX / Product Designer" },
      { label: "Product", value: "BAM Sazmani — corporate banking" },
      { label: "Dataset", value: "1,345 entries · 902 user IDs" },
      { label: "Range", value: "Aug 2020 – Oct 2025" },
    ],
    blocks: [
      {
        type: "lead",
        text: "Most support tickets weren't bugs. They were the same questions, asked over and over, by people who simply couldn't find the answer. So I stopped treating feedback as a backlog — and started reading it as research.",
      },
      {
        type: "stats",
        items: [
          { value: "1,345", label: "feedback entries analyzed" },
          { value: "902", label: "unique organization / user IDs" },
          { value: "72.1%", label: "of all entries in the top 5 topics" },
          { value: "14", label: "recurring feedback categories" },
        ],
      },
      {
        type: "section",
        kicker: "01 · Context",
        heading: "A platform that outgrew its FAQ",
        body: [
          "BAM Sazmani is a web-based corporate banking platform where organizational users manage transfers, account access, checks, reports, user permissions, and day-to-day banking tasks.",
          "After users migrated from the older system to the new platform, many were still learning how to complete common tasks. The feedback channel quietly became overloaded with the same questions — while the existing FAQ stayed limited, outdated, and impossible to search the way people actually phrased their problems.",
        ],
      },
      {
        type: "split",
        kicker: "02 · Problem",
        heading: "Support was carrying two loads at once",
        body: [
          "Between Aug 2020 and Oct 2025, the channel accumulated 1,345 entries from 902 organizations. When I read them, a pattern surfaced fast: most weren't technical failures. They were repeated questions about checks, transfers, account visibility, user access, reports, and payroll.",
          "The deeper problem wasn't that the FAQ was old. It was that users depended on support because knowledge wasn't discoverable, searchable, or written in their language.",
        ],
      },
      {
        type: "table",
        kicker: "03 · The data",
        heading: "Where the volume actually lived",
        columns: ["#", "Category", "Count", "Share"],
        rows: [
          ["1", "Checks / Sayad", "277", "20.6%"],
          ["2", "Other / General Guidance", "250", "18.6%"],
          ["3", "Transfers", "166", "12.3%"],
          ["4", "Accounts / Statements", "161", "12.0%"],
          ["5", "Basic Information", "116", "8.6%"],
          ["6", "General Feedback", "86", "6.4%"],
          ["7", "Batch Transfer", "73", "5.4%"],
          ["8", "User Access", "59", "4.4%"],
          ["9", "Reports", "58", "4.3%"],
          ["10", "Bills", "31", "2.3%"],
          ["11", "Group Payments", "27", "2.0%"],
          ["12", "Dashboard", "20", "1.5%"],
          ["13", "Payroll", "14", "1.0%"],
          ["14", "Analytics Reports", "7", "0.5%"],
        ],
      },
      {
        type: "quote",
        text: "The support channel was carrying two different loads at the same time: real support issues and preventable knowledge gaps.",
      },
      {
        type: "cards",
        kicker: "04 · Approach",
        heading: "I read the feedback in three passes",
        items: [
          { title: "Frequency", text: "Which topics appeared most often? Five categories carried 72% of everything." },
          { title: "Intent", text: "What was the user actually trying to do — not which module they happened to mention?" },
          { title: "Triage", text: "Should this become FAQ content, a product fix, or stay a support-required issue?" },
        ],
      },
      {
        type: "split",
        kicker: "05 · Insight",
        heading: "More FAQ items wasn't the answer",
        body: [
          "Users weren't blocked because the system was broken. They were blocked because the answer wasn't easy to find, wasn't searchable, or wasn't written the way they spoke.",
          "So the opportunity wasn't to add more entries. It was to redesign the FAQ into a self-service knowledge layer — structured around tasks, tolerant of different phrasings, and honest about when a human is actually needed.",
        ],
      },
      {
        type: "cards",
        kicker: "06 · Decisions",
        heading: "Three calls that shaped the build",
        items: [
          { title: "FAQ before chatbot", text: "Stable, repeated questions deserve a clean knowledge base first. Automation can come once the content is trustworthy." },
          { title: "User language over taxonomy", text: "People say “my account isn't visible,” not the module name. Navigation followed their words." },
          { title: "Search + browse", text: "Some users know exactly what they want; others need to explore. The design supported both." },
        ],
      },
      {
        type: "list",
        kicker: "07 · Goal",
        heading: "What the redesigned FAQ had to do",
        items: [
          "Organize content around user tasks, not internal modules",
          "Support search across keywords and alternative phrasings",
          "Cover the highest-frequency topics first",
          "Separate guidance questions from technical issues",
          "Help users know when they can self-serve and when to ask",
          "Leave a measurable foundation for post-launch improvement",
        ],
      },
      {
        type: "section",
        kicker: "08 · Outcome",
        heading: "From support noise to product knowledge",
        body: [
          "The project turned scattered feedback into a structured, prioritized knowledge layer: a clear picture of recurring problems, a content backlog ranked by real volume, an intent-based structure, a keyword strategy for search, and a measurement plan ready for launch.",
          "Because it hadn't shipped to production yet, I framed impact honestly — as a validation framework, not a victory lap. The metrics were defined; the proof comes next.",
        ],
      },
    ],
  },
  {
    index: "02",
    slug: "batch-transfer",
    title: "Batch Transfer for Offline Corporate Clients",
    description:
      "A forced-timeline redesign that shipped because the system underneath it had already been built for reuse.",
    tags: ["Product Design", "Design System", "B2B Banking"],
    meta: "Product Design · Design System",
    facts: [
      { label: "Role", value: "Product Design — flow, UI, prototype" },
      { label: "Domain", value: "B2B Banking · 2026" },
      { label: "Team", value: "Two designers" },
      { label: "Constraint", value: "Fixed, non-negotiable deadline" },
    ],
    blocks: [
      {
        type: "lead",
        text: "One wrong account number in a batch of 200 could blow up an employee's entire afternoon. The fix wasn't a prettier screen — it was changing what failure even means.",
      },
      {
        type: "stats",
        items: [
          { value: "200", label: "rows in a single payment batch" },
          { value: "1 typo", label: "could reject the whole file" },
          { value: "Fixed", label: "hard deadline, no room to slip" },
          { value: "Row-level", label: "validation in the redesign" },
        ],
      },
      {
        type: "section",
        kicker: "01 · Context",
        heading: "The clients who never came online",
        body: [
          "Some corporate clients simply wouldn't transact digitally — security policy, internal approval rules, institutional caution. They kept bringing physical cheques and an Excel payment file into a branch, where an employee processed the batch by hand through an internal tool.",
          "The bank already had a legacy tool for this. But it created friction exactly where reliability mattered most: slow, error-prone, and unforgiving. We were asked to replace it — on a fixed timeline.",
        ],
      },
      {
        type: "compare",
        kicker: "02 · The problem",
        heading: "All-or-nothing was the real bug",
        before: {
          title: "Legacy: one block",
          text: "The file was treated as a single object. One bad row — wrong IBAN, unverifiable recipient — failed all 200. The employee only found out at the very end, then hunted through Excel, fixed it, and re-uploaded everything.",
        },
        after: {
          title: "Redesign: one row",
          text: "Each transaction is validated independently before submission, with recipient checks where possible and a clear review state. A mistake becomes one row to fix — not a reason to restart the afternoon.",
        },
      },
      {
        type: "split",
        kicker: "03 · My role",
        heading: "Research together, design owned",
        body: [
          "I worked with one other designer. We ran the research together — visiting branches in person, watching employees process real files under real time pressure.",
          "After research, I owned the product design end to end: the flow, the wireframes, the stakeholder prototype, and the final UI. The interaction and interface decisions for the batch experience were mine.",
        ],
      },
      {
        type: "quote",
        text: "The old system turned one mistake into a failed batch. The new system turns one mistake into one row that needs attention.",
      },
      {
        type: "section",
        kicker: "04 · The constraint",
        heading: "Speed came from reuse, not shortcuts",
        body: [
          "The deadline was hard, which ruled out the ideal path of research → design → full usability testing → iteration → launch. The usual risk is that quality gets traded for speed.",
          "Here, speed came from somewhere else. I'd already built a design system for another banking product — intentionally beyond its immediate need, with shared components, tokens, and states. So instead of designing every screen from zero, I assembled this flow from an existing foundation and spent my attention on the workflow logic and edge cases. The speed was systems work that had already been done on purpose.",
        ],
      },
      {
        type: "cards",
        kicker: "05 · Strategy",
        heading: "Four principles behind the flow",
        items: [
          { title: "Surface problems early", text: "Don't make employees wait until the end to learn a file failed." },
          { title: "Errors are row-level", text: "A problem points to the exact transaction that needs attention." },
          { title: "Verify, don't guess", text: "Recipient and account checks let employees trust a batch before submitting." },
          { title: "Reuse the system", text: "Under pressure, consistency and speed come from shared components — not one-off UI." },
        ],
      },
      {
        type: "steps",
        kicker: "06 · Process",
        heading: "How it actually got built and shipped",
        items: [
          { title: "In-person branch research", text: "The pain was operational and only legible on site — real client files, real time pressure, real stakes." },
          { title: "Wireframes + prototype", text: "I locked the structure of the flow early, so disagreements happened before engineering effort was spent." },
          { title: "Controlled single-branch rollout", text: "With no time for a full usability cycle, we launched in one branch on live batches and iterated on real feedback before expanding." },
        ],
      },
      {
        type: "section",
        kicker: "07 · Outcome",
        heading: "Honest about what I can claim",
        body: [
          "The tool launched through that controlled rollout, was used on live payment batches, and was adjusted before broader expansion.",
          "I don't have instrumented before/after metrics — the bank didn't share that data, and I won't turn observation into fake precision. What I can say plainly: the core failure mode of the old system, one invalid row rejecting the whole batch with no useful feedback, was removed from the workflow. With operational data, I'd measure failed-batch rate, re-uploads per batch, and time to fix a bad row.",
        ],
      },
      {
        type: "split",
        kicker: "08 · Reflection",
        heading: "Systems work is invisible until it saves you",
        body: [
          "A forced timeline is usually where quality gets fragile. This project held together because the design system had been built for reuse before the pressure arrived.",
          "What I'd do differently: push for at least one structured usability session before launch, even compressed. The rollout caught issues — but it caught them in production, where they're more expensive to find.",
        ],
      },
    ],
  },
  {
    index: "03",
    slug: "design-system",
    title: "Design System on a Live Enterprise Banking Platform",
    description:
      "A pragmatic, scalable design system built inside a live, Ant Design-based corporate banking product — where adoption beat purity.",
    tags: ["Design Systems", "Tokens", "Ant Design"],
    meta: "Design System · Enterprise Banking",
    facts: [
      { label: "Role", value: "Design system owner, end to end" },
      { label: "Scale", value: "90+ screens, permission-heavy" },
      { label: "Stack", value: "Ant Design + custom code theme" },
      { label: "Team", value: "Two designers, no DS engineer" },
    ],
    blocks: [
      {
        type: "lead",
        text: "A perfectly semantic token system that no one adopts is worth nothing. On a live banking platform, I chose the messier name that both teams would actually use — and documented the trade-off as a debt, not an accident.",
      },
      {
        type: "stats",
        items: [
          { value: "90+", label: "screens already in production" },
          { value: "8–9 → 3–4", label: "design questions per day, from frontend" },
          { value: "2", label: "designers on the whole team" },
          { value: "0", label: "dedicated design-system engineers" },
        ],
      },
      {
        type: "section",
        kicker: "01 · Context",
        heading: "I joined a product already in flight",
        body: [
          "An enterprise corporate banking platform — 90+ screens, permission-heavy workflows, institutional users who depend on predictable, low-friction interfaces. The frontend was built on Ant Design before I arrived: business-approved, not negotiable, with a custom code theme and its own token-like naming already in place.",
          "The design team was two people. I owned the design system while also doing product work — no DS engineer, no greenfield rebuild, no pause in delivery. From day one I treated it as infrastructure for a family of internal banking tools, not a cleanup layer for one product.",
        ],
      },
      {
        type: "split",
        kicker: "02 · Problem",
        heading: "Inconsistency was slowing delivery",
        body: [
          "It wasn't one bad pattern — it was months of decisions made without a shared system. Spacing drifted, component states varied page to page, color usage shifted from screen to screen.",
          "The loudest signal came from engineering: developers stopped to ask design questions roughly 8–9 times a day. “Why does this look different here? Which spacing? Ant default or custom?” That reframed the work for me — inconsistency wasn't a quality nitpick, it was a tax on product velocity.",
        ],
      },
      {
        type: "list",
        kicker: "03 · Constraints",
        heading: "The reality I had to design inside",
        items: [
          "Ant Design was inherited — its API and theming shaped what was cheap vs. expensive to customize",
          "A frontend theme already existed in code; replacing it mid-flight meant refactor cost with no product gain",
          "The product was live — no resets, only incremental improvement",
          "Capacity was tight — every customization had to justify its cost against delivery",
          "The domain demanded reliability — predictable states and permission-aware interactions",
          "It had to scale to adjacent tools without becoming so abstract it slowed today's work",
        ],
      },
      {
        type: "compare",
        kicker: "04 · The decision",
        heading: "Adoption over semantic purity",
        before: {
          title: "Option A — protect the model",
          text: "Keep a clean, role-based, intent-driven token structure and ask frontend to realign their theme. Theoretically correct — but it forces an already-stretched team to refactor working code mid-delivery.",
        },
        after: {
          title: "Option B — align to reality ✓",
          text: "Accept a less semantically pure naming model that matches the existing frontend theme, so both teams share one language with zero translation. I chose this — and logged the reduced portability as intentional debt.",
        },
      },
      {
        type: "steps",
        kicker: "05 · Governance",
        heading: "Lightweight rules that survived sprint pressure",
        items: [
          { title: "Identify", text: "Name the product need or the inconsistency." },
          { title: "Check defaults", text: "Could Ant Design's default behavior already support it?" },
          { title: "Review with the tech lead", text: "Anything beyond defaults got estimated for effort and risk together." },
          { title: "Decide & document", text: "Sprint, backlog, or technical debt — then write down the decision so future screens followed the same logic." },
        ],
      },
      {
        type: "quote",
        text: "Before: “Why does this look different here?”   After: “We need a new component or variant for this case.”",
      },
      {
        type: "section",
        kicker: "06 · Outcome",
        heading: "The conversation changed",
        body: [
          "The clearest signal was communication. Daily design-related interruptions dropped from roughly 8–9 to 3–4, and kept falling as coverage grew. It wasn't a formal audit, so I won't dress it up as a precise metric — but the nature of the questions changed, from debating inconsistencies to discussing reusable extensions.",
          "Frontend adopted the system without pushback, the product owner saw visible consistency gains, and the foundation later powered a separate, forced-timeline batch transfer redesign — the clearest proof that it was real infrastructure, not a coat of paint.",
        ],
      },
      {
        type: "cards",
        kicker: "07 · Hindsight",
        heading: "What I'd do differently",
        items: [
          { title: "Map the theme first", text: "I went deep on design-side semantics before understanding the naming reality in code." },
          { title: "Track the baseline", text: "A simple log of DS-related questions from day one would have made the impact legible to stakeholders." },
          { title: "Name the governance early", text: "Documenting the process sooner would have framed it as operating infrastructure, not ad-hoc coordination." },
          { title: "Document scalability", text: "Reuse across flows is stronger evidence when it's tracked, not just remembered." },
        ],
      },
    ],
  },
];

export function getCaseStudy(slug: string) {
  return caseStudies.find((c) => c.slug === slug);
}
