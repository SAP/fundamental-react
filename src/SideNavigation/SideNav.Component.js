import path from 'path';
import React from 'react';
import { SideNav } from '../';
import { Description, DocsText, DocsTile, Header, Import, Properties, Separator } from '../_playground';
import { Link, MemoryRouter } from 'react-router-dom';

export const SideNavigationComponent = () => {
    const sideNavOneLevelCode = `<SideNav
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
</SideNav>`;

    const sideNavWithTitlesCode = `<SideNav
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
</SideNav>`;

    const sideNavMultiLevelCode = `<SideNav
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
</SideNav>`;

    const sideNavWithIconsCode = `<SideNav
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
</SideNav>`;

    const sideNavCollapsedCode = `<SideNav
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
</SideNav>`;

    return (
        <div>
            <Header>Side Navigation</Header>
            <Description>
                The left navigation can always display or expand/collapse using the menu icon within the global
                navigation.
            </Description>
            <Import sourceModulePath={path.join(__dirname, './SideNavigation')} />

            <Separator />

            <Properties sourceModulePath={path.join(__dirname, './SideNavigation')} />

            <Separator />

            <h2>Side Navigation with one level</h2>
            <DocsTile>
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
            </DocsTile>
            <DocsText>{sideNavOneLevelCode}</DocsText>

            <Separator />

            <h2>Side navigation with titles</h2>
            <Description>Use this to group navigation. Titles are not clickable.</Description>
            <DocsTile>
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
            </DocsTile>
            <DocsText>{sideNavWithTitlesCode}</DocsText>

            <Separator />

            <h2>Side navigation with multiple levels</h2>
            <Description>
                Use this when there is more than one level of hierarchy in the left navigation. Each level can be
                expanded and collapsed.
            </Description>
            <DocsTile>
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
            </DocsTile>
            <DocsText>{sideNavMultiLevelCode}</DocsText>

            <Separator />

            <h2>Side navigation with icons</h2>
            <DocsTile>
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
            </DocsTile>
            <DocsText>{sideNavWithIconsCode}</DocsText>

            <Separator />

            <h2>Side navigation collapsed with icon.</h2>
            <Description>
                The user can identify which level they are on based on the icon displayed as selected when the
                navigation is collapsed. Note that the suggested use is when there is only one level of navigation as
                the user can only see one level of navigation when collapsed.
            </Description>
            <DocsTile>
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
            </DocsTile>
            <DocsText>{sideNavCollapsedCode}</DocsText>
        </div>
    );
};
