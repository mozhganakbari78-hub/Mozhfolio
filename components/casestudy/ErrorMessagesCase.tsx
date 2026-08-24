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
          Case Study · Enterprise Banking · UX Writing &amp; Error Systems
        </span>
        <h1>
          Users knew something had failed.
          <br />
          They didn&apos;t know what to do next.
        </h1>
        <p className="cs-lede">
          I noticed users were filing support tickets that were just screenshots of error messages.
          The messages announced a failure and then stopped, and some blamed the user for a rule
          they had no way to know. I pulled every error string in the platform, audited roughly{" "}
          <strong>2,000 of them</strong>, separated what users should never see from what needed
          rewriting, and defined a framework that is now the standard for error copy platform-wide.
        </p>

        <dl className="cs-meta">
          <div>
            <dt>Role</dt>
            <dd>
              Product Designer. Identified the problem, ran the audit, defined the framework, wrote
              and reviewed the copy
            </dd>
          </div>
          <div>
            <dt>Scope</dt>
            <dd>~2,000 platform error messages</dd>
          </div>
          <div>
            <dt>Domain</dt>
            <dd>B2B corporate banking · Persian-language product</dd>
          </div>
          <div>
            <dt>Outcome</dt>
            <dd>
              Adopted as the platform standard for error copy. Error screenshot tickets roughly
              halved
            </dd>
          </div>
        </dl>
      </header>

      <hr className="cs-divider" />

      {/* 01 CONTEXT */}
      <section className="cs-reveal">
        <CsArt name="tickets" />
        <span className="cs-num">01 / Context</span>
        <h2>It started as a habit, not a project</h2>
        <p>
          I set aside time every day to read the support tickets users had filed in the platform.
          Nobody assigned that; I wanted to see the product through the complaints rather than
          through the backlog. After a few weeks a pattern surfaced that I had not gone looking
          for: <strong>a lot of the tickets were just screenshots of error messages</strong>.
        </p>
        <p>
          The people filing them were not reporting a bug. They were asking the three questions
          the message had left unanswered. What actually happened? What do I do now? Did I do
          something wrong? On a platform where people move payroll and approve transfers, those
          are not small questions to leave hanging.
        </p>
      </section>

      {/* 02 THE PROBLEM */}
      <section className="cs-reveal">
        <span className="cs-num">02 / The problem</span>
        <h2>The message ended exactly where the user&apos;s question started</h2>
        <p>
          Every one of those screenshots had the same shape. The message confirmed that something
          had failed and then stopped, in vocabulary that meant something to the system and nothing
          to the person reading it. Some went further and read as accusations, telling users they
          lacked a permission they had no way of knowing was restricted.
        </p>
        <DeadEndMessage />
      </section>

      {/* 03 THE AUDIT */}
      <section className="cs-reveal">
        <CsArt name="read" />
        <span className="cs-num">03 / The audit</span>
        <h2>I asked whether all of them were like this, then went and checked</h2>
        <p>
          A handful of screenshots is an anecdote. So I asked the backend team to export every
          error string the platform could produce, and got back a spreadsheet of roughly{" "}
          <strong>2,000 messages</strong>. Fixing them as they were reported would have produced
          2,000 separate decisions and no shared logic, so I read the full set and classified it
          by <strong>failure shape</strong> rather than by feature: internal language, no next
          step, blame assigned to the user.
        </p>
        <CsStats
          items={[
            { value: "~2,000", label: "messages audited" },
            { value: "3", label: "rules in the resulting framework" },
            { value: "1", label: "standard, applied platform-wide" },
          ]}
        />
      </section>

      {/* 03b THE TRIAGE — what should never have reached a user */}
      <section className="cs-reveal">
        <span className="cs-num">03 / The audit</span>
        <h2>The first question was not how to rewrite. It was whether to show it at all.</h2>
        <p>
          A large share of the set was purely technical. <code>FTP transfer failed</code> refers to
          a file format we convert behind the scenes. It is real, it matters to the team on call,
          and it means nothing to a treasurer trying to release payroll. Handing that string to a
          user is not transparency. It is noise dressed as an explanation.
        </p>
        <p>
          So the audit split in two before any writing started. Technical failures belonged in
          logs and monitoring, surfaced to the user only as the one thing they can act on. What
          was left after that filter was the set that genuinely needed rewriting.
        </p>
      </section>

      {/* 04 THE FRAMEWORK */}
      <section className="cs-reveal">
        <CsArt name="shield" />
        <span className="cs-num">04 / The framework</span>
        <h2>Three rules every message had to pass</h2>
        <p>
          Every user-facing message had to be clear, in plain language, free of a commanding or
          accusing tone, and had to leave the user with somewhere to go. Not a style guide. A shape
          you can hold any message against and see immediately what it is missing.
        </p>
        <MessageAnatomy />
      </section>

      {/* 05 THE REWRITES */}
      <section className="cs-reveal">
        <span className="cs-num">05 / The rewrites</span>
        <h2>What the three rules look like in production</h2>
        <p>
          Real strings from the platform. The Persian is the shipped copy; the English underneath is
          a translation for reference.
        </p>
        <MessageRewrite items={rewrites.slice(0, 2)} />
      </section>

      {/* 05b THE REWRITES cont. */}
      <section className="cs-reveal">
        <span className="cs-num">05 / The rewrites</span>
        <h2>The one that was written as an accusation</h2>
        <MessageRewrite items={rewrites.slice(2)} />
      </section>

      {/* 06 THE HARDEST ONE */}
      <section className="cs-reveal">
        <span className="cs-num">06 / The pattern underneath</span>
        <h2>Most of the work was deciding who owns the failure</h2>
        <p>
          The third example is the one I think about most. &quot;You are not the creator of the
          request&quot; reads like a reprimand for something the user could not have known, and then
          stops. The rewrite changes almost nothing factually. It
          simply stops treating a permission rule as the user&apos;s error, and then tells them
          where to go.
        </p>
        <div className="cs-pull">
          The system enforcing a rule is not the same thing as the user doing something wrong. Most
          of the rewrite was making the copy stop confusing the two.
        </div>
      </section>

      {/* 07 THE AI DECISION */}
      <section className="cs-reveal">
        <CsArt name="rows" />
        <span className="cs-num">07 / Working through the volume</span>
        <h2>AI drafted the first pass. I reviewed every message.</h2>
        <p>
          Two thousand messages is a volume problem. Once the framework was defined, I used AI to
          generate a first pass, then read and edited every single message myself for banking
          accuracy, terminology, and tone.
        </p>
        <p>
          That review was not a formality. In a financial product, a plausible-sounding rewrite can
          quietly change what a message actually claims about a transaction, a permission, or a
          balance. The model had no way to know which terms were regulated vocabulary and which were
          interchangeable.
        </p>
        <div className="cs-pull">
          The tool was good at volume. It was not accountable for accuracy. That part stayed mine.
        </div>
      </section>

      {/* 08 OUTCOME */}
      <section className="cs-reveal">
        <span className="cs-num">08 / Outcome</span>
        <h2>From a cleanup to a standard</h2>
        <div className="cs-status">
          <span className="cs-eyebrow">Adopted platform-wide</span>
          <h3>The framework outlived the audit.</h3>
          <p>
            The rewritten messages shipped, but the more durable result is that the three rules
            became the reference for error copy across the platform. New messages are written
            against them rather than invented from scratch, which means the next person writing an
            error doesn&apos;t have to rediscover what a good one looks like.
          </p>
        </div>
      </section>

      {/* 08b OUTCOME — what the ticket queue looked like afterwards */}
      <section className="cs-reveal">
        <span className="cs-num">08 / Outcome</span>
        <h2>The tickets that started this got quieter</h2>
        <p>
          The clearest signal came from where the project began. Reading the queue afterwards, the
          error screenshots asking what to do next were noticeably rarer. Roughly six in ten
          error-related tickets used to be that question. Afterwards it was closer to three.
        </p>
        <TicketRatio />
      </section>

      {/* 09 REFLECTION */}
      <section className="cs-reveal">
        <span className="cs-num">09 / Reflection</span>
        <h2>Copy is interface, not decoration</h2>
        <div className="cs-reflect">
          <h3>Nobody had owned this because it never looked like a project</h3>
          <p>
            Error messages get written one at a time, by whoever is building the feature, under
            deadline. No single message is worth a meeting. Two thousand of them, written that way,
            become a quality problem with no owner. The lesson I kept is that some problems are
            only visible at the level of the set, and the only way to see them is to go looking
            at the set on purpose.
          </p>
        </div>
        <div className="cs-divider" style={{ margin: "22px 0" }} />
        <div className="cs-reflect">
          <h3>Reading tickets is now part of how I work</h3>
          <p>
            This started as a habit with no deliverable attached, and it produced the clearest
            problem statement I had that year. I have kept the habit since. Support tickets are
            the one place where users describe the product in their own words, without being
            asked and without a researcher in the room.
          </p>
        </div>
        <div className="cs-divider" style={{ margin: "22px 0" }} />
        <div className="cs-reflect">
          <h3>What I&apos;d do differently</h3>
          <p>
            I&apos;d instrument it from the start. Support contacts tied to specific error states
            would have turned an obvious quality improvement into a measurable one, and would have
            shown me which messages were still failing after the rewrite.
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
