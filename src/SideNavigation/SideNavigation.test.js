import { mount } from 'enzyme';
import React from 'react';
import renderer from 'react-test-renderer';
import { BrowserRouter, Link } from 'react-router-dom';
import { SideNav, SideNavList, SideNavListItem } from '../';

describe('<SideNavigation />', () => {
    const subSideNavList = (
        <SideNavList>
            <SideNavListItem
                id='item_1'
                name='Link Item 1'
                url='#' />
            <SideNavListItem
                id='item_2'
                name='Link Item 2'
                url='#'>
                <SideNavList>
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
                    <SideNavListItem
                        id='subitem_25'
                        name='Item 5'
                        url='#' />
                </SideNavList>
            </SideNavListItem>
            <SideNavListItem
                id='item_3'
                name='Link Item 3'
                url='#' />
            <SideNavListItem
                id='item_4'
                name='Link Item 4'
                url='#'>
                <SideNavList>
                    <SideNavListItem
                        id='subitem_41'
                        name='Item 1'
                        url='#' />
                    <SideNavListItem
                        id='subitem_41'
                        name='Item 2'
                        url='#' />
                    <SideNavListItem
                        id='subitem_41'
                        name='Item 3'
                        url='#' />
                    <SideNavListItem
                        id='subitem_41'
                        name='Item 4'
                        url='#' />
                </SideNavList>
            </SideNavListItem>
            <SideNavListItem
                id='item_5'
                name='Link Item'
                url='#' />
        </SideNavList>
    );

    const oneLevelSideNav = (
        <BrowserRouter>
            <SideNav>
                <SideNavList>
                    <SideNavListItem
                        id='item_1'>
                        <Link to='/'>
                            Link Item
                        </Link>
                    </SideNavListItem>
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
            </SideNav>
        </BrowserRouter>
    );

    const sideNavWithTitle = (
        <BrowserRouter>
            <SideNav selectedId='item_2'>
                <SideNavList className='blue' title='Group Title'>
                    <SideNavListItem
                        id='item_1'>
                        <Link to='/'>
                            Link Item
                        </Link>
                    </SideNavListItem>
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
        </BrowserRouter>
    );

    const sideNavMultiLevel = <SideNav>{subSideNavList}</SideNav>;

    const sideNavWithIcons = (
        <BrowserRouter>
            <SideNav selectedId='item-2'>
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
        </BrowserRouter>
    );

    const sideNavCollapsed = (
        <SideNav icons>
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
        const Item2 = wrapper.find({'id': 'item_2'});
        const Item4 = wrapper.find({'id': 'item_4'});

        expect(Item2.state('expanded')).toBeFalsy();
        expect(Item4.state('expanded')).toBeFalsy();
        expect(wrapper.state('selectedId')).toBeFalsy();

        wrapper
            .find('.fd-side-nav__link')
            .at(1)
            .simulate('click');

        expect(Item2.state('expanded')).toBeTruthy();
        expect(Item4.state('expanded')).toBeFalsy();
        expect(wrapper.state('selectedId')).toEqual('item_2');

        wrapper
            .find('.fd-side-nav__link')
            .at(3)
            .simulate('click');

        expect(Item2.state('expanded')).toBeTruthy();
        expect(Item4.state('expanded')).toBeTruthy();
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
                <SideNavListItem
                    id='item-1'
                    name='Link Item 1'
                    url='#' />
                <SideNavListItem
                    id='item-2'
                    name='Link Item 2'
                    url='#' />
                <SideNavListItem
                    id='item-3'
                    name='Link Item 3'
                    url='#' />
            </SideNavList>);

            expect(
                element.getDOMNode().attributes['data-sample'].value
            ).toBe('Sample');
        });

        test('should allow props to be spread to the SideNavList\'s h1 element', () => {
            const element = mount(<SideNavList title='test' titleProps={{ 'data-sample': 'Sample' }} />);

            expect(
                element.find('h1').getDOMNode().attributes['data-sample'].value
            ).toBe('Sample');
        });
    });
});
