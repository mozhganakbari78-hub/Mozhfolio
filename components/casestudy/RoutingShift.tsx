"use client";

import { motion } from "framer-motion";

type Tone = "muted" | "accent" | "danger";

type Step = { t: string; tone?: Tone };

/**
 * The core shift of the case: who makes the routing decision.
 * Before, the user has to guess between two destinations. After, the
 * product surfaces the answer inside the moment of uncertainty.
 *
 * Laid out as a stepped rail rather than a flow chart: at panel width the
 * chart's arrows wrapped and its connector elbows ended up pointing at
 * nothing. A single vertical rail survives any width.
 * Reveals once on scroll — no looping animation (keeps scroll cheap).
 */
export default function RoutingShift() {
  const reveal = (delay: number) => ({
    initial: { opacity: 0, y: 10 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.2 },
    transition: { delay, duration: 0.45, ease: [0.16, 1, 0.3, 1] as const },
  });

  const Column = ({
    tag,
    tagColor,
    who,
    steps,
    outcomes,
    note,
    after,
    delay,
  }: {
    tag: string;
    tagColor: string;
    who: string;
    steps: Step[];
    outcomes: Step[];
    note: React.ReactNode;
    after?: boolean;
    delay: number;
  }) => (
    <motion.div className={`cs-routing-col${after ? " is-after" : ""}`} {...reveal(delay)}>
      <div className="cs-routing-head">
        <span className="tag" style={{ color: tagColor }}>
          {tag}
        </span>
        <span className="who">{who}</span>
      </div>

      <ol className="cs-routing-steps">
        {steps.map((s) => (
          <li key={s.t} className={`step is-${s.tone ?? "muted"}`}>
            {s.t}
          </li>
        ))}
        <li className="step is-fork">
          <span className="forklabel">Then, either</span>
          <div className="outcomes">
            {outcomes.map((o) => (
              <span key={o.t} className={`outcome is-${o.tone ?? "muted"}`}>
                {o.t}
              </span>
            ))}
          </div>
        </li>
      </ol>

      <p className="cs-routing-note">{note}</p>
    </motion.div>
  );

  return (
    <div className="cs-routing">
      <Column
        delay={0}
        tag="Before"
        tagColor="#e8836e"
        who="The user makes the routing decision"
        steps={[{ t: "User has a question" }, { t: "User decides where to go", tone: "danger" }]}
        outcomes={[{ t: "Browse the FAQ" }, { t: "Create a ticket" }]}
        note={
          <>
            A choice made <em>before</em> the user understands their own problem.
          </>
        }
      />

      <Column
        delay={0.15}
        after
        tag="After"
        tagColor="var(--accent-ink)"
        who="The system helps make the decision"
        steps={[
          { t: "User describes the problem", tone: "accent" },
          { t: "Relevant answers appear in place", tone: "accent" },
        ]}
        outcomes={[
          { t: "Resolved, back to the task", tone: "accent" },
          { t: "Not resolved, ticket carries the context" },
        ]}
        note={
          <>
            Support content surfaces <em>inside</em> the moment of uncertainty.
          </>
        }
      />
    </div>
  );
}
