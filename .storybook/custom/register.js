/* eslint-disable react/display-name */
import './custom.css';
import packageJson from '../../package.json';
import React from 'react';
import { addons, types } from '@storybook/addons';

// TO DO: replace with addons-toolbar when storybook 6.0.0 released
// https://www.npmjs.com/package/@storybook/addon-toolbars
addons.add('fundamental-react/title', {
    title: 'Version',
    type: types.TOOL,
    render: () => <span className='fr-version'>{`v${packageJson.version}`}</span>
});
