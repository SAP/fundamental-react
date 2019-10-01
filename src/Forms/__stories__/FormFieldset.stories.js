import FormFieldset from '../FormFieldset';
import React from 'react';
import { storiesOf } from '@storybook/react';
import {
    withKnobs
} from '@storybook/addon-knobs';

storiesOf('Components|FormFieldset', module)
    .addDecorator(withKnobs)
    .add('Default', () => (
        <FormFieldset>Default</FormFieldset>
    ))
    .add('disable styles', () => (
        <FormFieldset disableStyles>Default</FormFieldset>
    ))
    .add('custom styles', () => (
        <FormFieldset
            customStyles={require('../../utils/WithStyles/customStylesTest.css')}>
            Default
        </FormFieldset>
    ));
