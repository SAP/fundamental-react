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

/** There are 3 sizes for Busy Indicator: `s`, `m` & `l`. */

export const sizes = () => (
    <div className='fddocs-container'>
        <BusyIndicator show size='s' />
        <BusyIndicator show />
        <BusyIndicator show size='l' />
    </div>
);

sizes.storyName = 'Sizes';

export const dev = () => (
    <BusyIndicator
        show={boolean('show', true)}
        size={select('size', { 's': 's', 'm': 'm', 'l': 'l' })} />
);


dev.parameters = { docs: { disable: true } };

export const noStyles = () => (<BusyIndicator cssNamespace='xxx' show />);
noStyles.parameters = { docs: { disable: true } };
