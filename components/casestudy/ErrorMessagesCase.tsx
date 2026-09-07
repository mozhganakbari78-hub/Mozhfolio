import NextCaseLink from "./NextCaseLink";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import CsArt from "./CsArt";
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
    label: "Withdrawal terms not found",
    before: {
      fa: "شرایط برداشتی با این شماره یافت نشد",
      en: "“Withdrawal terms with this number were not found.”",
    },
    after: {
      fa: "شرایط برداشتی با این شماره یافت نشد؛ لطفاً از مبلغ و تاریخ انقضا اطمینان حاصل کرده و دوباره تلاش کنید.",
      en: "“Withdrawal terms with this number were not found. Please check the amount and expiry date, then try again.”",
    },
    changes: [
      "no next step → self-recovery",
      "names the two fields worth checking",
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
        <span className="cs-eyebrow">
          Case Study · Corporate Banking · UX Writing &amp; Error Systems
        </span>
        <h1>
          Users knew something had failed.
          <br />
          They didn&apos;t know what to do next.
        </h1>
        <p className="cs-lede">
          Users were filing support tickets that were just screenshots of error messages. I pulled
          every error string in the platform, audited roughly <strong>2,000 of them</strong>,
          separated what users should never see from what needed rewriting, and defined a framework
          that is now the platform standard for error copy.
        </p>

        <dl className="cs-meta">
          <div>
            <dt>Role</dt>
            <dd>Product Designer. Found the problem, ran the audit, defined the framework, reviewed every rewritten message</dd>
          </div>
          <div>
            <dt>Scope</dt>
            <dd>~2,000 error messages · Persian-language product</dd>
          </div>
          <div>
            <dt>Outcome</dt>
            <dd>Adopted as the platform standard. Error screenshot tickets roughly halved</dd>
          </div>
        </dl>
      </header>

      <hr className="cs-divider" />

      {/* 01 THE SIGNAL */}
      <section className="cs-reveal">
        <CsArt name="tickets" />
        <span className="cs-num">01 / The signal</span>
        <h2>Nobody assigned this. It came out of reading tickets.</h2>
        <p>
          I set aside time each day to read support tickets, and a pattern surfaced that I had not
          gone looking for: a lot of them were just screenshots of error messages. The people
          filing them were not reporting a bug. They were asking the three questions the message
          had left unanswered.
        </p>
        <DeadEndMessage />
      </section>

      {/* 02 THE AUDIT */}
      <section className="cs-reveal">
        <CsArt name="read" />
        <span className="cs-num">02 / The audit</span>
        <h2>A handful of screenshots is an anecdote, so I measured it</h2>
        <p>
          I asked the backend team to export every error string the platform could produce and got
          back roughly <strong>2,000 messages</strong>. Fixing them as they were reported would have
          meant 2,000 separate decisions and no shared logic, so I classified the whole set by{" "}
          <strong>failure shape</strong>: internal language, no next step, blame aimed at the user.
        </p>
        <CsStats
          items={[
            { value: "~2,000", label: "messages audited" },
            { value: "3", label: "rules in the framework" },
            { value: "1", label: "standard, applied platform-wide" },
          ]}
        />
      </section>

      {/* 03 THE TRIAGE */}
      <section className="cs-reveal">
        <span className="cs-num">03 / The first decision</span>
        <h2>Before asking how to rewrite it, I asked whether to show it at all</h2>
        <p>
          A large share of the set was purely technical. <code>FTP transfer failed</code> refers to
          a file conversion that happens behind the scenes. It matters to the team on call and
          means nothing to a treasurer trying to release payroll. Handing that string to a user is
          not transparency, it is noise dressed as an explanation.
        </p>
        <div className="cs-pull">
          Technical failures belonged in logs. What survived that filter was the set that genuinely
          needed rewriting.
        </div>
      </section>

      {/* 04 THE FRAMEWORK */}
      <section className="cs-reveal">
        <CsArt name="shield" />
        <span className="cs-num">04 / The framework</span>
        <h2>Three rules every message had to pass</h2>
        <p>
          Not a style guide. A shape you can hold any message against and see immediately what it
          is missing.
        </p>
        <MessageAnatomy />
      </section>

      {/* 05 THE REWRITES */}
      <section className="cs-reveal">
        <span className="cs-num">05 / In production</span>
        <h2>What the rules look like on real strings</h2>
        <MessageRewrite items={rewrites.slice(0, 2)} />
      </section>

      {/* 05b THE HARD ONE */}
      <section className="cs-reveal">
        <span className="cs-num">05 / In production</span>
        <h2>The one written as an accusation</h2>
        <MessageRewrite items={rewrites.slice(2)} />
        <div className="cs-pull">
          A system enforcing a rule is not the same as the user doing something wrong. Most of the
          rewrite was making the copy stop confusing the two.
        </div>
      </section>

      {/* 06 THE AI DECISION */}
      <section className="cs-reveal">
        <CsArt name="rows" />
        <span className="cs-num">06 / Working through the volume</span>
        <h2>AI drafted the first pass. I reviewed every message.</h2>
        <p>
          Once the framework existed, I used AI to generate a first pass, then read and edited every
          message myself. In a financial product, a plausible-sounding rewrite can quietly change
          what a message claims about a transaction, a permission, or a balance, and the model had
          no way to know which terms were regulated vocabulary.
        </p>
        <div className="cs-pull">
          The tool was good at volume. It was not accountable for accuracy. That part stayed mine.
        </div>
      </section>

      {/* 07 OUTCOME */}
      <section className="cs-reveal">
        <span className="cs-num">07 / Outcome</span>
        <h2>From a cleanup to a standard</h2>
        <p>
          The rewritten messages shipped, but the more durable result is that the three rules became
          the reference for new error copy, so the next person writing one doesn&apos;t have to
          rediscover what a good message looks like. In the queue I had been reading all along, the
          screenshots asking what to do next went from a majority of error tickets to a minority.
        </p>
        <TicketRatio />
      </section>

      {/* 08 REFLECTION */}
      <section className="cs-reveal">
        <span className="cs-num">08 / Reflection</span>
        <h2>Copy is interface, not decoration</h2>
        <div className="cs-reflect">
          <h3>It never looked like a project, so nobody owned it</h3>
          <p>
            No single error message is worth a meeting. Two thousand of them, each written under
            deadline by whoever built the feature, become a quality problem with no owner. Some
            problems are only visible at the level of the set.
          </p>
        </div>
        <div className="cs-divider" style={{ margin: "22px 0" }} />
        <div className="cs-reflect">
          <h3>What I&apos;d do differently</h3>
          <p>
            Instrument it from the start. Support contacts tied to specific error states would have
            made this measurable, and would have shown me which messages were still failing.
          </p>
        </div>
      </section>

      <NextCaseLink
        href="/work/reducing-support-friction"
        caseStudyName="The answers already existed. People couldn't reach them in time."
        className="cs-next"
      >
        <span className="l">Next case &rarr;</span>
        <div className="t">
          The answers already existed{" "}
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
