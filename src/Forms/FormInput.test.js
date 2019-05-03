import FormInput from './FormInput';
import { mount } from 'enzyme';
import React from 'react';

describe('FormInput Prop spreading', () => {
    test('should allow props to be spread to the FormInput component', () => {
        const element = mount(<FormInput data-sample='Sample' />);

        expect(
            element.getDOMNode().attributes['data-sample'].value
        ).toBe('Sample');
    });
});
