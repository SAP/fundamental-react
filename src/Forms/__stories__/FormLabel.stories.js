/* eslint-disable react/no-multi-comp */
import { boolean } from '@storybook/addon-knobs';
import FormInput from '../FormInput';
import FormItem from '../FormItem';
import FormLabel from '../FormLabel';
import React from 'react';

export default {
    title: 'Component API/Forms/FormLabel',
    component: FormLabel
};

export const primary = () => (
    <FormItem>
        <FormLabel>Default Label</FormLabel>
        <FormInput />
    </FormItem>
);

export const required = () => (
    <FormItem>
        <FormLabel required>Required Label</FormLabel>
        <FormInput />
    </FormItem>
);

export const disabled = () => (
    <FormItem>
        <FormLabel disabled>Disabled Label</FormLabel>
        <FormInput disabled />
    </FormItem>
);

export const dev = () => (
    <FormItem>
        <FormLabel
            required={boolean('Required?', true)}>
            Default</FormLabel>
        <FormInput />
    </FormItem>
);


dev.story = {
    parameters: { docs: { disable: true } }
};
