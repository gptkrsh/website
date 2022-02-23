const path = require('path')

/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  webpack: {
    resolve: {
        root: path.resolve(__dirname, 'src'),
    }
  }
}
