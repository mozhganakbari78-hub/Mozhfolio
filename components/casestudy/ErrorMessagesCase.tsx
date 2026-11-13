import NextCaseLink from "./NextCaseLink";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import CsGlance from "./CsGlance";
import MessageRewrite, { type Rewrite } from "./MessageRewrite";
import TicketRatio from "./TicketRatio";
import ErrorMachineScene from "./ErrorMachineScene";


const rewrites: Rewrite[] = [
  {
    label: "Internal jargon",
    before: {
      fa: "پارامترهای ورودی نامعتبر میباشد",
      en: "“Invalid input parameters.”",
    },
    after: {
      fa: "اطلاعات حساب به‌درستی وارد نشده‌اند. لطفاً اطلاعات را بررسی کرده و دوباره تلاش کنید.",
      en: "“The account details weren’t entered correctly. Please check them and try again.”",
    },
    changes: ["system language → the user’s words", "dead end → check and retry"],
  },
  {
    label: "A vague next step",
    before: {
      fa: "فایل اکسل آپلود شده منسوخ شده است ، لطفا از فایل  جدید استفاده نمایید",
      en: "“The uploaded Excel file is obsolete. Please use a new file.”",
    },
    after: {
      fa: "فایل اکسل بارگذاری‌شده با نسخه فعلی سامانه سازگار نیست، لطفاً از فایل نمونه جدید استفاده نمایید.",
      en: "“The uploaded Excel file isn’t compatible with the current version of the system. Please use the new sample file.”",
    },
    changes: ["“obsolete” → why it fails", "“a new file” → which file"],
  },
  {
    label: "A cause outside our control",
    before: {
      fa: "خطا در سرویس استعلام کارت",
      en: "“Card inquiry service error.”",
    },
    after: {
      fa: "سرویس استعلام کارت در حال حاضر در دسترس نیست؛ لطفاً چند دقیقه دیگر دوباره تلاش کنید و در صورت تداوم مشکل با پشتیبانی تماس بگیرید.",
      en: "“The card inquiry service is unavailable right now. Please try again in a few minutes, and contact support if the problem continues.”",
    },
    changes: ["“error” → temporarily unavailable", "no next step → retry first, support only if it persists"],
  },
];

