import React from 'react';
import { Description, DocsText, DocsTile, Header, Import, Properties, Separator } from '../_playground';
import { Link, MemoryRouter } from 'react-router-dom';
import { SideNav, SideNavList, SideNavListItem, SideNavSubList } from '../';

export const SideNavigationComponent = () => {
    const sideNavOneLevelCode = `<SideNav
    selectedId='item-2'>
    <SideNavList>
        <SideNavListItem
            id='item-1'
            name='Link Item'
            url='#' />
        <SideNavListItem
            id='item-2'
            name='Link Item'
            url='#' />
        <SideNavListItem
            id='item-3'
            name='Link Item'
            url='#' />
        <SideNavListItem
            id='item-4'
            name='Link Item'
            url='#' />
        <SideNavListItem
            id='item-5'
            name='Link Item'
            url='#' />
    </SideNavList>
</SideNav>`;

    const sideNavWithTitlesCode = `<SideNav
    selectedId='item_2'>
    <SideNavList title='Group Title'>
        <SideNavListItem
            id='item_1'
            name='Link Item'
            url='#' />
        <SideNavListItem
            id='item_2'>
            <Link to='/'>
                Link Item
            </Link>
        </SideNavListItem>
        <SideNavListItem
            id='item_3'>
            <Link to='/'>
                Link Item
            </Link>
        </SideNavListItem>
        <SideNavListItem
            id='item_4'>
            <Link to='/'>
                Link Item
            </Link>
        </SideNavListItem>
        <SideNavListItem
            id='item_5'>
            <Link to='/'>
                Link Item
            </Link>
        </SideNavListItem>
    </SideNavList>
    <SideNavList title='Group Title'>
        <SideNavListItem
            id='item_6'>
            <Link to='/'>
                Link Item
            </Link>
        </SideNavListItem>
        <SideNavListItem
            id='item_7'>
            <Link to='/'>
                Link Item
            </Link>
        </SideNavListItem>
        <SideNavListItem
            id='item_8'>
            <Link to='/'>
                Link Item
            </Link>
        </SideNavListItem>
        <SideNavListItem
            id='item_9'>
            <Link to='/'>
                Link Item
            </Link>
        </SideNavListItem>
        <SideNavListItem
            id='item_10'>
            <Link to='/'>
                Link Item
            </Link>
        </SideNavListItem>
    </SideNavList>
</SideNav>`;

    const sideNavMultiLevelCode = `<SideNav
    selectedId='item-2'>
    <SideNavList>
        <SideNavListItem
            id='item-1'
            name='Link Item 1'
            url='#' />
        <SideNavListItem
            id='item-2'
            name='Link Item 2'
            url='#'>
            <SideNavSubList>
                <SideNavListItem
                    id='subitem_21'
                    name='Item 1'
                    url='#' />
                <SideNavListItem
                    id='subitem_22'
                    name='Item 2'
                    url='#' />
                <SideNavListItem
                    id='subitem_23'
                    name='Item 3'
                    url='#' />
                <SideNavListItem
                    id='subitem_24'
                    name='Item 4'
                    url='#' />
            </SideNavSubList>
        </SideNavListItem>
        <SideNavListItem
            id='item_3'
            name='Link Item 3'
            url='#' />
        <SideNavListItem
            id='item_4'
            name='Link Item 4'
            url='#'>
            <SideNavSubList>
                <SideNavListItem
                    id='subitem_41'
                    name='Item 1'
                    url='#' />
                <SideNavListItem
                    id='subitem_42'
                    name='Item 2'
                    url='#' />
                <SideNavListItem
                    id='subitem_43'
                    name='Item 3'
                    url='#' />
                <SideNavListItem
                    id='subitem_44'
                    name='Item 4'
                    url='#' />
            </SideNavSubList>
        </SideNavListItem>
        <SideNavListItem
            id='item_5'
            name='Link Item 5'
            url='#' />
    </SideNavList>
</SideNav>`;

    const sideNavWithIconsCode = `<SideNav
    selectedId='item-2'>
    <SideNavList>
        <SideNavListItem
            glyph='home'
            id='item-1'>
            <Link to='/'>
                Link Item
            </Link>
        </SideNavListItem>
        <SideNavListItem
            glyph='home'
            id='item-2'>
            <Link to='/'>
                Link Item
            </Link>
        </SideNavListItem>
        <SideNavListItem
            glyph='home'
            id='item-3'>
            <Link to='/'>
                Link Item
            </Link>
        </SideNavListItem>
        <SideNavListItem
            glyph='home'
            id='item-4'
            name='Link Item'
            url='#' />
        <SideNavListItem
            glyph='home'
            id='item-5'
            name='Link Item'
            url='#' />
    </SideNavList>
</SideNav>`;

    const sideNavCollapsedCode = `<SideNav
    icons
    selectedId='item-2'>
    <SideNavList>
        <SideNavListItem
            glyph='home'
            id='item-1'
            url='#' />
        <SideNavListItem
            glyph='home'
            id='item-2'
            url='#' />
        <SideNavListItem
            glyph='home'
            id='item-3'
            url='#' />
        <SideNavListItem
            glyph='home'
            id='item-4'
            url='#' />
        <SideNavListItem
            glyph='home'
            id='item-5'
            url='#' />
    </SideNavList>
</SideNav>`;

    return (
        <div>
            <Header>Side Navigation</Header>
            <Description>
                The left navigation can always display or expand/collapse using the menu icon within the global
                navigation.
            </Description>
            <Import sourceModule={require('./SideNavigation')} />

            <Separator />

            <Properties sourceModule={require('./SideNavigation')} />

            <Separator />

            <h2>Side Navigation with one level</h2>
            <DocsTile>
                <SideNav
                    selectedId='item-2'>
                    <SideNavList>
                        <SideNavListItem
                            id='item-1'
                            name='Link Item'
                            url='#' />
                        <SideNavListItem
                            id='item-2'
                            name='Link Item'
                            url='#' />
                        <SideNavListItem
                            id='item-3'
                            name='Link Item'
                            url='#' />
                        <SideNavListItem
                            id='item-4'
                            name='Link Item'
                            url='#' />
                        <SideNavListItem
                            id='item-5'
                            name='Link Item'
                            url='#' />
                    </SideNavList>
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
                        <SideNavList title='Group Title'>
                            <SideNavListItem
                                id='item_1'
                                name='Link Item'
                                url='#' />
                            <SideNavListItem
                                id='item_2'>
                                <Link to='/'>
                                    Link Item
                                </Link>
                            </SideNavListItem>
                            <SideNavListItem
                                id='item_3'>
                                <Link to='/'>
                                    Link Item
                                </Link>
                            </SideNavListItem>
                            <SideNavListItem
                                id='item_4'>
                                <Link to='/'>
                                    Link Item
                                </Link>
                            </SideNavListItem>
                            <SideNavListItem
                                id='item_5'>
                                <Link to='/'>
                                    Link Item
                                </Link>
                            </SideNavListItem>
                        </SideNavList>
                        <SideNavList title='Group Title'>
                            <SideNavListItem
                                id='item_6'>
                                <Link to='/'>
                                    Link Item
                                </Link>
                            </SideNavListItem>
                            <SideNavListItem
                                id='item_7'>
                                <Link to='/'>
                                    Link Item
                                </Link>
                            </SideNavListItem>
                            <SideNavListItem
                                id='item_8'>
                                <Link to='/'>
                                    Link Item
                                </Link>
                            </SideNavListItem>
                            <SideNavListItem
                                id='item_9'>
                                <Link to='/'>
                                    Link Item
                                </Link>
                            </SideNavListItem>
                            <SideNavListItem
                                id='item_10'>
                                <Link to='/'>
                                    Link Item
                                </Link>
                            </SideNavListItem>
                        </SideNavList>
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
                    <SideNavList>
                        <SideNavListItem
                            id='item-1'
                            name='Link Item 1'
                            url='#' />
                        <SideNavListItem
                            id='item-2'
                            name='Link Item 2'
                            url='#'>
                            <SideNavSubList>
                                <SideNavListItem
                                    id='subitem_21'
                                    name='Item 1'
                                    url='#' />
                                <SideNavListItem
                                    id='subitem_22'
                                    name='Item 2'
                                    url='#' />
                                <SideNavListItem
                                    id='subitem_23'
                                    name='Item 3'
                                    url='#' />
                                <SideNavListItem
                                    id='subitem_24'
                                    name='Item 4'
                                    url='#' />
                            </SideNavSubList>
                        </SideNavListItem>
                        <SideNavListItem
                            id='item_3'
                            name='Link Item 3'
                            url='#' />
                        <SideNavListItem
                            id='item_4'
                            name='Link Item 4'
                            url='#'>
                            <SideNavSubList>
                                <SideNavListItem
                                    id='subitem_41'
                                    name='Item 1'
                                    url='#' />
                                <SideNavListItem
                                    id='subitem_42'
                                    name='Item 2'
                                    url='#' />
                                <SideNavListItem
                                    id='subitem_43'
                                    name='Item 3'
                                    url='#' />
                                <SideNavListItem
                                    id='subitem_44'
                                    name='Item 4'
                                    url='#' />
                            </SideNavSubList>
                        </SideNavListItem>
                        <SideNavListItem
                            id='item_5'
                            name='Link Item 5'
                            url='#' />
                    </SideNavList>
                </SideNav>
            </DocsTile>
            <DocsText>{sideNavMultiLevelCode}</DocsText>

            <Separator />

            <h2>Side navigation with icons</h2>
            <DocsTile>
                <SideNav
                    selectedId='item-2'>
                    <SideNavList>
                        <SideNavListItem
                            glyph='home'
                            id='item-1'>
                            <Link to='/'>
                                Link Item
                            </Link>
                        </SideNavListItem>
                        <SideNavListItem
                            glyph='home'
                            id='item-2'>
                            <Link to='/'>
                                Link Item
                            </Link>
                        </SideNavListItem>
                        <SideNavListItem
                            glyph='home'
                            id='item-3'>
                            <Link to='/'>
                                Link Item
                            </Link>
                        </SideNavListItem>
                        <SideNavListItem
                            glyph='home'
                            id='item-4'
                            name='Link Item'
                            url='#' />
                        <SideNavListItem
                            glyph='home'
                            id='item-5'
                            name='Link Item'
                            url='#' />
                    </SideNavList>
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
                    <SideNavList>
                        <SideNavListItem
                            glyph='home'
                            id='item-1'
                            url='#' />
                        <SideNavListItem
                            glyph='home'
                            id='item-2'
                            url='#' />
                        <SideNavListItem
                            glyph='home'
                            id='item-3'
                            url='#' />
                        <SideNavListItem
                            glyph='home'
                            id='item-4'
                            url='#' />
                        <SideNavListItem
                            glyph='home'
                            id='item-5'
                            url='#' />
                    </SideNavList>
                </SideNav>
            </DocsTile>
            <DocsText>{sideNavCollapsedCode}</DocsText>
        </div>
    );
};
