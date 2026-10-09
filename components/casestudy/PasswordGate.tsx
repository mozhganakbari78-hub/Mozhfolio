"use client";

import { useState } from "react";
import Link from "next/link";

/**
 * Soft gate in front of a case study. The code is asked for on every page
 * load, with no share link and nothing remembered between visits.
 *
 * The check runs in the browser, so this keeps the work out of casual reach
 * rather than genuinely secret: the page is a static export and its markup
 * ships with the site.
 */
export default function PasswordGate({
  password,
  children,
}: {
  password: string;
  children: React.ReactNode;
}) {
  const [unlocked, setUnlocked] = useState(false);
  const [value, setValue] = useState("");
  const [error, setError] = useState(false);

  if (unlocked) return <>{children}</>;

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (value.trim() === password) {
      setUnlocked(true);
      setError(false);
    } else {
      setError(true);
    }
  };

  return (
    <div className="pw-gate">
      <form className="pw-card" onSubmit={submit}>
        <span className="pw-eyebrow">Protected case study</span>
        <h1 className="pw-title">This one is behind a password</h1>
        <p className="pw-body">
          The work is covered by a confidentiality agreement, so it is shared on request rather
          than published. Enter the code you were given to read it.
        </p>

        <label className="pw-label" htmlFor="pw-input">
          Access code
        </label>
        <input
          id="pw-input"
          type="password"
          inputMode="numeric"
          autoComplete="off"
          autoFocus
          value={value}
          onChange={(e) => {
            setValue(e.target.value);
            setError(false);
          }}
          className={`pw-input${error ? " is-error" : ""}`}
          aria-invalid={error}
          aria-describedby={error ? "pw-error" : undefined}
        />
        <span id="pw-error" className="pw-error" hidden={!error}>
          That code is not right.
        </span>

        <button type="submit" className="pw-submit">
          Unlock
        </button>

        <Link href="/#projects" className="pw-back">
          Back to all work
        </Link>
      </form>
    </div>
  );
}
