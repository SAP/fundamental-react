import { mount } from 'enzyme';
import React from 'react';
import renderer from 'react-test-renderer';
import { SideNav } from '../';
import { BrowserRouter, Link } from 'react-router-dom';

describe('<SideNav />', () => {
    const subSideNavList = (
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
    );

    const oneLevelSideNav = (
        <BrowserRouter>
            <SideNav>
                <SideNav.List>
                    <SideNav.ListItem
                        id='item_1'>
                        <Link to='/'>
                            Link Item
                        </Link>
                    </SideNav.ListItem>
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
            </SideNav>
        </BrowserRouter>
    );

    const sideNavWithTitle = (
        <BrowserRouter>
            <SideNav selectedId='item_2'>
                <SideNav.List className='blue' title='Group Title'>
                    <SideNav.ListItem
                        id='item_1'>
                        <Link to='/'>
                            Link Item
                        </Link>
                    </SideNav.ListItem>
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
        </BrowserRouter>
    );

    const sideNavMultiLevel = <SideNav>{subSideNavList}</SideNav>;

    const sideNavWithIcons = (
        <BrowserRouter>
            <SideNav selectedId='item-2'>
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
        </BrowserRouter>
    );

    const sideNavCollapsed = (
        <SideNav icons>
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
        const wrapper = mount(sideNavMultiLevel).children().children();
        const Item2 = wrapper.find({ 'id': 'item_2' });
        const Item4 = wrapper.find({ 'id': 'item_4' });

        expect(Item2.state('expanded')).toBeFalsy();
        expect(Item4.state('expanded')).toBeFalsy();
        expect(wrapper.state('selectedId')).toBeFalsy();

        wrapper
            .find('.fd-side-nav__link')
            .at(1)
            .simulate('click');

        expect(Item2.state('expanded')).toBeTruthy();
        expect(Item4.state('expanded')).toBeFalsy();

        wrapper
            .find('.fd-side-nav__link')
            .at(3)
            .simulate('click');

        expect(Item2.state('expanded')).toBeTruthy();
        expect(Item4.state('expanded')).toBeTruthy();
    });

    test('handle side nav sub link click', () => {
        const wrapper = mount(sideNavMultiLevel).children().children();
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
    });

    describe('onItemSelect handler', () => {
        test('should dispatch the onItemSelect callback with the event', () => {
            let f = jest.fn();
            const mockedEvent = { target: {} };

            const element = mount(<SideNav data-sample='Sample' onItemSelect={f}>
                <SideNav.List>
                    <SideNav.ListItem
                        id='item-1'
                        name='Link Item 1'
                        url='#' />
                </SideNav.List>
            </SideNav>);

            element.find('#item-1 a').simulate('click', mockedEvent);

            expect(f).toHaveBeenCalledTimes(1);
            expect(f).toHaveBeenCalledWith(expect.objectContaining({ 'target': {} }), 'item-1');
        });
    });
});
