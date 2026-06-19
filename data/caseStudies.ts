// Case studies are rendered as full pages inside the site (no PDF downloads).
// The content below is lifted from the original case study documents.

export type Block =
  | { type: "section"; heading: string; body: string[] }
  | { type: "list"; heading: string; intro?: string; items: string[] }
  | { type: "table"; heading: string; columns: string[]; rows: string[][] }
  | { type: "quote"; text: string };

export type CaseStudy = {
  index: string;
  slug: string;
  title: string;
  description: string;
  tags: string[];
  meta: string;
  /** Short labelled facts shown at the top of the case study page. */
  facts: { label: string; value: string }[];
  blocks: Block[];
};

export const caseStudies: CaseStudy[] = [
  {
    index: "01",
    slug: "reducing-support-friction",
    title: "From Support Feedback to Self-Service Knowledge",
    description:
      "A data-driven FAQ redesign for a corporate banking platform, built from 1,345 real user feedback entries. I separated preventable knowledge gaps from genuine support issues and restructured help around how users actually describe their problems.",
    tags: ["UX Research", "Information Architecture", "Enterprise Banking"],
    meta: "Product Design · Content Strategy",
    facts: [
      { label: "Role", value: "UX / Product Designer" },
      { label: "Product", value: "BAM Sazmani — corporate banking" },
      { label: "Dataset", value: "1,345 feedback entries · 902 user IDs" },
      { label: "Range", value: "Aug 2020 – Oct 2025" },
    ],
    blocks: [
      {
        type: "section",
        heading: "Summary",
        body: [
          "I analyzed 1,345 real user feedback entries from a corporate banking platform and found that many support requests were not caused by technical failure, but by preventable knowledge gaps.",
          "By identifying high-volume recurring topics, separating FAQ-addressable questions from support-required issues, and restructuring the FAQ around user intent, we redesigned the help experience into a searchable self-service knowledge layer for enterprise banking users. The top 5 feedback categories alone covered 72.1% of all entries.",
        ],
      },
      {
        type: "section",
        heading: "1. Context",
        body: [
          "BAM Sazmani is a web-based corporate banking platform used by organizational users to manage financial operations such as transfers, account access, checks, reports, user permissions, and organizational banking tasks.",
          "After users migrated from the older corporate banking system to the newer platform, many were still learning how to complete common tasks or find the right information. As a result, the feedback/support channel became overloaded with repeated questions. The existing FAQ was limited, outdated, not searchable enough, and not organized around how users actually described their problems.",
        ],
      },
      {
        type: "section",
        heading: "2. Problem",
        body: [
          "The support channel had accumulated 1,345 feedback entries between Aug 2020 and Oct 2025, submitted by 902 unique organization/user IDs. When we reviewed the feedback, we found that many requests were not purely technical issues — they were repeated questions around checks, transfers, account visibility, basic organizational information, user access, reports, petty cash cards, batch payments, and payroll.",
          "The core problem was not only that the FAQ was old. The deeper problem was that users were dependent on support because knowledge was not discoverable, searchable, or structured around their real needs.",
        ],
      },
      {
        type: "table",
        heading: "3. Data Snapshot — Feedback Categories",
        columns: ["Rank", "Category", "Count", "Share"],
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
        type: "section",
        heading: "4. Insight on Concentration",
        body: [
          "The top 5 categories account for 72.1% of all feedback entries, making them the highest-priority candidates for FAQ restructuring and content coverage. A small number of categories carried most of the support load.",
        ],
      },
      {
        type: "list",
        heading: "5. Research Approach",
        intro:
          "I treated support feedback as a UX research source, not only as a support backlog. The analysis had three layers:",
        items: [
          "Frequency analysis — which topics appeared most often?",
          "Intent analysis — what was the user actually trying to do?",
          "Triage analysis — should this become FAQ content, a product improvement, or remain a support-required issue?",
        ],
      },
      {
        type: "quote",
        text: "The support channel was carrying two different loads at the same time: real support issues and preventable knowledge gaps.",
      },
      {
        type: "section",
        heading: "6. Key Insight",
        body: [
          "Users were not always blocked because the system was broken. Many were blocked because the answer was not easy to find, not searchable, or not written in the language they used.",
          "So the opportunity was not simply to add more FAQ items. The real opportunity was to redesign FAQ as a self-service support layer.",
        ],
      },
      {
        type: "list",
        heading: "7. Design Goal",
        intro: "The redesigned FAQ needed to:",
        items: [
          "organize content around user tasks",
          "support search through keywords and alternative phrasings",
          "cover high-frequency support topics first",
          "separate guidance questions from technical issues",
          "help users understand when they can solve something themselves and when they need support",
          "create a measurable foundation for post-launch improvement",
        ],
      },
      {
        type: "section",
        heading: "8. Solution",
        body: [
          "We redesigned the FAQ from a static list of questions into a structured knowledge experience. Instead of organizing content only around internal product modules, we used real feedback patterns to define user-facing categories.",
          "The new structure focused on high-volume topics such as checks and Sayad check operations, transfers, account visibility and statements, basic organization information, user access and permissions, reports, batch payments, and petty cash cards. Each FAQ item could include keywords based on the language users used in their feedback, making search more tolerant of different phrasings.",
        ],
      },
      {
        type: "list",
        heading: "9. Design Decisions",
        items: [
          "FAQ before chatbot — the feedback showed many repeated questions with stable answers. A structured FAQ was lower-risk, easier to maintain, and created a clean knowledge base before investing in automation.",
          "User language over internal taxonomy — users did not think in product module names. They described problems like “My account is not visible” or “I cannot register a Sayad check.”",
          "Search plus categories — some users know exactly what they want; others need to browse. The experience needed both category navigation and keyword search.",
          "Senior critique: the “Other / General Guidance” category had 250 entries — a signal the original taxonomy was not enough for decision-making, so I introduced a second layer of intent-based tagging.",
        ],
      },
      {
        type: "section",
        heading: "10. Measurement Plan",
        body: [
          "Because the redesigned FAQ had not yet launched to production, I framed impact honestly as a measurement framework ready for post-launch validation: reduction in repeated FAQ-addressable feedback, FAQ search usage, search terms with no result, click-through rate on FAQ results, support tickets for top categories, and “Was this helpful?” responses.",
        ],
      },
      {
        type: "section",
        heading: "11. Outcome",
        body: [
          "The project transformed scattered support feedback into a structured self-service knowledge layer. Instead of treating feedback only as support noise, we used it as a design input to understand where users repeatedly needed guidance.",
          "The work created a clearer understanding of recurring user problems, a prioritized FAQ content backlog, a user-intent-based structure for help content, a keyword strategy for search, and a measurement plan for post-launch validation.",
        ],
      },
    ],
  },
  {
    index: "02",
    slug: "batch-transfer",
    title: "Batch Transfer for Offline Corporate Clients",
    description:
      "A forced-timeline redesign that shipped because the system underneath it had already been built for reuse. The legacy tool failed an entire 200-row payment batch if one row broke — I rebuilt it to validate each row independently.",
    tags: ["Product Design", "Design System", "B2B Banking"],
    meta: "Product Design · Design System",
    facts: [
      { label: "Role", value: "Product Design (flow, UI, prototype)" },
      { label: "Domain", value: "B2B Banking · 2026" },
      { label: "Team", value: "Two designers" },
      { label: "Constraint", value: "Fixed hard deadline" },
    ],
    blocks: [
      {
        type: "section",
        heading: "Context",
        body: [
          "Some corporate clients would not transact online. For security policies, internal approval rules, or institutional caution, they continued to use an offline process: they brought physical cheques and an Excel payment file into a branch, and a bank employee processed the batch manually through an internal tool.",
          "The bank already had a legacy tool for this workflow, but it created friction in exactly the moment where reliability mattered most. It was slow, error-prone, and unforgiving — one small mistake could turn a routine salary batch into hours of manual correction. We were asked to replace it on a fixed timeline.",
        ],
      },
      {
        type: "section",
        heading: "The Problem",
        body: [
          "The legacy system treated the uploaded payment file as one block. If a single transaction in a batch of 200 had a problem — a wrong account number, a bad IBAN, or a recipient that could not be verified — the entire file failed.",
          "The employee only found out at the end. From there, they had to search through the Excel file, identify the broken row, fix it, and upload the full batch again. There was no meaningful validation upfront, no row-level feedback, and no clear way to verify recipients before submission.",
          "For the employee, the problem was not simply that an error happened. It was that the system made the error expensive to find. One typo could block a full batch and waste an afternoon.",
        ],
      },
      {
        type: "section",
        heading: "My Role",
        body: [
          "I worked with one other designer. We did the research together, visiting branches in person and speaking directly with the employees who processed these files in real operational conditions.",
          "After research, I owned the product design: the flow, wireframes, stakeholder prototype, and final UI. My teammate and I stayed aligned on direction, but the interaction and interface decisions for the batch transfer experience were mine.",
        ],
      },
      {
        type: "section",
        heading: "The Constraint That Shaped the Work",
        body: [
          "The timeline was fixed. The requirement came from the bank with a hard date, which meant the ideal process — research, design, full usability testing, iteration, then launch — was not realistic. The usual risk is that quality gets traded for speed. In this project, speed came from a different place: reuse.",
          "Before this project, I had already built a design system for another banking product, designed beyond the immediate product need, with shared components, tokens, states, and patterns. Instead of designing every screen from zero, I could assemble the new flow from an existing foundation and focus my attention on the workflow logic, validation model, and edge cases. The speed did not come from skipping design work — it came from systems work that had already been done on purpose.",
        ],
      },
      {
        type: "quote",
        text: "The old system turned one mistake into a failed batch. The new system turns one mistake into one row that needs attention.",
      },
      {
        type: "section",
        heading: "Core Product Decision: Kill the All-or-Nothing Failure Model",
        body: [
          "The most important decision was to stop treating the batch as a single pass/fail object. In the redesigned flow, each transaction is checked independently. The system validates rows before final submission, verifies recipient account information where possible, and gives the employee a clear review state before the batch is finalized.",
          "Instead of discovering a failure after the full batch was processed, the employee sees exactly which rows have problems and why. Valid rows are no longer made invisible by one invalid row. The broken row becomes something specific to correct, not a reason to restart the whole afternoon.",
        ],
      },
      {
        type: "list",
        heading: "Design Strategy",
        intro: "I designed the flow around four principles:",
        items: [
          "Surface problems before submission — employees should not wait until the end to learn that a file has failed.",
          "Make errors row-level, not file-level — a problem should point to the exact transaction that needs attention.",
          "Support verification, not guesswork — recipient and account checks should help employees trust the batch before they submit it.",
          "Reuse existing system patterns wherever possible — under a forced timeline, consistency and speed had to come from shared components, not one-off UI decisions.",
        ],
      },
      {
        type: "section",
        heading: "Process",
        body: [
          "We started with in-person branch research. The pain was operational: employees were under time pressure, working with real client files, trying to avoid mistakes in a high-trust banking context. From there, I created wireframes and a prototype to get stakeholder alignment before UI production, locking the structure of the flow early.",
          "Because the timeline did not allow a full usability testing cycle, we used a controlled rollout instead. The product launched first in a single branch, where real employees used it on real batches and gave feedback. We iterated before expanding the rollout. It was the most realistic substitute available under the constraint, and it gave us feedback from actual usage rather than simulated tasks.",
        ],
      },
      {
        type: "section",
        heading: "Outcome",
        body: [
          "The redesigned batch transfer tool launched through a controlled branch rollout. The branch used it on live payment batches, gave feedback, and we made adjustments before broader expansion.",
          "I do not have instrumented post-launch metrics — the bank did not share before/after data, and I do not want to turn observation into fake precision. What I can say honestly is that the core failure mode of the old system — one invalid row rejecting the entire batch without useful feedback — was removed from the workflow. If I had operational data, I would measure failed-batch rate, re-uploads per batch, time to identify a bad row, time to complete a corrected batch, and branch support requests.",
        ],
      },
      {
        type: "section",
        heading: "Reflection",
        body: [
          "The lesson is not only about batch transfer — it is about the value of design systems as operational infrastructure. A forced timeline is usually where product quality gets fragile. This project held together because the design system had been built for reuse before the pressure arrived. Systems work is often invisible until the moment it saves time. This was that moment.",
          "What I would do differently: I would push for at least one structured usability session before launch, even on a compressed timeline. The controlled rollout caught issues, but it caught them in production — and some would have been cheaper to find earlier.",
        ],
      },
    ],
  },
  {
    index: "03",
    slug: "design-system",
    title: "Design System on a Live Enterprise Banking Platform",
    description:
      "A pragmatic, scalable design system built inside a live, Ant Design-based corporate banking product — 90+ screens, permission-heavy, with no pause to rebuild. Adoption and reuse mattered more than theoretical purity. Frontend interruptions dropped from 8–9 per day to 3–4.",
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
        type: "section",
        heading: "Context",
        body: [
          "I joined an enterprise corporate banking platform after it was already in production — more than 90 screens, permission-heavy workflows, and institutional users who depended on predictable, low-friction interfaces for operational banking tasks.",
          "The frontend was built on Ant Design before I joined. That decision was already made, business-approved, and not negotiable. The frontend team had also created a custom theme in code from the beginning, with their own token-like naming structure already in place. The design team was small — two designers total. I owned the design system while also contributing to product design work, with no dedicated DS engineer, no greenfield rebuild, and no pause in delivery.",
          "From the beginning, I treated the system as infrastructure for a family of internal banking tools, not just a cleanup layer for one product.",
        ],
      },
      {
        type: "section",
        heading: "The Problem",
        body: [
          "The inconsistency was not caused by one bad pattern. It was the cumulative effect of several months of product decisions made without a shared system: spacing values drifted, component states varied across pages, and color usage changed from screen to screen.",
          "The most important signal came from frontend: developers were stopping repeatedly to ask design questions — roughly 8 to 9 a day. “Why does this component look different here? Which spacing value should we use? Should this be Ant Design default or custom?” That changed how I framed the work. Inconsistency was not only a design quality issue — it was slowing product delivery.",
        ],
      },
      {
        type: "list",
        heading: "Constraints",
        items: [
          "Ant Design was inherited, not chosen — its component API and theming structure shaped what could be customized quickly.",
          "The frontend theme already existed — replacing it mid-project would have created refactor cost without immediate product gain.",
          "The product was live — the system could not require a reset or redesign of existing screens.",
          "Capacity was limited — every customization had to justify its cost against delivery goals.",
          "The domain required reliability — enterprise banking workflows depend on clarity, predictable states, and permission-aware interactions.",
          "The system needed to scale across adjacent operational tools without becoming so abstract that it slowed current delivery.",
        ],
      },
      {
        type: "section",
        heading: "Key Decision: Adoption Over Semantic Purity",
        body: [
          "My first instinct was to build a fully semantic token structure: role-based, intent-driven, clean. In principle, that was the correct model. The problem appeared quickly — the frontend team already had a different naming structure in their custom theme. Design and engineering were talking about the same values with different names, so every handoff required translation.",
          "Option A was to protect semantic naming and ask frontend to realign — theoretically cleaner, but it would have required an already-stretched team to refactor working code during active delivery. Option B was to align to the existing frontend structure — less semantically pure, but a shared language both teams could use immediately.",
          "I chose Option B. A design system only creates value if it gets adopted. A perfectly semantic model that creates daily friction is not a working system. I documented the reduced portability as intentional debt, not an accident.",
        ],
      },
      {
        type: "list",
        heading: "Governance Model",
        intro:
          "Because there was no dedicated DS engineer, I treated governance as part of the design work — lightweight enough to survive sprint pressure, consistent enough that everyone understood how decisions were made:",
        items: [
          "Identify the product need or inconsistency.",
          "Check whether Ant Design default behavior could support it.",
          "If customization was required, review it with the frontend tech lead.",
          "Estimate effort and risk.",
          "Decide whether it belonged in the sprint or moved to backlog / technical debt.",
          "Document the decision so future screens followed the same logic.",
        ],
      },
      {
        type: "section",
        heading: "Scalability and Reuse",
        body: [
          "I did not design the system only to normalize existing screens. I designed it to scale across recurring banking workflows: dense tables, form-heavy flows, validation feedback, permission-aware states, confirmation steps, and operational screens where employees needed to move quickly without guessing.",
          "This mattered later. When a forced-timeline batch transfer project arrived, the team could build from the existing system instead of designing every screen, state, spacing rule, and component behavior from scratch. That was the clearest scalability proof: the system did not only improve consistency inside the original product — it created reusable infrastructure that helped the bank move faster on a separate operational workflow under pressure.",
        ],
      },
      {
        type: "quote",
        text: "Before: “Why does this look different here?”  After: “We need a new component or variant for this case.”",
      },
      {
        type: "section",
        heading: "Outcome",
        body: [
          "The clearest outcome was a change in frontend communication. Daily design-related interruptions dropped from roughly 8–9 per day to 3–4, and continued decreasing as component coverage grew. This was not a formal audit, so I would not present it as a precise metric — it was an observed operational signal, but the change was visible in the nature of the conversations.",
          "The team moved from debating repeated visual inconsistencies to discussing reusable system extensions. Frontend adopted the system without pushback, and the product owner saw visible consistency improvements across screens. A later outcome was reuse: the same foundation supported the separate batch transfer redesign under a forced timeline.",
        ],
      },
      {
        type: "list",
        heading: "What I Would Do Differently",
        items: [
          "Map the frontend theme before designing the token structure — I went too deep into design-side semantics before understanding the naming reality in code.",
          "Track the baseline from day one — a simple log of DS-related frontend questions would have made the impact more legible to stakeholders.",
          "Make the governance model explicit earlier — naming and documenting it sooner would have helped the team see it as operating infrastructure.",
          "Document scalability more deliberately — component coverage and reuse across flows would be stronger evidence if tracked from the start.",
        ],
      },
    ],
  },
];

export function getCaseStudy(slug: string) {
  return caseStudies.find((c) => c.slug === slug);
}
