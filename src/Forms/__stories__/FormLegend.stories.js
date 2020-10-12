/* eslint-disable react/no-multi-comp */
import FormLegend from '../FormLegend';
import React from 'react';

export default {
    title: 'Component API/Forms/FormLegend',
    component: FormLegend
};

export const primary = () => (<FormLegend>Default</FormLegend>);

primary.parameters = { docs: { disable: true } };

export const noStyles = () => (<FormLegend cssNamespace='xxx'>Default</FormLegend>);
noStyles.parameters = { docs: { disable: true } };
