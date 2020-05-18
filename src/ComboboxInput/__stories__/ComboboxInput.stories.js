/* eslint-disable react/no-multi-comp */
import ComboboxInput from '../ComboboxInput';
import React from 'react';
import {
    boolean,
    select,
    text
} from '@storybook/addon-knobs';

export default {
    title: 'Component API/ComboboxInput',
    component: ComboboxInput
};

const options = [
    { key: '1', text: 'List Item 1' },
    { key: '2', text: 'List Item 2' },
    { key: '3', text: 'List Item 3' },
    { key: '4', text: 'List Item 4' }
];


export const primary = () => (
    <ComboboxInput options={options} placeholder='Select an item' />
);

export const disabled = () => (
    <ComboboxInput disabled
        options={options} placeholder='Placeholder' />
);

export const compact = () => (
    <ComboboxInput compact
        options={options} placeholder='Placeholder' />
);

export const validationState = () => (
    <div className='docs-container'>
        <ComboboxInput
            options={options}
            placeholder='Error'
            validationState={{ state: 'error', text: 'Test validation state' }} />
        <ComboboxInput
            options={options}
            placeholder='Warning'
            validationState={{ state: 'warning', text: 'Test validation state' }} />
        <ComboboxInput
            options={options}
            placeholder='Information'
            validationState={{ state: 'information', text: 'Test validation state' }} />
        <ComboboxInput
            options={options}
            placeholder='Success'
            validationState={{ state: 'success', text: 'Test validation state' }} />
    </div>
);

export const dev = () => (
    <ComboboxInput
        compact={boolean('compact', false)}
        disabled={boolean('disabled', false)}
        options={options}
        placeholder={text('Placeholder', 'Placeholder')}
        validationState={select('Validation State', {
            'none': '',
            'success': { state: 'success', text: 'placeholder text' },
            'error': { state: 'error', text: 'placeholder text' },
            'information': { state: 'information', text: 'placeholder text' },
            'warning': { state: 'warning', text: 'placeholder text' }
        })} />
);


dev.story = {
    parameters: { docs: { disable: true } }
};
