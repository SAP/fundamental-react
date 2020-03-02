import FormRadioItem from '../FormRadioItem';
import React from 'react';
import { storiesOf } from '@storybook/react';
import {
    boolean,
    select,
    withKnobs
} from '@storybook/addon-knobs';

const createProps = (overrides) => ({
    compact: boolean('compact', false),
    disabled: boolean('disabled', false),
    state: select('Validation State', {
        'default': null,
        'valid': 'valid',
        'invalid': 'invalid',
        'information': 'information',
        'warning': 'warning'
    }),
    ...overrides
});


storiesOf('Components|FormRadioItem', module)
    .addDecorator(withKnobs)
    .add('Default', () => (
        <FormRadioItem {...createProps()}>Text Option</FormRadioItem>
    ))
    .add('disabled', () => (
        <FormRadioItem disabled>Text Option</FormRadioItem>
    ))
    .add('compact', () => (
        <FormRadioItem compact>Text Option</FormRadioItem>
    ))
    .add('disable styles', () => (
        <FormRadioItem {...createProps()} disableStyles>Text Option</FormRadioItem>
    ));
