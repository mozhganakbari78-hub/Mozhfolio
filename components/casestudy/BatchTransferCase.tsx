import NextCaseLink from "./NextCaseLink";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import CsArt from "./CsArt";
import Mockup from "./Mockup";
import FailureUnit from "./FailureUnit";
import FailureModes from "./FailureModes";
import SketchFlow from "./SketchFlow";
import Assumptions from "./Assumptions";
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
          Batch payments are high-trust banking workflows. A single invalid row could block an
          entire payment file, while an incorrect recipient could still result in a{" "}
          <strong>successful transfer</strong>. I redesigned the workflow to make failures
          recoverable and risks visible before money moved, against a launch date nobody could
          move.
        </p>

        <dl className="cs-meta">
          <div>
            <dt>Role</dt>
            <dd>Product Designer. Co-led the research, owned the flow and verification model, built the UI with the other designer, carried it through handoff</dd>
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

      {/* 01 RESEARCH */}
      <section className="cs-reveal">
        <CsArt name="read" />
        <span className="cs-num">01 / What we learned in branches</span>
        <h2>Failures were arriving at the wrong moment</h2>
        <p>
          We observed branch employees processing batch files and looked beyond the happy path:
          where errors appeared, how users recovered, and which decisions still depended on manual
          verification.
        </p>
        <p>
          The problem was not that the process was slow. It was that failures surfaced at the wrong
          moment: <strong>too early</strong>, blocking valid work, or <strong>too late</strong>,
          after money had already moved.
        </p>
      </section>

      {/* 01a HOW WE WORKED */}
      <section className="cs-reveal">
        <span className="cs-num">01 / How the two of us worked</span>
        <h2>We interviewed separately on purpose, then compared notes</h2>
        <div className="cs-steps">
          {[
            {
              h: "Separate branch conversations",
              p: "We each spoke to branch employees on our own rather than together, so neither of us shaped what the other heard.",
            },
            {
              h: "Assumptions on the table before conclusions",
              p: "We wrote down what we each expected to find and compared it against what we actually heard, out loud, before agreeing on a problem.",
            },
            {
              h: "Sketching together",
              p: "The flow was drawn jointly on paper, which kept the argument about structure rather than screens.",
            },
            {
              h: "Technical alignment before any UI",
              p: "Recurring sessions with the developers to check that the interaction model matched what the system could actually do, while changing it was still cheap.",
            },
            {
              h: "Then the interface, built together",
              p: "UI work started only once the flow, the failure model, and the technical constraints were settled.",
            },
          ].map((st) => (
            <div className="cs-step" key={st.h}>
              <div>
                <h3>{st.h}</h3>
                <p>{st.p}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 01a2 THE ASSUMPTIONS */}
      <section className="cs-reveal">
        <span className="cs-num">01 / What we got wrong first</span>
        <h2>The assumptions we wrote down, and what the branches did to them</h2>
        <Assumptions />
      </section>

      {/* 01b THE TWO FAILURES */}
      <section className="cs-reveal">
        <span className="cs-num">01 / Insights 01 &amp; 02</span>
        <h2>Two failures, and only one of them looked like a failure</h2>
        <div className="cs-ins is-pair">
          <div className="ins">
            <span className="n">Insight 01</span>
            <span className="t">One invalid row could block an entire batch</span>
            <span className="p">
              The uploaded file was treated as a single processing unit. If one transaction failed
              validation, the whole batch had to be reviewed, corrected, and submitted again.
            </span>
            <span className="imp">
              <b>Impact</b>
              Valid transactions were delayed by errors that had nothing to do with them.
            </span>
          </div>
          <div className="ins">
            <span className="n">Insight 02</span>
            <span className="t">A valid account number did not mean a safe transfer</span>
            <span className="p">
              Files carried account numbers with no confirmation of who would actually receive the
              money. A mistyped identifier can still resolve to a real account.
            </span>
            <span className="imp">
              <b>Impact</b>
              The most dangerous errors were not the visible ones. They were the ones that looked
              successful.
            </span>
          </div>
        </div>
      </section>

      {/* 01b THE TWO FAILURES, DRAWN */}
      <section className="cs-reveal">
        <span className="cs-num">01 / Problem framing</span>
        <h2>The workflow had two different failure points</h2>
        <FailureModes />
      </section>

      {/* 01d INSIGHT 03 */}
      <section className="cs-reveal">
        <span className="cs-num">01 / Insight 03</span>
        <h2>Everything was checked too close to the point of no return</h2>
        <p>
          Employees had little visibility into what would happen after uploading a file. Validation
          and recipient checks ran too late, so problems were discovered during or after processing
          rather than before it.
        </p>
        <div className="cs-ins">
          <div className="ins">
            <span className="n">Insight 03</span>
            <span className="t">Prevention had been turned into recovery</span>
            <span className="p">
              By the time the system had anything useful to say, the employee&apos;s options had
              already narrowed to cleaning up after the fact.
            </span>
            <span className="imp">
              <b>Impact</b>
              Recovery became a manual operational task instead of a prevention opportunity.
            </span>
          </div>
        </div>
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
          That set the rules the redesign had to satisfy: isolate{" "}
          <strong>recoverable errors at the smallest possible level</strong>, surface{" "}
          <strong>recipient risk before approval</strong>, and give the employee enough to make a
          safe decision <strong>while money can still be stopped</strong>.
        </p>
        <p>
          It also changed the design goal, from preventing every error to making the right errors
          visible at the right moment.
        </p>
      </section>

      {/* 02b THE FLOW, SKETCHED */}
      <section className="cs-reveal">
        <span className="cs-num">02 / Turning the rules into a flow</span>
        <h2>Upload, review, confirm. The whole argument fits on one page.</h2>
        <SketchFlow src="/projects/batch-wireframe.webp" />
      </section>

      {/* 03 DECISION 01 */}
      <section className="cs-reveal">
        <CsArt name="rows" />
        <span className="cs-num">03 / Key decision 01</span>
        <h2>Change the unit of failure</h2>
        <p>
          Treating the batch as one unit made the interface simple and recovery disproportionately
          expensive, while ignoring that most rows in the file were perfectly valid. Now each
          transaction succeeds or fails on its own. That changed the recovery model from
          investigating a failed file to resolving specific transactions: instead of restarting a
          500-row file because of one mistake, an employee fixes only the affected rows and the
          rest keep processing.
        </p>
        <FailureUnit />
      </section>

      {/* SHOT — batch upload */}
      <section className="cs-shot cs-reveal">
        <Mockup
          src="/projects/batch-upload.webp"
          alt="Batch upload screen, file submission and row preview"
          caption="Fig. 01: Upload and per-row preview before anything is committed"
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
                authorized human still makes the call. In financial workflows, automation should
                reduce uncertainty, not remove accountability.
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
          caption="Fig. 02: Row-level state and match confidence, before approval"
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
        <p>
          The goal was not full automation. It was giving the right person better evidence before an
          irreversible action.
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
          <span className="cs-eyebrow">Shipped · limited rollout</span>
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

      {/* 08b WHAT THE ROLLOUT REVEALED */}
      <section className="cs-reveal">
        <span className="cs-num">08 / What the rollout revealed</span>
        <h2>The limited release found a requirement nobody had written down</h2>
        <p>
          Opening the tool to a small number of branches surfaced something no document had
          captured: the bank&apos;s actual requirement for this process was different from the one
          everyone had been working from, including the people who owned it. That is uncomfortable,
          and it is also exactly what a controlled rollout is for. Finding it in a handful of
          branches costs a revision. Finding it after a full release costs a migration.
        </p>
        <p>
          We are now working through how much of the flow can be reshaped around the real
          requirement without a large design or engineering rewrite. The row-level failure model
          and the separation between preparation and approval both hold, which is what makes that
          conversation cheap rather than existential.
        </p>
        <div className="cs-pull">
          The phasing paid off in a way I hadn&apos;t predicted. It wasn&apos;t only about hitting a
          deadline, it kept the product changeable once reality arrived.
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
            helping them recognize a risky action while it is still reversible. In high-trust
            products, reducing friction is not always about removing steps. Sometimes it is about
            adding the right information before a critical decision.
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
