import List from './List';
import { mount } from 'enzyme';
import React from 'react';

describe('<ListHeader />', () => {
    describe('Prop spreading', () => {
        test('should allow props to be spread to the ListHeader component', () => {
            const element = mount(<List.Header data-sample='Sample' />);

            expect(
                element.getDOMNode().attributes['data-sample'].value
            ).toBe('Sample');
        });
    });
});
