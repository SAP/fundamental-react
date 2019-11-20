import Button from '../../Button/Button';
import Menu from '../../Menu/Menu';
import Popover from '../Popover';
import React from 'react';
import { storiesOf } from '@storybook/react';
import {
    withKnobs
} from '@storybook/addon-knobs';

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

const someText = <p style={{ padding: '0.5em' }}>This is a simple popover.</p>;

storiesOf('Components|Popover', module)
    .addDecorator(withKnobs)
    .add('Default', () => (
        <Popover
            body={bodyContent}
            control={<Button glyph='navigation-up-arrow' option='light' />}
            useArrowKeyNavigation />
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
                            body={someText}
                            control={<Button glyph='navigation-up-arrow' option='light' >Pop to Top-Start</Button>}
                            placement='top-start' />
                    </td>
                    <td>
                        <Popover
                            body={someText}
                            control={<Button glyph='navigation-up-arrow' option='light' >Pop to Top</Button>}
                            placement='top' />
                    </td>
                    <td>
                        <Popover
                            body={someText}
                            control={<Button glyph='navigation-up-arrow' option='light' >Pop to Top-End</Button>}
                            placement='top-end' />
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
                            body={someText}
                            control={<Button glyph='navigation-left-arrow' option='light' >Pop to Left-Start</Button>}
                            placement='left-start' />
                    </td>
                    <td />
                    <td />
                    <td />
                    <td>
                        <Popover
                            body={someText}
                            control={<Button glyph='navigation-right-arrow' option='light' >Pop to Right-Top</Button>}
                            placement='right-start' />
                    </td>
                </tr>
                <tr>
                    <td />
                    <td />
                    <td />
                    <td />
                    <td>
                        <Popover
                            body={someText}
                            control={<Button glyph='navigation-left-arrow' option='light' >Pop to Left</Button>}
                            placement='left' />
                    </td>
                    <td />
                    <td />
                    <td />
                    <td>
                        <Popover
                            body={someText}
                            control={<Button glyph='navigation-right-arrow' option='light' >Pop to Right</Button>}
                            placement='right' />
                    </td>
                </tr>
                <tr>
                    <td />
                    <td />
                    <td />
                    <td />
                    <td>
                        <Popover
                            body={someText}
                            control={<Button glyph='navigation-left-arrow' option='light' >Pop to Left-End</Button>}
                            placement='left-end' />
                    </td>
                    <td />
                    <td />
                    <td />
                    <td>
                        <Popover
                            body={someText}
                            control={<Button glyph='navigation-right-arrow' option='light' >Pop to Right-End</Button>}
                            placement='right-end' />
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
                            body={someText}
                            control={<Button glyph='navigation-down-arrow' option='light' >Pop to Bottom-Start</Button>}
                            placement='bottom-start' />
                    </td>
                    <td>
                        <Popover
                            body={someText}
                            control={<Button glyph='navigation-down-arrow' option='light' >Pop to Bottom</Button>}
                            placement='bottom' />
                    </td>
                    <td>
                        <Popover
                            body={someText}
                            control={<Button glyph='navigation-down-arrow' option='light' >Pop to Bottom-End</Button>}
                            placement='bottom-end' />
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
            </table>
        </>
    ))
    .add('disable styles', () => (
        <Popover
            body={bodyContent}
            control={<Button
                disableStyles
                glyph='navigation-up-arrow'
                option='light' />}
            disableStyles
            useArrowKeyNavigation />
    ))
    .add('custom styles', () => (
        <Popover
            body={bodyContent}
            control={<Button
                disableStyles
                glyph='navigation-up-arrow'
                option='light' />}
            customStyles={require('../../utils/WithStyles/customStylesTest.css')}
            useArrowKeyNavigation />
    ));
