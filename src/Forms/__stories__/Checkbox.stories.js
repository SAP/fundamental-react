/* eslint-disable react/no-multi-comp */
import Checkbox from '../Checkbox';
import React from 'react';
import {
    boolean,
    select,
    text
} from '@storybook/addon-knobs';

export default {
    title: 'Component API/Forms/Checkbox',
    component: Checkbox
};

export const primary = () => (<Checkbox>Default Checkbox</Checkbox>);

export const indeterminate = () => (
    <Checkbox indeterminate>Text Option</Checkbox>
);
export const controlledChecked = () => (
    <Checkbox checked={boolean('checked (controlled)', false)}>Text Option</Checkbox>
);
export const defaultChecked = () => (
    <Checkbox defaultChecked>Text Option</Checkbox>
);
export const disabled = () => (
    <Checkbox disabled>Text Option</Checkbox>
);
export const compact = () => (
    <Checkbox compact>Text Option</Checkbox>
);

export const validationStates = () => (
    <div className='fddocs-container'>
        <Checkbox validationState={{ state: 'error', text: 'Test validation state' }}>Error State</Checkbox>
        <Checkbox placeholder='Warning' validationState={{ state: 'warning', text: 'Test validation state' }}>Warning State</Checkbox>
        <Checkbox placeholder='Information' validationState={{ state: 'information', text: 'Test validation state' }}>Information State</Checkbox>
        <Checkbox placeholder='Success' validationState={{ state: 'success', text: 'Test validation state' }}>Success State</Checkbox>
    </div>
);

export const dev = () => (
    <Checkbox
        className={text('className', '')}
        compact={boolean('compact', false)}
        disabled={boolean('disabled', false)}
        indeterminate={boolean('indeterminate', false)}
        validationState={select('Validation State', {
            'none': '',
            'success': { state: 'success', text: 'placeholder text' },
            'error': { state: 'error', text: 'placeholder text' },
            'information': { state: 'information', text: 'placeholder text' },
            'warning': { state: 'warning', text: 'placeholder text' }
        })}>Text Option</Checkbox>
);

controlledChecked.parameters = { docs: { disable: true } };
dev.parameters = { docs: { disable: true } };
