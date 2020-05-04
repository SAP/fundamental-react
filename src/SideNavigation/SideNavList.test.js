import { mount } from 'enzyme';
import React from 'react';
import { SideNav } from '../';

describe('<SideNavList />', () => {

    describe('SideNavList', () => {
        test('should allow customization of header level', () => {
            const element = mount(<SideNav.List title='test' />);

            expect(
                element.find('.fd-nested-list__group-header').type()
            ).toBe('li');
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
                element.find('.fd-nested-list').getDOMNode().attributes['data-sample'].value
            ).toBe('Sample');
        });

        test('should allow props to be spread to the SideNavList\'s heading element', () => {
            const element = mount(<SideNav.List title='test' titleProps={{ 'data-sample': 'Sample' }} />);

            expect(
                element.find('.fd-nested-list__group-header').getDOMNode().attributes['data-sample'].value
            ).toBe('Sample');
        });
    });
});
