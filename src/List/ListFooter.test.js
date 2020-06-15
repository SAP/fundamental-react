import List from './List';
import { mount } from 'enzyme';
import React from 'react';

describe('<ListFooter />', () => {
    describe('Prop spreading', () => {
        test('should allow props to be spread to the ListFooter component', () => {
            const element = mount(<List.Footer data-sample='Sample' />);

            expect(
                element.getDOMNode().attributes['data-sample'].value
            ).toBe('Sample');
        });
    });
});
