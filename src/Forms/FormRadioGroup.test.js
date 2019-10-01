import FormRadioGroup from './FormRadioGroup';
import FormRadioItem from './FormRadioItem';
import { mount } from 'enzyme';
import React from 'react';
import renderer from 'react-test-renderer';

describe('<FormRadioGroup />', () => {
    const formRadioGroup = (
        <FormRadioGroup
            className='blue'>
            <FormRadioItem
                id='radio-1'
                name='radio-group-5'
                value='radio-1'>
                Option 1
            </FormRadioItem>
            <FormRadioItem
                checked
                id='radio-2'
                name='radio-group-5'
                value='radio-2'>
                Option 2
            </FormRadioItem>
            <FormRadioItem
                id='radio-3'
                name='radio-group-5'
                value='radio-3'>
                Option 3
            </FormRadioItem>
        </FormRadioGroup>
    );

    test('create form radio group', () => {
        let component = renderer.create(formRadioGroup);
        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });

    describe('Prop spreading', () => {
        xtest('should allow props to be spread to the FormRadio component\'s input element', () => {
            // TODO: placeholder for this test description once that functionality is built
        });

        xtest('should allow props to be spread to the FormRadio component\'s label element', () => {
            // TODO: placeholder for this test description once that functionality is built
        });

        xtest('should allow props to be spread to the FormRadio component\'s input element for IsInline', () => {
            // TODO: placeholder for this test description once that functionality is built
        });

        xtest('should allow props to be spread to the FormRadio component\'s label element for IsInline', () => {
            // TODO: placeholder for this test description once that functionality is built
        });
    });

    describe('Radio Group Tests', () => {
        let setup = (props) => {
            return mount(<FormRadioGroup {...props}>
                <FormRadioItem>Option 1</FormRadioItem>
                <FormRadioItem>Option 2</FormRadioItem>
            </FormRadioGroup>);
        };

        test('should add disabled attribute to all children when disabled is passed', () => {
            let element = setup({
                disabled: true
            });

            const radioItems = element.find('input.fd-radio');

            expect(radioItems.at(0).props().disabled).toBeTruthy();
            expect(radioItems.at(1).props().disabled).toBeTruthy();
        });

        test('should add inline class to all children when inline is passed', () => {
            let element = setup({
                inline: true
            });

            const radioItems = element.find('.fd-form-item');

            expect(radioItems.at(0).hasClass('fd-form-item--inline')).toBeTruthy();
            expect(radioItems.at(1).hasClass('fd-form-item--inline')).toBeTruthy();
        });

        test('should trigger onChange from FormRadioGroup when FormRadioItem is clicked', () => {
            let mockCallback = jest.fn();
            let element = setup({
                onChange: mockCallback
            });

            element
                .find('input')
                .at(0)
                .simulate('change', { currentTarget: { value: 'radio-1' } });

            expect(mockCallback.mock.calls.length).toBe(1);
        });

        test('should allow props to be spread to the FormRadioGroup component', () => {
            const element = mount(<FormRadioGroup data-sample='Sample' />);

            expect(
                element.getDOMNode().attributes['data-sample'].value
            ).toBe('Sample');
        });
    });
});
