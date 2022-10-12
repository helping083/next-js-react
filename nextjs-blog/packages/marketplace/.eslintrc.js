const config = require('../../.eslintrc')

module.exports = {
  ...config,
  ignorePatterns: ['.next', 'node_modules'],
}
