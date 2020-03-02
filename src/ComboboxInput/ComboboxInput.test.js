import ComboboxInput from './ComboboxInput';
import List from '../List/List';
import { mount } from 'enzyme';
import React from 'react';
import renderer from 'react-test-renderer';

describe('<ComboboxInput />', () => {
    const defaultList = (
        <List>
            <List.Item>
                <List.Text>List Item 1</List.Text>
            </List.Item>
            <List.Item>
                <List.Text>List Item 2</List.Text>
            </List.Item>
            <List.Item>
                <List.Text>List Item 3</List.Text>
            </List.Item>
            <List.Item>
                <List.Text>List Item 4</List.Text>
            </List.Item>
        </List>
    );

    const defaultComboBoxInput = (
        <ComboboxInput
            list={defaultList}
            placeholder='Select Fruit' />
    );

    const compactComboBoxInput = (
        <ComboboxInput
            className='blue'
            compact
            list={defaultList}
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
            const element = mount(<ComboboxInput data-sample='Sample' list={defaultList} />);

            expect(
                element.find('.fd-input-group').getDOMNode().attributes['data-sample'].value
            ).toBe('Sample');
        });

        test('should allow props to be spread to the ComboboxInput component\'s Popover component', () => {
            const element = mount(<ComboboxInput list={defaultList} popoverProps={{ 'data-sample': 'Sample' }} />);

            expect(
                element.find('div.fd-popover').getDOMNode().attributes['data-sample'].value
            ).toBe('Sample');
        });

        test('should allow props to be spread to the ComboboxInput component\'s input element', () => {
            const element = mount(<ComboboxInput inputProps={{ 'data-sample': 'Sample' }} list={defaultList} />);

            expect(
                element.find('input').getDOMNode().attributes['data-sample'].value
            ).toBe('Sample');
        });

        test('should allow props to be spread to the ComboboxInput component\'s button element', () => {
            const element = mount(<ComboboxInput buttonProps={{ 'data-sample': 'Sample' }} list={defaultList} />);

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
            render = () => <ComboboxInput list={defaultList} ref={ref} />;
        }
        mount(<Test />);
        expect(ref.current.tagName).toEqual('BUTTON');
    });
});
