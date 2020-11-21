/* eslint-disable react/no-multi-comp */
import { action } from '@storybook/addon-actions';
import Calendar from '../Calendar';
import moment from 'moment';
import React from 'react';
import {
    array,
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

const disabledDateRangeFirstDefault = new Date(new Date().getFullYear(), new Date().getMonth() - 1, 18);
const disabledDateRangeSecondDefault = new Date(new Date().getFullYear(), new Date().getMonth() - 1, 22);
const disabledDateRangeThirdDefault = new Date(new Date().getFullYear(), new Date().getMonth() - 1, 24);
const disabledDateRangeFourthDefault = new Date(new Date().getFullYear(), new Date().getMonth() - 1, 26);

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
        compact={boolean('compact', true)}
        dateFormat='YYYY.MM.DD'
        disableAfterDate={dateKnobToDate('disable after date', afterDateDefault)}
        disableBeforeDate={dateKnobToDate('disable before date', beforeDateDefault)}
        disableFutureDates={boolean('disable future dates', false)}
        disablePastDates={boolean('disable past dates', false)}
        disableWeekday={optionsKnob('disable weekdays', weekdayOptions, null, { display: 'check' })}
        disableWeekends={boolean('disable weekends', false)}
        disabledDateRanges={[
            [
                dateKnobToDate('disabled date range 1-1', disabledDateRangeFirstDefault),
                dateKnobToDate('disabled date range 1-2', disabledDateRangeSecondDefault)
            ],
            [
                dateKnobToDate('disabled date range 2-1', disabledDateRangeThirdDefault),
                dateKnobToDate('disabled date range 2-2', disabledDateRangeFourthDefault)
            ]
        ]}
        disabledDates={array('disabled dates', ['2020.10.12'])}
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
