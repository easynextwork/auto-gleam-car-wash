/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['localhost:3000', "aqualine.like-themes.com"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "*",
        pathname: "**",
      },
    ],
  },
};

export default nextConfig;
