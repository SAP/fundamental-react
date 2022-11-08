/* eslint-disable react/no-multi-comp */
import Icon from '../../Icon/Icon';
import React from 'react';
import SideNav from '../SideNav';
import SideNavList from '../_SideNavList';
import SideNavListItem from '../_SideNavListItem';

export default {
    title: 'Component API/SideNav',
    component: SideNav,
    subcomponents: { SideNavList, SideNavListItem }
};

const skipLink = {
    href: '#content',
    label: 'Skip navigation'
};

export const primary = () => (
    <SideNav
        selectedId='item-2'
        skipLink={skipLink}>
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
                name={<>External Link Item <Icon glyph='action' /></>}
                onClick={() => alert('Redirection')}
                title='External Link Item'
                url='#' />
        </SideNav.List>
    </SideNav>
);

export const compact = () => (
    <SideNav
        compact
        selectedId='item-2'
        skipLink={skipLink}>
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

/**
 * The user can identify which level they are on based on the icon displayed as selected when the
 * navigation is condensed. Note that the suggested use is when there is only one level of navigation as
 * the user can only see one level of navigation when collapsed.
 */

export const condensed = () => (
    <SideNav
        condensed
        selectedId='item-2'
        skipLink={skipLink}>
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

export const oneLevel = () => (
    <SideNav
        selectedId='item-2'
        skipLink={skipLink}>
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
        <SideNav.List groupLabel='Utility Menu' isUtility>
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

/** Use titles to group navigation. Titles are not clickable. */

export const withTitle = () => (
    <SideNav
        selectedId='item-2'
        skipLink={skipLink}>
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
        <SideNav.List title='Group Title With A Pretty Long Name'>
            <SideNav.ListItem
                id='utility-1'
                name='Link Item'
                url='#' />
            <SideNav.ListItem
                id='utility-2'
                name='Link Item With A Pretty Long Name'
                url='#' />
        </SideNav.List>
    </SideNav>
);

export const withSubList = () => (
    <SideNav
        skipLink={skipLink}>
        <SideNav.List>
            <SideNav.ListItem
                id='item_1'
                name='Link Item 1'
                url='#' />
            <SideNav.ListItem
                expandSubmenuLabel='Expand submenu'
                id='item_2'
                name='Link Item 2'
                url='#'>
                <SideNav.List level={2}>
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
                expandSubmenuLabel='Expand submenu'
                id='item_4'
                name='Link Item 4'
                url='#'>
                <SideNav.List level={2}>
                    <SideNav.ListItem
                        id='subitem_41'
                        name='Item 1'
                        url='#' />
                    <SideNav.ListItem
                        id='subitem_42'
                        name='Item 2'
                        url='#' />
                    <SideNav.ListItem
                        id='subitem_43'
                        name='Item 3'
                        url='#' />
                    <SideNav.ListItem
                        id='subitem_44'
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
        selectedId='item-2'
        skipLink={skipLink}>
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

export const noStyles = () => (
    <SideNav
        cssNamespace='xxx'
        selectedId='item-2'
        skipLink={skipLink}>
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
noStyles.parameters = { docs: { disable: true } };
