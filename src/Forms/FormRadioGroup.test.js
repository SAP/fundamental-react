import FormRadioGroup from './FormRadioGroup';
import FormRadioItem from './FormRadioItem';
import { mount } from 'enzyme';
import React from 'react';

describe('<FormRadioGroup />', () => {
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
    });
});
