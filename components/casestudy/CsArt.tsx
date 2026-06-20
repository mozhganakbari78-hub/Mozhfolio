/**
 * Small line-art spot illustrations for case-study panels. Same outline
 * language as the hero/capability icons. Used to break up text-heavy panels
 * so a reader isn't facing a wall of paragraphs.
 */
const arts: Record<string, React.ReactNode> = {
  // a queue of tickets funnelling into one
  tickets: (
    <>
      <rect x="6" y="12" width="30" height="18" rx="3" />
      <rect x="12" y="20" width="30" height="18" rx="3" />
      <rect x="18" y="28" width="30" height="18" rx="3" />
      <path d="M24 37h18M24 42h12" strokeDasharray="3 4" />
    </>
  ),
  // two rooms / a fork the user must choose
  fork: (
    <>
      <circle cx="27" cy="12" r="5" />
      <path d="M27 17v9M27 26 13 38M27 26l14 12" />
      <rect x="6" y="38" width="14" height="10" rx="2" />
      <rect x="34" y="38" width="14" height="10" rx="2" />
    </>
  ),
  // reading / magnifier over lines
  read: (
    <>
      <rect x="8" y="8" width="30" height="38" rx="3" />
      <path d="M14 18h18M14 25h18M14 32h12" strokeDasharray="3 4" />
      <circle cx="38" cy="36" r="8" />
      <path d="M44 42l5 5" />
    </>
  ),
  // merge two surfaces into one
  merge: (
    <>
      <rect x="4" y="10" width="18" height="14" rx="2" />
      <rect x="4" y="32" width="18" height="14" rx="2" />
      <path d="M22 17h10v22h-10M22 39h10" strokeDasharray="3 4" />
      <rect x="32" y="20" width="18" height="16" rx="2" />
    </>
  ),
  // shield / verification check
  shield: (
    <>
      <path d="M27 6 44 12v12c0 12-8 18-17 22-9-4-17-10-17-22V12z" />
      <path d="M19 26l6 6 11-12" />
    </>
  ),
  // independent rows
  rows: (
    <>
      <rect x="8" y="10" width="38" height="8" rx="2" />
      <rect x="8" y="23" width="38" height="8" rx="2" />
      <rect x="8" y="36" width="38" height="8" rx="2" />
      <path d="M48 14h4M48 27h4M48 40h4" />
    </>
  ),
};

export default function CsArt({ name }: { name: keyof typeof arts | string }) {
  if (!arts[name]) return null;
  return (
    <span className="cs-art" aria-hidden="true">
      <svg
        width="54"
        height="54"
        viewBox="0 0 56 56"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        {arts[name]}
      </svg>
    </span>
  );
}
