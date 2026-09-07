import NextCaseLink from "./NextCaseLink";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import CsArt from "./CsArt";
import Mockup from "./Mockup";
import CsStats from "./CsStats";
import RoutingShift from "./RoutingShift";
import ReframeStatement from "./ReframeStatement";
import UserMindset from "./UserMindset";
import { PanicJourney } from "./CsInlineArt";

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
          The request was straightforward: improve the FAQ so users find answers faster. Before
          adding more content, I wanted to know whether information was actually missing.{" "}
          <strong>~1,000 support tickets</strong> said it wasn&apos;t. People were blocked in the
          middle of a task and couldn&apos;t find or understand the right information at that
          moment.
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

      {/* 01 CONTEXT */}
      <section className="cs-reveal">
        <CsArt name="fork" />
        <span className="cs-num">01 / Context</span>
        <h2>I didn&apos;t start by writing content</h2>
        <p>
          Support requests on the platform clustered around questions and uncertainty during
          workflows, and the brief that came out of that was to improve the FAQ. Adding content is
          the obvious response, and it is only correct if information is the thing that&apos;s
          missing. That was the assumption I wanted to test first.
        </p>
      </section>

      {/* SHOT — panic journey */}
      <section className="cs-shot cs-reveal">
        <PanicJourney />
      </section>

      {/* 02 EVIDENCE */}
      <section className="cs-reveal">
        <CsArt name="read" />
        <span className="cs-num">02 / Looking beyond the request</span>
        <h2>~1,000 tickets, read for pattern rather than topic</h2>
        <p>
          I reviewed around a thousand historical support tickets against three questions: what
          the user was trying to accomplish when they contacted support, which part of the product
          created the confusion, and whether the information they needed already existed somewhere
          else.
        </p>
        <CsStats
          items={[
            { value: "~1,000", label: "tickets reviewed" },
            { value: "2 yrs", label: "of support history" },
            { value: "3", label: "questions asked of every ticket" },
          ]}
        />
        <div className="cs-pull">
          Most people were not contacting support because the answer did not exist. They were
          contacting support because they were already blocked and could not reach it.
        </div>
      </section>

      {/* 03 REFRAME */}
      <section className="cs-reveal">
        <span className="cs-num">03 / Reframing the problem</span>
        <h2>The evidence described a different problem than the brief</h2>
        <ReframeStatement />
      </section>

      {/* 04 DESIGN CONSIDERATIONS */}
      <section className="cs-reveal">
        <span className="cs-num">04 / Design considerations</span>
        <h2>Nobody reads help content casually in a banking product</h2>
        <p>
          People hit these moments while handling payments, transfers, and organizational
          operations. That is a different mindset from someone browsing documentation, and it
          changes what a solution has to do.
        </p>
        <UserMindset />
      </section>

      {/* 05 DIRECTION */}
      <section className="cs-reveal">
        <CsArt name="merge" />
        <span className="cs-num">05 / The direction</span>
        <h2>Move the answer to the point of friction</h2>
        <p>
          If the problem is when and where information appears, more documentation cannot fix it.
          The two paths, finding an answer and asking for help, became one flow, so support content
          stops being a destination and becomes something the product surfaces at the moment of
          uncertainty.
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

      {/* 06 DECISION 01 */}
      <section className="cs-reveal">
        <span className="cs-num">06 / Key decision 01</span>
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
                A searchable FAQ still depends on the user knowing what to search for, which is
                exactly what they don&apos;t have at that moment.
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

      {/* 07 DECISION 02 */}
      <section className="cs-reveal">
        <CsArt name="shield" />
        <span className="cs-num">07 / Key decision 02</span>
        <h2>I kept a taxonomy I didn&apos;t like</h2>
        <p>
          The support database ran on a fixed category taxonomy that back-office filters and two
          years of historical tickets depended on. Rebuilding it would have been cleaner and would
          have put a live support operation at risk. I mapped the new experience onto the existing
          structure instead, used a controlled &quot;Other&quot; fallback for what wouldn&apos;t map,
          and documented the compromise as deliberate design debt so the reasoning stays visible.
        </p>
        <div className="cs-pull">
          A cleaner design was not worth destabilizing the operation supporting it.
        </div>
      </section>

      {/* 08 OUTCOME */}
      <section className="cs-reveal">
        <span className="cs-num">08 / Outcome</span>
        <h2>The conversation changed before the design did</h2>
        <div className="cs-status">
          <span className="cs-eyebrow">Status: pre-launch</span>
          <h3>From &quot;add more FAQ content&quot; to discoverability and guidance.</h3>
          <p>
            The analysis moved the team off a content problem and onto where and when the product
            gives guidance. The unified experience was designed, built, and validated in staging;
            it hasn&apos;t shipped, so I won&apos;t claim reduced ticket volume or faster
            resolution.
          </p>
          <span className="pill">
            What shipped first was a better way to read the next support request
          </span>
        </div>
      </section>

      {/* 09 REFLECTION */}
      <section className="cs-reveal">
        <span className="cs-num">09 / Reflection</span>
        <h2>Tickets are a symptom. The question is what they are a symptom of.</h2>
        <div className="cs-reflect">
          <h3>Evidence earns scope</h3>
          <p>
            I didn&apos;t have the authority to redefine the project, and I didn&apos;t need it. The
            ticket history turned a design intuition into an argument the team could evaluate.
            Don&apos;t challenge a brief because you disagree with it. Build the evidence that gives
            people a reason to reconsider.
          </p>
        </div>
        <div className="cs-divider" style={{ margin: "22px 0" }} />
        <div className="cs-reflect">
          <h3>What I carry into the next support request</h3>
          <p>
            Treating each incoming request as an isolated content problem produces a bigger FAQ and
            the same tickets. The useful move is asking what the volume is telling you about the
            product, before agreeing to write anything.
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
