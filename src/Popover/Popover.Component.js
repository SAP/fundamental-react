import 'fundamental-styles/dist/layout.css'; //needed for layout container class for placement example
import path from 'path';
import { POPPER_SIZING_TYPES } from '../utils/constants';
import React from 'react';
import { Button, Dialog, Icon, Identifier, Image, Menu, Popover } from '../';
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

const longBodyContent = (
    <Menu>
        <Menu.List>
            <Menu.Item url='#'>Lorem ipsum dolor sit amet</Menu.Item>
            <Menu.Item url='#'>consectetur adipiscing elit</Menu.Item>
            <Menu.Item url='#'>sed do eiusmod tempor</Menu.Item>
            <Menu.Item url='#'>incididunt ut labore et dolore</Menu.Item>
        </Menu.List>
    </Menu>
);

export class PopoverComponent extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            showDialog: false
        };
    }

    toggleDialog = () => {
        this.setState(prevState => ({
            showDialog: !prevState.showDialog
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
                    <>
                        <div className='frDocs-tile__space-between'>
                            <Popover
                                body={bodyContent}
                                control={<Button glyph='navigation-up-arrow' option='transparent' />}
                                placement='top-start' />

                            <Popover
                                body={bodyContent}
                                control={<Button glyph='navigation-up-arrow' option='transparent' />}
                                placement='top' />

                            <Popover
                                body={bodyContent}
                                control={<Button glyph='navigation-up-arrow' option='transparent' />}
                                placement='top-end' />
                        </div>
                        <div className='frDocs-tile__break' />
                        <div className='frDocs-tile__space-between'>
                            <Popover
                                body={bodyContent}
                                control={<Button glyph='navigation-left-arrow' option='transparent' />}
                                placement='left-start' />
                            <Popover
                                body={bodyContent}
                                control={<Button glyph='navigation-right-arrow' option='transparent' />}
                                placement='right-start' />
                        </div>
                        <div className='frDocs-tile__break' />
                        <div className='frDocs-tile__space-between'>
                            <Popover
                                body={bodyContent}
                                control={<Button glyph='navigation-left-arrow' option='transparent' />}
                                placement='left' />

                            <Popover
                                body={bodyContent}
                                control={<Button glyph='navigation-right-arrow' option='transparent' />}
                                placement='right' />
                        </div>
                        <div className='frDocs-tile__break' />
                        <div className='frDocs-tile__space-between'>
                            <Popover
                                body={bodyContent}
                                control={<Button glyph='navigation-left-arrow' option='transparent' />}
                                placement='left-end' />

                            <Popover
                                body={bodyContent}
                                control={<Button glyph='navigation-right-arrow' option='transparent' />}
                                placement='right-end' />
                        </div>
                        <div className='frDocs-tile__break' />
                        <div className='frDocs-tile__space-between'>
                            <Popover
                                body={bodyContent}
                                control={<Button glyph='navigation-down-arrow' option='transparent' />}
                                placement='bottom-start' />


                            <Popover
                                body={bodyContent}
                                control={<Button glyph='navigation-down-arrow' option='transparent' />}
                                placement='bottom' />

                            <Popover
                                body={bodyContent}
                                control={<Button glyph='navigation-down-arrow' option='transparent' />}
                                placement='bottom-end' />
                        </div>
                    </>
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
                        control={<Button glyph='navigation-up-arrow' option='transparent' />}
                        disableEdgeDetection
                        placement='top' />

                    <Popover
                        body={bodyContent}
                        control={<Button glyph='navigation-down-arrow' option='transparent' />}
                        disableEdgeDetection
                        placement='bottom' />
                </Example>

                <Example
                    centered
                    title='Width Sizing Type'>
                    {POPPER_SIZING_TYPES.map(type =>
                        (<Popover
                            body={longBodyContent}
                            control={<Button>widthizingType: <strong>'{type}'</strong></Button>}
                            disableEdgeDetection
                            placement='bottom'
                            widthSizingType={type} />)
                    )}

                </Example>

                <Example
                    centered
                    description={`When an overlay (\`body\`) is visible, the reference (\`control\`)
                        element must be tracked because if it overflows from its boundaries, the overlay
                        will be hidden as well.`}
                    title='Out Of Boundaries'>
                    <Button onClick={this.toggleDialog}>Show Dialog</Button>
                    <Dialog
                        actions={[
                            <Button>Close</Button>
                        ]}
                        bodyProps={{
                            style: {
                                width: '400px',
                                height: '200px',
                                textAlign: 'center',
                                overflowY: 'auto'
                            }
                        }}
                        onClose={this.toggleDialog}
                        show={this.state.showDialog}
                        title='Overflow Example'>
                        <p>Click the icon to show the popover and then scroll within the dialog body...</p>
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
                    </Dialog>
                </Example>

            </ComponentPage>
        );
    }
}
