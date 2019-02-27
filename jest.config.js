module.exports = {
  verbose: true,
  testURL: 'http://localhost/',
  'setupFilesAfterEnv': ['./enzyme.config.js'],
  'moduleNameMapper': {
    '^.+\\.(css|less|scss)$': 'babel-jest'
  }
}
