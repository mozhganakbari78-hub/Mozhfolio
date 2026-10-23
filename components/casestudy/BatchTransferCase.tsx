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
            How I redesigned the tool bank tellers use to pay a company&apos;s salaries in one file,
            so mistakes stay small and wrong transfers get caught.
          </p>
        </div>

        <div className="cs-hero-side">
          <CsGlance
            role="Product Designer, research to UI"
            team="2 designers, Product, Engineering"
            results={[
              <>A bad row is <b>fixed on its own</b>. The rest of the payments keep going.</>,
              <>Wrong recipients are <b>flagged before approval</b>, while money can still be stopped.</>,
              <>Shipped to branches <b>on a fixed deadline</b>.</>,
            ]}
          />
        </div>
      </header>

      <hr className="cs-divider" />

      {/* 1 */}
      <section className="cs-reveal">
        <span className="cs-num">Payday</span>
        <h2>Ali uploads a company&apos;s payroll</h2>
        <p>
          Ali is a bank teller. On payday a client brings a file with dozens of salaries, and waits
          at the counter while Ali uploads it.
        </p>
        <p className="cs-note">Ali is a composite, built from what we saw in branches.</p>
      </section>

      {/* 2 */}
      <section className="cs-reveal">
        <span className="cs-num">One typo</span>
        <h2>One wrong digit sends the whole file back</h2>
        <p>
          A single invalid account number rejected the entire file. Ali had to fix it, upload
          again, and check every row from the start.
        </p>
        <FailureUnit />
      </section>

      {/* 3 */}
      <section className="cs-reveal">
        <span className="cs-num">Worse</span>
        <h2>And a mistake that looked like success</h2>
        <p>
          Another row had a valid account number that belonged to the wrong person. The system said
          &ldquo;successful&rdquo;, and the salary went to a stranger. That was the costlier failure,
          because nobody saw it until it was too late.
        </p>
        <p className="cs-quote">A valid account number isn&apos;t the same as the right person.</p>
      </section>

      {/* 4 */}
      <section className="cs-reveal">
        <span className="cs-num">Change 1</span>
        <h2>Now Ali sees every row before anything is sent</h2>
        <p>
          Each row succeeds or fails on its own. Ali fixes only the bad one, and the other salaries
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
          caption="Ali uploads the file and sees every row, with nothing sent yet"
        />
      </section>

      {/* 5 */}
      <section className="cs-reveal">
        <span className="cs-num">Change 2</span>
        <h2>The name on each account is checked before approval</h2>
        <p>
          The system compares the account holder&apos;s name with the name in the file and shows
          how well they match. A low match is flagged, and the approver checks it with the client
          before any money moves.
        </p>
        <p className="cs-trade">
          <b>Trade-off:</b> flagged rows aren&apos;t rejected automatically. A person decides, which
          is slower but keeps someone accountable.
        </p>
      </section>

      <section className="cs-shot cs-reveal">
        <Mockup
          src="/projects/batch-validation.webp"
          alt="Batch review screen with per-row status and recipient name match before approval"
          caption="Every row shows its status and how well the recipient's name matches"
        />
      </section>

      {/* 6 */}
      <section className="cs-reveal">
        <span className="cs-num">Deadline</span>
        <h2>Shipped in two steps to keep the date</h2>
        <p>
          The launch date couldn&apos;t move. First we shipped row-by-row processing, then added the
          name check on top. Components I had already built in the design system covered the rest
          of the screens.
        </p>
        <p className="cs-trade">
          <b>Trade-off:</b> the name check wasn&apos;t there on day one.
        </p>
      </section>

      {/* 7 */}
      <section className="cs-reveal">
        <span className="cs-num">Result</span>
        <h2>Ali fixes one row, and payroll goes to the right people</h2>
        <p>
          The tool reached branches on time. The first branches also revealed a requirement nobody
          had written down. Because we shipped in steps, it cost a revision, not a rewrite.
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
