import FormSelect from '../FormSelect';
import React from 'react';
import { storiesOf } from '@storybook/react';
import {
    withKnobs
} from '@storybook/addon-knobs';

storiesOf('Components|FormSelect', module)
    .addDecorator(withKnobs)
    .add('Default', () => (
        <FormSelect>
            <option>Duis malesuada odio volutpat elementum</option>
            <option>Suspendisse ante ligula</option>
            <option>Sed bibendum sapien at posuere interdum</option>
        </FormSelect>
    ))
    .add('disable styles', () => (
        <FormSelect disableStyles>
            <option>Duis malesuada odio volutpat elementum</option>
            <option>Suspendisse ante ligula</option>
            <option>Sed bibendum sapien at posuere interdum</option>
        </FormSelect>
    ))
    .add('custom styles', () => (
        <FormSelect
            customStyles={require('../../utils/WithStyles/customStylesTest.css')}>
            <option>Duis malesuada odio volutpat elementum</option>
            <option>Suspendisse ante ligula</option>
            <option>Sed bibendum sapien at posuere interdum</option>
        </FormSelect>
    ));
