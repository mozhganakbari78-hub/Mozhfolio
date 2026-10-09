"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const STORE_KEY = "cs-unlocked";

/**
 * Soft gate in front of a case study. The password is checked in the browser,
 * so this keeps the work out of casual reach rather than genuinely secret:
 * the page is a static export and its markup ships with the site.
 *
 * Unlocking once unlocks every gated case for the rest of the session, and a
 * `?k=<password>` link skips the dialog entirely so a single link can go in a
 * resume or an application.
 */
export default function PasswordGate({
  password,
  children,
}: {
  password: string;
  children: React.ReactNode;
}) {
  const [unlocked, setUnlocked] = useState(false);
  const [ready, setReady] = useState(false);
  const [value, setValue] = useState("");
  const [error, setError] = useState(false);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const key = params.get("k") ?? params.get("key");
    const remembered = sessionStorage.getItem(STORE_KEY) === password;
    if (remembered || key === password) {
      sessionStorage.setItem(STORE_KEY, password);
      setUnlocked(true);
    }
    setReady(true);
  }, [password]);

  if (unlocked) return <>{children}</>;

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (value.trim() === password) {
      sessionStorage.setItem(STORE_KEY, password);
      setUnlocked(true);
      setError(false);
    } else {
      setError(true);
    }
  };

  return (
    <div className="pw-gate">
      {/* Held back until the session check has run, so a remembered unlock
          never flashes the dialog on the way to the case study. */}
      <form className="pw-card" onSubmit={submit} hidden={!ready}>
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
