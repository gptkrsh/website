const path = require('path')

/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  webpack: {
    resolve: {
        root: path.resolve(__dirname, 'src'),
    }
  },
  async redirects() {
    return [
      {
        source: '/go/resume',
        destination: 'https://drive.google.com/file/d/1k0DwjZNISS4kX1f03SkiZr8-IknAvp9_/view?usp=sharing',
        permanent: true,
      },
      {
        source: '/go/github',
        destination: 'https://github.com/krshkodes',
        permanent: true,
      },
      {
        source: '/go/twitter',
        destination: 'https://twitter.com/krshkodes',
        permanent: true,
      },
      {
        source: '/go/linkedin',
        destination: 'https://linkedin.com/in/krshkodes',
        permanent: true,
      },
    ]
  }
}
