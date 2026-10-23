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
            Some companies won&apos;t pay online, so they bring a cheque and an Excel file to the
            branch. I redesigned the tool bank staff use to process those files: safer, faster, and
            with mistakes caught before money moves.
          </p>
        </div>

        <div className="cs-hero-side">
          <CsGlance
            role="Product Designer, research to UI"
            team="2 designers, Product, Engineering"
            results={[
              { value: "1 row", label: "a bad row is fixed on its own; the rest keep going" },
              { value: "Verified", label: "each recipient's account ownership checked before approval" },
              { value: "Next", label: "after the branch pilot, removing the branch visit itself" },
            ]}
          />
        </div>
      </header>

      <hr className="cs-divider" />

      {/* 1 */}
      <section className="cs-reveal">
        <span className="cs-num">The starting point</span>
        <h2>Companies that won&apos;t pay online</h2>
        <p>
          For security reasons or their own policies, some corporate clients refuse online
          transactions. They pay salaries and suppliers the traditional way: a cheque and an Excel
          file, handed to the bank. Branch staff then process the file in an old, frustrating
          system.
        </p>
      </section>

      {/* 2 */}
      <section className="cs-reveal">
        <span className="cs-num">What we found</span>
        <h2>The old system made every mistake expensive</h2>
        <p>Talking to branch staff and walking through real files, the same problems kept coming up:</p>
        <ol className="cs-rules is-plain">
          <li>One failed transaction rejected the whole file.</li>
          <li>Errors showed up late, so staff found out after the fact and redid the work by hand.</li>
          <li>No clear validation rules, so the same mistakes kept slipping through.</li>
          <li>No check on who owns the account, so a valid number could pay the wrong person.</li>
        </ol>
      </section>

      {/* 3 */}
      <section className="cs-reveal">
        <span className="cs-num">The challenge</span>
        <h2>Make it safe, without forcing it online</h2>
        <p>
          The process had to stay offline and meet strict banking security rules. It had to fit
          the cheques and Excel files clients already use. And it still had to be quick and clear
          for branch staff.
        </p>
      </section>

      {/* 4 */}
      <section className="cs-reveal">
        <span className="cs-num">Decision 1</span>
        <h2>Check every row up front, and let each one fail on its own</h2>
        <p>
          The file is validated as soon as it&apos;s uploaded, against clear rules. A bad row is
          flagged and fixed on its own; the rest of the payments keep going.
        </p>
        <p className="cs-trade">
          <b>Trade-off:</b> engineering tracks a status for every row, not just one for the file.
        </p>
        <FailureUnit />
      </section>

      <section className="cs-shot cs-reveal">
        <Mockup
          src="/projects/batch-upload.webp"
          alt="Batch upload screen with file details and a per-row preview before anything is committed"
          caption="Upload: the file is checked right away, before anything is sent"
        />
      </section>

      {/* 5 */}
      <section className="cs-reveal">
        <span className="cs-num">Decision 2</span>
        <h2>Verify who owns each account before approval</h2>
        <p>
          The system looks up the registered owner of each account, compares it with the name in
          the file, and shows how well they match. A low match is flagged, not rejected: the
          approver checks it with the client before money moves.
        </p>
        <p className="cs-trade">
          <b>Trade-off:</b> no automatic rejection. A person decides, which is slower but keeps
          someone accountable for the money.
        </p>
      </section>

      <section className="cs-shot cs-reveal">
        <Mockup
          src="/projects/batch-validation.webp"
          alt="Validation screen showing each row with its verified account owner and match percentage"
          caption="Validation: each row shows the verified account owner and how well it matches"
        />
      </section>

      {/* 6 */}
      <section className="cs-reveal">
        <span className="cs-num">Testing</span>
        <h2>Two things changed after testing</h2>
        <p>We tested the flow with branch staff. Two findings changed the design:</p>
        <ol className="cs-rules is-plain">
          <li>Staff wanted to know where a batch stood, so we added a step-by-step progress tracker with clear statuses. The batch history now shows each batch&apos;s current status, and the status of every row in it, meaning every single payment.</li>
          <li>Vague error messages confused them, so we made each one specific, tied to its row, and visually distinct.</li>
        </ol>
      </section>

      {/* 7 */}
      <section className="cs-reveal">
        <span className="cs-num">Now</span>
        <h2>The pilot showed a bigger opportunity</h2>
        <p>
          We ran a limited test in a few branches. It showed we could go further and remove the trip
          to the branch altogether: a separate system where clients upload the file themselves,
          connected to this one. That&apos;s what we&apos;re building now.
        </p>
        <p className="cs-takeaway">
          <span>What I learned</span>
          Fixing the tool showed us the real opportunity: not a better branch visit, but no branch
          visit at all.
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
        <p>Branch banking · Bulk payments · Pilot</p>
      </footer>
    </article>
  );
}
