import { mount } from 'enzyme';
import React from 'react';
import { SideNav } from '../';

describe('<SideNavListItem />', () => {

    describe('Prop spreading', () => {
        test('should allow props to be spread to the SideNav.ListItem component', () => {
            const element = mount(<SideNav.ListItem data-sample='Sample' />);

            expect(
                element.getDOMNode().attributes['data-sample'].value
            ).toBe('Sample');
        });
    });
});
