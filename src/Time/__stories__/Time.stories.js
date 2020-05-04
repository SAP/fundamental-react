/* eslint-disable react/no-multi-comp */
import React from 'react';
import Time from '../Time';

export default {
    title: 'Component API/Time',
    component: Time
};
export const primary = () => (
    <Time />
);

export const meridiemTime = () => <Time name='meridiem' />;
export const disabledTime = () => <Time disabled />;
export const customTime = () => <Time name='custom' />;
export const twelveHour = () => <Time format12Hours />;
export const noSpinner = () => <Time spinners={false} />;
export const hideSeconds = () => <Time showSecond={false} />;
export const hideMinutes = () => <Time showMinute={false} />;
export const hideHours = () => <Time showHour={false} />;

export const timeMeridiemSet = () => (
    <Time
        format12Hours={false}
        name='meridiem'
        time={{ hour: 22, minute: 34, second: 12, meridiem: 0 }} />
);
