import React from 'react';
import { Time } from '../';
import { Description, DocsText, DocsTile, Header, Import, Properties, Separator } from '../_playground';

export const TimeComponent = () => {
    const defaultTimeCode = '<Time />';
    const format12hoursTimeCode = '<Time format12Hours={true} />';
    const noSpinnersTimeCode = '<Time spinners={false} />';
    const noSecondsTimeCode = '<Time showSecond={false} />';
    const disabledStateTimeCode = '<Time disabled={true} />';
    return (
        <div>
            <Header>Time</Header>
            <Description>
                The time component is used for a single time value. Multiple components can be used in the time-picker
                to assemble a clock time. A max of four will account for hours, minutes, seconds and period of the day.
                It will be rare to see this component used outside of it being composed in the time-picker component.
            </Description>
            <Import module='Time' path='/fundamental-react/src/' />
            <Separator />{' '}
            <Properties
                properties={[
                    {
                        name: 'id',
                        description: 'string - Id for time component'
                    },
                    {
                        name: 'showHour',
                        description: 'bool - Enables the input for hours. Default true '
                    },
                    {
                        name: 'showMinute',
                        description: 'bool - Enables the input for minutes. Default true '
                    },
                    {
                        name: 'showSecond:',
                        description: 'bool - Enables the input seconds. Default true'
                    },
                    {
                        name: 'disabled',
                        description: 'bool - Disables the time component, the inputs will be readonly'
                    },
                    {
                        name: 'format12Hours',
                        description:
                            'bool - When set to true, uses the 12 hour clock (hours ranging from 01 to 12) and it displays a period control. Default is false'
                    },
                    {
                        name: 'time',
                        description:
                            'object - The time component values , contains four properties: hour with values from 01 to 12 when format12Hours is true or 00 to 23 when format12Hours is false, minute with values from 00 to 59, second with values from 00 to 59, meridiem with values 0(am), 1(pm)'
                    }
                ]}
                type='Inputs' />
            <Separator />
            {/* Default Clock */}
            <h2>Default</h2>
            <DocsTile>
                <Time />
            </DocsTile>
            <DocsText>{defaultTimeCode}</DocsText>
            <Separator />
            {/* 12 hours Clock */}
            <h2>12-Hour Clock</h2>
            <Description>You can use a Meridian 12-hour clock by setting format12Hours to true </Description>
            <DocsTile>
                <Time format12Hours />
            </DocsTile>
            <DocsText>{format12hoursTimeCode}</DocsText>
            <Separator />
            {/* No Spinners Time */}
            <h2>Clock With No Spinners</h2>
            <Description>To hide the spinners set spinner to false</Description>
            <DocsTile>
                <Time spinners={false} />
            </DocsTile>
            <DocsText>{noSpinnersTimeCode}</DocsText>
            <Separator />
            {/* Hide Seconds */}
            <h2>Clock With No Seconds</h2>
            <Description>To hide the seconds input set showSecond to false</Description>
            <DocsTile>
                <Time showSecond={false} />
            </DocsTile>
            <DocsText>{noSecondsTimeCode}</DocsText>
            <Separator />
            {/* Disabled State */}
            <h2>Disabled State</h2>
            <Description>The Time component can be set to disabled state by setting disabled to true</Description>
            <DocsTile>
                <Time disabled />
            </DocsTile>
            <DocsText>{disabledStateTimeCode}</DocsText>
        </div>
    );
};
