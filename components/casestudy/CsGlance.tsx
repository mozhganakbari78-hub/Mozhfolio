/**
 * The hero's answer to "what was this and what was your part": one line for
 * role and team, then three results as figure cards. The figure is the first
 * thing the eye lands on; the label says what it means.
 */
export default function CsGlance({
  role,
  team,
  results,
}: {
  role: string;
  team: string;
  results: { value: string; label: string }[];
}) {
  return (
    <div className="cs-glance">
      <p className="cs-roleline">
        <b>My role:</b> {role} <span aria-hidden>·</span> <b>Team:</b> {team}
      </p>
      <ul className="cs-results">
        {results.map((r, i) => (
          <li key={r.value} style={{ animationDelay: `${0.1 + i * 0.1}s` }}>
            <span className="v">{r.value}</span>
            <span className="l">{r.label}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
