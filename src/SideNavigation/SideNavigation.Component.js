import React from 'react';
import { SideNav } from '../';
import { Description, DocsText, DocsTile, Header, Import, Properties, Separator } from '../_playground';
import { Link, MemoryRouter } from 'react-router-dom';

export const SideNavigationComponent = () => {
    const sideNavOneLevelCode = `<SideNav>
        <SideNav.Item
            id='item-1'
            url='#'>
            Link Item
        </SideNav.Item>
        <SideNav.Item
            id='item-2'
            url='#'>
            Link Item
        </SideNav.Item>
        <SideNav.Item
            id='item-3'
            url='#'>
            Link Item
        </SideNav.Item>
        <SideNav.Item
            id='item-4'
            url='#'>
            Link Item
        </SideNav.Item>
        <SideNav.Item
            id='item-5'
            url='#'>
            Link Item
        </SideNav.Item>
    </SideNav>`;

    const sideNavWithTitlesCode = `<SideNav>
        <SideNavGroup title="Group Title">
            <SideNavList items=
                {[
                    { id: 'item_1', link: '/', name: 'Link Item' },
                    { id: 'item_2', link: '/', name: 'Link Item' },
                    { id: 'item_3', link: '/', name: 'Link Item' },
                    { id: 'item_4', link: '/', name: 'Link Item' },
                    { id: 'item_5', link: '/', name: 'Link Item' }
                ]}>
            </SideNavList>
        </SideNavGroup>
        <SideNavGroup title="Group Title">
            <SideNavList items=
                {[
                    { id: 'item_6', link: '/', name: 'Link Item' },
                    { id: 'item_7', link: '/', name: 'Link Item' },
                    { id: 'item_8', link: '/', name: 'Link Item' },
                    { id: 'item_9', link: '/', name: 'Link Item' },
                    { id: 'item_10', link: '/', name: 'Link Item' }
                ]}>
            </SideNavList>
        </SideNavGroup>
    </SideNav>`;

    const sideNavMultiLevelCode = `<SideNav>
        <SideNavList items=
            {[
                { id: 'item-1', url: '#', name: 'Link Item 1' },
                {
                    id: 'item-2', url: '#', name: 'Link Item 2', hasChild: true, child: [
                        { id: 'subitem-21', url: '#', name: 'Item 1' },
                        { id: 'subitem-22', url: '#', name: 'Item 2' },
                        { id: 'subitem-23', url: '#', name: 'Item 3' },
                        { id: 'subitem-24', url: '#', name: 'Item 4' }]
                },
                { id: 'item-3', url: '#', name: 'Link Item 3' },
                {
                    id: 'item-4', url: '#', name: 'Link Item 4', hasChild: true, child: [
                        { id: 'subitem-41', url: '#', name: 'Item 1' },
                        { id: 'subitem-42', url: '#', name: 'Item 2' },
                        { id: 'subitem-43', url: '#', name: 'Item 3' },
                        { id: 'subitem-44', url: '#', name: 'Item 4' }]
                },
                { id: 'item-5', url: '#', name: 'Link Item' }
            ]}>
        </SideNavList>
    </SideNav>`;

    const sideNavWithIconsCode = `<SideNav>
        <SideNavList
            items={[
                { id: 'item_1', link: '/', name: 'Link Item', glyph: 'home' },
                { id: 'item_2', link: '/', name: 'Link Item', glyph: 'home' },
                { id: 'item_3', link: '/', name: 'Link Item', glyph: 'home' },
                { id: 'item_4', link: '/', name: 'Link Item', glyph: 'home' },
                { id: 'item_5', link: '/', name: 'Link Item', glyph: 'home' }
            ]}
        />
    </SideNav>`;

    const sideNavCollapsedCode = `<SideNav icons={true}>
        <SideNavList items=
            {[
                { id: 'item-1', url: '#', glyph: 'home' },
                { id: 'item-2', url: '#', glyph: 'home' },
                { id: 'item-3', url: '#', glyph: 'home' },
                { id: 'item-4', url: '#', glyph: 'home' },
                { id: 'item-5', url: '#', glyph: 'home' }
            ]}>
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
                <SideNav>
                    <SideNav.List>
                        <SideNav.Item
                            id='item-1'
                            name='Link Item'
                            url='#' />
                        <SideNav.Item
                            id='item-2'
                            name='Link Item'
                            url='#' />
                        <SideNav.Item
                            id='item-3'
                            name='Link Item'
                            url='#' />
                        <SideNav.Item
                            id='item-4'
                            name='Link Item'
                            url='#' />
                        <SideNav.Item
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
                    <SideNav>
                        <SideNav.Group title='Group Title'>
                            <SideNav.List>
                                <SideNav.Item
                                    id='item_1'
                                    name='Link Item'
                                    url='#' />
                                <SideNav.Item
                                    id='item_2'>
                                    <Link to='/'>
                                        Link Item
                                    </Link>
                                </SideNav.Item>
                                <SideNav.Item
                                    id='item_3'>
                                    <Link to='/'>
                                        Link Item
                                    </Link>
                                </SideNav.Item>
                                <SideNav.Item
                                    id='item_4'>
                                    <Link to='/'>
                                        Link Item
                                    </Link>
                                </SideNav.Item>
                                <SideNav.Item
                                    id='item_5'>
                                    <Link to='/'>
                                        Link Item
                                    </Link>
                                </SideNav.Item>
                            </SideNav.List>
                        </SideNav.Group>
                        <SideNav.Group title='Group Title'>
                            <SideNav.List>
                                <SideNav.Item
                                    id='item_6'>
                                    <Link to='/'>
                                        Link Item
                                    </Link>
                                </SideNav.Item>
                                <SideNav.Item
                                    id='item_7'>
                                    <Link to='/'>
                                        Link Item
                                    </Link>
                                </SideNav.Item>
                                <SideNav.Item
                                    id='item_8'>
                                    <Link to='/'>
                                        Link Item
                                    </Link>
                                </SideNav.Item>
                                <SideNav.Item
                                    id='item_9'>
                                    <Link to='/'>
                                        Link Item
                                    </Link>
                                </SideNav.Item>
                                <SideNav.Item
                                    id='item_10'>
                                    <Link to='/'>
                                        Link Item
                                    </Link>
                                </SideNav.Item>
                            </SideNav.List>
                        </SideNav.Group>
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
                <SideNav>
                    <SideNav.List>
                        <SideNav.Item
                            id='item-1'
                            name='Link Item 1'
                            url='#' />
                        <SideNav.Item
                            id='item-2'
                            name='Link Item 2'
                            url='#'>
                            <SideNav.SubItems>
                                <SideNav.Item
                                    id='subitem_21'
                                    name='Item 1'
                                    url='#' />
                                <SideNav.Item
                                    id='subitem_22'
                                    name='Item 2'
                                    url='#' />
                                <SideNav.Item
                                    id='subitem_23'
                                    name='Item 3'
                                    url='#' />
                                <SideNav.Item
                                    id='subitem_24'
                                    name='Item 4'
                                    url='#' />
                            </SideNav.SubItems>
                        </SideNav.Item>
                        <SideNav.Item
                            id='item_3'
                            name='Link Item 3'
                            url='#' />
                        <SideNav.Item
                            id='item_4'
                            name='Link Item 4'
                            url='#'>
                            <SideNav.SubItems>
                                <SideNav.Item
                                    id='subitem_41'
                                    name='Item 1'
                                    url='#' />
                                <SideNav.Item
                                    id='subitem_42'
                                    name='Item 2'
                                    url='#' />
                                <SideNav.Item
                                    id='subitem_43'
                                    name='Item 3'
                                    url='#' />
                                <SideNav.Item
                                    id='subitem_44'
                                    name='Item 4'
                                    url='#' />
                            </SideNav.SubItems>
                        </SideNav.Item>
                        <SideNav.Item
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
                <SideNav>
                    <SideNav.List>
                        <SideNav.Item
                            glyph='home'
                            id='item-1'>
                            <Link to='/'>
                                Link Item
                            </Link>
                        </SideNav.Item>
                        <SideNav.Item
                            glyph='home'
                            id='item-2'>
                            <Link to='/'>
                                Link Item
                            </Link>
                        </SideNav.Item>
                        <SideNav.Item
                            glyph='home'
                            id='item-3'>
                            <Link to='/'>
                                Link Item
                            </Link>
                        </SideNav.Item>
                        <SideNav.Item
                            glyph='home'
                            id='item-4'
                            name='Link Item'
                            url='#' />
                        <SideNav.Item
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
                <SideNav icons>
                    <SideNav.List>
                        <SideNav.Item
                            glyph='home'
                            id='item-1'
                            url='#' />
                        <SideNav.Item
                            glyph='home'
                            id='item-2'
                            url='#' />
                        <SideNav.Item
                            glyph='home'
                            id='item-3'
                            url='#' />
                        <SideNav.Item
                            glyph='home'
                            id='item-4'
                            url='#' />
                        <SideNav.Item
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
