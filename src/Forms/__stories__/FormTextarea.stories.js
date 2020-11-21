/* eslint-disable react/no-multi-comp */
import { action } from '@storybook/addon-actions';
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

/**
 * **Disabled**: This indicates the field is not editable. A common use case is that this field is dependent on a previous entry or selection within the form.
 */

export const disabled = () => (<FormTextarea defaultValue='Disabled textarea' disabled />);


/** **Read Only**: Used to display static information in the context of a form. */

export const readOnly = () => (<FormTextarea defaultValue='Placeholder' readOnly />);

export const maxLength = () => (
    <FormTextarea defaultValue='Max Length'
        maxLength={150} />
);

export const validationStates = () => (
    <div className='fddocs-container'>
        <FormTextarea
            defaultValue='Error State'
            validationState={{ state: 'error', text: 'Test validation state' }} />
        <FormTextarea
            defaultValue='Warning State'
            validationState={{ state: 'warning', text: 'Test validation state' }} />
        <FormTextarea
            defaultValue='Information State'
            validationState={{ state: 'information', text: 'Test validation state' }} />
        <FormTextarea
            defaultValue='Success State'
            validationState={{ state: 'success', text: 'Test validation state' }} />
    </div>
);

export const dev = () => (
    <FormTextarea
        compact={boolean('compact', false)}
        defaultValue={text('Default Value', 'Default')}
        disabled={boolean('disabled', false)}
        onChange={action('on-change')}
        readOnly={boolean('readOnly', false)}
        validationState={select('Validation State', {
            'none': '',
            'success': { state: 'success', text: 'placeholder text' },
            'error': { state: 'error', text: 'placeholder text' },
            'information': { state: 'information', text: 'placeholder text' },
            'warning': { state: 'warning', text: 'placeholder text' }
        })} />
);


dev.parameters = { docs: { disable: true } };

export const noStyles = () => (<FormTextarea cssNamespace='xxx' defaultValue='Placeholder' />);
noStyles.parameters = { docs: { disable: true } };
