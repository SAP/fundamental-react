
module.exports = {
    'rootDir': '../storybook-testing/',
    'verbose': true,
    'preset': 'jest-puppeteer',
    'setupFilesAfterEnv': ['../config/jest/setup.js'],
    'moduleNameMapper': {
        '^.+\\.(scss|css)$': 'babel-jest'
    },
    'transformIgnorePatterns': [
        'node_modules/?!(react-syntax-highlighter)'
    ],
    'transform': {
        '^.+\\.?visual\\.js?$': '@storybook/addon-storyshots/injectFileName',
        '^.+\\.js?$': 'babel-jest',
        '^.+\\.mdx$': '@storybook/addon-docs/jest-transform-mdx'
    }
};
