/* eslint-disable react/no-multi-comp */
import FormInput from '../FormInput';
import React from 'react';
import {
    boolean,
    select,
    text
} from '@storybook/addon-knobs';

export default {
    title: 'Component API/Forms/FormInput',
    component: FormInput
};

export const primary = () => (
    <FormInput placeholder='Default' />
);

export const compact = () => (
    <FormInput compact placeholder='Compact' />
);

/**
 * **Disabled**: This indicates the field is not editable. A common use case is that this field is dependent on a previous entry
 * or selection within the form.
 */

export const disabled = () => (
    <FormInput disabled placeholder='Disabled' />
);

/**
 * **Read Only**: Used to display static information in the context of a form.
 */

export const readOnly = () => (
    <FormInput placeholder='ReadOnly' readOnly />
);


/**
 * The state of the input field can reflect validity of the data entered, whether the input data is editable or disabled.
 * * **Default**: The field is editable but no validation has occurred.
 * * **Success**: The data format entered has been validated and it’s correct, such as an email address.
 * * **Error**: The data entered is not valid and must be corrected.
 * * **Warning**: The data entered is formatted correctly but there are other issues are problematic but will not stop the user from moving forward.
 * Along with Invalid and Warning, error messages should be displayed below the field so the user can correct the error and move forward.
 */

export const validationStates = () => (
    <div className='fddocs-container'>
        <FormInput placeholder='Error' validationState={{ state: 'error', text: 'Test validation state' }} />
        <FormInput placeholder='Warning' validationState={{ state: 'warning', text: 'Test validation state' }} />
        <FormInput placeholder='Information' validationState={{ state: 'information', text: 'Test validation state' }} />
        <FormInput placeholder='Success' validationState={{ state: 'success', text: 'Test validation state' }} />
    </div>
);


export const dev = () => (
    <FormInput
        compact={boolean('Compact?', false)}
        disabled={boolean('Disabled?', false)}
        placeholder={text('Placeholder', 'Placeholder')}
        readOnly={boolean('Read only?', false)}
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
    <FormInput cssNamespace='xxx' placeholder='Default' />
);
noStyles.parameters = { docs: { disable: true } };
