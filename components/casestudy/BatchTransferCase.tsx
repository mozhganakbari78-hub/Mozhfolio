import NextCaseLink from "./NextCaseLink";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import CsArt from "./CsArt";
import Mockup from "./Mockup";
import FailureUnit from "./FailureUnit";
import FailureModes from "./FailureModes";
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

export default function BatchTransferCase() {
  return (
    <article>
      {/* HERO */}
      <header className="cs-hero">
        <span className="cs-eyebrow">Case Study · B2B Banking · Offline Batch Payments</span>
        <h1>
          A bad row should fail alone.
          <br />
          A wrong transfer should never leave.
        </h1>
        <p className="cs-lede">
          Payroll is a high-trust workflow. A failed batch slows branch operations, but a
          successful wrong transfer is the bigger risk:{" "}
          <strong>money moving to the wrong person</strong>. I changed both failure modes under a
          fixed deadline.
        </p>

        <dl className="cs-meta">
          <div>
            <dt>Role</dt>
            <dd>Product Designer. Owned the flow, verification model, UI, and handoff</dd>
          </div>
          <div>
            <dt>Team</dt>
            <dd>2 product designers · Product · Engineering · Banking stakeholders</dd>
          </div>
          <div>
            <dt>Constraint</dt>
            <dd>A launch date nobody could move</dd>
          </div>
        </dl>
      </header>

      <hr className="cs-divider" />

      {/* 01 THE TWO FAILURES */}
      <section className="cs-reveal">
        <CsArt name="read" />
        <span className="cs-num">01 / Problem framing</span>
        <h2>Errors were cheap to create and expensive to discover</h2>
        <p>
          We researched this in branches rather than from the requirements doc. We observed branch
          employees processing real payroll files and interviewed the operators who prepare the
          batches and the approvers who release them. Two failure modes came out of it, and they
          were nothing alike.
        </p>
        <div className="cs-compare">
          <div className="col legacy">
            <span className="tag">Failure 01 · Batch-level</span>
            <ul>
              <li>The batch was one all-or-nothing processing unit</li>
              <li>One unprocessable row invalidated every other row</li>
              <li>The employee had to investigate, correct, and restart the run</li>
            </ul>
          </div>
          <div className="col legacy">
            <span className="tag">Failure 02 · Invisible recipient risk</span>
            <ul>
              <li>Files carried account numbers, no human-readable confirmation</li>
              <li>A mistyped identifier does not always fail</li>
              <li>If it resolves to a real account, the money simply goes to the wrong person</li>
            </ul>
          </div>
        </div>
      </section>

      {/* 01b THE TWO FAILURES, DRAWN */}
      <section className="cs-reveal">
        <span className="cs-num">01 / The two failures</span>
        <h2>One stops the work. The other doesn&apos;t look like a failure at all.</h2>
        <FailureModes />
      </section>

      {/* 02 THE REFRAME */}
      <section className="cs-reveal">
        <CsArt name="fork" />
        <span className="cs-num">02 / The reframe</span>
        <h2>The costliest error was the one that looked valid</h2>
        <div className="cs-pull">
          The most expensive failure was not the one that stopped the workflow. It was the one that
          looked correct until after the money moved.
        </div>
        <p>
          That set the two rules the redesign had to satisfy: make{" "}
          <strong>recoverable problems local</strong>, and make{" "}
          <strong>irreversible risks visible</strong> before commitment.
        </p>
      </section>

      {/* SHOT — the flow, sketched */}
      <section className="cs-shot cs-reveal">
        <Mockup
          src="/projects/batch-wireframe.webp"
          alt="Hand-drawn three-step wireframe flow: upload file, review and validate, confirm"
          caption="Fig. 01: The two rules, sketched into a three-step flow before any UI existed"
        />
      </section>

      {/* 03 DECISION 01 */}
      <section className="cs-reveal">
        <CsArt name="rows" />
        <span className="cs-num">03 / Key decision 01</span>
        <h2>Change the unit of failure</h2>
        <p>
          Treating the batch as one unit made the interface simple and recovery disproportionately
          expensive, while ignoring that most rows in the file were perfectly valid. Now each
          transaction succeeds or fails on its own. Instead of restarting a 500-row file because of
          one mistake, an employee fixes only the affected rows and the rest keep processing.
        </p>
        <FailureUnit />
      </section>

      {/* SHOT — batch upload */}
      <section className="cs-shot cs-reveal">
        <Mockup
          src="/projects/batch-upload.webp"
          alt="Batch upload screen, file submission and row preview"
          caption="Fig. 02: Upload and per-row preview before anything is committed"
        />
      </section>

      {/* 04 DECISION 02 */}
      <section className="cs-reveal">
        <span className="cs-num">04 / Key decision 02</span>
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
                A syntactically valid account number answers the wrong question. The employee needed
                to know <em>whether this account belongs to the person the file says I am paying</em>.
              </div>
            </div>
            <div className="cs-dline chose">
              <div className="k">The model</div>
              <div className="v">
                The system retrieves the registered account holder for each destination, compares it
                with the name in the file, and shows the <strong>degree of match</strong> in the
                review screen. Lower-confidence matches are flagged for human review rather than
                auto-rejected.
              </div>
            </div>
            <div className="cs-dline">
              <div className="k">Why not automate it</div>
              <div className="v">
                I deliberately kept an imperfect matching mechanism out of the decision itself. A
                high-confidence match can still be wrong on a large transfer, and a lower one can be
                obviously fine to someone who knows the client. The system surfaces evidence; the
                authorized human still makes the call.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 04b inline art */}
      <MatchThreshold />

      {/* SHOT — validation */}
      <section className="cs-shot cs-reveal">
        <Mockup
          src="/projects/batch-validation.webp"
          alt="Row-level validation and recipient match review"
          caption="Fig. 03: Row-level state and match confidence, before approval"
        />
      </section>

      {/* 05 AUTHORITY + TRADE-OFF */}
      <section className="cs-reveal">
        <CsArt name="shield" />
        <span className="cs-num">05 / Authority &amp; trade-offs</span>
        <h2>Separate preparation from commitment</h2>
        <p>
          A branch employee prepares the request with nothing executed yet; a senior approver
          confirms, and only then does money move. The separation matters because verification is
          only worth anything if its output lands <em>before</em> the irreversible step. Once money
          moves, recovery becomes an operational process rather than a design opportunity.
        </p>
        <p>
          Verification stayed optional per batch. It adds a lookup and therefore time, and not every
          batch carries the same uncertainty. Because an approver could proceed without it, the
          interface had to make the verified state and any mismatch unmissable rather than rely on
          the feature simply existing.
        </p>
        <div className="cs-pull">
          Not a perfect safety mechanism. A conscious balance between operational speed and risk
          visibility.
        </div>
      </section>

      {/* 06 SEQUENCING */}
      <section className="cs-reveal">
        <span className="cs-num">06 / Shipping under a fixed deadline</span>
        <h2>I protected the safe core by sequencing it</h2>
        <div className="cs-phase">
          <div className="phtag">Phase 01</div>
          <div>
            <h3>Fix the failure model</h3>
            <p>
              Independent row processing removed the all-or-nothing behavior and gave branches a
              safer foundation. Verification was deliberately kept out of the critical path.
            </p>
          </div>
        </div>
        <div className="cs-phase">
          <div className="phtag">Phase 02</div>
          <div>
            <h3>Add the trust layer</h3>
            <p>
              Recipient verification, name comparison, and match confidence in the review screen,
              built on top of a workflow already running in branches.
            </p>
          </div>
        </div>
        <div className="cs-pull">
          The deadline did not decide what was important. It decided what had to be sequenced.
        </div>
      </section>

      {/* 07 SYSTEM LEVERAGE */}
      <section className="cs-reveal">
        <span className="cs-num">07 / Why the deadline was survivable</span>
        <h2>The design system was decision leverage, not decoration</h2>
        <p>
          Design system components I had built earlier already covered the patterns this tool
          needed. That let us spend limited time on the decisions that affected financial risk,
          instead of rebuilding familiar UI patterns under deadline pressure.
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

      {/* 08 OUTCOME */}
      <section className="cs-reveal">
        <span className="cs-num">08 / Rollout &amp; outcome</span>
        <h2>The failure model of batch payments changed</h2>
        <div className="cs-status">
          <span className="cs-eyebrow">Shipped · controlled rollout</span>
          <h3>Recovery moved from the batch to the row.</h3>
          <p>
            The workflow reached real branches. Valid transactions now continue while a failed row
            is isolated and resolved on its own, and recipient mismatches surface before final
            approval when verification is used. The bank&apos;s operational metrics are internal, so
            I describe what the shipped behavior changed rather than quoting figures I can&apos;t
            share.
          </p>
        </div>
      </section>

      {/* 09 REFLECTION */}
      <section className="cs-reveal">
        <span className="cs-num">09 / Reflection</span>
        <h2>The most dangerous error may be the one that succeeds</h2>
        <div className="cs-reflect">
          <h3>The obvious pain was not the real priority</h3>
          <p>
            The failed batch interrupted work and frustrated people, so it got all the attention.
            Research surfaced a worse category: a transaction that completes perfectly, to the wrong
            recipient. Helping users recover from errors is not the whole job. Sometimes the job is
            helping them recognize a risky action while it is still reversible. In financial
            products, design is often less about removing every step and more about helping people
            make the right decision at the right moment.
          </p>
        </div>
        <div className="cs-divider" style={{ margin: "22px 0" }} />
        <div className="cs-reflect">
          <h3>What I&apos;d do differently</h3>
          <p>
            I&apos;d protect one structured pre-launch session on the highest-risk scenarios: mixed
            success and failure, recipient mismatches, skipped verification, and how approvers
            actually read a match percentage. The controlled rollout worked, but some things
            surfaced in production that didn&apos;t need to.
          </p>
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
