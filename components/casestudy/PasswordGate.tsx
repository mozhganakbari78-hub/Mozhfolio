"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { trackEvent } from "@/lib/gtag";

const FORM_ENDPOINT = "https://formsubmit.co/ajax/akbarimozhgan99@gmail.com";

const isEmail = (v: string) => /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v.trim());

/**
 * Soft gate in front of a case study. The password is checked in the browser,
 * so this keeps the work out of casual reach rather than genuinely secret:
 * the page is a static export and its markup ships with the site.
 *
 * Nothing is remembered: the code is asked for on every page load. A
 * `?k=<password>` link is the one way past the dialog, so a single link can go
 * in a resume or an application without the reader typing anything.
 *
 * Anyone without a code can ask for one from the same dialog. A gate with no
 * way through is a dead end; this turns it into a conversation.
 */
export default function PasswordGate({
  password,
  children,
}: {
  password: string;
  children: React.ReactNode;
}) {
  // One piece of state so the mount check is a single update, not a cascade.
  const [gate, setGate] = useState({ unlocked: false, ready: false });
  const [value, setValue] = useState("");
  const [error, setError] = useState(false);

  const [mode, setMode] = useState<"code" | "request">("code");
  const [req, setReq] = useState({ name: "", email: "", note: "" });
  const [reqErrors, setReqErrors] = useState<{ name?: string; email?: string }>({});
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  // The code is asked for on every visit: nothing is remembered between page
  // loads. Only an explicit ?k= link skips the dialog, and that has to be
  // read after mount because the markup is prerendered.
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const key = params.get("k") ?? params.get("key");
    // window does not exist during the static export, so the share-link check
    // cannot happen during render.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setGate({ unlocked: key === password, ready: true });
  }, [password]);

  if (gate.unlocked) return <>{children}</>;

  const submitCode = (e: React.FormEvent) => {
    e.preventDefault();
    if (value.trim() === password) {
      setGate({ unlocked: true, ready: true });
      setError(false);
    } else {
      setError(true);
    }
  };

  const submitRequest = async (e: React.FormEvent) => {
    e.preventDefault();
    const errors = {
      name: req.name.trim() ? undefined : "Please enter your name.",
      email: !req.email.trim()
        ? "Please enter your email."
        : isEmail(req.email)
          ? undefined
          : "Please enter a valid email address.",
    };
    setReqErrors(errors);
    if (errors.name || errors.email) return;

    setStatus("sending");
    trackEvent("case_access_request");
    try {
      const page = typeof window !== "undefined" ? window.location.pathname : "";
      const res = await fetch(FORM_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          name: req.name,
          email: req.email,
          note: req.note,
          requested_page: page,
          _subject: `Case study access request from ${req.name}`,
          _template: "table",
        }),
      });
      if (!res.ok) throw new Error("send failed");
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  };

  return (
    <div className="pw-gate">
      {/* Held back until the session check has run, so a remembered unlock
          never flashes the dialog on the way to the case study. */}
      <div className="pw-card" hidden={!gate.ready}>
        {mode === "code" ? (
          <form onSubmit={submitCode}>
            <span className="pw-eyebrow">Protected case study</span>
            <h1 className="pw-title">This one is behind a password</h1>
            <p className="pw-body">
              The work is covered by a confidentiality agreement, so it is shared on request
              rather than published. Enter the code you were given to read it.
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
              onChange={(ev) => {
                setValue(ev.target.value);
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

            <p className="pw-alt">
              No code?{" "}
              <button type="button" className="pw-linkbtn" onClick={() => setMode("request")}>
                Ask me for one
              </button>
            </p>
          </form>
        ) : status === "sent" ? (
          <div>
            <span className="pw-eyebrow">Request sent</span>
            <h1 className="pw-title">Thanks, it is on its way to me</h1>
            <p className="pw-body">
              I will send the code to <strong>{req.email.trim()}</strong>. If it is urgent,
              LinkedIn is usually faster.
            </p>
            <a
              className="pw-submit pw-submit-link"
              href="https://www.linkedin.com/in/mozhgan-akbari/"
              target="_blank"
              rel="noreferrer noopener"
            >
              Message me on LinkedIn
            </a>
            <p className="pw-alt">
              <button type="button" className="pw-linkbtn" onClick={() => setMode("code")}>
                Back to the code
              </button>
            </p>
          </div>
        ) : (
          <form onSubmit={submitRequest}>
            <span className="pw-eyebrow">Request access</span>
            <h1 className="pw-title">Tell me who you are</h1>
            <p className="pw-body">
              Send this and I will reply with the code. Your name and email are all I need.
            </p>

            <label className="pw-label" htmlFor="pw-name">
              Name
            </label>
            <input
              id="pw-name"
              className={`pw-input pw-input-text${reqErrors.name ? " is-error" : ""}`}
              autoFocus
              value={req.name}
              onChange={(ev) => {
                setReq({ ...req, name: ev.target.value });
                setReqErrors({ ...reqErrors, name: undefined });
              }}
              aria-invalid={!!reqErrors.name}
            />
            <span className="pw-error" hidden={!reqErrors.name}>
              {reqErrors.name}
            </span>

            <label className="pw-label" htmlFor="pw-email">
              Email
            </label>
            <input
              id="pw-email"
              type="email"
              className={`pw-input pw-input-text${reqErrors.email ? " is-error" : ""}`}
              value={req.email}
              onChange={(ev) => {
                setReq({ ...req, email: ev.target.value });
                setReqErrors({ ...reqErrors, email: undefined });
              }}
              aria-invalid={!!reqErrors.email}
            />
            <span className="pw-error" hidden={!reqErrors.email}>
              {reqErrors.email}
            </span>

            <label className="pw-label" htmlFor="pw-note">
              Company or role <span className="pw-optional">optional</span>
            </label>
            <input
              id="pw-note"
              className="pw-input pw-input-text"
              value={req.note}
              onChange={(ev) => setReq({ ...req, note: ev.target.value })}
            />

            <span className="pw-error" hidden={status !== "error"}>
              That did not send. Email me at akbarimozhgan99@gmail.com instead.
            </span>

            <button type="submit" className="pw-submit" disabled={status === "sending"}>
              {status === "sending" ? "Sending…" : "Send request"}
            </button>

            <p className="pw-alt">
              <button type="button" className="pw-linkbtn" onClick={() => setMode("code")}>
                I have a code
              </button>
            </p>
          </form>
        )}

        <Link href="/#projects" className="pw-back">
          Back to all work
        </Link>
      </div>
    </div>
  );
}
