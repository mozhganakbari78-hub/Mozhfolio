import NextCaseLink from "./NextCaseLink";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import CsGlance from "./CsGlance";
import Mockup from "./Mockup";
import DsArchitecture from "./DsArchitecture";

export default function DesignSystemCase() {
  return (
    <article>
      {/* HERO */}
      <header className="cs-hero">
        <div className="cs-hero-main">
          <span className="cs-eyebrow">Case study · Design system</span>
          <h1>A design system engineers used</h1>
          <p className="cs-lede">
            When I joined, there was no design system. I built one, got the naming wrong for the
            people who mattered most, and fixed it. Then the system had to carry four products.
          </p>
        </div>

        <div className="cs-hero-side">
          <CsGlance
            role="Product Designer, built the system in Figma and co-governed it with the frontend lead"
            team="2 designers, Frontend lead, Engineering"
            results={[
              { value: "~8 → ~3", label: "repeat questions from developers, per day", icon: "ChatBubbleLeftRight" },
              { value: "4 products", label: "running on one set of components", icon: "Squares2X2" },
              { value: "1 design", label: "for light and dark mode, not two", icon: "Swatch" },
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
          handful of components, with nothing tying them together.
        </p>
        <p>
          Light and dark mode were two separate sets of colour styles, so every screen had to be
          designed twice: once for light, again for dark.
        </p>
      </section>

      {/* 2 */}
      <section className="cs-reveal">
        <span className="cs-num">Decision 1</span>
        <h2>Turn the colours into tokens</h2>
        <p>
          I turned the colours into tokens and built light and dark mode on top of them. One
          design, two modes, from the same set of tokens.
        </p>
        <p>
          The first version had two layers. 88 primitives held the raw palettes: one set, with no
          modes. On top of them, 28 role tokens gave each colour a
          job, with a light and a dark value each. Designers only used the role tokens.
        </p>
        <p className="cs-trade">
          <b>Trade-off:</b> 88 primitives for a single product. Designers never saw them, but they
          were a lot to maintain.
        </p>
      </section>

      <section className="cs-shot cs-reveal">
        <Mockup
          src="/projects/DesignSystem-v1-tokens.webp"
          alt="Version 1: one set of primitive palettes feeding role tokens, each with a light and a dark value, feeding components"
          caption="Version 1: one set of palettes; each role token picks one step for light mode and one for dark"
        />
      </section>

      {/* 3 */}
      <section className="cs-reveal">
        <span className="cs-num">Decision 2</span>
        <h2>Name the tokens by what they&apos;re for</h2>
        <p>
          I gave the tokens descriptive names, written for designers: my teammate and I knew
          exactly where each colour belonged, and our designs came out consistent in design review.
        </p>
      </section>

      {/* 4 */}
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

      {/* 5 */}
      <section className="cs-reveal">
        <span className="cs-num">Decision 3</span>
        <h2>Rename the tokens to match the code</h2>
        <p>
          I went back and gave the tokens the same names as the code: <code>background</code> and{" "}
          <code>surface</code> where the code named roles, <code>cardColor</code> and{" "}
          <code>sideBar</code> where it named components. For us, a smooth handoff to development
          was worth more than names that read nicely to designers. That set the number too: 28
          role tokens, one for each name the code already used.
        </p>
        <p className="cs-trade">
          <b>Trade-off:</b> a mixed naming scheme, part role and part component. Less pure, but one
          name across Figma and code, written down as a deliberate choice.
        </p>
      </section>

      {/* 6 */}
      <section className="cs-reveal">
        <span className="cs-num">Building on it</span>
        <h2>Ant Design first, custom only on purpose</h2>
        <p>
          We kept Ant Design&apos;s defaults wherever they worked, and documented our own components
          where the product needed more, each with every variant and state. With the frontend lead
          I set up one path for anything new, and design reviews with engineering before each
          release to catch mismatches before users see them.
        </p>
      </section>

      {/* 7 */}
      <section className="cs-reveal">
        <span className="cs-num">Scale</span>
        <h2>From one product to four</h2>
        <p>
          The system grew to carry four products, each with its own identity. Version 1 mixed two
          questions in the same tokens: which product is this, and which theme is on? So I split
          them into separate layers:
        </p>
        <ol className="cs-rules is-plain">
          <li><span><b>Source.</b> 270 raw colours, in one place. No modes.</span></li>
          <li><span><b>Identity.</b> One mode per product. Brand, primary, neutral and status colours (success, error, info, warning).</span></li>
          <li><span><b>Semantic.</b> Light and dark mode. Each role picks the right step from the product&apos;s identity.</span></li>
        </ol>
        <p>
          A product picks its identity; a theme picks the step. Each decision is made once, in its
          own layer, and the components never change.
        </p>
      </section>

      <section className="cs-shot cs-reveal">
        <Mockup
          src="/projects/DesignSystem-architecture.webp"
          alt="Version 2: source palettes feed an identity layer with one mode per product, which feeds a semantic layer with light and dark modes, which Ant Design and custom components use across four products"
          caption="Version 2: a product picks its identity, a theme picks the step, and four products share one set of components"
        >
          <DsArchitecture label="Version 2: source palettes feed an identity layer with one mode per product, which feeds a semantic layer with light and dark modes, which Ant Design and custom components use across four products" />
        </Mockup>
      </section>

      {/* 8 */}
      <section className="cs-reveal">
        <span className="cs-num">Decision 4</span>
        <h2>Brand isn&apos;t always the action colour</h2>
        <p>
          For most products, primary is the brand colour. One product&apos;s brand is a bright
          yellow: as the action colour, it dominated every screen. So that product&apos;s primary
          is black, and yellow became its accent. The components didn&apos;t change; only that
          product&apos;s identity values did.
        </p>
        <p className="cs-trade">
          <b>Trade-off:</b> brand and primary are separate tokens in every product, even where they
          hold the same value.
        </p>
      </section>

      <section className="cs-shot cs-reveal">
        <Mockup
          src="/projects/DesignSystem-Button-variants.webp"
          alt="The Button component: its properties (state, type, size, loading, icon button, title, left and right icon) and every type in every state and size"
          caption="The Button: every type, state and size, set through its properties"
        />
      </section>

      <section className="cs-shot cs-reveal">
        <Mockup
          src="/projects/DesignSystem-Button-products.webp"
          alt="The same Button switched by mode across four products, in light and dark"
          caption="The same Button across four products, in light and dark: only the mode changes"
        />
      </section>

      {/* 9 */}
      <section className="cs-reveal">
        <span className="cs-num">What changed from v1</span>
        <h2>The product got its own layer</h2>
        <p>
          Version 1 already put light and dark mode on the role tokens, but each role pointed
          straight at one product&apos;s palette. In version 2, the semantic tokens point to the
          identity layer instead. The same semantic tokens, and the same light and dark steps, now
          serve all four products.
        </p>
      </section>

      {/* 10 */}
      <section className="cs-reveal">
        <span className="cs-num">Now</span>
        <h2>Fewer questions, and better ones</h2>
        <p>
          Repeat questions from developers dropped from about 8 a day to about 3, observed by the
          team rather than measured with a tool. The questions that remain are different too:
          &ldquo;does this new case need a system decision?&rdquo;
        </p>
      </section>

      {/* 11 */}
      <section className="cs-reveal">
        <span className="cs-num">What I learned</span>
        <p className="cs-takeaway">
          A design system has two audiences. Check how the code is built before naming anything.
          And keep each decision in one layer: the product in identity, the theme in semantics.
        </p>
        <p className="cs-takeaway">
          <span>What I&apos;d do differently</span>
          I&apos;d split product and theme from the start. Version 1 pointed the role tokens
          straight at one product&apos;s palette, and that had to be rebuilt when the second product
          arrived.
        </p>
      </section>

      <NextCaseLink
        href="/work/reducing-support-friction/"
        caseStudyName="Answer first, ask later"
        className="cs-next"
      >
        <span className="l">Next case &rarr;</span>
        <div className="t">
          Answer first, ask later{" "}
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
