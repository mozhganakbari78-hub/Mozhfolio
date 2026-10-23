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
            When I joined, there was no design system. I built one, got the naming wrong for the
            people who mattered most, and changed it.
          </p>
        </div>

        <div className="cs-hero-side">
          <CsGlance
            role="Product Designer, owned the system"
            team="2 designers, Frontend lead, Engineering"
            results={[
              { value: "1 token set", label: "light and dark mode from the same colours" },
              { value: "~8 → ~3", label: "repeat questions from developers, per day" },
              { value: "3 brands", label: "running on one set of components" },
            ]}
          />
        </div>
      </header>

      <hr className="cs-divider" />

      {/* 1 */}
      <section className="cs-reveal">
        <span className="cs-num">The starting point</span>
        <h2>No design system, just a library and some styles</h2>
        <p>
          The frontend used the Ant Design library. The Figma file had a set of colour styles and a
          handful of components, and nothing tying them together.
        </p>
      </section>

      {/* 2 */}
      <section className="cs-reveal">
        <span className="cs-num">The first problem</span>
        <h2>Every screen had to be designed twice</h2>
        <p>
          Light and dark mode were two separate sets of colour styles. So every design had to be
          made once for light and again for dark.
        </p>
      </section>

      {/* 3 */}
      <section className="cs-reveal">
        <span className="cs-num">Decision 1</span>
        <h2>Turn the colours into tokens</h2>
        <p>
          I turned the colours into tokens and built light and dark mode on top of them. One
          design, two modes, from the same set of tokens.
        </p>
      </section>

      {/* 4 */}
      <section className="cs-reveal">
        <span className="cs-num">Decision 2</span>
        <h2>Name the tokens by what they&apos;re for</h2>
        <p>
          I gave the tokens semantic names, with designers in mind: so my teammate and I knew
          exactly where each colour belonged, and our designs came out consistent in design review.
        </p>
      </section>

      {/* 5 */}
      <section className="cs-reveal">
        <span className="cs-num">The cost</span>
        <h2>The names made sense in Figma, not in the code</h2>
        <p>
          Our developers work from Figma, and they had already built themes in the code with their
          own names. Every handoff turned into a translation:
        </p>
        <div className="cs-signal">
          <div className="box">
            <div className="lab">Name in Figma</div>
            <div className="quote">Color-Base-Solid-bg</div>
          </div>
          <div className="arrow">&ne;</div>
          <div className="box">
            <div className="lab">Name in the code</div>
            <div className="quote">cardColor</div>
          </div>
        </div>
        <p className="cs-quote">&ldquo;Which colour is this in our code?&rdquo;</p>
        <p>Developers were asking design questions like that about 8 times a day.</p>
      </section>

      {/* 6 */}
      <section className="cs-reveal">
        <span className="cs-num">Decision 3</span>
        <h2>Rename the tokens to match the code</h2>
        <p>
          I went back and gave the tokens the same names as the code. For us, a smooth handoff to
          development was worth more than names that read nicely to designers.
        </p>
        <p className="cs-trade">
          <b>Trade-off:</b> less descriptive names in Figma, written down as a deliberate choice.
        </p>
      </section>

      {/* 7 */}
      <section className="cs-reveal">
        <span className="cs-num">Building on it</span>
        <h2>Ant Design first, custom only on purpose</h2>
        <p>
          We kept Ant Design&apos;s defaults wherever they worked, and documented our own components
          where the product needed more, each with every variant and state. With the frontend lead
          I set up one path for anything new, and design reviews with engineering before each
          release to catch mismatches early.
        </p>
      </section>

      <section className="cs-shot cs-reveal">
        <Mockup
          src="/projects/DesignSystem-Button.webp"
          alt="Button component documented with every variant, state and size"
          caption="The Button page: every variant, state and size, named the way the code names it"
        />
      </section>

      {/* 8 */}
      <section className="cs-reveal">
        <span className="cs-num">Scale</span>
        <h2>The same components run three brands</h2>
        <p>Only the brand values change; the components and their names stay the same.</p>
        <BrandVariants />
      </section>

      {/* 9 */}
      <section className="cs-reveal">
        <span className="cs-num">Now</span>
        <h2>Fewer questions, and better ones</h2>
        <p>
          Repeat questions dropped from about 8 a day to about 3, observed by the team rather than
          measured with a tool. The ones left changed too: &ldquo;does this new case need a system
          decision?&rdquo;
        </p>
        <p className="cs-takeaway">
          <span>What I learned</span>
          A design system has two audiences. Check how the code is built before naming anything.
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
