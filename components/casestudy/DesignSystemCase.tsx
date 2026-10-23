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
            90+ live screens and nobody dedicated to a design system. The fix wasn&apos;t more
            components. It was making each decision once, in a form engineers could reuse.
          </p>
        </div>

        <div className="cs-hero-side">
          <CsGlance
            role="Product Designer, owned the system"
            team="2 designers, Frontend lead, Engineering"
            results={[
              { value: "~8 → ~3", label: "repeat questions from developers, per day" },
              { value: "3 brands", label: "running on one set of components" },
              { value: "Reused", label: "the bulk-payment tool was built on it" },
            ]}
          />
        </div>
      </header>

      <hr className="cs-divider" />

      {/* 1 */}
      <section className="cs-reveal">
        <span className="cs-num">The starting point</span>
        <h2>A live product that grew one screen at a time</h2>
        <p>
          The platform had 90+ screens built on Ant Design, each with its own small variations.
          There was no design system engineer, and delivery couldn&apos;t stop while we fixed it.
        </p>
      </section>

      {/* 2 */}
      <section className="cs-reveal">
        <span className="cs-num">The question</span>
        <h2>Where was the real cost?</h2>
        <p>
          Screens looked inconsistent, but that was the symptom. The cost showed up in
          developers&apos; questions to design, about 8 a day: which spacing, which state, is this
          Ant&apos;s default or ours?
        </p>
        <p className="cs-quote">&ldquo;Which version are we supposed to use?&rdquo;</p>
        <p>Every answer was given once and never reused.</p>
      </section>

      {/* 3 */}
      <section className="cs-reveal">
        <span className="cs-num">My first attempt</span>
        <h2>My cleaner token names made it worse</h2>
        <p>
          I designed a tidier set of names for colours and spacing. But the code already had its
          own names, so developers had to translate every one of mine.
        </p>
        <div className="cs-signal">
          <div className="box">
            <div className="lab">My name</div>
            <div className="quote">Color-Base-Solid-bg</div>
          </div>
          <div className="arrow">&ne;</div>
          <div className="box">
            <div className="lab">The name in the code</div>
            <div className="quote">cardColor</div>
          </div>
        </div>
      </section>

      {/* 4 */}
      <section className="cs-reveal">
        <span className="cs-num">Decision 1</span>
        <h2>Use the names already in the code</h2>
        <p>
          Migrating the code to my names meant refactoring working screens in the middle of
          delivery, with no benefit to users. So I dropped my model and built on the code&apos;s
          vocabulary.
        </p>
        <p className="cs-trade">
          <b>Trade-off:</b> a less elegant naming model, written down as a deliberate choice.
        </p>
      </section>

      {/* 5 */}
      <section className="cs-reveal">
        <span className="cs-num">Decision 2</span>
        <h2>Ant Design first, customise only on purpose</h2>
        <p>
          With no system engineer, every custom component is something to maintain. So we kept Ant
          Design&apos;s defaults wherever they worked, and documented 29 components where the
          product needed more, each with every variant and state a developer might ask about.
        </p>
        <p className="cs-trade">
          <b>Trade-off:</b> some visual distinctiveness.
        </p>
      </section>

      <section className="cs-shot cs-reveal">
        <Mockup
          src="/projects/DesignSystem-Button.webp"
          alt="Button component documented with every variant, state and size"
          caption="The Button page: every variant, state and size, named the way the code names it"
        />
      </section>

      {/* 6 */}
      <section className="cs-reveal">
        <span className="cs-num">Decision 3</span>
        <h2>Decide once, and check before release</h2>
        <p>
          With the frontend lead, I set up one path for anything new: the decision is made once,
          written down, and the next screen reuses it. Even a &ldquo;no&rdquo;, like a card variant
          we moved to the backlog. I also started design reviews with engineering before each
          release, to catch mismatches before users did.
        </p>
        <p className="cs-trade">
          <b>Trade-off:</b> one-off requests take a little longer.
        </p>
      </section>

      {/* 7 */}
      <section className="cs-reveal">
        <span className="cs-num">Scale</span>
        <h2>The same components run three brands</h2>
        <p>Only the brand values change; the components and their names stay the same.</p>
        <BrandVariants />
      </section>

      {/* 8 */}
      <section className="cs-reveal">
        <span className="cs-num">Now</span>
        <h2>Fewer questions, and better ones</h2>
        <p>
          Repeat questions dropped from about 8 a day to about 3, observed by the team rather than
          measured with a tool. The ones left changed too: &ldquo;does this new case need a system
          decision?&rdquo; Later, the bulk-payment tool was built on this system.
        </p>
        <p className="cs-takeaway">
          <span>What I learned</span>
          Understand how it&apos;s built before designing the abstraction. And set the metrics
          before the system ships, not after.
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
