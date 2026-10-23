import NextCaseLink from "./NextCaseLink";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import CsImpact from "./CsImpact";
import Mockup from "./Mockup";
import FailureUnit from "./FailureUnit";
import FailureModes from "./FailureModes";
import SketchFlow from "./SketchFlow";
import { MatchThreshold, DsSpeed, RowIsolation } from "./CsInlineArt";

export default function BatchTransferCase() {
  return (
    <article>
      {/* HERO */}
      <header className="cs-hero">
        <div className="cs-hero-main">
          <span className="cs-eyebrow">B2B banking · Branch batch payments · 3 min read</span>
          <h1>Batch payments where one bad row no longer blocks the file</h1>
          <p className="cs-lede">
            Branch staff upload payroll and supplier files for corporate clients. One invalid row
            sent the whole file back, while a wrong recipient went through as a{" "}
            <strong>successful transfer</strong>. I redesigned the flow around both failures.
          </p>
        </div>

        <div className="cs-hero-side">
          <CsImpact
            items={[
              { value: "1 fix, not a re-upload", label: "A bad row is corrected on its own; the valid rows keep processing" },
              { value: "Before approval", label: "Recipient name mismatches flagged while the money can still be stopped" },
              { value: "On the deadline", label: "Shipped to real branches without moving the launch date" },
            ]}
          />

          <dl className="cs-meta">
            <div>
              <dt>Role</dt>
              <dd>Product Designer. Co-led branch research, owned the flow and the verification model, built the UI with the second designer</dd>
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
        </div>
      </header>

      <hr className="cs-divider" />

      {/* THE RESULT */}
      <section className="cs-shot cs-reveal">
        <Mockup
          src="/projects/batch-validation.webp"
          alt="Batch review screen showing per-row status and recipient match confidence before approval"
          caption="The result: every row carries its own status and recipient match, before anyone approves"
        />
      </section>

      {/* 01 PROBLEM */}
      <section className="cs-reveal">
        <span className="cs-num">01 / Problem</span>
        <h2>Two failures, and only one looked like a failure</h2>
        <p>Found by watching branch staff process real files.</p>
        <FailureModes />
      </section>

      {/* 02 INSIGHT */}
      <section className="cs-reveal">
        <span className="cs-num">02 / Insight</span>
        <h2>Errors surfaced too late to prevent anything</h2>
        <SketchFlow src="/projects/batch-wireframe.webp" />
      </section>

      {/* 03 DECISION 1 */}
      <section className="cs-reveal">
        <span className="cs-num">03 / Decision 1</span>
        <h2>A row fails on its own, not the whole file</h2>
        <FailureUnit />
      </section>

      {/* SHOT — upload */}
      <section className="cs-shot cs-reveal">
        <Mockup
          src="/projects/batch-upload.webp"
          alt="Batch upload screen with per-row preview before anything is committed"
          caption="Upload with a per-row preview; nothing is committed yet"
        />
      </section>

      {/* 04 DECISION 2 */}
      <section className="cs-reveal">
        <span className="cs-num">04 / Decision 2</span>
        <h2>Show who gets the money before anyone approves it</h2>
        <p>
          Low name matches are flagged, not auto-rejected. The system shows the evidence; the
          approver makes the call.
        </p>
        <MatchThreshold />
      </section>

      {/* 05 CONSTRAINT */}
      <section className="cs-reveal">
        <span className="cs-num">05 / Constraint</span>
        <h2>A fixed deadline: sequenced, not cut</h2>
        <div className="cs-phase">
          <div className="phtag">Phase 01</div>
          <div>
            <h3>Fix the failure model</h3>
            <p>Row-level processing, live in branches first.</p>
          </div>
        </div>
        <div className="cs-phase">
          <div className="phtag">Phase 02</div>
          <div>
            <h3>Add the trust layer</h3>
            <p>Recipient matching on top of a workflow already running.</p>
          </div>
        </div>
        <DsSpeed />
      </section>

      {/* 06 OUTCOME */}
      <section className="cs-reveal">
        <span className="cs-num">06 / Outcome</span>
        <h2>Recovery moved from the file to the row</h2>
        <RowIsolation />
        <p>
          Live in branches, on the deadline. The limited rollout also exposed a requirement nobody
          had written down; because of the phasing it cost a revision, not a rewrite.
        </p>
        <p className="cs-takeaway">
          <span>What I learned</span>
          The most dangerous error is the one that looks like success.
        </p>
      </section>

      <NextCaseLink
        href="/work/design-system"
        caseStudyName="A design system engineers actually adopted"
        className="cs-next"
      >
        <span className="l">Next case &rarr;</span>
        <div className="t">
          A design system engineers actually adopted{" "}
          <ArrowRightIcon style={{ width: 22, height: 22, display: "inline", verticalAlign: "middle" }} />
        </div>
      </NextCaseLink>

      <footer className="cs-foot">
        <span className="cs-eyebrow">End of case study</span>
        <p>Corporate banking · Branch batch payments · Shipped</p>
      </footer>
    </article>
  );
}
