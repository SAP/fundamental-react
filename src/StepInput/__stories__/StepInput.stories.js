import React from 'react';
import StepInput from '../StepInput';
import { storiesOf } from '@storybook/react';
import {
    boolean,
    select,
    text,
    withKnobs
} from '@storybook/addon-knobs';


const createProps = (overrides) => ({
    compact: boolean('compact', false),
    disabled: boolean('disabled', false),
    disableStyles: boolean('disableStyles', false),
    validationState: select('Validation State', {
        'none': '',
        'success': { state: 'success', text: 'placeholder text' },
        'error': { state: 'error', text: 'placeholder text' },
        'information': { state: 'information', text: 'placeholder text' },
        'warning': { state: 'warning', text: 'placeholder text' }
    }),
    placeholder: text('Placeholder', 'Placeholder'),
    ...overrides
});

storiesOf('Components|StepInput', module)
    .addDecorator(withKnobs)
    .add('Dev', () => (
        <StepInput {...createProps()} />
    ))
    .add('Compact', () => (
        <StepInput compact />
    ))
    .add('Disabled', () => (
        <StepInput disabled />
    ))
    .add('Disable Styles', () => (
        <StepInput disableStyles />
    ));
