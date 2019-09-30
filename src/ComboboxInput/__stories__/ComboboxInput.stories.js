import ComboboxInput from '../ComboboxInput';
import Menu from '../../Menu/Menu';
import React from 'react';
import { storiesOf } from '@storybook/react';
import {
    withKnobs
} from '@storybook/addon-knobs';

storiesOf('Components|ComboboxInput', module)
    .addDecorator(withKnobs)
    .add('Default', () => (
        <ComboboxInput
            menu={
                <Menu>
                    <Menu.List>
                        <Menu.Item url='#'>Pear</Menu.Item>
                        <Menu.Item url='#'>Strawberry</Menu.Item>
                        <Menu.Item url='#'>Raspberry</Menu.Item>
                        <Menu.Item isLink url='#'>
                            + New Item
                        </Menu.Item>
                    </Menu.List>
                </Menu>
            }
            placeholder='Select Fruit' />
    ))
    .add('disable styles', () => (
        <ComboboxInput
            disableStyles
            menu={
                <Menu>
                    <Menu.List>
                        <Menu.Item url='#'>Pear</Menu.Item>
                        <Menu.Item url='#'>Strawberry</Menu.Item>
                        <Menu.Item url='#'>Raspberry</Menu.Item>
                        <Menu.Item isLink url='#'>
                            + New Item
                        </Menu.Item>
                    </Menu.List>
                </Menu>
            }
            placeholder='Select Fruit' />
    ))
    .add('custom styles', () => (
        <ComboboxInput
            customStyles={require('../../utils/WithStyles/customStylesTest.css')}
            menu={
                <Menu>
                    <Menu.List>
                        <Menu.Item url='#'>Pear</Menu.Item>
                        <Menu.Item url='#'>Strawberry</Menu.Item>
                        <Menu.Item url='#'>Raspberry</Menu.Item>
                        <Menu.Item isLink url='#'>
                            + New Item
                        </Menu.Item>
                    </Menu.List>
                </Menu>
            }
            placeholder='Select Fruit' />
    ));
