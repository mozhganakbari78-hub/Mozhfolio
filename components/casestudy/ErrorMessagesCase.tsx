import NextCaseLink from "./NextCaseLink";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import CsImpact from "./CsImpact";
import CsStats from "./CsStats";
import MessageRewrite, { type Rewrite } from "./MessageRewrite";
import MessageAnatomy from "./MessageAnatomy";
import DeadEndMessage from "./DeadEndMessage";
import TicketRatio from "./TicketRatio";
import Scenario from "./Scenario";
import SeniorCalls from "./SeniorCalls";


const rewrites: Rewrite[] = [
  {
    label: "Access not registered for offline batch deposit",
    before: {
      fa: "کاربر گرامی، کلاینت شما در سامانه واریز دسته ای آفلاین ثبت نشده است",
      en: "“Dear user, your client is not registered in the offline batch deposit system.”",
    },
    after: {
      fa: "کاربر گرامی، دسترسی شما در سامانه واریز دسته‌ای آفلاین ثبت نشده است. لطفاً برای ثبت یا فعال‌سازی با پشتیبانی تماس بگیرید.",
      en: "“Dear user, your access is not registered in the offline batch deposit system. Please contact support to register or activate it.”",
    },
    changes: [
      "internal term → the user's own reality",
      "dead end → escalation path",
    ],
  },
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
          <span className="cs-eyebrow">Corporate banking platform · UX writing at scale</span>
          <h1>Error messages that tell users what to do next</h1>
          <p className="cs-lede">
            Nobody assigned this. Reading tickets, I noticed many were just screenshots of error
            messages. I audited all <strong>~2,000</strong> messages and set three rules that became
            the platform standard.
          </p>
        </div>

        <div className="cs-hero-side">
          <CsImpact
            items={[
              { value: "6 \u2192 3 in 10", label: "Error tickets that only asked \u201cwhat do I do now?\u201d" },
              { value: "~2,000", label: "Messages audited; technical ones moved to logs, the rest rewritten" },
              { value: "Platform standard", label: "Every new error message is now written against the three rules" },
            ]}
          />
          <dl className="cs-meta">
            <div>
              <dt>My role</dt>
              <dd>Product Designer. Spotted it, ran the audit, wrote the framework, reviewed every message</dd>
            </div>
            <div>
              <dt>Scope</dt>
              <dd>~2,000 error messages · Persian-language product</dd>
            </div>
          </dl>
        </div>
      </header>

      <hr className="cs-divider" />

      {/* 01 SCENARIO */}
      <section className="cs-reveal">
        <span className="cs-num">01 / The scenario</span>
        <h2>A treasurer tries to cancel a payment request</h2>
        <Scenario
          kind="before"
          who="Company treasurer, cancelling a request a colleague created"
          steps={[
            { label: "Clicks cancel" },
            { label: "Sees \u201cYou are not the creator of the request.\u201d", thought: "Did I do something wrong?", tone: "pain" },
            { label: "No next step on screen", thought: "Can anyone cancel it? Who do I call?", tone: "pain" },
            { label: "Screenshots the error and files a ticket" },
          ]}
          end="Support answers a question the message should have answered."
          note="Composite scenario. The message is real."
        />
      </section>

      {/* 02 WHY IT MATTERED */}
      <section className="cs-reveal">
        <span className="cs-num">02 / Why it mattered</span>
        <h2>Most error tickets were really asking &ldquo;what now?&rdquo;</h2>
        <DeadEndMessage />
      </section>

      {/* 03 THE REAL PROBLEM */}
      <section className="cs-reveal">
        <span className="cs-num">03 / The real problem</span>
        <h2>2,000 messages, each written ad hoc by whoever built the feature</h2>
        <p>
          No single message was worth a meeting, so nobody owned the set. Fixing them one by one
          would drift again with the next release.
        </p>
        <CsStats
          items={[
            { value: "~2,000", label: "messages audited" },
            { value: "3", label: "failure shapes: jargon, no next step, blame" },
            { value: "1", label: "standard, applied platform-wide" },
          ]}
        />
      </section>

      {/* 04 MY CALLS */}
      <section className="cs-reveal">
        <span className="cs-num">04 / The calls I made</span>
        <h2>Three decisions, and what each one cost</h2>
        <SeniorCalls
          calls={[
            {
              title: "Decide what users should see at all",
              tension: "Show every error  vs  show only what users can act on",
              why: "\u201cFTP transfer failed\u201d matters to the on-call team, not to a treasurer. Purely technical errors moved to logs.",
              gaveUp: "The appearance of full transparency.",
            },
            {
              title: "Write rules, not 2,000 rewrites",
              tension: "Fix messages as reported  vs  fix the pattern",
              why: "Three rules any message can be checked against: say what happened, give the next step, drop the blame. The next person writing one doesn\u2019t start from zero.",
              gaveUp: "Quick visible wins on single messages.",
            },
            {
              title: "AI drafts, I review every message",
              tension: "Speed  vs  accuracy in a financial product",
              why: "A plausible rewrite can quietly change what a message claims about money or permissions. The model didn\u2019t know which terms were regulated.",
              gaveUp: "Time. Every one of the messages was read by hand.",
            },
          ]}
        />
      </section>

      {/* 04b THE RULES */}
      <section className="cs-reveal">
        <span className="cs-num">04 / The three rules</span>
        <h2>One shape every message has to pass</h2>
        <MessageAnatomy />
      </section>

      {/* 05 SCENARIO, REDESIGNED */}
      <section className="cs-reveal">
        <span className="cs-num">05 / The same moment, redesigned</span>
        <h2>The message answers the treasurer&apos;s three questions</h2>
        <Scenario
          kind="after"
          who="Same treasurer, same request"
          steps={[
            { label: "Clicks cancel" },
            { label: "Learns why: only the creator can cancel", tone: "good" },
            { label: "Sees the next step: contact support", tone: "good" },
          ]}
          end="No screenshot, no guessing."
        />
        <MessageRewrite items={rewrites.slice(1)} />
      </section>

      {/* 05b ANOTHER */}
      <section className="cs-reveal">
        <span className="cs-num">05 / The same rules, another message</span>
        <h2>Internal jargon becomes the user&apos;s own reality</h2>
        <MessageRewrite items={rewrites.slice(0, 1)} />
      </section>

      {/* 06 OUTCOME */}
      <section className="cs-reveal">
        <span className="cs-num">06 / Outcome</span>
        <h2>&ldquo;What do I do now?&rdquo; went from majority to minority</h2>
        <TicketRatio />
        <p className="cs-takeaway">
          <span>What I&apos;d do differently</span>
          Tie support contacts to error codes from the start, so I could see which messages still
          fail instead of reading the queue.
        </p>
      </section>

      <NextCaseLink
        href="/work/reducing-support-friction"
        caseStudyName="Getting users unstuck mid-task, without waiting for support"
        className="cs-next"
      >
        <span className="l">Next case &rarr;</span>
        <div className="t">
          Getting users unstuck mid-task{" "}
          <ArrowRightIcon style={{ width: 22, height: 22, display: "inline", verticalAlign: "middle" }} />
        </div>
      </NextCaseLink>

      <footer className="cs-foot">
        <span className="cs-eyebrow">End of case study</span>
        <p>Corporate banking · UX writing &amp; error systems · Shipped</p>
      </footer>
    </article>
  );
}
