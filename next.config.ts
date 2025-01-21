const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https', // Protocol define karein
        hostname: 'cdn.sanity.io', // Image domain
        pathname: '/**', // All paths under this domain allowed
      },
    ],
  },
};

module.exports = nextConfig;
