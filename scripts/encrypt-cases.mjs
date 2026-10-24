/**
 * Encrypts the exported case-study pages after `next build`.
 *
 * GitHub Pages only serves files, so a password checked in React is a curtain:
 * the markup still ships with the page and `curl` reads straight through it.
 * This replaces each case-study file with its own AES-GCM ciphertext plus a
 * small prompt. Without the passphrase the file holds nothing but random
 * bytes, and the real page is written into the document only after the key
 * derives correctly.
 *
 * The passphrase is never committed. CI passes it in as CASE_PASSWORD, which
 * comes from the repository secret of the same name.
 */
import { readFile, writeFile, readdir, rm, stat } from "node:fs/promises";
import { webcrypto as crypto } from "node:crypto";
import path from "node:path";

/**
 * The lock switch lives in config/lock.json, because the links into /work have
 * to agree with it: locked, the route payloads are stripped and a client-side
 * navigation would have nothing to fetch. Reading one file from both sides
 * keeps them from drifting apart.
 *
 * false publishes the case studies in the clear; true puts them back behind
 * the passphrase. Nothing else has to change either way: the CASE_PASSWORD
 * secret and the workflow stay as they are.
 */
const LOCKED = JSON.parse(
  await readFile(path.join(process.cwd(), "config", "lock.json"), "utf8")
).caseStudiesLocked;

const OUT_DIR = path.join(process.cwd(), "out", "work");
const PASSWORD = process.env.CASE_PASSWORD;
const ITERATIONS = 600_000;

if (!LOCKED) {
  console.log("\n🔓 LOCKED is false: the case studies are being published unlocked.\n");
  process.exit(0);
}

if (!PASSWORD) {
  if (process.env.ALLOW_UNENCRYPTED === "1") {
    console.warn(
      "\n⚠  CASE_PASSWORD is not set and ALLOW_UNENCRYPTED=1, so the case " +
        "studies are being left in the clear. Never deploy this output.\n"
    );
    process.exit(0);
  }
  console.error(
    "\n✗ CASE_PASSWORD is not set, so the case studies would deploy unlocked.\n" +
      "  Set the repository secret CASE_PASSWORD, or pass ALLOW_UNENCRYPTED=1 " +
      "for a local build you will not publish.\n"
  );
  process.exit(1);
}

const enc = new TextEncoder();
const b64 = (bytes) => Buffer.from(bytes).toString("base64");

async function deriveKey(salt) {
  const base = await crypto.subtle.importKey("raw", enc.encode(PASSWORD), "PBKDF2", false, [
    "deriveKey",
  ]);
  return crypto.subtle.deriveKey(
    { name: "PBKDF2", salt, iterations: ITERATIONS, hash: "SHA-256" },
    base,
    { name: "AES-GCM", length: 256 },
    false,
    ["encrypt"]
  );
}

async function encrypt(plaintext) {
  const salt = crypto.getRandomValues(new Uint8Array(16));
  const iv = crypto.getRandomValues(new Uint8Array(12));
  const key = await deriveKey(salt);
  const cipher = await crypto.subtle.encrypt({ name: "AES-GCM", iv }, key, enc.encode(plaintext));
  return { salt: b64(salt), iv: b64(iv), data: b64(new Uint8Array(cipher)) };
}

/** The prompt that replaces the page. Styling is inlined because the real
 *  stylesheet is part of the payload and has not been decrypted yet. */
