import FormRadioItem from '../FormRadioItem';
import React from 'react';
import { storiesOf } from '@storybook/react';
import {
    boolean,
    select,
    withKnobs
} from '@storybook/addon-knobs';

const createProps = (overrides) => ({
    compact: boolean('compact', false),
    disabled: boolean('disabled', false),
    state: select('State', {
        'none': '',
        'success': 'success',
        'error': 'error',
        'information': 'information',
        'warning': 'warning'
    }),
    ...overrides
});


storiesOf('Components|FormRadioItem', module)
    .addDecorator(withKnobs)
    .add('Default', () => (
        <FormRadioItem {...createProps()}>Text Option</FormRadioItem>
    ))
    .add('disabled', () => (
        <FormRadioItem disabled>Text Option</FormRadioItem>
    ))
    .add('compact', () => (
        <FormRadioItem compact>Text Option</FormRadioItem>
    ))
    .add('State | Error', () => (
        <FormRadioItem state='error'>Text Option</FormRadioItem>
    ))
    .add('State | Warning', () => (
        <FormRadioItem state='warning'>Text Option</FormRadioItem>
    ))
    .add('State | Information', () => (
        <FormRadioItem state='information'>Text Option</FormRadioItem>
    ))
    .add('State | Success', () => (
        <FormRadioItem state='success'>Text Option</FormRadioItem>
    ))
    .add('disable styles', () => (
        <FormRadioItem {...createProps()} disableStyles>Text Option</FormRadioItem>
    ));
