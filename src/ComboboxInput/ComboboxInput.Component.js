import path from 'path';
import React from 'react';
import { ComboboxInput, List } from '../';
import { ComponentPage, Example } from '../_playground';

export const ComboboxInputComponent = () => {
    return (
        <ComponentPage
            sourceModulePath={path.join(__dirname, './ComboboxInput')}
            title='Combobox Input'>

            <Example
                title='Combobox Input'>
                <div>
                    <ComboboxInput
                        list={
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
                        }
                        placeholder='Select Fruit' />

                    <br />

                    <ComboboxInput
                        compact
                        list={
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
                        }
                        placeholder='Select Fruit' />
                </div>
            </Example>

        </ComponentPage>
    );
};
