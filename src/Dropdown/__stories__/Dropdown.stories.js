import Dropdown from '../Dropdown';
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
