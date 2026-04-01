import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: "/SSDI",
        destination: "https://ssdi-quiz-funnel.vercel.app/SSDI",
      },
      {
        source: "/SSDI/:path*",
        destination: "https://ssdi-quiz-funnel.vercel.app/SSDI/:path*",
      },
    ];
  },
};

export default nextConfig;
