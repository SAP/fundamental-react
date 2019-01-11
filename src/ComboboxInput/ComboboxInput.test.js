import { mount } from 'enzyme';
import React from 'react';
import renderer from 'react-test-renderer';
import { ComboboxInput } from './ComboboxInput';
import { Menu, MenuItem, MenuList } from '../Menu/Menu';

describe('<ComboboxInput />', () => {
    const defaultMenu = (
        <Menu>
            <MenuList>
                <MenuItem url='/'>Pear</MenuItem>
                <MenuItem url='/'>Strawberry</MenuItem>
                <MenuItem url='/'>Raspberry</MenuItem>
                <MenuItem url='/' isLink>
                    + New Item
                </MenuItem>
            </MenuList>
        </Menu>
    );

    const defaultComboBoxInput = (
        <ComboboxInput
            placeholder='Select Fruit'
            menu={defaultMenu} />
    );

    const compactComboBoxInput = (
        <ComboboxInput
            className='blue'
            placeholder='Select Fruit'
            compact
            menu={defaultMenu} />
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

        xtest('should allow props to be spread to the ComboboxInput component\'s Popover component', () => {
            // placeholder for this test description once that functionality is built
        });

        xtest('should allow props to be spread to the ComboboxInput component\'s input element', () => {
            // placeholder for this test description once that functionality is built
        });

        xtest('should allow props to be spread to the ComboboxInput component\'s button element', () => {
            // placeholder for this test description once that functionality is built
        });
    });
});
