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
                The **Time** component is used for a single time value. Multiple components can be used in the **Time Picker**
                to assemble a clock time. A max of four will account for hours, minutes, seconds and meridiem of the day.
                It is rarely used on its own as a standalone component.
            </Description>
            <Import sourceModulePath={require.resolve('./Time')} />

            <Separator />

            <Properties sourceModulePath={require.resolve('./Time')} />

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
            <DocsTile>
                <Time format12Hours />
            </DocsTile>
            <DocsText>{format12hoursTimeCode}</DocsText>

            <Separator />

            {/* No Spinners Time */}
            <h2>Clock With No Spinners</h2>
            <DocsTile>
                <Time spinners={false} />
            </DocsTile>
            <DocsText>{noSpinnersTimeCode}</DocsText>

            <Separator />

            {/* Hide Seconds */}
            <h2>Clock With No Seconds</h2>
            <DocsTile>
                <Time showSecond={false} />
            </DocsTile>
            <DocsText>{noSecondsTimeCode}</DocsText>

            <Separator />

            {/* Disabled State */}
            <h2>Disabled State</h2>
            <DocsTile>
                <Time disabled />
            </DocsTile>
            <DocsText>{disabledStateTimeCode}</DocsText>
        </div>
    );
};
