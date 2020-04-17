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
    validationState: select('Validation State', {
        'none': '',
        'success': { state: 'success', text: 'placeholder text' },
        'error': { state: 'error', text: 'placeholder text' },
        'information': { state: 'information', text: 'placeholder text' },
        'warning': { state: 'warning', text: 'placeholder text' }
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
    .add('Validation State | Error', () => (
        <FormTextarea
            defaultValue='Error State'
            validationState={{ state: 'error', text: 'Test validation state' }} />
    ))
    .add('Validation State | Warning', () => (
        <FormTextarea
            defaultValue='Warning State'
            validationState={{ state: 'warning', text: 'Test validation state' }} />
    ))
    .add('Validation State | Information', () => (
        <FormTextarea
            defaultValue='Information State'
            validationState={{ state: 'information', text: 'Test validation state' }} />
    ))
    .add('Validation State | Success', () => (
        <FormTextarea
            defaultValue='Success State'
            validationState={{ state: 'success', text: 'Test validation state' }} />
    ));
