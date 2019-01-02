import React from 'react';
import renderer from 'react-test-renderer';
import { ComboboxInput } from './ComboboxInput';
import { Menu, MenuItem, MenuList } from '../Menu/Menu';

describe('<ComboboxInput />', () => {
  const defaultComboBoxInput = (
      <ComboboxInput
          placeholder='Select Fruit'
          menu={
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
      } />
  );

  const compactComboBoxInput = (
      <ComboboxInput
          className='blue'
          placeholder='Select Fruit'
          compact
          menu={
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
      } />
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
});
