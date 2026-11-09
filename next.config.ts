import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Una sola URL canónica para Google: www redirige al dominio sin www.
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.undercheck.com.ar" }],
        destination: "https://undercheck.com.ar/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
