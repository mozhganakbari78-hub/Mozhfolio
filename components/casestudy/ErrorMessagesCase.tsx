import NextCaseLink from "./NextCaseLink";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import CsImpact from "./CsImpact";
import CsStats from "./CsStats";
import MessageRewrite, { type Rewrite } from "./MessageRewrite";
import MessageAnatomy from "./MessageAnatomy";
import DeadEndMessage from "./DeadEndMessage";
import TicketRatio from "./TicketRatio";


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
          <span className="cs-eyebrow">Corporate banking · UX writing · 2 min read</span>
          <h1>Rewriting ~2,000 error messages so users know what to do next</h1>
          <p className="cs-lede">
            Support tickets were arriving as screenshots of error messages. I audited every message
            the platform could show and wrote <strong>three rules</strong> that became the standard.
          </p>
        </div>

        <div className="cs-hero-side">
          <CsImpact
            items={[
              { value: "6 \u2192 3 in 10", label: "Error tickets that only asked \u201cwhat do I do now?\u201d" },
              { value: "~2,000", label: "Messages audited; technical ones moved to logs, the rest rewritten" },
              { value: "Platform standard", label: "The three rules are now the reference for every new message" },
            ]}
          />

          <dl className="cs-meta">
            <div>
              <dt>Role</dt>
              <dd>Product Designer. Spotted it in tickets, ran the audit, wrote the framework, reviewed every message</dd>
            </div>
            <div>
              <dt>Scope</dt>
              <dd>~2,000 error messages · Persian-language product</dd>
            </div>
          </dl>
        </div>
      </header>

      <hr className="cs-divider" />

      {/* THE RESULT */}
      <section className="cs-reveal">
        <span className="cs-num">The result</span>
        <h2>Every message now says what happened and what to do next</h2>
        <MessageRewrite items={rewrites.slice(0, 1)} />
      </section>

      {/* 01 PROBLEM */}
      <section className="cs-reveal">
        <span className="cs-num">01 / Problem</span>
        <h2>Messages announced a failure and then stopped</h2>
        <p>Nobody assigned this. I found it reading support tickets.</p>
        <DeadEndMessage />
      </section>

      {/* 02 INSIGHT */}
      <section className="cs-reveal">
        <span className="cs-num">02 / Insight</span>
        <h2>2,000 one-off fixes would drift again. It needed rules</h2>
        <p>
          I sorted every string by failure shape. Purely technical ones, like{" "}
          <code>FTP transfer failed</code>, moved to logs.
        </p>
        <CsStats
          items={[
            { value: "~2,000", label: "messages audited" },
            { value: "3", label: "failure shapes found" },
            { value: "1", label: "standard, applied platform-wide" },
          ]}
        />
      </section>

      {/* 03 DECISION 1 */}
      <section className="cs-reveal">
        <span className="cs-num">03 / Decision 1</span>
        <h2>Three rules every message has to pass</h2>
        <MessageAnatomy />
      </section>

      {/* 04 DECISION 2 */}
      <section className="cs-reveal">
        <span className="cs-num">04 / Decision 2</span>
        <h2>A system rule is not the user&apos;s fault</h2>
        <MessageRewrite items={rewrites.slice(1)} />
      </section>

      {/* 05 OUTCOME */}
      <section className="cs-reveal">
        <span className="cs-num">05 / Outcome</span>
        <h2>&quot;What do I do now?&quot; tickets went from majority to minority</h2>
        <TicketRatio />
        <p>
          <strong>AI</strong> drafted the first pass; I reviewed every message by hand, because in
          banking a plausible rewrite can change what a message claims about money.
        </p>
        <p className="cs-takeaway">
          <span>What I learned</span>
          Some problems only show up at the level of the whole set.
        </p>
      </section>

      <NextCaseLink
        href="/work/reducing-support-friction"
        caseStudyName="Answers that appear while users describe their problem"
        className="cs-next"
      >
        <span className="l">Next case &rarr;</span>
        <div className="t">
          Answers that appear while users describe their problem{" "}
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
