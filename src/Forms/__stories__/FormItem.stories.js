import FormItem from '../FormItem';
import React from 'react';
import { storiesOf } from '@storybook/react';
import {
    withKnobs
} from '@storybook/addon-knobs';

storiesOf('Components|FormItem', module)
    .addDecorator(withKnobs)
    .add('Default', () => (
        <FormItem>Default</FormItem>
    ))
    .add('disable styles', () => (
        <FormItem disableStyles>Default</FormItem>
    ))
    .add('custom styles', () => (
        <FormItem
            customStyles={require('../../utils/WithStyles/customStylesTest.css')}>
            Default
        </FormItem>
    ));
