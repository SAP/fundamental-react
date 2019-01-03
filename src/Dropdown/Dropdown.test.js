import React from 'react';
import renderer from 'react-test-renderer';
import { Dropdown } from './Dropdown';
import { Popover } from '../Popover/Popover';
import { Menu, MenuItem, MenuList } from '../Menu/Menu';
import { Button } from '../Button/Button';

describe('<Dropdown />', () => {
  const defaultDropdown = (
      <Dropdown>
          <Popover
              control={<Button dropdown>Select</Button>}
              noArrow
              body={
                  <Menu>
                      <MenuList>
                          <MenuItem url='/'>Option 1</MenuItem>
                          <MenuItem url='/'>Option 2</MenuItem>
                          <MenuItem url='/'>Option 3</MenuItem>
                          <MenuItem url='/'>Option 4</MenuItem>
                      </MenuList>
                  </Menu>
        } />
      </Dropdown>
  );

  const compactDropdown = (
      <Dropdown className='blue'>
          <Popover
              control={
                  <Button dropdown compact>
            Select
                  </Button>
        }
              noArrow
              body={
                  <Menu>
                      <MenuList>
                          <MenuItem url='/'>Option 1</MenuItem>
                          <MenuItem url='/'>Option 2</MenuItem>
                          <MenuItem url='/'>Option 3</MenuItem>
                          <MenuItem url='/'>Option 4</MenuItem>
                      </MenuList>
                  </Menu>
        } />
      </Dropdown>
  );

  const toolbarDropdown = (
      <Dropdown standard>
          <Popover
              control={
                  <Button dropdown type='standard'>
            Select
                  </Button>
        }
              noArrow
              body={
                  <Menu>
                      <MenuList>
                          <MenuItem url='/'>Option 1</MenuItem>
                          <MenuItem url='/'>Option 2</MenuItem>
                          <MenuItem url='/'>Option 3</MenuItem>
                          <MenuItem url='/'>Option 4</MenuItem>
                      </MenuList>
                  </Menu>
        } />
      </Dropdown>
  );

  const iconDropdown = (
      <Dropdown>
          <Popover
              id='jhqD0557'
              control={
                  <Button dropdown glyph='filter'>
            Select
                  </Button>
        }
              noArrow
              body={
                  <Menu>
                      <MenuList>
                          <MenuItem url='/'>Option 1</MenuItem>
                          <MenuItem url='/'>Option 2</MenuItem>
                          <MenuItem url='/'>Option 3</MenuItem>
                          <MenuItem url='/'>Option 4</MenuItem>
                      </MenuList>
                  </Menu>
        } />
      </Dropdown>
  );

  const disabledDropdown = (
      <Dropdown>
          <Popover
              id='jhqD0561'
              disabled
              control={
                  <Button dropdown glyph='filter'
                      disabled>
            Select
                  </Button>
        }
              noArrow
              body={
                  <Menu>
                      <MenuList>
                          <MenuItem url='/'>Option 1</MenuItem>
                          <MenuItem url='/'>Option 2</MenuItem>
                          <MenuItem url='/'>Option 3</MenuItem>
                          <MenuItem url='/'>Option 4</MenuItem>
                      </MenuList>
                  </Menu>
        } />
      </Dropdown>
  );

  test('create dropdown component', () => {
    // default dropdown
    let component = renderer.create(defaultDropdown);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();

    // compact dropdown
    component = renderer.create(compactDropdown);
    tree = component.toJSON();
    expect(tree).toMatchSnapshot();

    // toolbar dropdown
    component = renderer.create(toolbarDropdown);
    tree = component.toJSON();
    expect(tree).toMatchSnapshot();

    // icon dropdown
    component = renderer.create(iconDropdown);
    tree = component.toJSON();
    expect(tree).toMatchSnapshot();

    // disabled dropdown
    component = renderer.create(disabledDropdown);
    tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
