import path from 'path';
import React from 'react';
import { ComboboxInput, Menu } from '../';
import { DocsText, DocsTile, Header, Import, Properties, Separator } from '../_playground';

export const ComboboxInputComponent = () => {
    const comboboxInputCode = `<ComboboxInput
    placeholder="Select Fruit"
    menu={
        <Menu>
            <Menu.List>
                <Menu.Item url="/">Pear</Menu.Item>
                <Menu.Item url="/">Strawberry</Menu.Item>
                <Menu.Item url="/">Raspberry</Menu.Item>
                <Menu.Item url="/" isLink>
                    + New Item
                </Menu.Item>
            </Menu.List>
        </Menu>
    }
/>

<ComboboxInput
    placeholder="Select Fruit"
    compact
    menu={
        <Menu>
            <Menu.List>
                <Menu.Item url="/">Pear</Menu.Item>
                <Menu.Item url="/">Strawberry</Menu.Item>
                <Menu.Item url="/">Raspberry</Menu.Item>
                <Menu.Item url="/" isLink>
                    + New Item
                </Menu.Item>
            </Menu.List>
        </Menu>
    }
/>`;

    return (
        <div>
            <Header>Combobox Input</Header>

            <Import sourceModulePath={path.join(__dirname, './ComboboxInput')} />

            <Separator />

            <Properties sourceModulePath={path.join(__dirname, './ComboboxInput')} />

            <Separator />

            <h2>Combobox Input</h2>
            <DocsTile>
                <ComboboxInput
                    menu={
                        <Menu>
                            <Menu.List>
                                <Menu.Item url='/'>Pear</Menu.Item>
                                <Menu.Item url='/'>Strawberry</Menu.Item>
                                <Menu.Item url='/'>Raspberry</Menu.Item>
                                <Menu.Item isLink url='/'>
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
                                <Menu.Item url='/'>Pear</Menu.Item>
                                <Menu.Item url='/'>Strawberry</Menu.Item>
                                <Menu.Item url='/'>Raspberry</Menu.Item>
                                <Menu.Item isLink url='/'>
                                    + New Item
                                </Menu.Item>
                            </Menu.List>
                        </Menu>
                    }
                    placeholder='Select Fruit' />
            </DocsTile>
            <DocsText>{comboboxInputCode}</DocsText>
        </div>
    );
};
