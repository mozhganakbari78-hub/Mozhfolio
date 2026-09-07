import NextCaseLink from "./NextCaseLink";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import CsArt from "./CsArt";
import Mockup from "./Mockup";
import CsStats from "./CsStats";
import RoutingShift from "./RoutingShift";
import ReframeStatement from "./ReframeStatement";
import UserMindset from "./UserMindset";
import TicketWall from "./TicketWall";
import { PanicJourney } from "./CsInlineArt";

const ticketLens = [
  "What the user was trying to accomplish",
  "Which questions appeared again and again",
  "Whether the answer was missing or already available somewhere",
  "Which moments in the workflow created uncertainty",
];

const goals = [
  "Help users recover faster when they hit uncertainty",
  "Reduce unnecessary dependency on support",
  "Put guidance closer to where the friction happens",
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
          People couldn&apos;t reach them.
        </h1>
        <p className="cs-lede">
          The brief was to improve the FAQ. <strong>~1,000 support tickets</strong>{" "}
          said information was never the missing piece.
        </p>

        <dl className="cs-meta">
          <div>
            <dt>Role</dt>
            <dd>Product Designer. Reframed the problem, built the evidence, set the direction</dd>
          </div>
          <div>
            <dt>Worked with</dt>
            <dd>Product · Support · Frontend tech lead · One product designer</dd>
          </div>
          <div>
            <dt>Status</dt>
            <dd>Live. Questions of this shape dropped noticeably</dd>
          </div>
        </dl>
      </header>

      <hr className="cs-divider" />

      {/* 01 THE B2B CONSTRAINT */}
      <section className="cs-reveal">
        <CsArt name="tickets" />
        <span className="cs-num">01 / The research constraint</span>
        <h2>In B2B, you don&apos;t get to talk to users whenever you want</h2>
        <p>
          Users here are organizations, with different roles, workflows, and internal constraints,
          which makes continuous user research much harder than in a consumer product. To stay
          connected to real problems, I made reviewing support tickets part of my regular design
          routine.
        </p>
        <p>
          Over time I kept seeing questions that didn&apos;t really need support intervention.
          People were looking for information that would let them move forward, while the support
          team was already carrying a high volume of requests.
        </p>
        <div className="cs-pull">
          Support tickets are not only a list of complaints. They are a record of where people got
          stuck, in their own words, without anyone asking them a question.
        </div>
      </section>

      {/* SHOT — panic journey */}
      <section className="cs-shot cs-reveal">
        <PanicJourney />
      </section>

      {/* 02 THE PATTERN */}
      <section className="cs-reveal">
        <CsArt name="fork" />
        <span className="cs-num">02 / Discovering the pattern</span>
        <h2>Before redesigning the FAQ, I wanted to know what people were stuck on</h2>
        <p>
          The request that reached me was to improve the FAQ section. Adding content is the obvious
          response, and it is only the right one if information is the thing that&apos;s missing.
        </p>
        <div className="cs-pull">
          Are we solving the right problem, or are we only adding more support content?
        </div>
      </section>

      {/* 03 INVESTIGATION */}
      <section className="cs-reveal">
        <CsArt name="read" />
        <span className="cs-num">03 / Investigation</span>
        <h2>~1,000 tickets, read against the same four questions</h2>
        <p>
          I reviewed around a thousand historical tickets, covering the period in which the platform
          had gone through its significant changes, so the behaviour in the data reflected the
          product people were actually using.
        </p>
        <div className="cs-metrics">
          {ticketLens.map((q) => (
            <div className="cs-metric" key={q}>
              <span className="i" aria-hidden />
              <span className="t">{q}</span>
            </div>
          ))}
        </div>
        <CsStats
          items={[
            { value: "~1,000", label: "tickets reviewed" },
            { value: "2 yrs", label: "of support history" },
            { value: "4", label: "questions asked of every ticket" },
          ]}
        />
      </section>

      {/* 03b WHAT THE TICKETS SAID */}
      <section className="cs-reveal">
        <span className="cs-num">03 / What the tickets said</span>
        <h2>Read together, they were asking the same kind of question</h2>
        <TicketWall />
        <p>
          Individually these look like unrelated requests. As a set they split cleanly in two.
          Half ask how to do something the product already supports. The other half ask what is
          happening with something the user has already done. Nobody is reporting a broken feature,
          and nobody is asking for information that doesn&apos;t exist.
        </p>
      </section>

      {/* 04 REFRAME */}
      <section className="cs-reveal">
        <span className="cs-num">04 / Reframing the problem</span>
        <h2>The analysis described a different opportunity</h2>
        <ReframeStatement />
      </section>

      {/* 05 THE MOMENT */}
      <section className="cs-reveal">
        <span className="cs-num">05 / The moment itself</span>
        <h2>Nobody reads help content calmly in a banking product</h2>
        <p>
          The information usually existed. People reached out because they were already stuck while
          trying to complete something that mattered. In that state they are not calmly searching
          documentation.
        </p>
        <UserMindset />
      </section>

      {/* 06 DIRECTION */}
      <section className="cs-reveal">
        <CsArt name="merge" />
        <span className="cs-num">06 / Design direction</span>
        <h2>Move the answer to the point of friction</h2>
        <div className="cs-metrics">
          {goals.map((g) => (
            <div className="cs-metric" key={g}>
              <span className="i" aria-hidden />
              <span className="t">{g}</span>
            </div>
          ))}
        </div>
        <p>
          Finding an answer and asking for help became one flow, so support content stops being a
          destination the user has to think to visit.
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

      {/* 07 DECISION 01 */}
      <section className="cs-reveal">
        <span className="cs-num">07 / Key decision 01</span>
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
                it addressed the behaviour in the evidence rather than the presentation of content.
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

      {/* 08 DECISION 02 */}
      <section className="cs-reveal">
        <CsArt name="shield" />
        <span className="cs-num">08 / Key decision 02</span>
        <h2>I kept a taxonomy I didn&apos;t like</h2>
        <p>
          The support database ran on a fixed category taxonomy that back-office filters and two
          years of historical tickets depended on. Rebuilding it would have been cleaner and would
          have put a live support operation at risk. I mapped the new experience onto the existing
          structure, used a controlled &quot;Other&quot; fallback for what wouldn&apos;t map, and
          documented the compromise as deliberate design debt so the reasoning stays visible.
        </p>
        <div className="cs-pull">
          A cleaner design was not worth destabilizing the operation supporting it.
        </div>
      </section>

      {/* 09 OUTCOME */}
      <section className="cs-reveal">
        <span className="cs-num">09 / Outcome</span>
        <h2>Live, and the questions changed shape</h2>
        <div className="cs-status">
          <span className="cs-eyebrow">Shipped</span>
          <h3>Support stopped answering questions the product should have answered.</h3>
          <p>
            Since the experience went live, questions of this shape have dropped noticeably, and the
            support team spends more of its time on real functional problems instead of pointing
            people to information that already existed. I don&apos;t have instrumented before and
            after figures to publish, so I&apos;ll describe the change rather than quote a number.
          </p>
          <span className="pill">
            The analysis also outlived the project: root cause first, not the first visible symptom
          </span>
        </div>
      </section>

      {/* 10 REFLECTION */}
      <section className="cs-reveal">
        <span className="cs-num">10 / Reflection</span>
        <h2>When research is hard, operational signal is research</h2>
        <div className="cs-reflect">
          <h3>A ticket is a signal, not just a request to answer</h3>
          <p>
            Support tickets get handled one at a time, closed, and forgotten. Read as a set, the
            same records describe user behaviour, expectations, and exactly where the journey
            creates confusion. In B2B, where direct research access is genuinely limited, that is
            not a consolation prize. It is the channel.
          </p>
        </div>
        <div className="cs-divider" style={{ margin: "22px 0" }} />
        <div className="cs-reflect">
          <h3>Evidence earns scope</h3>
          <p>
            I didn&apos;t have the authority to redefine the project, and I didn&apos;t need it. The
            ticket history turned an intuition into an argument the team could evaluate. Don&apos;t
            challenge a brief because you disagree with it. Build the evidence that gives people a
            reason to reconsider.
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
        <p>Corporate banking · Support experience · Shipped</p>
      </footer>
    </article>
  );
}
