/* eslint-disable react/no-multi-comp */
import MultiInput from '../MultiInput';
import React from 'react';
import {
    boolean,
    select,
    text
} from '@storybook/addon-knobs';

export default {
    title: 'Component API/MultiInput',
    component: MultiInput
};

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

export const compact = () => (
    <MultiInput compact data={data}
        placeholder='Placeholder' />
);
export const disabled = () => (
    <MultiInput data={data}
        disabled
        placeholder='Placeholder' />
);

export const validationStates = () => (
    <div className='fr-container'>
        <MultiInput
            data={data}
            placeholder='Error'
            validationState={{ state: 'error', text: 'Test validation state' }} />
        <MultiInput
            data={data}
            placeholder='Warning'
            validationState={{ state: 'warning', text: 'Test validation state' }} />
        <MultiInput
            data={data}
            placeholder='Success'
            validationState={{ state: 'success', text: 'Test validation state' }} />
        <MultiInput
            data={data}
            placeholder='Information'
            validationState={{ state: 'information', text: 'Test validation state' }} />
    </div>
);

export const dev = () => (
    <MultiInput
        compact={boolean('compact', false)}
        data={data}
        disabled={boolean('disabled', false)}
        placeholder={text('Placeholder', 'Select a Fruit')}
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
