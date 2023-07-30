/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'jsdom',
    moduleNameMapper: {
      '\\.(s?css)$': 'identity-obj-proxy',
      '^@/(.*)': '<rootDir>/src/$1',
    },
    setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
    collectCoverage: true,
    reporters: ['default', 'jest-sonar'],
    collectCoverageFrom: [
      'src/**/*.{ts,tsx}',
      '!src/index.ts',
      '!src/**/*.d.ts',
      '!src/**/examples/*',
      '!src/icons/**/*',
    ],
    coverageThreshold: {
      global: {
        lines: 80,
      },
    },
  };
  
  
  
  