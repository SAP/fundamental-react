/* eslint-disable react/no-multi-comp */
import { action } from '@storybook/addon-actions';
import React from 'react';
import StepInput from '../StepInput';
import {
    boolean,
    select,
    text
} from '@storybook/addon-knobs';


export default {
    title: 'Component API/StepInput',
    component: StepInput
};

export const primary = () => (
    <StepInput />
);
export const compact = () => (
    <StepInput compact />
);

export const disabled = () => (
    <StepInput disabled />
);

export const readOnly = () => (
    <StepInput readOnly />
);

export const validationStates = () => (
    <>
        <StepInput placeholder='Error'
            validationState={{
                state: 'error',
                text: 'Test validation state'
            }} />
        <StepInput placeholder='Warning'
            validationState={{
                state: 'warning',
                text: 'Test validation state'
            }} />
        <StepInput placeholder='Success'
            validationState={{
                state: 'success',
                text: 'Test validation state'
            }} />
        <StepInput placeholder='Information'
            validationState={{
                state: 'information',
                text: 'Test validation state'
            }} />
    </>
);


export const dev = () => (
    <StepInput
        compact={boolean('compact', false)}
        disabled={boolean('disabled', false)}
        onChange={action('step-value-change')}
        placeholder={text('Placeholder', 'Placeholder')}
        validationState={select('Validation State', {
            'none': '',
            'success': { state: 'success', text: 'placeholder text' },
            'error': { state: 'error', text: 'placeholder text' },
            'information': { state: 'information', text: 'placeholder text' },
            'warning': { state: 'warning', text: 'placeholder text' }
        })} />
);
dev.parameters = { docs: { disable: true } };
