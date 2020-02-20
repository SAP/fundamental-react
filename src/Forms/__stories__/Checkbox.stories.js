import Checkbox from '../Checkbox';
import React from 'react';
import { storiesOf } from '@storybook/react';
import {
    boolean,
    select,
    withKnobs
} from '@storybook/addon-knobs';

const createProps = (overrides) => ({
    disabled: boolean('disabled', false),
    indeterminate: boolean('indeterminate', false),
    state: select('Validation State', {
        'default': null,
        'valid': 'valid',
        'invalid': 'invalid',
        'information': 'information',
        'warning': 'warning'
    }),
    ...overrides
});


storiesOf('Components|Checkbox', module)
    .addDecorator(withKnobs)
    .add('Default', () => (
        <Checkbox {...createProps()}>Text Option</Checkbox>
    ))
    .add('indeterminate', () => (
        <Checkbox {...createProps()} indeterminate>Text Option</Checkbox>
    ))
    .add('disable styles', () => (
        <Checkbox {...createProps()} disableStyles>Text Option</Checkbox>
    ));
