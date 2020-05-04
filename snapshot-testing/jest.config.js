
module.exports = {
    'rootDir': '../snapshot-testing/',
    'verbose': true,
    'preset': 'jest-puppeteer',
    'setupFilesAfterEnv': ['../config/jest/setup.js'],
    'moduleNameMapper': {
        '^.+\\.(css)$': 'babel-jest'
    },
    'transformIgnorePatterns': [
        'node_modules/?!(react-syntax-highlighter)'
    ],
    'transform': {
        '^.+\\.?stories\\.js?$': '@storybook/addon-storyshots/injectFileName',
        '^.+\\.js?$': 'babel-jest',
        '^.+\\.mdx$': '@storybook/addon-docs/jest-transform-mdx'
    }
};
