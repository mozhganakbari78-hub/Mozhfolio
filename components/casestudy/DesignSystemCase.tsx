import NextCaseLink from "./NextCaseLink";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import CsArt from "./CsArt";
import CsStats from "./CsStats";
import Mockup from "./Mockup";
import { TokenBridge, GovernanceFlow, SystemAnatomy, MultiBrandTokens, ChipDrop } from "./CsInlineArt";

const components = [
  "Button", "Tag", "Input", "Cascader", "RadioButton", "Checkbox",
  "Switch / Toggle", "Switch Tabs", "Segment", "Dialog", "Bottom Sheet",
  "Alert", "Badge", "List Item", "Table", "Collapse", "Key-Value",
  "Progress Bar", "Slider", "Stepper", "Sidebar", "Header", "Breadcrumb",
  "Card", "Upload Box", "Tooltip", "Pagination", "Date Picker", "Bottom Nav",
];

export default function DesignSystemCase() {
  return (
    <article>
      {/* HERO */}
      <header className="cs-hero">
        <span className="cs-eyebrow">Case Study · Enterprise Banking · Design System</span>
        <h1>
          The design system worked when the team
          <br />
          stopped asking what to use.
        </h1>
        <p className="cs-lede">
          90+ live screens, no system engineer, no pause in delivery. My cleaner token model made
          collaboration <strong>harder</strong>, so I threw it out and adopted the vocabulary
          engineering already used.
        </p>

        <dl className="cs-meta">
          <div>
            <dt>Role</dt>
            <dd>Product Designer &amp; system owner. Architecture, tokens, coverage, governance</dd>
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
      </header>

      <hr className="cs-divider" />

      {/* 01 THE REAL PROBLEM */}
      <section className="cs-reveal">
        <CsArt name="tickets" />
        <span className="cs-num">01 / The real problem</span>
        <h2>Visual inconsistency was only the symptom</h2>
        <p>
          Design and product both noticed the drift, but the useful signal came from engineering:
          developers were stopping roughly <strong>8&ndash;9 times a day</strong> to ask which
          spacing value to use, which state was correct, or whether a component was an Ant Design
          default or a custom version. Every one of those questions meant a decision had failed to
          become reusable.
        </p>
        <CsStats
          items={[
            { value: "90+", label: "live screens, already shipping" },
            { value: "8-9", label: "design questions per day, pre-system" },
            { value: "0", label: "dedicated design system engineers" },
          ]}
        />
        <div className="cs-pull">
          The system&apos;s job was not to make every screen look the same. It was to stop the team
          from solving the same problem twice.
        </div>
      </section>

      {/* 02 THE DECISION THAT DEFINED IT */}
      <section className="cs-reveal">
        <CsArt name="fork" />
        <span className="cs-num">02 / The decision that defined the system</span>
        <h2>My cleaner token model made things worse</h2>
        <p>
          The product already had a language: the one in working code, with names like{" "}
          <code>cardColor</code> and <code>textSecondary</code>. My instinct was to normalize it, so
          I built a more structural model describing what each value represented. On paper it was
          cleaner. In practice it meant every implementation needed translation, and developers
          started asking which of my names mapped to the value in their code.
        </p>
        <TokenBridge />
        <p>
          I had recreated the exact problem the system was supposed to remove.
        </p>
      </section>

      {/* 03 THE OPTIONS */}
      <section className="cs-reveal">
        <span className="cs-num">03 / The options</span>
        <h2>Migrate the code, or adopt its vocabulary</h2>
        <div className="cs-compare">
          <div className="col legacy">
            <span className="tag">Option A · Migrate engineering to my model</span>
            <ul>
              <li>Cleaner abstraction, easier to explain</li>
              <li>Refactoring working code during active delivery</li>
              <li>Migration risk and coordination overhead</li>
            </ul>
          </div>
          <div className="col new">
            <span className="tag">Option B · Adopt the existing vocabulary</span>
            <ul>
              <li>Immediate shared language, no translation step</li>
              <li>No migration dependency</li>
              <li>More coupled to implementation naming than a greenfield ideal</li>
            </ul>
          </div>
        </div>
        <p>
          <strong>I chose Option B</strong>, and documented the tighter coupling as an intentional
          trade-off rather than letting it look like an accident.
        </p>
        <div className="cs-pull">
          A naming model nobody can use without translation is not a better system. Adoption is the
          only test that counts.
        </div>
      </section>

      {/* 04 WHAT I BUILT */}
      <section className="cs-reveal">
        <CsArt name="rows" />
        <span className="cs-num">04 / What I built</span>
        <h2>A product layer on top of Ant Design</h2>
        <p>
          I didn&apos;t recreate what Ant Design already solved. I defined where we relied on
          defaults and where the product had enough specific need to justify customization.
        </p>
        <SystemAnatomy />
        <div className="cs-pull">Default first. Customize deliberately.</div>
      </section>

      {/* 05 COVERAGE */}
      <section className="cs-reveal">
        <span className="cs-num">05 / Coverage</span>
        <h2>29 components, specified by behavior rather than appearance</h2>
        <div className="cs-inv">
          <div className="ih">
            <span className="t">Documented across the live product</span>
            <span className="c">Variants, states, sizes, behaviors</span>
          </div>
          <div className="isub">
            Each spec carried enough for engineering to pick the right variant without asking design
            to reconstruct the decision.
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

      {/* 06 MULTI-BRAND */}
      <section className="cs-reveal">
        <span className="cs-num">06 / One system, three brands</span>
        <h2>The compromise did not block theming at scale</h2>
        <p>
          The platform eventually needed the same component layer to carry three product identities.
          The contract stayed shared; only the values changed. Adopting engineering&apos;s naming
          cost us abstraction purity, not capability.
        </p>
        <MultiBrandTokens />
      </section>

      {/* 07 GOVERNANCE */}
      <section className="cs-reveal">
        <CsArt name="shield" />
        <span className="cs-num">07 / Governance</span>
        <h2>Without a system engineer, the contribution model became my job</h2>
        <p>
          Building components was half the problem. Without governance the system would drift again
          the first time a feature needed something unusual, so I set up a lightweight decision
          process with the frontend tech lead: once a decision is made, the next screen{" "}
          <strong>inherits</strong> it instead of restarting the conversation.
        </p>
        <GovernanceFlow />
      </section>

      {/* 07b GOVERNANCE IN PRACTICE */}
      <section className="cs-reveal">
        <span className="cs-num">07 / Governance in practice</span>
        <h2>The Card component we deliberately did not build</h2>
        <div className="cs-decision">
          <div className="dhead">
            <span className="dnum">CASE IN POINT</span>
            <div className="dtitle">A useful customization that lost to sprint reality</div>
          </div>
          <div className="dbody">
            <div className="cs-dline">
              <div className="k">The request</div>
              <div className="v">
                Design wanted Card behavior beyond what the Ant Design implementation supported.
              </div>
            </div>
            <div className="cs-dline chose">
              <div className="k">What we did</div>
              <div className="v">
                Rather than quietly adding a Figma variant, I reviewed it with the frontend tech
                lead against product value, effort, and sprint pressure, and we consciously moved it
                to the backlog.
              </div>
            </div>
            <div className="cs-dline">
              <div className="k">Why it mattered</div>
              <div className="v">
                The result was not that the Card stayed unchanged. It was that{" "}
                <strong>both teams understood why</strong>, and the trade-off was recorded instead
                of disappearing into implementation history.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 08 OUTCOME */}
      <section className="cs-reveal">
        <span className="cs-num">08 / Outcome</span>
        <h2>The best signal wasn&apos;t prettier screens. It was better questions.</h2>
        <p>
          As coverage grew, repeated design questions from frontend dropped from roughly 8&ndash;9 a
          day to around 3&ndash;4. That was an <em>observed operational signal</em>, not an
          instrumented metric with a formal baseline, and I won&apos;t present it as more than that.
        </p>
        <div className="cs-signal">
          <div className="box">
            <div className="lab">Before</div>
            <div className="quote">
              &quot;Why does this look different here?&quot; / &quot;Which version are we supposed
              to use?&quot;
            </div>
          </div>
          <div className="arrow">&rarr;</div>
          <div className="box">
            <div className="lab">After</div>
            <div className="quote">
              &quot;We have a case the system doesn&apos;t support yet. Should this become a new
              variant?&quot;
            </div>
          </div>
        </div>
        <p>
          The team stopped reconstructing old decisions and started proposing deliberate extensions.
          Later projects reused the foundation directly, which is why the batch-payment tool could
          ship under a fixed deadline without trading away quality.
        </p>
      </section>

      {/* 09 REFLECTION */}
      <section className="cs-reveal">
        <span className="cs-num">09 / Reflection</span>
        <h2>Map the implementation before designing the abstraction</h2>
        <div className="cs-reflect">
          <h3>The mistake was sequencing, not taste</h3>
          <p>
            My token model wasn&apos;t wrong in isolation. It was wrong for a codebase that already
            had a working language. In a live product, a design system is a negotiation with what
            exists, and I should have mapped the implementation before designing the abstraction.
          </p>
        </div>
        <div className="cs-divider" style={{ margin: "22px 0" }} />
        <div className="cs-reflect">
          <h3>I had the signal, not the baseline</h3>
          <p>
            I noticed the interruptions before the system and watched them fall as coverage grew,
            but never set up formal tracking. I&apos;m carrying that forward in current work by
            defining adoption and clarification-rate metrics before a system ships rather than after
            informal signal has already told the story.
          </p>
        </div>
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
