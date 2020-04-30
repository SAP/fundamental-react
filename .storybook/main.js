module.exports = {
    stories: ['../src/**/*.stories.js'],

    addons: [
        '@storybook/addon-knobs/register',
        '@storybook/addon-a11y/register',
        '@storybook/addon-storysource/register',
        '@storybook/addon-notes/register',
        '@storybook/addon-viewport/register'
    ],

    webpackFinal: async(config) => {
        config.module.rules.push({
            test: /\.md$/,
            use: [
                {
                    loader: 'markdown-loader'
                }
            ]
        });
        config.module.rules.push({
            test: /\.stories\.js?$/,
            loaders: [require.resolve('@storybook/source-loader')],
            enforce: 'pre'
        });
    }
};
