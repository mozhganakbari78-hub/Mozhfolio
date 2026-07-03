import Script from "next/script";

// GA4 Measurement ID (looks like "G-XXXXXXXXXX").
// From analytics.google.com → Admin → Data Streams → your web stream.
// Leave empty to disable.
const GA_MEASUREMENT_ID = "G-8CCZP9PFQ5";

// Hotjar / Contentsquare tag URL (from your Hotjar installation page).
// Leave empty to disable.
const HOTJAR_SRC = "https://t.contentsquare.net/uxa/12357a2135940.js";

export default function Analytics() {
  return (
    <>
      {GA_MEASUREMENT_ID && (
        <>
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
            strategy="afterInteractive"
          />
          <Script id="ga4-init" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${GA_MEASUREMENT_ID}');
            `}
          </Script>
        </>
      )}

      {HOTJAR_SRC && <Script src={HOTJAR_SRC} strategy="afterInteractive" />}
    </>
  );
}
