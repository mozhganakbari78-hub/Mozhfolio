/**
 * The reasoning behind a decision in two short lines: why this option, and
 * what it cost. Kept beside the decision rather than in a separate grid so
 * the reader never has to match a card back to the screen it explains.
 */
export default function WhyTradeoff({ why, tradeoff }: { why: React.ReactNode; tradeoff: React.ReactNode }) {
  return (
    <div className="cs-why">
      <div>
        <span className="k">Why</span>
        <p>{why}</p>
      </div>
      <div className="is-cost">
        <span className="k">Trade-off</span>
        <p>{tradeoff}</p>
      </div>
    </div>
  );
}
