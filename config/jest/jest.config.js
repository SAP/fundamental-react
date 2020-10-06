module.exports = {
    rootDir: '../../src/',
    verbose: true,
    testURL: 'http://localhost/',
    testMatch: ['**/*.test.js'],
    setupFiles: ['../config/jest/setup.js'],
    moduleFileExtensions: ['js', 'json', 'jsx', 'css', 'node'],
    moduleNameMapper: {
        '^.+\\.(css)$': '<rootDir>/../config/jest/CSSStub.js'
    }
};
