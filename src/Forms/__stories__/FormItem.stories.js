/* eslint-disable react/no-multi-comp */
import FormInput from '../FormInput';
import FormItem from '../FormItem';
import FormLabel from '../FormLabel';
import React from 'react';


export default {
    title: 'Component API/Forms/FormItem',
    component: FormItem
};

export const primary = () => (<FormItem>
    <FormLabel htmlFor='input-1'>Default Input</FormLabel>
    <FormInput id='input-1' placeholder='Field placeholder text' />
</FormItem>);

export const inline = () => (<FormItem isHorizontal>
    <FormLabel htmlFor='input-1'>Default Input</FormLabel>
    <FormInput id='input-1' placeholder='Field placeholder text' />
</FormItem>);

export const noStyles = () => (
    <FormItem cssNamespace='xxx'>
        <FormLabel htmlFor='input-1'>Default Input</FormLabel>
        <FormInput id='input-1' placeholder='Field placeholder text' />
    </FormItem>
);
noStyles.parameters = { docs: { disable: true } };
