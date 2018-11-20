import React from 'react';
import { DocsTile, DocsText, Separator, Header, Description, Import, Properties } from '../';
import { DatePicker } from '../';

export const DatePickerComponent = () => {
    const defaultDatePickerCode = `<DatePicker />
<DatePicker compact />`;
    const enableRangeSelectionDatePickerCode = `<DatePicker enableRangeSelection />
<DatePicker enableRangeSelection compact />`;

    return (
        <div>
            <Header>DatePicker</Header>
            <Description>
                The date-picker component is an opinionated composition of the "input-group", "popover" and "calendar"
                components to accomplish the UI pattern for picking a date.
            </Description>
            <Import module="DatePicker" path="/fundamental-react/src/" />

            <Separator />

            <Properties
                type="Inputs"
                properties={[{ name: 'enableRangeSelection', description: 'bool - Enable to select two dates' }]}
            />

            <Separator />

            <h2>Simple Date Picker</h2>
            <DocsTile centered>
                <DatePicker />
                <DatePicker compact />
            </DocsTile>
            <DocsText>{defaultDatePickerCode}</DocsText>
            <Separator />

            <h2>Range Date Picker</h2>
            <DocsTile centered>
                <DatePicker enableRangeSelection />
                <DatePicker enableRangeSelection compact />
            </DocsTile>
            <DocsText>{enableRangeSelectionDatePickerCode}</DocsText>
        </div>
    );
};
