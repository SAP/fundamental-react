import List from './List';
import { mount } from 'enzyme';
import React from 'react';

describe('<ListText />', () => {
    describe('Prop spreading', () => {
        test('should allow props to be spread to the ListText component', () => {
            const element = mount(<List.Text data-sample='Sample' />);

            expect(
                element.getDOMNode().attributes['data-sample'].value
            ).toBe('Sample');
        });
    });
});
