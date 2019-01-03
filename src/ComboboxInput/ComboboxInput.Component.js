import React from 'react';
import { DocsTile, DocsText, Separator, Header, Import, Properties } from '../';
import { Menu, MenuItem, MenuList, ComboboxInput } from '../';

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

            <Import module='ComboboxInput, Menu, MenuItem, MenuList' path='/fundamental-react/src/' />

            <Separator />

            <Properties
                type='Inputs'
                properties={[
                    { name: 'menu', description: 'object (required) - An object containing a Menu component. ' },
                    { name: 'id', description: 'string (optional) - The id of the component.' },
                    { name: 'placeholder', description: 'string (optional) - Input \'placeholder\' attribute. ' },
                    { name: 'compact', description: 'bool (optional) - Set to true to enable compact mode.' }
                ]} />

            <Separator />

            <h2>Combobox Input</h2>
            <DocsTile>
                <ComboboxInput
                    placeholder='Select Fruit'
                    menu={
                        <Menu>
                            <MenuList>
                                <MenuItem url='/'>Pear</MenuItem>
                                <MenuItem url='/'>Strawberry</MenuItem>
                                <MenuItem url='/'>Raspberry</MenuItem>
                                <MenuItem url='/' isLink>
                                    + New Item
                                </MenuItem>
                            </MenuList>
                        </Menu>
                    } />

                <br />

                <ComboboxInput
                    placeholder='Select Fruit'
                    compact
                    menu={
                        <Menu>
                            <MenuList>
                                <MenuItem url='/'>Pear</MenuItem>
                                <MenuItem url='/'>Strawberry</MenuItem>
                                <MenuItem url='/'>Raspberry</MenuItem>
                                <MenuItem url='/' isLink>
                                    + New Item
                                </MenuItem>
                            </MenuList>
                        </Menu>
                    } />
            </DocsTile>
            <DocsText>{comboboxInputCode}</DocsText>
            <Separator />
        </div>
    );
};
