import { mount } from 'enzyme';
import React from 'react';
import renderer from 'react-test-renderer';
import { SideNav } from '../';

describe('<SideNavList />', () => {
    const sideNavList = (
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
    );

    test('create side navigation', () => {
        let component = renderer.create(sideNavList);
        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });

    describe('SideNavList', () => {
        test('should allow customization of header level', () => {
            const element = mount(<SideNav.List headingLevel={2} title='test' />);

            expect(
                element.find('.fd-side-nav__title').type()
            ).toBe('h2');
        });
    });

    describe('Prop spreading', () => {
        test('should allow props to be spread to the SideNavList component', () => {
            const element = mount(<SideNav.List data-sample='Sample'>
                <SideNav.ListItem
                    id='item-1'
                    name='Link Item 1'
                    url='#' />
                <SideNav.ListItem
                    id='item-2'
                    name='Link Item 2'
                    url='#' />
                <SideNav.ListItem
                    id='item-3'
                    name='Link Item 3'
                    url='#' />
            </SideNav.List>);

            expect(
                element.getDOMNode().attributes['data-sample'].value
            ).toBe('Sample');
        });

        test('should allow props to be spread to the SideNavList\'s heading element', () => {
            const element = mount(<SideNav.List title='test' titleProps={{ 'data-sample': 'Sample' }} />);

            expect(
                element.find('.fd-side-nav__title').getDOMNode().attributes['data-sample'].value
            ).toBe('Sample');
        });
    });
});
