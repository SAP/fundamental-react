import React from 'react';
import Select from '../Select';
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

storiesOf('Components|Select', module)
    .addDecorator(withKnobs)
    .add('Dev', () => (
        <Select
            compact={boolean('compact', false)}
            disabled={boolean('disabled', false)}
            options={options}
            placeholder={text('placeholder', 'select')}
            validationState={select('Validation State', {
                'none': '',
                'success': { state: 'success', text: 'placeholder text' },
                'error': { state: 'error', text: 'placeholder text' },
                'information': { state: 'information', text: 'placeholder text' },
                'warning': { state: 'warning', text: 'placeholder text' }
            })} />
    ))
    .add('Compact', () => (
        <Select
            compact
            options={options}
            placeholder='Select' />
    ))
    .add('Disabled', () => (
        <Select
            disabled
            options={options}
            placeholder='Select' />
    ))
    .add('Validation State | Error', () => (
        <Select
            options={options}
            placeholder='Default'
            validationState={{ state: 'error', text: 'Test validation state' }} />
    ))
    .add('Validation State | Warning', () => (
        <Select
            options={options}
            placeholder='Default'
            validationState={{ state: 'warning', text: 'Test validation state' }} />
    ))
    .add('Validation State | Information', () => (
        <Select
            options={options}
            placeholder='Default'
            validationState={{ state: 'information', text: 'Test validation state' }} />
    ))
    .add('Validation State | Success', () => (
        <Select
            options={options}
            placeholder='Default'
            validationState={{ state: 'success', text: 'Test validation state' }} />
    ))
    .add('disable styles', () => (
        <Select
            disableStyles
            options={options} />
    ));
