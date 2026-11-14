import NextCaseLink from "./NextCaseLink";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import CsGlance from "./CsGlance";
import Mockup from "./Mockup";
import CsStats from "./CsStats";
import TicketMachineScene from "./TicketMachineScene";
import ReframeStatement from "./ReframeStatement";
import UserQuestions from "./UserQuestions";
import IntentRoutes from "./IntentRoutes";
import QuestionToAnswer from "./QuestionToAnswer";

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
          <h1>Answer first, ask later</h1>
          <p className="cs-lede">
            We had no analytics, so I read support tickets every day. The same questions kept
            coming back, and a better FAQ alone wouldn&apos;t have answered them.
          </p>
        </div>

        <div className="cs-hero-side">
          <CsGlance
            role="Product Designer, research to UI"
            team="a fellow designer, the PM and product owner, the backend team"
            results={[
              { value: "~1,000", label: "support tickets from two years, sorted by what each one needed", icon: "Inbox" },
              { value: "37%", label: "were looking for an answer the FAQ could give", icon: "Ticket" },
              { value: "1 page", label: "FAQ and ticket merged, with answers as users type. Live", icon: "DocumentText" },
            ]}
          />
        </div>
      </header>

      <hr className="cs-divider" />

      {/* 1 */}
      <section className="cs-reveal">
        <span className="cs-num">The starting point</span>
        <h2>No analytics, so we read the tickets</h2>
        <p>
          For security reasons the platform has no analytics tool. Support tickets are the best
          data we have. So a fellow designer and I set aside time every day to read them.
        </p>
      </section>

      {/* 2 */}
      <section className="cs-reveal">
        <span className="cs-num">The pattern</span>
        <h2>The same questions kept coming back</h2>
        <p>Users asked the same things again and again:</p>
        <UserQuestions />
        <p>
          Some have one fixed answer. &ldquo;How do I add a signatory?&rdquo; is one: bank policy
          requires a branch visit, and neither we nor support can add, edit or remove a signatory.
          Each of these tickets still took the support team&apos;s time away from the ones about
          things that weren&apos;t working.
        </p>
        <p>
          The platform had an FAQ page, but it was old: a short list of questions, not updated
          since the new version was released. Our first idea was the obvious one: put these
          questions in the FAQ.
        </p>
      </section>

      {/* 3 */}
      <section className="cs-reveal">
        <span className="cs-num">The data</span>
        <h2>Two years of tickets, sorted by what each one needed</h2>
        <p>
          We asked the backend team to export every ticket filed since the new version was
          released: two years, about 1,000 tickets. Older ones described a product that no longer
          existed. We sorted them into groups with GPT and wrote up what we found.
        </p>
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

      <section className="cs-reveal">
        <span className="cs-num">The insight</span>
        <h2>Not everyone opens the ticket form for the same reason</h2>
        <p>
          Most users were looking for an answer, not for support. Only part of the tickets needed
          a person. The design had to treat these as different needs.
        </p>
        <IntentRoutes />
      </section>

      <section className="cs-reveal">
        <span className="cs-num">Making the case</span>
        <h2>The ticket form should be the last option</h2>
        <p>
          We took the breakdown to the PM and the product owner as a short deck. A share of these
          questions didn&apos;t need direct support, and the product could answer them. It came down
          to one principle:
        </p>
        <p className="cs-quote">
          &ldquo;The ticket form should be the last option, not the first choice.&rdquo;
        </p>
        <p>
          Answer first, ask later. The PM wanted the help desk spending less time on questions with
          a fixed answer and more on the financial issues that need a person.
        </p>
      </section>

      <section className="cs-shot cs-reveal">
        <QuestionToAnswer />
      </section>

      <section className="cs-reveal">
        <span className="cs-num">The question</span>
        <h2>Would anyone read it?</h2>
        <p>In that meeting I asked:</p>
        <p className="cs-quote">
          &ldquo;I&apos;m stuck in the middle of a payment in a banking system. Do I go and read the
          FAQ?&rdquo;
        </p>
        <p>
          Probably not. Filing a ticket is the easiest route, and the one that feels safest. A
          better FAQ changes nothing if nobody opens it.
        </p>
      </section>

      <section className="cs-shot cs-reveal">
        <ReframeStatement />
      </section>

      <section className="cs-shot cs-reveal">
        <TicketMachineScene />
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
              users needed guidance that depends on their own case, and blocking them would hurt
              the people with the most at stake.
            </span>
          </li>
        </ol>
      </section>

      {/* 4 */}
      <section className="cs-reveal">
        <span className="cs-num">Decision 1</span>
        <h2>Put the FAQ beside the ticket form</h2>
        <p>
          The answers had to be where users already were. We merged the two pages into one: the FAQ
          sits next to the ticket form, in view before anyone files a ticket.
        </p>
      </section>

      <section className="cs-shot cs-reveal">
        <Mockup
          src="/projects/support-unified.webp"
          alt="Support page with the FAQ on the left and the ticket form on the right"
          caption="FAQ and ticket on one page: the answers are in view, and the ticket is never blocked"
        />
      </section>

      {/* 5 */}
      <section className="cs-reveal">
        <span className="cs-num">The second doubt</span>
        <h2>A long list is still a list to search</h2>
        <p>
          The same question came back. A user who gets this far now faces a page full of questions.
          Would they search it, or still take the faster route and file the ticket?
        </p>
      </section>

      <section className="cs-reveal">
        <span className="cs-num">Decision 2</span>
        <h2>Filter the answers as the user types</h2>
        <p>
          So the form does the searching. As the user writes their ticket, the FAQ filters down to
          the answers that match their words. The list changing beside them catches the eye, and
          only a few answers are left to read. If one helps, they&apos;re done. If not, they send the
          ticket.
        </p>
        <p className="cs-trade">
          <b>Trade-off:</b> the ticket is never blocked, so some questions with a fixed answer
          still reach support.
        </p>
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
        <span className="cs-num">Decision 3</span>
        <h2>Match exact words first, meaning later</h2>
        <p>
          With Claude, I pulled keywords for every question and handed the backend team a full
          document. They pushed back: matching all of it was too heavy to build for now.
        </p>
        <p>So I changed the plan, not the goal, and split it into phases:</p>
        <ol className="cs-rules is-plain">
          <li>
            <span>
              <strong>Phase 1, built now.</strong>{" "}Words that appear as-is in the user&apos;s text
              and in the questions and answers, like signatory, plus clear synonym pairs: loan and
              facility, deposit and transfer.
            </span>
          </li>
          <li>
            <span>
              <strong>Phase 2, next.</strong> Matching by meaning, shaped by what users actually
              type.
            </span>
          </li>
        </ol>
        <p>
          I documented the phase 1 mapping myself, so the team built against a finished list, not
          a wish list.
        </p>
        <CsStats
          items={[
            { value: "89", label: "FAQ questions" },
            { value: "343", label: "keywords" },
            { value: "34", label: "synonym groups" },
          ]}
        />
        <p className="cs-trade">
          <b>Trade-off:</b> until phase 2, a user who words a question differently gets no match.
        </p>
      </section>

      {/* 7 */}
      <section className="cs-reveal">
        <span className="cs-num">Now</span>
        <h2>Live, and learning from real users</h2>
        <p>
          The merged page is live. Without analytics I can&apos;t put a number on the change. What I
          can say comes from the tickets we still read every day: questions with a fixed answer
          come up less often than before.
        </p>
        <p>
          We&apos;re reading those tickets now to plan phase 2: matching a user&apos;s text to an
          answer by its meaning, not only its words.
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
