import path from 'path';
import React from 'react';
import { Time } from '../';
import { ComponentPage, Example } from '../_playground';

export const TimeComponent = () => {
    return (
        <ComponentPage
            description={`The **Time** component is used for a single time value. Multiple components can be used in the **Time Picker**
                to assemble a clock time. A max of four will account for hours, minutes, seconds and meridiem of the day.
                It is rarely used on its own as a standalone component.`}
            sourceModulePath={path.join(__dirname, './Time')}
            title='Time'>

            <Example
                title='Default'>
                <Time />
            </Example>

            <Example
                title='12-Hour Clock'>
                <Time format12Hours />
            </Example>

            <Example
                title='Clock With No Spinners'>
                <Time spinners={false} />
            </Example>

            <Example
                title='Clock With No Seconds'>
                <Time showSecond={false} />
            </Example>

            <Example
                title='Disabled State'>
                <Time disabled />
            </Example>

        </ComponentPage>
    );
};
