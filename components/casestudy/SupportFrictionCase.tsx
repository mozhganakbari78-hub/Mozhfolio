import NextCaseLink from "./NextCaseLink";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import CsGlance from "./CsGlance";
import Mockup from "./Mockup";
import CsStats from "./CsStats";
import TicketSplit from "./TicketSplit";
import VocabularyGap from "./VocabularyGap";
import RoutingShift from "./RoutingShift";
import Scenario from "./Scenario";
import WhyTradeoff from "./WhyTradeoff";

/*
 * One pattern for every case: the hero answers problem / what I did / impact,
 * then each section is a heading, two or three plain sentences and one
 * visual. Decisions carry their reasoning (why, trade-off) right beside them.
 */
export default function SupportFrictionCase() {
  return (
    <article>
      {/* HERO */}
      <header className="cs-hero">
        <div className="cs-hero-main">
          <span className="cs-eyebrow">Case study</span>
          <h1>Support that answers users before they open a ticket</h1>
          <p className="cs-lede">
            Redesigning the support page of a banking platform used by 58,000+ organisations.
          </p>
        </div>

        <div className="cs-hero-side">
          <CsGlance
            company="Sadad · Bank Melli Iran"
            role="Product Designer"
            platform="Web app · B2B corporate banking"
            team="Product, Support, Frontend lead, 1 designer"
            problem="Support was flooded with tickets. 4 in 5 didn't need a person: the answer already existed, but users couldn't find it mid-task."
            did="Read ~1,000 tickets, changed the brief from “expand the FAQ” to “answer users while they describe the problem”, and designed the flow, the UI and the matching logic."
            results={[
              <><b>4 in 5</b> tickets didn&apos;t need a person; the redesign targets exactly those</>,
              <>Answers appear <b>while users type</b> their question, before a ticket is sent</>,
              <>Support reported <b>fewer repeat tickets</b> after launch</>,
            ]}
          />
        </div>
      </header>

      <hr className="cs-divider" />

      {/* FINAL DESIGN */}
      <section className="cs-shot cs-reveal">
        <Mockup
          src="/projects/support-live-match.webp"
          alt="Support page: the user types how to increase the amount they can transfer, and FAQ answers about transfer limits appear with the matched word highlighted"
          caption="Final design: the user types their question and matching answers appear before they send a ticket"
        />
      </section>

      {/* CONTEXT */}
      <section className="cs-reveal">
        <span className="cs-num">Context</span>
        <h2>Users come to support in the middle of a task</h2>
        <p>
          A typical case from the tickets: a finance officer&apos;s transfer is rejected, and the
          answer she needs is in the FAQ under a word she doesn&apos;t use.
        </p>
        <Scenario
          kind="before"
          who="Finance officer whose transfer was just rejected"
          steps={[
            { label: "Opens Support", thought: "FAQ or ticket? I don't know yet." },
            { label: "Searches “how much can I send”", thought: "Nothing.", tone: "pain" },
            { label: "Files a ticket and waits", tone: "pain" },
          ]}
          end="The answer was in the FAQ, filed under “transfer limit”."
        />
      </section>

      {/* PROBLEM */}
      <section className="cs-reveal">
        <span className="cs-num">Problem</span>
        <h2>4 in 5 tickets didn&apos;t need a person</h2>
        <p>
          Before designing anything I read about 1,000 tickets. Most were questions the FAQ already
          answered.
        </p>
        <TicketSplit />
      </section>

      {/* INSIGHT */}
      <section className="cs-reveal">
        <span className="cs-num">Insight</span>
        <h2>Users and the FAQ used different words</h2>
        <p>
          A bigger FAQ wouldn&apos;t help. Users describe the problem in their own words; the FAQ uses
          the product&apos;s.
        </p>
        <VocabularyGap />
      </section>

      {/* DECISION 1 */}
      <section className="cs-reveal">
        <span className="cs-num">Decision 1</span>
        <h2>Put the answers inside the ticket form</h2>
        <WhyTradeoff
          why="Users can't tell if the FAQ will help until they've described the problem. So describing it is what brings up the answers."
          tradeoff="One busier page instead of two simple ones."
        />
        <RoutingShift />
      </section>

      {/* SHOT — one page */}
      <section className="cs-shot cs-reveal">
        <Mockup
          src="/projects/support-unified.webp"
          alt="Support page with the FAQ on the left and the ticket form on the right"
          caption="FAQ and ticket on one page: no choice to make before understanding the problem"
        />
      </section>

      {/* DECISION 2 */}
      <section className="cs-reveal">
        <span className="cs-num">Decision 2</span>
        <h2>Match keywords, not full-text search</h2>
        <WhyTradeoff
          why="Engineering said real search didn't fit the backend. I asked how the data was stored and designed ranked keyword matching it could support. Below a threshold it shows nothing: a wrong answer is worse than none."
          tradeoff="Less flexible than search, and the keyword list must be maintained."
        />
        <CsStats
          items={[
            { value: "89", label: "FAQ questions" },
            { value: "343", label: "keywords, each verified" },
            { value: "34", label: "synonym groups" },
          ]}
        />
      </section>

      {/* DECISION 3 */}
      <section className="cs-reveal">
        <span className="cs-num">Decision 3</span>
        <h2>Keep the old ticket categories</h2>
        <WhyTradeoff
          why="Back-office filters and two years of ticket data depended on them. Changing them would have disrupted a live support team."
          tradeoff="A messier structure, logged as design debt."
        />
      </section>

      {/* RESULT */}
      <section className="cs-reveal">
        <span className="cs-num">Result</span>
        <h2>Support stopped answering &ldquo;where do I find this?&rdquo;</h2>
        <div className="cs-signal">
          <div className="box">
            <div className="lab">Before</div>
            <div className="quote">&quot;Where do I find this?&quot;</div>
          </div>
          <div className="arrow">&rarr;</div>
          <div className="box">
            <div className="lab">After</div>
            <div className="quote">Real functional issues</div>
          </div>
        </div>
        <p>Reported by the support team after launch. There was no instrumented baseline.</p>
        <p className="cs-takeaway">
          <span>What I learned</span>
          Evidence earns scope. I didn&apos;t argue to change the brief; the tickets did.
        </p>
      </section>

      <NextCaseLink
        href="/work/batch-transfer"
        caseStudyName="Bulk payments where one bad row doesn't stop the file"
        className="cs-next"
      >
        <span className="l">Next case &rarr;</span>
        <div className="t">
          Bulk payments where one bad row doesn&apos;t stop the file{" "}
          <ArrowRightIcon style={{ width: 22, height: 22, display: "inline", verticalAlign: "middle" }} />
        </div>
      </NextCaseLink>

      <footer className="cs-foot">
        <span className="cs-eyebrow">End of case study</span>
        <p>Corporate banking · Support experience · Shipped</p>
      </footer>
    </article>
  );
}
