import MultiInput from '../MultiInput';
import React from 'react';
import { storiesOf } from '@storybook/react';
import {
    boolean,
    select,
    text,
    withKnobs
} from '@storybook/addon-knobs';

const data = [
    'Apple',
    'Apricot',
    'Acai',
    'African Moringa',
    'Bearberry',
    'Bilberry',
    'Blood orange',
    'Barbadine',
    'Barbados cherry',
    'Balsam Apple',
    'Chokeberry',
    'Cranberry',
    'Cupuacu'
];

const createProps = (overrides) => ({
    compact: boolean('compact', false),
    disabled: boolean('disabled', false),
    data: data,
    placeholder: text('Placeholder', 'Select a Fruit'),
    validationState: select('Validation State', {
        'none': '',
        'success': { state: 'success', text: 'placeholder text' },
        'error': { state: 'error', text: 'placeholder text' },
        'information': { state: 'information', text: 'placeholder text' },
        'warning': { state: 'warning', text: 'placeholder text' }
    }),
    ...overrides
});

storiesOf('Components|MultiInput', module)
    .addDecorator(withKnobs)
    .add('Dev', () => (
        <MultiInput {...createProps()} />
    ))
    .add('Compact', () => (
        <MultiInput compact data={data}
            placeholder='Placeholder' />
    ))
    .add('Disabled', () => (
        <MultiInput data={data} disabled
            placeholder='Placeholder' />
    ))
    .add('Validation State | Error', () => (
        <MultiInput
            data={data}
            placeholder='Default'
            validationState={{ state: 'error', text: 'Test validation state' }} />
    ))
    .add('Validation State | Warning', () => (
        <MultiInput
            data={data}
            placeholder='Default'
            validationState={{ state: 'warning', text: 'Test validation state' }} />
    ))
    .add('Validation State | Information', () => (
        <MultiInput
            data={data}
            placeholder='Default'
            validationState={{ state: 'information', text: 'Test validation state' }} />
    ))
    .add('Validation State | Success', () => (
        <MultiInput
            data={data}
            placeholder='Default'
            validationState={{ state: 'success', text: 'Test validation state' }} />
    ))
    .add('disable styles', () => (
        <MultiInput {...createProps()} disableStyles />
    ));
