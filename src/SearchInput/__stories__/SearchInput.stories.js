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
    validationState: select('Validation State', {
        'none': '',
        'success': { state: 'success', text: 'placeholder text' },
        'error': { state: 'error', text: 'placeholder text' },
        'information': { state: 'information', text: 'placeholder text' },
        'warning': { state: 'warning', text: 'placeholder text' }
    }),
    placeholder: 'Select a Fruit',
    ...overrides
});


storiesOf('Components|SearchInput', module)
    .addDecorator(withKnobs)
    .add('Default', () => (
        <SearchInput {...createProps()} />
    ))
    .add('Compact', () => (
        <SearchInput compact
            placeholder='Placeholder'
            searchList={searchData} />
    ))
    .add('Disabled', () => (
        <SearchInput disabled
            placeholder='Placeholder'
            searchList={searchData} />
    ))
    .add('Validation State | Error', () => (
        <SearchInput
            placeholder='Default'
            searchList={searchData}
            validationState={{ state: 'error', text: 'Test validation state' }} />
    ))
    .add('Validation State | Warning', () => (
        <SearchInput
            placeholder='Default'
            searchList={searchData}
            validationState={{ state: 'warning', text: 'Test validation state' }} />
    ))
    .add('Validation State | Information', () => (
        <SearchInput
            placeholder='Default'
            searchList={searchData}
            validationState={{ state: 'information', text: 'Test validation state' }} />
    ))
    .add('Validation State | Success', () => (
        <SearchInput
            placeholder='Default'
            searchList={searchData}
            validationState={{ state: 'success', text: 'Test validation state' }} />
    ))
    .add('disable styles', () => (
        <SearchInput
            disableStyles
            {...createProps()} />
    ));
