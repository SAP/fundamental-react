import Button from '../../Button/Button';
import Dropdown from '../Dropdown';
import Menu from '../../Menu/Menu';
import Popover from '../../Popover/Popover';
import React from 'react';
import { storiesOf } from '@storybook/react';
import {
    withKnobs
} from '@storybook/addon-knobs';

storiesOf('Components|Dropdown', module)
    .addDecorator(withKnobs)
    .add('Default', () => (
        <Dropdown>
            <Popover
                body={
                    <Menu>
                        <Menu.List>
                            <Menu.Item url='#'>Option 1</Menu.Item>
                            <Menu.Item url='#'>Option 2</Menu.Item>
                            <Menu.Item url='#'>Option 3</Menu.Item>
                            <Menu.Item url='#'>Option 4</Menu.Item>
                        </Menu.List>
                    </Menu>
                }
                control={<Button className='fd-dropdown__control'>Select</Button>}
                id='jhqD0555'
                noArrow />
        </Dropdown>
    ))
    .add('disable styles', () => (
        <Dropdown
            disableStyles>
            <Popover
                body={
                    <Menu>
                        <Menu.List>
                            <Menu.Item url='#'>Option 1</Menu.Item>
                            <Menu.Item url='#'>Option 2</Menu.Item>
                            <Menu.Item url='#'>Option 3</Menu.Item>
                            <Menu.Item url='#'>Option 4</Menu.Item>
                        </Menu.List>
                    </Menu>
                }
                control={<Button className='fd-dropdown__control' disableStyles>Select</Button>}
                disableStyles
                id='jhqD0555'
                noArrow />
        </Dropdown>
    ))
    .add('custom styles', () => (
        <Dropdown
            customStyles={require('../../utils/WithStyles/customStylesTest.css')}>
            <Popover
                body={
                    <Menu>
                        <Menu.List>
                            <Menu.Item url='#'>Option 1</Menu.Item>
                            <Menu.Item url='#'>Option 2</Menu.Item>
                            <Menu.Item url='#'>Option 3</Menu.Item>
                            <Menu.Item url='#'>Option 4</Menu.Item>
                        </Menu.List>
                    </Menu>
                }
                control={<Button className='fd-dropdown__control' disableStyles>Select</Button>}
                disableStyles
                id='jhqD0555'
                noArrow />
        </Dropdown>
    ));
