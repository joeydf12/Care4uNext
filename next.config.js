/* eslint-disable global-require */
/* eslint-disable @typescript-eslint/no-var-requires */
const { i18n } = require('./i18nConfig');

let nextConfig = {
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack']
    });
    const rules = config.module.rules.find((rule) => typeof rule.oneOf === 'object').oneOf.filter((rule) => Array.isArray(rule.use));

    rules.forEach((rule) => {
      rule.use.forEach((moduleLoader) => {
        if (/css-loader[/\\](?:cjs|dist|src)/.test(moduleLoader.loader)) {
          if (typeof moduleLoader.options.modules === 'object') {
            moduleLoader.options.modules = {
              ...moduleLoader.options.modules,
              exportLocalsConvention: 'camelCase'
            };
          }
        }
      });
    });

    return config;
  },
  i18n,
  reactStrictMode: true,
  swcMinify: false,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'a.storyblok.com',
        port: '',
        pathname: '/**'
      }
    ]
  },
  experimental: {
    scrollRestoration: true
  },
  optimizeFonts: true,
  poweredByHeader: false
};

// Check if ANALYZE env is set en if true start bundle-analyzer
const analyzeBundles = process.env.ANALYZE;

if (analyzeBundles) {
  const withNextBundleAnalyzer =
    // eslint-disable-next-line import/no-extraneous-dependencies
    require('@next/bundle-analyzer')();
  nextConfig = withNextBundleAnalyzer(nextConfig);
}

module.exports = nextConfig;
