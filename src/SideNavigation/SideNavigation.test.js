import { mount } from 'enzyme';
import React from 'react';
import renderer from 'react-test-renderer';
import { SideNav } from './SideNavigation';
import { BrowserRouter, Link } from 'react-router-dom';

describe('<SideNavigation />', () => {
    const subSideNavList = (
        <SideNav.List>
            <SideNav.Item
                id='item_1'
                name='Link Item 1'
                url='#' />
            <SideNav.Item
                id='item_2'
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
                    <SideNav.Item
                        id='subitem_25'
                        name='Item 5'
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
                        id='subitem_41'
                        name='Item 2'
                        url='#' />
                    <SideNav.Item
                        id='subitem_41'
                        name='Item 3'
                        url='#' />
                    <SideNav.Item
                        id='subitem_41'
                        name='Item 4'
                        url='#' />
                </SideNav.SubItems>
            </SideNav.Item>
            <SideNav.Item
                id='item_5'
                name='Link Item'
                url='#' />
        </SideNav.List>
    );

    const oneLevelSideNav = (
        <BrowserRouter>
            <SideNav>
                <SideNav.List>
                    <SideNav.Item
                        id='item_1'>
                        <Link to='/'>
                            Link Item
                        </Link>
                    </SideNav.Item>
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
            </SideNav>
        </BrowserRouter>
    );

    const sideNavWithTitle = (
        <BrowserRouter>
            <SideNav selectedId='item_2'>
                <SideNav.Group className='blue' title='Group Title'>
                    <SideNav.List className='blue'>
                        <SideNav.Item
                            id='item_1'>
                            <Link to='/'>
                                Link Item
                            </Link>
                        </SideNav.Item>
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
        </BrowserRouter>
    );

    const sideNavMultiLevel = <SideNav>{subSideNavList}</SideNav>;

    const sideNavWithIcons = (
        <BrowserRouter>
            <SideNav selectedId='item-2'>
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
        </BrowserRouter>
    );

    const sideNavCollapsed = (
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
            const element = mount(<SideNav.List data-sample='Sample'>
                <SideNav.Item
                    id='item-1'
                    name='Link Item 1'
                    url='#' />
                <SideNav.Item
                    id='item-2'
                    name='Link Item 2'
                    url='#' />
                <SideNav.Item
                    id='item-3'
                    name='Link Item 3'
                    url='#' />
            </SideNav.List>);

            expect(
                element.getDOMNode().attributes['data-sample'].value
            ).toBe('Sample');
        });

        test('should allow props to be spread to the SideNavGroup component', () => {
            const element = mount(<SideNav.Group data-sample='Sample' title='test' />);

            expect(
                element.getDOMNode().attributes['data-sample'].value
            ).toBe('Sample');
        });

        test('should allow props to be spread to the SideNavGroup component\'s h1 element', () => {
            const element = mount(<SideNav.Group title='test' titleProps={{'data-sample': 'Sample'}} />);

            expect(
                element.find('h1').getDOMNode().attributes['data-sample'].value
            ).toBe('Sample');
        });
    });
});
