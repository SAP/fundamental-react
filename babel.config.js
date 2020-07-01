const defaultPresets = [
    [
        '@babel/preset-env',
        {
            modules: 'commonjs'
        }
    ]
];

const defaultPlugins = [
    ['@babel/plugin-proposal-class-properties', { loose: true }],
    ['@babel/plugin-transform-runtime', { corejs: 3, proposals: true }]
];

const productionPlugins = [
    '@babel/plugin-transform-react-constant-elements',
    [
        'transform-react-remove-prop-types',
        {
            mode: 'unsafe-wrap'
        }
    ],
    ['client-only-require', { 'extensions': ['less', 'scss', 'css'] }]
];

module.exports = {
    presets: defaultPresets.concat(['@babel/preset-react']),
    plugins: defaultPlugins,
    env: {
        cjs: {
            plugins: productionPlugins
        },
        test: {
            plugins: ['require-context-hook']
        }
    }
};
