import React from 'react';
import renderer from 'react-test-renderer';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { MegaMenu, MegaMenuList, MegaMenuGroup } from './MegaMenu';

Enzyme.configure({ adapter: new Adapter() });

describe('<MegaMenu />', () => {
  const megaMenu = (
    <MegaMenu>
      <MegaMenuGroup title="Group Title">
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
      </MegaMenuGroup>
      <MegaMenuGroup title="Group Title">
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
      </MegaMenuGroup>
    </MegaMenu>
  );

  test('create mega menu', () => {
    const component = renderer.create(megaMenu);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
