import NextCaseLink from "./NextCaseLink";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import Mockup from "./Mockup";
import CsStats from "./CsStats";
import CsArt from "./CsArt";
import { UnifiedFlow, PanicJourney } from "./CsInlineArt";

export default function SupportFrictionCase() {
  return (
    <article>
      {/* HERO */}
      <header className="cs-hero">
        <span className="cs-eyebrow">
          Case Study · Enterprise Banking · Support &amp; Content Architecture
        </span>
        <h1>
          The answers already existed.
          <br />
          People just couldn&apos;t reach them in time.
        </h1>
        <p className="cs-lede">
          The brief was &quot;improve the FAQ.&quot; I went back to leadership with two years of
          ticket history and a different proposal, and got the mandate to rebuild how support
          worked instead. This is <em>the reframe, the evidence behind it, and the calls I made</em>{" "}
          to get it built inside a live banking platform.
        </p>

        <dl className="cs-meta">
          <div>
            <dt>Role</dt>
            <dd>Product Designer &mdash; identified the problem, proposed it, led it end to end</dd>
          </div>
          <div>
            <dt>Worked with</dt>
            <dd>1 designer · frontend tech lead · support &amp; product stakeholders</dd>
          </div>
          <div>
            <dt>Domain</dt>
            <dd>B2B corporate banking</dd>
          </div>
          <div>
            <dt>Status</dt>
            <dd>Built &amp; validated · pre-launch</dd>
          </div>
        </dl>
      </header>

      <hr className="cs-divider" />

      {/* 01 CONTEXT */}
      <section className="cs-reveal">
        <CsArt name="tickets" />
        <span className="cs-num">01 / Context</span>
        <h2>A platform where a wrong move costs real money</h2>
        <p>
          A corporate banking platform: business clients move money, manage cards, pay bills, handle
          cheques. These people aren&apos;t browsing. They&apos;re mid-task, dealing with high
          amounts, working under pressure that makes you act fast and ask later.
        </p>
        <p>
          When something was unclear, there was one obvious move: open a ticket. So people did, for
          almost everything. The support team absorbed the volume, response times stretched, and the
          user still waited to get unblocked on something that often had a known answer.
        </p>
      </section>

      {/* 02 THE RE-BRIEF */}
      <section className="cs-reveal">
        <CsArt name="fork" />
        <span className="cs-num">02 / Taking a different brief back</span>
        <h2>&quot;Improve the FAQ&quot; was the wrong problem to solve</h2>
        <p>
          The request that came to me was narrow: the FAQ was underused and outdated, make it
          better. I could have redesigned the page and closed the ticket. But a weak FAQ
          wasn&apos;t the problem. It was a symptom.
        </p>
        <p>
          The real issue was structural. FAQ and ticketing lived in two separate places. A user with
          a question had to <strong>guess</strong> whether their answer existed before choosing
          where to go. Under pressure, nobody guesses. They take the path they trust: the ticket.
        </p>
        <p>
          Nobody had asked for that problem to be solved. So I didn&apos;t argue it in a meeting.{" "}
          <strong>
            I went and got the evidence first, then took a bigger proposal back to leadership.
          </strong>
        </p>
        <div className="cs-pull">
          If the answer and the escalation live in different rooms, the user will always walk into
          the one that feels safe.
        </div>
      </section>

      {/* SCENE — the fork users face */}
      <section className="cs-shot cs-reveal">
        <PanicJourney />
      </section>

      {/* 03 EVIDENCE */}
      <section className="cs-reveal">
        <CsArt name="read" />
        <span className="cs-num">03 / Earning the mandate</span>
        <h2>I read ~1,000 support tickets by hand</h2>
        <p>
          You don&apos;t get to expand a brief on instinct. To ask for a larger mandate, I needed
          proof the narrow one wouldn&apos;t work. I read roughly{" "}
          <strong>1,000 ticket entries</strong> from the back-office admin panel, spanning about two
          years, by hand.
        </p>
        <p>
          A deliberate choice, not a lack of tooling. What I was classifying: &quot;could this
          person have self-served, given the right answer at the right moment?&quot; That is a
          judgment call. It rides on tone and context, not keywords. Automated clustering groups by
          surface words and would have missed the exact distinction the project hinged on.
        </p>
        <p>
          I clustered the findings in FigJam using affinity mapping. Two layers came out of it.
          First, the <strong>subject</strong>: accounts, cards, bill management, cheque management.
          Then a second, more important cut across all of them:{" "}
          <strong>
            which questions had answers that already existed somewhere, and which genuinely needed a
            human.
          </strong>
        </p>
        <CsStats
          items={[
            { value: "~1,000", label: "tickets read by hand" },
            { value: "2 yrs", label: "of support history covered" },
            { value: "2", label: "layers: subject × answerability" },
          ]}
        />
      </section>

      {/* 03b EVIDENCE — chart */}
      <section className="cs-reveal">
        <span className="cs-num">03 / The shape of the data</span>
        <h2>What the tickets actually showed</h2>
        <div className="cs-chart">
          <div className="ct">Tickets by area · answerable vs. needs support</div>
          <div className="cnote">
            Relative split within each subject area. Illustrative of the pattern found in the manual
            review; exact per-area percentages are part of the underlying analysis.
          </div>
          <div className="cs-legend">
            <span>
              <i className="cs-sw resolve" /> Answer already existed
            </span>
            <span>
              <i className="cs-sw signal" /> Genuinely needs support
            </span>
          </div>

          {[
            { name: "Bill management", split: "mostly self-serviceable", resolve: 74, delay: "0.05s" },
            { name: "Cards", split: "mixed", resolve: 58, delay: "0.17s" },
            { name: "Cheque management", split: "mixed", resolve: 52, delay: "0.29s" },
            { name: "Accounts", split: "leans to support", resolve: 40, delay: "0.41s" },
          ].map((b) => (
            <div className="cs-bar" key={b.name} style={{ ["--bar-delay" as string]: b.delay }}>
              <div className="blabel">
                <span className="name">{b.name}</span>
                <span className="split">{b.split}</span>
              </div>
              <div className="cs-track">
                <div className="seg-resolve" style={{ ["--resolve-pct" as string]: `${b.resolve}%` }} />
                <div className="seg-signal" style={{ ["--signal-pct" as string]: `${100 - b.resolve}%` }} />
              </div>
              <div className="bpcts">
                <span className="pr"><b>{b.resolve}%</b><small>self-service</small></span>
                <span className="ps"><b>{100 - b.resolve}%</b><small>needs support</small></span>
              </div>
            </div>
          ))}

        </div>
      </section>

      {/* 03c TAKEAWAY */}
      <section className="cs-reveal">
        <span className="cs-num">03 / The takeaway</span>
        <h2>It was the shape, not a single number</h2>
        <div className="cs-pull">
          A meaningful share of ticket volume came from questions that already had answers. The user
          just had no way to reach them at the moment they were stuck.
        </div>
        <p>
          And it wasn&apos;t about careless users. Many of these questions came up precisely{" "}
          <em>because</em> the stakes were high: someone about to move a large amount,
          double-checking, hesitating, reaching for the only reassurance channel they knew. The
          problem was never the intelligence of the question. It was the{" "}
          <strong>location and timing of the answer.</strong>
        </p>
        <p>
          That was the argument I took to leadership: not &quot;the FAQ is bad,&quot; but{" "}
          <strong>&quot;the structure sends people to the wrong door, and here is two years of
          evidence.&quot;</strong> The wider redesign was approved on that basis.
        </p>
      </section>

      {/* 04 DIRECTION */}
      <section className="cs-reveal">
        <CsArt name="merge" />
        <span className="cs-num">04 / The call I made</span>
        <h2>Merge the two surfaces into one</h2>
        <p>
          FAQ and ticket submission shouldn&apos;t be two destinations. They should be{" "}
          <strong>one support surface</strong>, where finding an answer and asking for help are the
          same flow, not a fork the user navigates before they&apos;ve even started.
        </p>
        <p>
          We explored the problem space as a team. Collapsing the two destinations into a single
          entry point, so the answer surfaces <em>before</em> the user commits to waiting on a
          ticket, was the call I made and defended, and the direction the build followed.
        </p>
      </section>

      {/* 04 inline art */}
      <UnifiedFlow />

      {/* SHOT — unified surface */}
      <section className="cs-shot cs-reveal">
        <Mockup
          src="/projects/support-faq.webp"
          alt="Unified support surface, FAQ and ticket in one flow"
          caption="Fig. 01: Finding an answer and asking for help are the same flow"
        />
      </section>

      {/* SHOT — live filtering */}
      <section className="cs-shot cs-reveal">
        <Mockup
          src="/projects/support-faq-filter.webp"
          alt="Real-time FAQ filtering as the user types their issue"
          caption="Fig. 02: Answers filter in live as the user describes the problem"
        />
      </section>

      {/* 05a DECISION 01 */}
      <section className="cs-reveal">
        <span className="cs-num">05 / Key decisions &amp; trade-offs</span>
        <h2>The two decisions that shaped the build</h2>

        <div className="cs-decision">
          <div className="dhead">
            <span className="dnum">DECISION 01</span>
            <div className="dtitle">Surface answers in real time, as the user types</div>
          </div>
          <div className="dbody">
            <div className="cs-dline">
              <div className="k">The insight</div>
              <div className="v">
                In a financial product, the questions that drive tickets cluster around high-stakes,
                time-sensitive moments: moving funds, hesitating over an amount. The answer is only
                useful if it appears <em>in that window</em>, not after a ticket round-trip.
              </div>
            </div>
            <div className="cs-dline chose">
              <div className="k">What shipped</div>
              <div className="v">
                As a user begins describing their issue, relevant FAQ answers filter in live against
                what they&apos;re writing, tied to the behavior and context of someone under
                pressure, surfacing the most likely answer before they finish escalating.
              </div>
            </div>
            <div className="cs-dline">
              <div className="k">My call</div>
              <div className="v">
                The team shaped the problem space together. The real-time model, answers keyed to
                what the user is typing in the moment rather than a browsable list, was the
                direction I argued for and carried through to spec.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 05b DECISION 02 */}
      <section className="cs-reveal">
        <span className="cs-num">05 / Key decisions &amp; trade-offs</span>
        <h2>Working around the constraint I couldn&apos;t remove</h2>

        <div className="cs-decision">
          <div className="dhead">
            <span className="dnum">DECISION 02</span>
            <div className="dtitle">Work around a taxonomy I wasn&apos;t allowed to rebuild</div>
          </div>
          <div className="dbody">
            <div className="cs-dline">
              <div className="k">The constraint</div>
              <div className="v">
                The support database used a fixed category taxonomy. Existing ticket filters in the
                back office depended on it. Restructuring it cleanly would have broken those filters
                and the historical data tied to them.
              </div>
            </div>
            <div className="cs-dline">
              <div className="k">Option rejected</div>
              <div className="v">
                A clean re-taxonomy that matched the new merged surface, better on paper, but it
                would have meant a disruptive migration and broken everything the support team
                relied on day to day.
              </div>
            </div>
            <div className="cs-dline chose">
              <div className="k">What I proposed instead</div>
              <div className="v">
                A layered migration: keep the legacy taxonomy intact underneath, map the new surface
                onto it, and add a catch-all &quot;Other&quot; category to absorb anything that
                didn&apos;t fit cleanly, so nothing fell through and existing filters kept working.
                I took it to stakeholders and got sign-off.
              </div>
            </div>
            <div className="cs-dline">
              <div className="k">The trade-off I owned</div>
              <div className="v">
                A less-than-ideal category structure in exchange for not destabilizing a live
                support operation. I documented it as known, deliberate debt with the reasoning
                attached, so whoever picks it up next inherits the decision instead of the mess.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 06a HOW I RAN IT */}
      <section className="cs-reveal">
        <span className="cs-num">06 / How I ran it</span>
        <h2>From ~1,000 raw entries to an approved direction</h2>
        <div className="cs-steps">
          {[
            {
              h: "Built the evidence before the argument",
              p: "Read the full ticket set from the admin panel and grouped by subject area: accounts, cards, bills, cheques.",
            },
            {
              h: "Found the cut that mattered",
              p: "Re-clustered across subjects by whether the answer already existed, separating “needs a human” from “needs to be findable.”",
            },
            {
              h: "Re-briefed leadership and won the mandate",
              p: "Took the evidence up and made the case for one merged surface instead of a polished-but-separate FAQ. The wider scope was approved on the strength of the data.",
            },
          ].map((s) => (
            <div className="cs-step" key={s.h}>
              <div>
                <h3>{s.h}</h3>
                <p>{s.p}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 06b HOW I RAN IT cont. */}
      <section className="cs-reveal">
        <span className="cs-num">06 / How I ran it</span>
        <h2>Driving it through a live system</h2>
        <div className="cs-steps" style={{ counterReset: "s 3" }}>
          {[
            {
              h: "Designed the unified flow",
              p: "Built the surface where real-time answers filter in as the user describes their issue, with ticket submission as the fallback rather than the default.",
            },
            {
              h: "Negotiated the taxonomy compromise",
              p: "Designed the layered structure and “Other” catch-all, walked stakeholders through the trade-off, and got sign-off without breaking the back office.",
            },
            {
              h: "Set the bar for handoff",
              p: "Aligned the surface to the platform design system so engineering built from existing components, and documented the deliberate debt rather than leaving it to be discovered.",
            },
          ].map((s) => (
            <div className="cs-step" key={s.h}>
              <div>
                <h3>{s.h}</h3>
                <p>{s.p}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 06c VALIDATION */}
      <section className="cs-reveal">
        <CsArt name="shield" />
        <span className="cs-num">06 / Validation</span>
        <h2>No user testing was possible, so I designed a way around it</h2>
        <p>
          In this B2B context I couldn&apos;t put the flow in front of real corporate clients before
          launch. Rather than treat that as a reason to skip validation, I defined a{" "}
          <strong>multi-stage process</strong> the team could actually run inside the constraint.
        </p>
        <div className="cs-steps">
          {[
            {
              h: "Internal reviews",
              p: "Structured walkthroughs with product and design to pressure-test the flow against the ticket patterns the analysis surfaced.",
            },
            {
              h: "Cross-functional edge-case walkthroughs",
              p: "Sessions with engineering and support to break the design on permissions, empty states, and the cases the happy path hides.",
            },
            {
              h: "Phased rollout to a small group of organizations",
              p: "Limited exposure first, so real behavior could inform the design before it reached the full client base.",
            },
          ].map((s) => (
            <div className="cs-step" key={s.h}>
              <div>
                <h3>{s.h}</h3>
                <p>{s.p}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 07 OUTCOME */}
      <section className="cs-reveal">
        <span className="cs-num">07 / Outcome</span>
        <h2>Where this honestly stands</h2>
        <div className="cs-status">
          <span className="cs-eyebrow">Status: pre-launch</span>
          <h3>Built and validated in test, not yet live.</h3>
          <p>
            The unified support surface was designed, built, and tested in a staging environment. It
            has not shipped to production, so there are no live metrics on ticket deflection or
            resolution time yet. I&apos;d rather say that plainly than attach numbers I
            can&apos;t stand behind.
          </p>
          <span className="pill">Goal: reduce support load · get users to answers faster</span>
        </div>
        <p>
          What did change before launch was the conversation. The project stopped being a content
          cleanup and became a structural question about where answers live, with a documented
          rationale, an agreed migration path, and a validation plan behind it. The user-facing proof
          is the next phase.
        </p>
      </section>

      {/* 08a REFLECTION */}
      <section className="cs-reveal">
        <span className="cs-num">08 / Reflection</span>
        <h2>What I&apos;d carry forward</h2>
        <div className="cs-reflect">
          <h3>The brief is rarely the problem</h3>
          <p>
            &quot;Fix the FAQ&quot; was a request to improve a page. The actual problem was that
            answers and escalation were structurally separated. Most of the value here came from
            refusing to take the brief at face value, and from doing the work to earn the right to
            say so.
          </p>
        </div>
        <div className="cs-divider" style={{ margin: "22px 0" }} />
        <div className="cs-reflect">
          <h3>Evidence is how you get scope, not seniority</h3>
          <p>
            I didn&apos;t have the authority to expand this project. Two years of ticket history did
            the arguing for me. Reading it by hand was slow, but the central distinction (answerable
            vs. genuinely needs support) was a judgment, not a keyword match, and that&apos;s exactly
            why the classification held up in the room.
          </p>
        </div>
      </section>

      {/* 08b REFLECTION cont. */}
      <section className="cs-reveal">
        <span className="cs-num">08 / Reflection</span>
        <h2>The constraint that shaped the right answer</h2>
        <div className="cs-reflect">
          <h3>Live systems set the real edges of a design</h3>
          <p>
            The cleanest taxonomy on paper was the wrong answer because real filters and real
            history depended on the messy one. Designing the layered migration around that
            constraint, rather than against it, is the decision I&apos;m most sure was correct, and
            writing the compromise down is what made it a decision instead of a shortcut.
          </p>
        </div>
      </section>

      <NextCaseLink
        href="/work/batch-transfer"
        caseStudyName="Batch Transfer for Offline Corporate Clients"
        className="cs-next"
      >
        <span className="l">Next case &rarr;</span>
        <div className="t">
          Batch Transfer for Offline Corporate Clients <ArrowRightIcon style={{ width: 22, height: 22, display: "inline", verticalAlign: "middle" }} />
        </div>
      </NextCaseLink>

      <footer className="cs-foot">
        <span className="cs-eyebrow">End of case study</span>
        <p>Corporate banking · Support &amp; content architecture · Pre-launch</p>
      </footer>
    </article>
  );
}
