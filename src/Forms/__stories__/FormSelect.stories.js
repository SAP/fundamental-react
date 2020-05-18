/* eslint-disable react/no-multi-comp */
import FormSelect from '../FormSelect';
import React from 'react';
import {
    boolean,
    select
} from '@storybook/addon-knobs';

export default {
    title: 'Component API/Forms/FormSelect',
    component: FormSelect
};
export const primary = () => (
    <FormSelect>
        <option>Duis malesuada odio volutpat elementum</option>
        <option>Suspendisse ante ligula</option>
        <option>Sed bibendum sapien at posuere interdum</option>
    </FormSelect>
);

export const compact = () => (
    <FormSelect compact>
        <option>Duis malesuada odio volutpat elementum</option>
        <option>Suspendisse ante ligula</option>
        <option>Sed bibendum sapien at posuere interdum</option>
    </FormSelect>
);

export const disabled = () => (
    <FormSelect disabled>
        <option>Duis malesuada odio volutpat elementum</option>
        <option>Suspendisse ante ligula</option>
        <option>Sed bibendum sapien at posuere interdum</option>
    </FormSelect>
);

disabled.story = {
    parameters: {
        docs: {
            storyDescription: `**Disabled**: This indicates the field is not 
            editable. A common use case is that this field is dependent on a previous entry or 
            selection within the form.`
        }
    }
};

export const validationStates = () => (
    <div className='fddocs-container'>
        <FormSelect state='error'>
            <option>Duis malesuada odio volutpat elementum</option>
            <option>Suspendisse ante ligula</option>
            <option>Sed bibendum sapien at posuere interdum</option>
        </FormSelect>
        <div className='fddocs-container--break' />
        <FormSelect state='warning'>
            <option>Duis malesuada odio volutpat elementum</option>
            <option>Suspendisse ante ligula</option>
            <option>Sed bibendum sapien at posuere interdum</option>
        </FormSelect>
        <div className='fddocs-container--break' />
        <FormSelect state='information'>
            <option>Duis malesuada odio volutpat elementum</option>
            <option>Suspendisse ante ligula</option>
            <option>Sed bibendum sapien at posuere interdum</option>
        </FormSelect>
        <div className='fddocs-container--break' />
        <FormSelect state='success'>
            <option>Duis malesuada odio volutpat elementum</option>
            <option>Suspendisse ante ligula</option>
            <option>Sed bibendum sapien at posuere interdum</option>
        </FormSelect>
    </div>
);

export const dev = () => (
    <FormSelect
        compact={boolean('compact', false)}
        disabled={boolean('disabled', false)}
        state={select('State', {
            'none': '',
            'success': 'success',
            'error': 'error',
            'information': 'information',
            'warning': 'warning'
        })}>
        <option>Duis malesuada odio volutpat elementum</option>
        <option>Suspendisse ante ligula</option>
        <option>Sed bibendum sapien at posuere interdum</option>
    </FormSelect>
);


dev.story = {
    parameters: { docs: { disable: true } }
};
