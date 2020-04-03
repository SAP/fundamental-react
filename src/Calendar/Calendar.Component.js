import { Calendar } from '../';
import moment from 'moment';
import path from 'path';
import React from 'react';
import { ComponentPage, Example } from '../_playground';

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

export const CalendarComponent = () => {
    return (
        <ComponentPage
            description={`The **Calendar** is commonly used as the contents of a **Popover** when composing a **Date Picker**.
                It is rarely used on its own as a standalone component.`}
            sourceModulePath={path.join(__dirname, './Calendar')}
            title='Calendar'>

            <Example
                centered
                title='Default Calendar'>
                <Calendar />
            </Example>

            <Example
                centered
                title='Calendar with disabled weekends and disabled before a date'>
                <Calendar
                    disableBeforeDate={new Date()}
                    disableWeekends />
            </Example>

            <Example
                centered
                title='Calendar with disabled weekdays and blocked dates'>
                <Calendar
                    blockedDates={[new Date(2018, 1, 1, 0, 0, 0, 0), new Date(2018, 3, 3, 0, 0, 0, 0)]}
                    disableWeekday={['Monday', 'Tuesday']} />
            </Example>

            <Example
                centered
                title='Calendar with special days'>
                <Calendar specialDays={specialDays} />
            </Example>

            <Example
                centered
                title='Calendar with range selection'>
                <Calendar enableRangeSelection />
            </Example>

        </ComponentPage>
    );
};
