import Counter from '../Counter';
import React from 'react';
import { storiesOf } from '@storybook/react';
import {
    withKnobs
} from '@storybook/addon-knobs';

storiesOf('Components|Counter', module)
    .addDecorator(withKnobs)
    .add('Default', () => (
        <Counter>5</Counter>
    ))
    .add('disable styles', () => (
        <Counter disableStyles>5</Counter>
    ));
