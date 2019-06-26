const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = {
    mode: 'production',
    entry: './lib/index.js',
    output: {
        filename: 'size-limit.js'
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
                            require('postcss-flexbugs-fixes'),
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
        new BundleAnalyzerPlugin()
    ]
};
