module.exports = {
    presets: [
        '@babel/preset-react',
        [
            '@babel/preset-env',
            {
                modules: 'commonjs'
            }
        ]
    ],
    plugins: [
        ['@babel/plugin-proposal-class-properties', { loose: true }],
        ['@babel/plugin-proposal-object-rest-spread', { loose: true }],
        '@babel/plugin-transform-object-assign',
        ['babel-plugin-module-resolver']
    ],
    env: {
        production: {
            presets: [
                [
                    '@babel/preset-env',
                    {
                        targets: {
                            node: '10.15.0',
                            ie: '11'
                        }
                    }
                ]
            ],
            plugins: [
                [
                    'transform-react-remove-prop-types',
                    {
                        mode: 'unsafe-wrap'
                    }
                ]
            ],
            // It's most likely a babel bug.
            // We are using this ignore option in the CLI command but that has no effect.
            ignore: ['**/*.test.js']
        }
    }
};
