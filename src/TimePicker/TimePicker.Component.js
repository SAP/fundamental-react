import React from 'react';
import { TimePicker } from '../';
import { Description, DocsText, DocsTile, Header, Properties, Separator } from '../_playground';

export const TimePickerComponent = () => {
    const defaultTimeCode = '<TimePicker />';
    const format12hoursTimeCode = '<TimePicker format12Hours={true} />';
    const noSecondsTimeCode = '<TimePicker showSecond={false} />';
    const disabledStateTimeCode = '<TimePicker disabled={true} />';
    return (
        <div>
            <Header>Time Picker</Header>
            <Description>
        The Time Picker component allows the user to easily set a time using the
        Fundamental React Time component
            </Description>
            <Separator />{' '}
            <Properties
                properties={[
                    {
                        name: 'id',
                        description: 'string - Id for time picker component'
                    }, {
                        name: 'showHour',
                        description: 'bool - Enables the input for hours. Default true '
                    }, {
                        name: 'showMinute',
                        description: 'bool - Enables the input for minutes. Default true '
                    }, {
                        name: 'showSecond:',
                        description: 'bool - Enables the input seconds. Default true'
                    }, {
                        name: 'disabled',
                        description: 'bool - Disables the time picker component, the inputs will be readonly'
                    }, {
                        name: 'format12Hours',
                        description: 'bool - When set to true, uses the 12 hour clock (hours ranging from 01 to 12) and it displays a period control. Default is false'
                    }, {
                        name: 'time',
                        description: 'object - The time component values , contains four properties: hour with values from 01 to 12 when format12Hours is true or 00 to 23 when format12Hours is false, minute with values from 00 to 59, second with values from 00 to 59, meridiem with values 0(am), 1(pm)'
                    }
                ]}
                type='Inputs' />
            <Separator /> {/* Default Clock */}
            <h2>Default</h2>
            <DocsTile>
                <TimePicker />
            </DocsTile>
            <DocsText>{defaultTimeCode}</DocsText>
            <Separator /> {/* 12 hours Clock */}
            <h2>12-Hour Clock</h2>
            <Description>
        You can use a Meridian 12-hour clock by setting format12Hours to true{' '}
            </Description>
            <DocsTile>
                <TimePicker format12Hours />
            </DocsTile>
            <DocsText>{format12hoursTimeCode}</DocsText>
            <Separator /> {/* Hide Seconds */}
            <h2>Time Picker With No Seconds</h2>
            <Description>
        To hide the seconds input set showSecond to false
            </Description>
            <DocsTile>
                <TimePicker showSecond={false} />
            </DocsTile>
            <DocsText>{noSecondsTimeCode}</DocsText>
            <Separator /> {/* Disabled State */}
            <h2>Disabled State</h2>
            <Description>
        The Time Picker component can be set to disabled state by setting disabled to
        true
            </Description>
            <DocsTile>
                <TimePicker disabled />
            </DocsTile>
            <DocsText>{disabledStateTimeCode}</DocsText>
        </div>
    );
};
