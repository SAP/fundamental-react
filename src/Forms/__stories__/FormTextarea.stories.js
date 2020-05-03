/* eslint-disable react/no-multi-comp */
import FormTextarea from '../FormTextarea';
import React from 'react';
import {
    boolean,
    select,
    text
} from '@storybook/addon-knobs';

export default {
    title: 'Component API/Forms/FormTextarea',
    component: FormTextarea
};

export const primary = () => (<FormTextarea defaultValue='Placeholder' />);

export const compact = () => (<FormTextarea compact defaultValue='Compact textarea' />);

export const disabled = () => (<FormTextarea defaultValue='Disabled textarea' disabled />);

disabled.story = {
    parameters: {
        docs: {
            storyDescription: `**Disabled**: This indicates the field is not 
            editable. A common use case is that this field is dependent on a previous entry or 
            selection within the form.`
        }
    }
};

export const readOnly = () => (<FormTextarea defaultValue='Placeholder' readOnly />);

readOnly.story = {
    parameters: {
        docs: {
            storyDescription: `**Read Only**: Used to display static information 
            in the context of a form.`
        }
    }
};

export const maxLength = () => (
    <FormTextarea defaultValue='Max Length'
        maxLength={150} />
);

export const validationStates = () => (
    <div className='fr-container'>
        <FormTextarea
            defaultValue='Error State'
            state='error' />
        <FormTextarea
            defaultValue='Warning State'
            state='warning' />
        <FormTextarea
            defaultValue='Information State'
            state='information' />
        <FormTextarea
            defaultValue='Success State'
            state='success' />
    </div>
);

export const dev = () => (
    <FormTextarea
        compact={boolean('compact', false)}
        defaultValue={text('Default Value', 'Default')}
        disabled={boolean('disabled', false)}
        readOnly={boolean('readOnly', false)}
        state={select('State', {
            'none': '',
            'success': 'success',
            'error': 'error',
            'information': 'information',
            'warning': 'warning'
        })} />
);


dev.story = {
    parameters: { docs: { disable: true } }
};
