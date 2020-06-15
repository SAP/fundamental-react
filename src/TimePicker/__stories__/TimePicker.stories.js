/* eslint-disable react/no-multi-comp */
import React from 'react';
import TimePicker from '../TimePicker';

export default {
    title: 'Component API/TimePicker',
    component: TimePicker
};
export const primary = () => (
    <TimePicker />
);

export const disabled = () => (
    <TimePicker disabled />
);

export const format12Hours = () => (
    <TimePicker format12Hours />
);

export const initialValue = () => (
    <TimePicker format12Hours value='10:30:34 am' />
);

export const hideSeconds = () => (
    <TimePicker showSecond={false} />
);
