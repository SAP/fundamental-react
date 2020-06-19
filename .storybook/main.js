const path = require('path');

module.exports = {
    stories: ['../src/Docs/introduction.stories.mdx', '../src/**/*.@(stories|visual).js'],

    addons: [
        '@storybook/addon-knobs/register',
        '@storybook/addon-a11y',
        '@storybook/addon-cssresources/register',
        '@storybook/addon-storysource/register',
        '@storybook/addon-viewport/register',
        '@storybook/addon-docs',
        'storybook-addon-i18n/register'
    ],

    webpackFinal: async(config) => {
        config.entry = ['core-js', ...config.entry];
        config.module.rules.push({
            test: /\.stories\.js?$/,
            use: [{ loader: 'story-description-loader' }],
        });

        config.module.rules.push({
            test: /\.scss$/,
            use: ['style-loader', 'css-loader', 'sass-loader'],
            include: path.resolve(__dirname, '../'),
          });

        return config;
    }
};
