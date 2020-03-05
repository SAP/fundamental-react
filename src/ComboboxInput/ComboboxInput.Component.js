import path from 'path';
import React from 'react';
import { ComboboxInput, List } from '../';
import { ComponentPage, Example } from '../_playground';

export const ComboboxInputComponent = () => {
    const list = (
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
    );

    return (
        <ComponentPage
            sourceModulePath={path.join(__dirname, './ComboboxInput')}
            title='Combobox Input'>

            <Example
                centered
                title='Combobox Input'>
                <ComboboxInput
                    list={list}
                    placeholder='Select Fruit' />
                <ComboboxInput
                    compact
                    list={list}
                    placeholder='Select Fruit' />
            </Example>

            <Example
                centered
                title='Validation States'>
                <ComboboxInput
                    list={list}
                    placeholder='Select Fruit'
                    validationState={{ state: 'error', text: 'Test validation state' }} />
                <ComboboxInput
                    list={list}
                    placeholder='Select Fruit'
                    validationState={{ state: 'warning', text: 'Test validation state' }} />
                <ComboboxInput
                    list={list}
                    placeholder='Select Fruit'
                    validationState={{ state: 'success', text: 'Test validation state' }} />
                <ComboboxInput
                    list={list}
                    placeholder='Select Fruit'
                    validationState={{ state: 'information', text: 'Test validation state' }} />
            </Example>

        </ComponentPage>
    );
};
