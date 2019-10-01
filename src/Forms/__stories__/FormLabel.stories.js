import FormLabel from '../FormLabel';
import React from 'react';
import { storiesOf } from '@storybook/react';
import {
    withKnobs
} from '@storybook/addon-knobs';

storiesOf('Components|FormLabel', module)
    .addDecorator(withKnobs)
    .add('Default', () => (
        <FormLabel>Default</FormLabel>
    ))
    .add('disable styles', () => (
        <FormLabel disableStyles>Default</FormLabel>
    ))
    .add('custom styles', () => (
        <FormLabel
            customStyles={require('../../utils/WithStyles/customStylesTest.css')}>
            Default
        </FormLabel>
    ));
