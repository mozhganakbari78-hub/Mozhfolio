import NextCaseLink from "./NextCaseLink";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import CsArt from "./CsArt";
import Mockup from "./Mockup";
import CsStats from "./CsStats";
import RoutingShift from "./RoutingShift";
import ReframeStatement from "./ReframeStatement";
import UserMindset from "./UserMindset";
import TicketWall from "./TicketWall";
import VocabularyGap from "./VocabularyGap";
import SearchWeights from "./SearchWeights";
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
          Support was spending real effort on questions that didn&apos;t need a person, which is
          operational cost. The brief was to improve the FAQ. Reviewing{" "}
          <strong>~1,000 support tickets</strong> showed why more content wouldn&apos;t fix it:
          people weren&apos;t missing information, they were missing guidance at the point of
          friction.
        </p>

        <dl className="cs-meta">
          <div>
            <dt>Role</dt>
            <dd>Product Designer. Identified the pattern, built the evidence, reframed the problem, and collaborated with Product and Engineering on the solution direction</dd>
          </div>
          <div>
            <dt>Worked with</dt>
            <dd>Product · Support · Frontend tech lead · One product designer</dd>
          </div>
          <div>
            <dt>Status</dt>
            <dd>Live. Early feedback showed fewer repetitive questions of this type</dd>
          </div>
        </dl>
      </header>

      <hr className="cs-divider" />

      {/* 01 THE B2B CONSTRAINT */}
      <section className="cs-reveal">
        <CsArt name="tickets" />
        <span className="cs-num">01 / The research constraint</span>
        <h2>In B2B products, continuous access to end users is limited</h2>
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
          stuck, in their own words, without being prompted by a researcher.
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
        <p>
          Meanwhile support was absorbing significant effort on questions that didn&apos;t need a
          person at all. Some had an answer already sitting in the product; others had an answer
          nobody had ever told the user, such as a task that can only be done at a branch. Either
          way the ticket was avoidable, and every avoidable ticket is operational cost and a slower
          queue for the people who genuinely need help.
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
          I reviewed around a thousand historical tickets, covering the period when the platform
          had gone through significant changes, making the data more representative of the current
          product experience.
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
          Individually these look like unrelated requests. As a set they split in two: half ask how
          to do something, half ask what is happening with something already done. Nobody is
          reporting a broken feature.
        </p>
      </section>

      {/* 03c THE FINDING */}
      <section className="cs-reveal">
        <span className="cs-num">03 / The finding</span>
        <h2>The answers didn&apos;t all live in the same place</h2>
        <p>
          Some were in the product. Others weren&apos;t ours to give at all: adding a signatory
          requires a branch visit and paperwork under the bank&apos;s own policy, and no amount of
          interface design changes that.
        </p>
        <div className="cs-pull">
          Users had no way to tell those two situations apart, and the product never told them
          which one they were in.
        </div>
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
        <h2>Users rarely approach help content calmly in a banking product</h2>
        <p>
          Whether the answer was in the product or at a branch counter, people reached out because
          they were already stuck while trying to complete something that mattered. You can hear it in the tickets themselves:
          &ldquo;why hasn&apos;t the money gone through?&rdquo; is not a documentation question. It
          is someone checking whether something has gone wrong.
        </p>
        <UserMindset />
      </section>

      {/* 06 DIRECTION */}
      <section className="cs-reveal">
        <CsArt name="merge" />
        <span className="cs-num">06 / Design direction</span>
        <h2>Move the answer to the point of friction</h2>
        <p>
          Guidance does not only mean showing an answer. Sometimes the honest answer is that the
          task cannot be done online at all, and saying so immediately beats a help article that
          lets someone keep hunting for a button that was never going to exist.
        </p>
        <div className="cs-metrics">
          {goals.map((g) => (
            <div className="cs-metric" key={g}>
              <span className="i" aria-hidden />
              <span className="t">{g}</span>
            </div>
          ))}
        </div>
      </section>

      {/* 06b THE SHIFT */}
      <section className="cs-reveal">
        <span className="cs-num">06 / The shift</span>
        <h2>Two destinations became one flow</h2>
        <p>
          Finding an answer and asking for help stopped being a choice the user makes first.
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
                exactly what they don&apos;t have at that moment. It also assumes users understand
                the product&apos;s terminology, which is often not true in banking workflows.
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
                it addressed the behavior revealed by the evidence rather than only changing how
                content was presented.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 07b THE VOCABULARY GAP */}
      <section className="cs-reveal">
        <span className="cs-num">07 / Why search alone fails</span>
        <h2>The user and the system don&apos;t call it the same thing</h2>
        <p>
          Search only works if both sides use the same word for the same event. Here they
          don&apos;t. Someone asks why their money hasn&apos;t arrived; the product files that
          event under the name of a settlement network they have never heard of. Nothing the user
          would think to type appears anywhere in the answer they need.
        </p>
        <VocabularyGap />
        <p>
          This is why the matching had to run on what people actually write, not on what the
          product calls things.
        </p>
      </section>

      {/* SHOT — live filtering */}
      <section className="cs-shot cs-reveal">
        <Mockup
          src="/projects/support-faq-filter.webp"
          alt="Real-time FAQ filtering as the user types their issue"
          caption="Fig. 02: Answers filter in live as the user describes the problem"
        />
      </section>

      {/* 08 DECISION 02 — the engineering constraint */}
      <section className="cs-reveal">
        <span className="cs-num">08 / Key decision 02</span>
        <h2>Engineering said keyword search was too expensive to build</h2>
        <p>
          The direction depended on matching what a user typed against existing content, and backend
          pushed back: open-ended keyword search was hard to implement on their data structure. I
          didn&apos;t argue the point and I didn&apos;t drop the idea. I asked to understand the
          actual constraint first, including how their database was structured, then went looking
          for a version that fit inside it.
        </p>
        <div className="cs-pull">
          &quot;Too hard to build&quot; is rarely about the whole idea. It is usually about one part
          of it, and that part is often negotiable once you can name it.
        </div>
      </section>

      {/* 08b THE WEIGHTED MODEL */}
      <section className="cs-reveal">
        <span className="cs-num">08 / The simplification</span>
        <h2>Two weighted passes instead of open-ended search</h2>
        <p>
          Rather than general search, I proposed ranked matching. The first pass is literal: the
          words the user has already typed. The second pass handles the mismatch people actually hit,
          where they use one word and the content uses another, driven by a synonym list I wrote
          rather than by anything the system had to infer.
        </p>
        <SearchWeights />
      </section>

      {/* 08c SCOPE */}
      <section className="cs-reveal">
        <span className="cs-num">08 / Scoping phase one</span>
        <h2>I kept the first synonym list deliberately small</h2>
        <p>
          The list only covers pairs that are unambiguous, because a wrong synonym match is worse
          than no match: it hands a confident answer to the wrong question. Keeping phase one narrow
          made it cheap enough for engineering to ship, and the list is designed to grow as real
          usage shows which words people actually reach for.
        </p>
        <div className="cs-pull">
          The feature shipped because I shrank it to the part that was both valuable and buildable,
          not because I convinced anyone to build the hard version.
        </div>
      </section>

      {/* 09 DECISION 03 */}
      <section className="cs-reveal">
        <CsArt name="shield" />
        <span className="cs-num">09 / Key decision 03</span>
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

      {/* 10 OUTCOME */}
      <section className="cs-reveal">
        <span className="cs-num">10 / Outcome</span>
        <h2>Support conversations changed subject</h2>
        <div className="cs-status">
          <span className="cs-eyebrow">Shipped</span>
          <h3>
            From &quot;where do I find this?&quot; toward genuinely functional issues.
          </h3>
          <p>
            After launch, support feedback indicated fewer repetitive questions of this type.
            Since we did not have instrumented before-and-after measurement, I avoid attributing a
            specific percentage to the change. The qualitative shift was that support spent less
            time directing users to existing information and more time resolving issues that
            required human assistance.
          </p>
          <span className="pill">
            The analysis also outlived the project: root cause first, not the first visible symptom
          </span>
        </div>
      </section>

      {/* 11 REFLECTION */}
      <section className="cs-reveal">
        <span className="cs-num">11 / Reflection</span>
        <h2>A ticket is a signal, not just a request to answer</h2>
        <div className="cs-reflect">
          <h3>Evidence earns scope</h3>
          <p>
            I didn&apos;t have the authority to redefine the project, and I didn&apos;t need it. The
            ticket history turned an intuition into evidence the team could evaluate.
          </p>
        </div>
        <div className="cs-divider" style={{ margin: "22px 0" }} />
        <div className="cs-reflect">
          <h3>A technical objection is information, not a verdict</h3>
          <p>
            When engineering said search was too expensive, the useful move was understanding their
            data structure well enough to propose something narrower. The design survived because I
            changed its shape, not because I defended its first version.
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
