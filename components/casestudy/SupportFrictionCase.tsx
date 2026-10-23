import NextCaseLink from "./NextCaseLink";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import CsArt from "./CsArt";
import Mockup from "./Mockup";
import CsStats from "./CsStats";
import RoutingShift from "./RoutingShift";
import ReframeStatement from "./ReframeStatement";
import TicketWall from "./TicketWall";
import TicketSplit from "./TicketSplit";
import VocabularyGap from "./VocabularyGap";
import SearchWeights from "./SearchWeights";
import KeywordRule from "./KeywordRule";

/*
 * Each claim is made once. The earlier draft restated "support was carrying
 * questions that didn't need a person" four times and the branch-visit
 * example four times; a reader skimming panels should meet every idea in
 * exactly one of them.
 */
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
          The brief was to expand the FAQ. Reading{" "}
          <strong>~1,000 support tickets</strong>{" "}
          first showed that four out of five didn&apos;t need a person, and the answer usually
          existed already. The problem was reaching it at the moment someone got stuck.
        </p>

        <dl className="cs-meta">
          <div>
            <dt>Role</dt>
            <dd>Product Designer. Found the pattern, built the evidence, reframed the brief, and wrote the matching spec handed to engineering</dd>
          </div>
          <div>
            <dt>Worked with</dt>
            <dd>Product · Support · Frontend tech lead · One product designer</dd>
          </div>
          <div>
            <dt>Status</dt>
            <dd>Live</dd>
          </div>
        </dl>
      </header>

      <hr className="cs-divider" />

      {/* 01 THE EVIDENCE */}
      {/* No CsArt here: the ticket wall is already the panel's image, and the
          icon cost the height that keeps this panel from scrolling on a
          shorter laptop screen. */}
      <section className="cs-reveal">
        <span className="cs-num">01 / The evidence</span>
        <h2>I read the tickets before touching the FAQ</h2>
        <p>
          Organisations are hard to research continuously, so support tickets became the research:
          two years of them, in users&apos; own words, unprompted by anyone.
        </p>
        <TicketWall />
      </section>

      {/* 02 THE SPLIT */}
      <section className="cs-reveal">
        <span className="cs-num">02 / The split</span>
        <h2>Four out of five tickets did not need a person</h2>
        <TicketSplit />
      </section>

      {/* 03 THE FINDING, AND WHAT IT DID TO THE BRIEF */}
      <section className="cs-reveal">
        <span className="cs-num">03 / The finding</span>
        <h2>The answer wasn&apos;t missing. It was conditional</h2>
        <p>
          The largest group repeats almost word for word, but the right answer depends on the
          asker&apos;s <strong>role, organisation, and permissions</strong>. One published answer
          cannot serve a question whose answer is &quot;it depends&quot;. Others weren&apos;t ours
          to give at all: adding a signatory needs a branch visit under bank policy.
        </p>
        <ReframeStatement />
      </section>

      {/* 04 THE SHIFT */}
      <section className="cs-reveal">
        <span className="cs-num">04 / The shift</span>
        <h2>The form should be the last option, not the first</h2>
        <p>
          People arrive mid-task, often mid-payment. The old flow made them choose between the FAQ
          and a ticket before they understood their own problem.
        </p>
        <RoutingShift />
      </section>

      {/* SHOT — unified surface */}
      <section className="cs-shot cs-reveal">
        <Mockup
          src="/projects/support-faq.webp"
          alt="Unified support surface, FAQ and ticket in one flow"
          caption="Fig. 01: Finding an answer and asking for help are one flow"
        />
      </section>

      {/* 05 THE DECISION */}
      <section className="cs-reveal">
        <span className="cs-num">05 / The decision</span>
        <h2>Show answers while the user is still typing</h2>
        <p>
          Search assumes the user knows the right word, and here they rarely do. I pushed for
          answers that appear as the problem is described, with the ticket kept as a fallback that
          carries what they already typed. More to build than a static FAQ, and the only option
          that matched what the tickets showed.
        </p>
        <VocabularyGap />
      </section>

      {/* SHOT — live filtering */}
      <section className="cs-shot cs-reveal">
        <Mockup
          src="/projects/support-faq-filter.webp"
          alt="Real-time FAQ filtering as the user types their issue"
          caption="Fig. 02: Answers filter in as the user describes the problem"
        />
      </section>

      {/* 06 THE PUSHBACK */}
      <section className="cs-reveal">
        <span className="cs-num">06 / The pushback</span>
        <h2>Engineering said keyword search was too expensive</h2>
        <p>
          Open-ended search didn&apos;t fit the backend&apos;s data structure. Instead of arguing,
          I asked how their database worked, then proposed ranked matching in two passes: the words
          the user typed, then a fixed synonym list. Nothing the system had to infer.
        </p>
        <SearchWeights />
      </section>

      {/* 07 THE SPEC */}
      <section className="cs-reveal">
        <span className="cs-num">07 / The spec</span>
        <h2>I handed over the data, not a description of it</h2>
        <p>
          Every FAQ question broken into searchable keywords, with normalisation rules and a synonym
          dictionary. I drafted it with <strong>AI</strong> to get through the volume, then checked
          every keyword automatically against its own question. Below a match threshold the product
          shows nothing, because a confident wrong answer is worse than none.
        </p>
        <CsStats
          items={[
            { value: "89", label: "FAQ questions" },
            { value: "343", label: "keywords, each verified" },
            { value: "34", label: "synonym groups" },
          ]}
        />
      </section>

      {/* 08 THE EXCEPTION */}
      <section className="cs-reveal">
        <span className="cs-num">08 / The exception</span>
        <h2>One rule would have quietly broken the set</h2>
        <p>Conjugated verbs were stripped. Verbal nouns look the same, and had to stay.</p>
        <KeywordRule />
      </section>

      {/* 09 THE TRADE-OFF */}
      <section className="cs-reveal">
        <CsArt name="shield" />
        <span className="cs-num">09 / The trade-off</span>
        <h2>I kept a taxonomy I didn&apos;t like</h2>
        <p>
          Back-office filters and two years of tickets depended on the existing categories. I mapped
          the new flow onto them, added a controlled &quot;Other&quot;, and logged it as design debt
          rather than put a live support operation at risk.
        </p>
      </section>

      {/* 10 OUTCOME */}
      <section className="cs-reveal">
        <span className="cs-num">10 / Outcome</span>
        <h2>Support conversations changed subject</h2>
        <div className="cs-status">
          <span className="cs-eyebrow">Shipped</span>
          <h3>From &quot;where do I find this?&quot; to genuinely functional issues.</h3>
          <p>
            Support reported fewer repetitive questions of this kind after launch. Without
            instrumented before-and-after data, I don&apos;t put a percentage on it.
          </p>
        </div>
      </section>

      {/* 11 REFLECTION */}
      <section className="cs-reveal">
        <span className="cs-num">11 / Reflection</span>
        <h2>A ticket is a signal, not just a request to answer</h2>
        <div className="cs-reflect">
          <h3>Evidence earns scope</h3>
          <p>
            I didn&apos;t have the authority to redefine the project, and didn&apos;t need it. The
            tickets did that.
          </p>
        </div>
        <div className="cs-divider" style={{ margin: "22px 0" }} />
        <div className="cs-reflect">
          <h3>A technical objection is information, not a verdict</h3>
          <p>
            The design survived because I changed its shape, not because I defended its first
            version.
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
