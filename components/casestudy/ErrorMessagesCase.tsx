import NextCaseLink from "./NextCaseLink";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import CsGlance from "./CsGlance";
import CsStats from "./CsStats";
import MessageRewrite, { type Rewrite } from "./MessageRewrite";
import MessageAnatomy from "./MessageAnatomy";
import DeadEndMessage from "./DeadEndMessage";
import TicketRatio from "./TicketRatio";
import WhyTradeoff from "./WhyTradeoff";


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
          <span className="cs-eyebrow">Case study</span>
          <h1>Error messages that tell users what to do next</h1>
          <p className="cs-lede">
            A self-initiated audit and rewrite of every error message in a banking platform.
          </p>
        </div>

        <div className="cs-hero-side">
          <CsGlance
            company="Sadad · Bank Melli Iran"
            role="Product Designer, self-initiated"
            platform="Web app · Persian-language"
            team="Solo, reviewed with backend"
            problem="Many support tickets were just screenshots of error messages. Users knew something had failed, not what to do next."
            did="Audited ~2,000 messages, moved technical ones to logs, wrote three rules every message must pass, and reviewed every AI-drafted rewrite by hand."
            results={[
              <>“What do I do now?” tickets: <b>6 → 3 in 10</b> error tickets</>,
              <><b>~2,000</b> messages audited and cleaned up</>,
              <>The three rules are now the <b>platform standard</b></>,
            ]}
          />
        </div>
      </header>

      <hr className="cs-divider" />

      {/* FINAL DESIGN */}
      <section className="cs-reveal">
        <span className="cs-num">Before and after</span>
        <h2>From an accusation to a next step</h2>
        <MessageRewrite items={rewrites.slice(1)} />
      </section>

      {/* CONTEXT */}
      <section className="cs-reveal">
        <span className="cs-num">Context</span>
        <h2>Nobody assigned this. I found it in the tickets</h2>
        <p>
          Users weren&apos;t reporting bugs. They were asking the questions the message left
          unanswered.
        </p>
        <DeadEndMessage />
      </section>

      {/* DECISION 1 */}
      <section className="cs-reveal">
        <span className="cs-num">Decision 1</span>
        <h2>Show users only errors they can act on</h2>
        <WhyTradeoff
          why="“FTP transfer failed” matters to the on-call team, not to a treasurer. Purely technical errors moved to logs."
          tradeoff="Less raw detail on screen for curious users."
        />
        <CsStats
          items={[
            { value: "~2,000", label: "messages audited" },
            { value: "3", label: "common failures: jargon, no next step, blame" },
            { value: "1", label: "standard for the whole platform" },
          ]}
        />
      </section>

      {/* DECISION 2 */}
      <section className="cs-reveal">
        <span className="cs-num">Decision 2</span>
        <h2>Write rules, not 2,000 one-off fixes</h2>
        <WhyTradeoff
          why="One-off fixes drift again with the next release. Three rules (say what happened, give the next step, drop the blame) let anyone write a good message."
          tradeoff="Slower than quickly patching the worst messages."
        />
        <MessageAnatomy />
      </section>

      {/* DECISION 3 */}
      <section className="cs-reveal">
        <span className="cs-num">Decision 3</span>
        <h2>AI drafts, a person reviews every message</h2>
        <WhyTradeoff
          why="In banking, a plausible rewrite can quietly change what a message says about money or permissions. AI handled the volume; I checked every result."
          tradeoff="Time: every message was read by hand."
        />
        <MessageRewrite items={rewrites.slice(0, 1)} />
      </section>

      {/* RESULT */}
      <section className="cs-reveal">
        <span className="cs-num">Result</span>
        <h2>&ldquo;What do I do now?&rdquo; went from majority to minority</h2>
        <TicketRatio />
        <p className="cs-takeaway">
          <span>What I learned</span>
          Copy is interface. I&apos;d tie support tickets to error codes from day one to measure it.
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
