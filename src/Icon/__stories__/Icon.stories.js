import Icon from '../Icon';
import React from 'react';
import { storiesOf } from '@storybook/react';
import {
    withKnobs
} from '@storybook/addon-knobs';

storiesOf('Components|Icon', module)
    .addDecorator(withKnobs)
    .add('Default', () => (
        <Icon glyph='cart' />
    ))
    .add('disable styles', () => (
        <Icon disableStyles glyph='cart' />
    ));
