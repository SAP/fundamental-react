import { mount } from 'enzyme';
import React from 'react';
import renderer from 'react-test-renderer';
import { SideNav } from '../';

describe('<SideNavListItem />', () => {
    const sideNavListItem = (
        <SideNav.ListItem
            id='subitem_41'
            name='Item 1'
            url='#' />
    );

    test('create side navigation', () => {
        let component = renderer.create(sideNavListItem);
        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });

    describe('Prop spreading', () => {
        test('should allow props to be spread to the SideNav.ListItem component', () => {
            const element = mount(<SideNav.ListItem data-sample='Sample' />);

            expect(
                element.getDOMNode().attributes['data-sample'].value
            ).toBe('Sample');
        });
    });
});
