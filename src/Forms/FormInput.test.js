import FormInput from './FormInput';
import { mount } from 'enzyme';
import React from 'react';
import renderer from 'react-test-renderer';

describe('<FormInput />', () => {
    const formInput = (
        <FormInput
            id='input-1'
            placeholder='Field placeholder text'
            state='warning'
            type='text' />
    );

    test('create form input item', () => {
        // create form set with form inputs
        let component = renderer.create(formInput);
        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });

    describe('Prop spreading', () => {
        test('should allow props to be spread to the FormInput component', () => {
            const element = mount(<FormInput data-sample='Sample' />);

            expect(
                element.getDOMNode().attributes['data-sample'].value
            ).toBe('Sample');
        });
    });
});
