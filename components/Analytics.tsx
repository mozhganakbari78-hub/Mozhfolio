"use client";

import { useEffect, useState } from "react";
import Script from "next/script";

// GA4 Measurement ID (looks like "G-XXXXXXXXXX").
// From analytics.google.com → Admin → Data Streams → your web stream.
// Leave empty to disable.
const GA_MEASUREMENT_ID = "G-8CCZP9PFQ5";

// Microsoft Clarity project ID (a short string like "abcd1234ef").
// From clarity.microsoft.com → your project → Settings → Setup → install manually.
// Paste only the ID, not the whole snippet. Leave empty to disable.
const CLARITY_PROJECT_ID = "y89v4kdh1n";

// Analytics only run on the live site. Netlify previews and local builds
// are never counted.
const LIVE_HOSTS = ["mozhfolio.com", "www.mozhfolio.com"];

// Opt-out for the site owner: visit any page with ?notrack once and that
// browser is never counted again; ?track turns counting back on.
const OPT_OUT_KEY = "mz-notrack";

function shouldTrack() {
  if (!LIVE_HOSTS.includes(window.location.hostname)) return false;
  // Automated browsers (screenshots, tests, most bots) report themselves here.
  if (navigator.webdriver) return false;
  try {
    const params = new URLSearchParams(window.location.search);
    if (params.has("notrack")) window.localStorage.setItem(OPT_OUT_KEY, "1");
    if (params.has("track")) window.localStorage.removeItem(OPT_OUT_KEY);
    return window.localStorage.getItem(OPT_OUT_KEY) !== "1";
  } catch {
    // Storage blocked: nothing remembered either way, so count the visit.
    return true;
  }
}

export default function Analytics() {
  const [track, setTrack] = useState(false);

  useEffect(() => {
    // Decided once, in the browser, after the page has loaded.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setTrack(shouldTrack());
  }, []);

  if (!track) return null;

  return (
    <>
      {GA_MEASUREMENT_ID && (
        <>
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
            strategy="lazyOnload"
          />
          <Script id="ga4-init" strategy="lazyOnload">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${GA_MEASUREMENT_ID}');
            `}
          </Script>
        </>
      )}

      {CLARITY_PROJECT_ID && (
        <Script id="clarity-init" strategy="lazyOnload">
          {`
            (function(c,l,a,r,i,t,y){
              c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
              t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
              y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "${CLARITY_PROJECT_ID}");
          `}
        </Script>
      )}
    </>
  );
}
