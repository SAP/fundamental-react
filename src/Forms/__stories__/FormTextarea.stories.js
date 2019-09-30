import FormTextarea from '../FormTextarea';
import React from 'react';
import { storiesOf } from '@storybook/react';
import {
    withKnobs
} from '@storybook/addon-knobs';

storiesOf('Components|FormTextarea', module)
    .addDecorator(withKnobs)
    .add('Default', () => (
        <FormTextarea>Default</FormTextarea>
    ))
    .add('disable styles', () => (
        <FormTextarea disableStyles>Default</FormTextarea>
    ))
    .add('custom styles', () => (
        <FormTextarea
            customStyles={require('../../utils/WithStyles/customStylesTest.css')}>
            Default
        </FormTextarea>
    ));
