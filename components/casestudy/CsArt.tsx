import {
  QueueListIcon,
  FunnelIcon,
  DocumentMagnifyingGlassIcon,
  ArrowsPointingInIcon,
  ShieldCheckIcon,
  TableCellsIcon,
} from "@heroicons/react/24/outline";

type IconType = React.ComponentType<{ style?: React.CSSProperties }>;

const arts: Record<string, IconType> = {
  tickets: QueueListIcon,
  fork: FunnelIcon,
  read: DocumentMagnifyingGlassIcon,
  merge: ArrowsPointingInIcon,
  shield: ShieldCheckIcon,
  rows: TableCellsIcon,
};

export default function CsArt({ name }: { name: string }) {
  const Icon = arts[name];
  if (!Icon) return null;
  return (
    <span className="cs-art" aria-hidden="true">
      <Icon style={{ width: 32, height: 32 }} />
    </span>
  );
}
