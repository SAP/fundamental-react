import Identifier from '../Identifier';
import React from 'react';
import { storiesOf } from '@storybook/react';
import {
    withKnobs
} from '@storybook/addon-knobs';

storiesOf('Components|Identifier', module)
    .addDecorator(withKnobs)
    .add('Default', () => (
        <Identifier glyph='cart' size='m' />
    ))
    .add('disable styles', () => (
        <Identifier disableStyles
            glyph='cart' size='m' />
    ))
    .add('custom styles', () => (
        <Identifier
            className='sap-Identifier--cart'
            customStyles={require('../../utils/WithStyles/customStylesTest.css')}
            glyph='cart' size='m' />
    ));
