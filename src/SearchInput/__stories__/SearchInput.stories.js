import React from 'react';
import SearchInput from '../SearchInput';
import { storiesOf } from '@storybook/react';
import {
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

storiesOf('Components|SearchInput', module)
    .addDecorator(withKnobs)
    .add('Default', () => (
        <SearchInput
            placeholder='Enter a fruit'
            searchList={searchData} />
    ))
    .add('disable styles', () => (
        <SearchInput
            disableStyles
            placeholder='Enter a fruit'
            searchList={searchData} />
    ))
    .add('custom styles', () => (
        <SearchInput
            customStyles={require('../../utils/WithStyles/customStylesTest.css')}
            placeholder='Enter a fruit'
            searchList={searchData} />
    ));
