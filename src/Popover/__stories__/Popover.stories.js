/* eslint-disable react/no-multi-comp */
import Button from '../../Button/Button';
import Dialog from '../../Dialog/Dialog';
import Icon from '../../Icon/Icon';
import Identifier from '../../Identifier/Identifier';
import Image from '../../Image/Image';
import Menu from '../../Menu/Menu';
import Popover from '../Popover';
import {
    boolean,
    select
} from '@storybook/addon-knobs';
import React, { useState } from 'react';

export default {
    title: 'Component API/Popover',
    component: Popover
};

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

const someMenu = (
    <Menu style={{ maxWidth: '10em', padding: '1em' }}>
        <Menu.List>
            <Menu.Item url='#'>Option 1</Menu.Item>
            <Menu.Item url='#'>Option 2</Menu.Item>
            <Menu.Item url='#'>Option 3</Menu.Item>
            <Menu.Item url='#'>Option 4</Menu.Item>
        </Menu.List>
    </Menu>
);

export const placements = () => (
    <>
        <style dangerouslySetInnerHTML={{ __html: `
            td {
                min-width: 3em;
                min-height: 3em;
            }
            ` }} />
        <table>
            <tbody>
                {/* start top padding for popover */}
                <tr ><td>&nbsp;</td></tr>
                <tr ><td>&nbsp;</td></tr>
                <tr ><td>&nbsp;</td></tr>
                <tr ><td>&nbsp;</td></tr>
                <tr ><td>&nbsp;</td></tr>
                {/* end top padding for popover */}
                <tr>
                    <td />
                    <td />
                    <td />
                    <td />
                    <td>
                        <Popover
                            body={someMenu} control={<Button glyph='navigation-up-arrow' option='transparent' >Top-Start</Button>}
                            placement='top-start'
                            popperProps={{ id: 'fd-top-start-popover-placement-story' }}
                            type='menu' />
                    </td>
                    <td>
                        <Popover
                            body={someMenu} control={<Button glyph='navigation-up-arrow' option='transparent' >Top</Button>}
                            placement='top'
                            type='menu' />
                    </td>
                    <td>
                        <Popover
                            body={someMenu} control={<Button glyph='navigation-up-arrow' option='transparent' >Top-End</Button>}
                            placement='top-end'
                            type='menu' />
                    </td>
                    <td />
                </tr>
                <tr>
                    <td />
                    <td />
                    <td />
                    <td>
                        <Popover
                            body={someMenu} control={<Button glyph='navigation-left-arrow' option='transparent' >Left-Start</Button>}
                            placement='left-start'
                            type='menu' />
                    </td>
                    <td />
                    <td />
                    <td />
                    <td>
                        <Popover
                            body={someMenu} control={<Button glyph='navigation-right-arrow' option='transparent' >Right-Top</Button>}
                            placement='right-start'
                            type='menu' />
                    </td>
                </tr>
                <tr>
                    <td />
                    <td />
                    <td />
                    <td>
                        <Popover
                            body={someMenu} control={<Button glyph='navigation-left-arrow' option='transparent' >Left</Button>}
                            placement='left'
                            type='menu' />
                    </td>
                    <td />
                    <td />
                    <td />
                    <td>
                        <Popover
                            body={someMenu} control={<Button glyph='navigation-right-arrow' option='transparent' >Right</Button>}
                            placement='right'
                            type='menu' />
                    </td>
                </tr>
                <tr>
                    <td />
                    <td />
                    <td />
                    <td>
                        <Popover
                            body={someMenu} control={<Button glyph='navigation-left-arrow' option='transparent' >Left-End</Button>}
                            placement='left-end'
                            type='menu' />
                    </td>
                    <td />
                    <td />
                    <td />
                    <td>
                        <Popover
                            body={someMenu} control={<Button glyph='navigation-right-arrow' option='transparent' >Right-End</Button>}
                            placement='right-end'
                            type='menu' />
                    </td>
                </tr>
                <tr>
                    <td />
                    <td />
                    <td />
                    <td />
                    <td>
                        <Popover
                            body={someMenu} control={<Button glyph='navigation-down-arrow' option='transparent' >Bottom-Start</Button>}
                            placement='bottom-start'
                            type='menu' />
                    </td>
                    <td>
                        <Popover
                            body={someMenu} control={<Button glyph='navigation-down-arrow' option='transparent' >Bottom</Button>}
                            placement='bottom'
                            type='menu' />
                    </td>
                    <td>
                        <Popover
                            body={someMenu} control={<Button glyph='navigation-down-arrow' option='transparent' >Bottom-End</Button>}
                            placement='bottom-end'
                            type='menu' />
                    </td>
                    <td />
                </tr>
                {/* start bottom padding for popover */}
                <tr ><td>&nbsp;</td></tr>
                <tr ><td>&nbsp;</td></tr>
                <tr ><td>&nbsp;</td></tr>
                <tr ><td>&nbsp;</td></tr>
                <tr ><td>&nbsp;</td></tr>
                {/* end bottom padding for popover */}
            </tbody>
        </table>
    </>
);

