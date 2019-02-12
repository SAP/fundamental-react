import { DatePicker } from '../';
import React from 'react';
import { Description, DocsText, DocsTile, Header, Import, Properties, Separator } from '../_playground';

export const DatePickerComponent = () => {
    const defaultDatePickerCode = `<DatePicker disableBeforeDate={new Date(2018, 11, 24, 0, 0, 0, 0)} disableWeekends={true} />
<DatePicker
    compact
    disableWeekday={['Monday', 'Tuesday']}
    blockedDates={[new Date(2018, 11, 1, 0, 0, 0, 0), new Date(2018, 11, 23, 0, 0, 0, 0)]}
/>`;
    const enableRangeSelectionDatePickerCode = `<DatePicker enableRangeSelection disableFutureDates />
<DatePicker enableRangeSelection disablePastDates compact />`;

    return (
        <div>
            <Header>DatePicker</Header>
            <Description>
                The **Date Picker** is an opinionated composition of the **Input Group**, **Popover**
                and **Calendar** components to accomplish the UI pattern for picking a date.
            </Description>
            <Import sourceModulePath={require.resolve('./DatePicker')} />

            <Separator />

            <Properties sourceModulePath={require.resolve('./DatePicker')} />

            <Separator />

            <h2>Simple Date Picker</h2>
            <DocsTile centered>
                <div className='fd-doc__margin--datePicker'>
                    <DatePicker disableBeforeDate={new Date(2018, 11, 24, 0, 0, 0, 0)} disableWeekends />
                    <DatePicker
                        blockedDates={[new Date(2018, 11, 1, 0, 0, 0, 0), new Date(2018, 11, 23, 0, 0, 0, 0)]}
                        compact
                        disableWeekday={['Monday', 'Tuesday']} />
                </div>
            </DocsTile>
            <DocsText>{defaultDatePickerCode}</DocsText>
            <Separator />

            <h2>Range Date Picker</h2>
            <DocsTile centered>
                <div className='fd-doc__margin--datePicker'>
                    <DatePicker disableFutureDates enableRangeSelection />
                    <DatePicker compact disablePastDates
                        enableRangeSelection />
                </div>
            </DocsTile>
            <DocsText>{enableRangeSelectionDatePickerCode}</DocsText>
        </div>
    );
};
