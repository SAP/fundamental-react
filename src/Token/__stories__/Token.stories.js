import React from 'react';
import { storiesOf } from '@storybook/react';
import Token from '../Token';
import {
    boolean,
    withKnobs
} from '@storybook/addon-knobs';

storiesOf('Components|Token', module)
    .addDecorator(withKnobs)
    .add('Dev', () => (
        <Token
            compact={boolean('compact', false)}
            readOnly={boolean('readOnly', false)}>Default</Token>
    ))
    .add('Compact', () => (
        <Token compact>Compact</Token>
    ))
    .add('ReadOnly', () => (
        <Token readOnly>Compact</Token>
    ))
    .add('disable styles', () => (
        <Token disableStyles>Default</Token>
    ));
