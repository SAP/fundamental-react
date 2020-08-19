import Checkbox from './Checkbox';
import { mount } from 'enzyme';
import React from 'react';

describe('<Checkbox />', () => {

    describe('Checkbox Tests', () => {
        let setup = (props) => {
            return mount(<Checkbox value='Label 1' {...props}>Label</Checkbox>);
        };
        test('should add checked attribute when checked is passed', () => {
            let element = setup({
                checked: true,
                onChange: () => {}
            });

            expect(element.find('input').getDOMNode().checked).toBe(true);
        });

        test('should add checked attribute if defaultChecked is true', () => {
            let element = setup({
                defaultChecked: true,
                onChange: () => {}
            });

            expect(element.find('input').getDOMNode().checked).toBe(true);
        });

        test('should add indeterminate property when indeterminate is passed', () => {
            let element = setup({
                indeterminate: true,
                onChange: () => {}
            });

            expect(element.find('input').getDOMNode().indeterminate).toBe(true);
        });

        test('should set disabled to true when passed', () => {
            let element = setup({
                disabled: true
            });

            expect(element.find('input').getDOMNode().disabled).toBe(true);
        });

        test('should add inline class when inline is passed', () => {
            let element = setup({
                inline: true
            });

            expect(element.find('div').hasClass('fd-form-item--inline')).toBe(true);
        });

        test('should trigger onChange Checkbox is clicked', () => {
            let mockCallback = jest.fn();
            let element = setup({
                onChange: mockCallback
            });

            element
                .find('.fd-checkbox')
                .at(0)
                .simulate('change', { currentTarget: { value: 'checkbox-1' } });

            expect(mockCallback.mock.calls.length).toBe(1);
        });

        test('should allow props to be spread to the Checkbox component', () => {
            const element = mount(<Checkbox data-sample='Sample'>Label</Checkbox>);

            expect(
                element.find('.fd-form-item').getDOMNode().attributes['data-sample'].value
            ).toBe('Sample');
        });

        test('should allow props to be spread to the Checkbox component input', () => {
            const element = mount(<Checkbox inputProps={{ 'data-sample': 'Sample' }}>Label</Checkbox>);

            expect(
                element.find('.fd-checkbox').getDOMNode().attributes['data-sample'].value
            ).toBe('Sample');
        });

        test('should allow props to be spread to the Checkbox component label', () => {
            const element = mount(<Checkbox labelProps={{ 'data-sample': 'Sample' }}>Label</Checkbox>);

            expect(
                element.find('.fd-form-label').getDOMNode().attributes['data-sample'].value
            ).toBe('Sample');
        });

        test('should set className on FormItem', () => {
            const wrapper = setup({
                className: 'wonderful-styles'
            });

            expect(
                wrapper.find('FormItem').getDOMNode().classList
            ).toContain('wonderful-styles');
        });

        test('should set labelClassName on FormLabel', () => {
            const wrapper = setup({
                labelClassName: 'wonderful-styles'
            });

            expect(
                wrapper.find('FormLabel').getDOMNode().classList
            ).toContain('wonderful-styles');
        });
    });

    test('forwards the ref', () => {
        let ref;
        class Test extends React.Component {
            constructor(props) {
                super(props);
                ref = React.createRef();
            }
            render = () => <Checkbox ref={ref}>Label</Checkbox>;
        }
        mount(<Test />);

        expect(ref.current.tagName).toEqual('DIV');
        expect(ref.current.className).toEqual('fd-form-item');
    });
});
