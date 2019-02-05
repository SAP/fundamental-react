import { Link } from 'react-router-dom';
import { mount } from 'enzyme';
import React from 'react';
import renderer from 'react-test-renderer';
import { SideNavList } from './SideNavigation';

describe('<SideNavigation />', () => {
    const subSideNavList = (
        <SideNavList>
            <SideNavList.Item
                id='item_1'
                url='#'>
                        Link Item 1
            </SideNavList.Item>
            <SideNavList.Item
                id='item_2'
                url='#'>
                        Link Item 2
                <SideNavList.SubItems>
                    <SideNavList.Item
                        id='subitem_21'
                        url='#'>
                                Item 1
                    </SideNavList.Item>
                    <SideNavList.Item
                        id='subitem_22'
                        url='#'>
                                Item 2
                    </SideNavList.Item>
                    <SideNavList.Item
                        id='subitem_23'
                        url='#'>
                                Item 3
                    </SideNavList.Item>
                    <SideNavList.Item
                        id='subitem_24'
                        url='#'>
                                Item 4
                    </SideNavList.Item>
                </SideNavList.SubItems>
            </SideNavList.Item>
            <SideNavList.Item
                id='item_3'
                url='#'>
                        Link Item 3
            </SideNavList.Item>
            <SideNavList.Item
                id='item_4'
                url='#'>
                        Link Item 4
                <SideNavList.SubItems>
                    <SideNavList.Item
                        id='subitem_41'
                        url='#'>
                                Item 1
                    </SideNavList.Item>
                    <SideNavList.Item
                        id='subitem_41'
                        url='#'>
                                Item 2
                    </SideNavList.Item>
                    <SideNavList.Item
                        id='subitem_41'
                        url='#'>
                                Item 3
                    </SideNavList.Item>
                    <SideNavList.Item
                        id='subitem_41'
                        url='#'>
                                Item 4
                    </SideNavList.Item>
                </SideNavList.SubItems>
            </SideNavList.Item>
            <SideNavList.Item
                id='item_5'
                url='#'>
                        Link Item
            </SideNavList.Item>
        </SideNavList>
    );

    const oneLevelSideNav = (
        <SideNavList>
            <SideNavList.Item
                id='item_1'>
                <Link to='/'>
                    Link Item
                </Link>
            </SideNavList.Item>
            <SideNavList.Item
                id='item_2'>
                <Link to='/'>
                    Link Item
                </Link>
            </SideNavList.Item>
            <SideNavList.Item
                id='item_3'>
                <Link to='/'>
                    Link Item
                </Link>
            </SideNavList.Item>
            <SideNavList.Item
                id='item_4'>
                <Link to='/'>
                    Link Item
                </Link>
            </SideNavList.Item>
            <SideNavList.Item
                id='item_5'>
                <Link to='/'>
                    Link Item
                </Link>
            </SideNavList.Item>
        </SideNavList>
    );

    const sideNavWithTitle = (
        <SideNavList>
            <SideNavList.Group title='Group Title'>
                <SideNavList.Item
                    id='item_1'>
                    <Link to='/'>
                        Link Item
                    </Link>
                </SideNavList.Item>
                <SideNavList.Item
                    id='item_2'>
                    <Link to='/'>
                        Link Item
                    </Link>
                </SideNavList.Item>
                <SideNavList.Item
                    id='item_3'>
                    <Link to='/'>
                        Link Item
                    </Link>
                </SideNavList.Item>
                <SideNavList.Item
                    id='item_4'>
                    <Link to='/'>
                        Link Item
                    </Link>
                </SideNavList.Item>
                <SideNavList.Item
                    id='item_5'>
                    <Link to='/'>
                        Link Item
                    </Link>
                </SideNavList.Item>
            </SideNavList.Group>
            <SideNavList.Group title='Group Title'>
                <SideNavList.Item
                    id='item_6'>
                    <Link to='/'>
                        Link Item
                    </Link>
                </SideNavList.Item>
                <SideNavList.Item
                    id='item_7'>
                    <Link to='/'>
                        Link Item
                    </Link>
                </SideNavList.Item>
                <SideNavList.Item
                    id='item_8'>
                    <Link to='/'>
                        Link Item
                    </Link>
                </SideNavList.Item>
                <SideNavList.Item
                    id='item_9'>
                    <Link to='/'>
                        Link Item
                    </Link>
                </SideNavList.Item>
                <SideNavList.Item
                    id='item_10'>
                    <Link to='/'>
                        Link Item
                    </Link>
                </SideNavList.Item>
            </SideNavList.Group>
        </SideNavList>
    );

    const sideNavMultiLevel = <SideNavList>{subSideNavList}</SideNavList>;

    const sideNavWithIcons = (
        <SideNavList>
            <SideNavList.Item
                glyph='home'
                id='item-1'>
                <Link to='/'>
                    Link Item
                </Link>
            </SideNavList.Item>
            <SideNavList.Item
                glyph='home'
                id='item-2'>
                <Link to='/'>
                    Link Item
                </Link>
            </SideNavList.Item>
            <SideNavList.Item
                glyph='home'
                id='item-3'>
                <Link to='/'>
                    Link Item
                </Link>
            </SideNavList.Item>
            <SideNavList.Item
                glyph='home'
                id='item-4'
                url='#'>
                Link Item
            </SideNavList.Item>
            <SideNavList.Item
                glyph='home'
                id='item-5'
                url='#'>
                Link Item
            </SideNavList.Item>
        </SideNavList>
    );

    const sideNavCollapsed = (
        <SideNavList icons>
            <SideNavList.Item
                glyph='home'
                id='item-1'
                url='#' />
            <SideNavList.Item
                glyph='home'
                id='item-2'
                url='#' />
            <SideNavList.Item
                glyph='home'
                id='item-3'
                url='#' />
            <SideNavList.Item
                glyph='home'
                id='item-4'
                url='#' />
            <SideNavList.Item
                glyph='home'
                id='item-5'
                url='#' />
        </SideNavList>
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
        const wrapper = mount(subSideNavList);

        expect(wrapper.state('itemStates')).toEqual([
            { 'item-2': false },
            { 'item-4': false }
        ]);
        expect(wrapper.state('selectedItem')).toEqual('item_2');

        wrapper
            .find('.fd-side-nav__link')
            .at(1)
            .simulate('click');

        expect(wrapper.state('itemStates')).toEqual({
            '0': { 'item-2': false },
            '1': { 'item-4': false },
            'item-2': true
        });
        expect(wrapper.state('selectedItem')).toEqual('item-2');

        wrapper
            .find('.fd-side-nav__link')
            .at(4)
            .simulate('click');

        expect(wrapper.state('itemStates')).toEqual({
            '0': { 'item-2': false },
            '1': { 'item-4': false },
            'item-2': true,
            'item-4': true
        });
        expect(wrapper.state('selectedItem')).toEqual('item-4');
    });

    test('handle side nav sub link click', () => {
        const wrapper = mount(subSideNavList);
        wrapper
            .find('.fd-side-nav__sublink')
            .at(0)
            .simulate('click');

        expect(wrapper.state('itemStates')).toEqual([
            { 'item-2': false },
            { 'item-4': false }
        ]);

        wrapper
            .find('.fd-side-nav__sublink')
            .at(4)
            .simulate('click');

        expect(wrapper.state('itemStates')).toEqual([
            { 'item-2': false },
            { 'item-4': false }
        ]);
    });

    // describe('Prop spreading', () => {
    //     test('should allow props to be spread to the SideNav component', () => {
    //         const element = mount(<SideNav data-sample='Sample' />);

    //         expect(
    //             element.getDOMNode().attributes['data-sample'].value
    //         ).toBe('Sample');
    //     });

    //     test('should allow props to be spread to the SideNavList component', () => {
    //         const items = [
    //             { id: 'item-1', url: '#', name: 'Link Item 1' },
    //             { id: 'item-2', url: '#', name: 'Link Item 2' },
    //             { id: 'item-3', url: '#', name: 'Link Item 3' }
    //         ];
    //         const element = mount(<SideNavList data-sample='Sample' items={items} />);

    //         expect(
    //             element.getDOMNode().attributes['data-sample'].value
    //         ).toBe('Sample');
    //     });

    //     test('should allow props to be spread to the SideNavGroup component', () => {
    //         const element = mount(<SideNavGroup data-sample='Sample' title='test' />);

    //         expect(
    //             element.getDOMNode().attributes['data-sample'].value
    //         ).toBe('Sample');
    //     });

    //     test('should allow props to be spread to the SideNavGroup component\'s h1 element', () => {
    //         const element = mount(<SideNavGroup title='test' titleProps={{'data-sample': 'Sample'}} />);

    //         expect(
    //             element.find('h1').getDOMNode().attributes['data-sample'].value
    //         ).toBe('Sample');
    //     });
    // });
});
