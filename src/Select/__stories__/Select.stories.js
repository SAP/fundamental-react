import List from '../../List/List';
import React from 'react';
import Select from '../Select';
import { storiesOf } from '@storybook/react';
import {
    boolean,
    text,
    withKnobs
} from '@storybook/addon-knobs';

storiesOf('Components|Select', module)
    .addDecorator(withKnobs)
    .add('Dev', () => (
        <Select
            compact={boolean('compact', false)}
            placeholder={text('placeholder', 'select')}>
            <List>
                <List.Item>
                    <List.Title>List Item 1</List.Title>
                </List.Item>
                <List.Item>
                    <List.Title>List Item 2</List.Title>
                </List.Item>
                <List.Item>
                    <List.Title>List Item 3</List.Title>
                </List.Item>
                <List.Item>
                    <List.Title>List Item 4</List.Title>
                </List.Item>
            </List>
        </Select>
    ))
    .add('Compact', () => (
        <Select compact>
            <List>
                <List.Item>
                    <List.Title>List Item 1</List.Title>
                </List.Item>
                <List.Item>
                    <List.Title>List Item 2</List.Title>
                </List.Item>
                <List.Item>
                    <List.Title>List Item 3</List.Title>
                </List.Item>
                <List.Item>
                    <List.Title>List Item 4</List.Title>
                </List.Item>
            </List>
        </Select>
    ))
    .add('disable styles', () => (
        <Select
            disableStyles>
            foo
        </Select>
    ));
