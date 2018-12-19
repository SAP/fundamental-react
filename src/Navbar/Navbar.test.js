import React from 'react';
import renderer from 'react-test-renderer';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { Navbar, NavbarGroup, NavbarActions, NavbarElement } from './Navbar';
import { Button } from '../Button/Button';
import { Popover } from '../Popover/Popover';
import { Menu, MenuList, MenuItem } from '../Menu/Menu';
import { Identifier } from '../Identifier/Identifier';

Enzyme.configure({ adapter: new Adapter() });

describe('<Navbar />', () => {
  const defaultNavBar = (
      <Navbar>
          <NavbarGroup alignment='left'>
              <NavbarElement type='side-menu'>
                  <Button option='light' glyph='menu2'
                      navbar />
              </NavbarElement>
              <NavbarElement type='logo' noMargin='left' />
              <NavbarElement type='product-name'>Product Name</NavbarElement>
          </NavbarGroup>

          <NavbarGroup launchpad>
              <Popover
                  control={<Button option='light'>Suite Name</Button>}
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
          }
        />
          </NavbarGroup>

          <NavbarGroup alignment='right'>
              <NavbarElement type='context-menu'>
                  <Popover
                      control={<Button option='light'>Context Switcher</Button>}
                      body={
                          <Menu>
                              <MenuList>
                                  <MenuItem url='/'>Option 1</MenuItem>
                                  <MenuItem url='/'>Option 2</MenuItem>
                                  <MenuItem url='/'>Option 3</MenuItem>
                                  <MenuItem url='/'>Option 4</MenuItem>
                              </MenuList>
                          </Menu>
            }
          />
              </NavbarElement>

              <NavbarActions>
                  <Button option='light' glyph='search'
                      navbar />
                  <Button option='light' glyph='action-settings'
                      navbar />
                  <Button option='light' navbar>
                      <Identifier size='s' modifier='circle'>
              WW
                      </Identifier>
                  </Button>
              </NavbarActions>
          </NavbarGroup>
      </Navbar>
  );
  test('create navbar', () => {
    const component = renderer.create(defaultNavBar);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
