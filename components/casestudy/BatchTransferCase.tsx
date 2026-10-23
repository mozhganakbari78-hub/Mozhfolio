import NextCaseLink from "./NextCaseLink";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import CsGlance from "./CsGlance";
import Mockup from "./Mockup";
import FailureUnit from "./FailureUnit";

export default function BatchTransferCase() {
  return (
    <article>
      {/* HERO */}
      <header className="cs-hero">
        <div className="cs-hero-main">
          <span className="cs-eyebrow">Case study · Branch banking</span>
          <h1>Bulk payments where one bad row doesn&apos;t stop the file</h1>
          <p className="cs-lede">
            Bank branches pay a company&apos;s salaries by uploading one file. Before designing
            anything, another designer and I went to branches to see where it actually broke.
          </p>
        </div>

        <div className="cs-hero-side">
          <CsGlance
            role="Product Designer, research to UI"
            team="2 designers, Product, Engineering"
            results={[
              { value: "1 row", label: "a bad row is fixed on its own; the rest keep going" },
              { value: "Before approval", label: "wrong recipients flagged while money can still be stopped" },
              { value: "On time", label: "shipped to branches on a fixed deadline" },
            ]}
          />
        </div>
      </header>

      <hr className="cs-divider" />

      {/* 1 */}
      <section className="cs-reveal">
        <span className="cs-num">The starting point</span>
        <h2>A batch payment tool for branches, on a date that couldn&apos;t move</h2>
        <p>
          Branch tellers upload files with dozens of payments for corporate clients: payroll,
          suppliers. The tool needed a redesign, and the launch date was fixed.
        </p>
      </section>

      {/* 2 */}
      <section className="cs-reveal">
        <span className="cs-num">The question</span>
        <h2>Where does it actually break?</h2>
        <p>
          We assumed speed was the problem. So we went to branches and watched tellers process real
          files. We each talked to staff separately, so neither of us shaped what the other heard,
          then compared notes.
        </p>
        <p className="cs-quote">Speed wasn&apos;t the problem. Failures were.</p>
      </section>

      {/* 3 */}
      <section className="cs-reveal">
        <span className="cs-num">Failure 1</span>
        <h2>One wrong digit sent the whole file back</h2>
        <p>
          A single invalid account number rejected the entire file. The teller had to fix it,
          upload again and check every row from the start, while every valid payment waited.
        </p>
        <FailureUnit />
      </section>

      {/* 4 */}
      <section className="cs-reveal">
        <span className="cs-num">Failure 2</span>
        <h2>And a mistake that looked like success</h2>
        <p>
          A valid account number can still belong to the wrong person. The system said
          &ldquo;successful&rdquo;, and the money went to a stranger. Nobody saw it until it was
          too late to stop.
        </p>
        <p className="cs-quote">A valid account number isn&apos;t the same as the right person.</p>
      </section>

      {/* 5 */}
      <section className="cs-reveal">
        <span className="cs-num">The challenge</span>
        <h2>Catch both, without slowing branches down</h2>
        <p>
          The first failure wasted time; the second lost money that can&apos;t be pulled back. The
          fix had to make mistakes small and visible before money moved, and keep a person
          accountable for the final call.
        </p>
      </section>

      {/* 6 */}
      <section className="cs-reveal">
        <span className="cs-num">Decision 1</span>
        <h2>Each row succeeds or fails on its own</h2>
        <p>
          The teller sees every row before anything is sent, fixes only the bad one, and the rest
          go through.
        </p>
        <p className="cs-trade">
          <b>Trade-off:</b> engineering tracks a status for every row, not just one for the file.
        </p>
      </section>

      <section className="cs-shot cs-reveal">
        <Mockup
          src="/projects/batch-upload.webp"
          alt="Batch upload screen with a per-row preview before anything is committed"
          caption="The teller uploads the file and sees every row, with nothing sent yet"
        />
      </section>

      {/* 7 */}
      <section className="cs-reveal">
        <span className="cs-num">Decision 2</span>
        <h2>Check each recipient&apos;s name before approval</h2>
        <p>
          The system compares the account holder&apos;s name with the name in the file and shows
          how well they match. A low match is flagged, not rejected: the approver checks it with
          the client before any money moves.
        </p>
        <p className="cs-trade">
          <b>Trade-off:</b> no automatic rejection. A person decides, which is slower but keeps
          someone accountable for the money.
        </p>
      </section>

      <section className="cs-shot cs-reveal">
        <Mockup
          src="/projects/batch-validation.webp"
          alt="Batch review screen with per-row status and recipient name match before approval"
          caption="Every row shows its status and how well the recipient's name matches"
        />
      </section>

      {/* 8 */}
      <section className="cs-reveal">
        <span className="cs-num">The constraint</span>
        <h2>A fixed deadline, so we shipped in two steps</h2>
        <ol className="cs-rules is-plain">
          <li>First: row-by-row processing, so branches got the safer flow on time.</li>
          <li>Then: the name check, added on top of a flow already running.</li>
        </ol>
        <p>
          Components I had already built in the design system covered the rest of the screens, so
          our time went into the decisions about money, not into redrawing tables and buttons.
        </p>
      </section>

      {/* 9 */}
      <section className="cs-reveal">
        <span className="cs-num">Now</span>
        <h2>Live in branches, and easy to change</h2>
        <p>
          The first branches revealed a requirement nobody had written down. Because we shipped in
          steps, it costs a revision, not a rewrite, and we&apos;re reshaping the flow around it now.
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
        <p>Branch banking · Bulk payments · Shipped</p>
      </footer>
    </article>
  );
}
