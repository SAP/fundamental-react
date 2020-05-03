/* eslint-disable react/no-multi-comp */
import FormRadioGroup from '../FormRadioGroup';
import FormRadioItem from '../FormRadioItem';
import React from 'react';
import {
    boolean,
    select
} from '@storybook/addon-knobs';

export default {
    title: 'Component API/Forms/FormRadioGroup',
    component: FormRadioGroup,
    subcomponents: { FormRadioItem }
};

export const primary = () => (
    <FormRadioGroup>
        <FormRadioItem>
            Option 1
        </FormRadioItem>
        <FormRadioItem>
            Option 2
        </FormRadioItem>
        <FormRadioItem>
            Option 3
        </FormRadioItem>
    </FormRadioGroup>
);

export const inline = () => (
    <FormRadioGroup inline>
        <FormRadioItem>
            Option 1
        </FormRadioItem>
        <FormRadioItem>
            Option 2
        </FormRadioItem>
        <FormRadioItem>
            Option 3
        </FormRadioItem>
    </FormRadioGroup>
);

export const compact = () => (
    <FormRadioGroup compact>
        <FormRadioItem>
            Option 1
        </FormRadioItem>
        <FormRadioItem>
            Option 2
        </FormRadioItem>
        <FormRadioItem>
            Option 3
        </FormRadioItem>
    </FormRadioGroup>
);

export const disabled = () => (
    <FormRadioGroup>
        <FormRadioItem disabled>
            Option 1
        </FormRadioItem>
        <FormRadioItem defaultChecked disabled>
            Option 2
        </FormRadioItem>
        <FormRadioItem disabled>
            Option 3
        </FormRadioItem>
    </FormRadioGroup>
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
    <FormRadioGroup>
        <FormRadioItem>
            Default
        </FormRadioItem>
        <FormRadioItem state='error'>
            Error
        </FormRadioItem>
        <FormRadioItem state='warning'>
            Warning
        </FormRadioItem>
        <FormRadioItem state='success'>
            Success
        </FormRadioItem>
        <FormRadioItem state='information'>
            Information
        </FormRadioItem>
    </FormRadioGroup>
);



export const dev = () => (
    <FormRadioGroup
        compact={boolean('compact', false)}
        inline={boolean('inline', false)}>
        <FormRadioItem
            disabled={boolean('disabled', false)}
            state={select('Validation State', {
                'default': null,
                'valid': 'valid',
                'invalid': 'invalid',
                'information': 'information',
                'warning': 'warning'
            })}>
            Option 1
        </FormRadioItem>
        <FormRadioItem
            disabled={boolean('disabled', false)}
            state={select('Validation State', {
                'default': null,
                'valid': 'valid',
                'invalid': 'invalid',
                'information': 'information',
                'warning': 'warning'
            })}>
            Option 2
        </FormRadioItem>
        <FormRadioItem
            disabled={boolean('disabled', false)}
            state={select('Validation State', {
                'default': null,
                'valid': 'valid',
                'invalid': 'invalid',
                'information': 'information',
                'warning': 'warning'
            })}>
            Option 3
        </FormRadioItem>
    </FormRadioGroup>
);


dev.story = {
    parameters: { docs: { disable: true } }
};
