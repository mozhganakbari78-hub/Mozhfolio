import NextCaseLink from "./NextCaseLink";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import CsArt from "./CsArt";
import CsStats from "./CsStats";
import Mockup from "./Mockup";
import { TokenBridge, GovernanceFlow, SystemAnatomy, MultiBrandTokens, ButtonProperties, ChipDrop } from "./CsInlineArt";

const components = [
  "Button", "Tag", "Input", "Cascader", "RadioButton", "Checkbox",
  "Switch / Toggle", "Switch Tabs", "Segment", "Dialog", "Bottom Sheet",
  "Alert", "Badge", "List Item", "Table", "Collapse", "Key-Value",
  "Progress Bar", "Slider", "Stepper", "Sidebar", "Header", "Breadcrumb",
  "Card", "Upload Box", "Tooltip", "Pagination", "Date Picker", "Bottom Nav",
];

const measures = [
  "Design clarification requests",
  "Repeated vs. genuinely new questions",
  "Component adoption",
  "Custom component creation",
  "Implementation deviations from the system",
  "Time from handoff to implementation clarification",
  "New component / variant requests",
  "Documented debt resolved over time",
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
          I inherited a live corporate banking platform: 90+ screens, an existing Ant Design
          foundation, and a frontend theme that had evolved independently. No dedicated design
          system engineer, no pause in delivery. I approached it as a system-design challenge until
          engineering showed me the real one:{" "}
          <em>
            the team kept stopping delivery to re-ask decisions that should already have been
            shared
          </em>
          . When my first token architecture made that worse, I replaced it with the frontend
          team&apos;s language instead of protecting a cleaner model.
        </p>

        <dl className="cs-meta">
          <div>
            <dt>Role</dt>
            <dd>
              Product Designer &amp; design system owner. Architecture, tokens, coverage,
              documentation, governance, maintenance
            </dd>
          </div>
          <div>
            <dt>Team</dt>
            <dd>2 product designers · Frontend tech lead · Engineering · Product</dd>
          </div>
          <div>
            <dt>Foundation</dt>
            <dd>Ant Design · inherited implementation</dd>
          </div>
          <div>
            <dt>Scope</dt>
            <dd>90+ live screens · 29 documented components · 3 brand configurations</dd>
          </div>
        </dl>
      </header>

      <hr className="cs-divider" />

      {/* 01 CONTEXT */}
      <section className="cs-reveal">
        <CsArt name="merge" />
        <span className="cs-num">01 / Context</span>
        <h2>The product could not stop while I built the system</h2>
        <p>
          The platform was already in production. More than 90 screens supported complex corporate
          banking workflows, including permission-heavy operations where predictable interaction
          patterns mattered. The frontend had been built on <strong>Ant Design</strong> before I
          arrived, and engineering had created a custom theme with its own naming conventions. None
          of that was realistically replaceable.
        </p>
        <p>
          No greenfield rebuild. No dedicated design system engineer. No separate system team. No
          pause in feature delivery. Whatever I built had to improve the product{" "}
          <em>while the product kept moving</em>.
        </p>
        <div className="cs-pull">
          The question was never &quot;what would the ideal design system look like?&quot; It was
          &quot;what system can this team actually adopt without slowing down the work it exists to
          support?&quot;
        </div>
      </section>

      {/* 02 THE REAL PROBLEM */}
      <section className="cs-reveal">
        <CsArt name="tickets" />
        <span className="cs-num">02 / The real problem</span>
        <h2>Visual inconsistency was only the visible symptom</h2>
        <p>
          The interface had the familiar signs of a product growing without a shared system: spacing
          varied between screens, similar components behaved differently, states were interpreted
          differently, color usage drifted, and teams repeatedly revisited decisions already made
          elsewhere.
        </p>
        <p>
          Design noticed the inconsistency. Product noticed it. But the most useful signal came from
          engineering: developers were stopping roughly <strong>8&ndash;9 times a day</strong> to ask
          which spacing value to use, which state was correct, whether something was an Ant Design
          default or a custom version, or why a component behaved differently on another screen.
        </p>
        <CsStats
          items={[
            { value: "90+", label: "live screens, already shipping" },
            { value: "8-9", label: "design questions per day, pre-system" },
            { value: "0", label: "dedicated design system engineers" },
          ]}
        />
      </section>

      {/* 02b THE REFRAME */}
      <section className="cs-reveal">
        <span className="cs-num">02 / The reframe</span>
        <h2>Every question meant a decision had failed to become reusable</h2>
        <div className="cs-pull">
          The design system&apos;s job was not to make every screen look the same. It was to stop
          the team from solving the same problem repeatedly.
        </div>
        <p>
          The cost was not primarily visual. That reframed the purpose of the system for me:
          consistency became an <strong>operational</strong> problem, and the metric I cared about
          became <strong>decision latency</strong>, not component count.
        </p>
      </section>

      {/* 03 THE CONSTRAINT */}
      <section className="cs-reveal">
        <CsArt name="fork" />
        <span className="cs-num">03 / The constraint</span>
        <h2>I wasn&apos;t designing a language from scratch</h2>
        <p>
          A clean design system exercise begins by defining a coherent foundation: tokens →
          primitives → components → patterns. But our product already contained another language:
          the one engineering used in working code, with names like{" "}
          <code>cardColor</code>, <code>cardSecondaryColor</code>, <code>textSecondary</code>.
        </p>
        <p>
          They were not the conventions I would have created from scratch. My first instinct was to
          normalize them, so I built a more structural token model describing what each value
          represented in the system rather than where engineering happened to use it. On paper it
          was cleaner. So I tested it with the people who actually had to use it.
        </p>
        <div className="cs-pull">It failed.</div>
      </section>

      {/* 04 THE DECISION */}
      <section className="cs-reveal">
        <span className="cs-num">04 / The decision that defined the system</span>
        <h2>My cleaner token model created another translation layer</h2>
        <p>
          My structure and engineering&apos;s existing theme often described the same value in
          different language. Every implementation now required translation, and developers
          immediately started asking which name mapped to the value in their code.
        </p>
        <TokenBridge />
        <p>
          I had accidentally recreated the exact problem the system was supposed to remove. The
          system was meant to reduce questions. My theoretically cleaner architecture was producing
          new ones.
        </p>
      </section>

      {/* 04b THE OPTIONS */}
      <section className="cs-reveal">
        <span className="cs-num">04 / The options</span>
        <h2>Migrate the code, or adopt its vocabulary</h2>
        <div className="cs-compare">
          <div className="col legacy">
            <span className="tag">Option A · Migrate engineering to my model</span>
            <ul>
              <li>Cleaner abstraction, easier to explain conceptually</li>
              <li>Refactoring working code during active delivery</li>
              <li>Migration risk and more coordination overhead</li>
            </ul>
          </div>
          <div className="col new">
            <span className="tag">Option B · Adopt the existing vocabulary</span>
            <ul>
              <li>Immediate shared language, no translation step</li>
              <li>No migration dependency</li>
              <li>More coupled to implementation vocabulary than a greenfield ideal</li>
            </ul>
          </div>
        </div>
        <p>
          <strong>I chose Option B.</strong> Not because the frontend naming was theoretically
          better. Because the system existed to serve the team, not the other way around. I
          documented the tighter coupling as an intentional trade-off rather than hiding it as an
          architectural accident.
        </p>
      </section>

      {/* 04c THE PRINCIPLE */}
      <section className="cs-reveal">
        <span className="cs-num">04 / The principle</span>
        <h2>Adoption is the only test that counts</h2>
        <div className="cs-pull">
          A naming model nobody can use without translation is not a better system.
        </div>
        <p>
          My first token model was easier for me to defend in a design system discussion. The model
          we shipped was easier for the team to use. In a live product, that difference is the whole
          argument.
        </p>
      </section>

      {/* 05 WHAT I BUILT */}
      <section className="cs-reveal">
        <CsArt name="rows" />
        <span className="cs-num">05 / What I built</span>
        <h2>A product-specific system on top of Ant Design</h2>
        <p>
          I didn&apos;t try to recreate what Ant Design already solved. I designed a product layer
          around it, defining where we could rely on defaults and where the product had enough
          specific requirements to justify customization.
        </p>
        <SystemAnatomy />
        <div className="cs-pull">Default first. Customize deliberately.</div>
      </section>

      {/* 06 COVERAGE */}
      <section className="cs-reveal">
        <span className="cs-num">06 / Component coverage</span>
        <h2>29 components, but coverage mattered more than the count</h2>
        <div className="cs-inv">
          <div className="ih">
            <span className="t">Documented across the live product</span>
            <span className="c">Behavior, not just a visual example</span>
          </div>
          <div className="isub">
            Each specification described variants, states, sizes, behaviors, and properties,
            so engineering could select the correct variant instead of asking design to reconstruct
            the decision.
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

      {/* 06b SPEC DEPTH */}
      <section className="cs-reveal">
        <span className="cs-num">06 / Specification depth</span>
        <h2>What a component definition actually had to carry</h2>
        <ButtonProperties />
        <div className="cs-pull">
          Documentation was part of the product, not an archive created after the component was
          finished.
        </div>
      </section>

      {/* 07 MULTI-BRAND */}
      <section className="cs-reveal">
        <span className="cs-num">07 / One system, multiple brands</span>
        <h2>The implementation compromise did not prevent theming at scale</h2>
        <p>
          The platform eventually needed the same structural component layer to support three
          product identities. The component contract stayed shared; what changed between brands were
          the values. Same component, same token contract, different values, different brand
          expression.
        </p>
        <MultiBrandTokens />
      </section>

      {/* 07b THE COST */}
      <section className="cs-reveal">
        <span className="cs-num">07 / The cost of the compromise</span>
        <h2>What adopting engineering&apos;s vocabulary did and didn&apos;t limit</h2>
        <p>
          Adopting engineering&apos;s naming did not prevent multi-brand theming. The trade-off was
          that our token vocabulary stayed closer to the existing component architecture than a
          fully abstract semantic model would have been.
        </p>
        <div className="cs-pull">
          The system optimized first for the teams maintaining it today, while keeping values
          configurable enough to support multiple brand pipelines.
        </div>
      </section>

      {/* 08 GOVERNANCE */}
      <section className="cs-reveal">
        <CsArt name="shield" />
        <span className="cs-num">08 / Governance</span>
        <h2>Without a system engineer, the contribution model became my job</h2>
        <p>
          Building components was half the problem. Without governance, the system would drift again
          as soon as the next feature required something unusual. So I established a lightweight
          decision process with the frontend tech lead.
        </p>
        <GovernanceFlow />
        <p>
          Once a decision is made, the next screen should <strong>inherit</strong> it rather than
          restart the conversation.
        </p>
      </section>

      {/* 08b GOVERNANCE IN PRACTICE */}
      <section className="cs-reveal">
        <span className="cs-num">08 / Governance in practice</span>
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
                Design wanted a Card behavior beyond what the existing Ant Design implementation
                supported.
              </div>
            </div>
            <div className="cs-dline chose">
              <div className="k">What we did</div>
              <div className="v">
                Instead of silently adding a new Figma variant, I reviewed it with the frontend tech
                lead. We compared product value, implementation effort, current sprint pressure, and
                whether the existing component was sufficient for now, then consciously moved
                it to the backlog.
              </div>
            </div>
            <div className="cs-dline">
              <div className="k">Why it mattered</div>
              <div className="v">
                The important result was not that the Card stayed unchanged. It was that{" "}
                <strong>both teams understood why</strong>. The system became a place where
                trade-offs were recorded rather than disappearing into implementation history.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 09 BEHAVIOR CHANGE */}
      <section className="cs-reveal">
        <span className="cs-num">09 / How the team&apos;s behavior changed</span>
        <h2>The best signal wasn&apos;t prettier screens. It was better questions.</h2>
        <p>
          As coverage increased, repeated design questions from frontend dropped from roughly
          8&ndash;9 per day to around 3&ndash;4. I want to be precise about that number: it was an{" "}
          <em>observed operational signal</em>, not an instrumented metric with a formal baseline.
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
          That is a fundamentally different conversation. The team moved from reconstructing
          existing decisions to discussing deliberate extensions of a shared system.
        </p>
      </section>

      {/* 10 INFRASTRUCTURE */}
      <section className="cs-reveal">
        <span className="cs-num">10 / Delivery infrastructure</span>
        <h2>The value became visible in later projects</h2>
        <p>
          Once the component foundation existed, subsequent product work could reuse tables, status
          patterns, upload states, empty and error states, review actions, confirmation patterns,
          and tokens. Designers didn&apos;t redraw solved interface problems. Engineering
          didn&apos;t renegotiate basic behavior. Feature work spent more of its time on the logic
          unique to the problem.
        </p>
        <p>
          The leverage showed up most clearly under pressure:{" "}
          <strong>
            when delivery became faster without design quality becoming more fragile.
          </strong>
        </p>
        <div className="cs-pull">
          Design systems are not primarily UI libraries. At their best they are organizational
          memory, encoded into reusable product decisions.
        </div>
      </section>

      {/* 11 MEASUREMENT */}
      <section className="cs-reveal">
        <span className="cs-num">11 / What I&apos;d measure differently</span>
        <h2>I had the signal. I didn&apos;t establish the baseline.</h2>
        <p>
          The biggest weakness in how I ran this work was measurement. I noticed the repeated
          engineering interruptions before the system and saw them decrease as coverage grew, but I
          never established formal tracking from day one. I can describe the improvement credibly as
          an observed pattern, not as a rigorously measured before-and-after result.
        </p>
        <div className="cs-metrics">
          {measures.map((m) => (
            <div className="cs-metric" key={m}>
              <span className="i" aria-hidden />
              <span className="t">{m}</span>
            </div>
          ))}
        </div>
        <p>
          That would let the team evaluate the design system as operational infrastructure, not only
          visually.
        </p>
      </section>

      {/* 12 REFLECTION */}
      <section className="cs-reveal">
        <span className="cs-num">12 / Reflection</span>
        <h2>Map the implementation before designing the abstraction</h2>
        <div className="cs-reflect">
          <h3>I built the wrong abstraction first</h3>
          <p>
            I went too deep into design-side token semantics before fully understanding the language
            already embedded in production code. The final decision was useful, but I reached it the
            long way. If I started again, I would map the existing theme and implementation
            vocabulary <em>before</em> proposing the token architecture.
          </p>
        </div>
        <div className="cs-divider" style={{ margin: "22px 0" }} />
        <div className="cs-reflect">
          <h3>The lesson wasn&apos;t &quot;semantic tokens are wrong&quot;</h3>
          <p>
            It was that architecture has to begin with the system you actually have.
          </p>
        </div>
      </section>

      {/* 12b REFLECTION cont. */}
      <section className="cs-reveal">
        <span className="cs-num">12 / Reflection</span>
        <h2>Governance should have been explicit earlier</h2>
        <div className="cs-reflect">
          <h3>I treated the process as informal coordination for too long</h3>
          <p>
            The collaboration with the frontend tech lead eventually became consistent: identify →
            check existing patterns → review → estimate → decide → document. But I ran it as an
            informal habit before I made it a stated model. If I ran the work again, I would
            formalize the contribution and decision process much earlier.
          </p>
        </div>
        <div className="cs-pull">
          The component library was only one part of the system. The way the team changed the
          library was infrastructure too.
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
        <p>Corporate banking · Design system · Live</p>
      </footer>
    </article>
  );
}
