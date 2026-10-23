import NextCaseLink from "./NextCaseLink";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import CsGlance from "./CsGlance";
import Mockup from "./Mockup";
import CsStats from "./CsStats";
import TicketSplit from "./TicketSplit";
import VocabularyGap from "./VocabularyGap";

/*
 * Each case follows one person from the moment they get stuck to the moment
 * they don't. Every section is one step of that story: a heading, a sentence
 * or two, and at most one visual, preferably the real screen.
 */
export default function SupportFrictionCase() {
  return (
    <article>
      {/* HERO */}
      <header className="cs-hero">
        <div className="cs-hero-main">
          <span className="cs-eyebrow">Case study · Corporate banking</span>
          <h1>Support that answers users before they open a ticket</h1>
          <p className="cs-lede">
            How I turned a request for a bigger FAQ into a support page that finds the answer while
            users describe their problem.
          </p>
        </div>

        <div className="cs-hero-side">
          <CsGlance
            role="Product Designer, research to UI"
            team="Product, Support, Frontend lead"
            results={[
              <><b>4 in 5</b> tickets never needed a person. The redesign is built for them.</>,
              <>Answers appear <b>while users type</b>, before a ticket is sent.</>,
              <>Support reported <b>fewer repeat tickets</b> after launch.</>,
            ]}
          />
        </div>
      </header>

      <hr className="cs-divider" />

      {/* 1 */}
      <section className="cs-reveal">
        <span className="cs-num">Stuck</span>
        <h2>Sara&apos;s transfer is rejected</h2>
        <p>
          Sara is a finance officer paying a supplier before the end of the day. The transfer
          fails, so she opens Support.
        </p>
        <p className="cs-quote">&ldquo;Why won&apos;t my transfer go through?&rdquo;</p>
        <p className="cs-note">Sara is a composite, built from real support tickets.</p>
      </section>

      {/* 2 */}
      <section className="cs-reveal">
        <span className="cs-num">Lost</span>
        <h2>The answer exists, under a word she doesn&apos;t use</h2>
        <p>
          She searches the FAQ in her own words and finds nothing. The answer is there, filed under
          the product&apos;s term.
        </p>
        <VocabularyGap />
      </section>

      {/* 3 */}
      <section className="cs-reveal">
        <span className="cs-num">Not alone</span>
        <h2>She files a ticket, like hundreds of others</h2>
        <p>
          I was asked to make the FAQ bigger. First I read about 1,000 tickets: 4 in 5 asked
          something the FAQ already answered. The FAQ wasn&apos;t too small. It was out of reach.
        </p>
        <TicketSplit />
      </section>

      {/* 4 */}
      <section className="cs-reveal">
        <span className="cs-num">The change</span>
        <h2>Now Sara just types her question</h2>
        <p>
          The answers come to her. As she describes the problem, matching answers appear beside
          the ticket form.
        </p>
      </section>

      <section className="cs-shot cs-reveal">
        <Mockup
          src="/projects/support-live-match.webp"
          alt="Support page: the user types how to increase the amount they can transfer, and FAQ answers about transfer limits appear with the matched word highlighted"
          caption="Sara types “How can I increase the amount I’m allowed to transfer?” and the answers about limits appear"
        />
      </section>

      {/* 5 */}
      <section className="cs-reveal">
        <span className="cs-num">Behind it</span>
        <h2>Matching that engineering could actually build</h2>
        <p>
          Full search didn&apos;t fit the backend. So I designed matching on a fixed list of
          keywords and synonyms, built with AI and checked by hand. When it isn&apos;t sure, it
          shows nothing: a wrong answer is worse than none.
        </p>
        <p className="cs-trade">
          <b>Trade-off:</b> less flexible than search, and the list needs upkeep.
        </p>
        <CsStats
          items={[
            { value: "89", label: "FAQ answers" },
            { value: "343", label: "keywords, each checked" },
            { value: "34", label: "synonym groups" },
          ]}
        />
      </section>

      {/* 6 */}
      <section className="cs-reveal">
        <span className="cs-num">Fallback</span>
        <h2>If it still doesn&apos;t help, the ticket is one step away</h2>
        <p>
          FAQ and ticket sit on one page, so Sara never has to choose a path before she understands
          her problem.
        </p>
      </section>

      <section className="cs-shot cs-reveal">
        <Mockup
          src="/projects/support-unified.webp"
          alt="Support page with the FAQ on the left and the ticket form on the right"
          caption="FAQ and ticket on one page"
        />
      </section>

      {/* 7 */}
      <section className="cs-reveal">
        <span className="cs-num">Result</span>
        <h2>Sara gets back to her payment. Support gets its time back</h2>
        <p>
          After launch, support reported fewer &ldquo;where do I find this?&rdquo; tickets and more
          time on real issues. There was no instrumented baseline, so I don&apos;t claim a
          percentage.
        </p>
        <p className="cs-takeaway">
          <span>What I learned</span>
          I didn&apos;t have the authority to change the brief. The tickets did.
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
