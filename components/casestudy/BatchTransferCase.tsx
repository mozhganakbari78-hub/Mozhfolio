import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function BatchTransferCase() {
  return (
    <article>
      {/* HERO */}
      <header className="cs-hero">
        <span className="cs-eyebrow">Case Study · B2B Banking · Offline Batch Payments</span>
        <h1>
          In this workflow, a wrong transfer doesn&apos;t bounce back.
          <br />
          It just goes to the wrong person.
        </h1>
        <p className="cs-lede">
          Corporate clients who refused to bank online still moved payroll through a branch —
          handing a USB file to an employee who keyed it into a legacy tool. The old system had two
          failure modes that mattered: <em>one bad row killed the whole batch</em>, and there was no
          way to confirm a recipient before the money left. This is how we redesigned both, under a
          hard deadline.
        </p>

        <dl className="cs-meta">
          <div>
            <dt>Role</dt>
            <dd>Product Designer — owned flow, UI &amp; validation logic after joint research</dd>
          </div>
          <div>
            <dt>Team</dt>
            <dd>2 designers</dd>
          </div>
          <div>
            <dt>Domain</dt>
            <dd>Corporate banking · internal branch tool</dd>
          </div>
          <div>
            <dt>Constraint</dt>
            <dd>Fixed, forced deadline</dd>
          </div>
        </dl>
      </header>

      <hr className="cs-divider" />

      {/* 01 CONTEXT */}
      <section className="cs-reveal">
        <span className="cs-num">01 / Context</span>
        <h2>The clients who wouldn&apos;t go online</h2>
        <p>
          Some corporate clients wouldn&apos;t transact through the online platform. Security policy,
          internal approval rules, institutional caution — whatever the reason, they kept using an
          offline process. They brought a payment file on a USB drive into a branch, and a bank
          employee processed the batch manually through an internal tool.
        </p>
        <p>
          A &quot;batch&quot; here is a payroll-style run: one file, sometimes 400 transactions, real
          salaries to real accounts. The bank already had a legacy tool for it. The problem was that
          the tool failed in exactly the moments where money was on the line.
        </p>
      </section>

      {/* 02 PROBLEM */}
      <section className="cs-reveal">
        <span className="cs-num">02 / The problem</span>
        <h2>Two failures that turned a routine batch into a bad afternoon</h2>

        <div className="cs-compare">
          <div className="col legacy">
            <span className="tag">Legacy tool</span>
            <ul>
              <li>One bad row failed the entire batch of 400</li>
              <li>Money already pulled from the source was returned to the bank&apos;s account — the whole run reset</li>
              <li>Only account / IBAN numbers, no recipient name</li>
              <li>A wrong number sent money to the wrong person, with no way to catch it</li>
              <li>Errors were invisible until the very end</li>
            </ul>
          </div>
          <div className="col new">
            <span className="tag">What had to change</span>
            <ul>
              <li>A failed row should fail alone, not the batch</li>
              <li>Recipients should be confirmable before money moves</li>
              <li>The branch should see what&apos;s happening, not guess</li>
              <li>Risk should surface before submission, not after</li>
            </ul>
          </div>
        </div>

        <p>
          The second failure was the dangerous one. In a domestic transfer keyed by IBAN, if a digit
          is wrong, the money doesn&apos;t bounce — it lands in a real, wrong account. The legacy
          tool gave the employee no way to know who they were actually paying until it was too late
          to undo.
        </p>

        <div className="cs-pull">The old system made an error cheap to commit and expensive to discover.</div>
      </section>

      {/* 03 ROLE */}
      <section className="cs-reveal">
        <span className="cs-num">03 / Role &amp; research</span>
        <h2>We watched this happen in branches</h2>
        <p>
          I worked with one other designer. We did the research together — visiting branches in
          person and talking to the employees who actually process these files, under time pressure,
          with live client money. This wasn&apos;t a workflow we could understand from a requirements
          doc.
        </p>
        <p>
          After research, I owned the product design: the flow, wireframes, the stakeholder
          prototype, and the final UI — including the validation and verification logic that became
          the core of the redesign. My teammate and I stayed aligned on direction; the interaction
          decisions for the batch experience were mine.
        </p>
      </section>

      {/* 04a DECISION 01 */}
      <section className="cs-reveal">
        <span className="cs-num">04 / Core decisions</span>
        <h2>Make risk visible before the money moves</h2>

        <div className="cs-mockup cs-reveal">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/projects/batch-upload.png" alt="Batch upload screen — file submission and row preview" />
        </div>

        <div className="cs-decision">
          <div className="dhead">
            <span className="dnum">DECISION 01</span>
            <div className="dtitle">Add a recipient verification step — and a 96% threshold</div>
          </div>
          <div className="dbody">
            <div className="cs-dline">
              <div className="k">The gap</div>
              <div className="v">
                The legacy file only carried account/IBAN numbers. There was no human-readable check
                on who was being paid.
              </div>
            </div>
            <div className="cs-dline chose">
              <div className="k">What I designed</div>
              <div className="v">
                We asked clients to add the <strong>account-holder name</strong> to their file. At
                submission, the branch could opt to have the system verify each row — pulling the
                real registered name for each account and matching it against the name in the file,
                returning a <strong>match percentage</strong>.
              </div>
            </div>
            <div className="cs-dline chose">
              <div className="k">The threshold</div>
              <div className="v">
                Anything below <strong>96% match</strong> was flagged red. The point wasn&apos;t to
                auto-reject — it was to make the senior branch approver see, before confirming, that
                the file said &quot;Mohammad&quot; while the account belonged to &quot;Amir,&quot;
                and chase it down <em>then</em> — not after the money was gone and someone had to
                reconstruct what happened.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 04b DECISION 02 */}
      <section className="cs-reveal">
        <span className="cs-num">04 / Core decisions</span>
        <h2>One broken row should stay one broken row</h2>

        <div className="cs-decision">
          <div className="dhead">
            <span className="dnum">DECISION 02</span>
            <div className="dtitle">Make each row fail on its own</div>
          </div>
          <div className="dbody">
            <div className="cs-dline">
              <div className="k">The old model</div>
              <div className="v">
                One closed account in row 212 reset the entire 400-row batch, returned the money, and
                forced a restart.
              </div>
            </div>
            <div className="cs-dline chose">
              <div className="k">The new model</div>
              <div className="v">
                Each transaction is handled independently. If a row genuinely can&apos;t complete — a
                closed account, for instance — that single row fails and is settled separately
                afterward. The other 399 go through. One broken row is now one row to resolve, not a
                reason to start the afternoon over.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 04b VALIDATION TABLE */}
      <section className="cs-reveal">
        <span className="cs-num">04 / What the approver sees</span>
        <h2>Verification at the moment of approval</h2>

        <div className="cs-mockup cs-reveal">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/projects/batch-validation.png" alt="Pre-submission recipient verification — match percentage review" />
        </div>
        <p>
          These two decisions sit inside a two-step authority model: a branch employee{" "}
          <strong>registers</strong> the request — no money moves yet, the verification result is
          visible — and a <strong>senior branch approver</strong> reviews and confirms. Only then
          does the transfer execute.
        </p>

        {/* validation table artifact */}
        <div className="cs-vt">
          <div className="vthead">
            <div className="t">Pre-submission review — recipient verification</div>
            <div className="s">
              Anonymized recreation of the review state. Below 96% match flags red for the approver.
            </div>
          </div>
          <table>
            <thead>
              <tr>
                <th>Row</th>
                <th>Name in file</th>
                <th>Verified name</th>
                <th>Match</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>001</td>
                <td className="vtname">Sara K.</td>
                <td>Sara K.</td>
                <td className="match" style={{ color: "var(--pass)" }}>100%</td>
                <td><span className="cs-chip ok">Verified</span></td>
              </tr>
              <tr>
                <td>002</td>
                <td className="vtname">Reza M.</td>
                <td>Reza M.</td>
                <td className="match" style={{ color: "var(--pass)" }}>98%</td>
                <td><span className="cs-chip ok">Verified</span></td>
              </tr>
              <tr>
                <td>003</td>
                <td className="vtname">Mohammad T.</td>
                <td>Amir T.</td>
                <td className="match" style={{ color: "var(--fail)" }}>61%</td>
                <td><span className="cs-chip lo">Below 96% — review</span></td>
              </tr>
              <tr>
                <td>004</td>
                <td className="vtname">Niloofar A.</td>
                <td>—</td>
                <td className="match" style={{ color: "var(--fail)" }}>—</td>
                <td><span className="cs-chip x">Account closed</span></td>
              </tr>
              <tr>
                <td>005</td>
                <td className="vtname">Hassan R.</td>
                <td>Hassan R.</td>
                <td className="match" style={{ color: "var(--pass)" }}>100%</td>
                <td><span className="cs-chip ok">Verified</span></td>
              </tr>
            </tbody>
          </table>
          <div className="vtfoot">
            Row 003 won&apos;t be auto-stopped — but the approver now{" "}
            <strong>sees the mismatch before confirming</strong>. Row 004 will fail on its own and be
            settled separately; the other rows proceed. Nothing is hidden, and no single bad row
            resets the run.
          </div>
        </div>
      </section>

      {/* 05 TRADE-OFF */}
      <section className="cs-reveal">
        <span className="cs-num">05 / The trade-off under deadline</span>
        <h2>What I deliberately left for phase two</h2>
        <p>
          The deadline was hard and non-negotiable. The honest risk in that situation is shipping
          something fragile to hit a date. I handled it by sequencing — not by cutting corners on the
          part that had to be safe.
        </p>

        <div className="cs-card">
          <div className="cs-phase">
            <div className="phtag">Phase 1</div>
            <div>
              <h3>Ship the safe core first</h3>
              <p>
                The new system with independent row handling launched first to a limited set of
                branches. Real employees ran real batches and gave feedback. Verification was
                deliberately <strong>not</strong> in this release — it was the most complex,
                error-prone piece, and I didn&apos;t want it on the critical path to the deadline.
              </p>
            </div>
          </div>
          <div className="cs-phase">
            <div className="phtag">Phase 2</div>
            <div>
              <h3>Add the trust layer on real usage</h3>
              <p>
                In the window after launch, we built recipient verification, the match percentage,
                and the 96% threshold — and shaped them against how branches were actually using the
                tool, not against assumptions.
              </p>
            </div>
          </div>
        </div>

        <p>
          I also made verification <strong>optional</strong> per batch. It adds a lookup pass and
          time, and not every file needs it. Leaving the choice with the branch — rather than forcing
          it on every run — kept the tool fast for routine cases while making the check available the
          moment trust mattered. That was a deliberate call, with a real trade-off: it means a
          hurried approver can skip the check, so the design leans on making the verified state the
          obviously safer-looking path.
        </p>
      </section>

      {/* 06 SYSTEM LEVERAGE */}
      <section className="cs-reveal">
        <span className="cs-num">06 / Why it shipped on time</span>
        <h2>The deadline was survivable because the system already existed</h2>
        <p>
          Speed didn&apos;t come from skipping design. It came from systems work done earlier, on
          purpose. Before this project, I&apos;d built a design system for another banking product —
          and I&apos;d built it beyond that one product&apos;s needs, with shared components, tokens,
          and states meant to support other internal tools.
        </p>
        <p>
          That decision paid off here. Instead of drawing every screen from zero, I assembled the
          flow from an existing foundation and spent my actual time on the workflow logic — the
          validation model, the verification states, the edge cases. The reused pieces:
        </p>
        <div className="cs-dslist">
          {["data table", "status chips", "upload states", "empty / error states", "review footer", "confirmation modal", "tokens"].map((d) => (
            <span key={d}>{d}</span>
          ))}
        </div>
        <p style={{ marginTop: 20 }}>
          Systems work is invisible until the moment it saves you. A forced timeline is usually where
          quality gets fragile. This one held because the foundation was already there when the
          pressure arrived.
        </p>
      </section>

      {/* 07 OUTCOME */}
      <section className="cs-reveal">
        <span className="cs-num">07 / Outcome</span>
        <h2>Where this honestly stands</h2>
        <div className="cs-status">
          <span className="cs-eyebrow">Status — launched, limited rollout</span>
          <h3>Live in branches. No instrumented before/after data.</h3>
          <p>
            The tool launched through a controlled rollout and is in real use. The bank didn&apos;t
            share operational data with us, and I won&apos;t turn observation into fake precision.
            What I can say plainly: the old system&apos;s worst failure — one invalid row resetting
            an entire batch and returning the money — no longer exists in the workflow. And a wrong
            recipient is now visible before a transfer is confirmed, not discovered after.
          </p>
          <div className="metrics">
            If I had the data, the redesign should be judged on: <code>failed-batch rate</code>{" "}
            <code>re-uploads per batch</code> <code>time to resolve a bad row</code>{" "}
            <code>wrong-recipient incidents</code> <code>branch support tickets</code>
          </div>
        </div>
      </section>

      {/* 08a REFLECTION */}
      <section className="cs-reveal">
        <span className="cs-num">08 / Reflection</span>
        <h2>What I&apos;d carry forward</h2>
        <div className="cs-reflect">
          <h3>The real risk wasn&apos;t the broken batch — it was the silent wrong transfer</h3>
          <p>
            Killing the all-or-nothing model removed wasted afternoons. But the verification layer
            addressed something worse: money quietly going to the wrong account with no one noticing.
            The most valuable decision was the one that made an invisible risk visible.
          </p>
        </div>
        <div className="cs-divider" style={{ margin: "22px 0" }} />
        <div className="cs-reflect">
          <h3>Sequencing is a design decision</h3>
          <p>
            Under a forced timeline, deciding what <em>not</em> to ship first was as much a design
            call as the UI. Putting the safe core in phase one and the complex trust layer in phase
            two is the choice I&apos;m most confident was right.
          </p>
        </div>
      </section>

      {/* 08b REFLECTION cont. */}
      <section className="cs-reveal">
        <span className="cs-num">08 / Reflection</span>
        <h2>One thing I&apos;d do differently</h2>
        <div className="cs-reflect">
          <h3>I&apos;d still push for one structured test before launch</h3>
          <p>
            The controlled rollout caught issues — but it caught them in production. On a banking
            workflow, some of those would have been cheaper to find a week earlier. Next time I&apos;d
            protect at least one structured session even inside a compressed schedule.
          </p>
        </div>
      </section>

      <Link href="/work/design-system" className="cs-next">
        <span className="l">Next case →</span>
        <div className="t">
          Design System for a Live Enterprise Platform{" "}
          <ArrowRight size={22} style={{ display: "inline", verticalAlign: "middle" }} />
        </div>
      </Link>

      <footer className="cs-foot">
        <span className="cs-eyebrow">End of case study</span>
        <p>Corporate banking · Offline batch payments · Launched, limited rollout</p>
      </footer>
    </article>
  );
}
