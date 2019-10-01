import ComboboxInput from './ComboboxInput';
import Menu from '../Menu/Menu';
import { mount } from 'enzyme';
import React from 'react';
import renderer from 'react-test-renderer';

describe('<ComboboxInput />', () => {
    const defaultMenu = (
        <Menu>
            <Menu.List>
                <Menu.Item url='/'>Pear</Menu.Item>
                <Menu.Item url='/'>Strawberry</Menu.Item>
                <Menu.Item url='/'>Raspberry</Menu.Item>
                <Menu.Item isLink url='/'>
                    + New Item
                </Menu.Item>
            </Menu.List>
        </Menu>
    );

    const defaultComboBoxInput = (
        <ComboboxInput
            menu={defaultMenu}
            placeholder='Select Fruit' />
    );

    const compactComboBoxInput = (
        <ComboboxInput
            className='blue'
            compact
            menu={defaultMenu}
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
            const element = mount(<ComboboxInput data-sample='Sample' menu={defaultMenu} />);

            expect(
                element.getDOMNode().attributes['data-sample'].value
            ).toBe('Sample');
        });

        test('should allow props to be spread to the ComboboxInput component\'s Popover component', () => {
            const element = mount(<ComboboxInput menu={defaultMenu} popoverProps={{ 'data-sample': 'Sample' }} />);

            expect(
                element.find('div.fd-popover').getDOMNode().attributes['data-sample'].value
            ).toBe('Sample');
        });

        test('should allow props to be spread to the ComboboxInput component\'s input element', () => {
            const element = mount(<ComboboxInput inputProps={{ 'data-sample': 'Sample' }} menu={defaultMenu} />);

            expect(
                element.find('input').getDOMNode().attributes['data-sample'].value
            ).toBe('Sample');
        });

        test('should allow props to be spread to the ComboboxInput component\'s button element', () => {
            const element = mount(<ComboboxInput buttonProps={{ 'data-sample': 'Sample' }} menu={defaultMenu} />);

            expect(
                element.find('button.sap-icon--navigation-down-arrow').getDOMNode().attributes['data-sample'].value
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
            render = () => <ComboboxInput menu={defaultMenu} ref={ref} />;
        }
        mount(<Test />);
        expect(ref.current.tagName).toEqual('DIV');
    });
});
