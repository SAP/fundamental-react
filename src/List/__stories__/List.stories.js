/* eslint-disable react/no-multi-comp */
import List from '../List';
import ListFooter from '../_ListFooter';
import ListHeader from '../_ListHeader';
import ListIcon from '../_ListIcon';
import ListItem from '../_ListItem';
import ListText from '../_ListText';
import React from 'react';
import {
    boolean,
    text
} from '@storybook/addon-knobs';

export default {
    title: 'Component API/List',
    component: List,
    subcomponents: { ListFooter, ListHeader, ListIcon,
        ListItem, ListText }
};



export const simple = () => (
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
);

simple.story = {
    name: 'Simple List'
};

export const headerFooter = () => (
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
);

headerFooter.story = {
    name: 'with Header and Footer'
};

export const noBorder = () => (
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
);

noBorder.story = {
    name: 'with no borders'
};

export const compact = () => (
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
);

export const iconsLeft = () => (
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
);
export const iconsRight = () => (
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
);

export const secondaryText = () => (
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
);

export const dev = () => (
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
);

export const byline = () => (
    <List hasByline>
        <List.Header>List Header</List.Header>
        <List.Item>
            <List.Text>List Item 1</List.Text>
            <List.Byline>Byline</List.Byline>
        </List.Item>
        <List.Item>
            <List.Text>List Item 2</List.Text>
            <List.Byline>Byline</List.Byline>
        </List.Item>
        <List.Item>
            <List.Text>List Item 3</List.Text>
            <List.Byline>Byline</List.Byline>
        </List.Item>
        <List.Item>
            <List.Text>List Item 4</List.Text>
            <List.Byline twoColumns>
                <List.Text left>Left byline</List.Text>
                <List.Text right>Right byline</List.Text>
            </List.Byline>
        </List.Item>
        <List.Footer>List Footer</List.Footer>
    </List>
);

export const selection = () => (
    <List>
        <List.Header>List Header</List.Header>
        <List.Item>
            <List.Selection>
                <List.Text>List Item 1</List.Text>
            </List.Selection>
        </List.Item>
        <List.Item>
            <List.Selection>
                <List.Text>List Item 2</List.Text>
            </List.Selection>
        </List.Item>
        <List.Item>
            <List.Selection>
                <List.Text>List Item 3</List.Text>
            </List.Selection>
        </List.Item>
        <List.Item>
            <List.Selection>
                <List.Text>List Item 4</List.Text>
            </List.Selection>
        </List.Item>
        <List.Footer>List Footer</List.Footer>
    </List>
);

export const partialNavigation = () => (
    <List partialNavigation>
        <List.Header>List Header</List.Header>
        <List.Item url={'#'}>
            <List.Text>List Item 1</List.Text>
        </List.Item>
        <List.Item>
            <List.Text>List Item 2</List.Text>
        </List.Item>
        <List.Item>
            <List.Text>List Item 3</List.Text>
        </List.Item>
        <List.Item selected url={'#'}>
            <List.Text>List Item 4</List.Text>
        </List.Item>
        <List.Footer>List Footer</List.Footer>
    </List>
);

export const navigationList = () => (
    <List navigation>
        <List.Header>List Header</List.Header>
        <List.Item url={'#'}>
            <List.Text>List Item 1</List.Text>
        </List.Item>
        <List.Item url={'#'}>
            <List.Text>List Item 2</List.Text>
        </List.Item>
        <List.Item url={'#'}>
            <List.Text>List Item 3</List.Text>
        </List.Item>
        <List.Item selected url={'#'}>
            <List.Text>List Item 4</List.Text>
        </List.Item>
        <List.Footer>List Footer</List.Footer>
    </List>
);

export const actionList = () => (
    <List>
        <List.Header>List Header</List.Header>
        <List.Item>
            <List.Text>List Item 1</List.Text>
        </List.Item>
        <List.Item action>
            List Item 2
        </List.Item>
        <List.Item action>
            List Item 3
        </List.Item>
        <List.Item action>
            List Item 4
        </List.Item>
        <List.Footer>List Footer</List.Footer>
    </List>
);

dev.story = {
    parameters: { docs: { disable: true } }
};
