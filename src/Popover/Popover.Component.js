import React from 'react';
import { Popover, Image, Identifier, Icon, Menu, MenuList, MenuItem } from '../';
import { DocsTile, DocsText, Separator, Header, Description, Import, Properties } from '../';
import 'fundamental-ui/scss/components/popover.scss';

export const PopoverComponent = () => {
    const popoverCode = `<Popover
    id="jhqD0555"
    control={<Image size="m" photo="https://placeimg.com/400/400/nature" />}
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
    id="jhqD0556"
    control={<Image size="m" type="circle" photo="https://placeimg.com/400/400/nature" />}
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
    id="jhqD0557"
    control={<Identifier size="m" glyph="money-bills" color="6" />}
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
    id="jhqD0558"
    control={<Icon glyph="menu2" size="xl" />}
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
            <Header>Popover</Header>
            <Description>
                The popover is a wrapping component that accepts a "control" as well as a "body". A control can be
                anything that you want to trigger the interaction from. The body will be the contents of what you reveal
                on the page after triggering the popover. When paired with the menu component, the popover is commonly
                used as the interaction/wrapping component for composing "dropdowns", "contextual menus", "mega menus",
                etc. As a general rule, it is suggested that one popover be revealed on the page at any given time.
                Opening one popover should close all others to prevent multiple layers and collisions of several
                popovers.
            </Description>
            <Import module="Popover" path="/fundamental-react/src/" />

            <Separator />

            <Properties
                type="Inputs"
                properties={[
                    {
                        name: 'control',
                        description: 'Component - Control element to toggle the display of the popover.'
                    },
                    {
                        name: 'body',
                        description: 'Component - Wrapper that contains the popover content.'
                    },
                    {
                        name: 'id',
                        description: 'string - optional. Element id.'
                    }
                ]}
            />

            <Separator />

            <h2>Popover Example</h2>
            <DocsTile>
                <Popover
                    id="jhqD0555"
                    control={<Image size="m" photo="https://placeimg.com/400/400/nature" />}
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
                    id="jhqD0556"
                    control={<Image size="m" type="circle" photo="https://placeimg.com/400/400/nature" />}
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
                    id="jhqD0557"
                    control={<Identifier size="m" glyph="money-bills" color="6" />}
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
                    id="jhqD0558"
                    control={<Icon glyph="menu2" size="xl" />}
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
            <DocsText>{popoverCode}</DocsText>
            <Separator />
        </div>
    );
};
