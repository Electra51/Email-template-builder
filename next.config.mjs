// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   images: {
//     remotePatterns: [
//       {
//         protocol: "https",
//         hostname: "fakestoreapi.com",
//         port: "",
//         pathname: "/**",
//       },
//       {
//         protocol: "https",
//         hostname: "via.placeholder.com",
//         port: "",
//         pathname: "/**",
//       },
//     ],
//   },
//   reactCompiler: true,
// };

// export default nextConfig;

const nextConfig = {
  images: {
    unoptimized: true,
  },
  reactCompiler: true,
};
export default nextConfig;
