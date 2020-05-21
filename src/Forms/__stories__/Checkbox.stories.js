/* eslint-disable react/no-multi-comp */
import Checkbox from '../Checkbox';
import React from 'react';
import {
    boolean,
    select
} from '@storybook/addon-knobs';

export default {
    title: 'Component API/Forms/Checkbox',
    component: Checkbox
};

export const primary = () => (<Checkbox>Default Checkbox</Checkbox>);

export const indeterminate = () => (
    <Checkbox indeterminate>Text Option</Checkbox>
);
export const disabled = () => (
    <Checkbox disabled>Text Option</Checkbox>
);
export const compact = () => (
    <Checkbox compact>Text Option</Checkbox>
);

export const validationState = () => (
    <div className='fddocs-container'>
        <Checkbox state='error'>Text Option</Checkbox>
        <Checkbox state='warning'>Text Option</Checkbox>
        <Checkbox state='success'>Text Option</Checkbox>
        <Checkbox state='information'>Text Option</Checkbox>
    </div>
);

export const dev = () => (
    <Checkbox
        compact={boolean('compact', false)}
        disabled={boolean('disabled', false)}
        indeterminate={boolean('indeterminate', false)}
        state={select('State', {
            'none': '',
            'success': 'success',
            'error': 'error',
            'information': 'information',
            'warning': 'warning'
        })}>Text Option</Checkbox>
);


dev.story = {
    parameters: { docs: { disable: true } }
};
