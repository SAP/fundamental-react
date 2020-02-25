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
    .add('Dev', () => (
        <FormInput
            compact={boolean('Compact?', false)}
            disabled={boolean('Disabled?', false)}
            placeholder={text('Placeholder', 'Placeholder')}
            readOnly={boolean('Read only?', false)}
            validationState={select('Validation State', {
                'none': '',
                'success': { state: 'success', text: 'placeholder text' },
                'error': { state: 'error', text: 'placeholder text' },
                'information': { state: 'information', text: 'placeholder text' },
                'warning': { state: 'warning', text: 'placeholder text' }
            })} />
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
    .add('Validation State | Default', () => (
        <FormInput placeholder='Default' validationState={{ state: 'default', text: 'Test validation state' }} />
    ))
    .add('Validation State | Error', () => (
        <FormInput placeholder='Default' validationState={{ state: 'error', text: 'Test validation state' }} />
    ))
    .add('Validation State | Warning', () => (
        <FormInput placeholder='Default' validationState={{ state: 'warning', text: 'Test validation state' }} />
    ))
    .add('Validation State | Information', () => (
        <FormInput placeholder='Default' validationState={{ state: 'information', text: 'Test validation state' }} />
    ))
    .add('Validation State | Success', () => (
        <FormInput placeholder='Default' validationState={{ state: 'success', text: 'Test validation state' }} />
    ))
    .add('disable styles', () => (
        <FormInput disableStyles />
    ));
