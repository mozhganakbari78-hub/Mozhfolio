import Script from "next/script";

// Paste your GA4 Measurement ID here (looks like "G-XXXXXXXXXX").
// Get it from analytics.google.com → Admin → Data Streams → your web stream.
// Leave empty to disable analytics entirely.
const GA_MEASUREMENT_ID = "";

export default function Analytics() {
  if (!GA_MEASUREMENT_ID) return null;

  return (
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
  );
}
