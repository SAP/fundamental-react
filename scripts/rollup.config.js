import babel from 'rollup-plugin-babel';
import builtins from 'rollup-plugin-node-builtins';
import commonjs from 'rollup-plugin-commonjs';
import nodeGlobals from 'rollup-plugin-node-globals';
import nodeResolve from 'rollup-plugin-node-resolve';
import replace from 'rollup-plugin-replace';
import { sizeSnapshot } from 'rollup-plugin-size-snapshot';
import { terser } from 'rollup-plugin-terser';

const input = './src/index.js';
const globals = {
    react: 'React',
    'react-dom': 'ReactDOM'
};
const babelOptions = {
    exclude: /node_modules/,
    runtimeHelpers: true,
    configFile: './babel.config.js'
};
const commonjsOptions = {
    ignoreGlobal: true,
    include: /node_modules/,
    namedExports: {
        'prop-types': [
            'node',
            'elementType',
            'bool',
            'func',
            'object',
            'oneOfType',
            'element',
            'string',
            'arrayOf',
            'any'
        ]
    }
};

export default [
    {
        input,
        output: {
            file: 'lib/umd/fundamental-react.development.js',
            format: 'umd',
            name: 'fundamental-react',
            globals
        },
        external: Object.keys(globals),
        plugins: [
            nodeResolve({ preferBuiltins: true }),
            babel(babelOptions),
            commonjs(commonjsOptions),
            nodeGlobals(),
            replace({ 'process.env.NODE_ENV': JSON.stringify('development') })
        ]
    },
    {
        input,
        output: {
            file: 'lib/umd/fundamental-react.production.min.js',
            format: 'umd',
            name: 'fundamental-react',
            globals
        },
        external: Object.keys(globals),
        plugins: [
            nodeResolve({ preferBuiltins: true }),
            builtins(),
            babel(babelOptions),
            commonjs(commonjsOptions),
            nodeGlobals(),
            replace({ 'process.env.NODE_ENV': JSON.stringify('production') }),
            sizeSnapshot({ snapshotPath: 'size-snapshot.json' }),
            terser()
        ]
    }
];

