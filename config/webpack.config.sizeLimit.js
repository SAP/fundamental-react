const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const CompressionPlugin = require('compression-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');

module.exports = {
    mode: 'production',
    entry: './lib/index.js',
    output: {
        filename: 'fundamental-react.js'
    },
    optimization: {
        concatenateModules: true
    },
    module: {
        rules: [
            {
                test: [/\.(scss|sass)$/],
                use: [{
                    loader: 'style-loader'
                },
                {
                    loader: 'css-loader'
                },
                {
                    loader: require.resolve('postcss-loader'),
                    options: {
                        ident: 'postcss',
                        inline: false,
                        annotations: false,
                        sourcesContent: true,
                        plugins: () => [
                            require('postcss-preset-env')({
                                autoprefixer: {
                                    flexbox: 'no-2009',
                                    cascade: true
                                },
                                stage: 3
                            }),
                            require('postcss-clean')({
                                format: 'beautify',
                                level: 1
                            })
                        ]
                    }
                },
                {
                    loader: 'sass-loader'
                }]
            },
            {
                test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
                use: [{
                    loader: 'file-loader'
                }]
            }
        ]
    },
    plugins: [
        new OptimizeCSSAssetsPlugin(),
        new CompressionPlugin(),
        new BundleAnalyzerPlugin({
            analyzerMode: 'static',
            defaultSizes: 'gzip',
            openAnalyzer: process.env.DEBUG ? true : false
        })
    ]
};
