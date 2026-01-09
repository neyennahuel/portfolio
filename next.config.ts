import type { NextConfig } from "next";

const repo = "portfolio-pro"; // Cambia si tu repo se llama distinto

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  basePath: `/${repo}`,
  assetPrefix: `/${repo}/`,
  images: { unoptimized: true },
};

export default nextConfig;
