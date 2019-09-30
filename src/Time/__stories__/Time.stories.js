import React from 'react';
import { storiesOf } from '@storybook/react';
import Time from '../Time';
import {
    withKnobs
} from '@storybook/addon-knobs';

storiesOf('Components|Time', module)
    .addDecorator(withKnobs)
    .add('Default', () => (
        <Time />
    ))
    .add('disable styles', () => (
        <Time disableStyles />
    ))
    .add('custom styles', () => (
        <Time customStyles={require('../../utils/WithStyles/customStylesTest.css')} />
    ));
