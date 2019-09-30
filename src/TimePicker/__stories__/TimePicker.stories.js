import React from 'react';
import { storiesOf } from '@storybook/react';
import TimePicker from '../TimePicker';
import {
    withKnobs
} from '@storybook/addon-knobs';

storiesOf('Components|TimePicker', module)
    .addDecorator(withKnobs)
    .add('Default', () => (
        <TimePicker />
    ))
    .add('disable styles', () => (
        <TimePicker disableStyles />
    ))
    .add('custom styles', () => (
        <TimePicker customStyles={require('../../utils/WithStyles/customStylesTest.css')} />
    ));
