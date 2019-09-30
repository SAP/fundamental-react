import Calendar from '../Calendar';
import React from 'react';
import { storiesOf } from '@storybook/react';
import {
    withKnobs
} from '@storybook/addon-knobs';

storiesOf('Components|Calendar', module)
    .addDecorator(withKnobs)
    .add('Default', () => (
        <Calendar />
    ))
    .add('disable styles', () => (
        <Calendar disableStyles />
    ))
    .add('custom styles', () => (
        <Calendar
            customStyles={require('../../utils/WithStyles/customStylesTest.css')} />
    ));
