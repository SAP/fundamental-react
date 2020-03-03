import path from 'path';
import React from 'react';
import { ComponentPage, Example } from '../_playground';
import { List, Select } from '..';

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
                <Select placeholder='Select'>
                    <List>
                        <List.Item>
                            <List.Text>List Item 1</List.Text>
                        </List.Item>
                        <List.Item>
                            <List.Text>List Item 2</List.Text>
                        </List.Item>
                        <List.Item>
                            <List.Text>List Item 3</List.Text>
                        </List.Item>
                        <List.Item>
                            <List.Text>List Item 4</List.Text>
                        </List.Item>
                    </List>
                </Select>

                <Select compact placeholder='Select'>
                    <List>
                        <List.Item>
                            <List.Text>List Item 1</List.Text>
                        </List.Item>
                        <List.Item>
                            <List.Text>List Item 2</List.Text>
                        </List.Item>
                        <List.Item>
                            <List.Text>List Item 3</List.Text>
                        </List.Item>
                        <List.Item>
                            <List.Text>List Item 4</List.Text>
                        </List.Item>
                    </List>
                </Select>

            </Example>

            <Example
                centered
                title='Disabled'>
                <Select disabled placeholder='Select'>
                    <List>
                        <List.Item>
                            <List.Text>List Item 1</List.Text>
                        </List.Item>
                        <List.Item>
                            <List.Text>List Item 2</List.Text>
                        </List.Item>
                        <List.Item>
                            <List.Text>List Item 3</List.Text>
                        </List.Item>
                        <List.Item>
                            <List.Text>List Item 4</List.Text>
                        </List.Item>
                    </List>
                </Select>

                <Select compact disabled
                    placeholder='Select'>
                    <List>
                        <List.Item>
                            <List.Text>List Item 1</List.Text>
                        </List.Item>
                        <List.Item>
                            <List.Text>List Item 2</List.Text>
                        </List.Item>
                        <List.Item>
                            <List.Text>List Item 3</List.Text>
                        </List.Item>
                        <List.Item>
                            <List.Text>List Item 4</List.Text>
                        </List.Item>
                    </List>
                </Select>

            </Example>

            <Example
                centered
                title='Validation States'>
                <Select
                    placeholder='Default'
                    validationState={{ state: 'warning', text: 'Test' }}>
                    <List>
                        <List.Item>
                            <List.Text>List Item 1</List.Text>
                        </List.Item>
                        <List.Item>
                            <List.Text>List Item 2</List.Text>
                        </List.Item>
                        <List.Item>
                            <List.Text>List Item 3</List.Text>
                        </List.Item>
                        <List.Item>
                            <List.Text>List Item 4</List.Text>
                        </List.Item>
                    </List>
                </Select>

                <Select
                    placeholder='Default'
                    validationState={{ state: 'information', text: 'Test' }}>
                    <List>
                        <List.Item>
                            <List.Text>List Item 1</List.Text>
                        </List.Item>
                        <List.Item>
                            <List.Text>List Item 2</List.Text>
                        </List.Item>
                        <List.Item>
                            <List.Text>List Item 3</List.Text>
                        </List.Item>
                        <List.Item>
                            <List.Text>List Item 4</List.Text>
                        </List.Item>
                    </List>
                </Select>

                <Select
                    placeholder='Default'
                    validationState={{ state: 'error', text: 'Test' }}>
                    <List>
                        <List.Item>
                            <List.Text>List Item 1</List.Text>
                        </List.Item>
                        <List.Item>
                            <List.Text>List Item 2</List.Text>
                        </List.Item>
                        <List.Item>
                            <List.Text>List Item 3</List.Text>
                        </List.Item>
                        <List.Item>
                            <List.Text>List Item 4</List.Text>
                        </List.Item>
                    </List>
                </Select>

                <Select
                    placeholder='Default'
                    validationState={{ state: 'success', text: 'Test' }}>
                    <List>
                        <List.Item>
                            <List.Text>List Item 1</List.Text>
                        </List.Item>
                        <List.Item>
                            <List.Text>List Item 2</List.Text>
                        </List.Item>
                        <List.Item>
                            <List.Text>List Item 3</List.Text>
                        </List.Item>
                        <List.Item>
                            <List.Text>List Item 4</List.Text>
                        </List.Item>
                    </List>
                </Select>

            </Example>

        </ComponentPage>
    );
};
