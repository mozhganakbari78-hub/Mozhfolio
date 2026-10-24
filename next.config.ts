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
};

export default nextConfig;
