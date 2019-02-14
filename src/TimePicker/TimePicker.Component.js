import path from 'path';
import React from 'react';
import { TimePicker } from '../';
import { Description, DocsText, DocsTile, Header, Import, Properties, Separator } from '../_playground';

export const TimePickerComponent = () => {
    const defaultTimeCode = '<TimePicker />';
    const format12hoursTimeCode = '<TimePicker format12Hours={true} />';
    const noSecondsTimeCode = '<TimePicker showSecond={false} />';
    const disabledStateTimeCode = '<TimePicker disabled={true} />';
    return (
        <div>
            <Header>Time Picker</Header>
            <Description>
                The **Time Picker** allows the user to easily set a time using the **Time** component.
            </Description>
            <Import sourceModulePath={path.join(__dirname, './TimePicker')} />

            <Separator />

            <Properties sourceModulePath={path.join(__dirname, './TimePicker')} />

            <Separator />

            <h2>Default</h2>
            <DocsTile>
                <TimePicker />
            </DocsTile>
            <DocsText>{defaultTimeCode}</DocsText>

            <Separator />

            <h2>12-Hour Clock</h2>
            <DocsTile>
                <TimePicker format12Hours />
            </DocsTile>
            <DocsText>{format12hoursTimeCode}</DocsText>

            <Separator />

            <h2>Time Picker With No Seconds</h2>
            <DocsTile>
                <TimePicker showSecond={false} />
            </DocsTile>
            <DocsText>{noSecondsTimeCode}</DocsText>

            <Separator />

            <h2>Disabled State</h2>
            <DocsTile>
                <TimePicker disabled />
            </DocsTile>
            <DocsText>{disabledStateTimeCode}</DocsText>
        </div>
    );
};
