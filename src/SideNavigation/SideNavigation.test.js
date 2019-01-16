import { mount } from 'enzyme';
import React from 'react';
import renderer from 'react-test-renderer';
import { SideNav, SideNavGroup, SideNavList } from './SideNavigation';

describe('<SideNavigation />', () => {
    const subSideNavList = (
        <SideNavList
            items={[
                { id: 'item-1', url: '#', name: 'Link Item 1' },
                {
                    id: 'item-2',
                    url: '#',
                    name: 'Link Item 2',
                    hasChild: true,
                    child: [
                        { id: 'subitem-21', url: '#', name: 'Item 1' },
                        { id: 'subitem-22', url: '#', name: 'Item 2' },
                        { id: 'subitem-23', url: '#', name: 'Item 3' },
                        { id: 'subitem-24', url: '#', name: 'Item 4' },
                        { id: 'subitem-25', link: '/', name: 'Item 5' }
                    ]
                },
                { id: 'item-3', url: '#', name: 'Link Item 3' },
                {
                    id: 'item-4',
                    link: '/',
                    name: 'Link Item 4',
                    hasChild: true,
                    child: [
                        { id: 'subitem-41', url: '#', name: 'Item 1' },
                        { id: 'subitem-42', url: '#', name: 'Item 2' },
                        { id: 'subitem-43', url: '#', name: 'Item 3' },
                        { id: 'subitem-44', url: '#', name: 'Item 4' }
                    ]
                },
                { id: 'item-5', link: '/', name: 'Link Item' }
            ]} />
    );

    const oneLevelSideNav = (
        <SideNav>
            <SideNavList
                items={[
                    { id: 'item-1', url: '#', name: 'Link Item' },
                    { id: 'item-2', url: '#', name: 'Link Item' },
                    { id: 'item-3', url: '#', name: 'Link Item' },
                    { id: 'item-4', url: '#', name: 'Link Item' },
                    { id: 'item-5', url: '#', name: 'Link Item' }
                ]} />
        </SideNav>
    );

    const sideNavWithTitle = (
        <SideNav>
            <SideNavGroup className='blue' title='Group Title'>
                <SideNavList
                    className='blue'
                    items={[
                        { id: 'item_1', link: '/', name: 'Link Item' },
                        { id: 'item_2', link: '/', name: 'Link Item' },
                        { id: 'item_3', link: '/', name: 'Link Item' },
                        { id: 'item_4', link: '/', name: 'Link Item' },
                        { id: 'item_5', link: '/', name: 'Link Item' }
                    ]} />
            </SideNavGroup>
            <SideNavGroup title='Group Title'>
                <SideNavList
                    items={[
                        { id: 'item_6', link: '/', name: 'Link Item' },
                        { id: 'item_7', link: '/', name: 'Link Item' },
                        { id: 'item_8', link: '/', name: 'Link Item' },
                        { id: 'item_9', link: '/', name: 'Link Item' },
                        { id: 'item_10', link: '/', name: 'Link Item' }
                    ]} />
            </SideNavGroup>
        </SideNav>
    );

    const sideNavMultiLevel = <SideNav>{subSideNavList}</SideNav>;

    const sideNavWithIcons = (
        <SideNav>
            <SideNavList
                items={[
                    { id: 'item_1', link: '/', name: 'Link Item', glyph: 'home' },
                    { id: 'item_2', link: '/', name: 'Link Item', glyph: 'home' },
                    { id: 'item_3', link: '/', name: 'Link Item', glyph: 'home' },
                    { id: 'item_4', link: '/', name: 'Link Item', glyph: 'home' },
                    { id: 'item_5', link: '/', name: 'Link Item', glyph: 'home' }
                ]} />
        </SideNav>
    );

    const sideNavCollapsed = (
        <SideNav icons>
            <SideNavList
                items={[
                    { id: 'item-1', url: '#', glyph: 'home' },
                    { id: 'item-2', url: '#', glyph: 'home' },
                    { id: 'item-3', url: '#', glyph: 'home' },
                    { id: 'item-4', url: '#', glyph: 'home' },
                    { id: 'item-5', url: '#', glyph: 'home' }
                ]} />
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

    describe('Prop spreading', () => {
        xtest('should allow props to be spread to the SideNav component', () => {
            // TODO: placeholder for this test description once that functionality is built
            const element = mount(<SideNav data-sample='Sample' />);

            expect(
                element.getDOMNode().attributes['data-sample'].value
            ).toBe('Sample');
        });

        test('should allow props to be spread to the SideNavList component', () => {
            const items = [
                { id: 'item-1', url: '#', name: 'Link Item 1' },
                { id: 'item-2', url: '#', name: 'Link Item 2' },
                { id: 'item-3', url: '#', name: 'Link Item 3' }
            ];
            const element = mount(<SideNavList data-sample='Sample' items={items} />);

            expect(
                element.getDOMNode().attributes['data-sample'].value
            ).toBe('Sample');
        });

        test('should allow props to be spread to the SideNavGroup component', () => {
            const element = mount(<SideNavGroup data-sample='Sample' />);

            expect(
                element.getDOMNode().attributes['data-sample'].value
            ).toBe('Sample');
        });

        xtest('should allow props to be spread to the SideNavGroup component\'s h1 element', () => {
            // TODO: placeholder for this test description once that functionality is built
        });
    });
});
