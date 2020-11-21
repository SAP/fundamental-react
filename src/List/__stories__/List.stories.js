/* eslint-disable react/no-multi-comp */
import { action } from '@storybook/addon-actions';
import List from '../List';
import ListIcon from '../_ListIcon';
import ListItem from '../_ListItem';
import ListSelection from '../_ListSelection';
import ListText from '../_ListText';
import React from 'react';
import {
    boolean,
    text
} from '@storybook/addon-knobs';

export default {
    title: 'Component API/List',
    component: List,
    subcomponents: { ListItem, ListSelection, ListText, ListIcon }
};



export const simple = () => (
    <List>
        <List.Item>
            <List.Text>Apple</List.Text>
        </List.Item>
        <List.Item>
            <List.Text>Banana</List.Text>
        </List.Item>
        <List.Item>
            <List.Text>Durian</List.Text>
        </List.Item>
        <List.Item>
            <List.Text>Grape</List.Text>
        </List.Item>
    </List>
);

simple.storyName = 'Simple List';

export const headerFooter = () => (
    <List
        footer='Updated 3 minutes ago'
        header='Fruits'
        headerStyle={2}
        level={6}>
        <List.Item>
            <List.Text>Apple</List.Text>
        </List.Item>
        <List.Item>
            <List.Text>Banana</List.Text>
        </List.Item>
        <List.Item>
            <List.Text>Durian</List.Text>
        </List.Item>
        <List.Item>
            <List.Text>Grape</List.Text>
        </List.Item>
    </List>
);

headerFooter.storyName = 'with Header and Footer';

export const noBorder = () => (
    <List
        footer='Updated 3 minutes ago'
        header='Fruits'
        noBorder>
        <List.Item>
            <List.Text>Apple</List.Text>
        </List.Item>
        <List.Item>
            <List.Text>Banana</List.Text>
        </List.Item>
        <List.Item>
            <List.Text>Durian</List.Text>
        </List.Item>
        <List.Item>
            <List.Text>Grape</List.Text>
        </List.Item>
    </List>
);

noBorder.storyName = 'with no borders';

export const compact = () => (
    <List compact
        footer='Updated 3 minutes ago'
        header='Fruits'>
        <List.Item>
            <List.Text>Apple</List.Text>
        </List.Item>
        <List.Item>
            <List.Text>Banana</List.Text>
        </List.Item>
        <List.Item>
            <List.Text>Durian</List.Text>
        </List.Item>
        <List.Item>
            <List.Text>Grape</List.Text>
        </List.Item>
    </List>
);

export const iconsLeft = () => (
    <List
        header='Settings'>
        <List.Item>
            <List.Icon glyph='cart' />
            <List.Text>Checkout Cart</List.Text>
        </List.Item>
        <List.Item>
            <List.Icon glyph='wrench' />
            <List.Text>Profile Settings</List.Text>
        </List.Item>
        <List.Item>
            <List.Icon glyph='lightbulb' />
            <List.Text>Information</List.Text>
        </List.Item>
        <List.Item>
            <List.Icon glyph='history' />
            <List.Text>Order History</List.Text>
        </List.Item>
    </List>
);
export const iconsRight = () => (
    <List
        header='Settings' >
        <List.Item>
            <List.Text>Checkout Cart</List.Text>
            <List.Icon glyph='navigation-right-arrow' />
        </List.Item>
        <List.Item>
            <List.Text>Profile Settings</List.Text>
            <List.Icon glyph='navigation-right-arrow' />
        </List.Item>
        <List.Item>
            <List.Text>Information</List.Text>
            <List.Icon glyph='navigation-right-arrow' />
        </List.Item>
        <List.Item>
            <List.Text>Order History</List.Text>
            <List.Icon glyph='navigation-right-arrow' />
        </List.Item>
    </List>
);

export const secondaryText = () => (
    <List
        footer={
            <>
                <List.Text><b>Total</b></List.Text>
                <List.Text secondary>7</List.Text>
            </>
        }
        header='Order Receipt (4 items)' >
        <List.Item>
            <List.Text>Apple</List.Text>
            <List.Text secondary>Quantity: 2</List.Text>
        </List.Item>
        <List.Item>
            <List.Text>Banana</List.Text>
            <List.Text secondary>Quantity: 3</List.Text>
        </List.Item>
        <List.Item>
            <List.Text>Durian</List.Text>
            <List.Text secondary>Quantity: 1</List.Text>
        </List.Item>
        <List.Item>
            <List.Text>Grape</List.Text>
            <List.Text secondary>Quantity: 1</List.Text>
        </List.Item>
    </List>
);

export const byline = () => (
    <List
        footer='Updated 3 minutes ago'
        hasByline
        header='Order Summary (4 items)' >
        <List.Item>
            <List.Text>Apple</List.Text>
            <List.Byline>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt</List.Byline>
        </List.Item>
        <List.Item>
            <List.Text>Banana</List.Text>
            <List.Byline>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt</List.Byline>
        </List.Item>
        <List.Item>
            <List.Text>Durian</List.Text>
            <List.Byline>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt</List.Byline>
        </List.Item>
        <List.Item>
            <List.Text>Grape</List.Text>
            <List.Byline twoColumns>
                <List.Text left>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt</List.Text>
                <List.Text right> Out of stock</List.Text>
            </List.Byline>
        </List.Item>
    </List>
);

