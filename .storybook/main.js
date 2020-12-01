const path = require('path');
const { merge } = require('webpack-merge');

const maxAssetSize = 1024 * 1024;

const includedStories = process.env.STORYBOOK_ENV === 'docs' ? '(stories)' : '(stories|visual)';

module.exports = {
    stories: ['../src/Docs/introduction.stories.mdx', `../src/**/*.@${includedStories}.js`],

    addons: [
        {
            name: '@storybook/addon-essentials',
            options: {
                backgrounds: false,
            },
        },
        '@storybook/addon-a11y',
        '@storybook/addon-knobs/register',
        '@storybook/addon-cssresources/register',
        '@storybook/addon-storysource/register',
        '@pxblue/storybook-rtl-addon/register',
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

        config.module.rules
            .find(rule => rule.test.toString() === /\.css$/.toString())
            .exclude = [/node_modules\/fundamental-styles/];

        config.module.rules.push({
            test: /.css$/,
            include: [
                /node_modules\/fundamental-styles/
            ],
            use: [
                {
                    loader: 'style-loader'
                },
                {
                    loader: 'css-loader',
                    options: {
                        modules: {
                            localIdentName: '[local]-[sha1:hash:hex:6]'
                        }
                    }
                }
            ]
        });

        return merge(config, {
            optimization: {
                splitChunks: {
                    chunks: 'all',
                    minSize: 30 * 1024,
                    maxSize: maxAssetSize,
                },
                runtimeChunk: true,
              },
              performance: {
                hints: 'warning',
                maxAssetSize: maxAssetSize
              }
        });
    }
};
