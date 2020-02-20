import FormInput from '../FormInput';
import React from 'react';
import { storiesOf } from '@storybook/react';
import {
    withKnobs
} from '@storybook/addon-knobs';

storiesOf('Components|FormInput', module)
    .addDecorator(withKnobs)
    .add('Default', () => (
        <FormInput />
    ))
    .add('disable styles', () => (
        <FormInput disableStyles />
    ));
