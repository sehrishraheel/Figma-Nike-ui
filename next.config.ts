const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https', 
        hostname: 'cdn.sanity.io', 
        pathname: '/**',
      },
    ],
  },
};

module.exports = nextConfig;
