import NextCaseLink from "./NextCaseLink";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import CsGlance from "./CsGlance";
import Mockup from "./Mockup";
import CsStats from "./CsStats";
import TicketMachineScene from "./TicketMachineScene";

/*
 * Each case follows one line of thought from the brief to where the product
 * is now. Every section is one step: a heading, a few short paragraphs, and at
 * most one visual, preferably the real screen.
 */
const TICKETS = [
  { category: "Questions with a fixed answer", share: "37%", implication: "An opportunity for self-service" },
  {
    category: "Questions about an individual case",
    share: "43%",
    implication: "Preserve access to someone who can investigate",
  },
  { category: "Bugs, feature requests and edge cases", share: "20%", implication: "Continue routing to support" },
];

export default function SupportFrictionCase() {
  return (
    <article>
      {/* HERO */}
      <header className="cs-hero">
        <div className="cs-hero-main">
          <span className="cs-eyebrow">Case study · Corporate banking</span>
          <h1>Bringing answers into the support journey</h1>
          <p className="cs-lede">
            Turning an FAQ refresh into an opportunity to reduce avoidable support requests
          </p>
        </div>

        <div className="cs-hero-side">
          <CsGlance
            role="Product Designer, from ticket analysis to UI and implementation scope"
            team="Product, Support and engineering · Live"
            results={[
              { value: "37%", label: "of ~1,000 tickets had one fixed answer, often a bank policy", icon: "Inbox" },
              { value: "~15% fewer", label: "guidance questions after launch, by my own count", icon: "Ticket" },
              { value: "1 page", label: "FAQ and ticket merged, with answers as users type", icon: "DocumentText" },
            ]}
          />
        </div>
      </header>

      <hr className="cs-divider" />

      <section className="cs-reveal">
        <span className="cs-num">Overview</span>
        <p>
          An outdated FAQ was the starting brief. Reviewing support tickets revealed a broader
          opportunity: many users were contacting support for information with a fixed answer.
        </p>
        <p>
          I reframed the project around helping users resolve those questions while preserving
          direct access to support for issues that needed individual attention.
        </p>
      </section>

      {/* 1 */}
      <section className="cs-reveal">
        <span className="cs-num">The starting point</span>
        <h2>Looking beyond outdated content</h2>
        <p>
          The platform had changed, but its FAQ still described an earlier version. Updating the
          content was necessary. I questioned whether that alone would help someone already
          struggling with a banking task.
        </p>
        <p>
          My working hypothesis was that answers would be more useful inside an existing
          help-seeking journey. To understand the opportunity, I reviewed approximately 1,000
          support tickets.
        </p>
        <div className="cs-vt">
          <table>
            <thead>
              <tr>
                <th>Ticket category</th>
                <th>Approximate share</th>
                <th>Product implication</th>
              </tr>
            </thead>
            <tbody>
              {TICKETS.map((t) => (
                <tr key={t.category}>
                  <td className="vtname">{t.category}</td>
                  <td className="match">{t.share}</td>
                  <td>{t.implication}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p>
          A question such as &ldquo;How do I add a signatory?&rdquo; had a fixed answer: bank
          policy required a branch visit. Support could explain the policy, but could not change
          the outcome.
        </p>
        <p>
          These tickets suggested an information gap. They also defined a boundary: self-service
          could help with some requests, while many others still required a person.
        </p>
        <p className="cs-quote">
          How might we help users resolve informational questions before submitting a ticket,
          while keeping support accessible for everything else?
        </p>
      </section>

      <section className="cs-shot cs-reveal">
        <TicketMachineScene />
      </section>

      {/* 2 */}
      <section className="cs-reveal">
        <span className="cs-num">The direction</span>
        <h2>Choosing where answers could help</h2>
        <p>The ticket distribution shaped two decisions.</p>
        <p>
          First, a short list of popular questions would have limited coverage. The most common
          topic represented only 1.5% of tickets; the twelve most common together accounted for
          roughly a tenth. Answers needed to be discoverable across the full FAQ.
        </p>
        <p>
          Second, requiring an FAQ search before ticket submission would add friction to every
          request, including the 43% that depended on an individual user&apos;s circumstances.
        </p>
        <p>
          I proposed bringing relevant answers into the ticket-writing experience. Users were
          already describing their problem there, creating an opportunity to surface help without
          asking them to start another task.
        </p>
        <p>
          I presented the ticket breakdown and proposed direction to the PM and product owner. We
          aligned on a shared objective: reduce repetitive informational work so support could
          spend more time on financial issues requiring investigation.
        </p>
      </section>

      {/* 3 */}
      <section className="cs-reveal">
        <span className="cs-num">The design</span>
        <h2>One page, two ways to resolve a question</h2>
        <p>I merged the FAQ and ticket form into one support page.</p>
        <p>
          As users type their question, matching FAQ answers appear alongside the form. They can
          read an answer and resolve the issue, or continue submitting their ticket.
        </p>
        <p>
          The key interaction decision was to make suggestions optional. A match should offer a
          useful next step; it should never determine whether someone is allowed to contact
          support.
        </p>
      </section>

      <section className="cs-shot cs-reveal">
        <Mockup
          src="/projects/support-unified.webp"
          alt="Support page with the FAQ on the left and the ticket form on the right"
          caption="FAQ answers and ticket submission share one page, keeping both resolution paths available."
        />
      </section>

      <section className="cs-shot cs-reveal">
        <Mockup
          src="/projects/support-live-match.webp"
          alt="Support page: the user types how to increase the amount they can transfer, and FAQ answers about transfer limits appear with the matched word highlighted"
          caption="Relevant answers appear during ticket writing, with matched words highlighted to help users scan the results."
        />
      </section>

      <section className="cs-reveal">
        <p>
          This placed assistance at a point where users had already chosen to seek help. It also
          kept the scope focused: the first release supported the ticket journey, rather than
          attempting to embed contextual help throughout every banking workflow.
        </p>
      </section>

      {/* 4 */}
      <section className="cs-reveal">
        <span className="cs-num">The constraint</span>
        <h2>Making matching feasible for the first release</h2>
        <p>The main implementation constraint was matching users&apos; wording to the right answer.</p>
        <p>
          Using Claude to help extract candidate keywords and synonyms, I prepared a mapping across
          the FAQ. Engineering&apos;s feedback was that the proposed matching scope was too heavy to
          implement.
        </p>
        <p>I worked with the team to separate the immediate release from more advanced matching.</p>
        <ol className="cs-rules is-plain">
          {/* one span per item: the list lays out number | text, so a bare <strong> would split into its own column */}
          <li>
            <span>
              <strong>For the first release,</strong>{" "}I defined a bounded vocabulary: words
              already present in FAQ questions and answers, plus explicit synonym groups such as
              &ldquo;facility&rdquo; and &ldquo;loan.&rdquo;
            </span>
          </li>
          <li>
            <span>
              <strong>For a later phase,</strong>{" "}we reserved concept and sentence-level matching,
              informed by what users actually type.
            </span>
          </li>
        </ol>
        <p>
          I completed the first-phase mapping across <strong>89 FAQ questions, 343 keywords and 34
          synonym groups</strong>, giving engineering a defined implementation scope.
        </p>
        <CsStats
          items={[
            { value: "89", label: "FAQ questions" },
            { value: "343", label: "keywords" },
            { value: "34", label: "synonym groups" },
          ]}
        />
        <p>
          The trade-off was limited language coverage in exchange for a feasible release. Keeping
          ticket submission available was especially important here: when matching failed, users
          still had a way forward.
        </p>
      </section>

      {/* 5 */}
      <section className="cs-reveal">
        <span className="cs-num">Now</span>
        <h2>Early results and the next question</h2>
        <p>
          The merged page is live. My manual count of the support queue suggested approximately{" "}
          <strong>15% fewer guidance questions after launch</strong>.
        </p>
        <p>
          This is an early signal. The comparison does not establish how much of the change came
          from the new experience, and keyword matching still has limits.
        </p>
        <p>
          We are now reviewing what users type to inform the next phase. The next evaluation should
          look beyond ticket reduction: which queries return useful answers, where matching fails,
          and whether users still need support after seeing a suggestion.
        </p>
        <p className="cs-takeaway">
          <span>What I learned</span>
          The project changed how I approached the original brief. Refreshing content addressed
          its accuracy; bringing it into the support journey addressed an opportunity for people to
          find and use it.
        </p>
      </section>

      <NextCaseLink
        href="/work/design-system/"
        caseStudyName="A design system engineers used"
        className="cs-next"
      >
        <span className="l">Next case &rarr;</span>
        <div className="t">
          A design system engineers used{" "}
          <ArrowRightIcon style={{ width: 22, height: 22, display: "inline", verticalAlign: "middle" }} />
        </div>
      </NextCaseLink>

      <footer className="cs-foot">
        <span className="cs-eyebrow">End of case study</span>
        <p>Corporate banking · Support experience · Live</p>
      </footer>
    </article>
  );
}
