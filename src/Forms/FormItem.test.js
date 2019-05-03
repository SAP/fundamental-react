import FormItem from './FormItem';
import { mount } from 'enzyme';
import React from 'react';

describe('FormItem Prop spreading', () => {
    test('should allow props to be spread to the FormItem component', () => {
        const element = mount(<FormItem data-sample='Sample' />);

        expect(
            element.getDOMNode().attributes['data-sample'].value
        ).toBe('Sample');
    });
});