export default function ErrorMessagesCase() {
  return (
    <article>
      {/* HERO */}
      <header className="cs-hero">
        <div className="cs-hero-main">
          <span className="cs-eyebrow">Case study · UX writing</span>
          <h1>Errors that say what&apos;s next</h1>
          <p className="cs-lede">
            How a pattern I spotted in support tickets became an audit of ~2,000 error messages and
            a writing standard for every design we hand off.
          </p>
        </div>

        <div className="cs-hero-side">
          <CsGlance
            role="Product Designer, self-initiated"
            team="a fellow designer, the product owner, the backend team"
            results={[
              { value: "6 → 3", label: "in 10 error tickets asked “what do I do now?”, after the first phase", icon: "Ticket" },
              { value: "~2,000", label: "messages audited; the first phase is live: transfers, cheques, card services", icon: "DocumentMagnifyingGlass" },
              { value: "3 rules", label: "now in every design handoff", icon: "ListBullet" },
            ]}
          />
        </div>
      </header>

      <hr className="cs-divider" />

      {/* 1 */}
      <section className="cs-reveal">
        <span className="cs-num">The starting point</span>
        <h2>Support tickets that were just screenshots</h2>
        <p>
          Nobody assigned this. I read support tickets regularly, and kept seeing the same thing: a
          screenshot of an error message, and nothing else. Users weren&apos;t reporting bugs. They
          were asking what to do.
        </p>
      </section>

      {/* 2 */}
      <section className="cs-reveal">
        <span className="cs-num">An example</span>
        <h2>A user tries to cancel a payment request</h2>
        <p>They click cancel and see this:</p>
        <div className="cs-msg">
          <span>Error</span>
          You are not the creator of the request.
        </div>
        <p className="cs-quote">&ldquo;Did I do something wrong? What do I do now?&rdquo;</p>
        <p>The message says what failed, but not why, and not what to do next.</p>
      </section>

      {/* 3 */}
      <section className="cs-reveal">
        <span className="cs-num">The question</span>
        <h2>One bad message, or a pattern?</h2>
        <p>
          A few screenshots are an anecdote. I asked the backend team to export every error message
          the platform could show: about 2,000. The same three problems kept repeating: internal
          jargon, no next step, and blame.
        </p>
      </section>

      {/* 3b */}
      <section className="cs-reveal">
        <span className="cs-num">Making the case</span>
        <h2>Evidence first, then a phased plan</h2>
        <p>
          I brought it to my fellow designer first, and together we sorted and read the tickets.
          Then we took it to the product owner with two things side by side: error messages as
          users saw them, and the support tickets that were nothing but a screenshot and &ldquo;what
          do I do now?&rdquo;. That put it on the roadmap.
        </p>
        <p>
          The backend team pushed back. Every rewritten message meant changes in their code, across
          about 2,000 messages. So we phased it: first the flows people use most and where an error
          costs the most (money transfers, cheques and card services), then the rest.
        </p>
        <p className="cs-trade">
          <b>Trade-off:</b> less-used flows keep their old messages for longer.
        </p>
      </section>

      {/* 4 */}
      <section className="cs-reveal">
        <span className="cs-num">Decision 1</span>
        <h2>Show users only errors they can act on</h2>
        <p>
          Many messages were purely technical, like &ldquo;FTP transfer failed&rdquo;. That matters
          to the on-call team, not to a treasurer. Those moved to logs.
        </p>
        <p className="cs-trade">
          <b>Trade-off:</b> less raw detail on screen for curious users.
        </p>
      </section>

      {/* 5 */}
      <section className="cs-reveal">
        <span className="cs-num">Decision 2</span>
        <h2>Write rules, not 2,000 one-off fixes</h2>
        <p>Fixing messages one by one would drift again with the next release. So every message has to pass three rules:</p>
        <ol className="cs-rules">
          <li>Say what happened, in the user&apos;s words.</li>
          <li>Give the next step.</li>
          <li>Never blame the user.</li>
        </ol>
        <p className="cs-trade">
          <b>Trade-off:</b> slower than quickly patching the worst messages.
        </p>
      </section>

      {/* 6 */}
      <section className="cs-reveal">
        <span className="cs-num">Decision 3</span>
        <h2>AI wrote the drafts. I checked every one</h2>
        <p>
          In banking, a plausible rewrite can quietly change what a message says about money or
          permissions. So AI handled the volume, and I reviewed every message by hand.
        </p>
        <p className="cs-trade">
          <b>Trade-off:</b> slower than trusting the drafts.
        </p>
      </section>

      {/* 6b */}
      <section className="cs-reveal">
        <span className="cs-num">Decision 4</span>
        <h2>When the cause isn&apos;t ours, say so</h2>
        <p>
          Some errors come from outside services, such as card inquiry. Neither the user nor we can
          fix them, so the message says what it can: try again in a few minutes, and contact support
          if it keeps happening. Support is the last step, there for trust, not a dead end.
        </p>
        <p className="cs-trade">
          <b>Trade-off:</b> these messages still send some users to support.
        </p>
      </section>

      <section className="cs-shot cs-reveal">
        <ErrorMachineScene />
      </section>

      {/* 7 */}
      <section className="cs-reveal">
        <span className="cs-num">The change</span>
        <h2>Now the message says why, and what to do</h2>
        <MessageRewrite items={rewrites} />
      </section>

      {/* 8 */}
      <section className="cs-reveal">
        <span className="cs-num">Now</span>
        <h2>Fewer screenshots in the support queue</h2>
        <p>
          Error tickets that only asked &ldquo;what do I do now?&rdquo; went from about 6 in 10 to 3
          in 10 after the first phase. Most of what&apos;s left is about how features work, not what
          an error means. When a rewritten message still confused people, we went back and fixed it.
        </p>
        <p>
          The three rules are now part of how we design. Every new design specifies its error
          states, written to the rules, and goes to developers in a handoff format we defined.
        </p>
        <TicketRatio />
        <p className="cs-takeaway">
          <span>What I learned</span>
          Copy is interface. Next time I&apos;d link tickets to error codes from day one, to measure
          each message.
        </p>
      </section>

      <NextCaseLink
        href="/work/design-system/"
        caseStudyName="A design system engineers used"
        className="cs-next"
      >
        <span className="l">Next case &rarr;</span>
        <div className="t">
          A design system engineers used{" "}
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
