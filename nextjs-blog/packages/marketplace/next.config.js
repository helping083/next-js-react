/**
 * @type {import('next').NextConfig}
 */
const withPlugins = require('next-compose-plugins')
const withTM = require('next-transpile-modules')

const nextConfig = {
  /* config options here */
  reactStrictMode: true,
  pageExtensions: ['page.ts', 'page.tsx'],
  productionBrowserSourceMaps: true,
}

module.exports = withPlugins(
  [
    withTM(['@marketplace/server']),
  ],
  nextConfig
)
