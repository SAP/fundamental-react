import React from 'react';
import { storiesOf } from '@storybook/react';
import Token from '../Token';
import {
    withKnobs
} from '@storybook/addon-knobs';

storiesOf('Components|Token', module)
    .addDecorator(withKnobs)
    .add('Default', () => (
        <Token>Default</Token>
    ))
    .add('disable styles', () => (
        <Token disableStyles>Default</Token>
    ))
    .add('custom styles', () => (
        <Token
            customStyles={require('../../utils/WithStyles/customStylesTest.css')}>
            Default
        </Token>
    ));
