import NextCaseLink from "./NextCaseLink";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import CsGlance from "./CsGlance";
import Mockup from "./Mockup";
import BrandVariants from "./BrandVariants";

export default function DesignSystemCase() {
  return (
    <article>
      {/* HERO */}
      <header className="cs-hero">
        <div className="cs-hero-main">
          <span className="cs-eyebrow">Case study · Design system</span>
          <h1>A design system the engineers actually used</h1>
          <p className="cs-lede">
            How I built a design system for 90+ live screens of a banking platform, without pausing
            delivery, after throwing out my own first version.
          </p>
        </div>

        <div className="cs-hero-side">
          <CsGlance
            role="Product Designer, owned the system"
            team="2 designers, Frontend lead, Engineering"
            results={[
              { value: "~8 → ~3", label: "repeat questions from developers, per day" },
              { value: "3 brands", label: "running on one set of components" },
              { value: "Reused", label: "a later product shipped on it under a fixed deadline" },
            ]}
          />
        </div>
      </header>

      <hr className="cs-divider" />

      {/* 1 */}
      <section className="cs-reveal">
        <span className="cs-num">The question</span>
        <h2>Reza needs a button, and finds three</h2>
        <p>
          Reza is a frontend developer building a new screen. The design file has three slightly
          different buttons, so he messages design and waits for an answer.
        </p>
        <p className="cs-quote">&ldquo;Which one is the right one?&rdquo;</p>
        <p className="cs-note">Reza is a composite, built from the questions we logged.</p>
      </section>

      {/* 2 */}
      <section className="cs-reveal">
        <span className="cs-num">Every day</span>
        <h2>The same questions, about 8 times a day</h2>
        <p>
          Each answer was given once and never reused, across 90+ live screens, with no one
          dedicated to a design system. Inconsistent screens were the symptom; lost time was the
          cost.
        </p>
      </section>

      {/* 3 */}
      <section className="cs-reveal">
        <span className="cs-num">My mistake</span>
        <h2>My first fix made Reza&apos;s day harder</h2>
        <p>
          I designed a cleaner set of names for colours and spacing. But Reza&apos;s code already
          had its own names, so he had to translate every one of mine.
        </p>
        <div className="cs-signal">
          <div className="box">
            <div className="lab">My name</div>
            <div className="quote">Color-Base-Solid-bg</div>
          </div>
          <div className="arrow">&ne;</div>
          <div className="box">
            <div className="lab">The name in his code</div>
            <div className="quote">cardColor</div>
          </div>
        </div>
      </section>

      {/* 4 */}
      <section className="cs-reveal">
        <span className="cs-num">The change</span>
        <h2>So I used the names already in his code</h2>
        <p>
          I dropped my model and built the system on top of Ant Design, the library the code
          already used, with the code&apos;s own names. I documented 29 components, each with every
          state Reza might need.
        </p>
        <p className="cs-trade">
          <b>Trade-off:</b> a less elegant naming model, written down as a deliberate choice.
        </p>
      </section>

      <section className="cs-shot cs-reveal">
        <Mockup
          src="/projects/DesignSystem-Button.webp"
          alt="Button component documented with every variant, state and size"
          caption="Now Reza opens the Button page and finds every variant and state, named like his code"
        />
      </section>

      {/* 5 */}
      <section className="cs-reveal">
        <span className="cs-num">New needs</span>
        <h2>When Reza needs something new, it&apos;s decided once</h2>
        <p>
          With the frontend lead, I set up one path for new components. The decision is written
          down, and the next screen reuses it. Even a &ldquo;no&rdquo;, like a card variant we moved
          to the backlog.
        </p>
        <p className="cs-trade">
          <b>Trade-off:</b> one-off requests take a little longer.
        </p>
      </section>

      {/* 6 */}
      <section className="cs-reveal">
        <span className="cs-num">Scale</span>
        <h2>The same components run three brands</h2>
        <p>Only the brand values change; the components and their names stay the same.</p>
        <BrandVariants />
      </section>

      {/* 7 */}
      <section className="cs-reveal">
        <span className="cs-num">Result</span>
        <h2>Reza builds without asking</h2>
        <p>
          Repeat questions dropped from about 8 a day to about 3, and the ones left were better:
          &ldquo;does this new case need a system decision?&rdquo; These were observed by the team,
          not measured with a tool.
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
