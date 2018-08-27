import React from 'react'
import {DocsTile, DocsText, Separator, Header, Description, Import, Properties } from '../'
import {DatePicker} from '../'

export const DatePickerComponent = () => {

    const defaultDatePickerCode = `<DatePicker/>`
    const enableRangeSelectionDatePickerCode = `<DatePicker enableRangeSelection={true}/>`

    return(<div>
        <Header>DatePicker</Header>
        <Description>The date-picker component is an opinionated composition of the "input-group", "popover" and "calendar" components to accomplish the UI pattern for picking a date.</Description>
        <Import module="DatePicker" path="/react-fundamental/src/" />
        
        <Separator />

        <Properties type="Inputs" properties=
            {[
                {name: 'enableRangeSelection', description: 'Bool - Enable to select two dates'}
            ]}/>

        <Separator />
        
        <h2>Simple Date Picker</h2>
        <DocsTile>
            <DatePicker/>
        </DocsTile>
        <DocsText>{defaultDatePickerCode}</DocsText>
        <Separator />
        
        <h2>Range Date Picker</h2>
        <DocsTile>
            <DatePicker enableRangeSelection={true}/>
        </DocsTile>
        <DocsText>{enableRangeSelectionDatePickerCode}</DocsText>
        </div>)
};