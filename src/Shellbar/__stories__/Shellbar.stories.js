import React from 'react';
import Shellbar from '../Shellbar';
import { storiesOf } from '@storybook/react';
import {
    withKnobs
} from '@storybook/addon-knobs';

const profileMenu = [
    { name: 'Settings', glyph: 'action-settings', size: 's', callback: () => alert('Settings selected!') },
    { name: 'Sign Out', glyph: 'log', size: 's', callback: () => alert('Sign Out selected!') }
];

const profile = {
    initials: 'JS',
    userName: 'John Snow',
    colorAccent: 8
};

storiesOf('Components|Shellbar', module)
    .addDecorator(withKnobs)
    .add('Default', () => (
        <Shellbar
            logo={<img alt='SAP' src='//unpkg.com/fundamental-styles/dist/images/sap-logo.png' />}
            productTitle='Corporate Portal'
            profile={profile}
            profileMenu={profileMenu} />
    ))
    .add('disable styles', () => (
        <Shellbar
            disableStyles
            logo={<img alt='SAP' src='//unpkg.com/fundamental-styles/dist/images/sap-logo.png' />}
            productTitle='Corporate Portal'
            profile={profile}
            profileMenu={profileMenu} />
    ))
    .add('custom styles', () => (
        <Shellbar
            customStyles={require('../../utils/WithStyles/customStylesTest.css')}
            logo={<img alt='SAP' src='//unpkg.com/fundamental-styles/dist/images/sap-logo.png' />}
            productTitle='Corporate Portal'
            profile={profile}
            profileMenu={profileMenu} />
    ));
