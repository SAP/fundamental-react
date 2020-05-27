import List from './List';
import { mount } from 'enzyme';
import React from 'react';

describe('<ListByline />', () => {
    describe('Prop spreading', () => {
        test('should allow props to be spread to the ListByline component', () => {
            const element = mount(<List.Byline data-sample='Sample' />);

            expect(
                element.getDOMNode().attributes['data-sample'].value
            ).toBe('Sample');
        });
    });
});
