import Button from '../../Button/Button';
import Menu from '../../Menu/Menu';
import Popover from '../Popover';
import React from 'react';
import { storiesOf } from '@storybook/react';
import {
    boolean,
    select,
    withKnobs
} from '@storybook/addon-knobs';

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

storiesOf('Components|Popover', module)
    .addDecorator(withKnobs)
    .add('Dev', () => (
        <Popover
            body={someMenu}
            control={<Button glyph='navigation-up-arrow' option='transparent' />}
            disableEdgeDetection={boolean('disableEdgeDetection', false)}
            disableKeyPressHandler={boolean('disableKeyPressHandler', false)}
            disabled={boolean('disabled', false)}
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
    ))
    .add('Placement', () => (
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
                        <td />
                        <td>
                            <Popover
                                body={someMenu} control={<Button glyph='navigation-up-arrow' option='transparent' >Pop to Top-Start</Button>}
                                placement='top-start'
                                popperProps={{ id: 'fd-top-start-popover-placement-story' }}
                                type='menu' />
                        </td>
                        <td>
                            <Popover
                                body={someMenu} control={<Button glyph='navigation-up-arrow' option='transparent' >Pop to Top</Button>}
                                placement='top'
                                type='menu' />
                        </td>
                        <td>
                            <Popover
                                body={someMenu} control={<Button glyph='navigation-up-arrow' option='transparent' >Pop to Top-End</Button>}
                                placement='top-end'
                                type='menu' />
                        </td>
                        <td />
                    </tr>
                    <tr>
                        <td />
                        <td />
                        <td />
                        <td />
                        <td>
                            <Popover
                                body={someMenu} control={<Button glyph='navigation-left-arrow' option='transparent' >Pop to Left-Start</Button>}
                                placement='left-start'
                                type='menu' />
                        </td>
                        <td />
                        <td />
                        <td />
                        <td>
                            <Popover
                                body={someMenu} control={<Button glyph='navigation-right-arrow' option='transparent' >Pop to Right-Top</Button>}
                                placement='right-start'
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
                                body={someMenu} control={<Button glyph='navigation-left-arrow' option='transparent' >Pop to Left</Button>}
                                placement='left'
                                type='menu' />
                        </td>
                        <td />
                        <td />
                        <td />
                        <td>
                            <Popover
                                body={someMenu} control={<Button glyph='navigation-right-arrow' option='transparent' >Pop to Right</Button>}
                                placement='right'
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
                                body={someMenu} control={<Button glyph='navigation-left-arrow' option='transparent' >Pop to Left-End</Button>}
                                placement='left-end'
                                type='menu' />
                        </td>
                        <td />
                        <td />
                        <td />
                        <td>
                            <Popover
                                body={someMenu} control={<Button glyph='navigation-right-arrow' option='transparent' >Pop to Right-End</Button>}
                                placement='right-end'
                                type='menu' />
                        </td>
                    </tr>
                    <tr>
                        <td />
                        <td />
                        <td />
                        <td />
                        <td />
                        <td>
                            <Popover
                                body={someMenu} control={<Button glyph='navigation-down-arrow' option='transparent' >Pop to Bottom-Start</Button>}
                                placement='bottom-start'
                                type='menu' />
                        </td>
                        <td>
                            <Popover
                                body={someMenu} control={<Button glyph='navigation-down-arrow' option='transparent' >Pop to Bottom</Button>}
                                placement='bottom'
                                type='menu' />
                        </td>
                        <td>
                            <Popover
                                body={someMenu} control={<Button glyph='navigation-down-arrow' option='transparent' >Pop to Bottom-End</Button>}
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
    ))
    .add('disable styles', () => (
        <Popover
            body={someMenu} control={<Button
                disableStyles
                glyph='navigation-up-arrow'
                option='transparent' />}
            disableStyles
            type='menu'
            useArrowKeyNavigation />
    ));
