import 'fundamental-styles/dist/layout.css'; //needed for layout container class for placement example
import path from 'path';
import React from 'react';
import { Button, Icon, Identifier, Image, Menu, Modal, Popover } from '../';
import { ComponentPage, Example } from '../_playground';

const bodyContent = (
    <Menu>
        <Menu.List>
            <Menu.Item url='#'>Option 1</Menu.Item>
            <Menu.Item url='#'>Option 2</Menu.Item>
            <Menu.Item url='#'>Option 3</Menu.Item>
            <Menu.Item url='#'>Option 4</Menu.Item>
        </Menu.List>
    </Menu>
);

export class PopoverComponent extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            showModal: false
        };
    }

    toggleModal = () => {
        this.setState(prevState => ({
            showModal: !prevState.showModal
        }));
    };

    render() {
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
                    description={`There are four base placements: \`top\`, \`bottom\`, \`left\` and \`right\`.
                        Those can be used alone or with \`-start\` or \`-end\` modifiers.`}
                    title='Placement'>
                    <div>
                        <div className='fd-container'>
                            <div className='fd-col--shift-3 fd-col--2 fd-has-text-align-center'>
                                <Popover
                                    body={bodyContent}
                                    control={<Button glyph='navigation-up-arrow' option='light' />}
                                    placement='top-start' />
                            </div>
                            <div className='fd-col--2 fd-has-text-align-center'>
                                <Popover
                                    body={bodyContent}
                                    control={<Button glyph='navigation-up-arrow' option='light' />}
                                    placement='top' />
                            </div>
                            <div className='fd-col--2 fd-has-text-align-center'>
                                <Popover
                                    body={bodyContent}
                                    control={<Button glyph='navigation-up-arrow' option='light' />}
                                    placement='top-end' />
                            </div>
                        </div>
                        <div className='fd-container'>
                            <div className='fd-col--shift-2 fd-col--2'>
                                <Popover
                                    body={bodyContent}
                                    control={<Button glyph='navigation-left-arrow' option='light' />}
                                    placement='left-start' />
                            </div>
                            <div className='fd-col--shift-4 fd-col--2 fd-has-text-align-right'>
                                <Popover
                                    body={bodyContent}
                                    control={<Button glyph='navigation-right-arrow' option='light' />}
                                    placement='right-start' />
                            </div>
                        </div>
                        <div className='fd-container'>
                            <div className='fd-col--shift-2 fd-col--2'>
                                <Popover
                                    body={bodyContent}
                                    control={<Button glyph='navigation-left-arrow' option='light' />}
                                    placement='left' />
                            </div>
                            <div className='fd-col--shift-4 fd-col--2 fd-has-text-align-right'>
                                <Popover
                                    body={bodyContent}
                                    control={<Button glyph='navigation-right-arrow' option='light' />}
                                    placement='right' />
                            </div>
                        </div>
                        <div className='fd-container'>
                            <div className='fd-col--shift-2 fd-col--2'>
                                <Popover
                                    body={bodyContent}
                                    control={<Button glyph='navigation-left-arrow' option='light' />}
                                    placement='left-end' />
                            </div>
                            <div className='fd-col--shift-4 fd-col--2 fd-has-text-align-right'>
                                <Popover
                                    body={bodyContent}
                                    control={<Button glyph='navigation-right-arrow' option='light' />}
                                    placement='right-end' />
                            </div>
                        </div>
                        <div className='fd-container'>
                            <div className='fd-col--shift-3 fd-col--2 fd-has-text-align-center'>
                                <Popover
                                    body={bodyContent}
                                    control={<Button glyph='navigation-down-arrow' option='light' />}
                                    placement='bottom-start' />
                            </div>
                            <div className='fd-col--2 fd-has-text-align-center'>
                                <Popover
                                    body={bodyContent}
                                    control={<Button glyph='navigation-down-arrow' option='light' />}
                                    placement='bottom' />
                            </div>
                            <div className='fd-col--2 fd-has-text-align-center'>
                                <Popover
                                    body={bodyContent}
                                    control={<Button glyph='navigation-down-arrow' option='light' />}
                                    placement='bottom-end' />
                            </div>
                        </div>
                    </div>
                </Example>

                <Example
                    centered
                    title='No Arrow'>
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
                </Example>

                <Example
                    centered
                    title='Disable Edge Detection'>
                    <Popover
                        body={bodyContent}
                        control={<Button glyph='navigation-up-arrow' option='light' />}
                        disableEdgeDetection
                        placement='top' />

                    <Popover
                        body={bodyContent}
                        control={<Button glyph='navigation-down-arrow' option='light' />}
                        disableEdgeDetection
                        placement='bottom' />
                </Example>

                <Example
                    centered
                    description={`When an overlay (\`body\`) is visible, the reference (\`control\`)
                        element must be tracked because if it overflows from its boundaries, the overlay
                        will be hidden as well.`}
                    title='Out Of Boundaries'>
                    <Button onClick={this.toggleModal}>Show Modal</Button>
                    <Modal
                        bodyProps={{
                            style: {
                                width: '400px',
                                height: '200px',
                                textAlign: 'center',
                                overflowY: 'auto'
                            }
                        }}
                        onClose={this.toggleModal}
                        show={this.state.showModal}
                        title='Overflow Example'>
                        <p>Click the icon to show the popover and then scroll within the modal body...</p>
                        <br />
                        <br />
                        <Popover
                            body={bodyContent}
                            control={<Icon glyph='menu2' size='xl' />}
                            placement='bottom' />
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                    </Modal>
                </Example>

            </ComponentPage>
        );
    }
}
