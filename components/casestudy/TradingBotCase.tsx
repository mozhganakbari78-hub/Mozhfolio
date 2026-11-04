import NextCaseLink from "./NextCaseLink";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import CsGlance from "./CsGlance";
import Mockup from "./Mockup";

export default function TradingBotCase() {
  return (
    <article>
      {/* HERO */}
      <header className="cs-hero">
        <div className="cs-hero-main">
          <span className="cs-eyebrow">Case study · Trading · Web</span>
          <h1>Trading bots that earn trust before they touch real money</h1>
          <p className="cs-lede">
            The algo team was building trading bots for a platform that serves forex and crypto
            traders. I was handed a list of requirements in a domain I didn&apos;t know. I turned it
            into one flow: manage bots, build and test each one on a single page, and get strategy
            blocks from an AI assistant.
          </p>
        </div>

        <div className="cs-hero-side">
          <CsGlance
            role="Product Designer, requirements to UI"
            team="PM, Developers, Designers, Algo team"
            results={[
              { value: "3 surfaces", label: "bot list, bot page and AI assist, connected in one flow" },
              { value: "1 dashboard", label: "the same report for a test run and for live trading" },
              { value: "Shadowing", label: "sessions with the team's traders shaped where things live" },
            ]}
          />
        </div>
      </header>

      <hr className="cs-divider" />

      {/* 1 */}
      <section className="cs-reveal">
        <span className="cs-num">Context</span>
        <h2>One platform for forex and crypto</h2>
        <p>
          The platform let professional traders work in both forex and crypto markets, so they no
          longer needed two separate systems. Its users knew trading well: signals, leverage,
          stop-loss and take-profit were everyday language.
        </p>
        <p>
          The company&apos;s algo team was building trading bots: automated strategies that generate
          signals and trade on the user&apos;s behalf. Bringing those bots to users was a business
          priority, and it was a new feature for the product.
        </p>
      </section>

      {/* 2 */}
      <section className="cs-reveal">
        <span className="cs-num">The brief</span>
        <h2>A list of requirements, not a defined problem</h2>
        <p>
          The brief arrived as three wireframes, each a list of what a page should contain. It said
          what to show, not why, in what order, or what the trader was trying to decide.
        </p>
        <div className="cs-signal">
          <div className="box">
            <div className="lab">What I received</div>
            <ol className="cs-plain">
              <li><b>Bots</b>Name, creation date, notifications, a minimal report; edit, delete, duplicate; search and filter</li>
              <li><b>Bot page</b>Edit with code blocks and AI assist; test; report, &ldquo;same as the BI dashboard&rdquo;</li>
              <li><b>AI assist</b>Question input, categorised answers, &ldquo;add to my bot&rdquo;, history</li>
            </ol>
          </div>
          <div className="arrow">&rarr;</div>
          <div className="box">
            <div className="lab">What I had to answer first</div>
            <ol className="cs-plain">
              <li><b>Decision</b>What does a trader decide on each page?</li>
              <li><b>Readiness</b>When is a bot trustworthy enough for real money?</li>
              <li><b>Language</b>Which terms do traders expect, and which would confuse them?</li>
            </ol>
          </div>
        </div>
      </section>

      {/* 3 */}
      <section className="cs-reveal">
        <span className="cs-num">Learning the domain</span>
        <h2>Designing for experts in a field I didn&apos;t know</h2>
        <p>
          I had never used a trading bot. The users had, and they would notice anything that felt
          naive. Three sources closed the gap:
        </p>
        <ol className="cs-rules is-plain">
          <li><span><b>Competitors.</b> I reviewed existing bot platforms and mapped which features each offered, to separate what traders expect as standard from what would set us apart.</span></li>
          <li><span><b>The team&apos;s traders.</b> Conversations with in-house traders taught me their vocabulary and how they judge a strategy.</span></li>
          <li><span><b>Desk research.</b> Reading on bot types, signals and performance metrics filled in the rest.</span></li>
        </ol>
        <p className="cs-quote">
          The hardest part wasn&apos;t trading. It was the ambiguity. Every answer raised the next
          question, so I kept a running list of open questions and closed them one by one before
          drawing screens.
        </p>
      </section>

      {/* 4 */}
      <section className="cs-reveal">
        <span className="cs-num">The product risk</span>
        <h2>A bot trades real money on the user&apos;s behalf</h2>
        <p>
          A manual trade is one decision. A bot is a standing decision that keeps acting when the
          trader isn&apos;t watching. Before switching one on, a trader has to be confident it works.
        </p>
        <p className="cs-quote">
          The goal: let traders build confidence in a bot, with evidence they already know how to
          read, before it touches real money.
        </p>
      </section>

      {/* 5 */}
      <section className="cs-reveal">
        <span className="cs-num">Decision 1</span>
        <h2>Scan many bots, act on one</h2>
        <p>
          Traders run several bots at once. The list answers one question per card: is this bot
          doing its job? Each card shows the bot&apos;s name and creation date, a notification
          switch, and a minimal report: signals in total, live and closed; success and failure
          rate; and the spot or futures split. Edit, report, duplicate and delete sit on the card.
          Search by name and filters by date and performance narrow a long list.
        </p>
        <p className="cs-trade">
          <b>Trade-off:</b> the card carries only the numbers needed to compare bots. Everything
          else lives on the bot&apos;s own page, one click away.
        </p>
      </section>

      {/* 6 */}
      <section className="cs-reveal">
        <span className="cs-num">Decision 2</span>
        <h2>Build, test and report on one page</h2>
        <p>
          A bot&apos;s life is a loop: change the strategy, test it, read the result, change it
          again. Splitting those steps across the product would break the loop, so each bot has one
          page with three parts:
        </p>
        <ol className="cs-rules is-plain">
          <li><span><b>Edit.</b> The strategy is built from code blocks. Traders add a block or ask the AI assistant for one.</span></li>
          <li><span><b>Test.</b> A test run reports in the same dashboard as live trading.</span></li>
          <li><span><b>Report.</b> The live bot&apos;s performance, in the format traders already know from the platform&apos;s analytics.</span></li>
        </ol>
        <p>
          One dashboard for both test and live means a trader compares like with like. The
          numbers that convinced them in a test are the numbers they watch once the bot is live.
        </p>
        <p className="cs-trade">
          <b>Trade-off:</b> a dense page. Accepted for expert users, who would rather see everything
          than click between screens.
        </p>
      </section>

      <section className="cs-shot cs-reveal">
        <Mockup
          src="/projects/bot-profile.webp"
          alt="A bot's report page: balance changes over time with maximum and minimum balance lines, signals analysis, profit and loss, buy and sell ratio, and the last signal with a Copy to order button"
          caption="A bot's report: performance, signals and the last trade on one screen"
        />
      </section>

      {/* 7 */}
      <section className="cs-reveal">
        <span className="cs-num">Decision 3</span>
        <h2>A report that answers a trader&apos;s questions in order</h2>
        <p>
          The report is ordered by the questions a trader asks about a bot:
        </p>
        <ol className="cs-rules is-plain">
          <li><span><b>Is it making money?</b> Balance over time, with its maximum and minimum marked as lines, and the change for the period.</span></li>
          <li><span><b>How reliable are its signals?</b> Signals by state, expired, live and pending, with success and failure rates.</span></li>
          <li><span><b>How does it win and lose?</b> Total and average profit and loss per trade, and the buy and sell ratio.</span></li>
          <li><span><b>What is it doing now?</b> The last signal in full: pair, market, type and leverage, side, entry, stop-loss and take-profit. Copy to order turns it into a trade.</span></li>
        </ol>
        <p>
          Activation sits at the top of the page as a single switch, next to the market and pair.
          Turning a bot on or off is never buried.
        </p>
      </section>

      {/* 8 */}
      <section className="cs-reveal">
        <span className="cs-num">Decision 4</span>
        <h2>AI assist hands over blocks the trader can still read</h2>
        <p>
          The assistant helps in two ways. It answers questions, and it writes strategy blocks.
          Answers are labelled by type, so a trader can tell an explanation from a block of code.
          A code block comes with Add to my bot, which places it in the bot&apos;s editor.
        </p>
        <ol className="cs-rules is-plain">
          <li><span><b>Asking.</b> Suggestions while typing and example prompts in the input show what the assistant can do.</span></li>
          <li><span><b>History.</b> Every question and answer is kept, and filterable by text, date and type, so a useful block can be found again.</span></li>
        </ol>
        <p className="cs-trade">
          <b>Trade-off:</b> AI output never runs on its own. It lands in the editor as a block,
          where the trader can review it, change it and test it like any other.
        </p>
      </section>

      {/* 9 */}
      <section className="cs-reveal">
        <span className="cs-num">Testing</span>
        <h2>Shadowing the team&apos;s traders</h2>
        <p>
          To move fast, we sat beside in-house traders while they worked through the designs and
          said nothing. We didn&apos;t explain or guide, and we watched where they went. When
          a trader searched for something, its place was wrong, and we moved it.
        </p>
      </section>

      {/* 10 */}
      <section className="cs-reveal">
        <span className="cs-num">Outcome</span>
        <h2>From a feature list to a product flow</h2>
        <p>
          The requirements became three connected surfaces, built around one idea: a trader should
          trust a bot because of evidence, not because of a promise. These are the metrics I would
          use to evaluate it:
        </p>
        <ol className="cs-rules is-plain">
          <li><span><b>Readiness.</b> Share of bots that are tested before they go live.</span></li>
          <li><span><b>Assistance.</b> Share of AI-written blocks that are added to a bot and kept.</span></li>
          <li><span><b>Retention.</b> How long live bots stay switched on.</span></li>
        </ol>
        <p className="cs-takeaway">
          <span>What I learned</span>
          In a domain you don&apos;t know, the ambiguity is the work. Turn it into a list of open
          questions and close them one by one, before you draw a single screen.
        </p>
      </section>

      <NextCaseLink
        href="/work/reducing-support-friction/"
        caseStudyName="Support that answers users before they open a ticket"
        className="cs-next"
      >
        <span className="l">Next case &rarr;</span>
        <div className="t">
          Support that answers users before they open a ticket{" "}
          <ArrowRightIcon style={{ width: 22, height: 22, display: "inline", verticalAlign: "middle" }} />
        </div>
      </NextCaseLink>

      <footer className="cs-foot">
        <span className="cs-eyebrow">End of case study</span>
        <p>Trading · Bots · AI assist</p>
      </footer>
    </article>
  );
}
