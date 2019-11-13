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
            control={<Button glyph='navigation-up-arrow' option='light' />} />
    ))
    .add('Placement', () => (
        <>
            <Popover
                body={someText}
                control={<Button glyph='navigation-up-arrow' option='light' >Pop to Top-Start</Button>}
                placement='top-start'
                style={{ position: 'fixed', top: '10em', left: '35em' }} />
            <Popover
                body={someText}
                control={<Button glyph='navigation-up-arrow' option='light' >Pop to Top</Button>}
                placement='top'
                style={{ position: 'fixed', top: '10em', left: '50em' }} />
            <Popover
                body={someText}
                control={<Button glyph='navigation-up-arrow' option='light' >Pop to Top-End</Button>}
                placement='top-end'
                style={{ position: 'fixed', top: '10em', left: '65em' }} />
            <Popover
                body={someText}
                control={<Button glyph='navigation-right-arrow' option='light' >Pop to Right-Top</Button>}
                placement='right-start'
                style={{ position: 'fixed', top: '15em', left: '65em' }} />
            <Popover
                body={someText}
                control={<Button glyph='navigation-right-arrow' option='light' >Pop to Right</Button>}
                placement='right'
                style={{ position: 'fixed', top: '20em', left: '65em' }} />
            <Popover
                body={someText}
                control={<Button glyph='navigation-right-arrow' option='light' >Pop to Right-End</Button>}
                placement='right-end'
                style={{ position: 'fixed', top: '25em', left: '65em' }} />
            <Popover
                body={someText}
                control={<Button glyph='navigation-down-arrow' option='light' >Pop to Bottom-End</Button>}
                placement='bottom-end'
                style={{ position: 'fixed', top: '30em', left: '65em' }} />
            <Popover
                body={someText}
                control={<Button glyph='navigation-down-arrow' option='light' >Pop to Bottom</Button>}
                placement='bottom'
                style={{ position: 'fixed', top: '30em', left: '50em' }} />
            <Popover
                body={someText}
                control={<Button glyph='navigation-down-arrow' option='light' >Pop to Bottom-Start</Button>}
                placement='bottom-start'
                style={{ position: 'fixed', top: '30em', left: '35em' }} />
            <Popover
                body={someText}
                control={<Button glyph='navigation-left-arrow' option='light' >Pop to Left-End</Button>}
                placement='left-end'
                style={{ position: 'fixed', top: '25em', left: '35em' }} />
            <Popover
                body={someText}
                control={<Button glyph='navigation-left-arrow' option='light' >Pop to Left</Button>}
                placement='left'
                style={{ position: 'fixed', top: '20em', left: '35em' }} />
            <Popover
                body={someText}
                control={<Button glyph='navigation-left-arrow' option='light' >Pop to Left-Start</Button>}
                placement='left-start'
                style={{ position: 'fixed', top: '15em', left: '35em' }} />
        </>
    ))
    .add('disable styles', () => (
        <Popover
            body={bodyContent}
            control={<Button
                disableStyles
                glyph='navigation-up-arrow'
                option='light' />}
            disableStyles />
    ))
    .add('custom styles', () => (
        <Popover
            body={bodyContent}
            control={<Button
                disableStyles
                glyph='navigation-up-arrow'
                option='light' />}
            customStyles={require('../../utils/WithStyles/customStylesTest.css')} />
    ));
