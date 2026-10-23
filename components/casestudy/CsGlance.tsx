import {
  BuildingOffice2Icon,
  UserIcon,
  ComputerDesktopIcon,
  UserGroupIcon,
  CheckCircleIcon,
} from "@heroicons/react/24/outline";

const iconStyle = { width: 16, height: 16, flexShrink: 0 };

/**
 * The case at a glance, in the order a hiring manager asks: where and what
 * (company, role, platform, team), what was wrong, what I did, and what it
 * changed. Results are check rows with the figure in bold, so the outcome
 * reads before any of the story does.
 */
export default function CsGlance({
  company,
  role,
  platform,
  team,
  problem,
  did,
  results,
}: {
  company: string;
  role: string;
  platform: string;
  team: string;
  problem: React.ReactNode;
  did: React.ReactNode;
  results: React.ReactNode[];
}) {
  return (
    <div className="cs-glance">
      <ul className="cs-facts">
        <li>
          <BuildingOffice2Icon style={iconStyle} aria-hidden />
          <span className="sr-only">Company: </span>
          {company}
        </li>
        <li>
          <UserIcon style={iconStyle} aria-hidden />
          <span className="sr-only">My role: </span>
          {role}
        </li>
        <li>
          <ComputerDesktopIcon style={iconStyle} aria-hidden />
          <span className="sr-only">Platform: </span>
          {platform}
        </li>
        <li>
          <UserGroupIcon style={iconStyle} aria-hidden />
          <span className="sr-only">Team: </span>
          {team}
        </li>
      </ul>

      <dl className="cs-pd">
        <div>
          <dt>Problem</dt>
          <dd>{problem}</dd>
        </div>
        <div>
          <dt>What I did</dt>
          <dd>{did}</dd>
        </div>
      </dl>

      <div className="cs-results">
        <h3>Results &amp; impact</h3>
        <ul>
          {results.map((r, i) => (
            <li key={i}>
              <CheckCircleIcon style={{ width: 18, height: 18, flexShrink: 0 }} aria-hidden />
              <span>{r}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
