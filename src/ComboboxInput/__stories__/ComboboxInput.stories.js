import ComboboxInput from '../ComboboxInput';
import React from 'react';
import { storiesOf } from '@storybook/react';
import {
    boolean,
    select,
    text,
    withKnobs
} from '@storybook/addon-knobs';

const options = [
    { key: '1', text: 'List Item 1' },
    { key: '2', text: 'List Item 2' },
    { key: '3', text: 'List Item 3' },
    { key: '4', text: 'List Item 4' }
];

const createProps = (overrides) => ({
    compact: boolean('compact', false),
    disabled: boolean('disabled', false),
    options,
    validationState: select('Validation State', {
        'none': '',
        'success': { state: 'success', text: 'placeholder text' },
        'error': { state: 'error', text: 'placeholder text' },
        'information': { state: 'information', text: 'placeholder text' },
        'warning': { state: 'warning', text: 'placeholder text' }
    }),
    placeholder: text('Placeholder', 'Placeholder'),
    ...overrides
});

storiesOf('Components|ComboboxInput', module)
    .addDecorator(withKnobs)
    .add('Dev', () => (
        <ComboboxInput {...createProps()} />
    ))
    .add('Disabled', () => (
        <ComboboxInput disabled
            options={options} placeholder='Placeholder' />
    ))
    .add('Compact', () => (
        <ComboboxInput compact
            options={options} placeholder='Placeholder' />
    ))
    .add('Validation State | Error', () => (
        <ComboboxInput
            options={options}
            placeholder='Default'
            validationState={{ state: 'error', text: 'Test validation state' }} />
    ))
    .add('Validation State | Warning', () => (
        <ComboboxInput
            options={options}
            placeholder='Default'
            validationState={{ state: 'warning', text: 'Test validation state' }} />
    ))
    .add('Validation State | Information', () => (
        <ComboboxInput
            options={options}
            placeholder='Default'
            validationState={{ state: 'information', text: 'Test validation state' }} />
    ))
    .add('Validation State | Success', () => (
        <ComboboxInput
            options={options}
            placeholder='Default'
            validationState={{ state: 'success', text: 'Test validation state' }} />
    ))
    .add('disable styles', () => (
        <ComboboxInput
            {...createProps()}
            disableStyles />
    ));
