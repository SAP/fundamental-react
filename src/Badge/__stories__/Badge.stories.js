import Badge from '../Badge';
import React from 'react';
import { storiesOf } from '@storybook/react';
import {
    withKnobs
} from '@storybook/addon-knobs';

storiesOf('Components|Badge', module)
    .addDecorator(withKnobs)
    .add('Default', () => (
        <Badge>Default</Badge>
    ))
    .add('disable styles', () => (
        <Badge disableStyles>Default</Badge>
    ));
