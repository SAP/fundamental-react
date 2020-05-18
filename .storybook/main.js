const path = require('path');

module.exports = {
    stories: ['../src/**/*.(stories|visual).(js|mdx)'],

    addons: [
        '@storybook/addon-knobs/register',
        '@storybook/addon-a11y/register',
        '@storybook/addon-cssresources/register',
        '@storybook/addon-storysource/register',
        '@storybook/addon-viewport/register',
        '@storybook/addon-docs',
        'storybook-addon-i18n/register'
    ],

    webpackFinal: async(config) => {
        config.module.rules.push({
            test: /\.stories\.js?$/,
            loaders: [require.resolve('@storybook/source-loader')],
            enforce: 'pre'
        });

        config.module.rules.push({
            test: /\.scss$/,
            use: ['style-loader', 'css-loader', 'sass-loader'],
            include: path.resolve(__dirname, '../'),
          });

        return config;
    }
};
