module.exports = {
    stories: ['../src/**/*.stories.(js|mdx)'],

    addons: [
        '@storybook/addon-knobs/register',
        '@storybook/addon-a11y/register',
        '@storybook/addon-storysource/register',
        '@storybook/addon-viewport/register',
        '@storybook/addon-docs',
        'storybook-addon-i18n/register',
        './.storybook/custom/register.js'
    ],

    webpackFinal: async(config) => {
        config.module.rules.push({
            test: /\.stories\.js?$/,
            loaders: [require.resolve('@storybook/source-loader')],
            enforce: 'pre'
        });

        return config;
    }
};
