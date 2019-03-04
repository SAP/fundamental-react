import path from 'path';
import React from 'react';
import { TimePicker } from '../';
import { ComponentPage, Example } from '../_playground';

export const TimePickerComponent = () => {
    return (
        <ComponentPage
            description='The **Time Picker** allows the user to easily set a time using the **Time** component.'
            sourceModulePath={path.join(__dirname, './TimePicker')}
            title='Time Picker'>

            <Example
                title='Default'>
                <TimePicker />
            </Example>

            <Example
                title='12-Hour Clock'>
                <TimePicker format12Hours />
            </Example>

            <Example
                title='Time Picker With No Seconds'>
                <TimePicker showSecond={false} />
            </Example>

            <Example
                title='Disabled State'>
                <TimePicker disabled />
            </Example>

        </ComponentPage>
    );
};
