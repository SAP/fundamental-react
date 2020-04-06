import ComboboxInput from './ComboboxInput';
import { mount } from 'enzyme';
import React from 'react';
import renderer from 'react-test-renderer';

describe('<ComboboxInput />', () => {
    const defaultOptions = [
        { key: '1', text: 'List Item 1' },
        { key: '2', text: 'List Item 2' },
        { key: '3', text: 'List Item 3' },
        { key: '4', text: 'List Item 4' }
    ];

    const defaultComboBoxInput = (
        <ComboboxInput
            options={defaultOptions}
            placeholder='Select Fruit' />
    );

    const compactComboBoxInput = (
        <ComboboxInput
            className='blue'
            compact
            options={defaultOptions}
            placeholder='Select Fruit' />
    );

    test('create combobox input', () => {
        // default combobox
        let component = renderer.create(defaultComboBoxInput);
        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();

        // compact combobox
        component = renderer.create(compactComboBoxInput);
        tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });

    describe('Prop spreading', () => {
        test('should allow props to be spread to the ComboboxInput component', () => {
            const element = mount(<ComboboxInput data-sample='Sample' options={defaultOptions} />);

            expect(
                element.find('.fd-input-group').getDOMNode().attributes['data-sample'].value
            ).toBe('Sample');
        });

        test('should allow props to be spread to the ComboboxInput component\'s Popover component', () => {
            const element = mount(<ComboboxInput options={defaultOptions} popoverProps={{ 'data-sample': 'Sample' }} />);

            expect(
                element.find('div.fd-popover').getDOMNode().attributes['data-sample'].value
            ).toBe('Sample');
        });

        test('should allow props to be spread to the ComboboxInput component\'s input element', () => {
            const element = mount(<ComboboxInput inputProps={{ 'data-sample': 'Sample' }} options={defaultOptions} />);

            expect(
                element.find('input').getDOMNode().attributes['data-sample'].value
            ).toBe('Sample');
        });

        test('should allow props to be spread to the ComboboxInput component\'s button element', () => {
            const element = mount(<ComboboxInput buttonProps={{ 'data-sample': 'Sample' }} options={defaultOptions} />);

            expect(
                element.find('button.sap-icon--navigation-down-arrow').getDOMNode().attributes['data-sample'].value
            ).toBe('Sample');
        });
    });

    describe('interaction', () => {
        let onSelect;
        let element;
        beforeEach(() => {
            onSelect = jest.fn();
            element = mount(
                <ComboboxInput onSelect={onSelect} options={defaultOptions} />
            );
            element.find('button').simulate('click');
        });

        afterEach(() => {
            let event = new MouseEvent('mousedown', {});
            document.dispatchEvent(event);
        });

        test('should call onSelect when the first checkbox option is clicked', () => {
            element.find('.fd-list__item').at(0).simulate('click');

            expect(onSelect).toHaveBeenCalledTimes(1);
            expect(onSelect).toHaveBeenCalledWith(expect.anything(), defaultOptions[0]);
        });

        test('should call onSelect when the second checkbox option is clicked', () => {
            element.find('.fd-list__item').at(1).simulate('click');

            expect(onSelect).toHaveBeenCalledTimes(1);
            expect(onSelect).toHaveBeenCalledWith(expect.anything(), defaultOptions[1]);
        });
    });

    test('forwards the ref', () => {
        let ref;
        class Test extends React.Component {
            constructor(props) {
                super(props);
                ref = React.createRef();
            }
            render = () => <ComboboxInput options={defaultOptions} ref={ref} />;
        }
        mount(<Test />);
        expect(ref.current.tagName).toEqual('BUTTON');
    });
});
