/**
 * The payoff, stated in the hero. Every case used to save its outcome for the
 * last panels, which a reader with five minutes never reaches; this puts the
 * result next to the problem so they know why the rest is worth reading.
 *
 * Values are short and may be phrases rather than numbers: where a case has no
 * shareable figure, the honest version is a plain statement, not a fake stat.
 */
export default function CsImpact({
  items,
}: {
  items: { value: string; label: string }[];
}) {
  return (
    <div className="cs-impact" aria-label="Impact">
      <span className="cs-impact-k">
        <span className="dot" aria-hidden />
        Impact
      </span>
      <ul>
        {items.map((it, i) => (
          <li key={it.value} style={{ transitionDelay: `${0.15 + i * 0.1}s` }}>
            <span className="v">{it.value}</span>
            <span className="l">{it.label}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
