import ComboboxInput from '../ComboboxInput';
import Menu from '../../Menu/Menu';
import React from 'react';
import { storiesOf } from '@storybook/react';
import {
    boolean,
    select,
    withKnobs
} from '@storybook/addon-knobs';

const menu = () => (<Menu>
    <Menu.List>
        <Menu.Item url='#'>Pear</Menu.Item>
        <Menu.Item url='#'>Strawberry</Menu.Item>
        <Menu.Item url='#'>Raspberry</Menu.Item>
        <Menu.Item isLink url='#'>
            + New Item
        </Menu.Item>
    </Menu.List>
</Menu>);

const createProps = (overrides) => ({
    compact: boolean('compact', false),
    menu: menu,
    state: select('Validation State', {
        'default': null,
        'valid': 'valid',
        'invalid': 'invalid',
        'information': 'information',
        'warning': 'warning'
    }),
    placeholder: 'Select a Fruit',
    ...overrides
});

storiesOf('Components|ComboboxInput', module)
    .addDecorator(withKnobs)
    .add('Default', () => (
        <ComboboxInput {...createProps()} />
    ))
    .add('disable styles', () => (
        <ComboboxInput
            {...createProps()}
            disableStyles />
    ));
