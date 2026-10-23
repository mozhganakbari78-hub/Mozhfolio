import { CheckCircleIcon } from "@heroicons/react/24/outline";

/**
 * The hero's answer to "what was this and what was your part": one line for
 * role and team, then the results as check rows with the figure in bold.
 * Deliberately nothing else: the story below carries the rest.
 */
export default function CsGlance({
  role,
  team,
  results,
}: {
  role: string;
  team: string;
  results: React.ReactNode[];
}) {
  return (
    <div className="cs-glance">
      <p className="cs-roleline">
        <b>My role:</b> {role} <span aria-hidden>·</span> <b>Team:</b> {team}
      </p>
      <ul className="cs-results">
        {results.map((r, i) => (
          <li key={i}>
            <CheckCircleIcon style={{ width: 18, height: 18, flexShrink: 0 }} aria-hidden />
            <span>{r}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
