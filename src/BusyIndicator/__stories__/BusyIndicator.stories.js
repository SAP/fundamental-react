/* eslint-disable react/no-multi-comp */
import BusyIndicator from '../BusyIndicator';
import React from 'react';
import {
    boolean,
    select
} from '@storybook/addon-knobs';

export default {
    title: 'Component API/BusyIndicator',
    component: BusyIndicator
};

export const primary = () => (<BusyIndicator show />);


export const sizes = () => (
    <div className='docs-container'>
        <BusyIndicator show size='s' />
        <BusyIndicator show />
        <BusyIndicator show size='l' />
    </div>
);

sizes.story = {
    name: 'Sizes',
    parameters: {
        docs: {
            storyDescription: 'There are 3 sizes for Busy Indicator: `s`, `m` & `l`.'
        }
    }
};


export const dev = () => (
    <BusyIndicator
        show={boolean('show', true)}
        size={select('size', { 's': 's', 'm': 'm', 'l': 'l' })} />
);


dev.story = {
    parameters: { docs: { disable: true } }
};
