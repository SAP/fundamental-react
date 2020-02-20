import FormInput from '../FormInput';
import React from 'react';
import { storiesOf } from '@storybook/react';
import {
    boolean,
    select,
    text,
    withKnobs
} from '@storybook/addon-knobs';

storiesOf('Components|FormInput', module)
    .addDecorator(withKnobs)
    .add('Default', () => (
        <FormInput placeholder='Default' />
    ))
    .add('Compact', () => (
        <FormInput compact placeholder='Default' />
    ))
    .add('Disabled', () => (
        <FormInput disabled placeholder='Default' />
    ))
    .add('ReadOnly', () => (
        <FormInput placeholder='Default' readOnly />
    ))
    .add('State | Valid', () => (
        <FormInput placeholder='Default' state='valid' />
    ))
    .add('State | Invalid', () => (
        <FormInput placeholder='Default' state='invalid' />
    ))
    .add('State | Information', () => (
        <FormInput placeholder='Default' state='information' />
    ))
    .add('State | Warning', () => (
        <FormInput placeholder='Default' state='warning' />
    ))
    .add('Props', () => (
        <FormInput
            compact={boolean('Compact?', false)}
            disabled={boolean('Disabled?', false)}
            placeholder={text('Placeholder', 'Placeholder')}
            readOnly={boolean('Read only?', false)}
            state={select('Validation State', {
                'default': null,
                'valid': 'valid',
                'invalid': 'invalid',
                'information': 'information',
                'warning': 'warning'
            })} />
    ))
    .add('disable styles', () => (
        <FormInput disableStyles />
    ));
