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
      setError(false);
    } else {
      setError(true);
    }
  };

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        background: "#0a0a0a",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 9999,
      }}
    >
      <form
        onSubmit={submit}
        style={{
          background: "#141414",
          border: "1px solid #2a2a2a",
          borderRadius: 12,
          padding: 32,
          width: "min(360px, 90vw)",
          display: "flex",
          flexDirection: "column",
          gap: 16,
        }}
      >
        <h2 style={{ margin: 0, color: "#fff", fontSize: 18, fontWeight: 600 }}>
          Protected case study
        </h2>
        <p style={{ margin: 0, color: "#888", fontSize: 14, lineHeight: 1.5 }}>
          Enter the password to view this case study.
        </p>
        <input
          type="password"
          value={value}
          onChange={(e) => {
            setValue(e.target.value);
            setError(false);
          }}
          placeholder="Password"
          autoFocus
          style={{
            background: "#0a0a0a",
            border: `1px solid ${error ? "#ef4444" : "#2a2a2a"}`,
            borderRadius: 8,
            padding: "10px 12px",
            color: "#fff",
            fontSize: 16,
            outline: "none",
          }}
        />
        {error && (
          <span style={{ color: "#ef4444", fontSize: 13 }}>
            Incorrect password.
          </span>
        )}
        <button
          type="submit"
          style={{
            background: "#2563eb",
            color: "#fff",
            border: "none",
            borderRadius: 8,
            padding: "10px 12px",
            fontSize: 14,
            fontWeight: 500,
            cursor: "pointer",
          }}
        >
          Unlock
        </button>
      </form>
    </div>
  );
}
