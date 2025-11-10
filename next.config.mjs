// const nextConfig = {
//   images: {
//     unoptimized: true,
//   },
//   reactCompiler: true,
// };
// export default nextConfig;

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true, // তুমি আগেই রেখেছো, optional
  },
  reactCompiler: true, // Next.js compiler optimization
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ["@svgr/webpack"], // SVG → React component বানাবে
    });
    return config;
  },
};

export default nextConfig;
