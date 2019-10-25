const path = require('path');

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
    ['@babel/plugin-proposal-object-rest-spread', { loose: true }],
    '@babel/plugin-transform-runtime',
    '@babel/plugin-transform-object-assign'
];

const productionPlugins = [
    'babel-plugin-transform-react-constant-elements',
    [
        'transform-react-remove-prop-types',
        {
            mode: 'unsafe-wrap'
        }
    ],
    path.resolve(__dirname, './devtools/removePropDescriptions.js')
];

module.exports = {
    presets: defaultPresets.concat(['@babel/preset-react']),
    plugins: defaultPlugins,
    env: {
        cjs: {
            plugins: productionPlugins
        }
    }
};
