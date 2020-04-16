import FormTextarea from '../FormTextarea';
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
    readOnly: boolean('readOnly', false),
    state: select('Validation State', {
        'default': null,
        'valid': 'valid',
        'invalid': 'invalid',
        'information': 'information',
        'warning': 'warning'
    }),
    ...overrides
});

storiesOf('Components|FormTextarea', module)
    .addDecorator(withKnobs)
    .add('Default', () => (
        <FormTextarea {...createProps()}>Default</FormTextarea>
    ))
    .add('disable styles', () => (
        <FormTextarea {...createProps()} disableStyles>Default</FormTextarea>
    ))
    .add('Max length', () => (
        <FormTextarea {...createProps({ defaultValue: 'Max Length', maxLength: 150 })} />
    ));
