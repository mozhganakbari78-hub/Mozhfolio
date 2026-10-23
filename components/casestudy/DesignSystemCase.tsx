import NextCaseLink from "./NextCaseLink";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import CsImpact from "./CsImpact";
import CsStats from "./CsStats";
import Mockup from "./Mockup";
import { TokenBridge, GovernanceFlow, SystemAnatomy } from "./CsInlineArt";
import BrandVariants from "./BrandVariants";

export default function DesignSystemCase() {
  return (
    <article>
      {/* HERO */}
      <header className="cs-hero">
        <div className="cs-hero-main">
          <span className="cs-eyebrow">Enterprise banking · Design system · 3 min read</span>
          <h1>A design system engineers actually adopted</h1>
          <p className="cs-lede">
            90+ live screens, no system engineer, no pause in delivery. Developers kept asking design
            the same questions. I threw out my own cleaner token model and built on the{" "}
            <strong>vocabulary already in the code</strong>.
          </p>
        </div>

        <div className="cs-hero-side">
          <CsImpact
            items={[
              { value: "~8 → ~3", label: "Repeat questions from developers per day, as coverage grew" },
              { value: "3 brands", label: "Themed from one component layer and one token contract" },
              { value: "Reused", label: "The foundation the batch-payment tool shipped on under a fixed deadline" },
            ]}
          />

          <dl className="cs-meta">
            <div>
              <dt>Role</dt>
              <dd>Product Designer. Owned architecture, tokens, coverage, governance, and adoption</dd>
            </div>
            <div>
              <dt>Team</dt>
              <dd>2 product designers · Frontend tech lead · Engineering · Product</dd>
            </div>
            <div>
              <dt>Scope</dt>
              <dd>90+ live screens · 29 documented components · Built on Ant Design</dd>
            </div>
          </dl>
        </div>
      </header>

      <hr className="cs-divider" />

      {/* THE RESULT */}
      <section className="cs-shot cs-reveal">
        <Mockup
          src="/projects/DesignSystem-Button.webp"
          alt="Button component documented with every variant, state and size"
          caption="The result: components specified by behaviour, every variant, state and size"
        />
      </section>

      {/* 01 PROBLEM */}
      <section className="cs-reveal">
        <span className="cs-num">01 / Problem</span>
        <h2>Inconsistency was the symptom. Repeat questions were the cost</h2>
        <CsStats
          items={[
            { value: "90+", label: "live screens, already shipping" },
            { value: "~8", label: "repeat questions to design, per day" },
            { value: "0", label: "dedicated design system engineers" },
          ]}
        />
      </section>

      {/* 02 INSIGHT */}
      <section className="cs-reveal">
        <span className="cs-num">02 / Insight</span>
        <h2>My cleaner token model was harder to adopt</h2>
        <p>Engineers had to translate every name I gave them back into the code&apos;s.</p>
        <TokenBridge />
      </section>

      {/* 03 DECISION 1 */}
      <section className="cs-reveal">
        <span className="cs-num">03 / Decision 1</span>
        <h2>Adopt the code&apos;s vocabulary instead of migrating it</h2>
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
        <SystemAnatomy />
      </section>

      {/* 04 DECISION 2 */}
      <section className="cs-reveal">
        <span className="cs-num">04 / Decision 2</span>
        <h2>Every customisation goes through one decision path</h2>
        <p>
          Set up with the frontend tech lead. Once decided, the next screen inherits it, even a
          &quot;no&quot;, like the Card variant we moved to the backlog.
        </p>
        <GovernanceFlow />
      </section>

      {/* 05 SCALE */}
      <section className="cs-reveal">
        <span className="cs-num">05 / Scale</span>
        <h2>The compromise still themed three brands</h2>
        <BrandVariants />
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
        <p>Observed, not instrumented.</p>
        <p className="cs-takeaway">
          <span>What I learned</span>
          Map the implementation before designing the abstraction.
        </p>
      </section>

      <NextCaseLink
        href="/work/error-messages"
        caseStudyName="Rewriting ~2,000 error messages so users know what to do next"
        className="cs-next"
      >
        <span className="l">Next case &rarr;</span>
        <div className="t">
          Rewriting ~2,000 error messages{" "}
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
