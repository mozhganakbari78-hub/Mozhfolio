/**
 * The case at a glance: problem, what I did, impact. Sits in the hero so a
 * reader who reads nothing else still knows what the project was and what
 * my part in it was.
 */
export default function CsGlance({
  problem,
  did,
  impact,
}: {
  problem: React.ReactNode;
  did: React.ReactNode;
  impact: React.ReactNode;
}) {
  return (
    <dl className="cs-glance">
      <div>
        <dt>Problem</dt>
        <dd>{problem}</dd>
      </div>
      <div>
        <dt>What I did</dt>
        <dd>{did}</dd>
      </div>
      <div className="is-impact">
        <dt>Impact</dt>
        <dd>{impact}</dd>
      </div>
    </dl>
  );
}
