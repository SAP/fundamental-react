import InputGroupAddon from './_InputGroupAddon';
import { mount } from 'enzyme';
import React from 'react';


describe('<InputGroupAddon />', () => {

    describe('Prop spreading', () => {
        test('should allow props to be spread to the InputGroupAddon component', () => {
            const element = mount(<InputGroupAddon data-sample='Sample' />);

            expect(
                element.getDOMNode().attributes['data-sample'].value
            ).toBe('Sample');
        });
    });
});
