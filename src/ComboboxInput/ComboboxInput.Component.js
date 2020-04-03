import { ComboboxInput } from '../';
import path from 'path';
import React from 'react';
import { ComponentPage, Example } from '../_playground';

export const ComboboxInputComponent = () => {
    const options = [
        { key: '1', text: 'List Item 1' },
        { key: '2', text: 'List Item 2' },
        { key: '3', text: 'List Item 3' },
        { key: '4', text: 'List Item 4' }
    ];

    return (
        <ComponentPage
            sourceModulePath={path.join(__dirname, './ComboboxInput')}
            title='Combobox Input'>

            <Example
                centered
                title='Combobox Input'>
                <ComboboxInput
                    options={options}
                    placeholder='Select Fruit' />
                <ComboboxInput
                    compact
                    options={options}
                    placeholder='Select Fruit' />
            </Example>

            <Example
                centered
                title='Validation States'>
                <ComboboxInput
                    options={options}
                    placeholder='Select Fruit'
                    validationState={{ state: 'error', text: 'Test validation state' }} />
                <ComboboxInput
                    options={options}
                    placeholder='Select Fruit'
                    validationState={{ state: 'warning', text: 'Test validation state' }} />
                <ComboboxInput
                    options={options}
                    placeholder='Select Fruit'
                    validationState={{ state: 'success', text: 'Test validation state' }} />
                <ComboboxInput
                    options={options}
                    placeholder='Select Fruit'
                    validationState={{ state: 'information', text: 'Test validation state' }} />
            </Example>

        </ComponentPage>
    );
};
