import path from 'path';
import React from 'react';
import { ComboboxInput, Menu } from '../';
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
                        menu={
                            <Menu>
                                <Menu.List>
                                    <Menu.Item url='#'>Pear</Menu.Item>
                                    <Menu.Item url='#'>Strawberry</Menu.Item>
                                    <Menu.Item url='#'>Raspberry</Menu.Item>
                                    <Menu.Item isLink url='#'>
                                        + New Item
                                    </Menu.Item>
                                </Menu.List>
                            </Menu>
                        }
                        placeholder='Select Fruit' />

                    <br />

                    <ComboboxInput
                        compact
                        menu={
                            <Menu>
                                <Menu.List>
                                    <Menu.Item url='#'>Pear</Menu.Item>
                                    <Menu.Item url='#'>Strawberry</Menu.Item>
                                    <Menu.Item url='#'>Raspberry</Menu.Item>
                                    <Menu.Item isLink url='#'>
                                        + New Item
                                    </Menu.Item>
                                </Menu.List>
                            </Menu>
                        }
                        placeholder='Select Fruit' />
                </div>
            </Example>

        </ComponentPage>
    );
};
