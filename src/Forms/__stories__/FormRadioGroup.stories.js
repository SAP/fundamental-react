/* eslint-disable react/no-multi-comp */
import { action } from '@storybook/addon-actions';
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
        <FormRadioItem data='option1'>
            Option 1
        </FormRadioItem>
        <FormRadioItem data='option2'>
            Option 2
        </FormRadioItem>
        <FormRadioItem data='option3'>
            Option 3
        </FormRadioItem>
    </FormRadioGroup>
);

export const inline = () => (
    <FormRadioGroup inline>
        <FormRadioItem data='option1'>
            Option 1
        </FormRadioItem>
        <FormRadioItem data='option2'>
            Option 2
        </FormRadioItem>
        <FormRadioItem data='option3'>
            Option 3
        </FormRadioItem>
    </FormRadioGroup>
);

export const compact = () => (
    <FormRadioGroup compact>
        <FormRadioItem data='option1'>
            Option 1
        </FormRadioItem>
        <FormRadioItem data='option2'>
            Option 2
        </FormRadioItem>
        <FormRadioItem data='option3'>
            Option 3
        </FormRadioItem>
    </FormRadioGroup>
);

/**
 * **Disabled**: This indicates the field is not editable. A common use case is that this field is dependent on a
 * previous entry or selection within the form.
 */

export const disabled = () => (
    <FormRadioGroup>
        <FormRadioItem data='option1' disabled>
            Option 1
        </FormRadioItem>
        <FormRadioItem data='option2' defaultChecked
            disabled>
            Option 2
        </FormRadioItem>
        <FormRadioItem data='option3' disabled>
            Option 3
        </FormRadioItem>
    </FormRadioGroup>
);

export const validationStates = () => (
    <FormRadioGroup>
        <FormRadioItem data='DefaultOption'>
            Default
        </FormRadioItem>
        <FormRadioItem data='ErrorOption' state='error'>
            Error
        </FormRadioItem>
        <FormRadioItem data='WarningOption' state='warning'>
            Warning
        </FormRadioItem>
        <FormRadioItem data='SuccessOption' state='success'>
            Success
        </FormRadioItem>
        <FormRadioItem data='InformationOption' state='information'>
            Information
        </FormRadioItem>
    </FormRadioGroup>
);



export const dev = () => (
    <FormRadioGroup
        compact={boolean('compact', false)}
        inline={boolean('inline', false)}
        onChange={action('on-change')}>
        <FormRadioItem
            data='test'
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
            data='test2'
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
            data={{ 'test3': 'nice' }}
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


dev.parameters = { docs: { disable: true } };

export const noStyles = () => (
    <FormRadioGroup cssNamespace='xxx'>
        <FormRadioItem data='option1'>
            Option 1
        </FormRadioItem>
        <FormRadioItem data='option2'>
            Option 2
        </FormRadioItem>
        <FormRadioItem data='option3'>
            Option 3
        </FormRadioItem>
    </FormRadioGroup>
);
noStyles.parameters = { docs: { disable: true } };
