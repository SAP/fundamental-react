/* eslint-disable no-console */
/* eslint-disable react/no-multi-comp */
import { action } from '@storybook/addon-actions';
import React from 'react';
import Select from '../Select';
import {
    boolean,
    select,
    text
} from '@storybook/addon-knobs';

const options = [
    { key: '1', text: 'List Item 1' },
    { key: '2', text: 'List Item 2' },
    { key: '3', text: 'List Item 3' },
    { key: '4', text: 'List Item 4' }
];


export default {
    title: 'Component API/Select',
    component: Select
};

export const primary = () => (
    <Select
        options={options}
        placeholder='Select' />
);

export const compact = () => (
    <Select
        compact
        options={options}
        placeholder='Select' />
);
export const disabled = () => (
    <Select
        disabled
        options={options}
        placeholder='Select' />
);
export const readOnly = () => (
    <Select
        options={options}
        placeholder='Select'
        readOnly
        selectedKey={'1'} />
);
export const validationStates = () => (
    <div className='fddocs-container'>
        <Select
            options={options}
            placeholder='Error'
            validationState={{ state: 'error', text: 'Test validation state' }} />
        <Select
            options={options}
            placeholder='Warning'
            validationState={{ state: 'warning', text: 'Test validation state' }} />
        <Select
            options={options}
            placeholder='Success'
            validationState={{ state: 'success', text: 'Test validation state' }} />
        <Select
            options={options}
            placeholder='Information'
            validationState={{ state: 'information', text: 'Test validation state' }} />
    </div>
);
export const emptyOption = () => (
    <Select
        emptyAriaLabel='Select an option'
        includeEmptyOption
        options={options} />
);

export const dev = () => (
    <Select
        compact={boolean('compact', false)}
        disabled={boolean('disabled', false)}
        onBlur={action('on-blur')}
        onClick={action('on-click')}
        onSelect={action('on-select')}
        options={options}
        placeholder={text('placeholder', 'select')}
        validationState={select('Validation State', {
            'none': '',
            'success': { state: 'success', text: 'placeholder text' },
            'error': { state: 'error', text: 'placeholder text' },
            'information': { state: 'information', text: 'placeholder text' },
            'warning': { state: 'warning', text: 'placeholder text' }
        })} />
);
dev.parameters = { docs: { disable: true } };

export const noStyles = () => (
    <Select
        cssNamespace='xxx'
        options={options}
        placeholder='Select' />
);
noStyles.parameters = { docs: { disable: true } };
