import NextCaseLink from "./NextCaseLink";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import CsGlance from "./CsGlance";
import Mockup from "./Mockup";
import CsStats from "./CsStats";
import TicketSplit from "./TicketSplit";

/*
 * Each case follows one line of thought from the brief to where the product
 * is now. Every section is one step: a heading, a sentence or two, and at
 * most one visual, preferably the real screen.
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
            I was asked to refresh an outdated FAQ. First I asked a different question: would
            anyone stuck in a banking system actually read it?
          </p>
        </div>

        <div className="cs-hero-side">
          <CsGlance
            role="Product Designer, research to UI"
            team="Product, Support, Frontend lead"
            results={[
              <><b>4 in 5</b> tickets didn&apos;t need a person. The redesign is built for them.</>,
              <>FAQ and ticket <b>merged into one page</b>, with answers that appear as users type.</>,
              <><b>Live now.</b> Real user behaviour is shaping phase 2.</>,
            ]}
          />
        </div>
      </header>

      <hr className="cs-divider" />

      {/* 1 */}
      <section className="cs-reveal">
        <span className="cs-num">The brief</span>
        <h2>Make the FAQ clearer and up to date</h2>
        <p>
          The questions were old and hard to follow. My task was to rewrite them and add what was
          missing.
        </p>
      </section>

      {/* 2 */}
      <section className="cs-reveal">
        <span className="cs-num">The question</span>
        <h2>Would anyone read it?</h2>
        <p>I put myself in the user&apos;s place:</p>
        <p className="cs-quote">
          &ldquo;I&apos;m stuck in the middle of a payment in a banking system. Do I go and read the
          FAQ?&rdquo;
        </p>
        <p>Probably not. So before touching the FAQ, I went to see what users were actually asking.</p>
      </section>

      {/* 3 */}
      <section className="cs-reveal">
        <span className="cs-num">The tickets</span>
        <h2>Many tickets weren&apos;t support requests at all</h2>
        <p>
          A large share just needed information. &ldquo;How do I add a signatory?&rdquo; has one
          answer: visit a branch in person. Yet users called to ask, filling the phone lines and
          taking the support team&apos;s time.
        </p>
        <TicketSplit />
      </section>

      {/* 4 */}
      <section className="cs-reveal">
        <span className="cs-num">The challenge</span>
        <h2>Adding answers to the FAQ wouldn&apos;t change anything</h2>
        <p>
          Users still wouldn&apos;t go looking. The answers had to reach them where they already
          were: in the middle of filing a ticket. But without blocking them. Forcing users to search
          the FAQ before they can ask for help would only frustrate them.
        </p>
      </section>

      {/* 5 */}
      <section className="cs-reveal">
        <span className="cs-num">The decision</span>
        <h2>Merge the FAQ and the ticket form, with live search</h2>
        <p>
          As the user types their question into the ticket, matching answers appear beside it. If
          one helps, they&apos;re done. If not, they just send the ticket.
        </p>
      </section>

      <section className="cs-shot cs-reveal">
        <Mockup
          src="/projects/support-live-match.webp"
          alt="Support page: the user types how to increase the amount they can transfer, and FAQ answers about transfer limits appear with the matched word highlighted"
          caption="The user types “How can I increase the amount I’m allowed to transfer?” and the answers about limits appear"
        />
      </section>

      <section className="cs-shot cs-reveal">
        <Mockup
          src="/projects/support-unified.webp"
          alt="Support page with the FAQ on the left and the ticket form on the right"
          caption="FAQ and ticket on one page: the answers are in view, and the ticket is never blocked"
        />
      </section>

      {/* 6 */}
      <section className="cs-reveal">
        <span className="cs-num">The constraint</span>
        <h2>Matching users&apos; words was hard for the backend, so I phased it</h2>
        <p>Mapping a user&apos;s question to the right FAQ answer was the biggest technical issue.</p>
        <ol className="cs-rules is-plain">
          <li>First: words that appear in the question, plus known synonyms, like loan and facility, or deposit and transfer.</li>
          <li>Then: grow the synonym list by watching how real users phrase things.</li>
          <li>Later: match whole sentences and meaning.</li>
        </ol>
        <p>
          I used AI to pull the keywords for every question, both the exact words and their
          synonyms, then checked them.
        </p>
        <CsStats
          items={[
            { value: "89", label: "FAQ questions" },
            { value: "343", label: "keywords" },
            { value: "34", label: "synonym groups" },
          ]}
        />
      </section>

      {/* 7 */}
      <section className="cs-reveal">
        <span className="cs-num">Now</span>
        <h2>Live, and learning from real users</h2>
        <p>
          The merged page is live. We&apos;re studying how users search and what they type, to plan
          the next phase of matching.
        </p>
        <p className="cs-takeaway">
          <span>What I learned</span>
          Before improving something, ask whether anyone uses it. The answer changed the whole
          project.
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
        <p>Corporate banking · Support experience · Live</p>
      </footer>
    </article>
  );
}
