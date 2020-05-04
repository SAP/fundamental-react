/* eslint-disable no-console */
/* eslint-disable react/no-multi-comp */
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
    <SearchInput compact
        placeholder='Placeholder'
        searchList={searchData} />
);

export const disabled = () => (
    <SearchInput disabled
        placeholder='Placeholder'
        searchList={searchData} />
);

export const validationStates = () => (
    <>
        <SearchInput
            placeholder='Error'
            searchList={searchData}
            validationState={{ state: 'error', text: 'Test validation state' }} />
        <SearchInput
            placeholder='Warning'
            searchList={searchData}
            validationState={{ state: 'warning', text: 'Test validation state' }} />
        <SearchInput
            placeholder='Success'
            searchList={searchData}
            validationState={{ state: 'success', text: 'Test validation state' }} />
        <SearchInput
            placeholder='Information'
            searchList={searchData}
            validationState={{ state: 'information', text: 'Test validation state' }} />
    </>
);

export const dev = () => (
    <SearchInput
        compact={boolean('compact', false)}
        placeholder={'Select a Fruit'}
        searchList={searchData}
        validationState={select('Validation State', {
            'none': '',
            'success': { state: 'success', text: 'placeholder text' },
            'error': { state: 'error', text: 'placeholder text' },
            'information': { state: 'information', text: 'placeholder text' },
            'warning': { state: 'warning', text: 'placeholder text' }
        })} />
);
dev.story = {
    parameters: { docs: { disable: true } }
};
