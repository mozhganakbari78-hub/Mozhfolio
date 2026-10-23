import NextCaseLink from "./NextCaseLink";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import CsImpact from "./CsImpact";
import Mockup from "./Mockup";
import CsStats from "./CsStats";
import RoutingShift from "./RoutingShift";
import ReframeStatement from "./ReframeStatement";
import TicketWall from "./TicketWall";
import TicketSplit from "./TicketSplit";
import VocabularyGap from "./VocabularyGap";
import SearchWeights from "./SearchWeights";
import CsSnapshot from "./CsSnapshot";

/*
 * Impact first, then the story in three beats, then one visual per panel.
 * Copy is capped at a line or two: the figures carry the argument, and a
 * hiring manager skimming panels should never meet a wall of text.
 */
export default function SupportFrictionCase() {
  return (
    <article>
      {/* HERO */}
      <header className="cs-hero">
        <div className="cs-hero-main">
          <span className="cs-eyebrow">
            Corporate Banking · 58,000+ organisations · 3 min read
          </span>
          <h1>
            The answers already existed.
            <br />
            People couldn&apos;t reach them.
          </h1>
          <p className="cs-lede">
            The brief was a bigger FAQ. <strong>~1,000 support tickets</strong> said the answers
            existed; people just couldn&apos;t reach them mid-task.
          </p>
        </div>

        <div className="cs-hero-side">
          <CsImpact
            items={[
              { value: "Brief rewritten", label: "Investment moved from more FAQ content to fixing the flow" },
              { value: "Live", label: "Answers now surface while the user describes the problem" },
              { value: "Fewer repeat tickets", label: "Support reported fewer of this kind, and more time on real issues" },
            ]}
          />

          <dl className="cs-meta">
            <div>
              <dt>Role</dt>
              <dd>Product Designer. Found the pattern, built the evidence, reframed the brief, and wrote the matching spec handed to engineering</dd>
            </div>
            <div>
              <dt>Worked with</dt>
              <dd>Product · Support · Frontend tech lead · One product designer</dd>
            </div>
          </dl>
        </div>
      </header>

      <hr className="cs-divider" />

      {/* THE STORY IN 30 SECONDS */}
      <section className="cs-reveal">
        <span className="cs-num">00 / In 30 seconds</span>
        <h2>The whole case, before the detail</h2>
        <CsSnapshot
          steps={[
            { k: "The brief", t: "Make the FAQ bigger." },
            { k: "What ~1,000 tickets showed", t: "4 in 5 didn\u2019t need a person. The answer existed, but users couldn\u2019t find it mid-task." },
            { k: "What I changed", t: "Answers appear while the user types. The ticket becomes the fallback." },
          ]}
        />
      </section>

      {/* 01 THE EVIDENCE */}
      <section className="cs-reveal">
        <span className="cs-num">01 / The evidence</span>
        <h2>I read the tickets before touching the FAQ</h2>
        <p>Two years of tickets, in users&apos; own words.</p>
        <TicketWall />
      </section>

      {/* 02 THE SPLIT */}
      <section className="cs-reveal">
        <span className="cs-num">02 / The split</span>
        <h2>Four out of five tickets did not need a person</h2>
        <TicketSplit />
      </section>

      {/* 03 THE REFRAME */}
      <section className="cs-reveal">
        <span className="cs-num">03 / The reframe</span>
        <h2>The answer wasn&apos;t missing. It was hard to reach</h2>
        <ReframeStatement />
      </section>

      {/* 04 THE SHIFT */}
      <section className="cs-reveal">
        <span className="cs-num">04 / The shift</span>
        <h2>The form should be the last option, not the first</h2>
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
        <p>Users rarely know the right search word, so matching uses theirs.</p>
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

      {/* 06 THE PUSHBACK + SPEC */}
      <section className="cs-reveal">
        <span className="cs-num">06 / The pushback</span>
        <h2>Too expensive to build? I changed its shape</h2>
        <p>A fixed keyword and synonym list, built and verified with <strong>AI</strong>.</p>
        <SearchWeights />
        <CsStats
          items={[
            { value: "89", label: "FAQ questions" },
            { value: "343", label: "keywords, each verified" },
            { value: "34", label: "synonym groups" },
          ]}
        />
      </section>

      {/* 07 OUTCOME */}
      <section className="cs-reveal">
        <span className="cs-num">07 / Outcome</span>
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
        <p>
          Support reported fewer repeat questions after launch. No instrumented baseline, so no
          percentage.
        </p>
        <p className="cs-takeaway">
          <span>Takeaway</span>
          I didn&apos;t have the authority to rewrite the brief. The tickets did.
        </p>
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
