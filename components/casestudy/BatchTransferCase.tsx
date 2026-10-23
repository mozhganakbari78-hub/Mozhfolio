import NextCaseLink from "./NextCaseLink";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import CsSnapshot from "./CsSnapshot";
import CsImpact from "./CsImpact";
import Mockup from "./Mockup";
import FailureUnit from "./FailureUnit";
import FailureModes from "./FailureModes";
import SketchFlow from "./SketchFlow";
import Assumptions from "./Assumptions";
import { MatchThreshold, DsSpeed, RowIsolation } from "./CsInlineArt";

export default function BatchTransferCase() {
  return (
    <article>
      {/* HERO */}
      <header className="cs-hero">
        <div className="cs-hero-main">
          <span className="cs-eyebrow">B2B Banking · Offline Batch Payments · 3 min read</span>
          <h1>
            A bad row should fail alone.
            <br />
            A wrong transfer should never leave.
          </h1>
          <p className="cs-lede">
            One invalid row blocked a whole payment file, while a wrong recipient went through as a{" "}
            <strong>successful transfer</strong>. I made failures recoverable and risk visible
            before money moved.
          </p>
        </div>

        <div className="cs-hero-side">
          <CsImpact
            items={[
              { value: "Row, not file", label: "One bad row no longer blocks the batch; valid payments continue" },
              { value: "Caught before approval", label: "Recipient mismatches surface while money can still be stopped" },
              { value: "On the deadline", label: "Reached real branches without the launch date moving" },
            ]}
          />

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
        </div>
      </header>

      <hr className="cs-divider" />

      {/* THE STORY IN 30 SECONDS */}
      <section className="cs-reveal">
        <span className="cs-num">00 / In 30 seconds</span>
        <h2>The whole case, before the detail</h2>
        <CsSnapshot
          steps={[
            { k: "The problem", t: "One bad row blocked a whole payroll file." },
            { k: "What branches showed", t: "The worse failure looked like success: money sent to the wrong person." },
            { k: "What I changed", t: "Rows fail alone. Recipients are checked before approval, while money can still stop." },
          ]}
        />
      </section>

      {/* 01 WHAT WE GOT WRONG */}
      <section className="cs-reveal">
        <span className="cs-num">01 / Research</span>
        <h2>We wrote our assumptions down, then visited branches</h2>
        <Assumptions />
      </section>

      {/* 02 THE TWO FAILURES */}
      <section className="cs-reveal">
        <span className="cs-num">02 / The problem</span>
        <h2>Two failures, and only one looked like a failure</h2>
        <FailureModes />
      </section>

      {/* 03 THE FLOW, SKETCHED */}
      <section className="cs-reveal">
        <span className="cs-num">03 / The flow</span>
        <h2>Upload, review, confirm</h2>
        <SketchFlow src="/projects/batch-wireframe.webp" />
      </section>

      {/* 04 DECISION 01 */}
      <section className="cs-reveal">
        <span className="cs-num">04 / Decision 01</span>
        <h2>Change the unit of failure from the file to the row</h2>
        <p>Fix the one bad row; the other 499 keep processing.</p>
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

      {/* 05 DECISION 02 */}
      <section className="cs-reveal">
        <span className="cs-num">05 / Decision 02</span>
        <h2>Show who gets the money before anyone approves it</h2>
        <p>
          The account holder is matched against the name in the file. Low matches are flagged, not
          auto-rejected: the system surfaces evidence, a person makes the call.
        </p>
        <MatchThreshold />
      </section>

      {/* SHOT — validation */}
      <section className="cs-shot cs-reveal">
        <Mockup
          src="/projects/batch-validation.webp"
          alt="Row-level validation and recipient match review"
          caption="Fig. 02: Row-level state and match confidence, before approval"
        />
      </section>

      {/* 06 SHIPPING */}
      <section className="cs-reveal">
        <span className="cs-num">06 / Shipping on a fixed deadline</span>
        <h2>Sequenced, not cut</h2>
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

      {/* 07 OUTCOME */}
      <section className="cs-reveal">
        <span className="cs-num">07 / Outcome</span>
        <h2>Recovery moved from the batch to the row</h2>
        <RowIsolation />
        <p>
          Live in real branches, on the deadline. The limited rollout also exposed a requirement
          nobody had written down, and the phasing made it a revision instead of a rewrite.
        </p>
        <p className="cs-takeaway">
          <span>Takeaway</span>
          The most dangerous error is the one that succeeds.
        </p>
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
