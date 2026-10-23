import NextCaseLink from "./NextCaseLink";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import CsGlance from "./CsGlance";
import Mockup from "./Mockup";
import FailureModes from "./FailureModes";
import FailureUnit from "./FailureUnit";
import Scenario from "./Scenario";
import WhyTradeoff from "./WhyTradeoff";

export default function BatchTransferCase() {
  return (
    <article>
      {/* HERO */}
      <header className="cs-hero">
        <div className="cs-hero-main">
          <span className="cs-eyebrow">Case study</span>
          <h1>Bulk payments where one bad row doesn&apos;t stop the file</h1>
          <p className="cs-lede">
            Redesigning the tool branch staff use to pay salaries and suppliers for corporate
            clients.
          </p>
        </div>

        <div className="cs-hero-side">
          <CsGlance
            company="Sadad"
            role="Product Designer"
            platform="Web app · Bank branch staff"
            team="2 designers, Product, Engineering, Banking"
            problem="One invalid row rejected the whole payment file. Worse, a wrong but valid account number went through as a success."
            did="Co-led research in branches, designed row-level processing and a recipient name check before approval, and phased the release to hit a fixed deadline."
            results={[
              <>A bad row is <b>fixed on its own</b>; valid payments keep going</>,
              <>Wrong-recipient risk <b>flagged before approval</b>, while money can still be stopped</>,
              <>Shipped to branches <b>on the deadline</b></>,
            ]}
          />
        </div>
      </header>

      <hr className="cs-divider" />

      {/* FINAL DESIGN */}
      <section className="cs-shot cs-reveal">
        <Mockup
          src="/projects/batch-validation.webp"
          alt="Batch review screen with per-row status and recipient match before approval"
          caption="Final design: every row has its own status and recipient match, before anyone approves"
        />
      </section>

      {/* CONTEXT */}
      <section className="cs-reveal">
        <span className="cs-num">Context</span>
        <h2>Payday at a branch, with the client waiting</h2>
        <p>What we saw when we watched branch staff process real payroll files.</p>
        <Scenario
          kind="before"
          who="Branch employee uploading a company's payroll file"
          steps={[
            { label: "Uploads hundreds of rows" },
            { label: "One account number has a typo", tone: "pain" },
            { label: "The whole file is rejected", thought: "Everyone's salary waits for one row.", tone: "pain" },
            { label: "Another row is valid but goes to the wrong person", tone: "pain" },
          ]}
          end="Salaries are late, and one reached a stranger."
        />
      </section>

      {/* PROBLEM */}
      <section className="cs-reveal">
        <span className="cs-num">Problem</span>
        <h2>Two failures, and only one looked like a failure</h2>
        <p>
          The first costs time. The second costs money that can&apos;t be pulled back.
        </p>
        <FailureModes />
      </section>

      {/* DECISION 1 */}
      <section className="cs-reveal">
        <span className="cs-num">Decision 1</span>
        <h2>Each row succeeds or fails on its own</h2>
        <WhyTradeoff
          why="Most rows in a rejected file were fine. Restarting the file delayed every valid payment because of one mistake."
          tradeoff="Engineering now tracks a status for every row, not one for the file."
        />
        <FailureUnit />
      </section>

      {/* SHOT — upload */}
      <section className="cs-shot cs-reveal">
        <Mockup
          src="/projects/batch-upload.webp"
          alt="Batch upload screen with a per-row preview before anything is committed"
          caption="Upload: every row previewed, nothing sent yet"
        />
      </section>

      {/* DECISION 2 */}
      <section className="cs-reveal">
        <span className="cs-num">Decision 2</span>
        <h2>Check the recipient&apos;s name before approval</h2>
        <WhyTradeoff
          why="A valid account number doesn't mean the right person. The system compares the account holder with the name in the file and flags low matches, while the money can still be stopped."
          tradeoff="Flagged rows aren't auto-rejected. The approver decides, which is slower but keeps a person accountable."
        />
      </section>

      {/* DECISION 3 */}
      <section className="cs-reveal">
        <span className="cs-num">Decision 3</span>
        <h2>Ship in two phases to keep the deadline</h2>
        <WhyTradeoff
          why="The launch date couldn't move. Phase 1 fixed the row-level failures; phase 2 added the name check on top. Components I had already built in the design system covered the rest of the UI."
          tradeoff="Name checks weren't there on day one."
        />
      </section>

      {/* RESULT */}
      <section className="cs-reveal">
        <span className="cs-num">Result</span>
        <h2>Shipped on time, and easy to change after launch</h2>
        <p>
          The first branches surfaced a requirement nobody had written down. Because of the phasing,
          it cost a revision, not a rewrite.
        </p>
        <p className="cs-takeaway">
          <span>What I learned</span>
          The most dangerous error is the one that looks like success.
        </p>
      </section>

      <NextCaseLink
        href="/work/design-system"
        caseStudyName="A design system the engineers actually used"
        className="cs-next"
      >
        <span className="l">Next case &rarr;</span>
        <div className="t">
          A design system the engineers actually used{" "}
          <ArrowRightIcon style={{ width: 22, height: 22, display: "inline", verticalAlign: "middle" }} />
        </div>
      </NextCaseLink>

      <footer className="cs-foot">
        <span className="cs-eyebrow">End of case study</span>
        <p>Corporate banking · Bulk payments · Shipped</p>
      </footer>
    </article>
  );
}
