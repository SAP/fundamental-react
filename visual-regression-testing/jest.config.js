
module.exports = {
    'rootDir': '../visual-regression-testing/',
    'verbose': true,
    'preset': 'jest-puppeteer',
    'testRegex': './*\\.test\\.js$',
    'setupFilesAfterEnv': ['../config/jest/setup.js'],
    'moduleNameMapper': {
        '^.+\\.(css)$': 'babel-jest'
    },
    'transform': {
        '^.+\\.?stories\\.js?$': '@storybook/addon-storyshots/injectFileName',
        '^.+\\.js?$': 'babel-jest'
    }
};
