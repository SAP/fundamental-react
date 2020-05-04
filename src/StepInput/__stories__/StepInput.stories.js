/* eslint-disable react/no-multi-comp */
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
        disableStyles={boolean('disableStyles', false)}
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
