import { BusyIndicator } from '../';
import path from 'path';
import React from 'react';
import { ComponentPage, Example } from '../_playground';

export const BusyIndicatorComponent = () => {
    return (
        <ComponentPage
            description={'A **Busy Indicator** informs the user of an ongoing operation.'}
            sourceModulePath={path.join(__dirname, './BusyIndicator')}
            title='Busy Indicator'>
            <Example centered title='Busy Indicator'>
                <BusyIndicator show />
            </Example>

            <Example
                centered
                description={'There are 3 sizes for Busy Indicator: s, m & l'}
                title='Busy Indicator Sizes'>
                <BusyIndicator show size='s' />
                <BusyIndicator show />
                <BusyIndicator show size='l' />
            </Example>
        </ComponentPage>
    );
};
