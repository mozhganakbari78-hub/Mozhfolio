"use client";

import { useState } from "react";

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
    if (value === password) {
      setUnlocked(true);
    } else {
      setError(true);
    }
  };

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 100,
        background: "rgba(18, 19, 20, 0.92)",
        backdropFilter: "blur(8px)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: 24,
      }}
    >
      <form
        onSubmit={submit}
        style={{
          width: "100%",
          maxWidth: 360,
          background: "#1C1D1F",
          border: "1px solid var(--border)",
          borderRadius: 16,
          padding: 28,
          textAlign: "center",
        }}
      >
        <div
          style={{
            fontSize: 11,
            letterSpacing: 1.4,
            color: "var(--accent-color)",
            marginBottom: 10,
            fontFamily: "var(--font-mono), monospace",
          }}
        >
          PROTECTED
        </div>
        <h2
          style={{
            fontSize: 20,
            fontWeight: 600,
            color: "var(--text-primary)",
            marginBottom: 8,
          }}
        >
          Enter password
        </h2>
        <p style={{ fontSize: 13, color: "var(--text-tertiary)", marginBottom: 20 }}>
          This case study is private.
        </p>
        <input
          type="password"
          autoFocus
          value={value}
          onChange={(e) => {
            setValue(e.target.value);
            setError(false);
          }}
          placeholder="Password"
          style={{
            width: "100%",
            padding: "12px 14px",
            borderRadius: 10,
            border: `1px solid ${error ? "#ef4444" : "var(--border)"}`,
            background: "var(--bg)",
            color: "var(--text-primary)",
            fontSize: 14,
            outline: "none",
            marginBottom: 12,
            textAlign: "center",
            letterSpacing: 4,
          }}
        />
        {error && (
          <div style={{ fontSize: 12, color: "#ef4444", marginBottom: 12 }}>
            Wrong password
          </div>
        )}
        <button
          type="submit"
          style={{
            width: "100%",
            padding: "12px",
            borderRadius: 10,
            background: "var(--accent-color)",
            color: "var(--accent-contrast)",
            fontSize: 14,
            fontWeight: 500,
            border: "none",
            cursor: "pointer",
          }}
        >
          Unlock
        </button>
      </form>
    </div>
  );
}
