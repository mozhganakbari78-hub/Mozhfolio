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
            role="Product Designer, owned simplifying the rules"
            team="3–4 designers, PM, Developers"
            results={[
              { value: "If → Then", label: "every rule reads as one sentence: a condition, then an event" },
              { value: "2 changes", label: "from testing with operators: live readings and timed waits" },
              { value: "Shipped", label: "live in production, in Persian (RTL)" },
            ]}
          />
        </div>
      </header>

      <hr className="cs-divider" />

      <section className="cs-shot cs-reveal">
        <Mockup
          src="/projects/iot-hand.webp"
          alt="A hand holding a phone showing the greenhouse app's green launch screen"
          caption="The greenhouse, in your hand"
        />
      </section>

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
          The core users were older, non-technical, and not comfortable with technology in general.
          Many already struggled with simple threshold rules and had asked for templates and
          step-by-step guidance. Each new requirement added
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
        <h2>A rule is one sentence: if this, then that</h2>
        <p>
          A new rule opens with two blocks, Condition and Event, each with a hint that completes the
          sentence: &ldquo;if the sensor meets this condition&hellip;&rdquo; and &ldquo;&hellip;this
          happens to the controller.&rdquo; Execution time sits below them and defaults to Always.
          Save stays disabled until the sentence is complete. There are no operators, variables or
          device IDs anywhere in the flow.
        </p>
        <div className="cs-signal">
          <div className="box">
            <div className="lab">What the system runs</div>
            <pre className="cs-code">{`IF humidity(orchid_hall) > 30
THEN heater_1.set(40%)
  REQUIRE circulation_fan == ON
  REQUIRE vent == 10%
  DELAY 30s
WHEN always`}</pre>
          </div>
          <div className="arrow">&rarr;</div>
          <div className="box">
            <div className="lab">What the operator builds</div>
            <ol className="cs-plain">
              <li><b>Condition</b>If the air humidity rises above 30%</li>
              <li><b>Event</b>The heater runs at 40%, after the circulation fan is on, the vent is open 10% and 30 seconds have passed</li>
              <li><b>Execution time</b>Always</li>
            </ol>
          </div>
        </div>
        <p className="cs-trade">
          <b>Trade-off:</b> less flexible than a free-form editor, and more taps for power users.
          Accepted, because a wrong rule moves physical equipment.
        </p>
      </section>

      <section className="cs-shot cs-reveal">
        <Mockup
          src="/projects/iot-flow-rule.webp"
          alt="The new rule screen in Persian: Condition and Event blocks with sentence hints and execution time set to Always, then the same rule with a humidity condition and the note that all conditions must be met together"
          caption="A rule is built as one sentence. Save stays off until it is complete"
        />
      </section>

      {/* 5 */}
      <section className="cs-reveal">
        <span className="cs-num">Decision 2</span>
        <h2>Start from what&apos;s real, never from a blank field</h2>
        <p>Every choice in the flow starts from suggestions grounded in the operator&apos;s own greenhouse:</p>
        <ol className="cs-rules is-plain">
          <li><span><b>Source.</b> A condition watches one specific sensor or the hall average, so a single sensor near a door doesn&apos;t have to decide alone.</span></li>
          <li><span><b>Live readings.</b> Suggested sensors show their current value (&ldquo;air humidity, now 65%&rdquo;), so thresholds are set against the actual state of the hall. Added after testing.</span></li>
          <li><span><b>Ready-made conditions.</b> Each sensor offers presets, including one with an exit: &ldquo;if it drops below 20%, until it reaches 30%&rdquo;. A custom condition covers the rest.</span></li>
          <li><span><b>Suggested controllers.</b> The event starts the same way: the likely devices first, then the full list.</span></li>
        </ol>
        <p className="cs-trade">
          <b>Trade-off:</b> presets anchor operators to the values we chose, so they need agronomic
          review.
        </p>
      </section>

      <section className="cs-shot cs-reveal">
        <Mockup
          src="/projects/iot-flow-condition.webp"
          alt="Three screens in Persian: choosing a specific sensor or the hall average, a sensor picker showing live readings, and preset humidity conditions with a custom option"
          caption="Sensor or hall average, live readings, then ready-made conditions"
        />
      </section>

      {/* 6 */}
      <section className="cs-reveal">
        <span className="cs-num">Decision 3</span>
        <h2>Add complexity in the operator&apos;s own words</h2>
        <p>
          Power is added one step at a time, and every step is phrased as the question an operator
          would ask:
        </p>
        <ol className="cs-rules is-plain">
          <li><span><b>&ldquo;What should the controller do?&rdquo;</b> Turn on, turn off, or run at a specific value, such as 40%.</span></li>
          <li><span><b>&ldquo;Before running, in this order.&rdquo;</b> Prerequisites: another controller&apos;s state, or a wait (&ldquo;How long should the heater wait?&rdquo;, added after testing), reordered by dragging.</span></li>
          <li><span><b>&ldquo;All conditions must be met together.&rdquo;</b> Additional conditions combine in one way only, and the screen says so.</span></li>
        </ol>
        <p className="cs-trade">
          <b>Trade-off:</b> with a single way to combine conditions, either/or logic takes two
          rules. A smaller model the operator can trust was worth more.
        </p>
      </section>

      <section className="cs-shot cs-reveal">
        <Mockup
          src="/projects/iot-flow-event.webp"
          alt="Three screens in Persian: the heater event with ordered prerequisites and on, off or specific value; adding a controller prerequisite; and adding a timed wait"
          caption="The event: what the controller should do, and what must happen first, in order"
        />
      </section>

      {/* 7 */}
      <section className="cs-reveal">
        <span className="cs-num">Decision 4</span>
        <h2>Simple by default, detailed on demand</h2>
        <p>
          Execution time defaults to Always, so most rules never touch scheduling. Choosing
          Selective reveals the rest: every day, alternate days or chosen weekdays; optional start
          and end dates; a fixed time or an interval, such as every two hours staying on for 25
          minutes; and active time windows, such as 08:00–12:00 and 13:00–14:30. Combined with a
          condition, it delivers what customers asked for: a sensor threshold that applies only at
          certain hours.
        </p>
        <p className="cs-trade">
          <b>Trade-off:</b> the full schedule is one long screen, shown only to those who opt in.
        </p>
      </section>

      <section className="cs-shot cs-reveal">
        <Mockup
          src="/projects/iot-flow-schedule.webp"
          alt="Schedule screens in Persian: Always selected by default, then Selective revealing days, start date, interval, on-duration and active time windows"
          caption="Always by default; the full schedule appears only when Selective is chosen"
        />
      </section>

      {/* 7b */}
      <section className="cs-reveal">
        <span className="cs-num">Testing</span>
        <h2>Two changes came from testing with operators</h2>
        <p>We tested the flow with a group of operators. Two things they needed were missing:</p>
        <ol className="cs-rules is-plain">
          <li><span><b>The current state.</b> Choosing a sensor showed only its name. Operators wanted to see what it reads right now before setting a threshold, so every sensor card now shows its live value.</span></li>
          <li><span><b>A wait between devices.</b> Prerequisites only covered another controller&apos;s state. Operators needed time between machines, so a timed wait became a second prerequisite type.</span></li>
        </ol>
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

      <section className="cs-shot is-small cs-reveal">
        <Mockup
          src="/projects/iot-dashboard.webp"
          alt="The greenhouse dashboard in Persian: connection status, active and inactive sensors and controllers, and the greenhouse's zones"
          caption="The dashboard: connection status, what is active or offline, and every zone at a glance"
        />
      </section>

      {/* 9 */}
      <section className="cs-reveal">
        <span className="cs-num">Outcome</span>
        <h2>Shipped to production</h2>
        <p>
          The rule builder is live, in Persian with a right-to-left layout, on a platform that
          runs real greenhouses every day. The figures below are taken from the company&apos;s website:
        </p>
        <ul className="cs-results is-four">
          <li><span className="v">31+</span><span className="l">active users</span></li>
          <li><span className="v">65+</span><span className="l">active controllers</span></li>
          <li><span className="v">28M+</span><span className="l">messages sent to the server</span></li>
          <li><span className="v">99.97%</span><span className="l">system uptime, as stated on the company&apos;s website</span></li>
        </ul>
        <p className="cs-source">Source: the company&apos;s public website. Platform-wide figures, not my own measurements.</p>
        <p>
          I left before post-launch measurement of the rule builder itself.
          These are the metrics I would use:
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
