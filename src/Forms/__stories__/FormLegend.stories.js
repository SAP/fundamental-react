import FormLegend from '../FormLegend';
import React from 'react';

export default {
    title: 'Component API/Forms/FormLegend',
    component: FormLegend
};

export const primary = () => (<FormLegend>Default</FormLegend>);

primary.story = {
    parameters: { docs: { disable: true } }
};
