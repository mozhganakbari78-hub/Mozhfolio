import Script from "next/script";

// GA4 Measurement ID (looks like "G-XXXXXXXXXX").
// From analytics.google.com → Admin → Data Streams → your web stream.
// Leave empty to disable.
const GA_MEASUREMENT_ID = "G-8CCZP9PFQ5";

// Microsoft Clarity project ID (a short string like "abcd1234ef").
// From clarity.microsoft.com → your project → Settings → Setup → install manually.
// Paste only the ID, not the whole snippet. Leave empty to disable.
const CLARITY_PROJECT_ID = "y89v4kdh1n";

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

      {CLARITY_PROJECT_ID && (
        <Script id="clarity-init" strategy="afterInteractive">
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
