/* eslint-disable react/no-multi-comp */
import List from '../List';
import ListFooter from '../_ListFooter';
import ListHeader from '../_ListHeader';
import ListIcon from '../_ListIcon';
import ListItem from '../_ListItem';
import ListText from '../_ListText';
import {
    boolean,
    text
} from '@storybook/addon-knobs';
import React, { useState } from 'react';

export default {
    title: 'Component API/List',
    component: List,
    subcomponents: { ListFooter, ListHeader, ListIcon,
        ListItem, ListText }
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
        footer={<List.Footer>Updated 3 minutes ago</List.Footer>}
        header={<List.Header>Fruits</List.Header>}>
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
        footer={<List.Footer>Updated 3 minutes ago</List.Footer>}
        header={<List.Header>Fruits</List.Header>}
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
        footer={<List.Footer>Updated 3 minutes ago</List.Footer>}
        header={<List.Header>Fruits</List.Header>}>
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
        header={<List.Header>Settings</List.Header>}>
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
        header={<List.Header>Settings</List.Header>} >
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
            <List.Footer>
                <List.Text><b>Total</b></List.Text>
                <List.Text secondary>7</List.Text>
            </List.Footer>
        }
        header={<List.Header>Order Receipt (4 items)</List.Header>} >
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

export const dev = () => (
    <List
        compact={boolean('compact', false)}
        footer={<List.Footer>List Footer</List.Footer>}
        header={<List.Header>Developer's List</List.Header>}
        noBorder={boolean('noBorder', false)}>
        <List.Item selected={boolean('selected', false)}>
            <List.Icon glyph={text('icon', 'accept')} />
            <List.Text
                noWrap={boolean('noWrap', false)}
                secondary={boolean('secondary', false)}>{text('text', 'List Item 1')}</List.Text>
        </List.Item>
    </List>
);

export const byline = () => (
    <List
        footer={<List.Footer>Updated 3 minutes ago</List.Footer>}
        hasByline
        header={<List.Header>Order Summary (4 items)</List.Header>} >
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
    const [secondSelected, setSecondSelected] = useState(false);
    const [thirdSelected, setThirdSelected] = useState(false);
    return (
        <>
            <List
                footer={<List.Footer>Company ©</List.Footer>}
                header={<List.Header>Checkout options</List.Header>}
                partialNavigation
                selectable>
                <List.Item selected>
                    <List.Selection checkBoxAriaLabel='Coupon Applied: FREE'>
                        <List.Text>Coupon Applied: FREE</List.Text>
                    </List.Selection>
                </List.Item>
                <List.Item selected={secondSelected}>
                    <List.Selection
                        checkBoxAriaLabel='Add gift wrapping'
                        onChange={(event) => setSecondSelected(event?.target?.checked)}
                        selected>
                        <List.Text>Add gift wrapping</List.Text>
                    </List.Selection>
                </List.Item>
                <List.Item selected={thirdSelected}>
                    <List.Selection
                        checkBoxAriaLabel='Less packaging'
                        onChange={(event) => setThirdSelected(event?.target?.checked)}
                        selected>
                        <List.Text>Less packaging</List.Text>
                    </List.Selection>
                </List.Item>
            </List>
        </>
    );
};

export const partialNavigation = () => (
    <List
        footer={<List.Footer>Updated 3 minutes ago</List.Footer>}
        header={<List.Header>Cart (3 items)</List.Header>}
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
    <List footer={<List.Footer>Company © </List.Footer>} header={<List.Header>Quick links</List.Header>}
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
        footer={<List.Footer>Company ©</List.Footer>}
        header={<List.Header>Cart (4 items)</List.Header>} >
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

dev.parameters = { docs: { disable: true } };
