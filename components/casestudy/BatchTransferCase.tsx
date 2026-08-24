import NextCaseLink from "./NextCaseLink";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import Mockup from "./Mockup";
import CsArt from "./CsArt";
import FailureUnit from "./FailureUnit";
import { MatchThreshold } from "./CsInlineArt";

const dsPatterns = [
  "Data tables",
  "Status chips",
  "Upload states",
  "Empty states",
  "Error states",
  "Confirmation patterns",
  "Review actions",
  "Design tokens",
];

const batchStates = [
  "Valid transactions",
  "Failed transactions",
  "Pending states",
  "Verified recipients",
  "Weak name matches",
  "Missing verification",
  "System-level errors",
  "Items requiring follow-up",
];

const metrics = [
  "Batch failure rate",
  "Number of full-batch retries",
  "Failed rows per batch",
  "Time to resolve failed transactions",
  "Verification usage rate",
  "Mismatch detection rate",
  "Wrong-recipient incidents",
  "Support requests from branches",
  "Processing time with vs. without verification",
];

export default function BatchTransferCase() {
  return (
    <article>
      {/* HERO */}
      <header className="cs-hero">
        <span className="cs-eyebrow">Case Study · B2B Banking · Offline Batch Payments</span>
        <h1>
          A bad row should fail alone.
          <br />
          A wrong transfer should be caught before the money moves.
        </h1>
        <p className="cs-lede">
          Some corporate clients could not, or would not, move payroll through the
          online platform. They brought payment files to a branch, where employees processed them
          through a legacy internal tool. The workflow had two very different failure modes:{" "}
          <em>
            one invalid row could reset an entire batch, and a valid-but-incorrect account
            identifier could send money to the wrong recipient with no meaningful way to catch it
          </em>
          . Working under a fixed deadline, I redesigned the workflow around two principles:
          isolate operational failure, and surface financial risk before money moves.
        </p>

        <dl className="cs-meta">
          <div>
            <dt>Role</dt>
            <dd>
              Product Designer. Co-led field research, then owned the flow, interaction
              model, verification logic, UI, and handoff
            </dd>
          </div>
          <div>
            <dt>Team</dt>
            <dd>2 product designers · Product · Engineering · Banking stakeholders</dd>
          </div>
          <div>
            <dt>Domain</dt>
            <dd>Corporate banking · Internal branch tool</dd>
          </div>
          <div>
            <dt>Constraint</dt>
            <dd>Fixed, non-negotiable launch deadline</dd>
          </div>
        </dl>
      </header>

      <hr className="cs-divider" />

      {/* 01 CONTEXT */}
      <section className="cs-reveal">
        <span className="cs-num">01 / Context</span>
        <h2>The clients who still needed an offline path</h2>
        <p>
          Not every corporate client could adopt online banking for bulk payments. Security
          policies, internal approval requirements, and institutional processes meant some
          organizations kept an offline workflow: the client prepared a payment file and delivered
          it to a branch, where a bank employee uploaded and processed it through an internal
          system.
        </p>
        <p>
          These were not small or low-risk operations. A single batch could contain a large number
          of individual transfers, often payroll or other business-critical payments moving
          real money to real accounts.
        </p>
        <div className="cs-pull">
          The existing tool technically supported the process. What it did not support well was
          failure.
        </div>
      </section>

      {/* 02 RESEARCH */}
      <section className="cs-reveal">
        <CsArt name="read" />
        <span className="cs-num">02 / Understanding the work</span>
        <h2>We went to branches instead of designing from the requirements doc</h2>
        <p>
          I worked with another product designer to research the workflow in context. We visited
          branches and spoke directly with the employees responsible for processing these files.
          That mattered because much of the real workflow existed outside the interface: employees
          worked under time pressure, batches could contain many transactions, errors became visible
          late, resolving a failed run required manual investigation, and branch employees were
          accountable for financial actions they could not always verify confidently.
        </p>
        <p>
          Watching the work made it clear the redesign could not simply make the legacy tool easier
          to use. We had to change <strong>when the system exposed risk</strong> and{" "}
          <strong>how much damage a single failure could cause</strong>.
        </p>
        <p>
          After the research phase, I took ownership of the batch-payment product design: workflow,
          wireframes, stakeholder prototype, final UI, validation states, and the
          recipient-verification interaction.
        </p>
      </section>

      {/* 03 PROBLEM FRAMING */}
      <section className="cs-reveal">
        <span className="cs-num">03 / Problem framing</span>
        <h2>Errors were cheap to create and expensive to discover</h2>
        <div className="cs-compare">
          <div className="col legacy">
            <span className="tag">Failure 01 · Batch-level</span>
            <ul>
              <li>Transactions were treated as one all-or-nothing unit</li>
              <li>One unprocessable row propagated to the entire batch</li>
              <li>The employee had to investigate, correct, and restart the run</li>
              <li>Scale made it worse: one local problem, global operational failure</li>
            </ul>
          </div>
          <div className="col legacy">
            <span className="tag">Failure 02 · Invisible recipient risk</span>
            <ul>
              <li>The file carried account/IBAN data, no human-readable confirmation</li>
              <li>A mistyped identifier does not always fail</li>
              <li>If it resolves to a valid account, the transfer succeeds, to the wrong person</li>
            </ul>
          </div>
        </div>
      </section>

      {/* 03b THE REFRAME */}
      <section className="cs-reveal">
        <CsArt name="fork" />
        <span className="cs-num">03 / The reframe</span>
        <h2>The costliest error was the one that looked valid</h2>
        <div className="cs-pull">
          The most expensive failure was not the one that stopped the workflow. It was the one that
          looked correct until after the money moved.
        </div>
        <p>
          That changed how I thought about the problem. The redesign needed to make{" "}
          <strong>recoverable problems local</strong> and{" "}
          <strong>irreversible risks visible</strong>.
        </p>
      </section>

      {/* 04 PRINCIPLES */}
      <section className="cs-reveal">
        <span className="cs-num">04 / Product principles</span>
        <h2>Two rules shaped the redesign</h2>
        <div className="cs-steps">
          {[
            {
              h: "Failure should be isolated",
              p: "A problem in one transaction should not unnecessarily invalidate unrelated transactions.",
            },
            {
              h: "Risk should surface before commitment",
              p: "The employee approving the batch should have enough information to detect a suspicious recipient before the transfer executes.",
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
        <p>
          These became the basis for the interaction model and for the conversations with product
          and engineering.
        </p>
      </section>

      {/* 05 DECISION 01 */}
      <section className="cs-reveal">
        <CsArt name="rows" />
        <span className="cs-num">05 / Key decision 01</span>
        <h2>Make each transaction fail independently</h2>
        <p>
          The legacy architecture treated the batch as one processing unit. That made the interface
          simple. It also made recovery disproportionately expensive, and ignored the fact that most
          transactions in the file were completely valid.
        </p>
        <FailureUnit />
      </section>

      {/* 05b WHY IT MATTERED */}
      <section className="cs-reveal">
        <span className="cs-num">05 / Why it mattered</span>
        <h2>It changed the unit of failure in the product</h2>
        <p>
          The redesign did more than improve error messaging. Each transaction is now processed and
          represented independently: if one row cannot complete, that row receives its own failure
          state while the valid transactions continue through the workflow.
        </p>
        <p>
          That reduced the operational blast radius of an individual problem, and gave branch
          employees a far more accurate picture of what had actually happened.
        </p>
      </section>

      {/* SHOT — batch upload */}
      <section className="cs-shot cs-reveal">
        <Mockup
          src="/projects/batch-upload.webp"
          alt="Batch upload screen, file submission and row preview"
          caption="Fig. 01: Upload and per-row preview before anything is committed"
        />
      </section>

      {/* 06 DECISION 02 */}
      <section className="cs-reveal">
        <span className="cs-num">06 / Key decision 02</span>
        <h2>Make the recipient visible before approval</h2>

        <div className="cs-decision">
          <div className="dhead">
            <span className="dnum">DECISION 02</span>
            <div className="dtitle">Compare the account holder against the name in the file</div>
          </div>
          <div className="dbody">
            <div className="cs-dline">
              <div className="k">The gap</div>
              <div className="v">
                Knowing an account number was syntactically valid wasn&apos;t enough. The employee
                needed to answer a more useful question:{" "}
                <em>does this account belong to the person the file says I am paying?</em>
              </div>
            </div>
            <div className="cs-dline chose">
              <div className="k">The verification model</div>
              <div className="v">
                We introduced an account-holder name into the payment-file workflow. When
                verification was requested, the system retrieved the registered account-holder
                information for each destination, compared it with the name in the file, and
                surfaced the <strong>degree of match</strong> directly in the review experience.
              </div>
            </div>
            <div className="cs-dline chose">
              <div className="k">The threshold</div>
              <div className="v">
                Matches below <strong>96%</strong> were visually flagged for attention. It did not
                auto-reject. It created a signal: if the file identified one recipient while
                the registered account strongly suggested another, the approver could investigate
                before confirming.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 06b inline art */}
      <MatchThreshold />

      {/* SHOT — validation */}
      <section className="cs-shot cs-reveal">
        <Mockup
          src="/projects/batch-validation.webp"
          alt="Row-level validation and recipient match review"
          caption="Fig. 02: Row-level state and match confidence, before approval"
        />
      </section>

      {/* 06c PRINCIPLE */}
      <section className="cs-reveal">
        <span className="cs-num">06 / The design principle</span>
        <h2>Surface the evidence, don&apos;t automate the judgment</h2>
        <p>
          I deliberately avoided turning an imperfect matching mechanism into an automated financial
          decision. The system surfaced evidence. The authorized human still made the call.
        </p>
        <div className="cs-pull">
          The goal was not to automate judgment. It was to make the information required for
          judgment visible in time.
        </div>
      </section>

      {/* 07 AUTHORITY */}
      <section className="cs-reveal">
        <CsArt name="shield" />
        <span className="cs-num">07 / Authority model</span>
        <h2>Register first. Approve second.</h2>
        <div className="cs-phase">
          <div className="phtag">Step 01</div>
          <div>
            <h3>Registration</h3>
            <p>
              A branch employee uploads and prepares the request. No transfer has executed:
              row-level validation is visible, verification results can be reviewed, and problems
              can still be investigated.
            </p>
          </div>
        </div>
        <div className="cs-phase">
          <div className="phtag">Step 02</div>
          <div>
            <h3>Approval</h3>
            <p>
              A senior branch approver reviews the batch and confirms execution. Only after that
              approval does money move.
            </p>
          </div>
        </div>
        <p>
          This separation mattered because the verification layer only creates value if its
          information is visible <em>before</em> the irreversible action. The review state became a
          deliberate risk checkpoint rather than a ceremonial confirmation screen.
        </p>
      </section>

      {/* 08 TRADE-OFF */}
      <section className="cs-reveal">
        <span className="cs-num">08 / A deliberate trade-off</span>
        <h2>Verification stayed optional per batch</h2>
        <p>
          Recipient verification added value. It also added another lookup step, and therefore
          processing time. Not every batch carried the same level of uncertainty, and forcing
          verification into every run would have slowed routine operations. So the branch could
          choose to run it when the additional confidence was worth the additional time.
        </p>
        <p>
          Because an approver could technically continue without verification, the interface had to
          make the verified state and any mismatches <strong>highly legible</strong>, rather than
          relying on the feature&apos;s existence alone.
        </p>
        <div className="cs-pull">
          Not a perfect safety mechanism. A conscious balance between operational speed and risk
          visibility.
        </div>
      </section>

      {/* 09 SEQUENCING */}
      <section className="cs-reveal">
        <span className="cs-num">09 / Shipping under a fixed deadline</span>
        <h2>I protected the safe core by sequencing the solution</h2>
        <p>
          The launch date was fixed. Shipping every part at once would have increased the chance of
          turning a safety improvement into an unstable release. So I treated scope sequencing as a
          design decision.
        </p>
        <div className="cs-phase">
          <div className="phtag">Phase 01</div>
          <div>
            <h3>Fix the failure model</h3>
            <p>
              Transactions could succeed or fail independently. This removed the all-or-nothing
              batch behavior and gave the branch a safer operational foundation. Recipient
              verification was intentionally kept out of the critical path.
            </p>
          </div>
        </div>
        <div className="cs-phase">
          <div className="phtag">Phase 02</div>
          <div>
            <h3>Add the trust layer</h3>
            <p>
              Once the core workflow was in real use: recipient verification, account-holder
              comparison, match percentage, mismatch states, and the 96% attention threshold,
              built on top of a workflow already functioning in branches.
            </p>
          </div>
        </div>
        <div className="cs-pull">
          The deadline did not decide what was important. It decided what had to be sequenced.
        </div>
      </section>

      {/* 10 SYSTEMS THINKING */}
      <section className="cs-reveal">
        <CsArt name="merge" />
        <span className="cs-num">10 / Systems thinking</span>
        <h2>The deadline was survivable because the design system already existed</h2>
        <p>
          One reason the team could focus on workflow logic instead of rushing visual production was
          work I had done before this project. I had previously built a design system for another
          banking product with reuse beyond that single surface in mind. That foundation already
          covered the patterns this internal tool needed.
        </p>
        <div className="cs-inv">
          <div className="ih">
            <span className="t">Reused, not redesigned</span>
            <span className="c">Already solved before the deadline</span>
          </div>
          <div className="cs-chips">
            {dsPatterns.map((p) => (
              <span key={p}>{p}</span>
            ))}
          </div>
        </div>
      </section>

      {/* 10b LEVERAGE */}
      <section className="cs-reveal">
        <span className="cs-num">10 / Decision leverage</span>
        <h2>What the saved time was spent on</h2>
        <p>
          Because basic interface mechanics didn&apos;t need redesigning under deadline pressure, I
          could spend the design time on the decisions unique to this workflow: what constitutes a
          row-level failure, how states coexist inside a batch, when recipient information becomes
          visible, how verification uncertainty is communicated, and what the approver needs before
          commitment.
        </p>
        <div className="cs-pull">
          The value of the design system here was not visual consistency. It was decision leverage
          . Previously solved problems stayed solved, leaving capacity for the risky ones.
        </div>
      </section>

      {/* 11 WORKFLOW */}
      <section className="cs-reveal">
        <span className="cs-num">11 / Designing the workflow</span>
        <h2>A batch is not one state</h2>
        <p>
          The new experience had to represent many conditions simultaneously. Within the same batch,
          an employee might need to understand all of these at once:
        </p>
        <div className="cs-inv">
          <div className="ih">
            <span className="t">States coexisting in a single batch</span>
            <span className="c">8 conditions</span>
          </div>
          <div className="cs-chips">
            {batchStates.map((s) => (
              <span key={s}>{s}</span>
            ))}
          </div>
        </div>
        <p>
          So the interface could not collapse the batch into a single success/error message. I
          designed the table and review model around row-level visibility while preserving a clear
          summary of the overall operation.
        </p>
      </section>

      {/* 11b HIERARCHY */}
      <section className="cs-reveal">
        <span className="cs-num">11 / Information hierarchy</span>
        <h2>Three questions the review has to answer immediately</h2>
        <div className="cs-metrics">
          {[
            "What can proceed?",
            "What requires attention?",
            "What am I about to approve?",
          ].map((q) => (
            <div className="cs-metric" key={q}>
              <span className="i" aria-hidden />
              <span className="t">{q}</span>
            </div>
          ))}
        </div>
        <p>
          That hierarchy mattered more than decorative UI, particularly for branch employees
          processing large files under time pressure.
        </p>
      </section>

      {/* 12 CROSS-FUNCTIONAL */}
      <section className="cs-reveal">
        <span className="cs-num">12 / Cross-functional execution</span>
        <h2>The interaction model depended on more than design</h2>
        <p>
          The core decisions affected processing logic, banking operations, and authority,
          not just screens. I worked across product and engineering to keep the interaction model
          connected to the behavior of the underlying system.
        </p>
        <p>
          For row-level processing, the design had to accurately represent what could succeed
          independently and what required later resolution. For recipient verification, we had to
          distinguish between a <strong>technical validation</strong> and a{" "}
          <strong>confidence signal that still required human judgment</strong>. That distinction
          shaped both the backend behavior and the UI language.
        </p>
        <div className="cs-pull">
          The objective was to avoid a dangerous mismatch where the interface implied certainty the
          system could not actually provide.
        </div>
      </section>

      {/* 13 OUTCOME */}
      <section className="cs-reveal">
        <span className="cs-num">13 / Rollout &amp; outcome</span>
        <h2>The tool launched through a controlled rollout</h2>
        <div className="cs-status">
          <span className="cs-eyebrow">Shipped · limited rollout</span>
          <h3>Structural change, without a percentage attached.</h3>
          <p>
            The redesigned workflow reached real branches. The bank&apos;s operational metrics are
            internal and not mine to publish, so rather than quote figures I can&apos;t share, I
            will describe what the shipped behavior changed.
          </p>
        </div>
        <div className="cs-compare">
          <div className="col legacy">
            <span className="tag">Before</span>
            <ul>
              <li>A single failed transaction could invalidate the batch workflow</li>
              <li>Employees reviewed destination identifiers with no meaningful recipient check</li>
            </ul>
          </div>
          <div className="col new">
            <span className="tag">After</span>
            <ul>
              <li>Failures are handled at transaction level; valid rows continue</li>
              <li>Recipient mismatches surface before final approval when verification is used</li>
            </ul>
          </div>
        </div>
      </section>

      {/* 13b METRICS */}
      <section className="cs-reveal">
        <span className="cs-num">13 / What I&apos;d instrument</span>
        <h2>How I would evaluate both sides of the redesign</h2>
        <div className="cs-metrics">
          {metrics.map((m) => (
            <div className="cs-metric" key={m}>
              <span className="i" aria-hidden />
              <span className="t">{m}</span>
            </div>
          ))}
        </div>
        <p>
          Together these cover the two things the redesign was actually for:{" "}
          <strong>operational efficiency</strong> and <strong>financial risk reduction</strong>.
        </p>
      </section>

      {/* 14 REFLECTION */}
      <section className="cs-reveal">
        <span className="cs-num">14 / Reflection</span>
        <h2>The most dangerous error may be the one that succeeds</h2>
        <div className="cs-reflect">
          <h3>The obvious pain was not the real priority</h3>
          <p>
            The failed batch interrupted work and frustrated employees. But the research exposed a
            more serious category: a transaction that completes successfully, to the wrong
            recipient. That changed the priority of the design.
          </p>
        </div>
        <div className="cs-divider" style={{ margin: "22px 0" }} />
        <div className="cs-reflect">
          <h3>Recovery is not the only responsibility</h3>
          <p>
            Product quality in a financial workflow is not only about helping users recover from
            errors. Sometimes the more important job is helping them recognize a risky action while
            it is still reversible.
          </p>
        </div>
      </section>

      {/* 14b REFLECTION cont. */}
      <section className="cs-reveal">
        <span className="cs-num">14 / Reflection</span>
        <h2>Sequencing is part of product design</h2>
        <div className="cs-reflect">
          <h3>Neither extreme was the right answer</h3>
          <p>
            Under the deadline, the easy responses were to ship everything quickly, or to argue
            nothing could launch until the complete vision was ready. We shipped the structural
            improvement first and layered the more complex verification capability afterward.
          </p>
        </div>
        <div className="cs-pull">
          Scope is not only about what belongs in a product. It is also about what belongs now.
        </div>
      </section>

      {/* 14c WHAT I'D DO DIFFERENTLY */}
      <section className="cs-reveal">
        <span className="cs-num">14 / What I&apos;d do differently</span>
        <h2>I&apos;d protect one pre-launch validation session</h2>
        <p>
          The controlled rollout let us observe the product in real conditions, but some issues were
          therefore discovered in production. Running it again, I would protect at least one
          structured pre-launch session focused on the highest-risk scenarios:
        </p>
        <div className="cs-inv">
          <div className="ih">
            <span className="t">Scenarios I&apos;d insist on testing</span>
            <span className="c">Part of the safe core, not polish</span>
          </div>
          <div className="cs-chips">
            {[
              "Mixed successful and failed rows",
              "Recipient mismatches",
              "Skipped verification",
              "Approver interpretation of match confidence",
              "Recovery after partial failure",
            ].map((s) => (
              <span key={s}>{s}</span>
            ))}
          </div>
        </div>
      </section>

      <NextCaseLink
        href="/work/design-system"
        caseStudyName="Design System for a Live Enterprise Platform"
        className="cs-next"
      >
        <span className="l">Next case &rarr;</span>
        <div className="t">
          Design System for a Live Enterprise Platform{" "}
          <ArrowRightIcon style={{ width: 22, height: 22, display: "inline", verticalAlign: "middle" }} />
        </div>
      </NextCaseLink>

      <footer className="cs-foot">
        <span className="cs-eyebrow">End of case study</span>
        <p>Corporate banking · Offline batch payments · Shipped</p>
      </footer>
    </article>
  );
}
