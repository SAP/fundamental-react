import { mount } from 'enzyme';
import React from 'react';
import renderer from 'react-test-renderer';
import { BrowserRouter, Link } from 'react-router-dom';
import { SideNav, SideNavGroup, SideNavItem, SideNavList, SideNavSubItems } from '../';

describe('<SideNavigation />', () => {
    const subSideNavList = (
        <SideNavList>
            <SideNavItem
                id='item_1'
                name='Link Item 1'
                url='#' />
            <SideNavItem
                id='item_2'
                name='Link Item 2'
                url='#'>
                <SideNavSubItems>
                    <SideNavItem
                        id='subitem_21'
                        name='Item 1'
                        url='#' />
                    <SideNavItem
                        id='subitem_22'
                        name='Item 2'
                        url='#' />
                    <SideNavItem
                        id='subitem_23'
                        name='Item 3'
                        url='#' />
                    <SideNavItem
                        id='subitem_24'
                        name='Item 4'
                        url='#' />
                    <SideNavItem
                        id='subitem_25'
                        name='Item 5'
                        url='#' />
                </SideNavSubItems>
            </SideNavItem>
            <SideNavItem
                id='item_3'
                name='Link Item 3'
                url='#' />
            <SideNavItem
                id='item_4'
                name='Link Item 4'
                url='#'>
                <SideNavSubItems>
                    <SideNavItem
                        id='subitem_41'
                        name='Item 1'
                        url='#' />
                    <SideNavItem
                        id='subitem_41'
                        name='Item 2'
                        url='#' />
                    <SideNavItem
                        id='subitem_41'
                        name='Item 3'
                        url='#' />
                    <SideNavItem
                        id='subitem_41'
                        name='Item 4'
                        url='#' />
                </SideNavSubItems>
            </SideNavItem>
            <SideNavItem
                id='item_5'
                name='Link Item'
                url='#' />
        </SideNavList>
    );

    const oneLevelSideNav = (
        <BrowserRouter>
            <SideNav>
                <SideNavList>
                    <SideNavItem
                        id='item_1'>
                        <Link to='/'>
                            Link Item
                        </Link>
                    </SideNavItem>
                    <SideNavItem
                        id='item_2'>
                        <Link to='/'>
                            Link Item
                        </Link>
                    </SideNavItem>
                    <SideNavItem
                        id='item_3'>
                        <Link to='/'>
                            Link Item
                        </Link>
                    </SideNavItem>
                    <SideNavItem
                        id='item_4'>
                        <Link to='/'>
                            Link Item
                        </Link>
                    </SideNavItem>
                    <SideNavItem
                        id='item_5'>
                        <Link to='/'>
                            Link Item
                        </Link>
                    </SideNavItem>
                </SideNavList>
            </SideNav>
        </BrowserRouter>
    );

    const sideNavWithTitle = (
        <BrowserRouter>
            <SideNav selectedId='item_2'>
                <SideNavGroup className='blue' title='Group Title'>
                    <SideNavList className='blue'>
                        <SideNavItem
                            id='item_1'>
                            <Link to='/'>
                                Link Item
                            </Link>
                        </SideNavItem>
                        <SideNavItem
                            id='item_2'>
                            <Link to='/'>
                                Link Item
                            </Link>
                        </SideNavItem>
                        <SideNavItem
                            id='item_3'>
                            <Link to='/'>
                                Link Item
                            </Link>
                        </SideNavItem>
                        <SideNavItem
                            id='item_4'>
                            <Link to='/'>
                                Link Item
                            </Link>
                        </SideNavItem>
                        <SideNavItem
                            id='item_5'>
                            <Link to='/'>
                                Link Item
                            </Link>
                        </SideNavItem>
                    </SideNavList>
                </SideNavGroup>
                <SideNavGroup title='Group Title'>
                    <SideNavList>
                        <SideNavItem
                            id='item_6'>
                            <Link to='/'>
                                Link Item
                            </Link>
                        </SideNavItem>
                        <SideNavItem
                            id='item_7'>
                            <Link to='/'>
                                Link Item
                            </Link>
                        </SideNavItem>
                        <SideNavItem
                            id='item_8'>
                            <Link to='/'>
                                Link Item
                            </Link>
                        </SideNavItem>
                        <SideNavItem
                            id='item_9'>
                            <Link to='/'>
                                Link Item
                            </Link>
                        </SideNavItem>
                        <SideNavItem
                            id='item_10'>
                            <Link to='/'>
                                Link Item
                            </Link>
                        </SideNavItem>
                    </SideNavList>
                </SideNavGroup>
            </SideNav>
        </BrowserRouter>
    );

    const sideNavMultiLevel = <SideNav>{subSideNavList}</SideNav>;

    const sideNavWithIcons = (
        <BrowserRouter>
            <SideNav selectedId='item-2'>
                <SideNavList>
                    <SideNavItem
                        glyph='home'
                        id='item-1'>
                        <Link to='/'>
                            Link Item
                        </Link>
                    </SideNavItem>
                    <SideNavItem
                        glyph='home'
                        id='item-2'>
                        <Link to='/'>
                            Link Item
                        </Link>
                    </SideNavItem>
                    <SideNavItem
                        glyph='home'
                        id='item-3'>
                        <Link to='/'>
                            Link Item
                        </Link>
                    </SideNavItem>
                    <SideNavItem
                        glyph='home'
                        id='item-4'
                        name='Link Item'
                        url='#' />
                    <SideNavItem
                        glyph='home'
                        id='item-5'
                        name='Link Item'
                        url='#' />
                </SideNavList>
            </SideNav>
        </BrowserRouter>
    );

    const sideNavCollapsed = (
        <SideNav icons>
            <SideNavList>
                <SideNavItem
                    glyph='home'
                    id='item-1'
                    url='#' />
                <SideNavItem
                    glyph='home'
                    id='item-2'
                    url='#' />
                <SideNavItem
                    glyph='home'
                    id='item-3'
                    url='#' />
                <SideNavItem
                    glyph='home'
                    id='item-4'
                    url='#' />
                <SideNavItem
                    glyph='home'
                    id='item-5'
                    url='#' />
            </SideNavList>
        </SideNav>
    );

    test('create side navigation', () => {
        // create one level side nav
        let component = renderer.create(oneLevelSideNav);
        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();

        // create side nav with title
        component = renderer.create(sideNavWithTitle);
        tree = component.toJSON();
        expect(tree).toMatchSnapshot();

        // create side nav multi level
        component = renderer.create(sideNavMultiLevel);
        tree = component.toJSON();
        expect(tree).toMatchSnapshot();

        // create side nav with icon
        component = renderer.create(sideNavWithIcons);
        tree = component.toJSON();
        expect(tree).toMatchSnapshot();

        // create side nav collapsed
        component = renderer.create(sideNavCollapsed);
        tree = component.toJSON();
        expect(tree).toMatchSnapshot();

        // create side nav list
        component = renderer.create(subSideNavList);
        tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });

    test('handle side nav list link click', () => {
        const wrapper = mount(sideNavMultiLevel);

        expect(wrapper.state('expandedIds')).toEqual([]);
        expect(wrapper.state('selectedId')).toBeFalsy();

        wrapper
            .find('.fd-side-nav__link')
            .at(1)
            .simulate('click');

        expect(wrapper.state('expandedIds')).toEqual(['item_2']);
        expect(wrapper.state('selectedId')).toEqual('item_2');

        wrapper
            .find('.fd-side-nav__link')
            .at(3)
            .simulate('click');

        expect(wrapper.state('expandedIds')).toEqual(['item_2', 'item_4']);
        expect(wrapper.state('selectedId')).toEqual('item_4');
    });

    test('handle side nav sub link click', () => {
        const wrapper = mount(sideNavMultiLevel);
        wrapper
            .find('.fd-side-nav__sublink')
            .at(0)
            .simulate('click');

        expect(wrapper.state('selectedId')).toEqual('subitem_21');

        wrapper
            .find('.fd-side-nav__sublink')
            .at(4)
            .simulate('click');

        expect(wrapper.state('selectedId')).toEqual('subitem_25');
    });

    describe('Prop spreading', () => {
        test('should allow props to be spread to the SideNav component', () => {
            const element = mount(<SideNav data-sample='Sample' />);

            expect(
                element.getDOMNode().attributes['data-sample'].value
            ).toBe('Sample');
        });

        test('should allow props to be spread to the SideNavList component', () => {
            const element = mount(<SideNavList data-sample='Sample'>
                <SideNavItem
                    id='item-1'
                    name='Link Item 1'
                    url='#' />
                <SideNavItem
                    id='item-2'
                    name='Link Item 2'
                    url='#' />
                <SideNavItem
                    id='item-3'
                    name='Link Item 3'
                    url='#' />
            </SideNavList>);

            expect(
                element.getDOMNode().attributes['data-sample'].value
            ).toBe('Sample');
        });

        test('should allow props to be spread to the SideNavGroup component', () => {
            const element = mount(<SideNavGroup data-sample='Sample' title='test' />);

            expect(
                element.getDOMNode().attributes['data-sample'].value
            ).toBe('Sample');
        });

        test('should allow props to be spread to the SideNavGroup component\'s h1 element', () => {
            const element = mount(<SideNavGroup title='test' titleProps={{'data-sample': 'Sample'}} />);

            expect(
                element.find('h1').getDOMNode().attributes['data-sample'].value
            ).toBe('Sample');
        });
    });
});
