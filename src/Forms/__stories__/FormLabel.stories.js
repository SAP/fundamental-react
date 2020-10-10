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

/** To achieve overflow proof colon provide the `includeColon` property. The `:` character will be added at the end of a label as pseudo element. */

export const includeColon = () => (
    <div style={{
        maxWidth: '250px'
    }}>
        <FormItem>
            <FormLabel
                htmlFor='includeColonLabelExample'
                includeColon>
                Overflow proof colon, overflow proof colon, overflow proof colon
            </FormLabel>
            <FormInput id='includeColonLabelExample' />
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
            includeColon={boolean('Include colon?', false)}
            required={boolean('Required?', true)}>
            Dev
        </FormLabel>
        <FormInput id='devLabelExample' />
    </FormItem>
);


dev.parameters = { docs: { disable: true } };

export const noStyles = () => (
    <FormItem cssNamespace='xxx'>
        <FormLabel htmlFor='primaryLabelExample' >Default Label</FormLabel>
        <FormInput id='primaryLabelExample' />
    </FormItem>
);
noStyles.parameters = { docs: { disable: true } };
