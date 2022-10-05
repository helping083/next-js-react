const withPlugins = require('next-compose-plugins')
const withTM = require('next-transpile-modules')


// module.exports = async (phase) => {
//   const nextConfig = {
//     reactStrictMode: true,
//     productionBrowserSourceMaps: true
//   }
//   const defaultConfig = {}
//   return  withPlugins([withTM(['shared', "@marketplace/store"])], nextConfig)(phase, { defaultConfig });
// }

const nextConfig = {
  reactStrictMode: false,
  productionBrowserSourceMaps: true,
  pageExtensions: ['page.js'],
}

module.exports = withPlugins([withTM(['shared', "@marketplace/server", "@common/frontend"])], nextConfig)