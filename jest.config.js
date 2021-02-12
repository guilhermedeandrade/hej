module.exports = {
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  testPathIgnorePatterns: ['<rootDir>/.next/', '<rootDir>/node_modules/'],
  moduleDirectories: ['node_modules', 'utils'],
  moduleNameMapper: {
    '@/components/(.*)': '<rootDir>/components/$1',
    '@/pages/(.*)': '<rootDir>/pages/$1',
  },
}
