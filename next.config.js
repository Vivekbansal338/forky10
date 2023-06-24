// /** @type {import('next').NextConfig} */
// const nextConfig = {};

// module.exports = nextConfig;

const nextConfig = {
  webpack: (config, { isServer }) => {
    // custom webpack configuration
    return config;
  },
  // other configuration options
  basePath: "/myapp",
  // ...
  typescript: {
    // set up the @ symbol as a shortcut for the src directory
    baseUrl: ".",
    paths: {
      "@/*": ["src/*"],
    },
  },
};

module.exports = nextConfig;
