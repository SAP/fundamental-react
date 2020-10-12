/* eslint-disable react/no-multi-comp */
import { action } from '@storybook/addon-actions';
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
export const hideSeconds = () => <Time showSecond={false} />;
export const hideMinutes = () => <Time showMinute={false} />;
export const hideHours = () => <Time showHour={false} />;

export const timeMeridiemSet = () => (
    <Time
        format12Hours={false}
        name='meridiem'
        time={{ hour: 22, minute: 34, second: 12, meridiem: 0 }} />
);

export const time12Set = () => (
    <Time
        format12Hours
        time={{ hour: 12, minute: 55, second: 6, meridiem: 0 }} />
);

export const dev = () => (
    <Time
        format12Hours
        onChange={action('on-change')}
        time={{ hour: 12, minute: 55, second: 6, meridiem: 0 }} />
);

export const noStyles = () => (
    <Time cssNamespace='xxx' />
);
noStyles.parameters = { docs: { disable: true } };
