import type { NextConfig } from "next";

// GitHub Pages serves project sites from /<repo>, so we set a base path when
// building in CI (the deploy workflow sets GITHUB_PAGES=true). Local dev and
// other hosts (Cloudflare Pages, Netlify) serve from the root, so base is "".
const basePath = process.env.GITHUB_PAGES === "true" ? "/Mozhfolio" : "";

const nextConfig: NextConfig = {
  output: "export",
  basePath,
  assetPrefix: basePath || undefined,
  images: {
    unoptimized: true,
  },
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
};

export default nextConfig;
