import NextCaseLink from "./NextCaseLink";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import CsGlance from "./CsGlance";
import MessageRewrite, { type Rewrite } from "./MessageRewrite";
import TicketRatio from "./TicketRatio";


const rewrites: Rewrite[] = [
  {
    label: "Cancellation blocked by permission",
    before: {
      fa: "شما ایجادکننده درخواست نیستید",
      en: "“You are not the creator of the request.”",
    },
    after: {
      fa: "شما ایجادکننده درخواست نیستید و دسترسی به لغو آن برای شما وجود ندارد؛ لطفاً با پشتیبانی تماس بگیرید.",
      en: "“You are not the creator of this request, so you do not have access to cancel it. Please contact support.”",
    },
    changes: [
      "accusatory phrasing → neutral rule",
      "broken clause → one readable sentence",
      "dead end → escalation path",
    ],
  },
];

export default function ErrorMessagesCase() {
  return (
    <article>
      {/* HERO */}
      <header className="cs-hero">
        <div className="cs-hero-main">
          <span className="cs-eyebrow">Case study · UX writing</span>
          <h1>Error messages that tell users what to do next</h1>
          <p className="cs-lede">
            How a pattern I spotted in support tickets became a rewrite of ~2,000 error messages and
            a writing standard for the whole platform.
          </p>
        </div>

        <div className="cs-hero-side">
          <CsGlance
            role="Product Designer, self-initiated"
            team="Solo, with the backend team"
            results={[
              { value: "6 → 3", label: "in 10 error tickets asked “what do I do now?”" },
              { value: "~2,000", label: "messages audited, rewritten or moved to logs" },
              { value: "3 rules", label: "now the platform standard" },
            ]}
          />
        </div>
      </header>

      <hr className="cs-divider" />

      {/* 1 */}
      <section className="cs-reveal">
        <span className="cs-num">Stuck</span>
        <h2>Nadia tries to cancel a payment request</h2>
        <p>Nadia is a company treasurer. She clicks cancel and sees this:</p>
        <div className="cs-msg">
          <span>Error</span>
          You are not the creator of the request.
        </div>
        <p className="cs-quote">&ldquo;Did I do something wrong? What do I do now?&rdquo;</p>
        <p className="cs-note">Nadia is a composite. The message is real.</p>
      </section>

      {/* 2 */}
      <section className="cs-reveal">
        <span className="cs-num">Not alone</span>
        <h2>She sends a screenshot to support</h2>
        <p>
          Reading tickets, I noticed many were just screenshots of error messages. Nobody had
          assigned this. The messages said what failed, but never what to do next.
        </p>
      </section>

      {/* 3 */}
      <section className="cs-reveal">
        <span className="cs-num">The audit</span>
        <h2>I pulled all ~2,000 messages</h2>
        <p>
          The same three problems kept repeating: internal jargon, no next step, and blame. Purely
          technical errors, like &ldquo;FTP transfer failed&rdquo;, didn&apos;t belong in front of
          users at all, so they moved to logs.
        </p>
      </section>

      {/* 4 */}
      <section className="cs-reveal">
        <span className="cs-num">The rules</span>
        <h2>Three rules every message has to pass</h2>
        <ol className="cs-rules">
          <li>Say what happened, in the user&apos;s words.</li>
          <li>Give the next step.</li>
          <li>Never blame the user.</li>
        </ol>
        <p className="cs-trade">
          <b>Why rules, not quick fixes:</b> one-off fixes drift again with the next release. Rules
          let anyone write a good message.
        </p>
      </section>

      {/* 5 */}
      <section className="cs-reveal">
        <span className="cs-num">The change</span>
        <h2>Now Nadia knows why, and what to do</h2>
        <MessageRewrite items={rewrites} />
      </section>

      {/* 6 */}
      <section className="cs-reveal">
        <span className="cs-num">At scale</span>
        <h2>AI wrote the drafts. I checked every one</h2>
        <p>
          In banking, a plausible rewrite can quietly change what a message says about money or
          permissions. So AI handled the volume, and I reviewed every message by hand.
        </p>
        <p className="cs-trade">
          <b>Trade-off:</b> slower than trusting the drafts.
        </p>
      </section>

      {/* 7 */}
      <section className="cs-reveal">
        <span className="cs-num">Result</span>
        <h2>Fewer screenshots in the support queue</h2>
        <p>
          Error tickets that only asked &ldquo;what do I do now?&rdquo; went from about 6 in 10 to 3
          in 10, and the three rules are now how every new message is written.
        </p>
        <TicketRatio />
        <p className="cs-takeaway">
          <span>What I learned</span>
          Copy is interface. Next time I&apos;d link tickets to error codes from day one, to measure
          each message.
        </p>
      </section>

      <NextCaseLink
        href="/work/reducing-support-friction"
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
        <p>Corporate banking · UX writing · Shipped</p>
      </footer>
    </article>
  );
}
