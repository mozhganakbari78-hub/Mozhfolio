import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function SupportFrictionCase() {
  return (
    <article>
      {/* HERO */}
      <header className="cs-hero">
        <span className="cs-eyebrow">
          Case Study · Enterprise Banking · Support &amp; Content Architecture
        </span>
        <h1>
          The answers already existed.
          <br />
          People just couldn&apos;t reach them in time.
        </h1>
        <p className="cs-lede">
          A corporate banking platform was routing routine questions into the support queue — not
          because users were careless, but because <em>the answer wasn&apos;t where the panic
          was</em>. This is how I reframed a &quot;fix the FAQ&quot; brief into a single support
          surface, and the constraints I had to design around to get there.
        </p>

        <dl className="cs-meta">
          <div>
            <dt>Role</dt>
            <dd>Product Designer — led feedback analysis &amp; content architecture</dd>
          </div>
          <div>
            <dt>Team</dt>
            <dd>2 designers</dd>
          </div>
          <div>
            <dt>Domain</dt>
            <dd>B2B corporate banking</dd>
          </div>
          <div>
            <dt>Status</dt>
            <dd>Built &amp; tested · pre-launch</dd>
          </div>
        </dl>
      </header>

      <hr className="cs-divider" />

      {/* 01 CONTEXT */}
      <section className="cs-reveal">
        <span className="cs-num">01 / Context</span>
        <h2>A platform where a wrong move costs real money</h2>
        <p>
          The product is a corporate banking platform used by business clients to move money,
          manage cards, pay bills, and handle cheques. The people using it aren&apos;t browsing.
          They&apos;re often mid-task, dealing with high transaction amounts, and working under the
          kind of pressure that makes a person act fast and ask questions later.
        </p>
        <p>
          When something was unclear, there was one obvious place to go: open a support ticket. So
          that&apos;s what people did — for almost everything. The service desk absorbed the volume,
          response times stretched, and the user still had to wait to get unblocked on something
          that, in many cases, had a known answer.
        </p>
      </section>

      {/* 02 BRIEF */}
      <section className="cs-reveal">
        <span className="cs-num">02 / The brief, and what was wrong with it</span>
        <h2>&quot;Improve the FAQ&quot; was the wrong problem to solve</h2>
        <p>
          The request that came to us was narrow: the FAQ page was underused and outdated, make it
          better. I could have redesigned the FAQ and called it done. But the FAQ being weak
          wasn&apos;t the actual problem — it was a symptom.
        </p>
        <p>
          The real issue was structural. The FAQ and the support ticket flow lived in two separate
          places. A user with a question had to <strong>guess</strong> whether their answer existed
          before deciding where to go. Under pressure, nobody guesses. They take the path they
          trust, which was always the ticket.
        </p>
        <div className="cs-pull">
          If the answer and the escalation live in different rooms, the user will always walk into
          the one that feels safe.
        </div>
      </section>

      {/* 03 EVIDENCE */}
      <section className="cs-reveal">
        <span className="cs-num">03 / Reading the actual tickets</span>
        <h2>I read ~1,000 support tickets by hand</h2>
        <p>
          Before proposing anything, I needed to know what people were actually asking. I went
          through roughly <strong>1,000 support ticket entries</strong> from the back-office admin
          panel, spanning about two years of activity, and read them manually.
        </p>
        <p>
          This was a deliberate choice, not a lack of tooling. The thing I was classifying — &quot;could
          this person have self-served, given the right answer at the right moment?&quot; — is a
          judgment call. It depends on tone, context, and what the user was actually trying to do,
          not just keywords. Automated clustering would have grouped by surface words and missed
          exactly the distinction the whole project hinged on.
        </p>
        <p>
          I clustered the findings in FigJam using affinity mapping. Two layers came out of it.
          First, the <strong>subject</strong>: accounts, cards, bill management, cheque management.
          Then a second, more important cut across all of them —{" "}
          <strong>
            which questions had answers that already existed somewhere, and which genuinely needed a
            human.
          </strong>
        </p>
      </section>

      {/* 03b EVIDENCE — chart */}
      <section className="cs-reveal">
        <span className="cs-num">03 / The shape of the data</span>
        <h2>What the tickets actually showed</h2>
        <div className="cs-chart">
          <div className="ct">Tickets by area — answerable vs. needs-support</div>
          <div className="cnote">
            Relative split within each subject area. Illustrative of the pattern found in the manual
            review; exact per-area percentages are part of the underlying analysis.
          </div>
          <div className="cs-legend">
            <span>
              <i className="cs-sw resolve" /> Answer already existed
            </span>
            <span>
              <i className="cs-sw signal" /> Genuinely needs support
            </span>
          </div>

          {[
            { name: "Bill management", split: "mostly self-serviceable", resolve: 74 },
            { name: "Cards", split: "split", resolve: 58 },
            { name: "Cheque management", split: "split", resolve: 52 },
            { name: "Accounts", split: "leans to support", resolve: 40 },
          ].map((b) => (
            <div className="cs-bar" key={b.name}>
              <div className="blabel">
                <span className="name">{b.name}</span>
                <span className="split">{b.split}</span>
              </div>
              <div className="cs-track">
                <div className="seg-resolve" style={{ width: `${b.resolve}%` }} />
                <div className="seg-signal" style={{ width: `${100 - b.resolve}%` }} />
              </div>
            </div>
          ))}

          <div className="ccap">
            The takeaway wasn&apos;t a single number. It was the <strong>shape</strong>: a meaningful
            share of ticket volume came from questions that already had answers — the user just had
            no way to reach them at the moment they were stuck.
          </div>
        </div>

        <p>
          The pattern that mattered most wasn&apos;t about careless users. Many of these questions
          came up precisely <em>because</em> the stakes were high — someone about to move a large
          amount, double-checking, hesitating, and reaching for the only reassurance channel they
          knew. The problem was never the intelligence of the question. It was the{" "}
          <strong>location and timing of the answer.</strong>
        </p>
      </section>

      {/* 04 DIRECTION */}
      <section className="cs-reveal">
        <span className="cs-num">04 / The direction</span>
        <h2>Merge the two surfaces into one</h2>
        <p>
          The core move — and the part I owned — was deciding that the FAQ and ticket submission
          shouldn&apos;t be two destinations. They should be <strong>one support surface</strong>,
          where finding an answer and asking for help are the same flow, not a fork the user has to
          navigate before they&apos;ve even started.
        </p>
        <p>
          We&apos;d discussed the problem space together as a team. But collapsing these two things
          into a single entry point, so the answer surfaces <em>before</em> the user commits to
          waiting on a ticket — that was the call I pushed for.
        </p>
      </section>

      {/* 05a DECISION 01 */}
      <section className="cs-reveal">
        <span className="cs-num">05 / Key decisions &amp; trade-offs</span>
        <h2>The two decisions that shaped the build</h2>

        <div className="cs-decision">
          <div className="dhead">
            <span className="dnum">DECISION 01</span>
            <div className="dtitle">Surface answers in real time, as the user types</div>
          </div>
          <div className="dbody">
            <div className="cs-dline">
              <div className="k">The insight</div>
              <div className="v">
                In a financial product, the questions that drive tickets cluster around high-stakes,
                time-sensitive moments — moving funds, hesitating over an amount. The answer is only
                useful if it appears <em>in that window</em>, not after a ticket round-trip.
              </div>
            </div>
            <div className="cs-dline chose">
              <div className="k">What we did</div>
              <div className="v">
                As a user begins describing their issue, relevant FAQ answers filter in live against
                what they&apos;re writing — tied to the behavior and context of someone under
                pressure, surfacing the most likely answer before they finish escalating.
              </div>
            </div>
            <div className="cs-dline">
              <div className="k">Ownership</div>
              <div className="v">
                This emerged from team discussion, but the specific direction — real-time filtering
                keyed to the user&apos;s in-the-moment behavior — was the product insight I
                contributed and argued for.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 05b DECISION 02 */}
      <section className="cs-reveal">
        <span className="cs-num">05 / Key decisions &amp; trade-offs</span>
        <h2>Working around the constraint I couldn&apos;t remove</h2>

        <div className="cs-decision">
          <div className="dhead">
            <span className="dnum">DECISION 02</span>
            <div className="dtitle">Work around a taxonomy I wasn&apos;t allowed to rebuild</div>
          </div>
          <div className="dbody">
            <div className="cs-dline">
              <div className="k">The constraint</div>
              <div className="v">
                The support database used a fixed category taxonomy. Existing ticket filters in the
                back office depended on it. Restructuring it cleanly would have broken those filters
                and the historical data tied to them.
              </div>
            </div>
            <div className="cs-dline">
              <div className="k">Option rejected</div>
              <div className="v">
                A clean re-taxonomy that matched the new merged surface — better on paper, but it
                would have meant a disruptive migration and broken everything the support team
                relied on day to day.
              </div>
            </div>
            <div className="cs-dline chose">
              <div className="k">What I proposed instead</div>
              <div className="v">
                A layered migration: keep the legacy taxonomy intact underneath, map the new surface
                onto it, and add a catch-all &quot;Other&quot; category to absorb anything that
                didn&apos;t fit cleanly — so nothing fell through and existing filters kept working.
                Stakeholders approved this approach.
              </div>
            </div>
            <div className="cs-dline">
              <div className="k">The trade-off</div>
              <div className="v">
                I accepted a less-than-ideal category structure in exchange for not destabilizing a
                live support operation. Documented as a known compromise, not pretended away.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 06 EXECUTION */}
      <section className="cs-reveal">
        <span className="cs-num">06 / Execution</span>
        <h2>From ~1,000 raw entries to a working surface</h2>
        <div className="cs-steps">
          {[
            {
              h: "Manual review & first-pass clustering",
              p: "Read the full ticket set from the admin panel and grouped by subject area — accounts, cards, bills, cheques.",
            },
            {
              h: "The second cut that mattered",
              p: "Re-clustered across subjects by whether the answer already existed, separating “needs a human” from “needs to be findable.”",
            },
            {
              h: "Reframed the brief with the team",
              p: "Took the evidence back and made the case for one merged surface instead of a polished-but-separate FAQ.",
            },
            {
              h: "Designed the unified flow",
              p: "Built the surface where real-time answers filter in as the user describes their issue, with ticket submission as the fallback rather than the default.",
            },
            {
              h: "Solved the taxonomy mapping",
              p: "Designed the layered structure and “Other” catch-all, took it to stakeholders, got sign-off without breaking the back office.",
            },
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

      {/* 07 OUTCOME */}
      <section className="cs-reveal">
        <span className="cs-num">07 / Outcome</span>
        <h2>Where this honestly stands</h2>
        <div className="cs-status">
          <span className="cs-eyebrow">Status — pre-launch</span>
          <h3>Built and validated in test, not yet live.</h3>
          <p>
            The unified support surface was designed, built, and tested in a staging environment. It
            has not shipped to production, so there are no live metrics on ticket deflection or
            resolution time yet — and I&apos;d rather say that plainly than attach numbers I
            can&apos;t stand behind.
          </p>
          <span className="pill">Goal: reduce support load · get users to answers faster</span>
        </div>
        <p>
          What I can speak to is the intent the design was built against: cut the share of tickets
          that never needed to be tickets, and shorten the path to an answer for the user. The
          analysis points to real room for both. The proof is the next phase.
        </p>
      </section>

      {/* 08a REFLECTION */}
      <section className="cs-reveal">
        <span className="cs-num">08 / Reflection</span>
        <h2>What I&apos;d carry forward</h2>
        <div className="cs-reflect">
          <h3>The brief is rarely the problem</h3>
          <p>
            &quot;Fix the FAQ&quot; was a request to improve a page. The actual problem was that
            answers and escalation were structurally separated. Most of the value here came from
            refusing to take the brief at face value.
          </p>
        </div>
        <div className="cs-divider" style={{ margin: "22px 0" }} />
        <div className="cs-reflect">
          <h3>Reading the data by hand was the right call</h3>
          <p>
            The central distinction — answerable vs. genuinely needs support — was a judgment, not a
            keyword match. Doing it manually is why the classification held up. I&apos;d make the
            same trade of time-for-accuracy again on a judgment-heavy dataset.
          </p>
        </div>
      </section>

      {/* 08b REFLECTION cont. */}
      <section className="cs-reveal">
        <span className="cs-num">08 / Reflection</span>
        <h2>The constraint that shaped the right answer</h2>
        <div className="cs-reflect">
          <h3>Live systems set the real edges of a design</h3>
          <p>
            The cleanest taxonomy on paper was the wrong answer because real filters and real
            history depended on the messy one. Designing the layered migration around that
            constraint, rather than against it, is the decision I&apos;m most sure was correct.
          </p>
        </div>
      </section>

      <Link href="/work/batch-transfer" className="cs-next">
        <span className="l">Next case →</span>
        <div className="t">
          Batch Transfer for Offline Corporate Clients <ArrowRight size={22} style={{ display: "inline", verticalAlign: "middle" }} />
        </div>
      </Link>

      <footer className="cs-foot">
        <span className="cs-eyebrow">End of case study</span>
        <p>Corporate banking · Support &amp; content architecture · Pre-launch</p>
      </footer>
    </article>
  );
}
