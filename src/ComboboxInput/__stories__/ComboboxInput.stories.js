import ComboboxInput from '../ComboboxInput';
import List from '../../List/List';
import React from 'react';
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

const createProps = (overrides) => ({
    compact: boolean('compact', false),
    disabled: boolean('disabled', false),
    list: list,
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

storiesOf('Components|ComboboxInput', module)
    .addDecorator(withKnobs)
    .add('Dev', () => (
        <ComboboxInput {...createProps()} />
    ))
    .add('Disabled', () => (
        <ComboboxInput disabled
            list={list} placeholder='Placeholder' />
    ))
    .add('Compact', () => (
        <ComboboxInput compact
            list={list} placeholder='Placeholder' />
    ))
    .add('Validation State | Error', () => (
        <ComboboxInput
            list={list}
            placeholder='Default'
            validationState={{ state: 'error', text: 'Test validation state' }} />
    ))
    .add('Validation State | Warning', () => (
        <ComboboxInput
            list={list}
            placeholder='Default'
            validationState={{ state: 'warning', text: 'Test validation state' }} />
    ))
    .add('Validation State | Information', () => (
        <ComboboxInput
            list={list}
            placeholder='Default'
            validationState={{ state: 'information', text: 'Test validation state' }} />
    ))
    .add('Validation State | Success', () => (
        <ComboboxInput
            list={list}
            placeholder='Default'
            validationState={{ state: 'success', text: 'Test validation state' }} />
    ))
    .add('disable styles', () => (
        <ComboboxInput
            {...createProps()}
            disableStyles />
    ));
