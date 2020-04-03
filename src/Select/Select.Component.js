import path from 'path';
import React from 'react';
import { Select } from '..';
import { ComponentPage, Example } from '../_playground';

export const SelectComponent = () => {

    return (
        <ComponentPage
            description={`The **Select** component lets the user select one of the different options.
                It is more flexible than the normal Select. Use with the **List** component.`}
            sourceModulePath={path.join(__dirname, './Select')}
            title='Select'>

            <Example
                centered
                title='Compact'>
                <Select
                    options={[
                        { key: '1', text: 'List Item 1' },
                        { key: '2', text: 'List Item 2' },
                        { key: '3', text: 'List Item 3' },
                        { key: '4', text: 'List Item 4' }
                    ]}
                    placeholder='Select' />

                <Select
                    compact
                    options={[
                        { key: '1', text: 'List Item 1' },
                        { key: '2', text: 'List Item 2' },
                        { key: '3', text: 'List Item 3' },
                        { key: '4', text: 'List Item 4' }
                    ]}
                    placeholder='Select' />

            </Example>

            <Example
                centered
                title='Disabled'>
                <Select
                    disabled
                    options={[
                        { key: '1', text: 'List Item 1' },
                        { key: '2', text: 'List Item 2' },
                        { key: '3', text: 'List Item 3' },
                        { key: '4', text: 'List Item 4' }
                    ]}
                    placeholder='Select' />

                <Select
                    compact
                    disabled
                    options={[
                        { key: '1', text: 'List Item 1' },
                        { key: '2', text: 'List Item 2' },
                        { key: '3', text: 'List Item 3' },
                        { key: '4', text: 'List Item 4' }
                    ]}
                    placeholder='Select' />

            </Example>

            <Example
                centered
                title='Validation States'>
                <Select
                    options={[
                        { key: '1', text: 'List Item 1' },
                        { key: '2', text: 'List Item 2' },
                        { key: '3', text: 'List Item 3' },
                        { key: '4', text: 'List Item 4' }
                    ]}
                    placeholder='Default'
                    validationState={{ state: 'warning', text: 'Test' }} />

                <Select
                    options={[
                        { key: '1', text: 'List Item 1' },
                        { key: '2', text: 'List Item 2' },
                        { key: '3', text: 'List Item 3' },
                        { key: '4', text: 'List Item 4' }
                    ]}
                    placeholder='Default'
                    validationState={{ state: 'information', text: 'Test' }} />

                <Select
                    options={[
                        { key: '1', text: 'List Item 1' },
                        { key: '2', text: 'List Item 2' },
                        { key: '3', text: 'List Item 3' },
                        { key: '4', text: 'List Item 4' }
                    ]}
                    placeholder='Default'
                    validationState={{ state: 'error', text: 'Test' }} />

                <Select
                    options={[
                        { key: '1', text: 'List Item 1' },
                        { key: '2', text: 'List Item 2' },
                        { key: '3', text: 'List Item 3' },
                        { key: '4', text: 'List Item 4' }
                    ]}
                    placeholder='Default'
                    validationState={{ state: 'success', text: 'Test' }} />

            </Example>

        </ComponentPage>
    );
};
