import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  // Write each route as <route>/index.html. Without it the export holds both
  // work/<slug>.html and a work/<slug>/ folder of route payloads, and GitHub
  // Pages answers a full page load of /work/<slug> with the folder, which has
  // no index: a 404. Client-side navigation hid it; a tap before hydration
  // (common on mobile) or a reload hit it.
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  experimental: {
    // Put the stylesheet in the HTML instead of a separate file. The site's
    // CSS is small (~10 KB gzipped), and as its own file it was render-
    // blocking and queued behind the scripts and fonts on a slow phone, so
    // nothing painted until ~1.6 s. Inline, the first paint follows the HTML.
    inlineCss: true,
  },
};

export default nextConfig;
