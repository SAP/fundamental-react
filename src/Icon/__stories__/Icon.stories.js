import Icon from '../Icon';
import React from 'react';
import { storiesOf } from '@storybook/react';
import {
    withKnobs
} from '@storybook/addon-knobs';

storiesOf('Components|Icon', module)
    .addDecorator(withKnobs)
    .add('Default', () => (
        <Icon className='sap-icon--cart' />
    ))
    .add('disable styles', () => (
        <Icon className='sap-icon--cart' disableStyles />
    ))
    .add('custom styles', () => (
        <Icon
            className='sap-icon--cart'
            customStyles={require('../../utils/WithStyles/customStylesTest.css')} />
    ));