function gateHtml({ salt, iv, data, title }) {
  return `<!DOCTYPE html>
<html lang="en" data-theme="dark">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="robots" content="noindex">
<title>${title}</title>
<style>
  :root { color-scheme: dark; }
  * { box-sizing: border-box; }
  body {
    margin: 0; min-height: 100vh; display: flex; align-items: center; justify-content: center;
    padding: 24px; background: #0a0b0f;
    background-image: radial-gradient(ellipse 70% 50% at 50% 0%, rgba(1,116,220,.13), transparent 65%);
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
    color: #f4f6fb;
  }
  form {
    width: min(400px, 100%); display: flex; flex-direction: column;
    padding: 30px 30px 24px; border-radius: 16px;
    border: 1px solid rgba(255,255,255,.1); background: #13151b;
    box-shadow: 0 24px 70px rgba(0,0,0,.6);
  }
  .eyebrow {
    font-family: ui-monospace, SFMono-Regular, Menlo, monospace;
    font-size: 10.5px; letter-spacing: .12em; text-transform: uppercase; color: #7cb8f5;
  }
  h1 { margin: 14px 0 0; font-size: 21px; font-weight: 600; letter-spacing: -.02em; line-height: 1.25; }
  p { margin: 10px 0 0; font-size: 13.5px; line-height: 1.6; color: #9aa1b4; }
  label {
    margin: 22px 0 7px; font-family: ui-monospace, SFMono-Regular, Menlo, monospace;
    font-size: 10.5px; letter-spacing: .1em; text-transform: uppercase; color: #9aa1b4;
  }
  input {
    width: 100%; padding: 11px 13px; border-radius: 9px;
    border: 1px solid rgba(255,255,255,.14); background: #0a0b0f; color: #f4f6fb;
    font-size: 16px; outline: none; font-family: inherit;
    transition: border-color .18s ease, box-shadow .18s ease;
  }
  input:focus { border-color: #0174DC; box-shadow: 0 0 0 3px rgba(1,116,220,.22); }
  input.is-error { border-color: #e8836e; }
  .error { margin-top: 8px; font-size: 12.5px; color: #e8836e; }
  button {
    margin-top: 18px; padding: 11px 14px; border: 0; border-radius: 9px;
    background: #0174DC; color: #fff; font-size: 14px; font-weight: 500;
    cursor: pointer; font-family: inherit; transition: opacity .18s ease;
  }
  button:hover { opacity: .9; }
  button:disabled { opacity: .6; cursor: default; }
  a {
    margin-top: 18px; align-self: center; font-family: ui-monospace, SFMono-Regular, Menlo, monospace;
    font-size: 10.5px; letter-spacing: .1em; text-transform: uppercase;
    color: #9aa1b4; text-decoration: none;
  }
  a:hover { color: #f4f6fb; }
  [hidden] { display: none !important; }
</style>
</head>
<body>
<form id="gate" autocomplete="off">
  <span class="eyebrow">Protected case study</span>
  <h1>This one is behind a password</h1>
  <p>The work is covered by a confidentiality agreement, so it is shared on request rather than published. Enter the passphrase you were given to read it.</p>
  <label for="pw">Passphrase</label>
  <input id="pw" type="password" autocomplete="off" autofocus>
  <span class="error" id="err" hidden>That passphrase is not right.</span>
  <button type="submit" id="go">Unlock</button>
  <a href="/#projects">Back to all work</a>
</form>
<script>
(function () {
  var PAYLOAD = {
    salt: "${salt}",
    iv: "${iv}",
    data: "${data}",
    iterations: ${ITERATIONS}
  };
  var form = document.getElementById("gate");
  var input = document.getElementById("pw");
  var err = document.getElementById("err");
  var go = document.getElementById("go");

  function bytes(b64) {
    var bin = atob(b64), out = new Uint8Array(bin.length);
    for (var i = 0; i < bin.length; i++) out[i] = bin.charCodeAt(i);
    return out;
  }

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    err.hidden = true;
    input.classList.remove("is-error");
    go.disabled = true;
    go.textContent = "Unlocking…";

    var salt = bytes(PAYLOAD.salt), iv = bytes(PAYLOAD.iv), data = bytes(PAYLOAD.data);

    crypto.subtle
      .importKey("raw", new TextEncoder().encode(input.value.trim()), "PBKDF2", false, ["deriveKey"])
      .then(function (base) {
        return crypto.subtle.deriveKey(
          { name: "PBKDF2", salt: salt, iterations: PAYLOAD.iterations, hash: "SHA-256" },
          base,
          { name: "AES-GCM", length: 256 },
          false,
          ["decrypt"]
        );
      })
      .then(function (key) {
        return crypto.subtle.decrypt({ name: "AES-GCM", iv: iv }, key, data);
      })
      .then(function (plain) {
        var html = new TextDecoder().decode(plain);
        // Rewriting the document re-parses it, so the page's own scripts run
        // and the case study behaves exactly as it does unlocked.
        document.open();
        document.write(html);
        document.close();
      })
      .catch(function () {
        go.disabled = false;
        go.textContent = "Unlock";
        err.hidden = false;
        input.classList.add("is-error");
        input.select();
      });
  });
})();
</script>
</body>
</html>
`;
}

// With trailingSlash each case study is out/work/<slug>/index.html, and the
// same folder holds the React payload for the route as plain text
// (index.txt, __next.*.txt). Those carry the same copy as the page, so
// encrypting only the HTML would leave the case studies readable right next
// to it. They exist for client-side navigation, which is why the links into
// /work are plain anchors while the lock is on.
const slugs = [];
for (const entry of await readdir(OUT_DIR)) {
  const full = path.join(OUT_DIR, entry);
  if ((await stat(full)).isDirectory()) slugs.push(entry);
  else await rm(full, { force: true });
}

let stripped = 0;
const files = [];
for (const slug of slugs) {
  const dir = path.join(OUT_DIR, slug);
  for (const entry of await readdir(dir)) {
    if (entry === "index.html") continue;
    await rm(path.join(dir, entry), { recursive: true, force: true });
    stripped++;
  }
  try {
    await stat(path.join(dir, "index.html"));
    files.push(path.join(slug, "index.html"));
  } catch {}
}
if (!files.length) {
  console.error("✗ No case-study pages found in out/work. Did the export run?");
  process.exit(1);
}
if (stripped) console.log(`🧹 removed ${stripped} unencrypted route payloads from out/work`);

for (const file of files) {
  const full = path.join(OUT_DIR, file);
  const html = await readFile(full, "utf8");
  if (html.includes("PAYLOAD.iterations")) {
    console.log(`·  ${file} already encrypted, skipping`);
    continue;
  }
  const title = (html.match(/<title>([^<]*)<\/title>/)?.[1] ?? "Protected case study")
    .replace(/[<>]/g, "");
  const payload = await encrypt(html);
  await writeFile(full, gateHtml({ ...payload, title }));
  const kb = (payload.data.length / 1024).toFixed(0);
  console.log(`🔒 ${file} → ${kb}KB ciphertext`);
}

console.log(`\n✓ ${files.length} case studies encrypted with AES-256-GCM (PBKDF2 ${ITERATIONS.toLocaleString()} iterations)\n`);
