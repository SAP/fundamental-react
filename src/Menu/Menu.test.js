import React from 'react';
import renderer from 'react-test-renderer';
import { MemoryRouter } from 'react-router-dom';
import { Menu, MenuList, MenuItem, MenuGroup } from './Menu';

describe('<Menu />', () => {
  const basicMenuCode = (
      <Menu>
          <MenuList>
              <MenuItem url='/'>Option 1</MenuItem>
              <MenuItem url='/' isLink>
          Option 2
              </MenuItem>
              <MenuItem url='/'>Option 3</MenuItem>
              <MenuItem url='/'>Option 4</MenuItem>
              <MenuItem>Option 5</MenuItem>
          </MenuList>
      </Menu>
  );

  const menuGroupCode = (
      <MemoryRouter>
          <Menu className='blue'>
              <MenuList className='blue'>
                  <MenuItem link='/'>Option 1</MenuItem>
                  <MenuItem className='blue' link='/'
                      isLink>
            Option 2
                  </MenuItem>
                  <MenuItem link='/'>Option 3</MenuItem>
              </MenuList>
              <MenuGroup className='blue' title='Group Header'>
                  <MenuList>
                      <MenuItem link='/'>Option 4</MenuItem>
                      <MenuItem link='/'>Option 5</MenuItem>
                      <MenuItem link='/'>Option 6</MenuItem>
                  </MenuList>
              </MenuGroup>
              <MenuGroup title='Group Header 2'>
                  <MenuList>
                      <MenuItem link='/'>Option 7</MenuItem>
                      <MenuItem link='/'>Option 8</MenuItem>
                      <MenuItem link='/'>Option 9</MenuItem>
                  </MenuList>
              </MenuGroup>
          </Menu>
      </MemoryRouter>
  );

  const menuSeparatorCode = (
      <MemoryRouter>
          <Menu>
              <MenuList>
                  <MenuItem link='/' separator>
            Option 1
                  </MenuItem>
                  <MenuItem link='/' separator>
            Option 2
                  </MenuItem>
                  <MenuItem link='/' separator>
            Option 3
                  </MenuItem>
                  <MenuItem link='/'>Option 4</MenuItem>
              </MenuList>
          </Menu>
      </MemoryRouter>
  );

  const menuAddonBeforeCode = (
      <MemoryRouter>
          <Menu addonBefore>
              <MenuList>
                  <MenuItem link='/'>Option 1</MenuItem>
                  <MenuItem link='/' addon='accept'>
            Option 2
                  </MenuItem>
                  <MenuItem link='/'>Option 3</MenuItem>
                  <MenuItem link='/'>Option 4</MenuItem>
              </MenuList>
          </Menu>
      </MemoryRouter>
  );

  test('create basic menu component', () => {
    const component = renderer.create(basicMenuCode);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('create menu group component', () => {
    const component = renderer.create(menuGroupCode);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('create menu with separator component', () => {
    const component = renderer.create(menuSeparatorCode);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('create menu add-on component', () => {
    const component = renderer.create(menuAddonBeforeCode);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
