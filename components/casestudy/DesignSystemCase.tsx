import NextCaseLink from "./NextCaseLink";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import CsSnapshot from "./CsSnapshot";
import CsImpact from "./CsImpact";
import CsStats from "./CsStats";
import Mockup from "./Mockup";
import { TokenBridge, GovernanceFlow, SystemAnatomy, ChipDrop } from "./CsInlineArt";
import BrandVariants from "./BrandVariants";

const components = [
  "Button",
  "Table",
  "Form inputs",
  "Feedback states",
  "Navigation",
  "+ 24 more",
];

export default function DesignSystemCase() {
  return (
    <article>
      {/* HERO */}
      <header className="cs-hero">
        <div className="cs-hero-main">
          <span className="cs-eyebrow">Enterprise Banking · Design System · 3 min read</span>
          <h1>
            The design system worked when decisions
            <br />
            stopped living in people&apos;s heads.
          </h1>
          <p className="cs-lede">
            90+ live screens, no system engineer, no pause in delivery. I dropped my own cleaner model
            for the <strong>vocabulary already in the code</strong>, and adoption followed.
          </p>
        </div>

        <div className="cs-hero-side">
          <CsImpact
            items={[
              { value: "8–9 → 3–4", label: "Clarification questions a day, observed as coverage grew" },
              { value: "Better questions", label: "From \u201cwhich version do we use?\u201d to \u201cdoes this justify a system decision?\u201d" },
              { value: "Reused", label: "The foundation the batch tool shipped on under a fixed deadline" },
            ]}
          />

          <dl className="cs-meta">
            <div>
              <dt>Role</dt>
              <dd>Product Designer. Owned design system architecture, tokens, coverage, governance, and adoption</dd>
            </div>
            <div>
              <dt>Team</dt>
              <dd>2 product designers · Frontend tech lead · Engineering · Product</dd>
            </div>
            <div>
              <dt>Scope</dt>
              <dd>90+ live screens · 29 documented components · 3 brand configurations</dd>
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
            { k: "The problem", t: "Developers asked design the same questions ~8 times a day." },
            { k: "My mistake", t: "My cleaner token model forced engineers to translate every name." },
            { k: "What I changed", t: "Adopted the code\u2019s own vocabulary, and set up governance so decisions stick." },
          ]}
        />
      </section>

      {/* 01 THE REAL PROBLEM */}
      <section className="cs-reveal">
        <span className="cs-num">01 / The real problem</span>
        <h2>Inconsistency was the symptom. Repeated questions were the cost</h2>
        <CsStats
          items={[
            { value: "90+", label: "live screens, already shipping" },
            { value: "~8", label: "repeat questions to design, per day" },
            { value: "0", label: "dedicated design system engineers" },
          ]}
        />
      </section>

      {/* 02 THE DECISION THAT DEFINED IT */}
      <section className="cs-reveal">
        <span className="cs-num">02 / The decision</span>
        <h2>My cleaner model was harder to adopt, so I threw it out</h2>
        <TokenBridge />
        <div className="cs-compare">
          <div className="col legacy">
            <span className="tag">Option A · Migrate code to my model</span>
            <ul>
              <li>Cleaner abstraction</li>
              <li>Refactoring live code mid-delivery</li>
            </ul>
          </div>
          <div className="col new">
            <span className="tag">Option B · Adopt the code&apos;s vocabulary ✓</span>
            <ul>
              <li>Shared language from day one</li>
              <li>No migration</li>
            </ul>
          </div>
        </div>
      </section>

      {/* 03 WHAT I BUILT */}
      <section className="cs-reveal">
        <span className="cs-num">03 / What I built</span>
        <h2>A product layer on top of Ant Design</h2>
        <SystemAnatomy />
        <div className="cs-inv">
          <div className="ih">
            <span className="t">29 components, specified by behavior</span>
            <span className="c">Variants, states, sizes</span>
          </div>
          <ChipDrop items={components} />
        </div>
      </section>

      {/* SHOT — button component */}
      <section className="cs-shot cs-reveal">
        <Mockup
          src="/projects/DesignSystem-Button.webp"
          alt="Button component variants from the design system"
          caption="Fig. 01: Button component, layered on the Ant Design foundation"
        />
      </section>

      {/* SHOT — the system in the product */}
      <section className="cs-shot cs-reveal">
        <Mockup
          src="/projects/ipad-mockup.webp"
          alt="Input component set: variants, states and sizes documented for engineering"
          caption="Fig. 02: The Input set, specified the same way: every variant, state and size"
        />
      </section>

      {/* 04 MULTI-BRAND */}
      <section className="cs-reveal">
        <span className="cs-num">04 / One system, three brands</span>
        <h2>The compromise still scaled to three brands</h2>
        <BrandVariants />
      </section>

      {/* 05 GOVERNANCE */}
      <section className="cs-reveal">
        <span className="cs-num">05 / Governance</span>
        <h2>Every customization became a conscious decision</h2>
        <p>
          Set up with the frontend tech lead. Once decided, the next screen inherits it, even a
          &quot;no&quot;, like the Card variant we moved to the backlog.
        </p>
        <GovernanceFlow />
      </section>

      {/* 06 OUTCOME */}
      <section className="cs-reveal">
        <span className="cs-num">06 / Outcome</span>
        <h2>Fewer questions, and better ones</h2>
        <div className="cs-signal">
          <div className="box">
            <div className="lab">Before · 8&ndash;9 a day</div>
            <div className="quote">&quot;Which version are we supposed to use?&quot;</div>
          </div>
          <div className="arrow">&rarr;</div>
          <div className="box">
            <div className="lab">After · 3&ndash;4 a day</div>
            <div className="quote">&quot;Does this new case justify a system decision?&quot;</div>
          </div>
        </div>
        <p>
          Observed, not instrumented. The batch-payment tool later shipped on this foundation under
          a fixed deadline.
        </p>
        <p className="cs-takeaway">
          <span>Takeaway</span>
          Map the implementation before designing the abstraction.
        </p>
      </section>

      <NextCaseLink
        href="/work/error-messages"
        caseStudyName="Users knew something had failed. They didn't know what to do next."
        className="cs-next"
      >
        <span className="l">Next case &rarr;</span>
        <div className="t">
          Users knew something had failed{" "}
          <ArrowRightIcon style={{ width: 22, height: 22, display: "inline", verticalAlign: "middle" }} />
        </div>
      </NextCaseLink>

      <footer className="cs-foot">
        <span className="cs-eyebrow">End of case study</span>
        <p>Corporate banking · Design system &amp; governance · Live</p>
      </footer>
    </article>
  );
}
