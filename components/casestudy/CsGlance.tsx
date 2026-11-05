/**
 * The hero's answer to "what was this and what was your part": one line for
 * role and team, then three results as figure cards. The figure is the first
 * thing the eye lands on; the label says what it means.
 */
import GlanceArt, { GlanceDefs, type GlanceArtName } from "./GlanceArt";

export default function CsGlance({
  role,
  team,
  results,
}: {
  role: string;
  team: string;
  results: { value: string; label: string; art?: GlanceArtName }[];
}) {
  return (
    <div className="cs-glance">
      {results.some((r) => r.art) && <GlanceDefs />}
      <p className="cs-roleline">
        <b>My role:</b> {role} <span aria-hidden>·</span> <b>Team:</b> {team}
      </p>
      <ul className="cs-results">
        {results.map((r, i) => (
          <li key={r.value} style={{ animationDelay: `${0.1 + i * 0.1}s` }}>
            <span className="n" aria-hidden>{String(i + 1).padStart(2, "0")}</span>
            <span className="v">{r.value}</span>
            <span className="l">{r.label}</span>
            {r.art && <GlanceArt name={r.art} />}
          </li>
        ))}
      </ul>
    </div>
  );
}
