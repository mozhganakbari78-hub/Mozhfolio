import NextCaseLink from "./NextCaseLink";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import CsArt from "./CsArt";
import Mockup from "./Mockup";
import CsStats from "./CsStats";
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

export default function SupportFrictionCase() {
  return (
    <article>
      {/* HERO */}
      <header className="cs-hero">
        <span className="cs-eyebrow">
          Case Study · Corporate Banking · Support &amp; Content Architecture
        </span>
        <h1>
          The answers already existed.
          <br />
          People just couldn&apos;t reach them in time.
        </h1>
        <p className="cs-lede">
          The brief was to improve an outdated FAQ. Two years of support history showed a different
          problem: users had to choose between finding an answer and asking for help before they
          knew which path could solve their issue. I used the evidence to expand the project from
          an FAQ redesign into a unified support experience.
        </p>

        <dl className="cs-meta">
          <div>
            <dt>Role</dt>
            <dd>Product Designer. Reframed the problem, built the evidence, set the direction, carried it through handoff</dd>
          </div>
          <div>
            <dt>Worked with</dt>
            <dd>Product · Support · Frontend tech lead · One product designer</dd>
          </div>
          <div>
            <dt>Status</dt>
            <dd>Built and validated in staging · Pre-launch</dd>
          </div>
        </dl>
      </header>

      <hr className="cs-divider" />

      {/* 01 REFRAME */}
      <section className="cs-reveal">
        <CsArt name="fork" />
        <span className="cs-num">01 / Reframing the brief</span>
        <h2>&quot;Improve the FAQ&quot; was solving the symptom</h2>
        <p>
          On a platform where people move payroll and approve transfers, uncertainty is expensive.
          The FAQ and the ticket form were two separate destinations, and the product asked users
          to pick one at the exact moment they understood their problem least.
        </p>
      </section>

      {/* SHOT — panic journey */}
      <section className="cs-shot cs-reveal">
        <PanicJourney />
      </section>

      {/* 02 EVIDENCE */}
      <section className="cs-reveal">
        <CsArt name="read" />
        <span className="cs-num">02 / Building the evidence</span>
        <h2>~1,000 tickets, cut by behavior instead of topic</h2>
        <p>
          I needed more than an intuition to argue for a larger scope, so I reviewed roughly{" "}
          <strong>1,000 tickets</strong> across two years. Grouping them by service area explained
          nothing. The useful cut ran across all of them:{" "}
          <strong>could an existing answer have resolved this?</strong> A meaningful share could
          have. The failure was not missing content, it was the location and timing of the answer.
        </p>
        <CsStats
          items={[
            { value: "~1,000", label: "tickets reviewed" },
            { value: "2 yrs", label: "of support history" },
            { value: "1", label: "behavioral cut across 4 service areas" },
          ]}
        />
        <div className="cs-pull">
          A significant part of support demand was not a knowledge problem. It was an access
          problem. That turned &quot;the FAQ is bad&quot; into an argument the team could act on.
        </div>
      </section>

      {/* 03 DIRECTION */}
      <section className="cs-reveal">
        <CsArt name="merge" />
        <span className="cs-num">03 / The product direction</span>
        <h2>From two destinations to one support journey</h2>
        <p>
          Instead of making the user choose, the two paths became one flow. Support content stopped
          being a place users had to visit and became something the product surfaces inside the
          moment of uncertainty.
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

      {/* 04 DECISION 01 */}
      <section className="cs-reveal">
        <span className="cs-num">04 / Key decision 01</span>
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
                A searchable FAQ still depends on the user knowing what to search for, which leaves
                the journey split in two.
              </div>
            </div>
            <div className="cs-dline chose">
              <div className="k">What I pushed for</div>
              <div className="v">
                Answers appear as the user describes the problem. Ticket submission stays available
                but becomes a <strong>fallback rather than the default</strong>, and what the user
                already typed carries into the ticket instead of being discarded.
              </div>
            </div>
            <div className="cs-dline">
              <div className="k">The trade-off I accepted</div>
              <div className="v">
                More interaction and implementation complexity than a static FAQ. Worth it, because
                it addressed the behavior in the evidence rather than the presentation of content.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SHOT — live filtering */}
      <section className="cs-shot cs-reveal">
        <Mockup
          src="/projects/support-faq-filter.webp"
          alt="Real-time FAQ filtering as the user types their issue"
          caption="Fig. 02: Answers filter in live as the user describes the problem"
        />
      </section>

      {/* 05 DECISION 02 */}
      <section className="cs-reveal">
        <span className="cs-num">05 / Key decision 02</span>
        <h2>I kept a taxonomy I didn&apos;t like</h2>
        <p>
          The support database ran on a fixed category taxonomy that back-office filters and two
          years of historical tickets depended on. Rebuilding it would have been cleaner and would
          have put a live support operation at risk.
        </p>
        <div className="cs-decision">
          <div className="dhead">
            <span className="dnum">DECISION 02</span>
            <div className="dtitle">Map the new experience onto the structure already in use</div>
          </div>
          <div className="dbody">
            <div className="cs-dline chose">
              <div className="k">What I proposed</div>
              <div className="v">
                Preserve the legacy taxonomy underneath, map the new experience onto it, and use a
                controlled &quot;Other&quot; fallback for what wouldn&apos;t map cleanly. I walked
                stakeholders through the compromise and got alignment on the migration path.
              </div>
            </div>
            <div className="cs-dline">
              <div className="k">What it cost</div>
              <div className="v">
                Not the cleanest architecture. I documented it as deliberate design debt so the
                limitation and its reasoning stay visible to whoever picks it up next.
              </div>
            </div>
          </div>
        </div>
        <div className="cs-pull">
          A cleaner design was not worth destabilizing the operation supporting it.
        </div>
      </section>

      {/* 06 EDGE CASES */}
      <section className="cs-reveal">
        <span className="cs-num">06 / Beyond the happy path</span>
        <h2>A support surface is only as good as its worst case</h2>
        <div className="cs-inv">
          <div className="ih">
            <span className="t">Pressure-tested with engineering, support &amp; product</span>
            <span className="c">9 scenario classes</span>
          </div>
          <div className="isub">
            Walked through together before the design was considered done, then built from existing
            platform components to keep implementation cost down.
          </div>
          <div className="cs-chips">
            {edgeCases.map((c) => (
              <span key={c}>{c}</span>
            ))}
          </div>
        </div>
      </section>

      {/* 07 VALIDATION */}
      <section className="cs-reveal">
        <CsArt name="shield" />
        <span className="cs-num">07 / Validation</span>
        <h2>User testing wasn&apos;t available, so I changed its form</h2>
        <p>
          I couldn&apos;t put this in front of corporate clients during the design phase. That
          removed a method, not the need for validation.
        </p>
        <div className="cs-steps">
          {[
            {
              h: "Evidence-based scenario reviews",
              p: "The flow was tested against the recurring patterns in the historical tickets.",
            },
            {
              h: "Cross-functional walkthroughs",
              p: "Engineering and support pressure-tested it against permissions, empty states, failures, and back-office dependencies.",
            },
            {
              h: "Staging validation",
              p: "The complete flow was built and exercised in test, so implementation issues surfaced before production.",
            },
            {
              h: "Controlled rollout plan",
              p: "Limited production exposure before wider release, so real behavior could inform the next iteration.",
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

      {/* 08 OUTCOME */}
      <section className="cs-reveal">
        <span className="cs-num">08 / Outcome</span>
        <h2>Built and validated, but not yet live</h2>
        <div className="cs-status">
          <span className="cs-eyebrow">Status: pre-launch</span>
          <h3>No live metrics yet, and I won&apos;t claim any.</h3>
          <p>
            It hasn&apos;t shipped to production, so I can&apos;t claim reduced ticket volume or
            faster resolution. What changed before launch was the direction of the product: a
            request to redesign a FAQ became an agreed structural change to how users reach support,
            with a documented taxonomy trade-off and a staged rollout plan.
          </p>
          <span className="pill">
            The measure I would watch: human support used when it is actually needed
          </span>
        </div>
      </section>

      {/* 09 REFLECTION */}
      <section className="cs-reveal">
        <span className="cs-num">09 / Reflection</span>
        <h2>Evidence earns scope</h2>
        <div className="cs-reflect">
          <h3>The most important move happened before I designed anything</h3>
          <p>
            I didn&apos;t have the authority to redefine the project. The ticket history turned a
            design intuition into a product argument strong enough for the team to change
            direction. Don&apos;t challenge a brief because you disagree with it. Build the evidence
            that gives the team a reason to reconsider.
          </p>
        </div>
        <div className="cs-divider" style={{ margin: "22px 0" }} />
        <div className="cs-reflect">
          <h3>The best solution still has to survive the system around it</h3>
          <p>
            The cleanest taxonomy would have been easier to explain and would have added real risk
            to a live operation. A constraint is not always something to remove. Sometimes it
            defines the shape of the right answer.
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
        <p>Corporate banking · Support experience · Pre-launch</p>
      </footer>
    </article>
  );
}
