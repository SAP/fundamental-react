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

storiesOf('Components|Popover', module)
    .addDecorator(withKnobs)
    .add('Default', () => (
        <Popover
            body={bodyContent}
            control={<Button glyph='navigation-up-arrow' option='light' />} />
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
