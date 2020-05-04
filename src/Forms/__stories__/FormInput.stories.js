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
export const disabled = () => (
    <FormInput disabled placeholder='Disabled' />
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

export const readOnly = () => (
    <FormInput placeholder='ReadOnly' readOnly />
);

readOnly.story = {
    parameters: {
        docs: {
            storyDescription: `**Read Only**: Used to display static information 
            in the context of a form.`
        }
    }
};

export const validationStates = () => (
    <div className='fr-container'>
        <FormInput placeholder='Error' validationState={{ state: 'error', text: 'Test validation state' }} />
        <FormInput placeholder='Warning' validationState={{ state: 'warning', text: 'Test validation state' }} />
        <FormInput placeholder='Information' validationState={{ state: 'information', text: 'Test validation state' }} />
        <FormInput placeholder='Success' validationState={{ state: 'success', text: 'Test validation state' }} />
    </div>
);

validationStates.story = {
    parameters: {
        docs: {
            storyDescription: `The state of the input field can reflect validity of the data entered, 
            whether the input data is editable or disabled.\n\n* **Default**: The field is 
            editable but no validation has occurred. \n\n* **Success**: The data format entered 
            has been validated and it’s correct, such as an email address.\n\n* **Error**: The 
            data entered is not valid and must be corrected.\n\n* **Warning**: The data entered 
            is formatted correctly but there are other issues are problematic but will not stop 
            the user from moving forward.\n\nAlong with Invalid and Warning, error messages should 
            be displayed below the field so the user can correct the error and move forward.`
        }
    }
};

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
dev.story = {
    parameters: { docs: { disable: true } }
};
