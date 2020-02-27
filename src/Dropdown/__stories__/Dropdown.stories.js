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
            foo
        </Dropdown>
    ))
    .add('disable styles', () => (
        <Dropdown
            disableStyles>
            foo
        </Dropdown>
    ));
