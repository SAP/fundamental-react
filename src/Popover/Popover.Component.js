import path from 'path';
import React from 'react';
import { ComponentPage, Example } from '../_playground';
import { Icon, Identifier, Image, Menu, Popover } from '../';

export const PopoverComponent = () => {
    return (
        <ComponentPage
            description={`The **Popover** is a wrapping component that accepts a "control" as well as a "body". A control can be
                anything that you want to trigger the interaction from. The body will be the contents of what you reveal
                on the page after triggering the popover. When paired with the **Menu** component, the Popover is commonly
                used as the interaction/wrapping component for composing "dropdowns", "contextual menus", etc. As a general rule,
                it is suggested that one Popover be revealed on the page at any given time. Opening one Popover should close all
                others to prevent multiple layers and collisions of several popovers.`}
            sourceModulePath={path.join(__dirname, './Popover')}
            title='Popover'>

            <Example
                centered
                title='Popover Example'>
                <div className='fd-doc__margin--popover'>
                    <Popover
                        body={
                            <Menu>
                                <Menu.List>
                                    <Menu.Item url='/'>Option 1</Menu.Item>
                                    <Menu.Item url='/'>Option 2</Menu.Item>
                                    <Menu.Item url='/'>Option 3</Menu.Item>
                                    <Menu.Item url='/'>Option 4</Menu.Item>
                                </Menu.List>
                            </Menu>
                        }
                        control={<Icon glyph='cart' size='xl' />}
                        id='jhqD0555' />

                    <Popover
                        alignment='right'
                        body={
                            <Menu>
                                <Menu.List>
                                    <Menu.Item url='/'>Option 1</Menu.Item>
                                    <Menu.Item url='/'>Option 2</Menu.Item>
                                    <Menu.Item url='/'>Option 3</Menu.Item>
                                    <Menu.Item url='/'>Option 4</Menu.Item>
                                </Menu.List>
                            </Menu>
                        }
                        control={<Image photo='https://placeimg.com/400/400/nature' size='m'
                            type='circle' />}
                        id='jhqD0556' />

                    <Popover
                        body={
                            <Menu>
                                <Menu.List>
                                    <Menu.Item url='/'>Option 1</Menu.Item>
                                    <Menu.Item url='/'>Option 2</Menu.Item>
                                    <Menu.Item url='/'>Option 3</Menu.Item>
                                    <Menu.Item url='/'>Option 4</Menu.Item>
                                </Menu.List>
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
                                <Menu.List>
                                    <Menu.Item url='/'>Option 1</Menu.Item>
                                    <Menu.Item url='/'>Option 2</Menu.Item>
                                    <Menu.Item url='/'>Option 3</Menu.Item>
                                    <Menu.Item url='/'>Option 4</Menu.Item>
                                </Menu.List>
                            </Menu>
                        }
                        control={<Icon glyph='menu2' size='xl' />}
                        id='jhqD0558'
                        noArrow />
                </div>
            </Example>

        </ComponentPage>
    );
};