export const disableEdgeDetection = () => (
    <>
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
    </>
);

export const noArrow = () => (
    <>
        <Popover
            body={bodyContent}
            control={<Icon glyph='cart' size='xl' />}
            noArrow
            placement='left' />

        <Popover
            body={bodyContent}
            control={<Image photo='./assets/nature.jpg' size='m'
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
    </>
);

export const widthSizingTypes = () => (
    <>
        {['none', 'matchTarget', 'minTarget', 'maxTarget'].map(type =>
            (<Popover
                body={longBodyContent}
                control={<Button>widthizingType: <strong>'{type}'</strong></Button>}
                disableEdgeDetection
                key={type}
                placement='bottom'
                widthSizingType={type} />)
        )}
    </>
);

export const outOfBoundaries = () => {
    let [open, setOpen] = useState(false);

    return (
        <>
            <Button onClick={() => (setOpen(true))}>Show Dialog</Button>
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
                onClose={() => setOpen(false)}
                show={open}
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
        </>
    );
};

outOfBoundaries.story = {
    parameters: {
        docs: {
            storyDescription: `When an overlay (\`body\`) is visible, the reference (\`control\`)
            element must be tracked because if it overflows from its boundaries, the overlay
            will be hidden as well.`
        },

        // TO DO: reenable storyshots for examples using hooks in storybook@6
        // https://github.com/storybookjs/storybook/releases/tag/v6.0.0-alpha.43
        storyshots: { disable: true }
    }
};

export const dev = () => (
    <Popover
        body={someMenu}
        control={<Button glyph='navigation-up-arrow' option='transparent' />}
        disabled={boolean('disabled', false)}
        disableEdgeDetection={boolean('disableEdgeDetection', false)}
        disableKeyPressHandler={boolean('disableKeyPressHandler', false)}
        noArrow={boolean('noArrow', false)}
        placement={select('placement', {
            'bottom-start': 'bottom-start',
            'bottom': 'bottom',
            'bottom-end': 'bottom-end',
            'left-start': 'left-start',
            'left': 'left',
            'left-end': 'left-end',
            'right-start': 'right-start',
            'right': 'right',
            'right-end': 'right-end',
            'top-start': 'top-start',
            'top': 'top',
            'top-end': 'top-end'
        })}
        type={select('type', {
            'dialog': 'dialog',
            'grid': 'grid',
            'listbox': 'listbox',
            'menu': 'menu',
            'tree': 'tree'
        })}
        useArrowKeyNavigation={boolean('useArrowKeyNavigation', false)}
        widthSizingType={select('widthSizingType', {
            'none': 'none',
            'matchTarget': 'matchTarget',
            'minTarget': 'minTarget',
            'maxTarget': 'maxTarget'
        })} />
);
dev.story = {
    parameters: {
        docs: { disable: true }
    }
};
