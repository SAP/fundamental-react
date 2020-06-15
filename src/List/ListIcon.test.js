import List from './List';
import { mount } from 'enzyme';
import React from 'react';

describe('<ListIcon />', () => {
    describe('Prop spreading', () => {
        test('should allow props to be spread to the ListIcon component', () => {
            const element = mount(<List.Icon data-sample='Sample' glyph='accept' />);

            expect(
                element.getDOMNode().attributes['data-sample'].value
            ).toBe('Sample');
        });
    });
});
