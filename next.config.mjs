/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: "http://rem.creativerp.org/cv/web/:path*", // Proxy to the API server
      },
    ];
  },
};

export default nextConfig;
