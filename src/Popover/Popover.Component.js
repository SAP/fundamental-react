import path from 'path';
import React from 'react';
import { ComponentPage, Example } from '../_playground';
import { Icon, Identifier, Image, Menu, Popover } from '../';

const bodyContent = (
    <Menu>
        <Menu.List>
            <Menu.Item url='/'>Option 1</Menu.Item>
            <Menu.Item url='/'>Option 2</Menu.Item>
            <Menu.Item url='/'>Option 3</Menu.Item>
            <Menu.Item url='/'>Option 4</Menu.Item>
        </Menu.List>
    </Menu>
);

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
                title='Placements - Defaults'>
                <div className='fd-doc__margin--popover'>
                    <Popover
                        body={bodyContent}
                        control={<Icon glyph='cart' size='xl' />}
                        placement='left' />

                    <Popover
                        body={bodyContent}
                        control={<Image photo='https://placeimg.com/400/400/nature' size='m'
                            type='circle' />}
                        placement='top' />

                    <Popover
                        body={bodyContent}
                        control={<Identifier color={6} glyph='money-bills'
                            size='m' />}
                        placement='bottom' />

                    <Popover
                        body={bodyContent}
                        control={<Icon glyph='menu2' size='xl' />}
                        placement='right' />
                </div>
            </Example>

            <Example
                centered
                title='Placements - Start Variation'>
                <div className='fd-doc__margin--popover'>
                    <Popover
                        body={bodyContent}
                        control={<Icon glyph='cart' size='xl' />}
                        placement='left-start' />

                    <Popover
                        body={bodyContent}
                        control={<Image photo='https://placeimg.com/400/400/nature' size='m'
                            type='circle' />}
                        placement='top-start' />

                    <Popover
                        body={bodyContent}
                        control={<Identifier color={6} glyph='money-bills'
                            size='m' />}
                        placement='bottom-start' />

                    <Popover
                        body={bodyContent}
                        control={<Icon glyph='menu2' size='xl' />}
                        placement='right-start' />
                </div>
            </Example>

            <Example
                centered
                title='Placements - End Variation'>
                <div className='fd-doc__margin--popover'>
                    <Popover
                        body={bodyContent}
                        control={<Icon glyph='cart' size='xl' />}
                        placement='left-end' />

                    <Popover
                        body={bodyContent}
                        control={<Image photo='https://placeimg.com/400/400/nature' size='m'
                            type='circle' />}
                        placement='top-end' />

                    <Popover
                        body={bodyContent}
                        control={<Identifier color={6} glyph='money-bills'
                            size='m' />}
                        placement='bottom-end' />

                    <Popover
                        body={bodyContent}
                        control={<Icon glyph='menu2' size='xl' />}
                        placement='right-end' />
                </div>
            </Example>

            <Example
                centered
                title='Placements - No Arrows'>
                <div className='fd-doc__margin--popover'>
                    <Popover
                        body={bodyContent}
                        control={<Icon glyph='cart' size='xl' />}
                        noArrow
                        placement='left' />

                    <Popover
                        body={bodyContent}
                        control={<Image photo='https://placeimg.com/400/400/nature' size='m'
                            type='circle' />}
                        noArrow
                        placement='top' />

                    <Popover
                        body={bodyContent}
                        control={<Identifier color={6} glyph='money-bills'
                            size='m' />}
                        noArrow
                        placement='bottom' />

                    <Popover
                        body={bodyContent}
                        control={<Icon glyph='menu2' size='xl' />}
                        noArrow
                        placement='right' />
                </div>
            </Example>

        </ComponentPage>
    );
};
