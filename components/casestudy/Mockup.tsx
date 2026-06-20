/**
 * Case-study mockup, shown full inside its own panel. Reveals on horizontal
 * scroll (the `.cs-mockup` class is observed by Editorial).
 */
export default function Mockup({
  src,
  alt,
  caption,
}: {
  src: string;
  alt: string;
  caption?: string;
}) {
  const url = `${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}${src}`;
  return (
    <>
      <div className="cs-mockup">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={url} alt={alt} />
      </div>
      {caption ? <div className="cs-mockup-caption">{caption}</div> : null}
    </>
  );
}
