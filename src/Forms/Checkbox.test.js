import Checkbox from './Checkbox';
import { mount } from 'enzyme';
import React from 'react';
import renderer from 'react-test-renderer';

describe('<Checkbox />', () => {
    const checkbox = (
        <Checkbox value='Option 1' />
    );

    test('create checkbox', () => {
        // create form set with form inputs
        let component = renderer.create(checkbox);
        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });

    describe('Checkbox Tests', () => {
        let setup = (props) => {
            return mount(<Checkbox value='Label 1' {...props} />);
        };
        test('should add checked attribute when checked is passed', () => {
            let element = setup({
                checked: true,
                onChange: () => {}
            });

            expect(element.props().checked).toBe(true);
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
            const element = mount(<Checkbox data-sample='Sample' />);

            expect(
                element.find('.fd-form-item').getDOMNode().attributes['data-sample'].value
            ).toBe('Sample');
        });

        test('should allow props to be spread to the Checkbox component input', () => {
            const element = mount(<Checkbox inputProps={{ 'data-sample': 'Sample' }} />);

            expect(
                element.find('.fd-checkbox').getDOMNode().attributes['data-sample'].value
            ).toBe('Sample');
        });

        test('should allow props to be spread to the Checkbox component label', () => {
            const element = mount(<Checkbox labelProps={{ 'data-sample': 'Sample' }} />);

            expect(
                element.find('.fd-form-label').getDOMNode().attributes['data-sample'].value
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
            render = () => <Checkbox ref={ref} />;
        }
        mount(<Test />);

        expect(ref.current.tagName).toEqual('DIV');
        expect(ref.current.className).toEqual('fd-form-item');
    });
});
