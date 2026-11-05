import {
  ArrowTrendingUpIcon,
  ChatBubbleLeftRightIcon,
  DocumentMagnifyingGlassIcon,
  DocumentTextIcon,
  EyeIcon,
  InboxIcon,
  ListBulletIcon,
  PresentationChartLineIcon,
  RectangleStackIcon,
  RocketLaunchIcon,
  ShieldCheckIcon,
  SignalIcon,
  SparklesIcon,
  Squares2X2Icon,
  SwatchIcon,
  TableCellsIcon,
  TicketIcon,
  UserGroupIcon,
} from "@heroicons/react/24/solid";

const ICONS = {
  ArrowTrendingUp: ArrowTrendingUpIcon,
  ChatBubbleLeftRight: ChatBubbleLeftRightIcon,
  DocumentMagnifyingGlass: DocumentMagnifyingGlassIcon,
  DocumentText: DocumentTextIcon,
  Eye: EyeIcon,
  Inbox: InboxIcon,
  ListBullet: ListBulletIcon,
  PresentationChartLine: PresentationChartLineIcon,
  RectangleStack: RectangleStackIcon,
  RocketLaunch: RocketLaunchIcon,
  ShieldCheck: ShieldCheckIcon,
  Signal: SignalIcon,
  Sparkles: SparklesIcon,
  Squares2X2: Squares2X2Icon,
  Swatch: SwatchIcon,
  TableCells: TableCellsIcon,
  Ticket: TicketIcon,
  UserGroup: UserGroupIcon,
};

export type GlanceIcon = keyof typeof ICONS;

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
  results: { value: string; label: string; icon?: GlanceIcon }[];
}) {
  return (
    <div className="cs-glance">
      <p className="cs-roleline">
        <b>My role:</b> {role} <span aria-hidden>·</span> <b>Team:</b> {team}
      </p>
      <ul className="cs-results">
        {results.map((r, i) => {
          const Icon = r.icon ? ICONS[r.icon] : null;
          return (
          <li key={r.value} style={{ animationDelay: `${0.1 + i * 0.1}s` }}>
            {Icon && <Icon className="ic" aria-hidden />}
            <span className="dot" aria-hidden />
            <span className="v">{r.value}</span>
            <span className="l">{r.label}</span>
          </li>
          );
        })}
      </ul>
    </div>
  );
}
