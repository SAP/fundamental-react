const rootBabel = require('./babel.config');

// TODO: Remove this once https://github.com/storybookjs/storybook/issues/11246 is fixed
const popper2AliasRemovalPlugin = [
    'babel-plugin-module-resolver',
    {
        alias: {
            'react-popper-2': 'react-popper'
        }
    }
];

module.exports = {
    ...rootBabel,
    plugins: [...rootBabel.plugins, popper2AliasRemovalPlugin]
};
