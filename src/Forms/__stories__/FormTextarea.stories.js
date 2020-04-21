import FormTextarea from '../FormTextarea';
import React from 'react';
import { storiesOf } from '@storybook/react';
import {
    boolean,
    select,
    text,
    withKnobs
} from '@storybook/addon-knobs';

const createProps = (overrides) => ({
    compact: boolean('compact', false),
    defaultValue: text('Default Value', 'Default'),
    disabled: boolean('disabled', false),
    readOnly: boolean('readOnly', false),
    state: select('State', {
        'none': '',
        'success': 'success',
        'error': 'error',
        'information': 'information',
        'warning': 'warning'
    }),
    ...overrides
});

storiesOf('Components|FormTextarea', module)
    .addDecorator(withKnobs)
    .add('Default', () => (
        <FormTextarea {...createProps()} />
    ))
    .add('disable styles', () => (
        <FormTextarea {...createProps()} disableStyles />
    ))
    .add('Max length', () => (
        <FormTextarea {...createProps({ defaultValue: 'Max Length', maxLength: 150 })} />
    ))
    .add('State | Error', () => (
        <FormTextarea
            defaultValue='Error State'
            state='error' />
    ))
    .add('State | Warning', () => (
        <FormTextarea
            defaultValue='Warning State'
            state='warning' />
    ))
    .add('State | Information', () => (
        <FormTextarea
            defaultValue='Information State'
            state='information' />
    ))
    .add('State | Success', () => (
        <FormTextarea
            defaultValue='Success State'
            state='success' />
    ));
