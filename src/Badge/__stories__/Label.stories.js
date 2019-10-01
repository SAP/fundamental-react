import Label from '../Label';
import React from 'react';
import { storiesOf } from '@storybook/react';
import {
    withKnobs
} from '@storybook/addon-knobs';

storiesOf('Components|Label', module)
    .addDecorator(withKnobs)
    .add('Default', () => (
        <Label>Default</Label>
    ))
    .add('disable styles', () => (
        <Label disableStyles>Default</Label>
    ))
    .add('custom styles', () => (
        <Label
            customStyles={require('../../utils/WithStyles/customStylesTest.css')}>
            Default
        </Label>
    ));
