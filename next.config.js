/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Exclude error pages from static generation
  exportPathMap: async function (
    defaultPathMap,
    { dev, dir, outDir, distDir, buildId }
  ) {
    const paths = { ...defaultPathMap };
    // Delete error pages from static export
    delete paths['/404'];
    delete paths['/500'];
    return paths;
  },
}
module.exports = nextConfig
