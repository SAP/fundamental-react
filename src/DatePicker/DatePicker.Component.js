import { DatePicker } from '../';
import path from 'path';
import React from 'react';
import { ComponentPage, Example } from '../_playground';

export const DatePickerComponent = () => {
    return (
        <ComponentPage
            description={`The **Date Picker** is an opinionated composition of the **Input Group**, **Popover**
                and **Calendar** components to accomplish the UI pattern for picking a date.`}
            sourceModulePath={path.join(__dirname, './DatePicker')}
            title='Date Picker'>

            <Example
                centered
                title='Simple Date Picker'>
                <DatePicker disableBeforeDate={new Date(2018, 11, 24, 0, 0, 0, 0)} disableWeekends />
                <DatePicker
                    blockedDates={[new Date(2018, 11, 1, 0, 0, 0, 0), new Date(2018, 11, 23, 0, 0, 0, 0)]}
                    compact
                    disableWeekday={['Monday', 'Tuesday']} />
            </Example>

            <Example
                centered
                title='Range Date Picker'>
                <DatePicker disableFutureDates enableRangeSelection />
                <DatePicker compact disablePastDates
                    enableRangeSelection />
            </Example>

        </ComponentPage>
    );
};
