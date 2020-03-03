import DatePicker from '../DatePicker';
import React from 'react';
import { storiesOf } from '@storybook/react';
import {
    boolean,
    date,
    optionsKnob,
    select,
    text,
    withKnobs
} from '@storybook/addon-knobs';

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

storiesOf('Components|DatePicker', module)
    .addDecorator(withKnobs)
    .add('Default', () => (
        <DatePicker
            blockedDates={[dateKnobToDate('block between dates (1)', blockedDateFirstDefault),
                dateKnobToDate('block between dates (2)', blockedDateSecondDefault)]}
            disableAfterDate={dateKnobToDate('disable after date', afterDateDefault)}
            disableBeforeDate={dateKnobToDate('disable before date', beforeDateDefault)}
            disableFutureDates={boolean('disable future dates', false)}
            disablePastDates={boolean('disable past dates', false)}
            disableWeekday={optionsKnob('disable weekdays', weekdayOptions, null, { display: 'check' })}
            disableWeekends={boolean('disable weekends', false)}
            disabledDates={[dateKnobToDate('disable between dates (1)', disabledDateFirstDefault),
                dateKnobToDate('disable between dates (2)', disabledDateSecondDefault)]}
            locale={text('locale', 'en')}
            validationState={select('Validation State',
                {
                    'none': '',
                    'success': { state: 'success', text: 'placeholder text' },
                    'error': { state: 'error', text: 'placeholder text' },
                    'information': { state: 'information', text: 'placeholder text' },
                    'warning': { state: 'warning', text: 'placeholder text' }
                }
            )} />
    ))
    .add('Validation State | Error', () => (
        <DatePicker validationState={{ state: 'error', text: 'Test validation state' }} />
    ))
    .add('Validation State | Warning', () => (
        <DatePicker validationState={{ state: 'warning', text: 'Test validation state' }} />
    ))
    .add('Validation State | Information', () => (
        <DatePicker validationState={{ state: 'information', text: 'Test validation state' }} />
    ))
    .add('Validation State | Success', () => (
        <DatePicker validationState={{ state: 'success', text: 'Test validation state' }} />
    ))
    .add('disable styles', () => (
        <DatePicker disableStyles />
    ))
    .add('range selection', () => (
        <DatePicker enableRangeSelection />
    ))
    .add('compact', () => (
        <DatePicker compact />
    ));
