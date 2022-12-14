// @ts-check
const withPlugins = require('next-compose-plugins')
const withMDX = require('@next/mdx')({
  extension: /\.(md|mdx)$/
})

/** @type {import('next').NextConfig} */
module.exports = withPlugins([withMDX], ({
  eslint: { ignoreDuringBuilds: true },
  typescript: { tsconfigPath: './tsconfig.json' },
  /**
   *
   * @param {import('webpack').Configuration} config
   * @param {{ buildId: string, dev: Boolean, isServer: Boolean, defaultLoaders: Object }} options
   * @returns {import('webpack').Configuration}
   */
  webpack: (config, { buildId, dev, isServer, defaultLoaders }) => {
    if (!dev && !isServer && config.resolve?.alias) {
      Object.assign(config.resolve.alias, {
        react: 'preact/compat',
        'react-dom/test-utils': 'preact/test-utils',
        'react-dom': 'preact/compat'
      })
    }

    return config
  },
  trailingSlash: false,
  env: {},
  distDir: 'dist',
  pageExtensions: ['mdx', 'md', 'jsx', 'js', 'tsx', 'ts'],
  compress: true,
  poweredByHeader: false,
  images: {
    formats: ['image/webp']
  },
  productionBrowserSourceMaps: true,
  swcMinify: true,
  experimental: {
    optimisticClientCache: true,
    legacyBrowsers: true
  }
}))
