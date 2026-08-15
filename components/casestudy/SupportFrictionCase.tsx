import NextCaseLink from "./NextCaseLink";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import Mockup from "./Mockup";
import CsStats from "./CsStats";
import CsArt from "./CsArt";
import RoutingShift from "./RoutingShift";
import { PanicJourney } from "./CsInlineArt";

const edgeCases = [
  "No relevant answers",
  "Multiple possible answers",
  "Weak matches",
  "Missing content",
  "Permissions",
  "Empty states",
  "Category fallback",
  "System errors",
  "Escalation after failed self-service",
];

const metrics = [
  "Support ticket volume per active organization",
  "Ticket deflection rate",
  "Time to useful answer",
  "Suggested answer open rate",
  "Answer → ticket escalation rate",
  "Distribution of escalations by category",
];

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
          The brief was simple: improve an outdated, underused FAQ. But after looking at how
          support actually worked, I found a different problem &mdash;{" "}
          <em>
            users had to choose between finding an answer and asking for help before they knew
            which path could solve their issue
          </em>
          . I analyzed two years of support history, built the case for a broader intervention, and
          helped shift the project from an FAQ redesign to a unified support experience inside a
          live corporate banking platform.
        </p>

        <dl className="cs-meta">
          <div>
            <dt>Role</dt>
            <dd>
              Product Designer &mdash; problem framing, evidence synthesis, interaction direction,
              stakeholder alignment, design through handoff
            </dd>
          </div>
          <div>
            <dt>Worked with</dt>
            <dd>Product stakeholders · Support team · Frontend tech lead · Product designer</dd>
          </div>
          <div>
            <dt>Domain</dt>
            <dd>B2B corporate banking</dd>
          </div>
          <div>
            <dt>Status</dt>
            <dd>Built &amp; validated in staging · Pre-launch</dd>
          </div>
        </dl>
      </header>

      <hr className="cs-divider" />

      {/* 01 CONTEXT */}
      <section className="cs-reveal">
        <CsArt name="tickets" />
        <span className="cs-num">01 / Context</span>
        <h2>A platform where uncertainty has real consequences</h2>
        <p>
          A corporate banking platform used to move money, manage cards, pay bills, and handle
          cheques. These are not casual browsing tasks. Users are often mid-operation, dealing with
          meaningful amounts of money, trying to make a correct decision quickly.
        </p>
        <p>
          When something was unclear, the safest path was obvious: <strong>open a ticket</strong>.
          The problem was that many of those tickets weren&apos;t caused by missing information. The
          answer often already existed somewhere in the product or the support content. Users simply
          couldn&apos;t reach it when they needed it.
        </p>
        <p>
          As ticket volume grew, support absorbed the cost, and users still waited to continue tasks
          that could have been resolved immediately.
        </p>
      </section>

      {/* 02 REFRAMING */}
      <section className="cs-reveal">
        <CsArt name="fork" />
        <span className="cs-num">02 / Reframing the brief</span>
        <h2>&quot;Improve the FAQ&quot; was solving the symptom</h2>
        <p>
          The original request assumed the FAQ itself was the problem: it was outdated and
          underused, so make it better. That would have been a reasonable page redesign.
        </p>
        <p>
          But the existing experience exposed something more fundamental. FAQ content and ticket
          submission lived in two separate destinations. Before getting help, users had to decide:{" "}
          <strong>does my answer already exist, or do I need a person?</strong> That is a hard
          question when you are already uncertain &mdash; and in a high-stakes banking workflow,
          people choose the path they trust most. The ticket.
        </p>
        <div className="cs-pull">
          Users should not have to know what kind of help they need before the support experience
          has helped them understand the problem.
        </div>
      </section>

      {/* SCENE — the fork users face */}
      <section className="cs-shot cs-reveal">
        <PanicJourney />
      </section>

      {/* 03 EVIDENCE */}
      <section className="cs-reveal">
        <CsArt name="read" />
        <span className="cs-num">03 / Building the evidence</span>
        <h2>I reviewed ~1,000 support tickets across two years</h2>
        <p>
          I needed more than an intuition to argue for a larger scope. I reviewed roughly{" "}
          <strong>1,000 ticket entries</strong> from the back-office system, covering about two
          years of support history.
        </p>
        <p>
          The first pass grouped tickets by service area: accounts, cards, bill management, cheque
          management. But subject alone didn&apos;t explain the problem. The more useful distinction
          cut across all four:{" "}
          <strong>could this issue have been resolved through an existing answer?</strong>
        </p>
        <CsStats
          items={[
            { value: "~1,000", label: "tickets reviewed" },
            { value: "2 yrs", label: "of support history" },
            { value: "4", label: "service areas, one behavioral cut" },
          ]}
        />
      </section>

      {/* 03b THE CUT */}
      <section className="cs-reveal">
        <span className="cs-num">03 / The distinction that mattered</span>
        <h2>Two behavioral groups, not four topics</h2>
        <div className="cs-compare">
          <div className="col new">
            <span className="tag">Self-serviceable</span>
            <ul>
              <li>An existing piece of information could reasonably resolve the question</li>
              <li>No case-specific investigation required</li>
              <li>No operational intervention required</li>
            </ul>
          </div>
          <div className="col legacy">
            <span className="tag">Needs support</span>
            <ul>
              <li>Required access to account state</li>
              <li>Required an operational action</li>
              <li>Required case-specific judgment from the support team</li>
            </ul>
          </div>
        </div>
        <p>
          Across the dataset, a meaningful share of ticket demand came from questions where the
          knowledge already existed. The failure was not missing content. It was the{" "}
          <strong>location and timing</strong> of the answer.
        </p>
      </section>

      {/* 03c THE ARGUMENT */}
      <section className="cs-reveal">
        <span className="cs-num">03 / What this changed</span>
        <h2>From an opinion to a product argument</h2>
        <div className="cs-pull">
          A significant part of support demand was not a knowledge problem. It was an access
          problem.
        </div>
        <p>
          Instead of taking &quot;the FAQ is bad&quot; back to stakeholders, I could make a stronger
          case:{" "}
          <strong>
            the current structure asks users to choose between self-service and escalation too
            early.
          </strong>
        </p>
        <p>
          The evidence was strong enough to expand the project beyond the original FAQ redesign.
        </p>
      </section>

      {/* 04 DIRECTION */}
      <section className="cs-reveal">
        <CsArt name="merge" />
        <span className="cs-num">04 / The product direction</span>
        <h2>From two destinations to one support journey</h2>
        <p>
          Don&apos;t make finding an answer and asking for help separate experiences. Combine them
          into a single flow. This changed the role of the FAQ entirely: instead of a destination
          users had to intentionally visit, support content became something the product could
          surface inside the moment of uncertainty.
        </p>
        <RoutingShift />
      </section>

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

      {/* 05 DECISION 01 */}
      <section className="cs-reveal">
        <span className="cs-num">05 / Key decision 01</span>
        <h2>Surface answers while the user describes the issue</h2>

        <div className="cs-decision">
          <div className="dhead">
            <span className="dnum">DECISION 01</span>
            <div className="dtitle">Contextual matching instead of a searchable FAQ</div>
          </div>
          <div className="dbody">
            <div className="cs-dline">
              <div className="k">Why not search</div>
              <div className="v">
                A searchable or browsable FAQ still depends on the user knowing what to search for,
                which leaves the support journey split in two.
              </div>
            </div>
            <div className="cs-dline chose">
              <div className="k">What I pushed for</div>
              <div className="v">
                Relevant answers appear dynamically as the user describes their problem. Ticket
                submission stays available at all times, but becomes a{" "}
                <strong>fallback rather than the default</strong>, and the information already
                entered carries forward into escalation instead of forcing a restart.
              </div>
            </div>
            <div className="cs-dline">
              <div className="k">The interaction principle</div>
              <div className="v">
                Give the user a chance to resolve the issue before they commit to waiting for
                support. The ticket analysis showed these questions cluster around time-sensitive,
                high-stakes moments &mdash; moving funds, checking transaction behavior, verifying
                operational rules. An answer delivered after a support round-trip is already late.
              </div>
            </div>
            <div className="cs-dline">
              <div className="k">The trade-off I accepted</div>
              <div className="v">
                Contextual matching increased interaction and implementation complexity compared
                with a static FAQ. I accepted that because it addressed the behavior in the
                evidence, rather than just improving the presentation of existing content.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 06 DECISION 02 */}
      <section className="cs-reveal">
        <span className="cs-num">06 / Key decision 02</span>
        <h2>Preserve an imperfect taxonomy instead of breaking a live operation</h2>
        <p>
          The support database relied on a fixed category taxonomy, and existing back-office filters
          and historical ticket data depended on it.
        </p>
        <div className="cs-compare">
          <div className="col legacy">
            <span className="tag">Option A · Rebuild the taxonomy</span>
            <ul>
              <li>Cleaner structure aligned with the new experience</li>
              <li>Migration work and broken historical continuity</li>
              <li>Risk to the workflows support used every day</li>
            </ul>
          </div>
          <div className="col new">
            <span className="tag">Option B · Preserve the legacy structure</span>
            <ul>
              <li>Operational continuity, far lower migration risk</li>
              <li>Underlying model stays less elegant than the new surface</li>
            </ul>
          </div>
        </div>
      </section>

      {/* 06b THE DECISION */}
      <section className="cs-reveal">
        <span className="cs-num">06 / The decision</span>
        <h2>A layered migration, documented as deliberate debt</h2>
        <div className="cs-decision">
          <div className="dhead">
            <span className="dnum">DECISION 02</span>
            <div className="dtitle">Map the new experience onto the structure already in use</div>
          </div>
          <div className="dbody">
            <div className="cs-dline chose">
              <div className="k">What I proposed</div>
              <div className="v">
                Preserve the legacy taxonomy underneath, map the new support experience onto it, and
                use a controlled &quot;Other&quot; fallback for cases that couldn&apos;t be mapped
                cleanly. I walked stakeholders through the compromise and got alignment on the
                migration path.
              </div>
            </div>
            <div className="cs-dline">
              <div className="k">What it cost</div>
              <div className="v">
                The resulting system was not the cleanest possible architecture. It was the most
                responsible one for a live product. I documented the compromise as deliberate design
                debt so the limitation and its rationale stay visible to the team.
              </div>
            </div>
          </div>
        </div>
        <div className="cs-pull">
          A cleaner design was not worth destabilizing the operation supporting it.
        </div>
      </section>

      {/* 07 SYSTEM */}
      <section className="cs-reveal">
        <CsArt name="rows" />
        <span className="cs-num">07 / Designing the system</span>
        <h2>The solution had to work beyond the happy path</h2>
        <div className="cs-steps">
          {[
            {
              h: "Describe the issue",
              p: "The user begins explaining what they are trying to do, or what went wrong.",
            },
            {
              h: "Surface relevant answers",
              p: "Support content filters against the information being entered.",
            },
            {
              h: "Open an answer without losing context",
              p: "Guidance can be inspected while staying inside the support flow.",
            },
            {
              h: "Resolve or escalate",
              p: "If the content helps, the user returns to their task. If not, ticket submission is immediately available.",
            },
            {
              h: "Preserve context during escalation",
              p: "What the user already provided becomes part of the support request instead of being discarded.",
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

      {/* 07b EDGE CASES */}
      <section className="cs-reveal">
        <span className="cs-num">07 / Beyond the happy path</span>
        <h2>The cases that decide whether a support flow actually holds</h2>
        <div className="cs-inv">
          <div className="ih">
            <span className="t">Pressure-tested with engineering, support &amp; product</span>
            <span className="c">9 scenario classes</span>
          </div>
          <div className="isub">
            A support surface is only as good as its worst case. These were walked through together
            before the design was considered done.
          </div>
          <div className="cs-chips">
            {edgeCases.map((c) => (
              <span key={c}>{c}</span>
            ))}
          </div>
        </div>
        <p>
          The experience also reused existing platform components wherever possible, so the new
          surface stayed consistent with the product and reduced unnecessary implementation cost.
        </p>
      </section>

      {/* 08 LEADERSHIP */}
      <section className="cs-reveal">
        <span className="cs-num">08 / How I led the work</span>
        <h2>My job was not only to produce the interface</h2>
        <div className="cs-steps">
          {[
            {
              h: "I reframed the problem",
              p: "Rather than accepting the FAQ redesign as the problem definition, I investigated the behavior behind the request and brought a different problem back to the team.",
            },
            {
              h: "I built the evidence before asking for more scope",
              p: "The ticket analysis gave stakeholders something concrete to evaluate, and shifted the discussion from opinion to observable support behavior.",
            },
            {
              h: "I created a direction the team could debate",
              p: "The unified support model gave product, support, design, and engineering a shared object to react to, instead of arguing about the existing experience in the abstract.",
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

      {/* 08b LEADERSHIP cont. */}
      <section className="cs-reveal">
        <span className="cs-num">08 / How I led the work</span>
        <h2>Holding the intent through implementation</h2>
        <div className="cs-steps" style={{ counterReset: "s 3" }}>
          {[
            {
              h: "I negotiated around operational constraints",
              p: "When the cleaner taxonomy conflicted with the back-office system, I made the trade-off explicit, proposed a migration path, and documented the debt instead of letting implementation constraints silently degrade the design.",
            },
            {
              h: "I kept design and implementation connected",
              p: "I worked with the frontend tech lead and the other designer to translate the direction into flows, states, reusable platform patterns, and implementation-ready specs.",
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
        <div className="cs-pull">
          The goal was not to defend a perfect design. It was to preserve the intent of the
          experience while making it viable inside the system that had to support it.
        </div>
      </section>

      {/* 09 VALIDATION */}
      <section className="cs-reveal">
        <CsArt name="shield" />
        <span className="cs-num">09 / Validation</span>
        <h2>Real user testing wasn&apos;t available, so I changed its form</h2>
        <p>
          In this B2B banking environment I couldn&apos;t put the new experience in front of
          corporate clients during the design phase. That constraint didn&apos;t remove the need for
          validation. It changed what validation had to look like.
        </p>
        <div className="cs-steps">
          {[
            {
              h: "Evidence-based scenario reviews",
              p: "We tested the proposed flow against the recurring patterns found in the historical support tickets.",
            },
            {
              h: "Cross-functional edge-case walkthroughs",
              p: "Engineering and support pressure-tested the design against permissions, operational requirements, empty states, failures, and back-office dependencies.",
            },
            {
              h: "Staging validation",
              p: "The complete flow was built and exercised in the test environment, so interaction and implementation issues surfaced before production.",
            },
            {
              h: "Controlled rollout plan",
              p: "Limited production exposure before wider release, so real behavior could inform further iteration.",
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

      {/* 10 OUTCOME */}
      <section className="cs-reveal">
        <span className="cs-num">10 / Outcome</span>
        <h2>Built and validated &mdash; but not yet live</h2>
        <div className="cs-status">
          <span className="cs-eyebrow">Status: pre-launch</span>
          <h3>No live metrics yet, and I won&apos;t claim any.</h3>
          <p>
            The unified support experience was designed, built, and validated in staging. It
            hasn&apos;t shipped to production, so I can&apos;t claim a reduction in ticket volume,
            faster resolution, or improved self-service behavior.
          </p>
          <span className="pill">
            What changed before launch was the direction of the product
          </span>
        </div>
        <p>
          A request to redesign a FAQ became an agreed structural change to how users access
          support. The project left the design phase with an evidence-backed problem definition, a
          unified support model, an agreed implementation direction, a documented taxonomy
          trade-off, and a staged validation and rollout plan.
        </p>
      </section>

      {/* 10b MEASUREMENT */}
      <section className="cs-reveal">
        <span className="cs-num">10 / What I would measure</span>
        <h2>Are more users resolving uncertainty before they need a human?</h2>
        <div className="cs-metrics">
          {metrics.map((m) => (
            <div className="cs-metric" key={m}>
              <span className="i" aria-hidden />
              <span className="t">{m}</span>
            </div>
          ))}
        </div>
        <div className="cs-pull">
          The goal would not be to eliminate tickets. It would be to make sure human support is used
          when human support is actually needed.
        </div>
      </section>

      {/* 11 REFLECTION */}
      <section className="cs-reveal">
        <span className="cs-num">11 / Reflection</span>
        <h2>Evidence earns scope</h2>
        <div className="cs-reflect">
          <h3>The most important move happened before I designed an interface</h3>
          <p>
            I didn&apos;t have the authority to simply redefine the project. I needed to make the
            larger problem visible. The ticket history turned a design intuition into a product
            argument strong enough for the team to change direction.
          </p>
        </div>
        <div className="cs-divider" style={{ margin: "22px 0" }} />
        <div className="cs-reflect">
          <h3>What I&apos;d carry forward</h3>
          <p>
            Don&apos;t challenge a brief only because you disagree with it. Build the evidence that
            gives the team a reason to reconsider it.
          </p>
        </div>
      </section>

      {/* 11b REFLECTION cont. */}
      <section className="cs-reveal">
        <span className="cs-num">11 / Reflection</span>
        <h2>The best solution has to survive the system around it</h2>
        <div className="cs-reflect">
          <h3>Product design does not happen on an empty canvas</h3>
          <p>
            The cleanest taxonomy would have made the new experience easier to explain. It would
            also have introduced unnecessary risk into a live support operation. The quality of a
            decision includes what it protects, what it compromises, and whether the team
            understands the debt it leaves behind.
          </p>
        </div>
        <div className="cs-pull">
          A constraint is not always something to remove. Sometimes it defines the shape of the
          right solution.
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
