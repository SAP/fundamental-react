import DatePicker from '../DatePicker';
import React from 'react';
import { storiesOf } from '@storybook/react';
import {
    withKnobs
} from '@storybook/addon-knobs';

storiesOf('Components|DatePicker', module)
    .addDecorator(withKnobs)
    .add('Default', () => (
        <DatePicker />
    ))
    .add('disable styles', () => (
        <DatePicker
            disableStyles />
    ))
    .add('custom styles', () => (
        <DatePicker
            customStyles={require('../../utils/WithStyles/customStylesTest.css')} />
    ));
