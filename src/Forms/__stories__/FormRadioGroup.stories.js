import FormRadioGroup from '../FormRadioGroup';
import FormRadioItem from '../FormRadioItem';
import React from 'react';
import { storiesOf } from '@storybook/react';
import {
    withKnobs
} from '@storybook/addon-knobs';

storiesOf('Components|FormRadioGroup', module)
    .addDecorator(withKnobs)
    .add('Default', () => (
        <FormRadioGroup>
            <FormRadioItem>
            Option 1
            </FormRadioItem>
            <FormRadioItem>
            Option 2
            </FormRadioItem>
            <FormRadioItem>
            Option 3
            </FormRadioItem>
        </FormRadioGroup>
    ))
    .add('disable styles', () => (
        <FormRadioGroup disableStyles>
            <FormRadioItem>
            Option 1
            </FormRadioItem>
            <FormRadioItem>
            Option 2
            </FormRadioItem>
            <FormRadioItem>
             Option 3
            </FormRadioItem>
        </FormRadioGroup>
    ))
    .add('custom styles', () => (
        <FormRadioGroup customStyles={require('../../utils/WithStyles/customStylesTest.css')}>
            <FormRadioItem>
            Option 1
            </FormRadioItem>
            <FormRadioItem>
            Option 2
            </FormRadioItem>
            <FormRadioItem>
             Option 3
            </FormRadioItem>
        </FormRadioGroup>
    ));
