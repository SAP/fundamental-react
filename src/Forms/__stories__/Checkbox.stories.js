import Checkbox from '../Checkbox';
import React from 'react';
import { storiesOf } from '@storybook/react';
import {
    withKnobs
} from '@storybook/addon-knobs';

storiesOf('Components|Checkbox', module)
    .addDecorator(withKnobs)
    .add('Default', () => (
        <Checkbox />
    ))
    .add('indeterminate', () => (
        <Checkbox indeterminate />
    ))
    .add('disable styles', () => (
        <Checkbox disableStyles />
    ))
    .add('custom styles', () => (
        <Checkbox customStyles={require('../../utils/WithStyles/customStylesTest.css')} />
    ));
