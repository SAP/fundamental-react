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
        <FormLabel htmlFor='primaryLabelExample' >Default Label</FormLabel>
        <FormInput id='primaryLabelExample' />
    </FormItem>
);

export const required = () => (
    <FormItem>
        <FormLabel
            htmlFor='requiredLabelExample'
            required>
            Required Label
        </FormLabel >
        <FormInput id='requiredLabelExample' />
    </FormItem>
);

/** To achieve overflow proof colon provide the `withColon` property. The `:` character will be added at the end of a label as pseudo element. */

export const withColon = () => (
    <div style={{
        maxWidth: '250px'
    }}>
        <FormItem>
            <FormLabel
                htmlFor='withColonLabelExample'
                withColon>
                Overflow proof colon, overflow proof colon, overflow proof colon
            </FormLabel>
            <FormInput id='withColonLabelExample' />
        </FormItem>
    </div>
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
            htmlFor='devLabelExample'
            required={boolean('Required?', true)}
            withColon={boolean('With colon?', false)} >
            Dev
        </FormLabel>
        <FormInput id='devLabelExample' />
    </FormItem>
);


dev.parameters = { docs: { disable: true } };
