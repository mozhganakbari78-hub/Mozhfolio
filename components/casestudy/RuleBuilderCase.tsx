import NextCaseLink from "./NextCaseLink";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import CsGlance from "./CsGlance";
import Mockup from "./Mockup";

export default function RuleBuilderCase() {
  return (
    <article>
      {/* HERO */}
      <header className="cs-hero">
        <div className="cs-hero-main">
          <span className="cs-eyebrow">Case study · IoT · Mobile</span>
          <h1>Rule-based automation for non-technical greenhouse operators</h1>
          <p className="cs-lede">
            Customers asked for scheduled automation. The users asking were the same ones already
            struggling with basic rules. I designed a rule builder that delivers the power of
            conditional logic without exposing the logic itself.
          </p>
        </div>

        <div className="cs-hero-side">
          <CsGlance
            role="Product Designer"
            team="3–4 designers, PM, Developers"
            results={[
              { value: "3-part model", label: "condition, event and schedule replace free-form logic" },
              { value: "Read-back", label: "every condition confirmed in plain language before it runs" },
              { value: "Shipped", label: "live in production, in Persian (RTL)" },
            ]}
          />
        </div>
      </header>

      <hr className="cs-divider" />

      {/* 1 */}
      <section className="cs-reveal">
        <span className="cs-num">Context</span>
        <h2>Remote control is not automation</h2>
        <p>
          The product connects greenhouse sensors and controllers to a mobile app. Operators could
          monitor every hall and switch fans, misters and heaters remotely, with a few fixed default
          rules. But routine operation was still manual: the app provided the control channel, not
          the autonomy.
        </p>
        <p className="cs-quote">
          &ldquo;I have to manually adjust things, like turning the fans on and off throughout the
          day.&rdquo;
        </p>
      </section>

      <section className="cs-shot cs-reveal">
        <Mockup
          src="/projects/iot-greenhouse.webp"
          alt="A temperature and humidity sensor mounted on a post above a crop inside a customer's greenhouse"
          caption="A sensor deployed in a customer's greenhouse"
        />
      </section>

      {/* 2 */}
      <section className="cs-reveal">
        <span className="cs-num">Customer signal</span>
        <h2>Demand for time-based and combined rules</h2>
        <p>
          User interviews on automation surfaced two needs: rules that run on a schedule, and rules
          that combine a schedule with a sensor threshold.
        </p>
        <p className="cs-quote">
          &ldquo;I can trigger actions based on sensor thresholds, but it&apos;s frustrating that I
          can&apos;t combine that with time-based conditions.&rdquo;
        </p>
        <p>
          The team scoped three requirements: scheduled rules, multi-condition rules, and rule
          categories.
        </p>
      </section>

      {/* 3 */}
      <section className="cs-reveal">
        <span className="cs-num">The product risk</span>
        <h2>More capability, fewer people able to use it</h2>
        <p>
          The core users were older and non-technical. Many already struggled with simple threshold
          rules and had asked for templates and step-by-step guidance. Each new requirement added
          expressive power, and moved the product closer to programming. A logic editor would have
          served the few power users and lost the core segment.
        </p>
        <p className="cs-quote">
          The goal: deliver the expressive power of conditional logic to users who will never think
          in conditional logic.
        </p>
      </section>

      {/* 4 */}
      <section className="cs-reveal">
        <span className="cs-num">Decision 1</span>
        <h2>A fixed rule model: condition, event, schedule</h2>
        <p>
          I constrained every rule to three components that match how an operator already thinks:
          what to watch, what should happen, and when. The interface exposes those three blocks and
          nothing else: no operators, variables or device IDs.
        </p>
        <div className="cs-signal">
          <div className="box">
            <div className="lab">What the system runs</div>
            <pre className="cs-code">{`IF temp_avg(orchid_hall) < 15
UNTIL temp_avg(orchid_hall) > 18
THEN heater_1.on()
  REQUIRE fan == ON
  DELAY 30s
WHEN 18:00–06:00`}</pre>
          </div>
          <div className="arrow">&rarr;</div>
          <div className="box">
            <div className="lab">What the operator builds</div>
            <ol className="cs-plain">
              <li><b>Condition</b>The hall&apos;s average temperature drops below 15 °C, until it rises above 18 °C</li>
              <li><b>Event</b>Heater 1 turns on once the fan is running, after 30 seconds</li>
              <li><b>Schedule</b>Every night, 18:00 to 06:00</li>
            </ol>
          </div>
        </div>
        <p className="cs-trade">
          <b>Trade-off:</b> less flexible than a free-form editor, and more steps for power users.
          Accepted, because a wrong rule moves physical equipment.
        </p>
      </section>

      {/* 5 */}
      <section className="cs-reveal">
        <span className="cs-num">Decision 2</span>
        <h2>Defaults first, verification before commit</h2>
        <p>
          No condition starts from a blank field. Each sensor offers preset conditions; a custom one
          is built from three comparators: less than, within a range, or greater than. Before saving,
          the condition is read back in plain language:
        </p>
        <p className="cs-quote">
          &ldquo;If the humidity is less than 20%, and until it exceeds 30%.&rdquo;
        </p>
        <p>
          This moves verification from inspecting fields to reading one sentence, so a mismatch
          between intent and configuration is caught before any equipment acts on it.
        </p>
        <p className="cs-trade">
          <b>Trade-off:</b> presets anchor users to the values we chose, so they need agronomic
          review.
        </p>
      </section>

      {/* 6 */}
      <section className="cs-reveal">
        <span className="cs-num">Decision 3</span>
        <h2>Model the physical system, not just the logic</h2>
        <p>A rule that reads correctly can still misbehave on real equipment. Two behaviours were built into the model:</p>
        <ol className="cs-rules is-plain">
          <li><span><b>Exit thresholds.</b> A condition can start at one value and stop at another, so a reading hovering around a single threshold doesn&apos;t switch a device on and off repeatedly.</span></li>
          <li><span><b>Prerequisites.</b> An event can depend on another device&apos;s state or a delay, in priority order, so a heater never starts before the fan is running.</span></li>
        </ol>
        <p className="cs-trade">
          <b>Trade-off:</b> two more concepts per rule. The plain-language read-back keeps them
          legible.
        </p>
      </section>

      {/* 7 */}
      <section className="cs-reveal">
        <span className="cs-num">Scheduling</span>
        <h2>Closing the original request</h2>
        <p>
          A rule runs always or on a schedule (daily, alternate days or chosen weekdays, within a
          date range), at a fixed time or at an interval with a set duration, and can be limited to
          time windows. Combined with a condition, it delivers what customers asked for: a sensor
          threshold that applies only at certain hours.
        </p>
      </section>

      {/* 8 */}
      <section className="cs-reveal">
        <span className="cs-num">Operational trust</span>
        <h2>Making automation observable and controllable</h2>
        <p>Handing control to software raised three operator questions, each answered in the product:</p>
        <ol className="cs-rules is-plain">
          <li><span><b>Which rules are running?</b> Rules are grouped into categories, such as seasons, with one active per zone. Switching requires an explicit confirmation of what will run.</span></li>
          <li><span><b>Who changed this device?</b> Every controller shows its current control mode: manual, rule-based or scheduled.</span></li>
          <li><span><b>Will I know when it matters?</b> Two alert tiers: a limit sends a notification; an alarm triggers a phone call.</span></li>
        </ol>
        <p className="cs-trade">
          <b>Trade-off:</b> one active category per zone, so mixed periods need a category of their
          own.
        </p>
      </section>

      {/* 9 */}
      <section className="cs-reveal">
        <span className="cs-num">Outcome</span>
        <h2>Shipped to production</h2>
        <p>
          The rule builder is live, in Persian with a right-to-left layout. I left the company
          before post-launch measurement. These are the metrics I would use to evaluate it:
        </p>
        <ol className="cs-rules is-plain">
          <li><span><b>Adoption.</b> Share of accounts with at least one scheduled rule.</span></li>
          <li><span><b>Effort.</b> Manual device switches per week, before and after.</span></li>
          <li><span><b>Conflict.</b> Manual overrides of rule-controlled devices.</span></li>
        </ol>
        <p className="cs-takeaway">
          <span>What I learned</span>
          In automation products, the limit is rarely the engine. It&apos;s the user&apos;s model of
          it. Design the model first, then the interface.
        </p>
      </section>

      <NextCaseLink
        href="/work/reducing-support-friction/"
        caseStudyName="Support that answers users before they open a ticket"
        className="cs-next"
      >
        <span className="l">Next case &rarr;</span>
        <div className="t">
          Support that answers users before they open a ticket{" "}
          <ArrowRightIcon style={{ width: 22, height: 22, display: "inline", verticalAlign: "middle" }} />
        </div>
      </NextCaseLink>

      <footer className="cs-foot">
        <span className="cs-eyebrow">End of case study</span>
        <p>IoT · Greenhouse automation · Live</p>
      </footer>
    </article>
  );
}
