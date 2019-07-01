
module.exports = {
    'rootDir': '../../',
    'verbose': true,
    'testURL': 'http://localhost/',
    'testMatch': ['**/*.test.js'],
    'setupFiles': ['./config/jest/setup.js'],
    'moduleFileExtensions': ['js', 'json', 'jsx', 'scss', 'node'],
    'moduleNameMapper': {
        '^.+\\.(css|scss)$': 'babel-jest'
    }
};
