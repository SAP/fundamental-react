import Calendar from '../Calendar';
import React from 'react';
import { storiesOf } from '@storybook/react';
import {
    boolean,
    date,
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

storiesOf('Components|Calendar', module)
    .addDecorator(withKnobs)
    .add('Default', () => (
        <Calendar
            blockedDates={[dateKnobToDate('block between dates (1)', blockedDateFirstDefault),
                dateKnobToDate('block between dates (2)', blockedDateSecondDefault)]}
            disableAfterDate={dateKnobToDate('disable after date', afterDateDefault)}
            disableBeforeDate={dateKnobToDate('disable before date', beforeDateDefault)}
            disableFutureDates={boolean('disable future dates', false)}
            disablePastDates={boolean('disable past dates', false)}
            disableWeekends={boolean('disable weekends', false)}
            disabledDates={[dateKnobToDate('disable between dates (1)', disabledDateFirstDefault),
                dateKnobToDate('disable between dates (2)', disabledDateSecondDefault)]} />
    ))
    .add('disable styles', () => (
        <Calendar disableStyles />
    ))
    .add('custom styles', () => (
        <Calendar
            customStyles={require('../../utils/WithStyles/customStylesTest.css')} />
    ))
    .add('range selection', () => (
        <Calendar enableRangeSelection />
    ))
    .add('disabled weekdays', () => (
        <Calendar disableWeekday={['Monday', 'Wednesday', 'Friday']} />
    ));
