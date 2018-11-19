import React from 'react';
import renderer from 'react-test-renderer';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { MegaMenu, MegaMenuList, MegaMenuGroup } from './MegaMenu';

Enzyme.configure({ adapter: new Adapter() });

describe('<MegaMenu />', () => {
  const menuListURL = (
    <MegaMenuList
      items={[
        { id: 'item_1', url: '#', name: 'Link Item' },
        {
          id: 'item_2',
          url: '#',
          name: 'Link Item',
          hasChild: true,
          child: [
            { id: 'subitem_21', url: '#', name: 'Link' },
            { id: 'subitem_22', url: '#', name: 'Link' },
            { id: 'subitem_23', url: '#', name: 'Link' },
            { id: 'subitem_24', url: '#', name: 'Link' }
          ]
        },
        { id: 'item_3', url: '#', name: 'Link Item' },
        { id: 'item_4', url: '#', name: 'Link Item' }
      ]}
    />
  );
  const megaMenu = (
    <MegaMenu>
      <MegaMenuGroup title="Group Title">{menuListURL}</MegaMenuGroup>
    </MegaMenu>
  );

  const menuListLink = (
    <MegaMenuList
      items={[
        { id: 'item_6', link: '#', name: 'Link Item' },
        { id: 'item_7', link: '#', name: 'Link Item' },
        {
          id: 'item_8',
          link: '#',
          name: 'Link Item',
          hasChild: true,
          child: [
            { id: 'subitem_81', link: '#', name: 'Link' },
            { id: 'subitem_82', link: '#', name: 'Link' },
            { id: 'subitem_83', link: '#', name: 'Link' },
            { id: 'subitem_84', link: '#', name: 'Link' }
          ]
        },
        { id: 'item_9', link: '#', name: 'Link Item' }
      ]}
    />
  );

  const megaMenuLink = (
    <MegaMenu>
      <MegaMenuGroup title="Group Title">{menuListLink}</MegaMenuGroup>
    </MegaMenu>
  );

  test('create mega menu', () => {
    // mega menu with urls
    let component = renderer.create(megaMenu);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();

    // mega menu with links
    component = renderer.create(megaMenuLink);
    tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('click on menu item', () => {
    // url click on mega menu
    const urlWrapper = mount(menuListURL);
    urlWrapper
      .find('a.fd-mega-menu__link')
      .at(0)
      .simulate('click', [{}, { id: 3 }]);

    // sub url click on mega menu
    urlWrapper
      .find('a.fd-mega-menu__sublink')
      .at(0)
      .simulate('click', [{}, { id: 3 }]);

    console.log(urlWrapper.state('itemStates'));

    // link on mega menu
    const linkWrapper = mount(menuListLink);
    linkWrapper
      .find('a.fd-mega-menu__link')
      .at(0)
      .simulate('click', [{}, { id: 3 }]);

    // sub link on mega menu
    linkWrapper
      .find('a.fd-mega-menu__sublink')
      .at(0)
      .simulate('click', [{}, { id: 3 }]);
  });
});
