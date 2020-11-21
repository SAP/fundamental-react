/* eslint-disable react/no-multi-comp */
import { action } from '@storybook/addon-actions';
import FormLabel from '../../Forms/FormLabel';
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
    <>
        <FormLabel htmlFor='primary'>Amount</FormLabel>
        <StepInput inputId='primary' />
    </>
);
export const compact = () => (
    <>
        <FormLabel htmlFor='compact'>Amount</FormLabel>
        <StepInput compact inputId='compact' />
    </>
);

export const disabled = () => (
    <>
        <FormLabel htmlFor='disabled'>Amount</FormLabel>
        <StepInput disabled inputId='disabled' />
    </>
);

export const readOnly = () => (
    <>
        <FormLabel htmlFor='readOnly'>Amount</FormLabel>
        <StepInput inputId='readOnly' readOnly />
    </>
);

export const validationStates = () => (
    <>
        <div>
            <FormLabel htmlFor='error'>Amount</FormLabel>
            <StepInput
                inputId='error'
                placeholder='Error'
                validationState={{
                    state: 'error',
                    text: 'Test validation state'
                }} />
        </div>
        <div>
            <FormLabel htmlFor='warning'>Amount</FormLabel>
            <StepInput
                inputId='warning'
                placeholder='Warning'
                validationState={{
                    state: 'warning',
                    text: 'Test validation state'
                }} />
        </div>
        <div>
            <FormLabel htmlFor='success'>Amount</FormLabel>
            <StepInput
                inputId='success'
                placeholder='Success'
                validationState={{
                    state: 'success',
                    text: 'Test validation state'
                }} />
        </div>
        <div>
            <FormLabel htmlFor='information'>Amount</FormLabel>
            <StepInput
                inputId='information'
                placeholder='Information'
                validationState={{
                    state: 'information',
                    text: 'Test validation state'
                }} />
        </div>
    </>
);


export const dev = () => (
    <>
        <FormLabel htmlFor='dev-stepinput'>Amount</FormLabel>
        <StepInput
            compact={boolean('compact', false)}
            disabled={boolean('disabled', false)}
            inputId='dev-stepinput'
            onChange={action('step-value-change')}
            placeholder={text('Placeholder', 'Placeholder')}
            validationState={select('Validation State', {
                'none': '',
                'success': { state: 'success', text: 'placeholder text' },
                'error': { state: 'error', text: 'placeholder text' },
                'information': { state: 'information', text: 'placeholder text' },
                'warning': { state: 'warning', text: 'placeholder text' }
            })} />
    </>
);
dev.parameters = { docs: { disable: true } };

export const noStyles = () => (
    <>
        <FormLabel htmlFor='nostyles'>Amount</FormLabel>
        <StepInput cssNamespace='xxx' inputId='nostyles' />
    </>
);
noStyles.parameters = { docs: { disable: true } };
