
module.exports = {
    'rootDir': '../../',
    'verbose': true,
    'testURL': 'http://localhost/',
    'testMatch': ['**/*.test.js'],
    'setupFiles': ['./config/jest/setup.js'],
    'moduleFileExtensions': ['js', 'json', 'jsx', 'css', 'node'],
    'moduleNameMapper': {
        '^.+\\.(css)$': 'babel-jest'
    }
};
