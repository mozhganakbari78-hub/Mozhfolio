import NextCaseLink from "./NextCaseLink";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import CsImpact from "./CsImpact";
import Mockup from "./Mockup";
import CsStats from "./CsStats";
import RoutingShift from "./RoutingShift";
import ReframeStatement from "./ReframeStatement";
import TicketSplit from "./TicketSplit";
import VocabularyGap from "./VocabularyGap";
import SearchWeights from "./SearchWeights";

/*
 * Same shape as every case: what it is and what changed, the shipped design,
 * then problem → insight → two decisions → outcome. One visual per panel; the
 * copy only says what the figure can't.
 */
export default function SupportFrictionCase() {
  return (
    <article>
      {/* HERO */}
      <header className="cs-hero">
        <div className="cs-hero-main">
          <span className="cs-eyebrow">
            Corporate banking · 58,000+ organisations · 3 min read
          </span>
          <h1>Answers that appear while users describe their problem</h1>
          <p className="cs-lede">
            I was asked to expand the FAQ. <strong>~1,000 support tickets</strong> showed the
            answers already existed; users just couldn&apos;t reach them mid-task. So I moved the
            answers into the moment of friction.
          </p>
        </div>

        <div className="cs-hero-side">
          <CsImpact
            items={[
              { value: "4 in 5", label: "Tickets that never needed a person, now targeted by in-flow answers" },
              { value: "Fewer repeats", label: "Support reported fewer “where do I find this?” tickets after launch" },
              { value: "343 keywords", label: "A matching spec engineering could build without new infrastructure" },
            ]}
          />

          <dl className="cs-meta">
            <div>
              <dt>Role</dt>
              <dd>Product Designer. Ticket analysis, reframing the brief, the flow, and the matching spec</dd>
            </div>
            <div>
              <dt>Worked with</dt>
              <dd>Product · Support · Frontend tech lead · One product designer</dd>
            </div>
          </dl>
        </div>
      </header>

      <hr className="cs-divider" />

      {/* THE RESULT */}
      <section className="cs-shot cs-reveal">
        <Mockup
          src="/projects/support-faq-filter.webp"
          alt="Support page where matching FAQ answers filter in as the user types their issue"
          caption="The result: answers filter in as the user describes the problem; the ticket is the fallback"
        />
      </section>

      {/* 01 PROBLEM */}
      <section className="cs-reveal">
        <span className="cs-num">01 / Problem</span>
        <h2>4 out of 5 tickets did not need a person</h2>
        <p>I read ~1,000 tickets before touching the FAQ.</p>
        <TicketSplit />
      </section>

      {/* 02 INSIGHT */}
      <section className="cs-reveal">
        <span className="cs-num">02 / Insight</span>
        <h2>The answer wasn&apos;t missing. It was out of reach</h2>
        <ReframeStatement />
      </section>

      {/* 03 DECISION 1 */}
      <section className="cs-reveal">
        <span className="cs-num">03 / Decision 1</span>
        <h2>The ticket form becomes the last step, not the first</h2>
        <RoutingShift />
      </section>

      {/* 04 DECISION 2 */}
      <section className="cs-reveal">
        <span className="cs-num">04 / Decision 2</span>
        <h2>Match the user&apos;s words, not the product&apos;s</h2>
        <VocabularyGap />
      </section>

      {/* 05 CONSTRAINT */}
      <section className="cs-reveal">
        <span className="cs-num">05 / Constraint</span>
        <h2>Search was too expensive, so I changed its shape</h2>
        <p>A fixed keyword and synonym list, built and checked with <strong>AI</strong>.</p>
        <SearchWeights />
        <CsStats
          items={[
            { value: "89", label: "FAQ questions" },
            { value: "343", label: "keywords, each verified" },
            { value: "34", label: "synonym groups" },
          ]}
        />
      </section>

      {/* 06 OUTCOME */}
      <section className="cs-reveal">
        <span className="cs-num">06 / Outcome</span>
        <h2>Support conversations changed subject</h2>
        <div className="cs-signal">
          <div className="box">
            <div className="lab">Before</div>
            <div className="quote">&quot;Where do I find this?&quot;</div>
          </div>
          <div className="arrow">&rarr;</div>
          <div className="box">
            <div className="lab">After</div>
            <div className="quote">Genuinely functional issues</div>
          </div>
        </div>
        <p>Reported by the support team; there was no instrumented baseline.</p>
        <p className="cs-takeaway">
          <span>What I learned</span>
          Evidence earns scope. The tickets rewrote the brief, not me.
        </p>
      </section>

      <NextCaseLink
        href="/work/batch-transfer"
        caseStudyName="Batch payments where one bad row no longer blocks the file"
        className="cs-next"
      >
        <span className="l">Next case &rarr;</span>
        <div className="t">
          Batch payments where one bad row no longer blocks the file{" "}
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
