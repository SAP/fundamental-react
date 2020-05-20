/* eslint-disable react/no-multi-comp */
import DatePicker from '../DatePicker';
import FormLabel from '../../Forms/FormLabel';
import LayoutGrid from '../../LayoutGrid/LayoutGrid';
import moment from 'moment';
import React from 'react';
import {
    boolean,
    date,
    optionsKnob,
    select,
    text
} from '@storybook/addon-knobs';

export default {
    title: 'Component API/DatePicker',
    component: DatePicker
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
const dateFormatOptionsLabel = 'Date Format';
const dateFormatOptions = {
    'MM/DD/YYYY': 'MM/DD/YYYY',
    'MM-DD-YYYY': 'MM-DD-YYYY',
    'MM.DD.YYYY': 'MM.DD.YYYY',
    'DD/MM/YYYY': 'DD/MM/YYYY',
    'DD-MM-YYYY': 'DD-MM-YYYY',
    'DD.MM.YYYY': 'DD.MM.YYYY',
    'YYYY/MM/DD': 'YYYY/MM/DD',
    'YYYY-MM-DD': 'YYYY-MM-DD',
    'YYYY.MM.DD': 'YYYY.MM.DD',
    None: null
};
const dateFormatDefaultValue = null;
const dateFormatGroupId = 'GROUP-DATE-FORMAT';


export const primary = () => (
    <DatePicker />
);

export const compact = () => (
    <DatePicker compact />
);


compact.story = {
    name: 'Compact'
};

export const disabled = () => (
    <DatePicker disabled />
);


disabled.story = {
    name: 'Disabled'
};

export const readOnly = () => (
    <DatePicker readOnly />
);


readOnly.story = {
    name: 'ReadOnly'
};

export const localized = () => (
    <div className='fddocs-container'>
        <DatePicker locale='es' />
        <DatePicker locale='fr' />
    </div>
);


localized.story = {
    name: 'Localized DatePicker'
};

export const rangeSelection = () => (
    <DatePicker enableRangeSelection />
);

rangeSelection.story = {
    name: 'Enabled Range Selection'
};

export const dateFormat = () => (
    <LayoutGrid cols={2}>
        <div>
            <FormLabel
                htmlFor='customDateFormatField'>
                Custom date format (knobs)
            </FormLabel>
            <DatePicker
                dateFormat={
                    select(dateFormatOptionsLabel, dateFormatOptions, dateFormatDefaultValue, dateFormatGroupId)
                }
                inputProps={{
                    id: 'customDateFormatField'
                }} />
        </div>
        <div>
            <FormLabel
                htmlFor='customDateFormatField2'>
                Custom date format (knobs) with defaultValue
            </FormLabel>
            <DatePicker
                dateFormat={
                    select(dateFormatOptionsLabel, dateFormatOptions, dateFormatDefaultValue, dateFormatGroupId)
                }
                defaultValue='12/04/1993'
                inputProps={{
                    id: 'customDateFormatField2'
                }} />
        </div>
        <div>
            <FormLabel
                htmlFor='customDateFormatField3'>
                DD.MM.YYYY in Hindi with defaultValue
            </FormLabel>
            <DatePicker
                dateFormat='DD.MM.YYYY'
                defaultValue='4.12.1993'
                inputProps={{
                    id: 'customDateFormatField3'
                }}
                locale='hi' />
        </div>
        <div>
            <FormLabel
                htmlFor='customDateFormatField4'>
                Custom date format (knobs) range selection
            </FormLabel>
            <DatePicker
                dateFormat={
                    select(dateFormatOptionsLabel, dateFormatOptions, dateFormatDefaultValue, dateFormatGroupId)
                }
                enableRangeSelection
                inputProps={{
                    id: 'customDateFormatField4'
                }} />
        </div>
        <div>
            <FormLabel
                htmlFor='customDateFormatField5'>
                Unset date format, with French locale
            </FormLabel>
            <DatePicker
                buttonLabel='debugz'
                inputProps={{
                    id: 'customDateFormatField5'
                }}
                locale='fr' />
        </div>
        <div>
            <FormLabel
                htmlFor='customDateFormatField5'>
                Unset date format, with null locale (uses ISO_DATE_FORMAT)
            </FormLabel>
            <DatePicker
                buttonLabel='debugz'
                defaultValue='17.3.20'
                inputProps={{
                    id: 'customDateFormatField5'
                }}
                locale={null} />
        </div>
    </LayoutGrid>
);

dateFormat.story = {
    name: 'Date Formats'
};


export const validationStates = () => (
    <div className='fddocs-container'>
        <DatePicker validationState={{ state: 'error', text: 'Test validation state' }} />
        <DatePicker validationState={{ state: 'warning', text: 'Test validation state' }} />
        <DatePicker validationState={{ state: 'success', text: 'Test validation state' }} />
        <DatePicker validationState={{ state: 'information', text: 'Test validation state' }} />

    </div>
);

validationStates.story = {
    name: 'Validation States'
};

const tomorrow = moment().add(1, 'day').endOf('day').format('YYYYMMDD');
const nextDay = moment().add(2, 'day').endOf('day').format('YYYYMMDD');
const dayAfter = moment().add(3, 'day').endOf('day').format('YYYYMMDD');
const oneWeek = moment().add(7, 'day').endOf('day').format('YYYYMMDD');

const specialDays = {
    [tomorrow]: 1,
    [nextDay]: 2,
    [dayAfter]: 3,
    [oneWeek]: 4
};

export const specialDaysEx = () => (
    <DatePicker specialDays={specialDays} />
);

specialDaysEx.story = {
    name: 'Special Days'
};

export const dev = () => (
    <DatePicker
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
);

dev.story = {
    parameters: { docs: { disable: true } }
};
