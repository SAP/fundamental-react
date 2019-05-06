import ActionBar from './ActionBar';
import { mount } from 'enzyme';
import React from 'react';

describe('ActionBarActions', () => {
    test('should allow props to be spread to the ActionBarActions component', () => {
        const element = mount(<ActionBar.Actions data-sample='Sample' />);

        expect(
            element.getDOMNode().attributes['data-sample'].value
        ).toBe('Sample');
    });
});

