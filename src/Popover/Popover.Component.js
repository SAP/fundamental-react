import React from 'react';
import { Description, DocsText, DocsTile, Header, Import, Properties, Separator } from '../_playground';
import { Icon, Identifier, Image, Menu, MenuItem, MenuList, Popover} from '../';

export const PopoverComponent = () => {
    const popoverCode = `<Popover
    id="jhqD0555"
    control={<Icon glyph="cart" size="xl" />}
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
    alignment="right"
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
    noArrow
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
    alignment="right"
    noArrow
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
            <Import module='Popover' path='/fundamental-react/src/' />

            <Separator />

            <Properties
                properties={[
                    {
                        name: 'control',
                        description: 'component - Control element to toggle the display of the popover.'
                    },
                    {
                        name: 'body',
                        description: 'component - Wrapper that contains the popover content.'
                    },
                    {
                        name: 'noArrow',
                        description: 'bool - Set to "true" to render a popover body without an arrow. The default option is a popover body with an arrow. Leave empty for default.'
                    },
                    {
                        name: 'alignment',
                        description: 'string - The placement of the popover body. Options include "right" and "left". Leave empty for default/left placement.'
                    },
                    {
                        name: 'id',
                        description: 'string - optional. Element id.'
                    }
                ]}
                type='Inputs' />

            <Separator />

            <h2>Popover Example</h2>
            <DocsTile centered>
                <div className='fd-doc__margin--popover'>
                    <Popover
                        body={
                            <Menu>
                                <MenuList>
                                    <MenuItem url='/'>Option 1</MenuItem>
                                    <MenuItem url='/'>Option 2</MenuItem>
                                    <MenuItem url='/'>Option 3</MenuItem>
                                    <MenuItem url='/'>Option 4</MenuItem>
                                </MenuList>
                            </Menu>
                        }
                        control={<Icon glyph='cart' size='xl' />}
                        id='jhqD0555' />

                    <Popover
                        alignment='right'
                        body={
                            <Menu>
                                <MenuList>
                                    <MenuItem url='/'>Option 1</MenuItem>
                                    <MenuItem url='/'>Option 2</MenuItem>
                                    <MenuItem url='/'>Option 3</MenuItem>
                                    <MenuItem url='/'>Option 4</MenuItem>
                                </MenuList>
                            </Menu>
                        }
                        control={<Image photo='https://placeimg.com/400/400/nature' size='m'
                            type='circle' />}
                        id='jhqD0556' />

                    <Popover
                        body={
                            <Menu>
                                <MenuList>
                                    <MenuItem url='/'>Option 1</MenuItem>
                                    <MenuItem url='/'>Option 2</MenuItem>
                                    <MenuItem url='/'>Option 3</MenuItem>
                                    <MenuItem url='/'>Option 4</MenuItem>
                                </MenuList>
                            </Menu>
                        }
                        control={<Identifier color={6} glyph='money-bills'
                            size='m' />}
                        id='jhqD0557'
                        noArrow />

                    <Popover
                        alignment='right'
                        body={
                            <Menu>
                                <MenuList>
                                    <MenuItem url='/'>Option 1</MenuItem>
                                    <MenuItem url='/'>Option 2</MenuItem>
                                    <MenuItem url='/'>Option 3</MenuItem>
                                    <MenuItem url='/'>Option 4</MenuItem>
                                </MenuList>
                            </Menu>
                        }
                        control={<Icon glyph='menu2' size='xl' />}
                        id='jhqD0558'
                        noArrow />
                </div>
            </DocsTile>
            <DocsText>{popoverCode}</DocsText>
            <Separator />
        </div>
    );
};
