import NextCaseLink from "./NextCaseLink";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import CsImpact from "./CsImpact";
import CsStats from "./CsStats";
import Mockup from "./Mockup";
import Scenario from "./Scenario";
import SeniorCalls from "./SeniorCalls";
import { TokenBridge, GovernanceFlow } from "./CsInlineArt";
import BrandVariants from "./BrandVariants";

export default function DesignSystemCase() {
  return (
    <article>
      {/* HERO */}
      <header className="cs-hero">
        <div className="cs-hero-main">
          <span className="cs-eyebrow">Enterprise banking platform · Design system</span>
          <h1>A design system engineers actually adopted</h1>
          <p className="cs-lede">
            90+ live screens, no design system engineer, and no pause in delivery. Developers kept
            stopping to ask design the same questions. I built a system that answered them, after
            throwing out <strong>my own first version</strong>.
          </p>
        </div>

        <div className="cs-hero-side">
          <CsImpact
            items={[
              { value: "~8 → ~3", label: "Questions to design per day from developers, as coverage grew" },
              { value: "3 brands", label: "Themed from one component layer and one token contract" },
              { value: "Reused", label: "The foundation the bulk-payment tool shipped on, under a fixed deadline" },
            ]}
          />
          <dl className="cs-meta">
            <div>
              <dt>My role</dt>
              <dd>Product Designer. Owned architecture, tokens, coverage, governance and adoption</dd>
            </div>
            <div>
              <dt>Team</dt>
              <dd>2 product designers · Frontend tech lead · Engineering · Product</dd>
            </div>
          </dl>
        </div>
      </header>

      <hr className="cs-divider" />

      {/* 01 SCENARIO */}
      <section className="cs-reveal">
        <span className="cs-num">01 / The scenario</span>
        <h2>A developer builds a new transfer screen</h2>
        <Scenario
          kind="before"
          who="Frontend developer, mid-sprint, with a design file open"
          steps={[
            { label: "Needs a button and its disabled state" },
            { label: "Finds three slightly different versions", thought: "Is this Ant Design's default or ours?", tone: "pain" },
            { label: "Messages the designer and waits", tone: "pain" },
            { label: "Picks one and moves on" },
            { label: "Next week, another developer asks the same", tone: "pain" },
          ]}
          end="Every answer was given once and never reused."
          note="Composite scenario, built from the questions we logged."
        />
      </section>

      {/* 02 WHY IT MATTERED */}
      <section className="cs-reveal">
        <span className="cs-num">02 / Why it mattered</span>
        <h2>Inconsistency was the symptom. Lost delivery time was the cost</h2>
        <CsStats
          items={[
            { value: "90+", label: "live screens, already shipping" },
            { value: "~8", label: "repeat questions to design, per day" },
            { value: "0", label: "dedicated design system engineers" },
          ]}
        />
      </section>

      {/* 03 THE REAL PROBLEM */}
      <section className="cs-reveal">
        <span className="cs-num">03 / The real problem</span>
        <h2>My first, cleaner token model made it worse</h2>
        <p>
          I named tokens by role, which is tidy on paper. But developers had to translate every
          name back into the code&apos;s own, and I&apos;d recreated the problem I was solving.
        </p>
        <TokenBridge />
      </section>

      {/* 04 MY CALLS */}
      <section className="cs-reveal">
        <span className="cs-num">04 / The calls I made</span>
        <h2>Three decisions, and what each one cost</h2>
        <SeniorCalls
          calls={[
            {
              title: "Throw out my own model and adopt the code’s vocabulary",
              tension: "Migrate engineering to my names  vs  meet them where they are",
              why: "In a live product, adoption beats elegance. Refactoring working code mid-delivery was risk with no user value.",
              gaveUp: "Abstraction purity, documented as a deliberate trade-off.",
            },
            {
              title: "Build on Ant Design, customise only on purpose",
              tension: "A bespoke system  vs  one person's capacity",
              why: "With no system engineer, every custom component was a maintenance promise. Default first; 29 components specified by behaviour where the product needed more.",
              gaveUp: "Some visual distinctiveness.",
            },
            {
              title: "Make every customisation a recorded decision",
              tension: "Designer freedom  vs  a system that stays a system",
              why: "With the frontend tech lead, new needs go through one path and the next screen inherits the answer. Even a “no”, like the Card variant we moved to the backlog.",
              gaveUp: "Speed for one-off requests.",
            },
          ]}
        />
      </section>

      {/* 05 SCENARIO, REDESIGNED */}
      <section className="cs-reveal">
        <span className="cs-num">05 / The same moment, redesigned</span>
        <h2>The developer finds the answer without asking</h2>
        <Scenario
          kind="after"
          who="Same developer, same screen"
          steps={[
            { label: "Opens the Button spec", tone: "good" },
            { label: "Token names match the code", thought: "cardColor. Same as ours.", tone: "good" },
            { label: "Every variant and state is documented", tone: "good" },
            { label: "A genuinely new need goes to the decision path" },
          ]}
          end="Built without a message to design, and the next screen inherits it."
        />
        <GovernanceFlow />
      </section>

      {/* SHOT — button */}
      <section className="cs-shot cs-reveal">
        <Mockup
          src="/projects/DesignSystem-Button.webp"
          alt="Button component documented with every variant, state and size"
          caption="Button: every variant, state and size, specified for engineering"
        />
      </section>

      {/* 06 SCALE */}
      <section className="cs-reveal">
        <span className="cs-num">06 / It scaled</span>
        <h2>The compromise still themed three brands</h2>
        <BrandVariants />
      </section>

      {/* 07 OUTCOME */}
      <section className="cs-reveal">
        <span className="cs-num">07 / Outcome</span>
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
        <p>Observed by the team, not instrumented. The bulk-payment tool was built on this foundation.</p>
        <p className="cs-takeaway">
          <span>What I&apos;d do differently</span>
          Map the implementation before designing the abstraction, and set adoption metrics before
          the system ships.
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
        <p>Corporate banking · Design system &amp; governance · Live</p>
      </footer>
    </article>
  );
}
