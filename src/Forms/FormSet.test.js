import FormSet from './FormSet';
import { mount } from 'enzyme';
import React from 'react';

describe('<FormSet Prop spreading', () => {
    test('should allow props to be spread to the FormSet component', () => {
        const element = mount(<FormSet data-sample='Sample' />);

        expect(
            element.getDOMNode().attributes['data-sample'].value
        ).toBe('Sample');
    });
});

