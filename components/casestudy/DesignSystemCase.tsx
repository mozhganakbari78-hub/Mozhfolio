import Link from "next/link";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import CsArt from "./CsArt";
import Mockup from "./Mockup";
import { TokenBridge, GovernanceFlow } from "./CsInlineArt";

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
          I built the semantically correct token names.
          <br />
          Then I threw them out.
        </h1>
        <p className="cs-lede">
          A design system layered onto a live, Ant Design-based corporate banking platform: 90+
          screens, two designers, no DS engineer, no pause in delivery. The hardest call wasn&apos;t
          what to build. It was <em>accepting the frontend team&apos;s naming over my own</em>,
          because the cleaner model was quietly making things worse.
        </p>

        <dl className="cs-meta">
          <div>
            <dt>Role</dt>
            <dd>Sole owner of the design system, also shipping product work</dd>
          </div>
          <div>
            <dt>Team</dt>
            <dd>2 designers, no dedicated DS engineer</dd>
          </div>
          <div>
            <dt>Foundation</dt>
            <dd>Ant Design (inherited)</dd>
          </div>
          <div>
            <dt>Scope</dt>
            <dd>29 components, live product</dd>
          </div>
        </dl>
      </header>

      <hr className="cs-divider" />

      {/* 01 CONTEXT */}
      <section className="cs-reveal">
        <CsArt name="merge" />
        <span className="cs-num">01 / Context</span>
        <h2>A system installed without stopping the engine</h2>
        <p>
          I joined an enterprise corporate banking platform already in production: 90+ screens,
          permission-heavy workflows, institutional users who depend on predictable interfaces. The
          frontend was built on <strong>Ant Design</strong> before I arrived. Business-approved, not
          up for debate. Engineering had also built a custom code theme, with their own token-like
          naming already in place.
        </p>
        <p>
          No greenfield, no DS engineer, no slack in the schedule. Whatever I built had to layer onto
          a live product without breaking what was shipping. I owned the system end to end:
          structure, tokens, component scope, documentation, maintenance, while also doing product
          work.
        </p>
      </section>

      {/* 02 PROBLEM */}
      <section className="cs-reveal">
        <CsArt name="tickets" />
        <span className="cs-num">02 / The problem</span>
        <h2>The real signal came from engineering, not design</h2>
        <p>
          The inconsistency wasn&apos;t one bad pattern. It was months of decisions made without a
          shared system: spacing drifted, states varied page to page, color usage shifted between
          screens. Designers saw it. The product owner saw it. But the signal that reframed the work
          came from the frontend team, who were stopping <strong>8 to 9 times a day</strong> to ask
          design questions.
        </p>
        <div className="cs-qcard">
          <div className="qh">A normal day, before the system</div>
          <div className="cs-qlist">
            <div className="q">Why does this component look different here?</div>
            <div className="q">Which spacing value should we use?</div>
            <div className="q">What&apos;s the correct state for this interaction?</div>
            <div className="q">Should this be Ant Design default, or custom?</div>
          </div>
        </div>
      </section>

      {/* 02b PROBLEM reframe */}
      <section className="cs-reveal">
        <span className="cs-num">02 / The problem</span>
        <h2>Inconsistency was a delivery-speed problem</h2>
        <p>
          That changed how I framed it. Inconsistency wasn&apos;t a design-quality problem, it was a{" "}
          <strong>delivery-speed problem</strong>. Every interruption meant the team didn&apos;t
          share an operating language. The system&apos;s job wasn&apos;t to make screens prettier. It
          was to turn repeated one-off questions into reusable decisions.
        </p>
        <div className="cs-pull">
          The system&apos;s success metric was never visual. It was how often engineering had to stop
          and ask.
        </div>
      </section>

      {/* 03 TOKEN COMPARISON */}
      <section className="cs-reveal">
        <CsArt name="read" />
        <span className="cs-num">03 / The decision that defined the system</span>
        <h2>Adoption beat semantic purity, and I have the failed test to prove it</h2>
        <p>
          My instinct was a clean, role-based, semantic token structure. In theory, the right model.
          So I built it, then tested it against the people who&apos;d actually use it. It backfired.
        </p>
        <div className="cs-tokens">
          <div className="tkhead">
            <div className="t">The same values, two languages</div>
            <div className="s">
              My structural token names vs. the frontend team&apos;s existing component-scoped names
              in code.
            </div>
          </div>
          <div className="cs-tkcols">
            <div className="cs-tkcol mine">
              <div className="label">My naming, structural</div>
              <div className="sub">Describes what the token is in the system</div>
              <div className="cs-tok">Color-Base-Solid-bg</div>
              <div className="cs-tok">Color-Base-Tonal-bg</div>
            </div>
            <div className="cs-tkcol theirs">
              <div className="label">Frontend naming, in their code</div>
              <div className="sub">Describes where the value is used</div>
              <div className="cs-tok">cardColor</div>
              <div className="cs-tok">cardSecondaryColor</div>
              <div className="cs-tok">textSecondary</div>
            </div>
          </div>
          <div className="tkverdict">
            When I tested my naming, everyone got confused. Developers kept asking{" "}
            <strong>&quot;which one in our code does this map to?&quot;</strong> The semantic layer
            was recreating the exact friction the system existed to remove, and there was no room to
            refactor their working theme mid-delivery.
          </div>
        </div>
      </section>

      {/* 03 inline art */}
      <TokenBridge />

      {/* 03b DECISION */}
      <section className="cs-reveal">
        <span className="cs-num">03 / The decision</span>
        <h2>Adopt the frontend team&apos;s naming as the shared language</h2>
        <div className="cs-decision">
          <div className="dhead">
            <span className="dnum">DECISION</span>
            <div className="dtitle">Build the system on their names, not mine</div>
          </div>
          <div className="dbody">
            <div className="cs-dline">
              <div className="k">Option A, protect my model</div>
              <div className="v">
                Ask frontend to realign their theme to my semantic tokens. Cleaner on paper, but it
                meant an already-stretched team refactoring working code during active delivery.
              </div>
            </div>
            <div className="cs-dline chose">
              <div className="k">Option B, adopt theirs (chosen)</div>
              <div className="v">
                Drop my naming and build on the frontend&apos;s existing names. Less portable, but a
                language both teams could use immediately with zero translation.
              </div>
            </div>
            <div className="cs-dline">
              <div className="k">The trade-off, named honestly</div>
              <div className="v">
                The structure isn&apos;t as portable as a fully semantic one. If the platform ever
                needs to support multiple brands, this will cost something. I documented it as{" "}
                <strong>intentional debt</strong>, not an accident.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 04 INVENTORY */}
      <section className="cs-reveal">
        <CsArt name="rows" />
        <span className="cs-num">04 / What I actually built</span>
        <h2>A product-specific layer on top of Ant Design</h2>
        <p>
          The system didn&apos;t try to replace Ant Design, it sat on top: shared tokens, agreed
          component behavior, documented states, and clear rules for what stayed default versus what
          earned product-specific customization.
        </p>
        <div className="cs-inv">
          <div className="ih">
            <span className="t">Component coverage</span>
            <span className="c">29 components</span>
          </div>
          <div className="isub">
            Each documented with variants and states in a standalone documentation set, not just
            dropped into Figma.
          </div>
          <div className="cs-chips">
            {components.map((c) => (
              <span key={c}>{c}</span>
            ))}
          </div>
        </div>
      </section>

      {/* SHOT — design system overview */}
      <section className="cs-shot cs-reveal">
        <Mockup
          src="/projects/design-system.png"
          alt="Design system components and tokens, layered on Ant Design"
          caption="Fig. 01: Component coverage shipped on top of the existing Ant Design foundation"
        />
      </section>

      {/* 05 GOVERNANCE */}
      <section className="cs-reveal">
        <CsArt name="shield" />
        <span className="cs-num">05 / Governance</span>
        <h2>With no DS engineer, governance was part of the design job</h2>
        <div className="cs-gov">
          <div className="cs-govstep"><span className="n">01</span><span className="gx">Identify the product need or the inconsistency.</span></div>
          <div className="cs-govstep"><span className="n">02</span><span className="gx">Check whether <b>Ant Design&apos;s default</b> already supports it.</span></div>
          <div className="cs-govstep"><span className="n">03</span><span className="gx">If customization is needed, review it with the <b>frontend tech lead</b>.</span></div>
          <div className="cs-govstep"><span className="n">04</span><span className="gx">Estimate effort and risk together.</span></div>
          <div className="cs-govstep"><span className="n">05</span><span className="gx">Decide: this sprint, or <b>backlog / tech debt</b>.</span></div>
          <div className="cs-govstep"><span className="n">06</span><span className="gx">Document the decision so future screens follow the same logic.</span></div>
          <div className="cs-callout">
            <div className="ct">Governance in practice</div>
            <p>
              <strong>The Card component.</strong> We wanted a custom version beyond the Ant default.
              Reviewed it with the tech lead, weighed the effort against the sprint, and consciously
              sent it to the backlog rather than force it in. Nothing in the component layer changed
              without that conversation.
            </p>
          </div>
        </div>
      </section>

      {/* 05 inline art */}
      <GovernanceFlow />

      {/* 06 OUTCOME */}
      <section className="cs-reveal">
        <span className="cs-num">06 / Outcome</span>
        <h2>The conversation changed</h2>
        <p>
          The daily design-related interruptions dropped from roughly 8-9 to 3-4, and kept falling as
          coverage grew. It wasn&apos;t instrumented or formally audited, it was an observed
          operational signal. But the <em>nature</em> of the questions changed, and that&apos;s the
          part that mattered.
        </p>
        <div className="cs-signal">
          <div className="box">
            <div className="lab">Before</div>
            <div className="quote">&quot;Why does this look different here?&quot;</div>
          </div>
          <div className="arrow">&rarr;</div>
          <div className="box">
            <div className="lab">After</div>
            <div className="quote">&quot;We need a new component or variant for this case.&quot;</div>
          </div>
        </div>
      </section>

      {/* 06b OUTCOME — honesty */}
      <section className="cs-reveal">
        <span className="cs-num">06 / Outcome</span>
        <h2>I had the signal. I didn&apos;t have the baseline.</h2>
        <p>
          The team stopped re-litigating visual inconsistencies and started discussing reusable
          extensions to the system. Frontend adopted it without pushback, and the product owner could
          see consistency improving across screens.
        </p>
        <div className="cs-status">
          <span className="cs-eyebrow">On measurement, honest</span>
          <h3>The shift was real. It lived in observation, not data.</h3>
          <p>
            The biggest thing I&apos;d fix: I never logged the question count from day one. The 8-9
            to 3-4 shift is real, but anecdotal. A simple running tally would have made the
            system&apos;s impact legible to stakeholders instead of remembered.
          </p>
        </div>
      </section>

      {/* 07a REFLECTION */}
      <section className="cs-reveal">
        <span className="cs-num">07 / Reflection</span>
        <h2>What I&apos;d carry forward</h2>
        <div className="cs-reflect">
          <h3>Map the code before designing the tokens</h3>
          <p>
            I went deep on design-side semantics before fully understanding the naming reality in the
            codebase. The final call was right, but I arrived by testing and failing first. Mapping
            the frontend theme up front would have saved a full round of confusion.
          </p>
        </div>
        <div className="cs-divider" style={{ margin: "22px 0" }} />
        <div className="cs-reflect">
          <h3>Being right doesn&apos;t matter if nobody adopts it</h3>
          <p>
            The semantic token model was correct by the book and wrong in practice. In a live
            product, the model people use without thinking beats the model that&apos;s defensible in a
            design review.
          </p>
        </div>
      </section>

      {/* 07b REFLECTION cont. */}
      <section className="cs-reveal">
        <span className="cs-num">07 / Reflection</span>
        <h2>Name the governance sooner</h2>
        <div className="cs-reflect">
          <h3>Treat the process as infrastructure</h3>
          <p>
            The process with the tech lead became reliable, but I treated it as informal coordination
            for too long. Naming it as operating infrastructure earlier would have helped the team
            trust it as a system, not just repeated check-ins.
          </p>
        </div>
      </section>

      <Link href="/work/reducing-support-friction" className="cs-next">
        <span className="l">Next case &rarr;</span>
        <div className="t">
          Reducing Support Friction at Scale{" "}
          <ArrowRightIcon style={{ width: 22, height: 22, display: "inline", verticalAlign: "middle" }} />
        </div>
      </Link>

      <footer className="cs-foot">
        <span className="cs-eyebrow">End of case study</span>
        <p>Enterprise banking · Design system on a live product · Ant Design foundation</p>
      </footer>
    </article>
  );
}
