import List from './List';
import { mount } from 'enzyme';
import React from 'react';

describe('<ListSelection />', () => {
    describe('Prop spreading', () => {
        test('should allow props to be spread to the ListSelection component', () => {
            const element = mount(<List.Selection checkBoxAriaLabel='Select' data-sample='Sample' />);

            expect(
                element.getDOMNode().attributes['data-sample'].value
            ).toBe('Sample');
        });
    });
});
