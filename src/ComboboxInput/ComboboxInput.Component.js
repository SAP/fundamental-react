import React from 'react';
import { ComboboxInput, Menu, MenuItem, MenuList } from '../';
import { DocsText, DocsTile, Header, Import, Properties, Separator } from '../_playground';

export const ComboboxInputComponent = () => {
    const comboboxInputCode = `<ComboboxInput
    placeholder="Select Fruit"
    menu={
        <Menu>
            <MenuList>
                <MenuItem url="/">Pear</MenuItem>
                <MenuItem url="/">Strawberry</MenuItem>
                <MenuItem url="/">Raspberry</MenuItem>
                <MenuItem url="/" isLink>
                    + New Item
                </MenuItem>
            </MenuList>
        </Menu>
    }
/>

<ComboboxInput
    placeholder="Select Fruit"
    compact
    menu={
        <Menu>
            <MenuList>
                <MenuItem url="/">Pear</MenuItem>
                <MenuItem url="/">Strawberry</MenuItem>
                <MenuItem url="/">Raspberry</MenuItem>
                <MenuItem url="/" isLink>
                    + New Item
                </MenuItem>
            </MenuList>
        </Menu>
    }
/>`;

    return (
        <div>
            <Header>Combobox Input</Header>

            <Import sourceModule={require.resolve('./ComboboxInput')} />

            <Separator />

            <Properties sourceModule={require.resolve('./ComboboxInput')} />

            <Separator />

            <h2>Combobox Input</h2>
            <DocsTile>
                <ComboboxInput
                    menu={
                        <Menu>
                            <MenuList>
                                <MenuItem url='/'>Pear</MenuItem>
                                <MenuItem url='/'>Strawberry</MenuItem>
                                <MenuItem url='/'>Raspberry</MenuItem>
                                <MenuItem isLink url='/'>
                                    + New Item
                                </MenuItem>
                            </MenuList>
                        </Menu>
                    }
                    placeholder='Select Fruit' />

                <br />

                <ComboboxInput
                    compact
                    menu={
                        <Menu>
                            <MenuList>
                                <MenuItem url='/'>Pear</MenuItem>
                                <MenuItem url='/'>Strawberry</MenuItem>
                                <MenuItem url='/'>Raspberry</MenuItem>
                                <MenuItem isLink url='/'>
                                    + New Item
                                </MenuItem>
                            </MenuList>
                        </Menu>
                    }
                    placeholder='Select Fruit' />
            </DocsTile>
            <DocsText>{comboboxInputCode}</DocsText>
        </div>
    );
};
