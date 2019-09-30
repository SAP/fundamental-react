import React from 'react';
import { storiesOf } from '@storybook/react';
import Toggle from '../Toggle';
import {
    withKnobs
} from '@storybook/addon-knobs';

storiesOf('Components|Toggle', module)
    .addDecorator(withKnobs)
    .add('Default', () => (
        <Toggle>Toggle</Toggle>
    ))
    .add('disable styles', () => (
        <Toggle disableStyles>Toggle</Toggle>
    ))
    .add('custom styles', () => (
        <Toggle customStyles={require('../../utils/WithStyles/customStylesTest.css')}>Toggle</Toggle>
    ));
