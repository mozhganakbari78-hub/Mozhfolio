import NextCaseLink from "./NextCaseLink";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import CsImpact from "./CsImpact";
import Mockup from "./Mockup";
import CsStats from "./CsStats";
import ReframeStatement from "./ReframeStatement";
import TicketSplit from "./TicketSplit";
import Scenario from "./Scenario";
import SeniorCalls from "./SeniorCalls";

/*
 * Every case reads the same way: one person's moment with the product, why
 * that moment mattered to the business, what the real problem was, the calls
 * I made and what they cost, the same moment redesigned, and what changed.
 */
export default function SupportFrictionCase() {
  return (
    <article>
      {/* HERO */}
      <header className="cs-hero">
        <div className="cs-hero-main">
          <span className="cs-eyebrow">Corporate banking platform · 58,000+ organisations</span>
          <h1>Getting users unstuck mid-task, without waiting for support</h1>
          <p className="cs-lede">
            I was asked to expand the FAQ. Reading <strong>~1,000 support tickets</strong>{" "}
            first showed the answers already existed. People couldn&apos;t reach them at the moment they
            got stuck, so I redesigned support around that moment.
          </p>
        </div>

        <div className="cs-hero-side">
          <CsImpact
            items={[
              { value: "4 in 5", label: "Tickets that never needed a person, now targeted by answers in the flow" },
              { value: "Brief rewritten", label: "From “add more FAQ content” to “fix how people reach it”" },
              { value: "Fewer repeats", label: "Support reported fewer “where do I find this?” tickets after launch" },
            ]}
          />
          <dl className="cs-meta">
            <div>
              <dt>My role</dt>
              <dd>Product Designer. Ticket research, reframing the brief, the flow, the matching spec</dd>
            </div>
            <div>
              <dt>Worked with</dt>
              <dd>Product · Support · Frontend tech lead · One product designer</dd>
            </div>
          </dl>
        </div>
      </header>

      <hr className="cs-divider" />

      {/* 01 SCENARIO */}
      <section className="cs-reveal">
        <span className="cs-num">01 / The scenario</span>
        <h2>A finance officer hits her transfer limit before a supplier payment</h2>
        <Scenario
          kind="before"
          who="Finance officer at a mid-size company, paying a supplier before the end of the day"
          steps={[
            { label: "The transfer is rejected", thought: "Why won't it go through?" },
            { label: "Opens Support", thought: "FAQ or ticket? I don't know what's wrong yet." },
            { label: "Searches the FAQ", thought: "How much can I send? ...nothing.", tone: "pain" },
            { label: "Files a ticket and waits", thought: "The payment is stuck until someone replies.", tone: "pain" },
          ]}
          end="The answer was in the FAQ all along, filed under “transfer limit”."
          note="Composite scenario, built from the support tickets."
        />
      </section>

      {/* 02 WHY IT MATTERED */}
      <section className="cs-reveal">
        <span className="cs-num">02 / Why it mattered</span>
        <h2>Support was spending its time on questions that didn&apos;t need a person</h2>
        <TicketSplit />
      </section>

      {/* 03 THE REAL PROBLEM */}
      <section className="cs-reveal">
        <span className="cs-num">03 / The real problem</span>
        <h2>The answer wasn&apos;t missing. It was out of reach</h2>
        <p>
          Users described problems in their own words; the FAQ used the product&apos;s. And the
          flow made them choose FAQ or ticket before they understood their problem.
        </p>
        <ReframeStatement />
      </section>

      {/* 04 MY CALLS */}
      <section className="cs-reveal">
        <span className="cs-num">04 / The calls I made</span>
        <h2>Three decisions, and what each one cost</h2>
        <SeniorCalls
          calls={[
            {
              title: "Rewrite the brief instead of delivering it",
              tension: "Ship the FAQ that was asked for  vs  fix what the tickets showed",
              why: "1,000 tickets were stronger than my opinion. I took the evidence to product and support, and the brief changed.",
              gaveUp: "A small, safe, already-agreed deliverable.",
            },
            {
              title: "Match answers as the user types, in a shape engineering could build",
              tension: "Real search  vs  a backend that couldn't support it",
              why: "I asked how the data was stored, then proposed ranked matching over a fixed list of 343 keywords and 34 synonym groups. Below a confidence threshold it shows nothing: a wrong answer is worse than none.",
              gaveUp: "Open-ended search. The keyword list has to be maintained.",
            },
            {
              title: "Keep the ticket categories I didn’t like",
              tension: "A cleaner taxonomy  vs  a live support operation",
              why: "Back-office filters and two years of ticket data depended on the old categories. I mapped the new flow onto them.",
              gaveUp: "A cleaner structure, logged as design debt.",
            },
          ]}
        />
      </section>

      {/* 05 SCENARIO, REDESIGNED */}
      <section className="cs-reveal">
        <span className="cs-num">05 / The same moment, redesigned</span>
        <h2>She types her question, and the answer finds her</h2>
        <Scenario
          kind="after"
          who="Same officer, same rejected transfer"
          steps={[
            { label: "Opens Support and starts typing", thought: "How can I increase the amount I'm allowed to transfer?" },
            { label: "Answers about limits appear as she types", thought: "That's my question.", tone: "good" },
            { label: "Reads why it depends on her role", tone: "good" },
            { label: "If it doesn't help, the ticket already holds her words" },
          ]}
          end="Back to the payment without waiting on anyone."
        />
      </section>

      {/* SHOT — live match */}
      <section className="cs-shot cs-reveal">
        <Mockup
          src="/projects/support-live-match.webp"
          alt="Support page: the user types how to increase the amount they can transfer, and FAQ answers about transfer limits filter in with the matched word highlighted"
          caption="Typing “How can I increase the amount I’m allowed to transfer?” surfaces the answers about limits"
        />
      </section>

      {/* SHOT — one surface */}
      <section className="cs-shot cs-reveal">
        <Mockup
          src="/projects/support-unified.webp"
          alt="Support page with the FAQ on the left and the ticket form on the right, on the same screen"
          caption="FAQ and ticket on one screen: nobody has to pick a path before they understand the problem"
        />
      </section>

      {/* 06 OUTCOME */}
      <section className="cs-reveal">
        <span className="cs-num">06 / Outcome</span>
        <h2>Support conversations changed subject</h2>
        <div className="cs-signal">
          <div className="box">
            <div className="lab">Before</div>
            <div className="quote">&quot;Where do I find this?&quot;</div>
          </div>
          <div className="arrow">&rarr;</div>
          <div className="box">
            <div className="lab">After</div>
            <div className="quote">Genuinely functional issues</div>
          </div>
        </div>
        <CsStats
          items={[
            { value: "~1,000", label: "tickets read before designing" },
            { value: "343", label: "keywords in the matching spec" },
            { value: "89", label: "FAQ answers made reachable" },
          ]}
        />
        <p className="cs-takeaway">
          <span>What I&apos;d do next</span>
          Instrument it: answers opened before a ticket, and tickets abandoned after one. Support&apos;s
          report is a signal, not a number.
        </p>
      </section>

      <NextCaseLink
        href="/work/batch-transfer"
        caseStudyName="Making bulk payments safe for bank branches"
        className="cs-next"
      >
        <span className="l">Next case &rarr;</span>
        <div className="t">
          Making bulk payments safe for bank branches{" "}
          <ArrowRightIcon style={{ width: 22, height: 22, display: "inline", verticalAlign: "middle" }} />
        </div>
      </NextCaseLink>

      <footer className="cs-foot">
        <span className="cs-eyebrow">End of case study</span>
        <p>Corporate banking · Support experience · Shipped</p>
      </footer>
    </article>
  );
}
