import List from '../List';
import React from 'react';
import { storiesOf } from '@storybook/react';
import {
    boolean,
    text,
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
                <List.Icon glyph={text('icon', 'accept')} />
                <List.Text
                    noWrap={boolean('noWrap', false)}
                    secondary={boolean('secondary', false)}>{text('text', 'List Item 1')}</List.Text>
            </List.Item>
            <List.Footer>List Footer</List.Footer>
        </List>
    ))
    .add('List (simple)', () => (
        <List>
            <List.Item>
                <List.Text>List Item 1</List.Text>
            </List.Item>
            <List.Item selected>
                <List.Text>List Item 2</List.Text>
            </List.Item>
            <List.Item>
                <List.Text>List Item 3</List.Text>
            </List.Item>
            <List.Item>
                <List.Text>List Item 4</List.Text>
            </List.Item>
        </List>
    ))
    .add('with Header and Footer', () => (
        <List>
            <List.Header>List Header</List.Header>
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
            <List.Footer>List Footer</List.Footer>
        </List>
    ))
    .add('Borderless', () => (
        <List noBorder>
            <List.Header>List Header</List.Header>
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
            <List.Footer>List Footer</List.Footer>
        </List>
    ))
    .add('Compact', () => (
        <List compact>
            <List.Header>List Header</List.Header>
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
            <List.Footer>List Footer</List.Footer>
        </List>
    ))
    .add('with left icons', () => (
        <List>
            <List.Header>List Header</List.Header>
            <List.Item>
                <List.Icon glyph='cart' />
                <List.Text>List Item 1</List.Text>
            </List.Item>
            <List.Item>
                <List.Icon glyph='wrench' />
                <List.Text>List Item 2</List.Text>
            </List.Item>
            <List.Item>
                <List.Icon glyph='lightbulb' />
                <List.Text>List Item 3</List.Text>
            </List.Item>
            <List.Item>
                <List.Icon glyph='history' />
                <List.Text>List Item 4</List.Text>
            </List.Item>
            <List.Footer>List Footer</List.Footer>
        </List>
    ))
    .add('with right icons', () => (
        <List>
            <List.Header>List Header</List.Header>
            <List.Item>
                <List.Text>List Item 1</List.Text>
                <List.Icon glyph='navigation-right-arrow' />
            </List.Item>
            <List.Item>
                <List.Text>List Item 2</List.Text>
                <List.Icon glyph='navigation-right-arrow' />
            </List.Item>
            <List.Item>
                <List.Text>List Item 3</List.Text>
                <List.Icon glyph='navigation-right-arrow' />
            </List.Item>
            <List.Item>
                <List.Text>List Item 4</List.Text>
                <List.Icon glyph='navigation-right-arrow' />
            </List.Item>
            <List.Footer>List Footer</List.Footer>
        </List>
    ))
    .add('Secondary Titles', () => (
        <List>
            <List.Header>List Header</List.Header>
            <List.Item>
                <List.Text>List Item 1</List.Text>
                <List.Text secondary>Positive</List.Text>
            </List.Item>
            <List.Item>
                <List.Text>List Item 2</List.Text>
                <List.Text secondary>Negative</List.Text>
            </List.Item>
            <List.Item>
                <List.Text>List Item 3</List.Text>
                <List.Text secondary>Positive</List.Text>
            </List.Item>
            <List.Item>
                <List.Text>List Item 4</List.Text>
                <List.Text secondary>Negative</List.Text>
            </List.Item>
            <List.Footer>List Footer</List.Footer>
        </List>
    ));
