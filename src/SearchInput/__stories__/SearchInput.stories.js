/* eslint-disable no-console */
/* eslint-disable react/no-multi-comp */
import { action } from '@storybook/addon-actions';
import React from 'react';
import SearchInput from '../SearchInput';
import {
    boolean,
    select
} from '@storybook/addon-knobs';

const searchData = [
    { text: 'apple', callback: () => console.log('apple') },
    { text: 'apricot', callback: () => console.log('apricot') },
    { text: 'banana', callback: () => console.log('banana') },
    { text: 'blueberry', callback: () => console.log('blueberry') },
    { text: 'blackberry', callback: () => console.log('blackberry') },
    { text: 'calabash', callback: () => console.log('calabash') },
    { text: 'clementines', callback: () => console.log('clementines') },
    { text: 'kiwi', callback: () => console.log('kiwi') },
    { text: 'orange', callback: () => console.log('orange') }
];

export default {
    title: 'Component API/SearchInput',
    component: SearchInput
};


export const compact = () => (
    <SearchInput
        compact
        inputProps={{
            'aria-label': 'Compact search input'
        }}
        placeholder='Placeholder'
        searchList={searchData} />
);

export const disabled = () => (
    <SearchInput
        disabled
        inputProps={{
            'aria-label': 'Disabled search input'
        }}
        placeholder='Placeholder'
        searchList={searchData} />
);

export const readOnly = () => (
    <SearchInput
        inputProps={{
            'aria-label': 'Readonly search input',
            value: 'apple'
        }}
        placeholder='Read Only'
        readOnly
        searchList={searchData} />
);



export const substringSearch = () => (
    <SearchInput
        placeholder='search substring'
        searchList={[
            { text: 'who is a supplier user?' },
            { text: 'who is a buyer user?' },
            { text: 'who is a worker user?' },
            { text: 'how to change the pin?' },
            { text: 'how to set the pin?' }
        ]}
        subStringSearch />
);

export const validationStates = () => (
    <>
        <SearchInput
            inputProps={{
                'aria-label': 'Search input with error'
            }}
            placeholder='Error'
            searchList={searchData}
            validationState={{ state: 'error', text: 'Test validation state' }} />
        <SearchInput
            inputProps={{
                'aria-label': 'Search input with warning'
            }}
            placeholder='Warning'
            searchList={searchData}
            validationState={{ state: 'warning', text: 'Test validation state' }} />
        <SearchInput
            inputProps={{
                'aria-label': 'Search input with success message'
            }}
            placeholder='Success'
            searchList={searchData}
            validationState={{ state: 'success', text: 'Test validation state' }} />
        <SearchInput
            inputProps={{
                'aria-label': 'Search input with information'
            }}
            placeholder='Information'
            searchList={searchData}
            validationState={{ state: 'information', text: 'Test validation state' }} />
    </>
);

export const dev = () => (
    <SearchInput
        compact={boolean('compact', false)}
        disabled={boolean('disabled', false)}
        inputProps={{
            'aria-label': 'Search input for dev testing'
        }}
        onChange={action('on-change')}
        onEnter={action('on-enter')}
        onSelect={action('on-select')}
        placeholder={'Select a Fruit'}
        readOnly={boolean('readOnly', false)}
        searchList={searchData}
        validationState={select('Validation State', {
            'none': '',
            'success': { state: 'success', text: 'placeholder text' },
            'error': { state: 'error', text: 'placeholder text' },
            'information': { state: 'information', text: 'placeholder text' },
            'warning': { state: 'warning', text: 'placeholder text' }
        })} />
);
dev.parameters = { docs: { disable: true } };

export const noStyles = () => (
    <SearchInput
        cssNamespace='xxx'
        inputProps={{
            'aria-label': 'Compact search input'
        }}
        placeholder='Placeholder'
        searchList={searchData} />
);
noStyles.parameters = { docs: { disable: true } };
