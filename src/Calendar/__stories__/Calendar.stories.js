/* eslint-disable react/no-multi-comp */
import Calendar from '../Calendar';
import moment from 'moment';
import React from 'react';
import {
    boolean,
    date,
    optionsKnob,
    text
} from '@storybook/addon-knobs';

export default {
    title: 'Component API/Calendar',
    component: Calendar
};

function dateKnobToDate(name, defaultValue) {
    const stringTimestamp = date(name, defaultValue);
    return new Date(stringTimestamp);
}

const afterDateDefault = new Date(new Date().getFullYear() + 1, 0, 1);
const beforeDateDefault = new Date(new Date().getFullYear() - 1, 0, 1);

const blockedDateFirstDefault = new Date(new Date().getFullYear(), new Date().getMonth() - 1, 1);
const blockedDateSecondDefault = new Date(new Date().getFullYear(), new Date().getMonth() - 1, 10);

const disabledDateFirstDefault = new Date(new Date().getFullYear(), new Date().getMonth() - 1, 15);
const disabledDateSecondDefault = new Date(new Date().getFullYear(), new Date().getMonth() - 1, 25);

const weekdayOptions = {
    Sunday: 'Sunday',
    Monday: 'Monday',
    Tuesday: 'Tuesday',
    Wednesday: 'Wednesday',
    Thursday: 'Thursday',
    Friday: 'Friday',
    Saturday: 'Saturday'
};

export const primary = () => (<Calendar />);

export const disableWeekends = () => (
    <Calendar
        disableBeforeDate={new Date()}
        disableWeekends />
);

disableWeekends.story = {
    name: 'Disabled Weekends and Disabled Before Date'
};

export const blockedDates = () => (
    <Calendar
        blockedDates={[new Date(2018, 1, 1, 0, 0, 0, 0), new Date(2018, 3, 3, 0, 0, 0, 0)]}
        disableWeekday={['Monday', 'Tuesday']} />
);

blockedDates.story = {
    name: 'Blocked dates'
};


export const specialDays = () => (
    <Calendar
        specialDays={{
            [moment().add(1, 'day').endOf('day').format('YYYYMMDD')]: 1,
            [moment().add(2, 'day').endOf('day').format('YYYYMMDD')]: 2,
            [moment().add(3, 'day').endOf('day').format('YYYYMMDD')]: 3,
            [moment().add(7, 'day').endOf('day').format('YYYYMMDD')]: 4
        }} />
);

specialDays.story = {
    name: 'Special Days'
};

export const rangeSelection = () => (
    <Calendar enableRangeSelection />
);

rangeSelection.story = {
    name: 'Range Selection'
};


export const dev = () => (
    <Calendar
        blockedDates={[dateKnobToDate('block between dates (1)', blockedDateFirstDefault),
            dateKnobToDate('block between dates (2)', blockedDateSecondDefault)]}
        disableAfterDate={dateKnobToDate('disable after date', afterDateDefault)}
        disableBeforeDate={dateKnobToDate('disable before date', beforeDateDefault)}
        disabledDates={[dateKnobToDate('disable between dates (1)', disabledDateFirstDefault),
            dateKnobToDate('disable between dates (2)', disabledDateSecondDefault)]}
        disableFutureDates={boolean('disable future dates', false)}
        disablePastDates={boolean('disable past dates', false)}
        disableWeekday={optionsKnob('disable weekdays', weekdayOptions, null, { display: 'check' })}
        disableWeekends={boolean('disable weekends', false)}
        locale={text('locale', 'en')} />
);

dev.story = {
    parameters: { docs: { disable: true } }
};
