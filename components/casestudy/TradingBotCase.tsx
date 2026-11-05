// Draft: not published yet. To publish, add it to data/caseStudies.ts and
// app/work/[slug]/page.tsx, and move the images in drafts/trading-bots/
// to public/projects/.
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
          <h1>Trading bots traders can trust</h1>
          <p className="cs-lede">
            The algo team was building trading bots for a platform that serves forex and crypto
            traders. I was handed a list of requirements in a domain I didn&apos;t know. I turned it
            into one flow: manage bots, follow each one on a single page, set its risk limits, and ask
            an AI assistant about the market.
          </p>
        </div>

        <div className="cs-hero-side">
          <CsGlance
            role="Product Designer · bot list, bot page, risk limits and AI assist"
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
          Traders run several bots at once, across crypto and forex. Each card answers one
          question: is this bot doing its job? A status label sits next to the name, Running or
          Paused, so the state reads before any number. Below it, in the order a trader checks:
        </p>
        <ol className="cs-rules is-plain">
          <li><span><b>Money.</b> What the bot was given, as an amount and a share of the balance, and its profit or loss so far.</span></li>
          <li><span><b>Reliability.</b> Signals with a win rate, and how many were won and lost.</span></li>
          <li><span><b>Behaviour.</b> The split between buy and sell signals, drawn to scale.</span></li>
          <li><span><b>Now.</b> The last signal: side, entry, leverage, take-profit and stop-loss.</span></li>
        </ol>
        <p>
          A paused bot keeps its history but fades back, so the running ones stand out. Search by
          name or pair, a Running / Paused filter and sorting by P&amp;L narrow a long list.
        </p>
        <p className="cs-trade">
          <b>Trade-off:</b> the card carries only the numbers needed to compare bots. Everything
          else lives on the bot&apos;s own page, one click away.
        </p>
      </section>

      <section className="cs-shot cs-reveal">
        <Mockup
          src="/projects/bot-list.webp"
          alt="The bots list: six bot cards for crypto and forex pairs, each with a Running or Paused label, allocation and profit or loss, win rate, buy and sell ratio and the last signal; paused bots are faded"
          caption="The bot list: state, money, reliability and the last signal on every card"
        />
      </section>

      {/* 6 */}
      <section className="cs-reveal">
        <span className="cs-num">Decision 2</span>
        <h2>Build, test and report on one page</h2>
        <p>
          A bot&apos;s life is a loop: check how it is doing, read the result, adjust the strategy,
          check again. Splitting those steps across the product would break the loop, so each bot
          has one page with three parts:
        </p>
        <ol className="cs-rules is-plain">
          <li><span><b>Overview.</b> What the bot was given, its signals, the buy and sell split, and the last signal in full.</span></li>
          <li><span><b>Balance.</b> How the bot&apos;s balance moved, from the last 24 hours to all time.</span></li>
          <li><span><b>Strategy.</b> The indicators the bot trades on, each with its parameters, and the timeframe. Indicators are added, edited and removed right here.</span></li>
        </ol>
        <p>
          The same report serves a test run and live trading, so a trader compares like with like:
          the numbers that convinced them in a test are the numbers they watch once the bot is live.
        </p>
        <p className="cs-trade">
          <b>Trade-off:</b> a dense page. Accepted for expert users, who would rather see everything
          than click between screens.
        </p>
      </section>

      <section className="cs-shot cs-reveal">
        <Mockup
          src="/projects/bot-onepage.webp"
          alt="A bot's page: overview with allocation, signals, buy and sell split and the last signal; balance over the last 30 days; and the strategy's indicators, MACD, RSI and ATR trailing stop, each with its parameters"
          caption="One page per bot: how it is doing, how it has done, and the strategy behind it"
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
          <li><span><b>Is it making money?</b> Balance over time, with the period&apos;s high and low marked as lines, and the change for the day.</span></li>
          <li><span><b>How reliable are its signals?</b> Signals by state, closed, live and pending, with how many were won and lost.</span></li>
          <li><span><b>How does it win and lose?</b> Total and average profit and loss per trade, and the buy and sell ratio.</span></li>
          <li><span><b>What is it doing now?</b> The last signal in full: pair, market, type and leverage, side, entry, stop-loss and take-profit. Copy to order turns it into a trade.</span></li>
        </ol>
        <p>
          The on/off switch sits at the top of the side column, above the market and pair.
          Turning a bot on or off is never buried.
        </p>
        <p className="cs-trade">
          <b>Colour carries meaning only:</b> green for profit and wins, red for losses, orange for
          pending. Everything else stays neutral, so a loss is never missed.
        </p>
      </section>

      <section className="cs-shot cs-reveal">
        <Mockup
          src="/projects/bot-report.webp"
          alt="A bot's report: balance over the last 24 hours with high and low lines, signals by state with won and lost counts, total and average profit and loss, buy and sell ratio, and the last signal with Copy to order"
          caption="A bot's report, ordered by the questions a trader asks"
        />
      </section>

      {/* risk limits */}
      <section className="cs-reveal">
        <span className="cs-num">Decision 4</span>
        <h2>Risk limits in plain terms, with no surprises</h2>
        <p>
          A trader sets how much a bot may use and when it must stop. Each control says what it
          does, not just what it is called:
        </p>
        <ol className="cs-rules is-plain">
          <li><span><b>Allocation.</b> An amount and its share of the available balance, typed or set with a slider, so the size of the bet is always in view.</span></li>
          <li><span><b>Stop loss.</b> &ldquo;Pause the bot when losses reach&rdquo; a set amount.</span></li>
          <li><span><b>Take profit.</b> &ldquo;Pause the bot when profit reaches&rdquo; a set amount.</span></li>
        </ol>
        <p>
          Editing a live bot changes only what comes next. The dialog says so: new settings apply to
          new signals, and open positions keep their stop-loss and take-profit.
        </p>
        <p className="cs-trade">
          <b>Trade-off:</b> these limits act on the bot as a whole. Per-trade stop-loss and
          take-profit still come from the strategy, so there are two levels to understand.
        </p>
      </section>

      <section className="cs-shot cs-reveal">
        <Mockup
          src="/projects/bot-edit.webp"
          alt="The Edit bot details dialog over the bot page: running switch with a note that changes apply to new signals, bot name, market, pair, amount to allocate with a slider and the available balance, stop loss and take profit described as pausing the bot"
          caption="Editing a live bot: limits described by what they do, and nothing changes for open positions"
        />
      </section>

      {/* 8 */}
      <section className="cs-reveal">
        <span className="cs-num">Decision 5</span>
        <h2>An assistant that answers in a trader&apos;s format</h2>
        <p>
          Traders asked the assistant about the market as much as about bots. Its answers are
          structured instead of a wall of text:
        </p>
        <ol className="cs-rules is-plain">
          <li><span><b>Asking.</b> An empty chat opens with example questions, and suggestions appear while typing, so a trader sees what the assistant can do.</span></li>
          <li><span><b>Facts first.</b> A news question returns a short summary next to the numbered sources it came from, each with its time and a link to read more.</span></li>
          <li><span><b>Opinion on request.</b> Analysis is a separate step, behind its own button, so the summary stays factual.</span></li>
          <li><span><b>Feedback.</b> Every answer can be rated, so weak answers are visible to the team.</span></li>
        </ol>
        <p className="cs-trade">
          <b>Trade-off:</b> one more click for analysis. Accepted, because in trading a summary that
          quietly mixes in opinion can move money.
        </p>
      </section>

      <section className="cs-shot cs-reveal">
        <Mockup
          src="/projects/ai-ask.webp"
          alt="AI Assist chat in its empty state: a question input with send and Suggestion buttons, and a list of example questions such as what makes the market price fluctuate and when is the least risky time to trade"
          caption="An empty chat starts with questions traders actually ask"
        />
      </section>

      <section className="cs-shot cs-reveal">
        <Mockup
          src="/projects/ai-news.webp"
          alt="An AI answer to a Bitcoin news question: a news summary with an Analysis button next to numbered news sources with times and Read more links, with typing suggestions open above the input"
          caption="A news answer: the summary beside its sources, analysis behind its own button"
        />
      </section>

      {/* 9 */}
      <section className="cs-reveal">
        <span className="cs-num">Testing</span>
        <h2>Shadowing the team&apos;s traders</h2>
        <p>
          To move fast, we sat beside in-house traders while they worked through the designs and
          said nothing. We didn&apos;t explain or guide, and we watched where they went. If a
          trader had to search for something, its place was wrong, and we moved it.
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
          <li><span><b>Assistance.</b> Share of AI answers rated helpful.</span></li>
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
        caseStudyName="Answers before the ticket"
        className="cs-next"
      >
        <span className="l">Next case &rarr;</span>
        <div className="t">
          Answers before the ticket{" "}
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
