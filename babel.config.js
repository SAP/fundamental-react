
const cjsPresets = [
    '@babel/preset-react',
    [
        '@babel/preset-env',
        {
            modules: 'commonjs'
        }
    ]
];

const esPresets = [
    '@babel/preset-react',
    [
        '@babel/preset-env',
        {
            modules: false
        }
    ]
];

const defaultPlugins = [
    ['@babel/plugin-proposal-class-properties', { loose: true }],
    ['@babel/plugin-proposal-object-rest-spread', { loose: true }],
    '@babel/plugin-transform-object-assign'
];

const productionPlugins = [
    [
        'transform-react-remove-prop-types',
        {
            mode: 'unsafe-wrap'
        }
    ],
    [
        '@babel/plugin-transform-react-inline-elements'
    ]
];

module.exports = {
    presets: process.env.BABEL_ENV === 'es' ? esPresets : cjsPresets,
    plugins: defaultPlugins,
    env: {
        production: {
            presets: [
                [
                    '@babel/preset-env'
                ]
            ],
            plugins: productionPlugins
        }
    }
};
