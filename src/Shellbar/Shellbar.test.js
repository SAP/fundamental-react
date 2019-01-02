import React from 'react';
import renderer from 'react-test-renderer';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { Shellbar } from './Shellbar';
import { Menu, MenuList, MenuItem } from '../Menu/Menu';

Enzyme.configure({ adapter: new Adapter() });

describe('<Shellbar />', () => {
  const profile1 = {
    initials: 'JS',
    userName: 'John Snow',
    colorAccent: 8
  };

  const profileMenu = [
    {
      name: 'Settings',
      glyph: 'action-settings',
      size: 's',
      callback: () => alert('Settings selected!')
    },
    {
      name: 'Sign Out',
      glyph: 'log',
      size: 's',
      callback: () => alert('Sign Out selected!')
    }
  ];

  const simpleShellBar = (
      <Shellbar
          logo={
              <img
                  src='//unpkg.com/fiori-fundamentals/dist/images/sap-logo.png'
                  alt='SAP' />
      }
          productTitle='Corporate Portal'
          profile={profile1}
          profileMenu={profileMenu} />
  );

  const simpleShellBarWithClass = (
      <Shellbar
          className='blue'
          logo={
              <img
                  src='//unpkg.com/fiori-fundamentals/dist/images/sap-logo.png'
                  alt='SAP' />
      }
          productTitle='Corporate Portal'
          profile={profile1}
          profileMenu={profileMenu} />
  );

  const searchInput = {
    label: 'Search',
    placeholder: 'Enter a fruit',
    onSearch: function(searchTerm) {
      alert(`Search fired for ${searchTerm}`);
    },
    callback: () => alert('Search selected!')
  };

  const actions = [
    {
      glyph: 'settings',
      label: 'Settings',
      notificationCount: 5,
      callback: () => alert('Settings selected!'),
      menu: (
          <Menu>
              <MenuList>
                  <MenuItem url='/'>Option 1</MenuItem>
                  <MenuItem url='/'>Option 2</MenuItem>
                  <MenuItem url='/'>Option 3</MenuItem>
              </MenuList>
          </Menu>
      )
    }
  ];

  const notifications = {
    notificationCount: 2,
    label: 'Notifications',
    notificationsBody: (
        <Menu>
            <MenuList>
                <MenuItem url='/'>Notification 1</MenuItem>
                <MenuItem url='/'>Notification 2</MenuItem>
                <MenuItem url='/'>Notification 3</MenuItem>
            </MenuList>
        </Menu>
    ),
    noNotificationsBody: (
        <Menu>
            <MenuList>
                <MenuItem>There are no notifications</MenuItem>
            </MenuList>
        </Menu>
    ),
    callback: () => alert('Notification selected!')
  };

  const profile = {
    initials: 'JS',
    userName: 'John Snow',
    colorAccent: 8
  };

  const productMenu = [
    { name: 'Application A', callback: () => alert('Application A selected!') },
    { name: 'Application B', callback: () => alert('Application B selected!') },
    { name: 'Application C', callback: () => alert('Application C selected!') },
    { name: 'Application D', callback: () => alert('Application D selected!') }
  ];

  const productSwitcherList = [
    {
      title: 'Fiori Home',
      glyph: 'home',
      callback: () => alert('Fiori Home selected!')
    },
    {
      title: 'S/4 HANA Cloud',
      glyph: 'cloud',
      callback: () => alert('S/4 HANA Cloud selected!')
    }
  ];

  const productSwitcher = {
    label: 'Product Switcher'
  };

  const coPilotShell = (
      <Shellbar
          logoSAP
          productTitle='Corporate Portal'
          productMenu={productMenu}
          subtitle='Subtitle'
          copilot
          searchInput={searchInput}
          actions={actions}
          notifications={notifications}
          profile={profile}
          profileMenu={profileMenu}
          productSwitcher={productSwitcher}
          productSwitcherList={productSwitcherList} />
  );

  test('create shellbar', () => {
    let component = renderer.create(simpleShellBar);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();

    component = renderer.create(simpleShellBarWithClass);
    tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
