// @ts-check
const withPlugins = require('next-compose-plugins')
const withMDX = require('@next/mdx')({
  extension: /\.(md|mdx)$/
})

/** @type {import('next').NextConfig} */
module.exports = withPlugins([withMDX], ({
  eslint: { ignoreDuringBuilds: true },
  typescript: { tsconfigPath: './tsconfig.json' },
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
