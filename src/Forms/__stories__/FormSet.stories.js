import FormSet from '../FormSet';
import React from 'react';
import { storiesOf } from '@storybook/react';
import {
    withKnobs
} from '@storybook/addon-knobs';

storiesOf('Components|FormSet', module)
    .addDecorator(withKnobs)
    .add('Default', () => (
        <FormSet>Default</FormSet>
    ))
    .add('disable styles', () => (
        <FormSet disableStyles>Default</FormSet>
    ));
