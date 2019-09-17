import path from 'path';
import React from 'react';
import { SideNav } from '../';
import { ComponentPage, Example } from '../_playground';
import { Link, MemoryRouter } from 'react-router-dom';

export const SideNavigationComponent = () => {
    return (
        <ComponentPage
            description={`The left navigation can always display or expand/collapse using the menu icon within the global
                navigation.`}
            sourceModulePath={path.join(__dirname, './SideNavigation')}
            title='Side Navigation'>

            <Example
                title='Side Navigation with one level'>
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
            </Example>

            <Example
                description='Use this to group navigation. Titles are not clickable.'
                title='Side navigation with titles'>
                <MemoryRouter>
                    <SideNav
                        selectedId='item_2'>
                        <SideNav.List title='Group Title'>
                            <SideNav.ListItem
                                id='item_1'
                                name='Link Item'
                                url='#' />
                            <SideNav.ListItem
                                id='item_2'>
                                <Link to='/'>
                                    Link Item
                                </Link>
                            </SideNav.ListItem>
                            <SideNav.ListItem
                                id='item_3'>
                                <Link to='/'>
                                    Link Item
                                </Link>
                            </SideNav.ListItem>
                            <SideNav.ListItem
                                id='item_4'>
                                <Link to='/'>
                                    Link Item
                                </Link>
                            </SideNav.ListItem>
                            <SideNav.ListItem
                                id='item_5'>
                                <Link to='/'>
                                    Link Item
                                </Link>
                            </SideNav.ListItem>
                        </SideNav.List>
                        <SideNav.List title='Group Title'>
                            <SideNav.ListItem
                                id='item_6'>
                                <Link to='/'>
                                    Link Item
                                </Link>
                            </SideNav.ListItem>
                            <SideNav.ListItem
                                id='item_7'>
                                <Link to='/'>
                                    Link Item
                                </Link>
                            </SideNav.ListItem>
                            <SideNav.ListItem
                                id='item_8'>
                                <Link to='/'>
                                    Link Item
                                </Link>
                            </SideNav.ListItem>
                            <SideNav.ListItem
                                id='item_9'>
                                <Link to='/'>
                                    Link Item
                                </Link>
                            </SideNav.ListItem>
                            <SideNav.ListItem
                                id='item_10'>
                                <Link to='/'>
                                    Link Item
                                </Link>
                            </SideNav.ListItem>
                        </SideNav.List>
                    </SideNav>
                </MemoryRouter>
            </Example>

            <Example
                description={`Use this when there is more than one level of hierarchy in the left navigation. Each level can be
                    expanded and collapsed.`}
                title='Side navigation with multiple levels'>
                <SideNav
                    selectedId='item-2'>
                    <SideNav.List>
                        <SideNav.ListItem
                            id='item-1'
                            name='Link Item 1'
                            url='#' />
                        <SideNav.ListItem
                            id='item-2'
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
                            name='Link Item 5'
                            url='#' />
                    </SideNav.List>
                </SideNav>
            </Example>

            <Example
                title='Side navigation with icons'>
                <SideNav
                    selectedId='item-2'>
                    <SideNav.List>
                        <SideNav.ListItem
                            glyph='home'
                            id='item-1'>
                            <Link to='/'>
                                Link Item
                            </Link>
                        </SideNav.ListItem>
                        <SideNav.ListItem
                            glyph='home'
                            id='item-2'>
                            <Link to='/'>
                                Link Item
                            </Link>
                        </SideNav.ListItem>
                        <SideNav.ListItem
                            glyph='home'
                            id='item-3'>
                            <Link to='/'>
                                Link Item
                            </Link>
                        </SideNav.ListItem>
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
            </Example>

            <Example
                description={`The user can identify which level they are on based on the icon displayed as selected when the
                    navigation is collapsed. Note that the suggested use is when there is only one level of navigation as
                    the user can only see one level of navigation when collapsed.`}
                title='Side navigation collapsed with icon'>
                <div style={{ 'maxWidth': '65px' }}>
                    <SideNav
                        icons
                        selectedId='item-2'>
                        <SideNav.List>
                            <SideNav.ListItem
                                glyph='home'
                                id='item-1'
                                url='#' />
                            <SideNav.ListItem
                                glyph='home'
                                id='item-2'
                                url='#' />
                            <SideNav.ListItem
                                glyph='home'
                                id='item-3'
                                url='#' />
                            <SideNav.ListItem
                                glyph='home'
                                id='item-4'
                                url='#' />
                            <SideNav.ListItem
                                glyph='home'
                                id='item-5'
                                url='#' />
                        </SideNav.List>
                    </SideNav>
                </div>
            </Example>

        </ComponentPage>
    );
};
