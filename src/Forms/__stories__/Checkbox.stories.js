import Checkbox from '../Checkbox';
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
    indeterminate: boolean('indeterminate', false),
    state: select('State', {
        'none': '',
        'success': 'success',
        'error': 'error',
        'information': 'information',
        'warning': 'warning'
    }),
    ...overrides
});


storiesOf('Components|Checkbox', module)
    .addDecorator(withKnobs)
    .add('Default', () => (
        <Checkbox {...createProps()}>Text Option</Checkbox>
    ))
    .add('indeterminate', () => (
        <Checkbox indeterminate>Text Option</Checkbox>
    ))
    .add('disabled', () => (
        <Checkbox disabled>Text Option</Checkbox>
    ))
    .add('compact', () => (
        <Checkbox compact>Text Option</Checkbox>
    ))
    .add('State | Error', () => (
        <Checkbox state='error'>Text Option</Checkbox>
    ))
    .add('State | Warning', () => (
        <Checkbox state='warning'>Text Option</Checkbox>
    ))
    .add('State | Success', () => (
        <Checkbox state='success'>Text Option</Checkbox>
    ))
    .add('State | Information', () => (
        <Checkbox state='information'>Text Option</Checkbox>
    ))
    .add('disable styles', () => (
        <Checkbox {...createProps()} disableStyles>Text Option</Checkbox>
    ));
