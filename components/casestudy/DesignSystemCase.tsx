import NextCaseLink from "./NextCaseLink";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import CsGlance from "./CsGlance";
import CsStats from "./CsStats";
import Mockup from "./Mockup";
import WhyTradeoff from "./WhyTradeoff";
import { TokenBridge, GovernanceFlow, SystemAnatomy } from "./CsInlineArt";
import BrandVariants from "./BrandVariants";

export default function DesignSystemCase() {
  return (
    <article>
      {/* HERO */}
      <header className="cs-hero">
        <div className="cs-hero-main">
          <span className="cs-eyebrow">Sadad · Corporate banking platform</span>
          <h1>A design system the engineers actually used</h1>
          <p className="cs-lede">
            Built on Ant Design for 90+ live screens and three brands, without pausing delivery.
          </p>
        </div>

        <div className="cs-hero-side">
          <CsGlance
            problem="Developers asked design the same questions about 8 times a day: which button, which spacing, which state."
            did="Built the system on the names already in the code (after scrapping my own first token model), documented 29 components, and set up a decision process with the frontend lead."
            impact="Repeat questions dropped to about 3 a day. Three brands now run on one component layer."
          />
          <dl className="cs-meta">
            <div>
              <dt>My role</dt>
              <dd>Product Designer: architecture, tokens, components, governance</dd>
            </div>
            <div>
              <dt>Team</dt>
              <dd>2 designers · Frontend lead · Engineering</dd>
            </div>
          </dl>
        </div>
      </header>

      <hr className="cs-divider" />

      {/* FINAL DESIGN */}
      <section className="cs-shot cs-reveal">
        <Mockup
          src="/projects/DesignSystem-Button.webp"
          alt="Button component documented with every variant, state and size"
          caption="Button component: every variant, state and size, specified for engineering"
        />
      </section>

      {/* PROBLEM */}
      <section className="cs-reveal">
        <span className="cs-num">Problem</span>
        <h2>The same questions, every day</h2>
        <p>
          Screens looked inconsistent, but the real cost was time. Each answer was given once and
          never reused, and there was no one dedicated to a design system.
        </p>
        <CsStats
          items={[
            { value: "90+", label: "live screens" },
            { value: "~8", label: "repeat questions a day" },
            { value: "0", label: "design system engineers" },
          ]}
        />
      </section>

      {/* DECISION 1 */}
      <section className="cs-reveal">
        <span className="cs-num">Decision 1</span>
        <h2>Use the names already in the code</h2>
        <p>
          My first token model was cleaner, but developers had to translate every name back into
          theirs. So I dropped it.
        </p>
        <WhyTradeoff
          why="In a live product, adoption matters more than a neat abstraction. Renaming working code mid-delivery added risk and no user value."
          tradeoff="A less elegant naming model, documented as a deliberate choice."
        />
        <TokenBridge />
      </section>

      {/* DECISION 2 */}
      <section className="cs-reveal">
        <span className="cs-num">Decision 2</span>
        <h2>Build on Ant Design, customise only when needed</h2>
        <WhyTradeoff
          why="With no system engineer, every custom component is something to maintain. Defaults first; 29 components specified where the product needed more."
          tradeoff="Some visual distinctiveness."
        />
        <SystemAnatomy />
      </section>

      {/* DECISION 3 */}
      <section className="cs-reveal">
        <span className="cs-num">Decision 3</span>
        <h2>One decision path for every new component</h2>
        <WhyTradeoff
          why="With the frontend lead, new needs are reviewed once and the next screen inherits the answer. Even a “no”, like a Card variant we moved to the backlog."
          tradeoff="One-off requests take longer."
        />
        <GovernanceFlow />
      </section>

      {/* SCALE */}
      <section className="cs-reveal">
        <span className="cs-num">Scale</span>
        <h2>Three brands, one component layer</h2>
        <p>Same components and token names; only the brand values change.</p>
        <BrandVariants />
      </section>

      {/* RESULT */}
      <section className="cs-reveal">
        <span className="cs-num">Result</span>
        <h2>Fewer questions, and better ones</h2>
        <div className="cs-signal">
          <div className="box">
            <div className="lab">Before · 8&ndash;9 a day</div>
            <div className="quote">&quot;Which version are we supposed to use?&quot;</div>
          </div>
          <div className="arrow">&rarr;</div>
          <div className="box">
            <div className="lab">After · 3&ndash;4 a day</div>
            <div className="quote">&quot;Does this new case need a system decision?&quot;</div>
          </div>
        </div>
        <p>
          Numbers observed by the team, not instrumented. The bulk-payment tool was built on this
          system under a fixed deadline.
        </p>
        <p className="cs-takeaway">
          <span>What I learned</span>
          Understand how it&apos;s built before designing the abstraction.
        </p>
      </section>

      <NextCaseLink
        href="/work/error-messages"
        caseStudyName="Error messages that tell users what to do next"
        className="cs-next"
      >
        <span className="l">Next case &rarr;</span>
        <div className="t">
          Error messages that tell users what to do next{" "}
          <ArrowRightIcon style={{ width: 22, height: 22, display: "inline", verticalAlign: "middle" }} />
        </div>
      </NextCaseLink>

      <footer className="cs-foot">
        <span className="cs-eyebrow">End of case study</span>
        <p>Corporate banking · Design system · Live</p>
      </footer>
    </article>
  );
}
