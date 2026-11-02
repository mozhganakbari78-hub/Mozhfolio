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
          <h1>Automation rules for people who don&apos;t write code</h1>
          <p className="cs-lede">
            Greenhouse managers asked for rules that run on a clock. Many of them were already
            struggling with the simple rules they had. I designed the rule builder so they could
            write if-else logic without ever seeing it.
          </p>
        </div>

        <div className="cs-hero-side">
          <CsGlance
            role="Product Designer, owned the rule builder's logic and flow"
            team="3–4 designers, PM, Developers"
            results={[
              { value: "3 blocks", label: "every rule is a condition, an event and a time" },
              { value: "1 sentence", label: "each condition read back in plain words before saving" },
              { value: "Live", label: "shipped in Persian, right to left" },
            ]}
          />
        </div>
      </header>

      <hr className="cs-divider" />

      {/* 1 */}
      <section className="cs-reveal">
        <span className="cs-num">The starting point</span>
        <h2>The app could flip the switch. It couldn&apos;t remember to</h2>
        <p>
          The product puts sensors and controllers in greenhouses and connects them to an app.
          Managers could see every hall&apos;s temperature and humidity and switch a fan, a mister or a
          heater from their phone. But the day still ran on memory: fans on, fans off, every couple
          of hours.
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
          caption="A sensor in a customer's greenhouse"
        />
      </section>

      {/* 2 */}
      <section className="cs-reveal">
        <span className="cs-num">The ask</span>
        <h2>The request sounded small: add a timer</h2>
        <p>
          In interviews about automation, users wanted rules that run on a clock, and rules that
          mix a clock with a sensor reading.
        </p>
        <p className="cs-quote">
          &ldquo;I can trigger actions based on sensor thresholds, but it&apos;s frustrating that I
          can&apos;t combine that with time-based conditions.&rdquo;
        </p>
        <p>
          The team turned this into three requirements: timer rules, rules with several conditions,
          and rule categories.
        </p>
      </section>

      {/* 3 */}
      <section className="cs-reveal">
        <span className="cs-num">The challenge</span>
        <h2>The people asking for more rules were struggling with the ones they had</h2>
        <p>
          Many users were older and not technical. Even the existing threshold rules were hard for
          them, and they asked for templates and step-by-step help. Every new requirement made
          rules more powerful, and more like programming: a timer plus two conditions plus
          &ldquo;only if the fan is on&rdquo; is an if-else statement.
        </p>
        <p className="cs-quote">
          How do you let someone write an if-else without knowing they&apos;re writing one?
        </p>
      </section>

      {/* 4 */}
      <section className="cs-reveal">
        <span className="cs-num">Decision 1</span>
        <h2>Hide the logic behind three plain questions</h2>
        <p>
          Every rule is logic underneath. I split it into the three questions anyone asks without
          thinking about code: what should I watch, what should happen, and when. The rule screen
          shows those three blocks and nothing else. Nobody types an operator or a sensor ID.
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
            <div className="lab">What the user builds</div>
            <ol className="cs-plain">
              <li><b>Condition</b>The hall&apos;s average temperature drops below 15 °C, until it rises above 18 °C</li>
              <li><b>Event</b>Heater 1 turns on, once the fan is running, after 30 seconds</li>
              <li><b>Time</b>Every night, 18:00 to 06:00</li>
            </ol>
          </div>
        </div>
        <p className="cs-trade">
          <b>Trade-off:</b> an experienced user taps through more sheets than one form would need.
          I chose fewer mistakes over fewer taps.
        </p>
      </section>

      <section className="cs-shot cs-reveal">
        <Mockup
          src="/projects/iot-builder.webp"
          alt="Three screens in Persian: a new rule with a condition, an event and an execution time; the add condition sheet; and an event with its prerequisites"
          caption="The shipped builder (Persian): a rule, a condition, and an event"
        />
      </section>

      {/* 5 */}
      <section className="cs-reveal">
        <span className="cs-num">Decision 2</span>
        <h2>No blank fields, and every condition read back as a sentence</h2>
        <p>
          Users had asked for templates, so a condition never starts empty. Picking a sensor offers
          ready-made conditions; a custom one is built from three choices: less than, in the range
          of, or greater than. Before saving, the sheet reads it back:
        </p>
        <p className="cs-quote">
          &ldquo;If the humidity is less than 20%, and until it exceeds 30%.&rdquo;
        </p>
        <p>
          One sentence is easier to check than a set of fields. If it doesn&apos;t say what they
          meant, they see it before the rule touches a machine.
        </p>
        <p className="cs-trade">
          <b>Trade-off:</b> presets steer people toward the values we chose, so the presets need
          someone who knows the crops.
        </p>
      </section>

      <section className="cs-shot cs-reveal">
        <Mockup
          src="/projects/Screen14.webp"
          alt="Choose condition screen with preset humidity conditions, and the add new condition sheet with less than, in the range of and greater than, and a condition preview sentence"
          caption="Presets first, then a custom condition with its preview sentence"
        />
      </section>

      {/* 6 */}
      <section className="cs-reveal">
        <span className="cs-num">Decision 3</span>
        <h2>Design for real machines, not just for the rule</h2>
        <p>A rule can read well and still behave badly in a greenhouse. Two things needed handling:</p>
        <ol className="cs-rules is-plain">
          <li>Readings hover around a line. So a condition can carry an exit: start at one value, stop at another, the &ldquo;until&rdquo; in the sentence above.</li>
          <li>Machines depend on each other. A heater shouldn&apos;t start before the fan is running, so an event can carry prerequisites in priority order: another machine&apos;s state, or a delay.</li>
        </ol>
        <p className="cs-trade">
          <b>Trade-off:</b> one more thing to understand on each rule. The read-back sentence keeps
          it readable.
        </p>
      </section>

      <section className="cs-shot cs-reveal">
        <Mockup
          src="/projects/iot-requirements.webp"
          alt="Add prerequisite sheets in Persian: choose a controller state or a delay, pick a controller, and set it on, off or to an amount"
          caption="Adding a prerequisite (Persian): another machine's state, or a delay"
        />
      </section>

      {/* 7 */}
      <section className="cs-reveal">
        <span className="cs-num">Back to the ask</span>
        <h2>Fans every two hours, on their own</h2>
        <p>
          The request that started it ended up as one screen. A rule runs always or on a schedule,
          at a set time or at an interval, like every two hours for five minutes, and can be
          limited to time windows. Put a condition in front of it, and a sensor threshold only
          counts at certain hours.
        </p>
      </section>

      <section className="cs-shot cs-reveal">
        <Mockup
          src="/projects/iot-schedule.webp"
          alt="Rule schedule screen in Persian: chosen weekdays, start and end dates, every two hours with a five-minute duration, and two time windows"
          caption="The schedule (Persian): every two hours, within set windows"
        />
      </section>

      {/* 8 */}
      <section className="cs-reveal">
        <span className="cs-num">Trust</span>
        <h2>Handing control to software raised new questions</h2>
        <ol className="cs-rules is-plain">
          <li><b>Which rules are running?</b> Rules live in categories, like Summer, and one is active per zone. Switching asks for confirmation in plain words.</li>
          <li><b>Who switched my fan?</b> Every controller shows its mode: manual, by rule, or by time.</li>
          <li><b>Will I hear when it matters?</b> A limit sends a quiet notification; an alarm calls the manager&apos;s phone.</li>
        </ol>
        <p className="cs-trade">
          <b>Trade-off:</b> one active category per zone, so a week that mixes two seasons needs a
          category of its own.
        </p>
      </section>

      <section className="cs-shot cs-reveal">
        <Mockup
          src="/projects/iot-category-edit.webp"
          alt="Create and edit rule category screens in Persian, with rule cards to select and confirmation dialogs"
          caption="Rule categories (Persian): one active set per zone"
        />
      </section>

      {/* 9 */}
      <section className="cs-reveal">
        <span className="cs-num">Now</span>
        <h2>It shipped, and I left before I could measure it</h2>
        <p>
          The rule builder is live, in Persian, right to left. Had I stayed, I&apos;d have measured
          how many users set up a timed rule, how many manual switches it saved each week, and how
          often people overrode a rule by hand.
        </p>
        <p className="cs-takeaway">
          <span>What I learned</span>
          The hard part of automation wasn&apos;t the logic. It was letting people use logic without
          thinking like a programmer.
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
