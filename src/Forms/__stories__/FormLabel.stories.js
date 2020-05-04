/* eslint-disable react/no-multi-comp */
import { boolean } from '@storybook/addon-knobs';
import FormLabel from '../FormLabel';
import React from 'react';

export default {
    title: 'Component API/Forms/FormLabel',
    component: FormLabel
};

export const primary = () => (
    <FormLabel>Default</FormLabel>
);

export const required = () => (
    <FormLabel required>Required Label</FormLabel>
);

export const dev = () => (
    <FormLabel
        required={boolean('Required?', true)}>
        Default</FormLabel>
);


dev.story = {
    parameters: { docs: { disable: true } }
};
