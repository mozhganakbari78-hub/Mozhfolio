import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function DesignSystemCase() {
  return (
    <article>
      {/* HERO */}
      <header className="cs-hero">
        <span className="cs-eyebrow">Case Study · Enterprise Banking · Design System</span>
        <h1>
          A token system nobody adopts is worth nothing.
          <br />
          So I optimized for adoption, not purity.
        </h1>
        <p className="cs-lede">
          On a live, Ant Design-based corporate banking platform, I chose the{" "}
          <em>messier name both teams would actually use</em> over the semantically pure one — and
          logged the trade-off as deliberate debt, not an accident. This is how a pragmatic system
          became real product infrastructure.
        </p>

        <dl className="cs-meta">
          <div>
            <dt>Role</dt>
            <dd>Design system owner, end to end</dd>
          </div>
          <div>
            <dt>Scale</dt>
            <dd>90+ screens, permission-heavy</dd>
          </div>
          <div>
            <dt>Stack</dt>
            <dd>Ant Design + custom code theme</dd>
          </div>
          <div>
            <dt>Team</dt>
            <dd>Two designers, no DS engineer</dd>
          </div>
        </dl>
      </header>

      <hr className="cs-divider" />

      {/* 01 CONTEXT */}
      <section className="cs-reveal">
        <span className="cs-num">01 / Context</span>
        <h2>I joined a product already in flight</h2>
        <p>
          An enterprise corporate banking platform — 90+ screens, permission-heavy workflows,
          institutional users who depend on predictable, low-friction interfaces. The frontend was
          built on Ant Design before I arrived: business-approved, not negotiable, with a custom code
          theme and its own token-like naming already in place.
        </p>
        <p>
          The design team was two people. I owned the design system while also doing product work —
          no DS engineer, no greenfield rebuild, no pause in delivery. From day one I treated it as
          infrastructure for a family of internal banking tools, not a cleanup layer for one product.
        </p>
      </section>

      {/* 02 PROBLEM */}
      <section className="cs-reveal">
        <span className="cs-num">02 / Problem</span>
        <h2>Inconsistency was slowing delivery</h2>
        <p>
          It wasn&apos;t one bad pattern — it was months of decisions made without a shared system.
          Spacing drifted, component states varied page to page, color usage shifted from screen to
          screen.
        </p>
        <p>
          The loudest signal came from engineering: developers stopped to ask design questions
          roughly <strong>8–9 times a day</strong>. &quot;Why does this look different here? Which
          spacing? Ant default or custom?&quot; That reframed the work for me — inconsistency
          wasn&apos;t a quality nitpick, it was a tax on product velocity.
        </p>
        <div className="cs-pull">
          The clearest measure of a design system isn&apos;t how clean it looks. It&apos;s how many
          questions stop reaching your desk.
        </div>
      </section>

      {/* 03 CONSTRAINTS */}
      <section className="cs-reveal">
        <span className="cs-num">03 / Constraints</span>
        <h2>The reality I had to design inside</h2>
        <div className="cs-card">
          <div className="cs-steps">
            {[
              "Ant Design was inherited — its API and theming shaped what was cheap vs. expensive to customize",
              "A frontend theme already existed in code; replacing it mid-flight meant refactor cost with no product gain",
              "The product was live — no resets, only incremental improvement",
              "Capacity was tight — every customization had to justify its cost against delivery",
              "The domain demanded reliability — predictable states and permission-aware interactions",
              "It had to scale to adjacent tools without becoming so abstract it slowed today's work",
            ].map((c) => (
              <div className="cs-step" key={c}>
                <div>
                  <p>{c}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 04 DECISION */}
      <section className="cs-reveal">
        <span className="cs-num">04 / The decision</span>
        <h2>Adoption over semantic purity</h2>
        <div className="cs-compare">
          <div className="col legacy">
            <span className="tag">Option A — protect the model</span>
            <ul>
              <li>Keep a clean, role-based, intent-driven token structure</li>
              <li>Ask frontend to realign their theme to match</li>
              <li>Theoretically correct on paper</li>
              <li>Forces an already-stretched team to refactor working code mid-delivery</li>
            </ul>
          </div>
          <div className="col new">
            <span className="tag">Option B — align to reality ✓</span>
            <ul>
              <li>Accept a less semantically pure naming model</li>
              <li>Match the existing frontend theme exactly</li>
              <li>Both teams share one language, zero translation</li>
              <li>Log the reduced portability as intentional, documented debt</li>
            </ul>
          </div>
        </div>
        <p>
          I chose Option B. A perfectly semantic system that frontend silently works around is not a
          system — it&apos;s a second source of truth. Matching the code reality meant the tokens
          were used, not bypassed. The cost — reduced portability to a different stack later — I wrote
          down as a known compromise rather than pretending it away.
        </p>
      </section>

      {/* 05 GOVERNANCE */}
      <section className="cs-reveal">
        <span className="cs-num">05 / Governance</span>
        <h2>Lightweight rules that survived sprint pressure</h2>
        <div className="cs-steps">
          {[
            { h: "Identify", p: "Name the product need or the inconsistency precisely." },
            { h: "Check defaults", p: "Could Ant Design's default behavior already support it before we customize?" },
            { h: "Review with the tech lead", p: "Anything beyond defaults got estimated for effort and risk together." },
            { h: "Decide & document", p: "Sprint, backlog, or technical debt — then write down the decision so future screens followed the same logic." },
          ].map((s) => (
            <div className="cs-step" key={s.h}>
              <div>
                <h3>{s.h}</h3>
                <p>{s.p}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 06 OUTCOME */}
      <section className="cs-reveal">
        <span className="cs-num">06 / Outcome</span>
        <h2>The conversation changed</h2>
        <div className="cs-status">
          <span className="cs-eyebrow">Status — adopted, in production</span>
          <h3>Daily design interruptions dropped from ~8–9 to 3–4.</h3>
          <p>
            The clearest signal was communication. It wasn&apos;t a formal audit, so I won&apos;t
            dress it up as a precise metric — but the nature of the questions changed, from debating
            inconsistencies to discussing reusable extensions. Frontend adopted the system without
            pushback, and the product owner saw visible consistency gains.
          </p>
          <span className="pill">Before: “Why does this look different here?” → After: “We need a variant for this case.”</span>
        </div>
        <p>
          The strongest proof came later: this foundation powered a separate, forced-timeline batch
          transfer redesign — assembled from existing components under deadline. That&apos;s the test
          of whether a design system is real infrastructure or just a coat of paint. This one held.
        </p>
      </section>

      {/* 07 REFLECTION */}
      <section className="cs-reveal">
        <span className="cs-num">07 / Reflection</span>
        <h2>What I&apos;d do differently</h2>
        <div className="cs-reflect">
          <h3>Map the theme first</h3>
          <p>
            I went deep on design-side semantics before fully understanding the naming reality in
            code. Reading the implemented theme first would have gotten me to the adoption-first call
            faster.
          </p>
        </div>
        <div className="cs-divider" style={{ margin: "22px 0" }} />
        <div className="cs-reflect">
          <h3>Track the baseline from day one</h3>
          <p>
            A simple log of DS-related questions from the start would have made the impact legible to
            stakeholders as a real number, not a remembered impression.
          </p>
        </div>
        <div className="cs-divider" style={{ margin: "22px 0" }} />
        <div className="cs-reflect">
          <h3>Name the governance early</h3>
          <p>
            Documenting the decision process sooner would have framed the work as operating
            infrastructure from the outset, rather than ad-hoc coordination that earned its structure
            later.
          </p>
        </div>
      </section>

      <Link href="/work/reducing-support-friction" className="cs-next">
        <span className="l">Next case →</span>
        <div className="t">
          Reducing Support Friction at Scale{" "}
          <ArrowRight size={22} style={{ display: "inline", verticalAlign: "middle" }} />
        </div>
      </Link>

      <footer className="cs-foot">
        <span className="cs-eyebrow">End of case study</span>
        <p>Corporate banking · Design system · Adopted in production</p>
      </footer>
    </article>
  );
}
