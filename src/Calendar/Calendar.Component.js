import { Calendar } from '../';
import React from 'react';
import { Description, DocsText, DocsTile, Header, Import, Properties, Separator } from '../_playground';

export const CalendarComponent = () => {

    const defaultCalendarCode = '<Calendar />';
    const calendarDisabledWeekendsBeforeDate = '<Calendar disableBeforeDate={new Date(2018,7,3,0,0,0,0)} disableWeekends={true}/>';
    const calendarDisabledWeekdaysBlockedDates = '<Calendar disableWeekday={["Monday", "Tuesday"]} blockedDates={[new Date(2018, 1, 1, 0,0, 0,0), new Date(2018, 3, 3, 0,0,0,0)]}/>';
    const calendarAllOptions = '<Calendar enableRangeSelection={true}/>';

    return (<div>
        <Header>Calendar</Header>
        <Description>
            The **Calendar** is commonly used as the contents of a **Popover** when composing a **Date Picker**.
            It is rarely used on its own as a standalone component.
        </Description>
        <Import sourceModule={require.resolve('./Calendar')} />

        <Separator />

        <Properties sourceModule={require.resolve('./Calendar')} />

        <Separator />

        <h2>Default Calendar</h2>
        <DocsTile centered>
            <Calendar />
        </DocsTile>
        <DocsText>{defaultCalendarCode}</DocsText>

        <Separator />

        <h2>Calendar with disabled weekends and disabled before a date</h2>
        <DocsTile centered>
            {<Calendar disableBeforeDate={new Date(2018, 7, 3, 0, 0, 0, 0)} disableWeekends />}
        </DocsTile>
        <DocsText>{calendarDisabledWeekendsBeforeDate}</DocsText>

        <Separator />

        <h2>Calendar with disabled weekdays and blocked dates</h2>
        <DocsTile centered>
            {<Calendar blockedDates={[new Date(2018, 1, 1, 0, 0, 0, 0), new Date(2018, 3, 3, 0, 0, 0, 0)]} disableWeekday={['Monday', 'Tuesday']} />}
        </DocsTile>
        <DocsText>{calendarDisabledWeekdaysBlockedDates}</DocsText>

        <Separator />

        <h2>Calendar with range selection</h2>
        <DocsTile centered>
            {<Calendar enableRangeSelection />}
        </DocsTile>
        <DocsText>{calendarAllOptions}</DocsText>
    </div>);

};
