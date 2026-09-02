/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  // Next 16 builds with Turbopack by default. An empty config confirms that is
  // intentional; without it the bundle-analyzer plugin's webpack config below
  // makes the build error out.
  turbopack: {},
};

// Only wrap when analysing: the plugin adds a webpack config, which Turbopack
// refuses to build alongside.
module.exports =
  process.env.ANALYZE === 'true'
    ? require('@next/bundle-analyzer')({ enabled: true })(nextConfig)
    : nextConfig;
