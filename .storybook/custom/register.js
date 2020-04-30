/* eslint-disable react/display-name */
import './custom.css';
import packageJson from '../../package.json';
import React from 'react';
import { addons, types } from '@storybook/addons';

// give a unique name for the panel
addons.add('fundamental-react/title', {
    title: 'Version',
    type: types.TOOL,
    render: () => <span className='fr-version'>{`v${packageJson.version}`}</span>
});
