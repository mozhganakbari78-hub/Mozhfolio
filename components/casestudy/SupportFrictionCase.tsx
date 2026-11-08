import NextCaseLink from "./NextCaseLink";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import CsGlance from "./CsGlance";
import Mockup from "./Mockup";
import CsStats from "./CsStats";
import TicketSplit from "./TicketSplit";
import TicketMachineScene from "./TicketMachineScene";
import ReframeStatement from "./ReframeStatement";

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
          <h1>Answers before the ticket</h1>
          <p className="cs-lede">
            I was asked to refresh an outdated FAQ. The tickets showed the real problem: answers
            weren&apos;t reaching users at the moment they got stuck.
          </p>
        </div>

        <div className="cs-hero-side">
          <CsGlance
            role="Product Designer, research to UI"
            team="Product, Support, Frontend lead"
            results={[
              { value: "37%", label: "of ~1,000 tickets had one fixed answer, often a bank policy", icon: "Inbox" },
              { value: "~15% fewer", label: "guidance questions after launch, by my own count", icon: "Ticket" },
              { value: "1 page", label: "FAQ and ticket merged, with answers as users type", icon: "DocumentText" },
            ]}
          />
        </div>
      </header>

      <hr className="cs-divider" />

      {/* 1 */}
      <section className="cs-reveal">
        <span className="cs-num">The starting point</span>
        <h2>The product had moved on. The FAQ hadn&apos;t</h2>
        <p>
          We had added and removed widgets and changed how the platform works, but the FAQ still
          described the old version. The product owner and I agreed it was time for a refresh.
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
        <h2>Many tickets had one fixed answer</h2>
        <p>
          A large share just needed information. &ldquo;How do I add a signatory?&rdquo; has one
          answer: bank policy requires a branch visit, and neither we nor support can change that.
          Yet users called to ask, filling the phone lines and taking the support team&apos;s time.
        </p>
        <TicketSplit />
      </section>

      <section className="cs-reveal">
        <span className="cs-num">The long tail</span>
        <h2>No short list would cover it</h2>
        <p>
          The most common topic, account statements, was only 1.5% of tickets. The twelve most
          common together came to about a tenth. A curated list of top questions would miss most
          users, so whatever we built had to search everything.
        </p>
      </section>

      <section className="cs-shot cs-reveal">
        <ReframeStatement />
      </section>

      <section className="cs-reveal">
        <span className="cs-num">Making the case</span>
        <h2>Answer first, ask later</h2>
        <p>
          We took the analysis to the PM and product owner as a short deck: the ticket breakdown,
          what each group needed, and one principle: answer first, ask later. It was approved in the
          same meeting. The PM wanted the help desk spending less time on questions with a fixed
          answer and more on the financial issues that need a person.
        </p>
      </section>

      <section className="cs-shot cs-reveal">
        <TicketMachineScene />
      </section>

      {/* 4 */}
      <section className="cs-reveal">
        <span className="cs-num">The challenge</span>
        <h2>Adding answers to the FAQ wouldn&apos;t change anything</h2>
        <p>
          Users still wouldn&apos;t go looking. The answers had to reach them where they already
          were: in the middle of filing a ticket, without getting in their way.
        </p>
      </section>

      <section className="cs-reveal">
        <span className="cs-num">The options</span>
        <h2>Two obvious fixes, both ruled out</h2>
        <ol className="cs-rules is-plain">
          {/* one span per item: the list lays out number | text, so a bare <strong> would split into its own column */}
          <li>
            <span>
              <strong>A list of top questions.</strong>{" "}Ruled out by the long tail: no short list
              would reach most users.
            </span>
          </li>
          <li>
            <span>
              <strong>Make users search the FAQ before filing a ticket.</strong>{" "}Ruled out: 43% of
              tickets were about the user&apos;s own case, and blocking them would hurt the people
              with the most at stake.
            </span>
          </li>
        </ol>
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
          src="/projects/support-unified.webp"
          alt="Support page with the FAQ on the left and the ticket form on the right"
          caption="FAQ and ticket on one page: the answers are in view, and the ticket is never blocked"
        />
      </section>

      <section className="cs-shot cs-reveal">
        <Mockup
          src="/projects/support-live-match.webp"
          alt="Support page: the user types how to increase the amount they can transfer, and FAQ answers about transfer limits appear with the matched word highlighted"
          caption="The user types “How can I increase the amount I’m allowed to transfer?” and the answers about limits appear"
        />
      </section>

      {/* 6 */}
      <section className="cs-reveal">
        <span className="cs-num">The constraint</span>
        <h2>The backend said it was too heavy, so I rescoped it with them</h2>
        <p>
          Matching a user&apos;s question to the right FAQ answer was the hardest technical part.
          With Claude, I pulled keywords and synonyms for every question and handed the backend
          team a full document. They pushed back: matching all of it was too heavy to build.
        </p>
        <p>So I changed the plan, not the goal. I wrote a smaller spec and split it into phases:</p>
        <ol className="cs-rules is-plain">
          <li>
            <span>
              <strong>Phase 1, built now.</strong> Words that appear as-is in the questions and
              answers, like account, statement, facility and transfer, plus clear synonym pairs:
              facility and loan, transfer and deposit, statement and financial report.
            </span>
          </li>
          <li>
            <span>
              <strong>Phase 2, next.</strong> Matching by concept and whole sentence, shaped by what
              users actually type.
            </span>
          </li>
        </ol>
        <p>
          I did the phase 1 mapping myself, so the team built against a finished list, not a wish
          list.
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
          The merged page is live. By my own count of the support queue, guidance questions fell by
          about 15% after launch, and most of what&apos;s left is about how features work. We&apos;re
          now studying what users type to plan the next phase of matching.
        </p>
        <p className="cs-takeaway">
          <span>What I learned</span>
          Before improving something, ask whether anyone uses it. The answer changed the whole
          project.
        </p>
      </section>

      <NextCaseLink
        href="/work/iot-rule-builder/"
        caseStudyName="Greenhouse rules in one sentence"
        className="cs-next"
      >
        <span className="l">Next case &rarr;</span>
        <div className="t">
          Greenhouse rules in one sentence{" "}
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
