import React from 'react';
import { Dropdown } from '../';
import { DocsTile, DocsText, Separator, Header, Description, Import, Properties } from '../';
import { Popover, Button, Menu, MenuList, MenuItem } from '../';

export const DropdownComponent = () => {
    const defaultDropdownCode = `<Dropdown>
    <Popover
        control={<Button dropdown={true}>Select</Button>}
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
</Dropdown>`;

    const iconDropdownCode = `<Dropdown>
    <Popover
        control={
            <Button dropdown={true} glyph="filter">
                Select
            </Button>
        }
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
</Dropdown>`;

    const toolbarDropdownCode = `<Dropdown>
    <Popover
        control={
            <Button dropdown={true} toolbar={true}>
                Select
            </Button>
        }
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
</Dropdown>`;

    const disabledDropdownCode = `<Dropdown>
    <Popover
        state="disabled"
        control={
            <Button dropdown={true} state="disabled">
                Select
            </Button>
        }
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
</Dropdown>`;

    const sizesDropdownCode = `<Dropdown>
    <Popover
        control={
            <Button dropdown={true} size="xs">
                Select
            </Button>
        }
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
        control={
            <Button dropdown={true} size="s">
                Select
            </Button>
        }
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
        control={
            <Button dropdown={true} size="compact">
                Select
            </Button>
        }
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
        control={
            <Button dropdown={true} size="default">
                Select
            </Button>
        }
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
        control={
            <Button dropdown={true} size="l">
                Select
            </Button>
        }
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
</Dropdown>`;

    const contextualMenuDropdownCode = `<Popover
   control={<Button type="secondary" glyph="vertical-grip" />}
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

<Popover
   control={<Button type="secondary">More</Button>}
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

<Popover
   control={<Button>More</Button>}
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
/>`;

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
            <DocsTile>
                <Dropdown>
                    <Popover
                        control={<Button dropdown={true}>Select</Button>}
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
            <DocsTile>
                <Dropdown>
                    <Popover
                        control={
                            <Button dropdown={true} glyph="filter">
                                Select
                            </Button>
                        }
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
            <DocsTile>
                <Dropdown>
                    <Popover
                        control={
                            <Button dropdown={true} toolbar={true}>
                                Select
                            </Button>
                        }
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
            <DocsText>{toolbarDropdownCode}</DocsText>

            <Separator />

            <h2>Disabled State</h2>
            <Description>
                Disabled state can be rendered with <code>state="disabled"</code> class.
            </Description>
            <DocsTile>
                <Dropdown>
                    <Popover
                        state="disabled"
                        control={
                            <Button dropdown={true} state="disabled">
                                Select
                            </Button>
                        }
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
            <DocsText>{disabledDropdownCode}</DocsText>

            <Separator />

            <h2>Sizes</h2>
            <DocsTile>
                <Dropdown>
                    <Popover
                        control={
                            <Button dropdown={true} size="xs">
                                Select
                            </Button>
                        }
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
                        control={
                            <Button dropdown={true} size="s">
                                Select
                            </Button>
                        }
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
                        control={
                            <Button dropdown={true} size="compact">
                                Select
                            </Button>
                        }
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
                        control={
                            <Button dropdown={true} size="default">
                                Select
                            </Button>
                        }
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
                        control={
                            <Button dropdown={true} size="l">
                                Select
                            </Button>
                        }
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
                <Popover
                    control={<Button type="secondary" glyph="vertical-grip" />}
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

                <Popover
                    control={<Button type="secondary">More</Button>}
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

                <Popover
                    control={<Button>More</Button>}
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
            </DocsTile>
            <DocsText>{contextualMenuDropdownCode}</DocsText>
            <Separator />
        </div>
    );
};
