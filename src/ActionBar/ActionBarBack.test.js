import ActionBar from './ActionBar';
import { mount } from 'enzyme';
import React from 'react';

describe('ActionBarBack', () => {
    test('should allow props to be spread to the ActionBarBack component', () => {
        const element = mount(<ActionBar.Back data-sample='Sample' />);

        expect(
            element.getDOMNode().attributes['data-sample'].value
        ).toBe('Sample');
    });

    test('should allow props to be spread to the ActionBarBack component\'s button element', () => {

        const element = mount(<ActionBar.Back buttonProps={{ 'data-sample': 'Sample' }} />);

        expect(
            element.find('button').getDOMNode().attributes['data-sample'].value
        ).toBe('Sample');
    });
});

