/* eslint-disable react/no-multi-comp */
import { action } from '@storybook/addon-actions';
import Avatar from '../../Avatar/Avatar';
import Button from '../../Button/Button';
import Dialog from '../../Dialog/Dialog';
import Icon from '../../Icon/Icon';
import Menu from '../../Menu/Menu';
import Popover from '../Popover';
import { POPPER_PLACEMENTS } from '../../utils/constants';
import {
    boolean,
    select
} from '@storybook/addon-knobs';
import React, { useEffect, useRef, useState } from 'react';

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
    <Menu>
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

export const withCustomFlipContainer = () => {
    const containerRef = useRef();
    const [container, setContainer] = useState();

    useEffect(() => {
        setContainer(containerRef.current);
    });

    return (
        <div style={{ alignItems: 'center', display: 'flex' }}>
            <div style={{
                backgroundColor: '#444',
                width: '180px',
                height: '120px'
            }} />
            <div ref={containerRef} style={{
                border: '1px solid black',
                padding: '220px 140px 250px 40px'
            }}>
                <Popover
                    body={bodyContent}
                    control={<Button glyph='navigation-up-arrow' option='transparent' />}
                    flipContainer={container}
                    placement={['bottom', 'left', 'right', 'top']} />
            </div>
        </div>
    );
};

export const noArrow = () => (
    <>
        <Popover
            body={bodyContent}
            control={<Icon glyph='cart' size='xl' />}
            noArrow
            placement='left' />

        <Popover
            body={bodyContent}
            control={<Avatar backgroundImageUrl='./assets/nature.jpg'
                circle size='m' />}
            noArrow
            placement='top' />

        <Popover
            body={bodyContent}
            control={<Avatar color={6} glyph='money-bills'
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
                body={type === 'minTarget' ? bodyContent : longBodyContent}
                control={<Button>widthSizingType: <strong>'{type}'</strong></Button>}
                disableEdgeDetection
                key={type}
                placement='bottom'
                widthSizingType={type} />)
        )}
    </>
);

/**
 * When an overlay (`body`) is visible, the reference (`control`)
 * element must be tracked because if it overflows from its boundaries, the overlay will be hidden as well.
 */

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

export const dev = () => {
    const containerRef = useRef();
    const [container, setContainer] = useState();

    useEffect(() => {
        setContainer(containerRef.current);
    });

    const useContainer = boolean('Use flip container', false);

    const popover = (
        <Popover
            body={someMenu}
            control={<Button glyph='navigation-up-arrow' option='transparent' />}
            disableEdgeDetection={boolean('disableEdgeDetection', false)}
            disableKeyPressHandler={boolean('disableKeyPressHandler', false)}
            disabled={boolean('disabled', false)}
            // eslint-disable-next-line no-undefined
            flipContainer={useContainer ? container : undefined}
            noArrow={boolean('noArrow', false)}
            onClickOutside={action('on-click-outside')}
            onEscapeKey={action('on-escape-key')}
            placement={select(
                'placement',
                POPPER_PLACEMENTS.reduce((a, b) => ({ ...a, [b]: b }), {}),
                'bottom-start'
            )}
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

    if (useContainer) {
        return (
            <div style={{ alignItems: 'center', display: 'flex' }}>
                <div style={{
                    backgroundColor: '#444',
                    width: '180px',
                    height: '120px'
                }} />
                <div ref={containerRef} style={{
                    border: '1px solid black',
                    padding: '220px 140px 250px 40px'
                }}>
                    {popover}
                </div>
            </div>
        );
    }

    return (
        <div style={{ margin: '220px' }}>
            {popover}
        </div>
    );
};
dev.parameters = {
    docs: { disable: true }
};

export const noStyles = () => (
    <Popover
        body={bodyContent}
        control={<Icon glyph='cart' size='xl' />}
        cssNamespace='xxx'
        placement='bottom' />
);
noStyles.parameters = { docs: { disable: true } };
