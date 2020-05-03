/* eslint-disable react/no-multi-comp */
import Link from '../../Link/Link';
import Menu from '../Menu';
import MenuItem from '../_MenuItem';
import MenuList from '../_MenuList';
import React from 'react';

export default {
    title: 'Component API/Menu',
    component: Menu,
    subcomponents: { MenuItem, MenuList }
};

export const primary = () => (
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
);

export const separator = () => (
    <Menu>
        <Menu.List>
            <Menu.Item separator>
                <Link to='#'>Option 1</Link>
            </Menu.Item>
            <Menu.Item>
                <Link to='#'>Option 2</Link>
            </Menu.Item>
            <Menu.Item separator>
                <Link to='#'>Option 3</Link>
            </Menu.Item>
            <Menu.Item>
                <Link to='#'>Option 4</Link>
            </Menu.Item>
        </Menu.List>
    </Menu>
);

separator.story = {
    name: 'With Separator',
    parameters: {
        docs: {
            storyDescription: 'Menu items with horizontal line as separator.'
        }
    }
};

export const states = () => (
    <Menu>
        <Menu.List>
            <Menu.Item separator>
                <Link to='#'>Option 1</Link>
            </Menu.Item>
            <Menu.Item active>
                <Link to='#'>Option 2</Link>
            </Menu.Item>
            <Menu.Item selected>
                <Link to='#'>Option 3</Link>
            </Menu.Item>
            <Menu.Item disabled>
                <Link to='#'>Option 4</Link>
            </Menu.Item>
        </Menu.List>
    </Menu>
);

states.story = {
    name: 'With States',
    parameters: {
        docs: {
            storyDescription: 'Menu item states - selected, active, and disabled.'
        }
    }
};

export const addOns = () => (
    <Menu>
        <Menu.List>
            <Menu.Item addonBefore='grid'>
                <Link to='#'>Option 1</Link>
            </Menu.Item>
            <Menu.Item addonBefore='wrench'>
                <Link to='#'>Option 2</Link>
            </Menu.Item>
            <Menu.Item addonAfter='accept' addonBefore='history'>
                <Link to='#'>Option 3</Link>
            </Menu.Item>
            <Menu.Item addonBefore='lightbulb'>
                <Link to='#'>Option 4</Link>
            </Menu.Item>
        </Menu.List>
    </Menu>
);

addOns.story = {
    name: 'With Addons',
    parameters: {
        docs: {
            storyDescription: 'Menu items with an add-on before or after.'
        }
    }
};
