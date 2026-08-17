import NextCaseLink from "./NextCaseLink";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import CsArt from "./CsArt";
import CsStats from "./CsStats";
import MessageRewrite, { type Rewrite } from "./MessageRewrite";
import MessageAnatomy from "./MessageAnatomy";

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
      fa: "شما ایجادکننده درخواست نیستید، دسترسی انجام لغو درخواست وجود ندارد",
      en: "“You are not the creator of the request, there is no access to cancel the request.”",
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
          Across a live corporate banking platform, error messages announced a failure and then
          stopped. Some blamed the user for a rule they had no way to know. I audited roughly{" "}
          <strong>2,000 messages</strong>, found the recurring failure shapes, and defined a rewrite
          framework that is now the standard for error copy across the platform.
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
            <dd>Adopted as the platform standard for error copy</dd>
          </div>
        </dl>
      </header>

      <hr className="cs-divider" />

      {/* 01 CONTEXT */}
      <section className="cs-reveal">
        <CsArt name="tickets" />
        <span className="cs-num">01 / Context</span>
        <h2>In banking, an error is not an edge case</h2>
        <p>
          On a platform where people move payroll, manage cards, and approve transfers, hitting an
          error is not a rare detour. It happens mid-task, with money involved, often under time
          pressure. At that moment the interface has exactly one job: tell the user where they stand
          and what to do about it.
        </p>
        <p>
          Ours mostly did the first half. A message would confirm that something had failed, and
          then leave the user holding it.
        </p>
      </section>

      {/* 02 THE PROBLEM */}
      <section className="cs-reveal">
        <span className="cs-num">02 / The problem</span>
        <h2>The message ended exactly where the user&apos;s question started</h2>
        <p>
          Reading through them, the same shapes kept appearing. Messages used internal vocabulary
          that meant something to the system and nothing to the person reading it. They described a
          state without offering a route out of it. And some were written as accusations, telling
          users they lacked permission for something they had no way of knowing was restricted.
        </p>
        <div className="cs-pull">
          A user who knows only that something failed has been informed, not helped.
        </div>
      </section>

      {/* 03 THE AUDIT */}
      <section className="cs-reveal">
        <CsArt name="read" />
        <span className="cs-num">03 / The audit</span>
        <h2>~2,000 messages, sorted by how they failed</h2>
        <p>
          Fixing messages one at a time as they were reported would have produced 2,000 individual
          decisions and no shared logic. So I went through the full set and classified them by{" "}
          <strong>failure shape</strong> rather than by feature: which ones used internal language,
          which offered no next step, which assigned blame, and which were simply
          ungrammatical after years of incremental edits.
        </p>
        <CsStats
          items={[
            { value: "~2,000", label: "messages audited" },
            { value: "3", label: "rules in the resulting framework" },
            { value: "1", label: "standard, applied platform-wide" },
          ]}
        />
      </section>

      {/* 04 THE FRAMEWORK */}
      <section className="cs-reveal">
        <CsArt name="shield" />
        <span className="cs-num">04 / The framework</span>
        <h2>Three rules every message had to pass</h2>
        <p>
          Not a style guide. A shape you can hold any message against and see immediately what it is
          missing.
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
          request, there is no access to cancel the request&quot; reads like a reprimand for
          something the user could not have known. The rewrite changes almost nothing factually. It
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
        <p>
          I don&apos;t have instrumented before/after data on support contacts for error states, so
          I won&apos;t claim a number. What changed measurably is that the decision only had to be
          made once.
        </p>
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
            become a systemic quality problem that no one is responsible for. Finding it required
            looking at the set rather than the instance.
          </p>
        </div>
        <div className="cs-divider" style={{ margin: "22px 0" }} />
        <div className="cs-reflect">
          <h3>What I&apos;d do differently</h3>
          <p>
            I&apos;d instrument it. Support contacts tied to specific error states would have turned
            an obvious quality improvement into a measurable one, and would have told me which
            messages were still failing after the rewrite.
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
