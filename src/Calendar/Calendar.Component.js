import { Calendar } from '../';
import moment from 'moment';
import path from 'path';
import React from 'react';
import { ComponentPage, Example } from '../_playground';

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
                    disableBeforeDate={moment()}
                    disableWeekends />
            </Example>

            <Example
                centered
                title='Calendar with disabled weekdays and blocked dates'>
                <Calendar
                    blockedDates={[moment({ year: 2018, month: 1, day: 1, hour: 0, minute: 0, second: 0, millisecond: 0 }),
                        moment({ year: 2018, month: 3, day: 3, hour: 0, minute: 0, second: 0, millisecond: 0 })]}
                    disableWeekday={['Monday', 'Tuesday']} />
            </Example>

            <Example
                centered
                title='Calendar with range selection'>
                <Calendar enableRangeSelection />
            </Example>

        </ComponentPage>
    );
};
