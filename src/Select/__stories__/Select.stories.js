import List from '../../List/List';
import React from 'react';
import Select from '../Select';
import { storiesOf } from '@storybook/react';
import {
    boolean,
    select,
    text,
    withKnobs
} from '@storybook/addon-knobs';

const list = (
    <List>
        <List.Item>
            <List.Text>List Item 1</List.Text>
        </List.Item>
        <List.Item>
            <List.Text>List Item 2</List.Text>
        </List.Item>
        <List.Item>
            <List.Text>List Item 3</List.Text>
        </List.Item>
        <List.Item>
            <List.Text>List Item 4</List.Text>
        </List.Item>
    </List>
);

storiesOf('Components|Select', module)
    .addDecorator(withKnobs)
    .add('Dev', () => (
        <Select
            compact={boolean('compact', false)}
            disabled={boolean('disabled', false)}
            placeholder={text('placeholder', 'select')}
            validationState={select('Validation State', {
                'none': '',
                'success': { state: 'success', text: 'placeholder text' },
                'error': { state: 'error', text: 'placeholder text' },
                'information': { state: 'information', text: 'placeholder text' },
                'warning': { state: 'warning', text: 'placeholder text' }
            })}>
            {list}
        </Select>
    ))
    .add('Compact', () => (
        <Select compact placeholder='Select'>
            {list}
        </Select>
    ))
    .add('Disabled', () => (
        <Select disabled placeholder='Select'>
            {list}
        </Select>
    ))
    .add('Validation State | Error', () => (
        <Select placeholder='Default' validationState={{ state: 'error', text: 'Test validation state' }}>
            {list}
        </Select>
    ))
    .add('Validation State | Warning', () => (
        <Select placeholder='Default' validationState={{ state: 'warning', text: 'Test validation state' }}>
            {list}
        </Select>
    ))
    .add('Validation State | Information', () => (
        <Select placeholder='Default' validationState={{ state: 'information', text: 'Test validation state' }}>
            {list}
        </Select>
    ))
    .add('Validation State | Success', () => (
        <Select placeholder='Default' validationState={{ state: 'success', text: 'Test validation state' }}>
            {list}
        </Select>
    ))
    .add('disable styles', () => (
        <Select
            disableStyles>
            {list}
        </Select>
    ));
