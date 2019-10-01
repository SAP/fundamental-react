import Menu from '../Menu';
import React from 'react';
import { storiesOf } from '@storybook/react';
import {
    withKnobs
} from '@storybook/addon-knobs';

storiesOf('Components|Menu', module)
    .addDecorator(withKnobs)
    .add('Default', () => (
        <Menu>
            <Menu.List>
                <Menu.Item url='#'>
                Option 1
                </Menu.Item>
                <Menu.Item url='#'>
                Option 2
                </Menu.Item>
                <Menu.Item url='#'>
                Option 3
                </Menu.Item>
            </Menu.List>
        </Menu>
    ))
    .add('disable styles', () => (
        <Menu disableStyles>
            <Menu.List>
                <Menu.Item url='#'>
                Option 1
                </Menu.Item>
                <Menu.Item url='#'>
                Option 2
                </Menu.Item>
                <Menu.Item url='#'>
                Option 3
                </Menu.Item>
            </Menu.List>
        </Menu>
    ))
    .add('custom styles', () => (
        <Menu
            customStyles={require('../../utils/WithStyles/customStylesTest.css')}>
            <Menu.List>
                <Menu.Item url='#'>
                Option 1
                </Menu.Item>
                <Menu.Item url='#'>
                Option 2
                </Menu.Item>
                <Menu.Item url='#'>
                Option 3
                </Menu.Item>
            </Menu.List>
        </Menu>
    ));
