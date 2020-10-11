/* eslint-disable react/no-multi-comp */
import { action } from '@storybook/addon-actions';
import Calendar from '../Calendar';
import moment from 'moment';
import React from 'react';
import {
    boolean,
    date,
    number,
    optionsKnob,
    text
} from '@storybook/addon-knobs';

export default {
    title: 'Component API/Calendar',
    component: Calendar,
    parameters: {
        storyshots: { disable: true }
    }
};

function dateKnobToDate(name, defaultValue) {
    const stringTimestamp = date(name, defaultValue);
    return moment(stringTimestamp);
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

export const compact = () => (<Calendar compact />);


/**
 * Disable weekends and all previous days.
 */

export const disableWeekends = () => (
    <Calendar
        disableBeforeDate={moment()}
        disableWeekends />
);

disableWeekends.storyName = 'Disabled Weekends and Disabled Before Date';

/**
 * Block(disable) next 10 days and all Mondays and Tuesdays.
 */

export const blockedDatesAndDisableWeekday = () => (
    <Calendar
        blockedDates={[moment(), moment().add(10, 'days')]}
        disableWeekday={['Monday', 'Tuesday']} />
);

/**
 * Focus on 1st January 2000 after rendering the Calendar.
 */

export const openToDate = () => {
    return <Calendar openToDate={moment().year('2000').month(0).date(1)} />;
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

export const rangeSelection = () => (
    <Calendar enableRangeSelection />
);

/**
 * Start (left to right) weekday columns from Monday.
 */

export const weekdayStart = () => {
    return <Calendar weekdayStart={1} />;
};

/**
 * Show a today button in the header that navigates to the current date in the set timezone.
 */

export const todayButton = () => {
    return <Calendar showToday />;
};

export const dev = () => (
    <Calendar
        blockedDates={[dateKnobToDate('block between dates (1)', blockedDateFirstDefault),
            dateKnobToDate('block between dates (2)', blockedDateSecondDefault)]}
        compact={boolean('compact', false)}
        disableAfterDate={dateKnobToDate('disable after date', afterDateDefault)}
        disableBeforeDate={dateKnobToDate('disable before date', beforeDateDefault)}
        disableFutureDates={boolean('disable future dates', false)}
        disablePastDates={boolean('disable past dates', false)}
        disableWeekday={optionsKnob('disable weekdays', weekdayOptions, null, { display: 'check' })}
        disableWeekends={boolean('disable weekends', false)}
        disabledDates={[dateKnobToDate('disable between dates (1)', disabledDateFirstDefault),
            dateKnobToDate('disable between dates (2)', disabledDateSecondDefault)]}
        enableRangeSelection={boolean('enableRangeSelection', false)}
        locale={text('locale', 'en')}
        onChange={action('on-change')}
        openToDate={dateKnobToDate('open to date', new Date())}
        showToday={boolean('showToday', false)}
        weekdayStart={number('weekdayStart', 0)} />
);

dev.parameters = {
    docs: { disable: true }
};

export const noStyles = () => (<Calendar cssNamespace='xxx' />);
noStyles.parameters = { docs: { disable: true } };
