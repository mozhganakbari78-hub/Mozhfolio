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
          <h1>Answers where users get stuck</h1>
          <p className="cs-lede">
            We have no analytics, so a fellow designer and I read support tickets every day. They
            showed the same questions coming back, and that a better FAQ alone wouldn&apos;t answer
            them.
          </p>
        </div>

        <div className="cs-hero-side">
          <CsGlance
            role="Product Designer, research to UI"
            team="a fellow designer, the PM and product owner, the backend team"
            results={[
              { value: "~1,000", label: "support tickets from two years, sorted by what each one needed", icon: "Inbox" },
              { value: "37%", label: "had one fixed answer, often a bank policy", icon: "Ticket" },
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
          data we have, so a fellow designer and I set aside time every day to read them.
        </p>
        <p>
          After a while a pattern showed: users kept asking the same questions, like &ldquo;How do I
          add a signatory?&rdquo;
        </p>
      </section>

      {/* 2 */}
      <section className="cs-reveal">
        <span className="cs-num">The pattern</span>
        <h2>The same questions, each with one fixed answer</h2>
        <p>
          &ldquo;How do I add a signatory?&rdquo; has one answer: bank policy requires a branch
          visit, and adding, editing or removing a signatory isn&apos;t something we or support can
          do. Yet users kept asking, and every one of those tickets took the support team&apos;s
          time away from tickets about things that weren&apos;t working.
        </p>
        <p>
          The platform did have an FAQ page, but it was old: a short list of questions that
          hadn&apos;t been updated since the new version was released. Our first idea was the
          obvious one: put these questions in the FAQ.
        </p>
      </section>

      {/* 3 */}
      <section className="cs-reveal">
        <span className="cs-num">The data</span>
        <h2>Two years of tickets, sorted by what each one needed</h2>
        <p>
          We asked the backend team to export every ticket filed since the new version was
          released: two years, about 1,000 tickets. Anything older described a product that no
          longer existed. We sorted them into groups with GPT and wrote up what we found.
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

      <section className="cs-reveal">
        <span className="cs-num">Making the case</span>
        <h2>A share of these tickets didn&apos;t need a person</h2>
        <p>
          We took the analysis to the PM and product owner: the ticket breakdown, what each group
          needed, and the point that a share of these questions didn&apos;t need direct support and
          could be answered in the product. The PM wanted the help desk spending less time on
          questions with a fixed answer and more on the financial issues that need a person.
        </p>
      </section>

      <section className="cs-reveal">
        <span className="cs-num">The question</span>
        <h2>Would anyone read it?</h2>
        <p>In that meeting I asked the question that changed the project:</p>
        <p className="cs-quote">
          &ldquo;I&apos;m stuck in the middle of a payment in a banking system. Do I go and read the
          FAQ?&rdquo;
        </p>
        <p>
          Probably not. Filing a ticket is the easiest route, and the one that feels safest. Adding
          answers to the FAQ wouldn&apos;t change anything if users never went looking.
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
              tickets were about the user&apos;s own case, and blocking them would hurt the people
              with the most at stake.
            </span>
          </li>
        </ol>
      </section>

      {/* 4 */}
      <section className="cs-reveal">
        <span className="cs-num">First answer</span>
        <h2>Put the FAQ and the ticket form on one page</h2>
        <p>
          The answers had to be where users already were. So we merged the two pages: the FAQ sits
          beside the ticket form, in view before anyone files a ticket, and the ticket is never
          blocked.
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
        <h2>A page full of questions is still a page to search</h2>
        <p>
          Then the same question came back. A user who has come this far now faces a long list of
          questions. Would they stop and search it, or still take the faster route and file the
          ticket?
        </p>
      </section>

      <section className="cs-reveal">
        <span className="cs-num">The decision</span>
        <h2>Filter the answers as the user types</h2>
        <p>
          So the form does the searching. As the user writes their ticket, the FAQ filters to the
          answers that match their words. The list changing beside them catches the eye, and there
          are only a few answers left to read. If one helps, they&apos;re done. If not, they just
          send the ticket.
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
          The merged page is live. Without analytics I can&apos;t put an exact number on the
          change. What I can say comes from the tickets we still read every day: questions with a
          fixed answer come up less often than they did.
        </p>
        <p>
          We&apos;re now studying those tickets to plan the next phase: matching a user&apos;s text to
          an answer by its meaning, not only by its words.
        </p>
        <p className="cs-takeaway">
          <span>What I learned</span>
          Before improving something, ask whether anyone uses it. The answer changed the whole
          project.
        </p>
      </section>

      <NextCaseLink
        href="/work/trading-bots/"
        caseStudyName="Trading bots traders can trust"
        className="cs-next"
      >
        <span className="l">Next case &rarr;</span>
        <div className="t">
          Trading bots traders can trust{" "}
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