export const selection = () => {
    return (
        <>
            <List
                footer='Company ©'
                header='Checkout options'
                partialNavigation
                selectable>
                <List.Item selected>
                    <List.Selection checkBoxAriaLabel='Coupon Applied: FREE'>
                        <List.Text>Coupon Applied: FREE</List.Text>
                    </List.Selection>
                </List.Item>
                <List.Item>
                    <List.Selection
                        checkBoxAriaLabel='Add gift wrapping'>
                        <List.Text>Add gift wrapping</List.Text>
                    </List.Selection>
                </List.Item>
                <List.Item>
                    <List.Selection
                        checkBoxAriaLabel='Less packaging'>
                        <List.Text>Less packaging</List.Text>
                    </List.Selection>
                </List.Item>
            </List>
        </>
    );
};

export const partialNavigation = () => (
    <List
        footer='Updated 3 minutes ago'
        header='Cart (3 items)'
        partialNavigation>
        <List.Item url={'#'}>
            <List.Text>Add more items</List.Text>
        </List.Item>
        <List.Item>
            <List.Text>Apple</List.Text>
        </List.Item>
        <List.Item>
            <List.Text>Banana</List.Text>
        </List.Item>
        <List.Item>
            <List.Text>Durian</List.Text>
        </List.Item>
        <List.Item selected url={'#'}>
            <List.Text>Checkout</List.Text>
        </List.Item>
    </List>
);

export const navigationList = () => (
    <List footer='Company ©' header='Quick links'
        navigation>
        <List.Item url={'#'}>
            <List.Text>Checkout Cart</List.Text>
        </List.Item>
        <List.Item url={'#'}>
            <List.Text>Profile Settings</List.Text>
        </List.Item>
        <List.Item url={'#'}>
            <List.Text>Information</List.Text>
        </List.Item>
        <List.Item selected url={'#'}>
            <List.Text>Order History</List.Text>
        </List.Item>
    </List>
);

export const actionList = () => (
    <List
        footer='Company ©'
        header='Cart (4 items)' >
        <List.Item>
            <List.Text>Apple</List.Text>
            <List.Text secondary>Quantity: 2</List.Text>
        </List.Item>
        <List.Item>
            <List.Text>Banana</List.Text>
            <List.Text secondary>Quantity: 3</List.Text>
        </List.Item>
        <List.Item>
            <List.Text>Durian</List.Text>
            <List.Text secondary>Quantity: 1</List.Text>
        </List.Item>
        <List.Item>
            <List.Text>Grape</List.Text>
            <List.Text secondary>Quantity: 1</List.Text>
        </List.Item>
        <List.Item action>
            Empty cart
        </List.Item>
        <List.Item action>
            Apply Coupon
        </List.Item>
        <List.Item action>
            Checkout
        </List.Item>
    </List>
);



export const dev = () => (
    <>
        <List
            compact={boolean('compact', false)}
            footer='List Footer'
            header={'Developer\'s List'}
            noBorder={boolean('noBorder', false)}>
            <List.Item selected={boolean('selected', false)}>
                <List.Icon glyph={text('icon', 'accept')} />
                <List.Text
                    noWrap={boolean('noWrap', false)}
                    secondary={boolean('secondary', false)}>{text('text', 'List Item 1')}</List.Text>
            </List.Item>
        </List>
        <List
            footer='Company ©'
            header='Selectable Checkout options'
            partialNavigation
            selectable>
            <List.Item>
                <List.Selection
                    checkBoxAriaLabel='Coupon Applied: FREE'
                    onChange={action('option-1-change')}>
                    <List.Text>Coupon Applied: FREE</List.Text>
                </List.Selection>
            </List.Item>
            <List.Item>
                <List.Selection
                    checkBoxAriaLabel='Add gift wrapping'
                    onChange={action('option-2-change')}>
                    <List.Text>Add gift wrapping</List.Text>
                </List.Selection>
            </List.Item>
            <List.Item>
                <List.Selection
                    checkBoxAriaLabel='Less packaging'
                    onChange={action('option-3-change')}>
                    <List.Text>Less packaging</List.Text>
                </List.Selection>
            </List.Item>
        </List>
    </>
);

dev.parameters = { docs: { disable: true } };

export const noStyles = () => (
    <List cssNamespace='xxx'>
        <List.Item>
            <List.Text>Apple</List.Text>
        </List.Item>
        <List.Item>
            <List.Text>Banana</List.Text>
        </List.Item>
        <List.Item>
            <List.Text>Durian</List.Text>
        </List.Item>
        <List.Item>
            <List.Text>Grape</List.Text>
        </List.Item>
    </List>
);
noStyles.parameters = { docs: { disable: true } };
