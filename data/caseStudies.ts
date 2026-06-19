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
    title: "Reducing Support Friction at Scale",
    description:
      "One of Iran's largest enterprise banking platforms — 400,000 users across 180,000 organizations. I read two years of support tickets by hand to separate content gaps from access issues, then rebuilt the help experience around what was actually self-serviceable.",
    tags: ["UX Research", "Content Architecture", "Enterprise Banking"],
    meta: "Product Design · Content Strategy",
    facts: [
      { label: "Role", value: "UX / Product Designer — content architecture" },
      { label: "Platform", value: "Enterprise banking · 400K users" },
      { label: "Dataset", value: "734 entries · 2 years, read by hand" },
      { label: "Status", value: "Pre-launch (test environment)" },
    ],
    blocks: [
      {
        type: "stats",
        items: [
          { value: "400K", label: "users across 180,000 organizations" },
          { value: "734", label: "feedback entries read one by one" },
          { value: "~45%", label: "self-serviceable with a static answer" },
          { value: "~14/mo", label: "addressable tickets (45% of ~30 total)" },
        ],
      },
      {
        type: "section",
        kicker: "01 · Context",
        heading: "Nobody comes here to browse.",
        body: [
          "One of Iran's largest enterprise banking platforms — 400,000 users across 180,000 organizations. They come to move money, issue cheques, run batch payments.",
          "When something is unclear, it doesn't cause minor friction. It blocks a workflow and turns into a support ticket. The support system split help into two pages: an FAQ, and a ticket form. To use it, you had to know which one you needed before you understood your own problem well enough to choose. Most people gave up and filed a ticket.",
        ],
      },
      {
        type: "split",
        kicker: "02 · Problem",
        heading: "A pattern showed up fast.",
        body: [
          "I pulled two years of feedback from the back-office admin panel and read all 734 entries — about 30 a month. A large share of tickets had static, knowable answers. No account lookup, no agent needed. People just didn't know where to look.",
          "The old FAQ wasn't catching any of it. It was organized by feature name instead of user problem, had no search, and lived on a separate page from the ticket form.",
          "The question I started with: how much of this volume is actually self-serviceable — and what would the content need to look like to work?",
        ],
      },
      {
        type: "section",
        kicker: "03 · Feedback Analysis",
        heading: "One rule, every entry.",
        body: [
          "I classified every entry by one rule: can the user solve this alone with a static answer, or does it need an agent? That split is the spine of the whole project.",
          "Three high-volume categories were mixed; I split those by reading the actual entries, so the 45% is an informed estimate, not a clean cut.",
        ],
      },
      {
        type: "stats",
        items: [
          { value: "~45%", label: "FAQ-addressable — static answer, no agent" },
          { value: "~55%", label: "needs real support — account-specific" },
        ],
      },
      {
        type: "split",
        kicker: "04 · My Role",
        heading: "Two-person project. The analysis and content architecture were mine.",
        body: [
          "I read the ~734 entries manually and logged each one on a FigJam sticky note, grouped by topic. Manual, because the call — is this within the user's control, or does it need account access? — depended on context a keyword filter would miss.",
          "The recurring clusters became the category structure directly. And I wrote the FAQ questions in the user's words from the ticket text, not the product team's feature names.",
        ],
      },
      {
        type: "cards",
        kicker: "05 · Constraints",
        heading: "Three limits I designed around.",
        items: [
          { title: "Locked taxonomy", text: "The old categories were tied to ticket history in the database. Renaming them would silently break filtering for users tracking active cases — a real regression at this scale." },
          { title: "Search at 150 questions", text: "Browsing alone breaks down. Plain string-matching wasn't enough either — user language and product language rarely match." },
          { title: "Pre-launch", text: "The redesign sits in a test environment. No live data yet — which shaped how I framed every success metric." },
        ],
      },
      {
        type: "cards",
        kicker: "06 · Key Decisions",
        heading: "Four calls that shaped the redesign.",
        items: [
          { title: "Merge FAQ and ticket into one page", text: "Two surfaces forced a choice users couldn't yet make. I put both on one page, ticket CTA always visible — not buried under the FAQ." },
          { title: "Keyword search with per-question tagging", text: "Someone searching “how to add a user” won't type the product's exact term. Tags bridge user language and product language." },
          { title: "Preserve legacy categories, migrate where possible", text: "A full rebuild would break filtering for 400k users. I migrated questions where the mapping was clean and added an “Other” catch-all for the rest — knowingly trading taxonomic purity for stability." },
          { title: "Real-time FAQ filtering beside the ticket field", text: "Users filing a ticket are mid-task and under pressure. As they type their message, matching FAQ answers surface live on the same page — no extra step, no decision." },
        ],
      },
      {
        type: "steps",
        kicker: "07 · Process",
        heading: "How the work actually ran.",
        items: [
          { title: "Manual review", text: "734 entries read individually, mapped on FigJam stickies for spatial pattern-finding." },
          { title: "Frequency clustering", text: "Recurring themes grouped by volume; clusters drove the categories, not the other way around." },
          { title: "Wireframe-first", text: "Structure locked with stakeholders before any visual polish, so objections surfaced early instead of as rework." },
          { title: "Annotated handoff", text: "Interaction states, edge cases, and tagging logic documented so a developer wouldn't need to ask." },
        ],
      },
      {
        type: "section",
        kicker: "08 · Outcome",
        heading: "In test, not launched — so these are targets, not wins.",
        body: [
          "These are pre-launch targets tied to the analysis, not measured results. Ticket volume — baseline is ~14 addressable tickets/month (the 45% the analysis flagged, out of the ~30 total monthly tickets); the first 60 days set a real conversion rate. Zero-result searches — search is new; the first 30 days set the baseline. FAQ-to-ticket conversion — wasn't trackable before; now it is.",
          "I'm calling these out as targets, not wins. There's no live data yet, and pretending otherwise wouldn't be honest.",
        ],
      },
      {
        type: "quote",
        text: "Support content is part of the product, not adjacent to it. Unclear guidance on a working feature produces the same behavior as a broken one — both end in a ticket.",
      },
      {
        type: "split",
        kicker: "09 · Reflection",
        heading: "What I'd do differently.",
        body: [
          "Reading 734 entries by hand was the only way to tell a content gap from an access issue from an actual bug — three problems that look identical in a dashboard and need completely different fixes.",
          "The taxonomy I inherited wasn't a bad decision. It was a reasonable one made before scale made its cost visible — worth remembering the next time I make a structural call that someone inherits later.",
          "The keyword tagging shipped without an owner for upkeep: who updates tags when a feature is renamed? I flagged it but didn't resolve it before handoff. Next time that gets decided up front, not left as an operational afterthought.",
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
