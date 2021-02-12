module.exports = {
  '*.{js,ts,tsx}': ['eslint --fix', 'jest --bail --findRelatedTests'],
  '*.{json,md}': 'prettier --write',
}
