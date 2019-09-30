import FormRadioItem from './FormRadioItem';
import { mount } from 'enzyme';
import React from 'react';
import renderer from 'react-test-renderer';

describe('<FormRadioItem />', () => {
    const formRadioItem = (
        <FormRadioItem
            id='radio-1'
            name='radio-group-1'
            value='radio-1'>
            Option 1
        </FormRadioItem>
    );

    test('create form radio item', () => {
        // create form set with form inputs
        let component = renderer.create(formRadioItem);
        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });

    describe('Radio Item Tests', () => {
        let setup = (props) => {
            return mount(<FormRadioItem {...props}>
                Label 1
            </FormRadioItem>);
        };
        test('should add checked attribute when checked is passed to FormRadioItem', () => {
            let element = setup({
                checked: true,
                onChange: () => {}
            });

            expect(element.props().checked).toBe(true);
        });

        test('should add checked attribute when defaultChecked is passed to FormRadioItem', () => {
            let element = setup({
                defaultChecked: true,
                onChange: () => {}
            });

            expect(element.props().defaultChecked).toBe(true);
        });

        test('should set disabled to true when passed', () => {
            let element = setup({
                disabled: true
            });

            expect(element.props().disabled).toBe(true);
        });

        test('should add inline class when inline is passed', () => {
            let element = setup({
                inline: true
            });

            expect(element.find('div').hasClass('fd-form-item--inline')).toBe(true);
        });

        test('should trigger onChange FormRadioItem is clicked', () => {
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

        test('should allow props to be spread to the FormRadioItem FormItem component', () => {
            const element = mount(<FormRadioItem data-sample='Sample'>Label</FormRadioItem>);

            expect(
                element.find('div').getDOMNode().attributes['data-sample'].value
            ).toBe('Sample');
        });
        test('should allow props to be spread to the FormRadioItem FormLabel component', () => {
            const element = mount(<FormRadioItem labelProps={{ 'data-sample': 'Sample' }}>Label</FormRadioItem>);

            expect(
                element.find('label').getDOMNode().attributes['data-sample'].value
            ).toBe('Sample');
        });
        test('should allow props to be spread to the FormRadioItem component', () => {
            const element = mount(<FormRadioItem inputProps={{ 'data-sample': 'Sample' }}>Label</FormRadioItem>);

            expect(
                element.find('input').getDOMNode().attributes['data-sample'].value
            ).toBe('Sample');
        });
    });
    test('forwards the ref', () => {
        let ref;
        class Test extends React.Component {
            constructor(props) {
                super(props);
                ref = React.createRef();
            }
            render = () => <FormRadioItem ref={ref}>foo</FormRadioItem>;
        }
        mount(<Test />);
        expect(ref.current.tagName).toEqual('INPUT');
        expect(ref.current.className).toEqual('fd-radio');
    });
});
