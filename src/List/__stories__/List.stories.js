import List from '../List';
import { listOfIcons } from '../../utils/listOfIcons';
import React from 'react';
import { storiesOf } from '@storybook/react';
import {
    boolean,
    select,
    withKnobs
} from '@storybook/addon-knobs';

storiesOf('Components|List', module)
    .addDecorator(withKnobs)
    .add('Dev', () => (
        <List
            compact={boolean('compact', false)}
            noBorder={boolean('noBorder', false)}>
            <List.Header>List Header</List.Header>
            <List.Item selected={boolean('selected', false)}>
                <List.Icon glyph={select('icon', listOfIcons)} />
                <List.Title>List Item 1</List.Title>
                <List.TitleSecondary>Positive</List.TitleSecondary>
                <List.Icon glyph={select('icon', listOfIcons)} />
            </List.Item>
            <List.Footer>List Footer</List.Footer>
        </List>
    ))
    .add('List (simple)', () => (
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
    ))
    .add('with Header and Footer', () => (
        <List>
            <List.Header>List Header</List.Header>
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
            <List.Footer>List Footer</List.Footer>
        </List>
    ))
    .add('Borderless', () => (
        <List noBorder>
            <List.Header>List Header</List.Header>
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
            <List.Footer>List Footer</List.Footer>
        </List>
    ))
    .add('Compact', () => (
        <List compact>
            <List.Header>List Header</List.Header>
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
            <List.Footer>List Footer</List.Footer>
        </List>
    ))
    .add('with left icons', () => (
        <List>
            <List.Header>List Header</List.Header>
            <List.Item>
                <List.Icon glyph='cart' />
                <List.Title>List Item 1</List.Title>
            </List.Item>
            <List.Item>
                <List.Icon glyph='wrench' />
                <List.Title>List Item 2</List.Title>
            </List.Item>
            <List.Item>
                <List.Icon glyph='lightbulb' />
                <List.Title>List Item 3</List.Title>
            </List.Item>
            <List.Item>
                <List.Icon glyph='history' />
                <List.Title>List Item 4</List.Title>
            </List.Item>
            <List.Footer>List Footer</List.Footer>
        </List>
    ))
    .add('with right icons', () => (
        <List>
            <List.Header>List Header</List.Header>
            <List.Item>
                <List.Title>List Item 1</List.Title>
                <List.Icon glyph='navigation-right-arrow' />
            </List.Item>
            <List.Item>
                <List.Title>List Item 2</List.Title>
                <List.Icon glyph='navigation-right-arrow' />
            </List.Item>
            <List.Item>
                <List.Title>List Item 3</List.Title>
                <List.Icon glyph='navigation-right-arrow' />
            </List.Item>
            <List.Item>
                <List.Title>List Item 4</List.Title>
                <List.Icon glyph='navigation-right-arrow' />
            </List.Item>
            <List.Footer>List Footer</List.Footer>
        </List>
    ))
    .add('Secondary Titles', () => (
        <List>
            <List.Header>List Header</List.Header>
            <List.Item>
                <List.Title>List Item 1</List.Title>
                <List.TitleSecondary>Positive</List.TitleSecondary>
            </List.Item>
            <List.Item>
                <List.Title>List Item 2</List.Title>
                <List.TitleSecondary>Negative</List.TitleSecondary>
            </List.Item>
            <List.Item>
                <List.Title>List Item 3</List.Title>
                <List.TitleSecondary>Positive</List.TitleSecondary>
            </List.Item>
            <List.Item>
                <List.Title>List Item 4</List.Title>
                <List.TitleSecondary>Negative</List.TitleSecondary>
            </List.Item>
            <List.Footer>List Footer</List.Footer>
        </List>
    ));
