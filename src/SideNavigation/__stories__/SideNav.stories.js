/* eslint-disable react/no-multi-comp */
import React from 'react';
import SideNav from '../SideNav';
import SideNavList from '../_SideNavList';
import SideNavListItem from '../_SideNavListItem';

export default {
    title: 'Component API/SideNav',
    component: SideNav,
    subcomponents: { SideNavList, SideNavListItem }
};

export const primary = () => (
    <SideNav
        selectedId='item-2'>
        <SideNav.List>
            <SideNav.ListItem
                id='item-1'
                name='Link Item'
                url='#' />
            <SideNav.ListItem
                id='item-2'
                name='Link Item'
                url='#' />
            <SideNav.ListItem
                id='item-3'
                name='Link Item'
                url='#' />
            <SideNav.ListItem
                id='item-4'
                name='Link Item'
                url='#' />
            <SideNav.ListItem
                id='item-5'
                name='Link Item'
                url='#' />
        </SideNav.List>
    </SideNav>
);

export const compact = () => (
    <SideNav
        compact
        selectedId='item-2'>
        <SideNav.List>
            <SideNav.ListItem
                id='item-1'
                name='Link Item'
                url='#' />
            <SideNav.ListItem
                id='item-2'
                name='Link Item'
                url='#' />
            <SideNav.ListItem
                id='item-3'
                name='Link Item'
                url='#' />
            <SideNav.ListItem
                id='item-4'
                name='Link Item'
                url='#' />
            <SideNav.ListItem
                id='item-5'
                name='Link Item'
                url='#' />
        </SideNav.List>
    </SideNav>
);

export const condensed = () => (
    <SideNav
        condensed
        selectedId='item-2'>
        <SideNav.List>
            <SideNav.ListItem
                glyph='home'
                id='item-1'
                name='Link Item'
                url='#' />
            <SideNav.ListItem
                glyph='cart'
                id='item-2'
                name='Link Item'
                url='#' />
            <SideNav.ListItem
                glyph='accept'
                id='item-3'
                name='Link Item'
                url='#' />
            <SideNav.ListItem
                glyph='alert'
                id='item-4'
                name='Link Item'
                url='#' />
            <SideNav.ListItem
                glyph='bell'
                id='item-5'
                name='Link Item'
                url='#' />
        </SideNav.List>
    </SideNav>
);

condensed.story = {
    parameters: {
        docs: {
            storyDescription: `The user can identify which level they are on based on the icon displayed as selected when the
            navigation is condensed. Note that the suggested use is when there is only one level of navigation as
            the user can only see one level of navigation when collapsed.`
        }
    }
};


export const oneLevel = () => (
    <SideNav
        selectedId='item-2'>
        <SideNav.List>
            <SideNav.ListItem
                id='item-1'
                name='Link Item'
                url='#' />
            <SideNav.ListItem
                id='item-2'
                name='Link Item'
                url='#' />
            <SideNav.ListItem
                id='item-3'
                name='Link Item'
                url='#' />
            <SideNav.ListItem
                id='item-4'
                name='Link Item'
                url='#' />
            <SideNav.ListItem
                id='item-5'
                name='Link Item'
                url='#' />
        </SideNav.List>
        <SideNav.List isUtility>
            <SideNav.ListItem
                id='utility-1'
                name='Link Item'
                url='#' />
            <SideNav.ListItem
                id='utility-2'
                name='Link Item'
                url='#' />
        </SideNav.List>
    </SideNav>
);

export const withTitle = () => (
    <SideNav
        selectedId='item-2'>
        <SideNav.List title='Group Title'>
            <SideNav.ListItem
                id='item-1'
                name='Link Item'
                url='#' />
            <SideNav.ListItem
                id='item-2'
                name='Link Item'
                url='#' />
            <SideNav.ListItem
                id='item-3'
                name='Link Item'
                url='#' />
            <SideNav.ListItem
                id='item-4'
                name='Link Item'
                url='#' />
            <SideNav.ListItem
                id='item-5'
                name='Link Item'
                url='#' />
        </SideNav.List>
        <SideNav.List title='Group Title'>
            <SideNav.ListItem
                id='utility-1'
                name='Link Item'
                url='#' />
            <SideNav.ListItem
                id='utility-2'
                name='Link Item'
                url='#' />
        </SideNav.List>
    </SideNav>
);

withTitle.story = {
    parameters: {
        docs: {
            storyDescription: 'Use titles to group navigation. Titles are not clickable.'
        }
    }
};

export const withSubList = () => (
    <SideNav>
        <SideNav.List>
            <SideNav.ListItem
                id='item_1'
                name='Link Item 1'
                url='#' />
            <SideNav.ListItem
                id='item_2'
                name='Link Item 2'
                url='#'>
                <SideNav.List>
                    <SideNav.ListItem
                        id='subitem_21'
                        name='Item 1'
                        url='#' />
                    <SideNav.ListItem
                        id='subitem_22'
                        name='Item 2'
                        url='#' />
                    <SideNav.ListItem
                        id='subitem_23'
                        name='Item 3'
                        url='#' />
                    <SideNav.ListItem
                        id='subitem_24'
                        name='Item 4'
                        url='#' />
                    <SideNav.ListItem
                        id='subitem_25'
                        name='Item 5'
                        url='#' />
                </SideNav.List>
            </SideNav.ListItem>
            <SideNav.ListItem
                id='item_3'
                name='Link Item 3'
                url='#' />
            <SideNav.ListItem
                id='item_4'
                name='Link Item 4'
                url='#'>
                <SideNav.List>
                    <SideNav.ListItem
                        id='subitem_41'
                        name='Item 1'
                        url='#' />
                    <SideNav.ListItem
                        id='subitem_41'
                        name='Item 2'
                        url='#' />
                    <SideNav.ListItem
                        id='subitem_41'
                        name='Item 3'
                        url='#' />
                    <SideNav.ListItem
                        id='subitem_41'
                        name='Item 4'
                        url='#' />
                </SideNav.List>
            </SideNav.ListItem>
            <SideNav.ListItem
                id='item_5'
                name='Link Item'
                url='#' />
        </SideNav.List>
    </SideNav>
);

export const withIcons = () => (
    <SideNav
        selectedId='item-2'>
        <SideNav.List
            data-sample='Sample'>
            <SideNav.ListItem
                glyph='home'
                id='item-1'
                name='Link item'
                url='/' />
            <SideNav.ListItem
                glyph='home'
                id='item-2'
                name='Link item'
                url='/' />
            <SideNav.ListItem
                glyph='home'
                id='item-3'
                name='Link item'
                url='/' />
            <SideNav.ListItem
                glyph='home'
                id='item-4'
                name='Link Item'
                url='#' />
            <SideNav.ListItem
                glyph='home'
                id='item-5'
                name='Link Item'
                url='#' />
        </SideNav.List>
    </SideNav>
);
