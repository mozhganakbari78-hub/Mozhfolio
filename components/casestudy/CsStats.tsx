/**
 * Big-number stat callouts. Animate in when the parent section reveals
 * (`.cs-reveal.in` / `.cs-vpanel.in`), staggered per card via inline delay.
 */
export default function CsStats({
  items,
}: {
  items: { value: string; label: string }[];
}) {
  return (
    <div className="cs-statrow">
      {items.map((s, i) => (
        <div
          className="cs-stat"
          key={s.label}
          style={{ transitionDelay: `${0.1 + i * 0.12}s` }}
        >
          <div className="v">{s.value}</div>
          <div className="l">{s.label}</div>
        </div>
      ))}
    </div>
  );
}
