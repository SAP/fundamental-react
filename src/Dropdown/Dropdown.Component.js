import React from 'react';
import { Dropdown } from '../';
import { DocsTile, DocsText, Separator, Header, Description, Import, Properties } from '../';
import { Popover, Button, Menu, MenuList, MenuItem } from '../';

export const DropdownComponent = () => {
    const defaultDropdownCode = ``;

    const iconDropdownCode = ``;

    const toolbarDropdownCode = ``;

    const disabledDropdownCode = ``;

    const sizesDropdownCode = ``;

    const contextualMenuDropdownCode = ``;

    return (
        <div>
            <Header>Dropdown</Header>
            <Description>
                The dropdown component let the user select one of different options. It is more flexible than the normal
                Select.
            </Description>
            <Import module="Dropdown" path="/fundamental-react/src/" />

            <Separator />

            <Properties
                type="Inputs"
                properties={[
                    { name: 'size', description: 'string - Options include xs, s, compact, default and l.' },
                    { name: 'toolbar', description: "bool - set to 'true' to enable a dropdown for toolbar." },
                    { name: 'state', description: "string - use 'disabled' to disable the dropdown " }
                ]}
            />

            <Separator />

            <h2>Default Dropdown</h2>
            <DocsTile centered>
                <Dropdown>
                    <Popover
                        id="jhqD0555"
                        control={<Button dropdown>Select</Button>}
                        noBodyArrow
                        body={
                            <Menu>
                                <MenuList>
                                    <MenuItem url="/">Option 1</MenuItem>
                                    <MenuItem url="/">Option 2</MenuItem>
                                    <MenuItem url="/">Option 3</MenuItem>
                                    <MenuItem url="/">Option 4</MenuItem>
                                </MenuList>
                            </Menu>
                        }
                    />
                </Dropdown>

                <Dropdown>
                    <Popover
                        id="jhqD0555"
                        control={<Button dropdown size="compact">Select</Button>}
                        noBodyArrow
                        body={
                            <Menu>
                                <MenuList>
                                    <MenuItem url="/">Option 1</MenuItem>
                                    <MenuItem url="/">Option 2</MenuItem>
                                    <MenuItem url="/">Option 3</MenuItem>
                                    <MenuItem url="/">Option 4</MenuItem>
                                </MenuList>
                            </Menu>
                        }
                    />
                </Dropdown>
            </DocsTile>
            <DocsText>{defaultDropdownCode}</DocsText>

            <Separator />

            <h2>Dropdown with Icon</h2>
            <Description>It can also include complementary information like an icon.</Description>
            <DocsTile centered>
            <Dropdown>
                    <Popover
                        id="jhqD0555"
                        control={<Button dropdown glyph="filter">Select</Button>}
                        noBodyArrow
                        body={
                            <Menu>
                                <MenuList>
                                    <MenuItem url="/">Option 1</MenuItem>
                                    <MenuItem url="/">Option 2</MenuItem>
                                    <MenuItem url="/">Option 3</MenuItem>
                                    <MenuItem url="/">Option 4</MenuItem>
                                </MenuList>
                            </Menu>
                        }
                    />
                </Dropdown>

                <Dropdown>
                    <Popover
                        id="jhqD0555"
                        control={<Button dropdown size="compact" glyph="filter">Select</Button>}
                        noBodyArrow
                        body={
                            <Menu>
                                <MenuList>
                                    <MenuItem url="/">Option 1</MenuItem>
                                    <MenuItem url="/">Option 2</MenuItem>
                                    <MenuItem url="/">Option 3</MenuItem>
                                    <MenuItem url="/">Option 4</MenuItem>
                                </MenuList>
                            </Menu>
                        }
                    />
                </Dropdown>
            </DocsTile>
            <DocsText>{iconDropdownCode}</DocsText>

            <Separator />

            <h2>Toolbar Dropdown</h2>
            <DocsTile centered>
                
            </DocsTile>
            <DocsText>{toolbarDropdownCode}</DocsText>

            <Separator />

            <h2>Disabled State</h2>
            <Description>
                Disabled state can be rendered with <code>state="disabled"</code> class.
            </Description>
            <DocsTile centered>
               
            </DocsTile>
            <DocsText>{disabledDropdownCode}</DocsText>

            <Separator />

            <h2>Sizes</h2>
            <DocsTile centered>
                
            </DocsTile>
            <DocsText>{sizesDropdownCode}</DocsText>

            <Separator />

            <h2>Contextual Menu</h2>
            <Description>
                The contextual menu component is an opinionated composition of the “popover” and “menu” components with
                the use of a styled button. A More icon or the word, “More”, is used to indicate there are more options
                than room to display them. On click or tap, a contextual menu opens. Composed by the “popover” and
                “menu” components.
            </Description>
            <DocsTile>
               
            </DocsTile>
            <DocsText>{contextualMenuDropdownCode}</DocsText>
            <Separator />
        </div>
    );
};
