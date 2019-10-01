import FormMessage from '../FormMessage';
import React from 'react';
import { storiesOf } from '@storybook/react';
import {
    withKnobs
} from '@storybook/addon-knobs';

storiesOf('Components|FormMessage', module)
    .addDecorator(withKnobs)
    .add('Default', () => (
        <FormMessage>Default</FormMessage>
    ))
    .add('disable styles', () => (
        <FormMessage disableStyles>Default</FormMessage>
    ))
    .add('custom styles', () => (
        <FormMessage
            customStyles={require('../../utils/WithStyles/customStylesTest.css')}>
            Default
        </FormMessage>
    ));
