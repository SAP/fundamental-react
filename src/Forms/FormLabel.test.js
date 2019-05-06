import FormLabel from './FormLabel';
import { mount } from 'enzyme';
import React from 'react';
import renderer from 'react-test-renderer';

describe('<FormLabel />', () => {
    const formLabel = (
        <FormLabel forAttr='input-1' required>
            Default Input
        </FormLabel>
    );

    test('create form label', () => {
        let component = renderer.create(formLabel);
        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });

    describe('Prop spreading', () => {
        test('should allow props to be spread to the FormLabel component', () => {
            const element = mount(<FormLabel data-sample='Sample' />);

            expect(
                element.getDOMNode().attributes['data-sample'].value
            ).toBe('Sample');
        });
    });
});
