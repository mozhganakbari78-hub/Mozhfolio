import NextCaseLink from "./NextCaseLink";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import CsImpact from "./CsImpact";
import Mockup from "./Mockup";
import FailureModes from "./FailureModes";
import FailureUnit from "./FailureUnit";
import Scenario from "./Scenario";
import SeniorCalls from "./SeniorCalls";
import { MatchThreshold } from "./CsInlineArt";

export default function BatchTransferCase() {
  return (
    <article>
      {/* HERO */}
      <header className="cs-hero">
        <div className="cs-hero-main">
          <span className="cs-eyebrow">B2B banking · Bulk payments in bank branches</span>
          <h1>Making bulk payments safe for bank branches</h1>
          <p className="cs-lede">
            Branch staff pay salaries and suppliers for corporate clients by uploading one file. One
            bad row sent the whole file back, and a wrong recipient went through as a{" "}
            <strong>successful transfer</strong>. I redesigned the flow around both failures, on a
            launch date nobody could move.
          </p>
        </div>

        <div className="cs-hero-side">
          <CsImpact
            items={[
              { value: "1 fix, not a re-upload", label: "A bad row is corrected on its own; the valid rows keep processing" },
              { value: "Before approval", label: "Wrong-recipient risk flagged while the money can still be stopped" },
              { value: "On the deadline", label: "Live in branches without moving the launch date" },
            ]}
          />
          <dl className="cs-meta">
            <div>
              <dt>My role</dt>
              <dd>Product Designer. Co-led branch research, owned the flow and the verification model, built the UI with the second designer</dd>
            </div>
            <div>
              <dt>Team</dt>
              <dd>2 product designers · Product · Engineering · Banking stakeholders</dd>
            </div>
          </dl>
        </div>
      </header>

      <hr className="cs-divider" />

      {/* 01 SCENARIO */}
      <section className="cs-reveal">
        <span className="cs-num">01 / The scenario</span>
        <h2>Payday at a branch, with a client waiting at the counter</h2>
        <Scenario
          kind="before"
          who="Branch employee uploading a client company's payroll file"
          steps={[
            { label: "Uploads the payroll file", thought: "Hundreds of rows. Let's go." },
            { label: "One account number has a typo", tone: "pain" },
            { label: "The whole file is rejected", thought: "Everyone's salary waits for one row.", tone: "pain" },
            { label: "Fixes it, re-uploads, re-checks everything" },
            { label: "Another row is valid but belongs to the wrong person", thought: "It says successful.", tone: "pain" },
          ]}
          end="Salaries are late, and one of them reached a stranger."
          note="Composite scenario, built from what we observed in branches."
        />
      </section>

      {/* 02 WHY IT MATTERED */}
      <section className="cs-reveal">
        <span className="cs-num">02 / Why it mattered</span>
        <h2>Two failures, and only one of them looked like a failure</h2>
        <p>
          The first costs time and the client&apos;s patience. The second costs money that can&apos;t
          be pulled back, and the bank&apos;s trust.
        </p>
        <FailureModes />
      </section>

      {/* 03 THE REAL PROBLEM */}
      <section className="cs-reveal">
        <span className="cs-num">03 / The real problem</span>
        <h2>The file was the wrong unit, and &ldquo;valid&rdquo; didn&apos;t mean &ldquo;safe&rdquo;</h2>
        <p>
          Everything was checked as one block, and too close to the point of no return. By then the
          only option left was cleaning up.
        </p>
        <FailureUnit />
      </section>

      {/* 04 MY CALLS */}
      <section className="cs-reveal">
        <span className="cs-num">04 / The calls I made</span>
        <h2>Three decisions, and what each one cost</h2>
        <SeniorCalls
          calls={[
            {
              title: "Let each row fail on its own",
              tension: "A simple all-or-nothing file  vs  recovery that matches reality",
              why: "Most rows in a failed file were fine. Restarting the file delayed every valid payment for one mistake.",
              gaveUp: "Simplicity. Engineering now tracks a state for every row.",
            },
            {
              title: "Show the evidence, keep the human accountable",
              tension: "Auto-reject low name matches  vs  let the approver decide",
              why: "The system compares the account holder's name with the file and flags low matches. A 74% match can be fine to someone who knows the client; a 98% one can still be wrong.",
              gaveUp: "Full automation, and some speed on flagged rows.",
            },
            {
              title: "Sequence the release instead of cutting scope",
              tension: "Everything at once  vs  a date that couldn't move",
              why: "Phase 1 fixed the failure model; phase 2 added recipient checks on top. Design system components I had built earlier covered the rest of the UI.",
              gaveUp: "Recipient checks on day one.",
            },
          ]}
        />
      </section>

      {/* 05 SCENARIO, REDESIGNED */}
      <section className="cs-reveal">
        <span className="cs-num">05 / The same moment, redesigned</span>
        <h2>The bad row waits. Everyone else gets paid</h2>
        <Scenario
          kind="after"
          who="Same branch, same payroll file"
          steps={[
            { label: "Uploads the file and sees every row", thought: "One row is flagged." },
            { label: "Fixes only that row", tone: "good" },
            { label: "A recipient name matches 74%", thought: "Let me check with the client.", tone: "good" },
            { label: "The approver confirms, then money moves", tone: "good" },
          ]}
          end="Payroll goes out on time, to the right people."
        />
        <MatchThreshold />
      </section>

      {/* SHOT — validation */}
      <section className="cs-shot cs-reveal">
        <Mockup
          src="/projects/batch-validation.webp"
          alt="Batch review screen showing per-row status and recipient match before approval"
          caption="Review: each row carries its own status and recipient match, before anyone approves"
        />
      </section>

      {/* SHOT — upload */}
      <section className="cs-shot cs-reveal">
        <Mockup
          src="/projects/batch-upload.webp"
          alt="Batch upload screen with a per-row preview before anything is committed"
          caption="Upload: a per-row preview, with nothing committed yet"
        />
      </section>

      {/* 06 OUTCOME */}
      <section className="cs-reveal">
        <span className="cs-num">06 / Outcome</span>
        <h2>Shipped on the deadline, and changeable when reality arrived</h2>
        <p>
          The limited rollout exposed a requirement nobody had written down, not even its owners.
          Because the release was phased, it cost a revision instead of a rewrite.
        </p>
        <p className="cs-takeaway">
          <span>What I&apos;d do differently</span>
          Run one structured session on the riskiest cases before launch: mixed results, name
          mismatches, skipped checks. Some of that surfaced in production.
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
        <p>Corporate banking · Bulk payments · Shipped</p>
      </footer>
    </article>
  );
}
