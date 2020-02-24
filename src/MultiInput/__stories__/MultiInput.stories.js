import MultiInput from '../MultiInput';
import React from 'react';
import { storiesOf } from '@storybook/react';
import {
    boolean,
    select,
    withKnobs
} from '@storybook/addon-knobs';

const data = [
    'Apple',
    'Apricot',
    'Acai',
    'African Moringa',
    'Bearberry',
    'Bilberry',
    'Blood orange',
    'Barbadine',
    'Barbados cherry',
    'Balsam Apple',
    'Chokeberry',
    'Cranberry',
    'Cupuacu'
];

const createProps = (overrides) => ({
    compact: boolean('compact', false),
    data: data,
    state: select('Validation State', {
        'default': null,
        'valid': 'valid',
        'invalid': 'invalid',
        'information': 'information',
        'warning': 'warning'
    }),
    placeholder: 'Select a Fruit',
    ...overrides
});

storiesOf('Components|MultiInput', module)
    .addDecorator(withKnobs)
    .add('Default', () => (
        <MultiInput {...createProps()} />
    ))
    .add('disable styles', () => (
        <MultiInput {...createProps()} disableStyles />
    ));
