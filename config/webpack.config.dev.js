/* eslint-disable strict */
/* eslint-disable camelcase */

'use strict';
const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CaseSensitivePathsPlugin = require('case-sensitive-paths-webpack-plugin');
const InterpolateHtmlPlugin = require('react-dev-utils/InterpolateHtmlPlugin');
const getClientEnvironment = require('./env');
const paths = require('./paths');
const ManifestPlugin = require('webpack-manifest-plugin');
const publicPath = '/';
const publicUrl = '';
const env = getClientEnvironment(publicUrl);

// style files regexes
const cssRegex = /\.css$/;
const sassRegex = /\.(scss|sass)$/;


const getLintingRule = () => {
    return process.env.FUNDAMENTAL_REACT_PLAYGROUND ?
        {} : {
            test: /\.(js|mjs|jsx)$/,
            enforce: 'pre',
            use: [
                {
                    options: {
                        formatter: require.resolve('react-dev-utils/eslintFormatter'),
                        eslintPath: require.resolve('eslint')

                    },
                    loader: require.resolve('eslint-loader')
                }
            ],
            include: paths.appSrc
        };
};

// common function to get style loaders
const getStyleLoaders = (cssOptions, preProcessor) => {
    const loaders = [
        require.resolve('style-loader'),
        {
            loader: require.resolve('css-loader'),
            options: cssOptions
        },
        {
            loader: require.resolve('postcss-loader'),
            options: {
                ident: 'postcss',
                inline: false,
                annotations: false,
                sourcesContent: true,
                plugins: () => [
                    require('postcss-flexbugs-fixes'),
                    require('postcss-preset-env')({
                        autoprefixer: {
                            flexbox: 'no-2009',
                            cascade: true
                        },
                        stage: 3
                    })
                ]
            }
        }
    ];
    if (preProcessor) {
        loaders.push(require.resolve(preProcessor));
    }
    return loaders;
};

module.exports = {
    mode: 'development',
    devtool: 'cheap-module-source-map',
    entry: [
        require.resolve('react-dev-utils/webpackHotDevClient'),
        paths.appIndexJs
    ],
    output: {
        pathinfo: true,
        filename: 'static/js/bundle.js',
        chunkFilename: 'static/js/[name].chunk.js',
        publicPath: publicPath,
        devtoolModuleFilenameTemplate: info =>
            path.resolve(info.absoluteResourcePath).replace(/\\/g, '/')
    },
    optimization: {
        splitChunks: {
            chunks: 'all',
            name: false
        },
        runtimeChunk: true
    },
    resolve: {
        extensions: ['.js', '.jsx', '.json', '.es6', '.css'],
        symlinks: false
    },
    module: {
        strictExportPresence: true,
        rules: [
            getLintingRule(),
            {
                oneOf: [
                    {
                        test: [/\.bmp$/, /\.gif$/, /\.jpe?g$/, /\.png$/],
                        loader: require.resolve('url-loader'),
                        options: {
                            limit: 10000,
                            name: 'static/media/[name].[hash:8].[ext]'
                        }
                    },
                    {
                        test: /\.(js|jsx)$/,
                        exclude: /node_modules/,
                        use: {
                            loader: 'babel-loader',
                            options: {
                                presets: [
                                    '@babel/preset-env',
                                    '@babel/preset-react'
                                ]
                            }
                        }
                    },
                    {
                        test: cssRegex,
                        use: getStyleLoaders({
                            importLoaders: 1
                        })
                    },
                    {
                        test: sassRegex,
                        use: getStyleLoaders({ importLoaders: 1 }, 'sass-loader')
                    },
                    {
                        exclude: [/\.(js|mjs|jsx|ts|tsx|snap)$/, /\.html$/, /\.json$/],
                        loader: require.resolve('file-loader'),
                        options: {
                            name: 'static/media/[name].[hash:8].[ext]'
                        }
                    }
                ]
            }
        ]
    },
    plugins: [
    // Generates an `index.html` file with the <script> injected.
        new HtmlWebpackPlugin({
            inject: true,
            template: paths.appHtml
        }),
        new InterpolateHtmlPlugin(HtmlWebpackPlugin, env.raw),
        // Makes some environment variables available to the JS code, for example:
        // if (process.env.NODE_ENV === 'development') { ... }. See `./env.js`.
        new webpack.DefinePlugin(env.stringified),
        // This is necessary to emit hot updates (currently CSS only):
        new webpack.HotModuleReplacementPlugin(),
        // Watcher doesn't work well if you mistype casing in a path so we use
        // a plugin that prints an error when you attempt to do this.
        // See https://github.com/facebook/create-react-app/issues/240
        new CaseSensitivePathsPlugin(),
        // Generate a manifest file which contains a mapping of all asset filenames
        // to their corresponding output file so that tools can pick it up without
        // having to parse `index.html`.
        new ManifestPlugin({
            fileName: 'asset-manifest.json',
            publicPath: publicPath
        })
    ].filter(Boolean),

    // Some libraries import Node modules but don't use them in the browser.
    // Tell Webpack to provide empty mocks for them so importing them works.
    node: {
        dgram: 'empty',
        fs: 'empty',
        net: 'empty',
        tls: 'empty',
        child_process: 'empty'
    },
    // Turn off performance processing because we utilize
    // our own hints via the FileSizeReporter
    performance: false
};
