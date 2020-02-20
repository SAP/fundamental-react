import React from 'react';
import SearchInput from '../SearchInput';
import { storiesOf } from '@storybook/react';
import {
    boolean,
    select,
    withKnobs
} from '@storybook/addon-knobs';

const searchData = [
    { text: 'apple', callback: () => alert('apple') },
    { text: 'apricot', callback: () => alert('apricot') },
    { text: 'banana', callback: () => alert('banana') },
    { text: 'blueberry', callback: () => alert('blueberry') },
    { text: 'blackberry', callback: () => alert('blackberry') },
    { text: 'calabash', callback: () => alert('calabash') },
    { text: 'clementines', callback: () => alert('clementines') },
    { text: 'kiwi', callback: () => alert('kiwi') },
    { text: 'orange', callback: () => alert('orange') }
];

const createProps = (overrides) => ({
    compact: boolean('compact', false),
    searchList: searchData,
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


storiesOf('Components|SearchInput', module)
    .addDecorator(withKnobs)
    .add('Default', () => (
        <SearchInput {...createProps()} />
    ))
    .add('disable styles', () => (
        <SearchInput
            disableStyles
            {...createProps()} />
    ));
